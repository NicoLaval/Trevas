"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[2046],{84643:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/trevas-temporal-operators","metadata":{"permalink":"/Trevas/blog/trevas-temporal-operators","source":"@site/blog/2024-06-07-temporal-operators.mdx","title":"Trevas - Temporal operators","description":"Temporal operators in Trevas","date":"2024-06-07T00:00:00.000Z","formattedDate":"June 7, 2024","tags":[{"label":"Trevas","permalink":"/Trevas/blog/tags/trevas"}],"readingTime":2.845,"hasTruncateMarker":false,"authors":[{"name":"Hadrien Kohl","link":"https://github.com/hadrienk","title":"Hadrien Kohl Consulting - Developer","image":"/img/profile_pic_hadrien_kohl.jpg","key":"hadrien"}],"frontMatter":{"slug":"/trevas-temporal-operators","title":"Trevas - Temporal operators","authors":["hadrien"],"tags":["Trevas"]},"nextItem":{"title":"Trevas - SDMX","permalink":"/Trevas/blog/trevas-sdmx"}},"content":"### Temporal operators in Trevas\\n\\nThe version 1.4.0 of Trevas introduces preliminary support for date and time types\\nand operators.\\n\\nThe specification describes temporal types such as `date`, `time_period`, `time`, and `duration`. However, Trevas authors find\\nthese descriptions unsatisfactory. This blog post outlines our implementation choices and how they differ from the spec.\\n\\nIn the specification, `time_period` (and the types `date`) is described as a compound type with a start and end (or a\\nstart and a duration). This complicates the implementation and brings little value to the language as one can simply\\noperate on a combination of dates or date and duration directly. For this reason, we defined an algebra between the\\ntemporal types and did not yet implement the `time_period`.\\n\\n| result (operators) | date        | duration        | number        |\\n| ------------------ | ----------- | --------------- | ------------- |\\n| **date**           | n/a         | date (+, -)     | n/a           |\\n| **duration**       | date (+, -) | duration (+, -) | duration (\\\\*) |\\n| **number**         | n/a         | duration (\\\\*)   | n/a           |\\n\\nThe `period_indicator` function relies on period-awareness for types that are not defined enough at the moment to\\nbe implemented.\\n\\n#### Java mapping\\n\\nThe VTL type `date` is represented internally as the\\ntypes [`java.time.Instant`](https://docs.oracle.com/en%2Fjava%2Fjavase%2F11%2Fdocs%2Fapi%2F%2F/java.base/java/time/Instant.html),\\n[`java.time.ZonedDateTime`](https://docs.oracle.com/en%2Fjava%2Fjavase%2F11%2Fdocs%2Fapi%2F%2F/java.base/java/time/ZonedDateTime.html)\\nand [`java.time.OffsetDateTime`](https://docs.oracle.com/en%2Fjava%2Fjavase%2F11%2Fdocs%2Fapi%2F%2F/java.base/java/time/OffsetDateTime.html#:~:text=OffsetDateTime%20is%20an%20immutable%20representation,be%20stored%20in%20an%20OffsetDateTime%20.)\\n\\nInstant represent a specific moment in time. Note that this type does not include timezone information and is therefore\\nnot usable with all the operators. One can use the types `ZonedDateTime` and `OffsetDateTime` when timezone or time\\nsaving is required.\\n\\nThe VTL type `duration` is represented internally as the\\ntype [`org.threeten.extra.PeriodDuration`](https://www.threeten.org/threeten-extra/apidocs/org.threeten.extra/org/threeten/extra/PeriodDuration.html)\\nfrom the [threeten extra](https://www.threeten.org/threeten-extra/) package.\\nIt represents a duration using both calendar units (years, months, days) and a temporal amount (hours, minutes, seconds\\nand nanoseconds).\\n\\n#### Function `flow_to_stock`\\n\\nThe flow_to_stock function converts a data set with flow interpretation into a stock interpretation. This transformation\\nis useful when you want to aggregate flow data (e.g., sales or production rates) into cumulative stock data (e.g., total\\ninventory).\\n\\n**Syntax:**\\n\\n`result := flow_to_stock(op)`\\n\\n**Parameters:**\\n\\n- `op` - The input data set with flow interpretation. The data set must have an identifier of type `time`, additional\\n  identifiers, and at least one measure of type `number`.\\n\\n**Result:**\\n\\nThe function returns a data set with the same structure as the input, but with the values converted to stock\\ninterpretation.\\n\\n#### Function `stock_to_flow`\\n\\nThe `stock_to_flow` function converts a data set with stock interpretation into a flow interpretation. This\\ntransformation is useful when you want to derive flow data from cumulative stock data.\\n\\n**Syntax:**\\n\\n`result := stock_to_flow(op)`\\n\\n**Parameters:**\\n\\n- `op` - The input data set with stock interpretation. The data set must have an identifier of type `time`, additional\\n  identifiers, and at least one measure of type `number`.\\n\\n**Result:**\\n\\nThe function returns a data set with the same structure as the input, but with the values converted to flow\\ninterpretation.\\n\\n#### Function `timeshift`\\n\\nThe `timeshift` function shifts the time component of a specified range of time in the data set. This is useful for\\nanalyzing data at different time offsets, such as comparing current values to past values.\\n\\n**Syntax:**\\n\\n`result := timeshift(op, shiftNumber)`\\n\\n**Parameters:**\\n\\n- `op` - The operand data set containing time series.\\n- `shiftNumber` - An integer representing the number of periods to shift. Positive values shift forward in time, while\\n  negative values shift backward.\\n\\n**Result:**\\n\\nThe function returns a data set with the time identifiers shifted by the specified number of periods."},{"id":"/trevas-sdmx","metadata":{"permalink":"/Trevas/blog/trevas-sdmx","source":"@site/blog/2024-06-07-trevas-sdmx.mdx","title":"Trevas - SDMX","description":"News","date":"2024-06-07T00:00:00.000Z","formattedDate":"June 7, 2024","tags":[{"label":"Trevas","permalink":"/Trevas/blog/tags/trevas"},{"label":"SDMX","permalink":"/Trevas/blog/tags/sdmx"}],"readingTime":2.44,"hasTruncateMarker":false,"authors":[{"name":"Nicolas Laval","link":"https://github.com/NicoLaval","title":"Making Sense - Developer","image":"/img/profile_pic_nicolas_laval.jpg","key":"nicolas"}],"frontMatter":{"slug":"/trevas-sdmx","title":"Trevas - SDMX","authors":["nicolas"],"tags":["Trevas","SDMX"]},"prevItem":{"title":"Trevas - Temporal operators","permalink":"/Trevas/blog/trevas-temporal-operators"},"nextItem":{"title":"Trevas - Java 17","permalink":"/Trevas/blog/trevas-java-17"}},"content":"import useBaseUrl from \'@docusaurus/useBaseUrl\';\\nimport ThemedImage from \'@theme/ThemedImage\';\\n\\n### News\\n\\nTrevas 1.4.0 introduces the VTL SDMX module.\\n\\nThis module enables to consume SDMX metadata sources to instantiate Trevas DataStructures and Datasets.\\n\\nIt also allows to execute the VTL TransformationSchemes to obtain the resulting persistent datasets.\\n\\n#### Overview\\n\\n<div style={{ textAlign: \'center\' }}>\\n\\t<ThemedImage\\n\\t\\talt=\\"VTL SDMX Diagram\\"\\n\\t\\tsources={{\\n\\t\\t\\tlight: useBaseUrl(\'/img/vtl-sdmx-light.svg\'),\\n\\t\\t\\tdark: useBaseUrl(\'/img/vtl-sdmx-dark.svg\'),\\n\\t\\t}}\\n\\t/>\\n</div>\\n\\nTrevas supports the above SDMX message elements. Only the VtlMappingSchemes attribute is optional.\\n\\nThe elements in box 1 are used to produce Trevas DataStructures, filling VTL components attributes name, role, type, nullable and valuedomain.\\n\\nThe elements in box 2 are used to generate the VTL code (rulesets & transformations).\\n\\n#### Tools available\\n\\n#### `buildStructureFromSDMX3` utility\\n\\n`TrevasSDMXUtils.buildStructureFromSDMX3` allows to obtain a Trevas DataStructure.\\n\\nProviding corresponding data, you can build a Trevas Dataset.\\n\\n```java\\nStructured.DataStructure structure = TrevasSDMXUtils.buildStructureFromSDMX3(\\"path/sdmx_file.xml\\", \\"STRUCT_ID\\");\\n\\nSparkDataset ds = new SparkDataset(\\n        spark.read()\\n                .option(\\"header\\", \\"true\\")\\n                .option(\\"delimiter\\", \\";\\")\\n                .option(\\"quote\\", \\"\\\\\\"\\")\\n                .csv(\\"path\\"),\\n        structure\\n);\\n```\\n\\n#### `SDMXVTLWorkflow` object\\n\\nThe `SDMXVTLWorkflow` constructor takes 3 arguments:\\n\\n- a `ScriptEngine` (Trevas or another)\\n- a `ReadableDataLocation` to handle an SDMX message\\n- a map of names / Datasets\\n\\n```java\\nSparkSession.builder()\\n                .appName(\\"test\\")\\n                .master(\\"local\\")\\n                .getOrCreate();\\n\\nScriptEngineManager mgr = new ScriptEngineManager();\\nScriptEngine engine = mgr.getEngineByExtension(\\"vtl\\");\\nengine.put(VtlScriptEngine.PROCESSING_ENGINE_NAMES, \\"spark\\");\\n\\nReadableDataLocation rdl = new ReadableDataLocationTmp(\\"src/test/resources/DSD_BPE_CENSUS.xml\\");\\n\\nSDMXVTLWorkflow sdmxVtlWorkflow = new SDMXVTLWorkflow(engine, rdl, Map.of());\\n```\\n\\nThis object then allows you to activate the following 3 functions.\\n\\n#### SDMXVTLWorkflow `run` function - Preview mode\\n\\nThe `run` function can easily be called in a preview mode, without attached data.\\n\\n```java\\nScriptEngineManager mgr = new ScriptEngineManager();\\nScriptEngine engine = mgr.getEngineByExtension(\\"vtl\\");\\nengine.put(VtlScriptEngine.PROCESSING_ENGINE_NAMES, \\"spark\\");\\n\\nReadableDataLocation rdl = new ReadableDataLocationTmp(\\"src/test/resources/DSD_BPE_CENSUS.xml\\");\\n\\nSDMXVTLWorkflow sdmxVtlWorkflow = new SDMXVTLWorkflow(engine, rdl, Map.of());\\n\\n// instead of using TrevasSDMXUtils.buildStructureFromSDMX3 and data sources\\n// to build Trevas Datasets, sdmxVtlWorkflow.getEmptyDatasets()\\n// will handle SDMX message structures to produce Trevas Datasets\\n// with metadata defined in this message, and adding empty data\\nMap<String, Dataset> emptyDatasets = sdmxVtlWorkflow.getEmptyDatasets();\\nengine.getBindings(ScriptContext.ENGINE_SCOPE).putAll(emptyDatasets);\\n\\nMap<String, PersistentDataset> result = sdmxVtlWorkflow.run();\\n```\\n\\nThe preview mode allows to check the conformity of the SDMX file and the metadata of the output datasets.\\n\\n#### SDMXVTLWorkflow `run` function\\n\\nOnce an `SDMXVTLWorkflow` is built, it is easy to run the VTL validations and transformations defined in the SDMX file.\\n\\n```java\\nStructured.DataStructure structure = TrevasSDMXUtils.buildStructureFromSDMX3(\\"path/sdmx_file.xml\\", \\"ds1\\");\\n\\nSparkDataset ds1 = new SparkDataset(\\n        spark.read()\\n                .option(\\"header\\", \\"true\\")\\n                .option(\\"delimiter\\", \\";\\")\\n                .option(\\"quote\\", \\"\\\\\\"\\")\\n                .csv(\\"path/data.csv\\"),\\n        structure\\n);\\n\\nScriptEngineManager mgr = new ScriptEngineManager();\\nScriptEngine engine = mgr.getEngineByExtension(\\"vtl\\");\\nengine.put(VtlScriptEngine.PROCESSING_ENGINE_NAMES, \\"spark\\");\\n\\nMap<String, Dataset> inputs = Map.of(\\"ds1\\", ds1);\\n\\nReadableDataLocation rdl = new ReadableDataLocationTmp(\\"path/sdmx_file.xml\\");\\n\\nSDMXVTLWorkflow sdmxVtlWorkflow = new SDMXVTLWorkflow(engine, rdl, inputs);\\n\\nMap<String, PersistentDataset> bindings = sdmxVtlWorkflow.run();\\n```\\n\\nAs a result, one will receive all the dataset defined as persistent in the `TransformationSchemes` definition.\\n\\n#### SDMXVTLWorkflow `getTransformationsVTL` function\\n\\nGets the VTL code corresponding to the SDMX TransformationSchemes definition.\\n\\n```java\\nSDMXVTLWorkflow sdmxVtlWorkflow = new SDMXVTLWorkflow(engine, rdl, Map.of());\\nString vtl = sdmxVtlWorkflow.getTransformationsVTL();\\n```\\n\\n#### SDMXVTLWorkflow `getRulesetsVTL` function\\n\\nGets the VTL code corresponding to the SDMX TransformationSchemes definition.\\n\\n```java\\nSDMXVTLWorkflow sdmxVtlWorkflow = new SDMXVTLWorkflow(engine, rdl, Map.of());\\nString dprs = sdmxVtlWorkflow.getRulesetsVTL();\\n```"},{"id":"/trevas-java-17","metadata":{"permalink":"/Trevas/blog/trevas-java-17","source":"@site/blog/2023-11-22-trevas-java-17.mdx","title":"Trevas - Java 17","description":"News","date":"2023-11-22T00:00:00.000Z","formattedDate":"November 22, 2023","tags":[{"label":"Trevas","permalink":"/Trevas/blog/tags/trevas"}],"readingTime":0.345,"hasTruncateMarker":false,"authors":[{"name":"Nicolas Laval","link":"https://github.com/NicoLaval","title":"Making Sense - Developer","image":"/img/profile_pic_nicolas_laval.jpg","key":"nicolas"}],"frontMatter":{"slug":"/trevas-java-17","title":"Trevas - Java 17","authors":["nicolas"],"tags":["Trevas"]},"prevItem":{"title":"Trevas - SDMX","permalink":"/Trevas/blog/trevas-sdmx"},"nextItem":{"title":"Trevas - Persistent assignments","permalink":"/Trevas/blog/trevas-persistent-assignments"}},"content":"### News\\n\\nTrevas 1.2.0 enables Java 17 support.\\n\\n### Java modules handling\\n\\nSpark does not support Java modules.\\n\\nJava 17 client apps, embedding Trevas in Spark mode have to configure `UNNAMED` modules for Spark.\\n\\n#### Maven\\n\\nAdd to your `pom.xml` file, in the `build > plugins` section:\\n\\n```xml\\n<plugin>\\n    <groupId>org.apache.maven.plugins</groupId>\\n    <artifactId>maven-compiler-plugin</artifactId>\\n    <version>3.11.0</version>\\n    <configuration>\\n        <compilerArgs>\\n            <arg>--add-exports</arg>\\n            <arg>java.base/sun.nio.ch=ALL-UNNAMED</arg>\\n        </compilerArgs>\\n    </configuration>\\n</plugin>\\n```\\n\\n#### Docker\\n\\n```shell\\nENTRYPOINT [\\"java\\", \\"--add-exports\\", \\"java.base/sun.nio.ch=ALL-UNNAMED\\", \\"mainClass\\"]\\n```"},{"id":"/trevas-persistent-assignments","metadata":{"permalink":"/Trevas/blog/trevas-persistent-assignments","source":"@site/blog/2023-11-22-trevas-persistent-assignment.mdx","title":"Trevas - Persistent assignments","description":"News","date":"2023-11-22T00:00:00.000Z","formattedDate":"November 22, 2023","tags":[{"label":"Trevas","permalink":"/Trevas/blog/tags/trevas"}],"readingTime":0.41,"hasTruncateMarker":false,"authors":[{"name":"Nicolas Laval","link":"https://github.com/NicoLaval","title":"Making Sense - Developer","image":"/img/profile_pic_nicolas_laval.jpg","key":"nicolas"}],"frontMatter":{"slug":"/trevas-persistent-assignments","title":"Trevas - Persistent assignments","authors":["nicolas"],"tags":["Trevas"]},"prevItem":{"title":"Trevas - Java 17","permalink":"/Trevas/blog/trevas-java-17"},"nextItem":{"title":"Trevas - check_hierarchy","permalink":"/Trevas/blog/trevas-check_hierarchy"}},"content":"### News\\n\\nTrevas 1.2.0 includes the persistent assignment support: `ds1 <- ds;`.\\n\\nIn Trevas, persistent datasets are represented as `PersistentDataset`.\\n\\n### Handle `PersistentDataset`\\n\\nTrevas datasets are represented as `Dataset`.\\n\\nAfter running the Trevas engine, you can use persistent datasets with something like:\\n\\n```\\nBindings engineBindings = engine.getContext().getBindings(ScriptContext.ENGINE_SCOPE);\\nengineBindings.forEach((k, v) -> {\\n    if (v instanceof PersistentDataset) {\\n        fr.insee.vtl.model.Dataset ds = ((PersistentDataset) v).getDelegate();\\n        if (ds instanceof SparkDataset) {\\n            Dataset<Row> sparkDs = ((SparkDataset) ds).getSparkDataset();\\n            // Do what you want with sparkDs\\n        }\\n    }\\n});\\n```"},{"id":"/trevas-check_hierarchy","metadata":{"permalink":"/Trevas/blog/trevas-check_hierarchy","source":"@site/blog/2023-09-01-trevas-check_hierarchy.mdx","title":"Trevas - check_hierarchy","description":"News","date":"2023-09-01T00:00:00.000Z","formattedDate":"September 1, 2023","tags":[{"label":"Trevas","permalink":"/Trevas/blog/tags/trevas"}],"readingTime":1.815,"hasTruncateMarker":false,"authors":[{"name":"Nicolas Laval","link":"https://github.com/NicoLaval","title":"Making Sense - Developer","image":"/img/profile_pic_nicolas_laval.jpg","key":"nicolas"}],"frontMatter":{"slug":"/trevas-check_hierarchy","title":"Trevas - check_hierarchy","authors":["nicolas"],"tags":["Trevas"]},"prevItem":{"title":"Trevas - Persistent assignments","permalink":"/Trevas/blog/trevas-persistent-assignments"},"nextItem":{"title":"Trevas Batch 0.1.1","permalink":"/Trevas/blog/trevas-batch-0.1.1"}},"content":"### News\\n\\nTrevas 1.1.0 includes hierarchical validation via operators `define hierarchical ruleset` and `check_hierarchy`.\\n\\n### Example\\n\\n#### Input\\n\\n`ds1`:\\n\\n| id  | Me  |\\n| :-: | :-: |\\n| ABC | 12  |\\n|  A  |  1  |\\n|  B  | 10  |\\n|  C  |  1  |\\n| DEF | 100 |\\n|  E  | 99  |\\n|  F  |  1  |\\n| HIJ | 100 |\\n|  H  | 99  |\\n|  I  |  0  |\\n\\n#### VTL script\\n\\n```\\n// Ensure ds1 metadata definition is good\\nds1 := ds1[calc identifier id := id, Me := cast(Me, integer)];\\n\\n// Define hierarchical ruleset\\ndefine hierarchical ruleset hr (variable rule Me) is\\n    My_Rule : ABC = A + B + C errorcode \\"ABC is not sum of A,B,C\\" errorlevel 1;\\n    DEF = D + E + F errorcode \\"DEF is not sum of D,E,F\\";\\n    HIJ : HIJ = H + I - J errorcode \\"HIJ is not H + I - J\\" errorlevel 10\\nend hierarchical ruleset;\\n\\n// Check hierarchy\\nds_all := check_hierarchy(ds1, hr rule id all);\\nds_all_measures := check_hierarchy(ds1, hr rule id always_null all_measures);\\nds_invalid := check_hierarchy(ds1, hr rule id always_zero invalid);\\n```\\n\\n#### Outputs\\n\\n- `ds_all`\\n\\n| id  | ruleid  | bool_var | errorcode | errorlevel | imbalance |\\n| :-: | :-----: | :------: | :-------: | :--------: | :-------: |\\n| ABC | My_Rule |   true   |   null    |    null    |     0     |\\n\\n- `ds_always_null_all_measures`\\n\\n| id  | Me  | ruleid  | bool_var | errorcode | errorlevel | imbalance |\\n| :-: | :-: | :-----: | :------: | :-------: | :--------: | :-------: |\\n| ABC | 12  | My_Rule |   true   |   null    |    null    |     0     |\\n| DEF | 100 |  hr_2   |   null   |   null    |    null    |   null    |\\n| HIJ | 100 |   HIJ   |   null   |   null    |    null    |   null    |\\n\\n- `ds_invalid`\\n\\n| id  | Me  | ruleid |      errorcode       | errorlevel | imbalance |\\n| :-: | :-: | :----: | :------------------: | :--------: | :-------: |\\n| HIJ | 100 |  HIJ   | HIJ is not H + I - J |     10     |     1     |"},{"id":"/trevas-batch-0.1.1","metadata":{"permalink":"/Trevas/blog/trevas-batch-0.1.1","source":"@site/blog/2023-07-02-trevas-batch-0.1.1.mdx","title":"Trevas Batch 0.1.1","description":"Trevas Batch 0.1.1 uses version 1.0.2 of Trevas.","date":"2023-07-02T00:00:00.000Z","formattedDate":"July 2, 2023","tags":[{"label":"Trevas Batch","permalink":"/Trevas/blog/tags/trevas-batch"}],"readingTime":0.46,"hasTruncateMarker":false,"authors":[{"name":"Nicolas Laval","link":"https://github.com/NicoLaval","title":"Making Sense - Developer","image":"/img/profile_pic_nicolas_laval.jpg","key":"nicolas"}],"frontMatter":{"slug":"/trevas-batch-0.1.1","title":"Trevas Batch 0.1.1","authors":["nicolas"],"tags":["Trevas Batch"]},"prevItem":{"title":"Trevas - check_hierarchy","permalink":"/Trevas/blog/trevas-check_hierarchy"},"nextItem":{"title":"Trevas Jupyter 0.3.2","permalink":"/Trevas/blog/trevas-jupyter-0.3.2"}},"content":"import useBaseUrl from \'@docusaurus/useBaseUrl\';\\nimport Link from \'@theme/Link\';\\n\\n[Trevas Batch](https://github.com/Making-Sense-Info/Trevas-Batch) `0.1.1` uses version `1.0.2` of [Trevas](https://github.com/InseeFr/Trevas).\\n\\nThis Java batch provides Trevas execution metrics in Spark mode.\\n\\nThe configuration file to fill in is described in the [README](https://github.com/Making-Sense-Info/Trevas-Batch/tree/main#readme) of the project.\\nLaunching the batch will produce a Markdown file as output.\\n\\n### Launch\\n\\n#### Local\\n\\n```java\\njava -jar trevas-batch-0.1.1.jar -Dconfig.path=\\"...\\" -Dreport.path=\\"...\\"\\n```\\n\\nThe java execution will be done in local Spark.\\n\\n#### Kubernetes\\n\\nDefault Kubernetes objects are defined in the [.kubernetes](https://github.com/Making-Sense-Info/Trevas-Batch/tree/main/.kubernetes) folder.\\n\\nFeed the `config-map.yml` file then launch the job in your cluster."},{"id":"/trevas-jupyter-0.3.2","metadata":{"permalink":"/Trevas/blog/trevas-jupyter-0.3.2","source":"@site/blog/2023-07-01-v1-trevas-jupyter-0.3.2.mdx","title":"Trevas Jupyter 0.3.2","description":"Trevas Jupyter 0.3.2 uses version 1.0.2 of Trevas.","date":"2023-07-01T00:00:00.000Z","formattedDate":"July 1, 2023","tags":[{"label":"Trevas Jupyter","permalink":"/Trevas/blog/tags/trevas-jupyter"}],"readingTime":0.59,"hasTruncateMarker":false,"authors":[{"name":"Nicolas Laval","link":"https://github.com/NicoLaval","title":"Making Sense - Developer","image":"/img/profile_pic_nicolas_laval.jpg","key":"nicolas"}],"frontMatter":{"slug":"/trevas-jupyter-0.3.2","title":"Trevas Jupyter 0.3.2","authors":["nicolas"],"tags":["Trevas Jupyter"]},"prevItem":{"title":"Trevas Batch 0.1.1","permalink":"/Trevas/blog/trevas-batch-0.1.1"},"nextItem":{"title":"Trevas Lab 0.3.3","permalink":"/Trevas/blog/trevas-lab-0.3.3"}},"content":"import useBaseUrl from \'@docusaurus/useBaseUrl\';\\nimport Link from \'@theme/Link\';\\n\\n[Trevas Jupyter](https://github.com/InseeFrLab/Trevas-Jupyter) `0.3.2` uses version `1.0.2` of [Trevas](https://github.com/InseeFr/Trevas).\\n\\n### News\\n\\nIn addition to the <Link label=\\"VTL coverage\\" href={useBaseUrl(\'/user-guide/coverage\')} /> greatly increased since the publication of Trevas 1.x.x, Trevas Jupyter offers 1 new connector:\\n- SAS files (via the `loadSas` method)\\n\\n### Launch\\n\\n#### Manually adding the Trevas Kernel to an existing Jupyter instance\\n\\n- Trevas Jupyter compiler\\n- Copy the `kernel.json` file and the `bin` and `repo` folders to a new kernel folder.\\n- Edit the `kernel.json` file\\n- Launch Jupyter\\n\\n#### Docker\\n\\n```bash\\ndocker pull inseefrlab/trevas-jupyter:0.3.2\\ndocker run -p 8888:8888 inseefrlab/trevas-jupyter:0.3.2\\n```\\n\\n#### Helm\\n\\nThe Trevas Jupyter docker image can be instantiated via the `jupyter-pyspark` Helm contract from [InseeFrLab](https://github.com/InseeFrLab/helm-charts-interactive-services/tree/main)."},{"id":"/trevas-lab-0.3.3","metadata":{"permalink":"/Trevas/blog/trevas-lab-0.3.3","source":"@site/blog/2023-07-01-v1-trevas-lab-0.3.3.mdx","title":"Trevas Lab 0.3.3","description":"Trevas Lab 0.3.3 uses version 1.0.2 of Trevas.","date":"2023-07-01T00:00:00.000Z","formattedDate":"July 1, 2023","tags":[{"label":"Trevas Lab","permalink":"/Trevas/blog/tags/trevas-lab"}],"readingTime":0.335,"hasTruncateMarker":false,"authors":[{"name":"Nicolas Laval","link":"https://github.com/NicoLaval","title":"Making Sense - Developer","image":"/img/profile_pic_nicolas_laval.jpg","key":"nicolas"}],"frontMatter":{"slug":"/trevas-lab-0.3.3","title":"Trevas Lab 0.3.3","authors":["nicolas"],"tags":["Trevas Lab"]},"prevItem":{"title":"Trevas Jupyter 0.3.2","permalink":"/Trevas/blog/trevas-jupyter-0.3.2"}},"content":"import useBaseUrl from \'@docusaurus/useBaseUrl\';\\nimport Link from \'@theme/Link\';\\n\\n[Trevas Lab](https://github.com/InseeFrLab/Trevas-Lab) `0.3.3` uses version `1.0.2` of [Trevas](https://github.com/InseeFr/Trevas).\\n\\n### News\\n\\nIn addition to the <Link label=\\"VTL coverage\\" href={useBaseUrl(\'/user-guide/coverage\')} /> greatly increased since the publication of Trevas 1.x.x, Trevas Lab offers 2 new connectors:\\n- SAS files\\n- JDBC MariaDB\\n\\n### Launch\\n\\n#### Kubernetes\\n\\nSample Kubernetes objects are available in the `.kubernetes` folders of [Trevas Lab](https://github.com/InseeFrLab/Trevas-Lab/tree/master/.kubernetes) and [Trevas Lab UI](https://github.com/InseeFrLab/Trevas-Lab-UI/tree/master/.kubernetes)."}]}')}}]);