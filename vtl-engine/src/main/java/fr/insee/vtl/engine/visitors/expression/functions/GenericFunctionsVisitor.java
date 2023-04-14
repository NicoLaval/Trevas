package fr.insee.vtl.engine.visitors.expression.functions;

import fr.insee.vtl.engine.VtlScriptEngine;
import fr.insee.vtl.engine.exceptions.FunctionNotFoundException;
import fr.insee.vtl.engine.exceptions.InvalidArgumentException;
import fr.insee.vtl.engine.exceptions.VtlRuntimeException;
import fr.insee.vtl.engine.expressions.CastExpression;
import fr.insee.vtl.engine.expressions.FunctionExpression;
import fr.insee.vtl.engine.visitors.expression.ExpressionVisitor;
import fr.insee.vtl.model.Dataset;
import fr.insee.vtl.model.DatasetExpression;
import fr.insee.vtl.model.Positioned;
import fr.insee.vtl.model.ProcessingEngine;
import fr.insee.vtl.model.ResolvableExpression;
import fr.insee.vtl.model.Structured;
import fr.insee.vtl.model.exceptions.VtlScriptException;
import fr.insee.vtl.parser.VtlBaseVisitor;
import fr.insee.vtl.parser.VtlParser;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.tree.TerminalNode;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.time.Instant;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static fr.insee.vtl.engine.VtlScriptEngine.fromContext;

/**
 * <code>GenericFunctionsVisitor</code> is the base visitor for cast expressions.
 */
public class GenericFunctionsVisitor extends VtlBaseVisitor<ResolvableExpression> {

    private final VtlScriptEngine engine;
    private final ExpressionVisitor exprVisitor;

    /**
     * Constructor taking an expression visitor.
     *
     * @param expressionVisitor The visitor for the enclosing expression.
     * @param engine            The {@link VtlScriptEngine}.
     */
    public GenericFunctionsVisitor(ExpressionVisitor expressionVisitor, VtlScriptEngine engine) {
        this.engine = Objects.requireNonNull(engine);
        exprVisitor = Objects.requireNonNull(expressionVisitor);
    }

    /**
     * Method to map basic scalar types and classes.
     *
     * @param basicScalarType Basic scalar type.
     * @param basicScalarText Basic scalar text.
     */
    private static Class<?> getOutputClass(Integer basicScalarType, String basicScalarText) {
        switch (basicScalarType) {
            case VtlParser.STRING:
                return String.class;
            case VtlParser.INTEGER:
                return Long.class;
            case VtlParser.NUMBER:
                return Double.class;
            case VtlParser.BOOLEAN:
                return Boolean.class;
            case VtlParser.DATE:
                return Instant.class;
            default:
                throw new UnsupportedOperationException("basic scalar type " + basicScalarText + " unsupported");
        }
    }

    public ResolvableExpression invokeFunction(String funcName, List<ResolvableExpression> parameters, Positioned position) throws VtlScriptException {
        // TODO: Use parameters to find functions so we can override them.
        Optional<Method> method = engine.findMethod(funcName);
        if (method.isEmpty()) {
            throw new FunctionNotFoundException(funcName, position);
        }
        var parameterTypes = parameters.stream().map(ResolvableExpression::getType).collect(Collectors.toList());

        if (parameterTypes.stream().anyMatch(clazz -> clazz.equals(Dataset.class))) {

            ProcessingEngine proc = engine.getProcessingEngine();

            List<String> measureNames = null;
            List<String> measureToHandleNames = null;

            Map<String, DatasetExpression> dsToJoin = new LinkedHashMap<>();
            var expectedParameter = Arrays.asList(method.get().getParameterTypes()).iterator();
            Class expectedType = expectedParameter.next();
            for (ResolvableExpression parameter : parameters) {
                if (parameter instanceof DatasetExpression) {
                    var dsExpr = (DatasetExpression) parameter;

                    // TODO: handle all measures, when different ds input shapes
                    if (measureNames == null) {
                        measureNames = dsExpr.getDataStructure().values().stream()
                                .filter(Structured.Component::isMeasure)
                                .map(m -> m.getName())
                                .collect(Collectors.toList());
                    }
                    if (measureToHandleNames == null) {
                        measureToHandleNames = dsExpr.getDataStructure().values().stream()
                                .filter(Structured.Component::isMeasure)
                                .filter(c -> expectedType.isAssignableFrom(c.getType()))
                                .map(m -> m.getName())
                                .collect(Collectors.toList());

                    }
                    dsToJoin.put(
                            parameter.toString(),
                            dsExpr
                    );
                }
            }
            var identifiers = JoinFunctionsVisitor.checkSameIdentifiers(dsToJoin.values()).orElseThrow(() -> new VtlRuntimeException(
                    new InvalidArgumentException("datasets must have common identifiers", position)
            ));

            DatasetExpression tmpDs = proc.executeInnerJoin(renameDuplicates(identifiers, dsToJoin), identifiers);

            Map<String, ResolvableExpression> resolvableExpressions = new HashMap<>();
            Map<String, Dataset.Role> roles = new HashMap<>();
            List<String> parameterNames = parameters.stream().map(p -> p.toString()).collect(Collectors.toList());
            measureToHandleNames.stream().forEach(m -> {
                ResolvableExpression measureExpression = ResolvableExpression.withType(expectedType).withPosition(position).using(
                        context -> {
                            Map<String, Object> contextMap = (Map<String, Object>) context;
                            Object[] params = parameterNames.stream()
                                    .map(p -> {
                                        // TODO: check alias # conflict with membership
                                        if (contextMap.containsKey(p + "#" + m)) {
                                            return contextMap.get(p + "#" + m);
                                        }
                                        return contextMap.get(m);
                                    })
                                    .toArray();
                            try {
                                return expectedType.cast(method.get().invoke(null, params));
                            } catch (IllegalAccessException e) {
                                e.printStackTrace();
                            } catch (InvocationTargetException e) {
                                e.printStackTrace();
                            }
                            return null;
                        }
                );
                resolvableExpressions.put(m, measureExpression);
                roles.put(m, Dataset.Role.MEASURE);
            });
            tmpDs = proc.executeCalc(tmpDs, resolvableExpressions, roles, Map.of());
            List<String> identifierNames = identifiers.stream().map(i -> i.getName()).collect(Collectors.toList());
            List<String> toKeep = Stream.of(identifierNames, measureNames)
                    .flatMap(Collection::stream)
                    .collect(Collectors.toList());
            return proc.executeProject(tmpDs, toKeep);
        } else {
            return new FunctionExpression(method.get(), parameters, position);
        }
    }

    // TODO: This is copied from JoinFunctionVisitor.
    private Map<String, DatasetExpression> renameDuplicates(List<Structured.Component> identifiers,
                                                            Map<String, DatasetExpression> datasets) {
        Set<String> identifierNames = identifiers.stream().map(Structured.Component::getName).collect(Collectors.toSet());
        Set<String> duplicates = new LinkedHashSet<>();
        Set<String> uniques = new LinkedHashSet<>();
        for (DatasetExpression dataset : datasets.values()) {
            for (String name : dataset.getColumnNames()) {
                // Ignore identifiers.
                if (identifierNames.contains(name)) {
                    continue;
                }
                // Compute duplicates.
                if (!uniques.add(name)) {
                    duplicates.add(name);
                }
            }
        }

        // Use duplicates to rename columns
        Map<String, DatasetExpression> result = new LinkedHashMap<>();
        for (Map.Entry<String, DatasetExpression> entry : datasets.entrySet()) {
            var name = entry.getKey();
            var dataset = entry.getValue();
            Map<String, String> fromTo = new LinkedHashMap<>();
            for (String columnName : dataset.getColumnNames()) {
                if (duplicates.contains(columnName)) {
                    fromTo.put(columnName, name + "#" + columnName);
                }
            }
            result.put(name, this.engine.getProcessingEngine().executeRename(dataset, fromTo));
        }

        return result;
    }


    @Override
    public ResolvableExpression visitCallDataset(VtlParser.CallDatasetContext ctx) {
        // Strange name, this is the generic function syntax; fnName ( param, * ).
        try {
            List<ResolvableExpression> parameters = ctx.parameter().stream().
                    map(exprVisitor::visit)
                    .collect(Collectors.toList());
            return invokeFunction(ctx.operatorID().getText(), parameters, fromContext(ctx));
        } catch (VtlScriptException e) {
            throw new VtlRuntimeException(e);
        }
    }

    /**
     * Visits expressions with cast operators.
     *
     * @param ctx The scripting context for the expression.
     * @return A <code>ResolvableExpression</code> resolving to the result of the cast operation.
     */
    @Override
    public ResolvableExpression visitCastExprDataset(VtlParser.CastExprDatasetContext ctx) {
        ResolvableExpression expression = exprVisitor.visit(ctx.expr());
        TerminalNode maskNode = ctx.STRING_CONSTANT();
        // STRING_CONSTANT().getText return null or a string wrapped by quotes
        String mask = maskNode == null
                ? null
                : maskNode.getText().replaceAll("\"", "").replace("YYYY", "yyyy").replace("DD", "dd");
        Token symbol = ((TerminalNode) ctx.basicScalarType().getChild(0)).getSymbol();
        Integer basicScalarType = symbol.getType();
        String basicScalarText = symbol.getText();

        Class<?> outputClass = getOutputClass(basicScalarType, basicScalarText);

        if (Object.class.equals(expression.getType())) {
            return ResolvableExpression.withType(Object.class).withPosition(fromContext(ctx)).using(c -> null);
        }
        try {
            return new CastExpression(fromContext(ctx), expression, mask, outputClass);
        } catch (VtlScriptException e) {
            throw new VtlRuntimeException(e);
        }
    }
}
