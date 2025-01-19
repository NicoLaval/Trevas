"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[3126],{56659:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"developer-guide/spark-mode/data-sources/others","title":"Spark \u6a21\u5f0f - \u5176\u5b83\u6570\u636e\u6e90","description":"Constructeur SparkDataset","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/developer-guide/spark-mode/data-sources/others.mdx","sourceDirName":"developer-guide/spark-mode/data-sources","slug":"/developer-guide/spark-mode/data-sources/others","permalink":"/Trevas/zh-CN/developer-guide/spark-mode/data-sources/others","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","lastUpdatedAt":1737305883000,"frontMatter":{"id":"others","title":"Spark \u6a21\u5f0f - \u5176\u5b83\u6570\u636e\u6e90","sidebar_label":"\u5176\u5b83\u6570\u636e\u6e90","slug":"/developer-guide/spark-mode/data-sources/others","custom_edit_url":null},"sidebar":"docs","previous":{"title":"SDMX","permalink":"/Trevas/zh-CN/developer-guide/spark-mode/data-sources/sdmx"},"next":{"title":"Provenance","permalink":"/Trevas/zh-CN/developer-guide/provenance"}}');var s=a(74848),n=a(28453);const o={id:"others",title:"Spark \u6a21\u5f0f - \u5176\u5b83\u6570\u636e\u6e90",sidebar_label:"\u5176\u5b83\u6570\u636e\u6e90",slug:"/developer-guide/spark-mode/data-sources/others",custom_edit_url:null},d=void 0,c={},l=[{value:"Constructeur <code>SparkDataset</code>",id:"constructeur-sparkdataset",level:3},{value:"Spark \u652f\u6301\u7684\u5176\u4ed6\u6570\u636e\u683c\u5f0f",id:"spark-\u652f\u6301\u7684\u5176\u4ed6\u6570\u636e\u683c\u5f0f",level:3}];function u(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h3,{id:"constructeur-sparkdataset",children:["Constructeur ",(0,s.jsx)(t.code,{children:"SparkDataset"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'StructType schema = DataTypes.createStructType(List.of(\n                DataTypes.createStructField("string", DataTypes.StringType, false),\n                DataTypes.createStructField("integer", DataTypes.LongType, false),\n                DataTypes.createStructField("boolean", DataTypes.BooleanType, false),\n                DataTypes.createStructField("float", DataTypes.DoubleType, false)\n));\n\nDataset<Row> dataFrame = spark.createDataFrame(List.of(\n        RowFactory.create("string", 1L, true, 1.5D)\n), schema);\n\n\nfr.insee.vtl.model.Dataset sparkDataset = new SparkDataset(dataFrame);\n'})}),"\n",(0,s.jsx)(t.h3,{id:"spark-\u652f\u6301\u7684\u5176\u4ed6\u6570\u636e\u683c\u5f0f",children:"Spark \u652f\u6301\u7684\u5176\u4ed6\u6570\u636e\u683c\u5f0f"}),"\n",(0,s.jsxs)(t.p,{children:["\u8bf7\u770b ",(0,s.jsx)(t.a,{href:"https://spark.apache.org/docs/latest/sql-data-sources.html",children:"\u5b98\u65b9\u6587\u6863"})]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>d});var r=a(96540);const s={},n=r.createContext(s);function o(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);