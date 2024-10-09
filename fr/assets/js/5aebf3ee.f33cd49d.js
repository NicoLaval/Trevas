"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[4335],{57803:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>n,default:()=>i,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=r(74848),s=r(28453);const o={id:"others",title:"Mode Spark - Autres sources",sidebar_label:"Others",slug:"/developer-guide/spark-mode/data-sources/others",custom_edit_url:null},n=void 0,d={id:"developer-guide/spark-mode/data-sources/others",title:"Mode Spark - Autres sources",description:"Constructeur SparkDataset",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/developer-guide/spark-mode/data-sources/others.mdx",sourceDirName:"developer-guide/spark-mode/data-sources",slug:"/developer-guide/spark-mode/data-sources/others",permalink:"/Trevas/fr/developer-guide/spark-mode/data-sources/others",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1728455981e3,frontMatter:{id:"others",title:"Mode Spark - Autres sources",sidebar_label:"Others",slug:"/developer-guide/spark-mode/data-sources/others",custom_edit_url:null},sidebar:"docs",previous:{title:"SDMX",permalink:"/Trevas/fr/developer-guide/spark-mode/data-sources/sdmx"},next:{title:"Modifications de la grammaire VTL",permalink:"/Trevas/fr/administrator-guide/grammar"}},u={},c=[{value:"Constructeur <code>SparkDataset</code>",id:"constructeur-sparkdataset",level:3},{value:"Autres formats support\xe9s par Spark",id:"autres-formats-support\xe9s-par-spark",level:3}];function p(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.h3,{id:"constructeur-sparkdataset",children:["Constructeur ",(0,a.jsx)(t.code,{children:"SparkDataset"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'StructType schema = DataTypes.createStructType(List.of(\n                DataTypes.createStructField("string", DataTypes.StringType, false),\n                DataTypes.createStructField("integer", DataTypes.LongType, false),\n                DataTypes.createStructField("boolean", DataTypes.BooleanType, false),\n                DataTypes.createStructField("float", DataTypes.DoubleType, false)\n));\n\nDataset<Row> dataFrame = spark.createDataFrame(List.of(\n        RowFactory.create("string", 1L, true, 1.5D)\n), schema);\n\n\nfr.insee.vtl.model.Dataset sparkDataset = new SparkDataset(dataFrame);\n'})}),"\n",(0,a.jsx)(t.h3,{id:"autres-formats-support\xe9s-par-spark",children:"Autres formats support\xe9s par Spark"}),"\n",(0,a.jsxs)(t.p,{children:["Voir la ",(0,a.jsx)(t.a,{href:"https://spark.apache.org/docs/latest/sql-data-sources.html",children:"documentation officielle"})]})]})}function i(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>d});var a=r(96540);const s={},o=a.createContext(s);function n(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);