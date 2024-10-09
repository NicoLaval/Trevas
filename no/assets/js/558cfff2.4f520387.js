"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[9386],{49652:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=s(74848),n=s(28453),a=s(86025);const o={id:"jdbc",title:"Spark modus - JDBC-kilde",sidebar_label:"JDBC",slug:"/developer-guide/spark-mode/data-sources/jdbc",custom_edit_url:null},d=void 0,i={id:"developer-guide/spark-mode/data-sources/jdbc",title:"Spark modus - JDBC-kilde",description:"Lesning",source:"@site/i18n/no/docusaurus-plugin-content-docs/current/developer-guide/spark-mode/data-sources/jdbc.mdx",sourceDirName:"developer-guide/spark-mode/data-sources",slug:"/developer-guide/spark-mode/data-sources/jdbc",permalink:"/Trevas/no/developer-guide/spark-mode/data-sources/jdbc",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1728455981e3,frontMatter:{id:"jdbc",title:"Spark modus - JDBC-kilde",sidebar_label:"JDBC",slug:"/developer-guide/spark-mode/data-sources/jdbc",custom_edit_url:null},sidebar:"docs",previous:{title:"CSV",permalink:"/Trevas/no/developer-guide/spark-mode/data-sources/csv"},next:{title:"Parquet",permalink:"/Trevas/no/developer-guide/spark-mode/data-sources/parquet"}},l={},c=[{value:"Lesning",id:"lesning",level:3},{value:"Skriving",id:"skriving",level:3}];function u(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h3,{id:"lesning",children:"Lesning"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'Dataset<Row> sparkDataset = spark.read()\n                    .format("jdbc")\n                    .option("url", "myUrl")\n                    .option("user", "myUser")\n                    .option("password", "myPwd")\n                    .option("query", "myQuery")\n                    .option("driver", "org.postgresql.Driver")\n                    .load();\nSparkDataset dataset = new SparkDataset(sparkDataset);\n'})}),"\n",(0,t.jsx)(r.p,{children:"I dette eksemplet m\xe5 prosjektet inneholde postgresql-driveravhengigheten"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-xml",children:"<dependency>\n    <groupId>org.postgresql</groupId>\n    <artifactId>postgresql</artifactId>\n    <version>42.5.1</version>\n</dependency>\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Se alle st\xf8ttede alternativer i den ",(0,t.jsx)(r.a,{href:"https://spark.apache.org/docs/latest/sql-data-sources-jdbc.html#data-source-option",children:"offisielle dokumentasjonen"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"skriving",children:"Skriving"}),"\n",(0,t.jsxs)(r.p,{children:["JDBC-formatet anbefales ikke for \xe5 skrive ",(0,t.jsx)(r.code,{children:"Dataset"})," Trevas (se ",(0,t.jsx)("a",{href:(0,a.Ay)("/developer-guide/spark-mode/data-sources#bonnes-pratiques-trevas"),children:"her"}),")"]})]})}function p(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>d});var t=s(96540);const n={},a=t.createContext(n);function o(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);