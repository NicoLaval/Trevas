package fr.insee.vtl.model;

import java.util.*;
import java.util.function.BiConsumer;
import java.util.function.BinaryOperator;
import java.util.function.Function;
import java.util.function.Supplier;
import java.util.stream.Collector;
import java.util.stream.Collectors;

/**
 * The <code>AggregationExpression</code> class is an abstract representation of an aggregation expression.
 */
public class AggregationExpression implements Collector<Structured.DataPoint, Object, Object>, TypedExpression {

    private final Collector<Structured.DataPoint, ?, ?> aggregation;
    private final Class<?> type;

    /**
     * Constructor taking a collector of data points and an intended type for the aggregation results.
     *
     * @param aggregation Collector of data points.
     * @param type        Expected type for aggregation results.
     */
    public AggregationExpression(Collector<Structured.DataPoint, ?, ? extends Object> aggregation, Class<?> type) {
        this.aggregation = aggregation;
        this.type = type;
    }

    /**
     * Returns an aggregation expression that counts data points and returns a long integer.
     *
     * @return The counting expression.
     */
    public static AggregationExpression count() {
        return withType(Collectors.counting(), Long.class);
    }

    /**
     * Returns an aggregation expression that averages an expression on data points and returns a double number.
     *
     * @param expression The expression on data points.
     * @return The averaging expression.
     */
    public static AggregationExpression avg(ResolvableExpression expression) {
        if (Long.class.equals(expression.getType())) {
            return withExpression(expression, Collectors.averagingLong(value -> (Long) value), Double.class);
        } else if (Double.class.equals(expression.getType())) {
            return withExpression(expression, Collectors.averagingDouble(value -> (Double) value), Double.class);
        } else {
            // TODO: Support more types or throw a proper error.
            throw new Error();
        }
    }

    /**
     * Returns an aggregation expression that sums an expression on data points and returns a long integer or double number.
     *
     * @param expression The expression on data points.
     * @return The summing expression.
     */
    public static AggregationExpression sum(ResolvableExpression expression) {
        if (Long.class.equals(expression.getType())) {
            return withExpression(expression, Collectors.summingLong(value -> (Long) value), Long.class);
        } else if (Double.class.equals(expression.getType())) {
            return withExpression(expression, Collectors.summingDouble(value -> (Double) value), Double.class);
        } else {
            // TODO: Support more types or throw a proper error.
            throw new Error();
        }
    }

    /**
     * Returns an aggregation expression that give median of an expression on data points and returns a double number.
     *
     * @param expression The expression on data points.
     * @return The median expression.
     */
    public static AggregationExpression median(ResolvableExpression expression) {
        if (Long.class.equals(expression.getType())) {
            return withExpression(expression, Collectors.mapping(v -> (Long) v, medianCollectorLong()), Double.class);
        } else if (Double.class.equals(expression.getType())) {
            return withExpression(expression, Collectors.mapping(v -> (Double) v, medianCollectorDouble()), Double.class);
        } else {
            // TODO: Support more types or throw a proper error.
            throw new Error();
        }
    }

    /**
     * Returns an aggregation expression that give max of an expression on data points and returns a long integer or double number.
     *
     * @param expression The expression on data points.
     * @return The max expression.
     */
    public static AggregationExpression max(ResolvableExpression expression) {
        if (Long.class.equals(expression.getType())) {
            Collector<Long, ?, Optional<Long>> maxBy = Collectors.maxBy(Comparator.nullsFirst(Comparator.naturalOrder()));
            Collector<Object, ?, Optional<Long>> mapping = Collectors.mapping(v -> (Long) v, maxBy);
            Collector<Object, ?, Long> res = Collectors.collectingAndThen(mapping, v -> v.orElse(null));
            return withExpression(expression, res, Long.class);
        } else if (Double.class.equals(expression.getType())) {
            Collector<Double, ?, Optional<Double>> maxBy = Collectors.maxBy(Comparator.nullsFirst(Comparator.naturalOrder()));
            Collector<Object, ?, Optional<Double>> mapping = Collectors.mapping(v -> (Double) v, maxBy);
            Collector<Object, ?, Double> res = Collectors.collectingAndThen(mapping, v -> v.orElse(null));
            return withExpression(expression, res, Double.class);
        } else {
            throw new Error();
        }
    }

    /**
     * Returns an aggregation expression that give min of an expression on data points and returns a long integer or double number.
     *
     * @param expression The expression on data points.
     * @return The min expression.
     */
    public static AggregationExpression min(ResolvableExpression expression) {
        if (Long.class.equals(expression.getType())) {
            Collector<Long, ?, Optional<Long>> maxBy = Collectors.minBy(Comparator.nullsFirst(Comparator.naturalOrder()));
            Collector<Object, ?, Optional<Long>> mapping = Collectors.mapping(v -> (Long) v, maxBy);
            Collector<Object, ?, Long> res = Collectors.collectingAndThen(mapping, v -> v.orElse(null));
            return withExpression(expression, res, Long.class);
        } else if (Double.class.equals(expression.getType())) {
            Collector<Double, ?, Optional<Double>> maxBy = Collectors.minBy(Comparator.nullsFirst(Comparator.naturalOrder()));
            Collector<Object, ?, Optional<Double>> mapping = Collectors.mapping(v -> (Double) v, maxBy);
            Collector<Object, ?, Double> res = Collectors.collectingAndThen(mapping, v -> v.orElse(null));
            return withExpression(expression, res, Double.class);
        } else {
            throw new Error();
        }
    }

    /**
     * Returns an aggregation expression based on a data point collector and an expected type.
     *
     * @param collector The data point collector.
     * @param type      The expected type of the aggregation expression results.
     * @return The aggregation expression.
     */
    public static AggregationExpression withType(Collector<Structured.DataPoint, ?, ?> collector, Class<?> type) {
        return new AggregationExpression(collector, type);
    }

    /**
     * Returns an aggregation expression based on an input expression, a data point collector and an expected type.
     * The input expression is applied to each data point before it is accepted by the data point collector.
     *
     * @param expression The input resolvable expression.
     * @param collector  The data point collector.
     * @param type       The expected type of the aggregation expression results.
     * @return The resolvable expression.
     */
    public static <T> AggregationExpression withExpression(ResolvableExpression expression, Collector<Object, ?, T> collector, Class<T> type) {
        return new AggregationExpression(Collectors.mapping(new Function<Structured.DataPoint, Object>() {
            @Override
            public Object apply(Structured.DataPoint dataPoint) {
                return expression.resolve(dataPoint);
            }
        }, collector), type);
    }

    @Override
    public Class<?> getType() {
        return type;
    }

    @Override
    public Supplier<Object> supplier() {
        return (Supplier<Object>) aggregation.supplier();
    }

    @Override
    public BiConsumer<Object, Structured.DataPoint> accumulator() {
        return (BiConsumer<Object, Structured.DataPoint>) aggregation.accumulator();
    }

    @Override
    public BinaryOperator<Object> combiner() {
        return (BinaryOperator<Object>) aggregation.combiner();
    }

    @Override
    public Function<Object, Object> finisher() {
        return (Function<Object, Object>) aggregation.finisher();
    }

    @Override
    public Set<Characteristics> characteristics() {
        return aggregation.characteristics();
    }

    private static Collector<Long, List<Long>, Double> medianCollectorLong() {
        return Collector.of(
                ArrayList::new,
                List::add,
                (longs, longs2) -> {
                    longs.addAll(longs2);
                    return longs;
                },
                longs -> {
                    Collections.sort(longs);
                    if (longs.size() % 2 == 0) {
                        return (double) (longs.get(longs.size() / 2 - 1) + longs.get(longs.size() / 2)) / 2;
                    } else {
                        return (double) longs.get(longs.size() / 2);
                    }
                }
        );
    }

    private static Collector<Double, List<Double>, Double> medianCollectorDouble() {
        return Collector.of(
                ArrayList::new,
                List::add,
                (longs, longs2) -> {
                    longs.addAll(longs2);
                    return longs;
                },
                longs -> {
                    Collections.sort(longs);
                    if (longs.size() % 2 == 0) {
                        return (longs.get(longs.size() / 2 - 1) + longs.get(longs.size() / 2)) / 2;
                    } else {
                        return longs.get(longs.size() / 2);
                    }
                }
        );
    }

}
