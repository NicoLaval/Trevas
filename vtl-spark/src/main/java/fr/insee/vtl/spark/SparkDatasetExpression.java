package fr.insee.vtl.spark;

import fr.insee.vtl.model.DatasetExpression;
import fr.insee.vtl.model.Structured;

import java.util.Map;
import java.util.Objects;

/**
 * The <code>SparkDatasetExpression</code> class represents a VTL dataset expression involving a Spark dataset.
 */
public class SparkDatasetExpression extends DatasetExpression {

    private final SparkDataset dataset;

    /**
     * Constructor taking a {@link SparkDataset}.
     *
     * @param dataset The Spark dataset used in the expression.
     */
    public SparkDatasetExpression(SparkDataset dataset) {
        super(() -> {throw new UnsupportedOperationException("TODO");});
        this.dataset = Objects.requireNonNull(dataset);
    }

    @Override
    public SparkDataset resolve(Map<String, Object> context) {
        return dataset;
    }

    @Override
    public Structured.DataStructure getDataStructure() {
        return dataset.getDataStructure();
    }
}
