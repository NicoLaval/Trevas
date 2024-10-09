"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[5615],{85134:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var n=d(74848),o=d(28453);const r={id:"jdbc",title:"Mode de base - Source JDBC",sidebar_label:"JDBC",slug:"/developer-guide/basic-mode/data-sources/jdbc",custom_edit_url:null},s=void 0,c={id:"developer-guide/basic-mode/data-sources/jdbc",title:"Mode de base - Source JDBC",description:"Importer le module JDBC de Trevas",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/developer-guide/basic-mode/data-sources/jdbc.mdx",sourceDirName:"developer-guide/basic-mode/data-sources",slug:"/developer-guide/basic-mode/data-sources/jdbc",permalink:"/Trevas/fr/developer-guide/basic-mode/data-sources/jdbc",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1728455981e3,frontMatter:{id:"jdbc",title:"Mode de base - Source JDBC",sidebar_label:"JDBC",slug:"/developer-guide/basic-mode/data-sources/jdbc",custom_edit_url:null},sidebar:"docs",previous:{title:"Vue d'ensemble",permalink:"/Trevas/fr/developer-guide/basic-mode/data-sources"},next:{title:"JSON",permalink:"/Trevas/fr/developer-guide/basic-mode/data-sources/json"}},a={},i=[{value:"Importer le module JDBC de Trevas",id:"importer-le-module-jdbc-de-trevas",level:3},{value:"Utilisation du module <code>vtl-jdbc</code>",id:"utilisation-du-module-vtl-jdbc",level:3}];function l(e){const t={code:"code",h3:"h3",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"importer-le-module-jdbc-de-trevas",children:"Importer le module JDBC de Trevas"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:"<dependency>\n    <groupId>fr.insee.trevas</groupId>\n    <artifactId>vtl-jdbc</artifactId>\n    <version>1.5.0</version>\n</dependency>\n"})}),"\n",(0,n.jsxs)(t.h3,{id:"utilisation-du-module-vtl-jdbc",children:["Utilisation du module ",(0,n.jsx)(t.code,{children:"vtl-jdbc"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'connection = DriverManager.getConnection(...);\n\nStatement statement = connection.createStatement();\n\nJDBCDataset jdbcDataset = new JDBCDataset(() -> {\n    try {\n        return statement.executeQuery("select * from ds1;");\n    } catch (SQLException se) {\n        throw new RuntimeException(se);\n    }\n});\n'})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,d)=>{d.d(t,{R:()=>s,x:()=>c});var n=d(96540);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);