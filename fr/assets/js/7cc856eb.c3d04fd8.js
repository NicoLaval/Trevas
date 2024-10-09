"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[6428],{25080:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=t(74848),a=t(28453);const r={slug:"/trevas-persistent-assignment",title:"Trevas - Assignements persistants",authors:["nicolas"],tags:["Trevas"]},i=void 0,o={permalink:"/Trevas/fr/blog/trevas-persistent-assignment",source:"@site/i18n/fr/docusaurus-plugin-content-blog/2023-11-22-trevas-persistent-assignment.mdx",title:"Trevas - Assignements persistants",description:"Nouveaut\xe9s",date:"2023-11-22T00:00:00.000Z",tags:[{inline:!0,label:"Trevas",permalink:"/Trevas/fr/blog/tags/trevas"}],readingTime:.44,hasTruncateMarker:!1,authors:[{name:"Nicolas Laval",link:"https://github.com/NicoLaval",title:"Making Sense - Developer",image:"/img/profile_pic_nicolas_laval.jpg",key:"nicolas",page:null}],frontMatter:{slug:"/trevas-persistent-assignment",title:"Trevas - Assignements persistants",authors:["nicolas"],tags:["Trevas"]},unlisted:!1,prevItem:{title:"Trevas - Java 17",permalink:"/Trevas/fr/blog/trevas-java-17"},nextItem:{title:"Trevas - check_hierarchy",permalink:"/Trevas/fr/blog/trevas-check_hierarchy"}},c={authorsImageUrls:[void 0]},l=[{value:"Nouveaut\xe9s",id:"nouveaut\xe9s",level:3},{value:"G\xe9rer <code>PersistentDataset</code>",id:"g\xe9rer-persistentdataset",level:3}];function p(e){const s={code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h3,{id:"nouveaut\xe9s",children:"Nouveaut\xe9s"}),"\n",(0,n.jsxs)(s.p,{children:["Trevas 1.2.0 inclut le support des assignements persistants : ",(0,n.jsx)(s.code,{children:"ds1 <- ds;"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Dans Trevas, les datatsets persistants sont repr\xe9sent\xe9s par ",(0,n.jsx)(s.code,{children:"PersistentDataset"}),"."]}),"\n",(0,n.jsxs)(s.h3,{id:"g\xe9rer-persistentdataset",children:["G\xe9rer ",(0,n.jsx)(s.code,{children:"PersistentDataset"})]}),"\n",(0,n.jsxs)(s.p,{children:["Les datasets Trevas sont repr\xe9sent\xe9s par ",(0,n.jsx)(s.code,{children:"Dataset"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Apr\xe8s avoir execut\xe9 le moteur Trevas, vous pouvez utiliser les datasets persistants comme suit :"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"Bindings engineBindings = engine.getContext().getBindings(ScriptContext.ENGINE_SCOPE);\nengineBindings.forEach((k, v) -> {\n    if (v instanceof PersistentDataset) {\n        fr.insee.vtl.model.Dataset ds = ((PersistentDataset) v).getDelegate();\n        if (ds instanceof SparkDataset) {\n            Dataset<Row> sparkDs = ((SparkDataset) ds).getSparkDataset();\n            // Do what you want with sparkDs\n        }\n    }\n});\n"})})]})}function d(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>o});var n=t(96540);const a={},r=n.createContext(a);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);