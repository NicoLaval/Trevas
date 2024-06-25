"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[5636],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),k=a,m=d["".concat(l,".").concat(k)]||d[k]||c[k]||s;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},49499:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const s={id:"index-spark-mode",title:"Spark \u6a21\u5f0f",sidebar_label:"\u6982\u8ff0",slug:"/developer-guide/spark-mode",custom_edit_url:null},i=void 0,o={unversionedId:"developer-guide/spark-mode/index-spark-mode",id:"developer-guide/spark-mode/index-spark-mode",title:"Spark \u6a21\u5f0f",description:"SparkDataset",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/developer-guide/spark-mode/index-spark-mode.mdx",sourceDirName:"developer-guide/spark-mode",slug:"/developer-guide/spark-mode",permalink:"/Trevas/zh-CN/developer-guide/spark-mode",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1719351824,formattedLastUpdatedAt:"2024\u5e746\u670825\u65e5",frontMatter:{id:"index-spark-mode",title:"Spark \u6a21\u5f0f",sidebar_label:"\u6982\u8ff0",slug:"/developer-guide/spark-mode",custom_edit_url:null},sidebar:"docs",previous:{title:"\u5176\u5b83\u6570\u636e\u6e90",permalink:"/Trevas/zh-CN/developer-guide/basic-mode/data-sources/others"},next:{title:"\u6982\u8ff0",permalink:"/Trevas/zh-CN/developer-guide/spark-mode/data-sources"}},l={},p=[{value:"SparkDataset",id:"sparkdataset",level:3},{value:"Importer le module Spark de Trevas",id:"importer-le-module-spark-de-trevas",level:3},{value:"Session Spark",id:"session-spark",level:3},{value:"Exemple",id:"exemple",level:3},{value:"Ex\xe9cution distribu\xe9e",id:"ex\xe9cution-distribu\xe9e",level:3},{value:"Ex\xe9cution dans un cluster Kubernetes",id:"ex\xe9cution-dans-un-cluster-kubernetes",level:3}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"sparkdataset"},"SparkDataset"),(0,a.kt)("p",null,"Les datasets ",(0,a.kt)("inlineCode",{parentName:"p"},"SparkDataset")," permettent de repr\xe9senter les tables statistiques dans une application Java utilisant Trevas en mode Spark."),(0,a.kt)("h3",{id:"importer-le-module-spark-de-trevas"},"Importer le module Spark de Trevas"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>fr.insee.trevas</groupId>\n    <artifactId>vtl-spark</artifactId>\n    <version>1.4.0</version>\n</dependency>\n")),(0,a.kt)("h3",{id:"session-spark"},"Session Spark"),(0,a.kt)("p",null,"Afin d'ex\xe9cuter du VTL via Trevas en mode Spark, il faut instancier une session Spark."),(0,a.kt)("p",null,"La session peut \xeatre :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"locale (ex\xe9cution sur le serveur Java)"),(0,a.kt)("li",{parentName:"ul"},"statique (ex\xe9cution sur une instance Spark pr\xe9alablement install\xe9e sur un serveur)"),(0,a.kt)("li",{parentName:"ul"},"dynamique (ex\xe9cution dynamique au sein d'un cluster Kubernetes)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'SparkSession spark = SparkSession.builder().master("local").getOrCreate();\n')),(0,a.kt)("h3",{id:"exemple"},"Exemple"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'ScriptEngine engine = new ScriptEngineManager().getEngineByName("vtl");\n\nBindings bindings = new SimpleBindings();\nSparkDataset dataset = new SparkDataset(spark.read().parquet("folder_path"));\nbindings.put("myDataset", dataset);\n\nengine.getContext().setBindings(bindings, ScriptContext.ENGINE_SCOPE);\nengine.put("$vtl.engine.processing_engine_names", "spark");\nengine.put("$vtl.spark.session", spark);\n\nString script = "res := myDataset[filter var3 > 6];";\n\ntry {\n    engine.eval(script);\n} catch (ScriptException e) {\n    e.printStackTrace();\n}\n\nBindings outputBindings = engine.getContext().getBindings(ScriptContext.ENGINE_SCOPE);\nSparkDataset result = (SparkDataset) outputBindings.get("res");\n// Ensure direct resolution because of spark lazy mechanism (performance warning!)\nInMemoryDataset imResult = new InMemoryDataset(\n                        result.getDataPoints(),\n                        result.getDataStructure()\n                    );\n')),(0,a.kt)("h3",{id:"ex\xe9cution-distribu\xe9e"},"Ex\xe9cution distribu\xe9e"),(0,a.kt)("p",null,"Que ce soit en mode statique ou dynamique, l'\xe9xecution distribu\xe9e des traitements n\xe9cessite que les ex\xe9cuteurs instanci\xe9s par le master soient en capacit\xe9 de r\xe9soudre les traitements VTL."),(0,a.kt)("p",null,"Il faut alors fournir les jar Trevas aux ex\xe9cuteurs via l'options ",(0,a.kt)("inlineCode",{parentName:"p"},"spark.jars")," de l'objet ",(0,a.kt)("inlineCode",{parentName:"p"},"SparkConf")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'SparkSession.Builder sparkBuilder = SparkSession.builder()\nSparkConf conf = new SparkConf();\nconf.set("spark.jars", String.join(",",\n                    "/vtl-spark.jar",\n                    "/vtl-model.jar",\n                    "/vtl-parser.jar",\n                    "/vtl-engine.jar",\n            ));\nsparkBuilder.config(conf);\n...\nSparkSession spark = sparkBuilder.getOrCreate();\n')),(0,a.kt)("h3",{id:"ex\xe9cution-dans-un-cluster-kubernetes"},"Ex\xe9cution dans un cluster Kubernetes"),(0,a.kt)("p",null,"De nombreuses options sont d\xe9taill\xe9es dans la ",(0,a.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/running-on-kubernetes.html#docker-images"},"documentation officielle")),(0,a.kt)("p",null,"Parmi celles-ci, une option est particuli\xe8rement importante : l'image Docker qui permettra au ex\xe9cuteurs de r\xe9soudre les traitements VTL."),(0,a.kt)("p",null,"Une image \xe0 fa\xe7on est disponible ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/InseeFrLab/Trevas-Spark-Hadoop"},"ici"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'SparkSession.Builder sparkBuilder = SparkSession.builder()\nSparkConf conf = new SparkConf();\nconf.set("spark.kubernetes.container.image", "inseefrlab/spark-hadoop:trevas-0.4.7-spark-3.2.1-hadoop-3.3.1-postgresql-42.3.3-postgis-2021.1.0");\nconf.set("spark.kubernetes.container.pullPolicy", "IfNotPresent");\nsparkBuilder.config(conf);\nsparkBuilder.master("k8s://...")\n...\nSparkSession spark = sparkBuilder.getOrCreate();\n')))}d.isMDXComponent=!0}}]);