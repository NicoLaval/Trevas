"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[2951],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),o=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=o(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=o(t),c=a,m=u["".concat(p,".").concat(c)]||u[c]||k[c]||s;return t?n.createElement(m,i(i({ref:r},d),{},{components:t})):n.createElement(m,i({ref:r},d))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=c;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var o=2;o<s;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},96261:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var n=t(87462),a=(t(67294),t(3905));const s={id:"index-spark-mode",title:"Spark modus",sidebar_label:"Oversikt",slug:"/developer-guide/spark-mode",custom_edit_url:null},i=void 0,l={unversionedId:"developer-guide/spark-mode/index-spark-mode",id:"developer-guide/spark-mode/index-spark-mode",title:"Spark modus",description:"SparkDataset",source:"@site/i18n/no/docusaurus-plugin-content-docs/current/developer-guide/spark-mode/index-spark-mode.mdx",sourceDirName:"developer-guide/spark-mode",slug:"/developer-guide/spark-mode",permalink:"/Trevas/no/developer-guide/spark-mode",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1717878669,formattedLastUpdatedAt:"8. jun. 2024",frontMatter:{id:"index-spark-mode",title:"Spark modus",sidebar_label:"Oversikt",slug:"/developer-guide/spark-mode",custom_edit_url:null},sidebar:"docs",previous:{title:"Andre",permalink:"/Trevas/no/developer-guide/basic-mode/data-sources/others"},next:{title:"Oversikt",permalink:"/Trevas/no/developer-guide/spark-mode/data-sources"}},p={},o=[{value:"SparkDataset",id:"sparkdataset",level:3},{value:"Importer Spark-modul fra Trevas",id:"importer-spark-modul-fra-trevas",level:3},{value:"Session Spark",id:"session-spark",level:3},{value:"Eksempel",id:"eksempel",level:3},{value:"Distribuert utf\xf8relse",id:"distribuert-utf\xf8relse",level:3},{value:"Kj\xf8rer i en Kubernetes klynge",id:"kj\xf8rer-i-en-kubernetes-klynge",level:3}],d={toc:o};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"sparkdataset"},"SparkDataset"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SparkDataset")," datasett brukes til \xe5 representere statistiske tabeller i en Java-applikasjon som bruker Trevas i Spark-modus."),(0,a.kt)("h3",{id:"importer-spark-modul-fra-trevas"},"Importer Spark-modul fra Trevas"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>fr.insee.trevas</groupId>\n    <artifactId>vtl-spark</artifactId>\n    <version>1.4.0</version>\n</dependency>\n")),(0,a.kt)("h3",{id:"session-spark"},"Session Spark"),(0,a.kt)("p",null,"For \xe5 kj\xf8re VTL via Trevas i Spark-modus, m\xe5 du instansiere en Spark-\xf8kt."),(0,a.kt)("p",null,"\xd8kten kan v\xe6re :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"lokal (kj\xf8rer p\xe5 Java-serveren)"),(0,a.kt)("li",{parentName:"ul"},"statisk (kj\xf8rer p\xe5 en Spark-forekomst som tidligere er installert p\xe5 en server)"),(0,a.kt)("li",{parentName:"ul"},"dynamisk (kj\xf8rer dynamisk i en Kubernetes-klynge)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'SparkSession spark = SparkSession.builder().master("local").getOrCreate();\n')),(0,a.kt)("h3",{id:"eksempel"},"Eksempel"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'ScriptEngine engine = new ScriptEngineManager().getEngineByName("vtl");\n\nBindings bindings = new SimpleBindings();\nSparkDataset dataset = new SparkDataset(spark.read().parquet("folder_path"));\nbindings.put("myDataset", dataset);\n\nengine.getContext().setBindings(bindings, ScriptContext.ENGINE_SCOPE);\nengine.put("$vtl.engine.processing_engine_names", "spark");\nengine.put("$vtl.spark.session", spark);\n\nString script = "res := myDataset[filter var3 > 6];";\n\ntry {\n    engine.eval(script);\n} catch (ScriptException e) {\n    e.printStackTrace();\n}\n\nBindings outputBindings = engine.getContext().getBindings(ScriptContext.ENGINE_SCOPE);\nSparkDataset result = (SparkDataset) outputBindings.get("res");\n// Ensure direct resolution because of spark lazy mechanism (performance warning!)\nInMemoryDataset imResult = new InMemoryDataset(\n                        result.getDataPoints(),\n                        result.getDataStructure()\n                    );\n')),(0,a.kt)("h3",{id:"distribuert-utf\xf8relse"},"Distribuert utf\xf8relse"),(0,a.kt)("p",null,"Enten i statisk eller dynamisk modus, den distribuerte utf\xf8relse av prosessering krever at eksekut\xf8rene instansiert av masteren er i stand til \xe5 l\xf8se VTL-behandlingen."),(0,a.kt)("p",null,"Det er da n\xf8dvendig \xe5 gi Trevas-krukkene til utf\xf8rerne via ",(0,a.kt)("inlineCode",{parentName:"p"},"spark.jars")," alternativet til ",(0,a.kt)("inlineCode",{parentName:"p"},"SparkConf")," objektet :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'SparkSession.Builder sparkBuilder = SparkSession.builder()\nSparkConf conf = new SparkConf();\nconf.set("spark.jars", String.join(",",\n                    "/vtl-spark.jar",\n                    "/vtl-model.jar",\n                    "/vtl-parser.jar",\n                    "/vtl-engine.jar",\n            ));\nsparkBuilder.config(conf);\n...\nSparkSession spark = sparkBuilder.getOrCreate();\n')),(0,a.kt)("h3",{id:"kj\xf8rer-i-en-kubernetes-klynge"},"Kj\xf8rer i en Kubernetes klynge"),(0,a.kt)("p",null,"Mange alternativer er beskrevet i den ",(0,a.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/running-on-kubernetes.html#docker-images"},"offisielle dokumentasjonen")),(0,a.kt)("p",null,"Blant disse er ett alternativ spesielt viktig: Docker-bildet som vil tillate eksekut\xf8rer \xe5 l\xf8se VTL-behandling."),(0,a.kt)("p",null,"Et tilpasset bilde er tilgjengelig ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/InseeFrLab/Trevas-Spark-Hadoop"},"her"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'SparkSession.Builder sparkBuilder = SparkSession.builder()\nSparkConf conf = new SparkConf();\nconf.set("spark.kubernetes.container.image", "inseefrlab/spark-hadoop:trevas-0.4.7-spark-3.2.1-hadoop-3.3.1-postgresql-42.3.3-postgis-2021.1.0");\nconf.set("spark.kubernetes.container.pullPolicy", "IfNotPresent");\nsparkBuilder.config(conf);\nsparkBuilder.master("k8s://...")\n...\nSparkSession spark = sparkBuilder.getOrCreate();\n')))}u.isMDXComponent=!0}}]);