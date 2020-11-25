package fr.insee.vtl.spark;

import fr.insee.vtl.model.ResolvableExpression;
import org.apache.spark.api.java.function.FilterFunction;
import org.apache.spark.sql.Row;

public class SparkFilterFunction implements FilterFunction<Row> {

    private final ResolvableExpression expression;

    public SparkFilterFunction(ResolvableExpression expression) {
        this.expression = expression;
    }

    @Override
    public boolean call(Row row) {
        return (boolean) expression.resolve(new SparkRowMap(row));
    }
}
