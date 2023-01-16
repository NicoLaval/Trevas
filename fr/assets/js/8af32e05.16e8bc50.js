"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[4096],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},i="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),i=p(r),m=n,v=i["".concat(l,".").concat(m)]||i[m]||c[m]||o;return r?a.createElement(v,s(s({ref:t},d),{},{components:r})):a.createElement(v,s({ref:t},d))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[i]="string"==typeof e?e:n,s[1]=u;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3261:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=r(7462),n=(r(7294),r(3905)),o=r(4996);const s={id:"parquet",title:"Mode Spark - Source Parquet",sidebar_label:"Parquet",slug:"/developer-guide/spark-mode/data-sources/parquet",custom_edit_url:null},u=void 0,l={unversionedId:"developer-guide/spark-mode/data-sources/parquet",id:"developer-guide/spark-mode/data-sources/parquet",title:"Mode Spark - Source Parquet",description:"M\xe9tadonn\xe9es",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/developer-guide/spark-mode/data-sources/parquet.mdx",sourceDirName:"developer-guide/spark-mode/data-sources",slug:"/developer-guide/spark-mode/data-sources/parquet",permalink:"/fr/developer-guide/spark-mode/data-sources/parquet",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1673881924,formattedLastUpdatedAt:"16 janv. 2023",frontMatter:{id:"parquet",title:"Mode Spark - Source Parquet",sidebar_label:"Parquet",slug:"/developer-guide/spark-mode/data-sources/parquet",custom_edit_url:null},sidebar:"docs",previous:{title:"Vue d'ensemble",permalink:"/fr/developer-guide/spark-mode/data-sources"},next:{title:"CSV",permalink:"/fr/developer-guide/spark-mode/data-sources/csv"}},p={},d=[{value:"M\xe9tadonn\xe9es",id:"m\xe9tadonn\xe9es",level:3},{value:"Types",id:"types",level:4},{value:"Roles",id:"roles",level:4},{value:"Lecture",id:"lecture",level:3},{value:"\xc9criture",id:"\xe9criture",level:3}],i={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"m\xe9tadonn\xe9es"},"M\xe9tadonn\xe9es"),(0,n.kt)("p",null,"Les m\xe9tadonn\xe9es des jeux de donn\xe9es Parquet sont inf\xe9r\xe9es du sch\xe9ma."),(0,n.kt)("h4",{id:"types"},"Types"),(0,n.kt)("p",null,"Trevas assure la conversion entre les types Parquet et les types support\xe9s par le moteur Trevas."),(0,n.kt)("h4",{id:"roles"},"Roles"),(0,n.kt)("p",null,"Les r\xf4les VTL sont ajout\xe9s par Trevas au sch\xe9ma Parquet, via l'adjonction d'une m\xe9tadonn\xe9e ",(0,n.kt)("inlineCode",{parentName:"p"},"vtlRole")," sur chaque descriptif de champ."),(0,n.kt)("p",null,"Par d\xe9faut, les colonnes sans r\xf4le dans le sch\xe9ma Parquet auront pour r\xf4le ",(0,n.kt)("inlineCode",{parentName:"p"},"MEASURE")," dans Trevas."),(0,n.kt)("p",null,"VTL permet de faire \xe9voluer les r\xf4les au sein des scripts (voir ",(0,n.kt)("a",{href:(0,o.Z)("/user-guide/vtl")},"ici"),")"),(0,n.kt)("h3",{id:"lecture"},"Lecture"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'Dataset<Row> sparkDataset = spark.read().parquet("folder_path");\nSparkDataset dataset = new SparkDataset(sparkDataset);\n')),(0,n.kt)("h3",{id:"\xe9criture"},"\xc9criture"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// Trevas Spark Dataset\nSparkDataset dataset = ...;\n\n// Spark Dataset\nDataset<Row> sparkDataset = dataset.getSparkDataset();\n\nsparkDataset.write()\n            .mode(SaveMode.Overwrite)\n            .parquet("folder_path");\n')))}c.isMDXComponent=!0}}]);