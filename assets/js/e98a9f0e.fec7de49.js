"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[1814],{9308:(e,t,n)=>{n.d(t,{Z:()=>v});var i=n(7294),r=n(3905),a=n(2195);const d="riContainer_QAfm",l="riDescriptionShort_ogAL",s="riDetail_rDiW",o="riIcon_zSrR",c="riTitle__Mkd",p="riDescription_k_lG",g="riMore_lLbd";var u=n(6010);const v=e=>{const[t,n]=i.useState(!1);return i.createElement("a",{href:e.page,className:d},i.createElement("div",{className:l},i.createElement("div",{className:o},i.createElement("span",{className:"fe fe-zap"})),i.createElement("div",{className:s},i.createElement("div",{className:c},i.createElement("a",{href:e.page},e.title)),i.createElement("div",{className:p},e.description,i.Children.count(e.children)>0&&i.createElement("span",{className:(0,u.Z)(g,"fe","fe-more-horizontal"),onClick:()=>n(!t)})))),t&&i.createElement("div",{className:"ri-description-long"},i.createElement(r.Zo,{components:a.Z},e.children)))}},6637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=n(7462),r=(n(7294),n(3905)),a=n(4996),d=n(9308);const l={id:"index-developer-guide",title:"Developer guide",sidebar_label:"Overview",slug:"/developer-guide",custom_edit_url:null},s=void 0,o={unversionedId:"developer-guide/index-developer-guide",id:"developer-guide/index-developer-guide",title:"Developer guide",description:"Import the Trevas engine",source:"@site/docs/developer-guide/index-developer-guide.mdx",sourceDirName:"developer-guide",slug:"/developer-guide",permalink:"/Trevas/developer-guide",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1686228782,formattedLastUpdatedAt:"Jun 8, 2023",frontMatter:{id:"index-developer-guide",title:"Developer guide",sidebar_label:"Overview",slug:"/developer-guide",custom_edit_url:null},sidebar:"docs",previous:{title:"Clause operators",permalink:"/Trevas/user-guide/coverage/clause-operators"},next:{title:"Overview",permalink:"/Trevas/developer-guide/basic-mode"}},c={},p=[{value:"Import the Trevas engine",id:"import-the-trevas-engine",level:3},{value:"Instanciate the Trevas engine",id:"instanciate-the-trevas-engine",level:3},{value:"Execution mode",id:"execution-mode",level:3}],g={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"import-the-trevas-engine"},"Import the Trevas engine"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>fr.insee.trevas</groupId>\n    <artifactId>vtl-engine</artifactId>\n    <version>1.0.0</version>\n</dependency>\n")),(0,r.kt)("h3",{id:"instanciate-the-trevas-engine"},"Instanciate the Trevas engine"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Start engine\nScriptEngine engine = new ScriptEngineManager().getEngineByName("vtl");\n\n// Add input bindings to engine\nBindings bindings = new SimpleBindings();\nbindings.put("a", 1);\nengine.setBindings(b, ScriptContext.ENGINE_SCOPE);\n\n// Execute script\ntry {\n        engine.eval("b := a + 1;");\n} catch (VtlScriptException e) {\n        logger.warn("Eval failed: ", e);\n}\n\n// Get result\nLong result = (Long) engine.getBindings(ScriptContext.ENGINE_SCOPE).get("b");\n')),(0,r.kt)("h3",{id:"execution-mode"},"Execution mode"),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col"},(0,r.kt)(d.Z,{title:"Basic mode",page:(0,a.Z)("/developer-guide/basic-mode"),mdxType:"Card"})),(0,r.kt)("div",{className:"col"},(0,r.kt)(d.Z,{title:"Spark mode",page:(0,a.Z)("/developer-guide/spark-mode"),mdxType:"Card"}))))}u.isMDXComponent=!0}}]);