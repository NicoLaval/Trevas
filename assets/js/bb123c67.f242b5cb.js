"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[1448],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),l=p(r),m=n,v=l["".concat(i,".").concat(m)]||l[m]||u[m]||o;return r?a.createElement(v,s(s({ref:t},c),{},{components:r})):a.createElement(v,s({ref:t},c))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[l]="string"==typeof e?e:n,s[1]=d;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4426:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905)),o=r(4996);const s={id:"csv",title:"Spark mode - CSV source",sidebar_label:"CSV",slug:"/developer-guide/spark-mode/data-sources/csv",custom_edit_url:null},d=void 0,i={unversionedId:"developer-guide/spark-mode/data-sources/csv",id:"developer-guide/spark-mode/data-sources/csv",title:"Spark mode - CSV source",description:"Read",source:"@site/docs/developer-guide/spark-mode/data-sources/csv.mdx",sourceDirName:"developer-guide/spark-mode/data-sources",slug:"/developer-guide/spark-mode/data-sources/csv",permalink:"/developer-guide/spark-mode/data-sources/csv",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1673881924,formattedLastUpdatedAt:"Jan 16, 2023",frontMatter:{id:"csv",title:"Spark mode - CSV source",sidebar_label:"CSV",slug:"/developer-guide/spark-mode/data-sources/csv",custom_edit_url:null},sidebar:"docs",previous:{title:"Parquet",permalink:"/developer-guide/spark-mode/data-sources/parquet"},next:{title:"JDBC",permalink:"/developer-guide/spark-mode/data-sources/jdbc"}},p={},c=[{value:"Read",id:"read",level:3},{value:"Write",id:"write",level:3}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"read"},"Read"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'Dataset<Row> sparkDataset = spark.read()\n                                .option("delimiter", ";")\n                                .option("header", "true")\n                                .csv("folder_path");\nSparkDataset dataset = new SparkDataset(sparkDataset);\n')),(0,n.kt)("p",null,"See all supported options in the ",(0,n.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/sql-data-sources-csv.html#data-source-option"},"official documentation"),"."),(0,n.kt)("h3",{id:"write"},"Write"),(0,n.kt)("p",null,"The CSV format is not recommended for writing Trevas ",(0,n.kt)("inlineCode",{parentName:"p"},"Dataset"),"s (see ",(0,n.kt)("a",{href:(0,o.Z)("/developer-guide/spark-mode/data-sources#bonnes-pratiques-trevas")},"here"),")"))}u.isMDXComponent=!0}}]);