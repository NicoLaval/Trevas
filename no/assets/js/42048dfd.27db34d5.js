"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[3179],{91409:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(74848),r=t(28453);const s={id:"sdmx",title:"Spark mode - SDMX source",sidebar_label:"SDMX",slug:"/developer-guide/spark-mode/data-sources/sdmx",custom_edit_url:null},i=void 0,a={id:"developer-guide/spark-mode/data-sources/sdmx",title:"Spark mode - SDMX source",description:"vtl-sdmx module exposes the following utilities.",source:"@site/i18n/no/docusaurus-plugin-content-docs/current/developer-guide/spark-mode/data-sources/sdmx.mdx",sourceDirName:"developer-guide/spark-mode/data-sources",slug:"/developer-guide/spark-mode/data-sources/sdmx",permalink:"/Trevas/no/developer-guide/spark-mode/data-sources/sdmx",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1728455981e3,frontMatter:{id:"sdmx",title:"Spark mode - SDMX source",sidebar_label:"SDMX",slug:"/developer-guide/spark-mode/data-sources/sdmx",custom_edit_url:null},sidebar:"docs",previous:{title:"Parquet",permalink:"/Trevas/no/developer-guide/spark-mode/data-sources/parquet"},next:{title:"Andre",permalink:"/Trevas/no/developer-guide/spark-mode/data-sources/others"}},d={},l=[{value:"<code>buildStructureFromSDMX3</code> utility",id:"buildstructurefromsdmx3-utility",level:3},{value:"<code>SDMXVTLWorkflow</code> object",id:"sdmxvtlworkflow-object",level:3},{value:"SDMXVTLWorkflow <code>run</code> function - Preview mode",id:"sdmxvtlworkflow-run-function---preview-mode",level:3},{value:"SDMXVTLWorkflow <code>run</code> function",id:"sdmxvtlworkflow-run-function",level:3},{value:"SDMXVTLWorkflow <code>getTransformationsVTL</code> function",id:"sdmxvtlworkflow-gettransformationsvtl-function",level:3},{value:"SDMXVTLWorkflow <code>getRulesetsVTL</code> function",id:"sdmxvtlworkflow-getrulesetsvtl-function",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Hadoop client",id:"hadoop-client",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"vtl-sdmx"})," module exposes the following utilities."]}),"\n",(0,o.jsxs)(n.h3,{id:"buildstructurefromsdmx3-utility",children:[(0,o.jsx)(n.code,{children:"buildStructureFromSDMX3"})," utility"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"TrevasSDMXUtils.buildStructureFromSDMX3"})," allows to obtain a Trevas DataStructure."]}),"\n",(0,o.jsx)(n.p,{children:"Providing corresponding data, you can build a Trevas Dataset."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'Structured.DataStructure structure = TrevasSDMXUtils.buildStructureFromSDMX3("path/sdmx_file.xml", "STRUCT_ID");\n\nSparkDataset ds = new SparkDataset(\n        spark.read()\n                .option("header", "true")\n                .option("delimiter", ";")\n                .option("quote", "\\"")\n                .csv("path"),\n        structure\n);\n'})}),"\n",(0,o.jsxs)(n.h3,{id:"sdmxvtlworkflow-object",children:[(0,o.jsx)(n.code,{children:"SDMXVTLWorkflow"})," object"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"SDMXVTLWorkflow"})," constructor takes 3 arguments:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["a ",(0,o.jsx)(n.code,{children:"ScriptEngine"})," (Trevas or another)"]}),"\n",(0,o.jsxs)(n.li,{children:["a ",(0,o.jsx)(n.code,{children:"ReadableDataLocation"})," to handle an SDMX message"]}),"\n",(0,o.jsx)(n.li,{children:"a map of names / Datasets"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'SparkSession.builder()\n                .appName("test")\n                .master("local")\n                .getOrCreate();\n\nScriptEngineManager mgr = new ScriptEngineManager();\nScriptEngine engine = mgr.getEngineByExtension("vtl");\nengine.put(VtlScriptEngine.PROCESSING_ENGINE_NAMES, "spark");\n\nReadableDataLocation rdl = new ReadableDataLocationTmp("src/test/resources/DSD_BPE_CENSUS.xml");\n\nSDMXVTLWorkflow sdmxVtlWorkflow = new SDMXVTLWorkflow(engine, rdl, Map.of());\n'})}),"\n",(0,o.jsx)(n.p,{children:"This object then allows you to activate the following 3 functions."}),"\n",(0,o.jsxs)(n.h3,{id:"sdmxvtlworkflow-run-function---preview-mode",children:["SDMXVTLWorkflow ",(0,o.jsx)(n.code,{children:"run"})," function - Preview mode"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"run"})," function can easily be called in a preview mode, without attached data."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'ScriptEngineManager mgr = new ScriptEngineManager();\nScriptEngine engine = mgr.getEngineByExtension("vtl");\nengine.put(VtlScriptEngine.PROCESSING_ENGINE_NAMES, "spark");\n\nReadableDataLocation rdl = new ReadableDataLocationTmp("src/test/resources/DSD_BPE_CENSUS.xml");\n\nSDMXVTLWorkflow sdmxVtlWorkflow = new SDMXVTLWorkflow(engine, rdl, Map.of());\n\n// instead of using TrevasSDMXUtils.buildStructureFromSDMX3 and data sources\n// to build Trevas Datasets, sdmxVtlWorkflow.getEmptyDatasets()\n// will handle SDMX message structures to produce Trevas Datasets\n// with metadata defined in this message, and adding empty data\nMap<String, Dataset> emptyDatasets = sdmxVtlWorkflow.getEmptyDatasets();\nengine.getBindings(ScriptContext.ENGINE_SCOPE).putAll(emptyDatasets);\n\nMap<String, PersistentDataset> result = sdmxVtlWorkflow.run();\n'})}),"\n",(0,o.jsx)(n.p,{children:"The preview mode allows to check the conformity of the SDMX file and the metadata of the output datasets."}),"\n",(0,o.jsxs)(n.h3,{id:"sdmxvtlworkflow-run-function",children:["SDMXVTLWorkflow ",(0,o.jsx)(n.code,{children:"run"})," function"]}),"\n",(0,o.jsxs)(n.p,{children:["Once an ",(0,o.jsx)(n.code,{children:"SDMXVTLWorkflow"})," is built, it is easy to run the VTL validations and transformations defined in the SDMX file."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'Structured.DataStructure structure = TrevasSDMXUtils.buildStructureFromSDMX3("path/sdmx_file.xml", "ds1");\n\nSparkDataset ds1 = new SparkDataset(\n        spark.read()\n                .option("header", "true")\n                .option("delimiter", ";")\n                .option("quote", "\\"")\n                .csv("path/data.csv"),\n        structure\n);\n\nScriptEngineManager mgr = new ScriptEngineManager();\nScriptEngine engine = mgr.getEngineByExtension("vtl");\nengine.put(VtlScriptEngine.PROCESSING_ENGINE_NAMES, "spark");\n\nMap<String, Dataset> inputs = Map.of("ds1", ds1);\n\nReadableDataLocation rdl = new ReadableDataLocationTmp("path/sdmx_file.xml");\n\nSDMXVTLWorkflow sdmxVtlWorkflow = new SDMXVTLWorkflow(engine, rdl, inputs);\n\nMap<String, PersistentDataset> bindings = sdmxVtlWorkflow.run();\n'})}),"\n",(0,o.jsxs)(n.p,{children:["As a result, one will receive all the dataset defined as persistent in the ",(0,o.jsx)(n.code,{children:"TransformationSchemes"})," definition."]}),"\n",(0,o.jsxs)(n.h3,{id:"sdmxvtlworkflow-gettransformationsvtl-function",children:["SDMXVTLWorkflow ",(0,o.jsx)(n.code,{children:"getTransformationsVTL"})," function"]}),"\n",(0,o.jsx)(n.p,{children:"Gets the VTL code corresponding to the SDMX TransformationSchemes definition."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"SDMXVTLWorkflow sdmxVtlWorkflow = new SDMXVTLWorkflow(engine, rdl, Map.of());\nString vtl = sdmxVtlWorkflow.getTransformationsVTL();\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"sdmxvtlworkflow-getrulesetsvtl-function",children:["SDMXVTLWorkflow ",(0,o.jsx)(n.code,{children:"getRulesetsVTL"})," function"]}),"\n",(0,o.jsx)(n.p,{children:"Gets the VTL code corresponding to the SDMX TransformationSchemes definition."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"SDMXVTLWorkflow sdmxVtlWorkflow = new SDMXVTLWorkflow(engine, rdl, Map.of());\nString dprs = sdmxVtlWorkflow.getRulesetsVTL();\n"})}),"\n",(0,o.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsx)(n.h3,{id:"hadoop-client",children:"Hadoop client"}),"\n",(0,o.jsxs)(n.p,{children:["The integration of ",(0,o.jsx)(n.code,{children:"vtl-modules"})," with ",(0,o.jsx)(n.code,{children:"hadoop-client"})," can cause dependency issues."]}),"\n",(0,o.jsxs)(n.p,{children:["It was noted that ",(0,o.jsx)(n.code,{children:"com.fasterxml.woodstox.woodstox-core"})," is imported by ",(0,o.jsx)(n.code,{children:"hadoop-client"}),", with an incompatible version for a ",(0,o.jsx)(n.code,{children:"vtl-sdmx"})," sub-dependency."]}),"\n",(0,o.jsxs)(n.p,{children:["A way to fix is to exclude ",(0,o.jsx)(n.code,{children:"com.fasterxml.woodstox.woodstox-core"})," dependency from ",(0,o.jsx)(n.code,{children:"hadoop-client"})," and import a newest version in your ",(0,o.jsx)(n.code,{children:"pom.xml"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>org.apache.hadoop</groupId>\n    <artifactId>hadoop-client</artifactId>\n    <version>3.3.4</version>\n    <exclusions>\n        <exclusion>\n            <groupId>com.fasterxml.woodstox</groupId>\n            <artifactId>woodstox-core</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n<dependency>\n    <groupId>com.fasterxml.woodstox</groupId>\n    <artifactId>woodstox-core</artifactId>\n    <version>6.5.1</version>\n</dependency>\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(96540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);