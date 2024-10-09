"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[2975],{41845:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=s(74848),a=s(28453);const r={slug:"/trevas-persistent-assignments",title:"Trevas - Persistent assignments",authors:["nicolas"],tags:["Trevas"]},i=void 0,o={permalink:"/Trevas/zh-CN/blog/trevas-persistent-assignments",source:"@site/blog/2023-11-22-trevas-persistent-assignment.mdx",title:"Trevas - Persistent assignments",description:"News",date:"2023-11-22T00:00:00.000Z",tags:[{inline:!0,label:"Trevas",permalink:"/Trevas/zh-CN/blog/tags/trevas"}],readingTime:.41,hasTruncateMarker:!1,authors:[{name:"Nicolas Laval",link:"https://github.com/NicoLaval",title:"Making Sense - Developer",image:"/img/profile_pic_nicolas_laval.jpg",key:"nicolas",page:null}],frontMatter:{slug:"/trevas-persistent-assignments",title:"Trevas - Persistent assignments",authors:["nicolas"],tags:["Trevas"]},unlisted:!1,prevItem:{title:"Trevas - Java 17",permalink:"/Trevas/zh-CN/blog/trevas-java-17"},nextItem:{title:"Trevas - check_hierarchy",permalink:"/Trevas/zh-CN/blog/trevas-check_hierarchy"}},c={authorsImageUrls:[void 0]},l=[{value:"News",id:"news",level:3},{value:"Handle <code>PersistentDataset</code>",id:"handle-persistentdataset",level:3}];function d(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"news",children:"News"}),"\n",(0,n.jsxs)(t.p,{children:["Trevas 1.2.0 includes the persistent assignment support: ",(0,n.jsx)(t.code,{children:"ds1 <- ds;"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["In Trevas, persistent datasets are represented as ",(0,n.jsx)(t.code,{children:"PersistentDataset"}),"."]}),"\n",(0,n.jsxs)(t.h3,{id:"handle-persistentdataset",children:["Handle ",(0,n.jsx)(t.code,{children:"PersistentDataset"})]}),"\n",(0,n.jsxs)(t.p,{children:["Trevas datasets are represented as ",(0,n.jsx)(t.code,{children:"Dataset"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"After running the Trevas engine, you can use persistent datasets with something like:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Bindings engineBindings = engine.getContext().getBindings(ScriptContext.ENGINE_SCOPE);\nengineBindings.forEach((k, v) -> {\n    if (v instanceof PersistentDataset) {\n        fr.insee.vtl.model.Dataset ds = ((PersistentDataset) v).getDelegate();\n        if (ds instanceof SparkDataset) {\n            Dataset<Row> sparkDs = ((SparkDataset) ds).getSparkDataset();\n            // Do what you want with sparkDs\n        }\n    }\n});\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var n=s(96540);const a={},r=n.createContext(a);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);