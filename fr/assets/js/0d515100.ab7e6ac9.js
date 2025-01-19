"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[727],{77728:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"developer-guide/spark-mode/data-sources/jdbc","title":"Mode Spark - Source JDBC","description":"Lecture","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/developer-guide/spark-mode/data-sources/jdbc.mdx","sourceDirName":"developer-guide/spark-mode/data-sources","slug":"/developer-guide/spark-mode/data-sources/jdbc","permalink":"/Trevas/fr/developer-guide/spark-mode/data-sources/jdbc","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","lastUpdatedAt":1737305883000,"frontMatter":{"id":"jdbc","title":"Mode Spark - Source JDBC","sidebar_label":"JDBC","slug":"/developer-guide/spark-mode/data-sources/jdbc","custom_edit_url":null},"sidebar":"docs","previous":{"title":"CSV","permalink":"/Trevas/fr/developer-guide/spark-mode/data-sources/csv"},"next":{"title":"Parquet","permalink":"/Trevas/fr/developer-guide/spark-mode/data-sources/parquet"}}');var a=t(74848),o=t(28453),n=t(76813);const d={id:"jdbc",title:"Mode Spark - Source JDBC",sidebar_label:"JDBC",slug:"/developer-guide/spark-mode/data-sources/jdbc",custom_edit_url:null},c=void 0,i={},l=[{value:"Lecture",id:"lecture",level:3},{value:"\xc9criture",id:"\xe9criture",level:3}];function u(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h3,{id:"lecture",children:"Lecture"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:'Dataset<Row> sparkDataset = spark.read()\n                    .format("jdbc")\n                    .option("url", "myUrl")\n                    .option("user", "myUser")\n                    .option("password", "myPwd")\n                    .option("query", "myQuery")\n                    .option("driver", "org.postgresql.Driver")\n                    .load();\nSparkDataset dataset = new SparkDataset(sparkDataset);\n'})}),"\n",(0,a.jsx)(r.p,{children:"Dans cet exemple, le projet doit contenir la d\xe9pendance du Driver postgresql"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-xml",children:"<dependency>\n    <groupId>org.postgresql</groupId>\n    <artifactId>postgresql</artifactId>\n    <version>42.5.1</version>\n</dependency>\n"})}),"\n",(0,a.jsxs)(r.p,{children:["Voir l'ensemble des options support\xe9es dans la ",(0,a.jsx)(r.a,{href:"https://spark.apache.org/docs/latest/sql-data-sources-jdbc.html#data-source-option",children:"documentation officielle"}),"."]}),"\n",(0,a.jsx)(r.h3,{id:"\xe9criture",children:"\xc9criture"}),"\n",(0,a.jsxs)(r.p,{children:["Le format JDBC n'est pas conseill\xe9 pour \xe9crire des ",(0,a.jsx)(r.code,{children:"Dataset"})," Trevas (voir ",(0,a.jsx)("a",{href:(0,n.Ay)("/developer-guide/spark-mode/data-sources#bonnes-pratiques-trevas"),children:"ici"}),")"]})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>d});var s=t(96540);const a={},o=s.createContext(a);function n(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);