"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[895],{82432:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"developer-guide/basic-mode/data-sources/json","title":"Grunnleggende modus - JSON-kilde","description":"Importer jackson-modul fra Trevas","source":"@site/i18n/no/docusaurus-plugin-content-docs/current/developer-guide/basic-mode/data-sources/json.mdx","sourceDirName":"developer-guide/basic-mode/data-sources","slug":"/developer-guide/basic-mode/data-sources/json","permalink":"/Trevas/no/developer-guide/basic-mode/data-sources/json","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","lastUpdatedAt":1737305883000,"frontMatter":{"id":"json","title":"Grunnleggende modus - JSON-kilde","sidebar_label":"JSON","slug":"/developer-guide/basic-mode/data-sources/json","custom_edit_url":null},"sidebar":"docs","previous":{"title":"JDBC","permalink":"/Trevas/no/developer-guide/basic-mode/data-sources/jdbc"},"next":{"title":"Andre","permalink":"/Trevas/no/developer-guide/basic-mode/data-sources/others"}}');var r=s(74848),a=s(28453);const o={id:"json",title:"Grunnleggende modus - JSON-kilde",sidebar_label:"JSON",slug:"/developer-guide/basic-mode/data-sources/json",custom_edit_url:null},l=void 0,d={},c=[{value:"Importer jackson-modul fra Trevas",id:"importer-jackson-modul-fra-trevas",level:3},{value:"Sch\xe9ma",id:"sch\xe9ma",level:3},{value:"Bruke <code>vtl-jackson</code> modulen",id:"bruke-vtl-jackson-modulen",level:3},{value:"Global uttalelse",id:"global-uttalelse",level:4},{value:"Eksempel p\xe5 deserialisering",id:"eksempel-p\xe5-deserialisering",level:4}];function i(e){const n={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"importer-jackson-modul-fra-trevas",children:"Importer jackson-modul fra Trevas"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>fr.insee.trevas</groupId>\n    <artifactId>vtl-jackson</artifactId>\n    <version>1.7.0</version>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"sch\xe9ma",children:"Sch\xe9ma"}),"\n",(0,r.jsxs)(n.p,{children:["JSON-representasjonen av et ",(0,r.jsx)(n.code,{children:"Datasett"})," er definert som :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n\t"dataStructure": [\n\t\t{ "name": "id", "type": "STRING", "role": "IDENTIFIER" },\n\t\t{ "name": "x", "type": "INTEGER", "role": "MEASURE" },\n\t\t{ "name": "y", "type": "FLOAT", "role": "MEASURE" }\n\t],\n\t"dataPoints": [\n\t\t["0001", 10, 50.5],\n\t\t["0002", 20, -8],\n\t\t["0003", 1000, 0],\n\t\t["0004", 1, 4.5]\n\t]\n}\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"bruke-vtl-jackson-modulen",children:["Bruke ",(0,r.jsx)(n.code,{children:"vtl-jackson"})," modulen"]}),"\n",(0,r.jsx)(n.h4,{id:"global-uttalelse",children:"Global uttalelse"}),"\n",(0,r.jsx)(n.p,{children:"Modulen kan deklareres globalt p\xe5 klientprosjektniv\xe5."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public ObjectMapper objectMapper() {\n    return new ObjectMapper()\n            .registerModule(new TrevasModule());\n}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"eksempel-p\xe5-deserialisering",children:"Eksempel p\xe5 deserialisering"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"ObjectMapper objectMapper = new ObjectMapper();\nobjectMapper.readValue(json, Dataset.class);\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(96540);const r={},a=t.createContext(r);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);