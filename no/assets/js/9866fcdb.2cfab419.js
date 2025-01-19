"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[2975],{459:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>c});var n=t(93171),a=t(74848),r=t(28453);const i={slug:"/trevas-persistent-assignments",title:"Trevas - Persistent assignments",authors:["nicolas"],tags:["Trevas"]},o=void 0,l={authorsImageUrls:[void 0]},c=[{value:"News",id:"news",level:3},{value:"Handle <code>PersistentDataset</code>",id:"handle-persistentdataset",level:3}];function d(e){const s={code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h3,{id:"news",children:"News"}),"\n",(0,a.jsxs)(s.p,{children:["Trevas 1.2.0 includes the persistent assignment support: ",(0,a.jsx)(s.code,{children:"ds1 <- ds;"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["In Trevas, persistent datasets are represented as ",(0,a.jsx)(s.code,{children:"PersistentDataset"}),"."]}),"\n",(0,a.jsxs)(s.h3,{id:"handle-persistentdataset",children:["Handle ",(0,a.jsx)(s.code,{children:"PersistentDataset"})]}),"\n",(0,a.jsxs)(s.p,{children:["Trevas datasets are represented as ",(0,a.jsx)(s.code,{children:"Dataset"}),"."]}),"\n",(0,a.jsx)(s.p,{children:"After running the Trevas engine, you can use persistent datasets with something like:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"Bindings engineBindings = engine.getContext().getBindings(ScriptContext.ENGINE_SCOPE);\nengineBindings.forEach((k, v) -> {\n    if (v instanceof PersistentDataset) {\n        fr.insee.vtl.model.Dataset ds = ((PersistentDataset) v).getDelegate();\n        if (ds instanceof SparkDataset) {\n            Dataset<Row> sparkDs = ((SparkDataset) ds).getSparkDataset();\n            // Do what you want with sparkDs\n        }\n    }\n});\n"})})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>o});var n=t(96540);const a={},r=n.createContext(a);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:s},e.children)}},93171:e=>{e.exports=JSON.parse('{"permalink":"/Trevas/no/blog/trevas-persistent-assignments","source":"@site/blog/2023-11-22-trevas-persistent-assignment.mdx","title":"Trevas - Persistent assignments","description":"News","date":"2023-11-22T00:00:00.000Z","tags":[{"inline":true,"label":"Trevas","permalink":"/Trevas/no/blog/tags/trevas"}],"readingTime":0.41,"hasTruncateMarker":false,"authors":[{"name":"Nicolas Laval","link":"https://github.com/NicoLaval","title":"Making Sense - Developer","image":"/img/profile_pic_nicolas_laval.jpg","key":"nicolas","page":null}],"frontMatter":{"slug":"/trevas-persistent-assignments","title":"Trevas - Persistent assignments","authors":["nicolas"],"tags":["Trevas"]},"unlisted":false,"prevItem":{"title":"Trevas - Java 17","permalink":"/Trevas/no/blog/trevas-java-17"},"nextItem":{"title":"Trevas - check_hierarchy","permalink":"/Trevas/no/blog/trevas-check_hierarchy"}}')}}]);