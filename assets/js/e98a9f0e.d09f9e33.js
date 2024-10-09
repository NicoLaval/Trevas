"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[6536],{9853:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>g});var t=i(74848),s=i(28453),r=i(86025),a=i(28882);const d={id:"index-developer-guide",title:"Developer guide",sidebar_label:"Overview",slug:"/developer-guide",custom_edit_url:null},l=void 0,o={id:"developer-guide/index-developer-guide",title:"Developer guide",description:"Import the Trevas engine",source:"@site/docs/developer-guide/index-developer-guide.mdx",sourceDirName:"developer-guide",slug:"/developer-guide",permalink:"/Trevas/developer-guide",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1728455981e3,frontMatter:{id:"index-developer-guide",title:"Developer guide",sidebar_label:"Overview",slug:"/developer-guide",custom_edit_url:null},sidebar:"docs",previous:{title:"Clause operators",permalink:"/Trevas/user-guide/coverage/clause-operators"},next:{title:"Overview",permalink:"/Trevas/developer-guide/basic-mode"}},c={},g=[{value:"Import the Trevas engine",id:"import-the-trevas-engine",level:3},{value:"Instantiate the Trevas engine",id:"instantiate-the-trevas-engine",level:3},{value:"Execution mode",id:"execution-mode",level:3}];function v(e){const n={code:"code",h3:"h3",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"import-the-trevas-engine",children:"Import the Trevas engine"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>fr.insee.trevas</groupId>\n    <artifactId>vtl-engine</artifactId>\n    <version>1.5.0</version>\n</dependency>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"instantiate-the-trevas-engine",children:"Instantiate the Trevas engine"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'// Start engine\nScriptEngine engine = new ScriptEngineManager().getEngineByName("vtl");\n\n// Add input bindings to engine\nBindings bindings = new SimpleBindings();\nInMemoryDataset dataset = new InMemoryDataset(\n                List.of(\n                        Map.of("var1", "x", "var2", "y", "var3", 5),\n                        Map.of("var1", "xx", "var2", "yy", "var3", 10)\n                ),\n                Map.of("var1", String.class, "var2", String.class, "var3", Long.class),\n                Map.of("var1", Role.IDENTIFIER, "var2", Role.ATTRIBUTE, "var3", Role.MEASURE)\n);\nbindings.put("a", 1);\nbindings.put("ds", dataset);\nengine.setBindings(b, ScriptContext.ENGINE_SCOPE);\n\n// Execute script\ntry {\n        engine.eval("b := a + 1; " +\n\t\t\t\t\t"ds1 := ds;" +\n\t\t\t\t\t"ds2 <- ds;");\n} catch (VtlScriptException e) {\n\t\tlogger.warn("Eval failed: ", e);\n}\n\n// Get result\nLong result = (Long) engine.getBindings(ScriptContext.ENGINE_SCOPE).get("b");\nDataset ds1 = (Dataset) engine.getBindings(ScriptContext.ENGINE_SCOPE).get("ds1");\nPersistentDataset result = (PersistentDataset) engine.getBindings(ScriptContext.ENGINE_SCOPE).get("ds2");\n'})}),"\n",(0,t.jsx)(n.h3,{id:"execution-mode",children:"Execution mode"}),"\n",(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col",children:(0,t.jsx)(a.A,{title:"Basic mode",page:(0,r.Ay)("/developer-guide/basic-mode")})}),(0,t.jsx)("div",{className:"col",children:(0,t.jsx)(a.A,{title:"Spark mode",page:(0,r.Ay)("/developer-guide/spark-mode")})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(v,{...e})}):v(e)}},28882:(e,n,i)=>{i.d(n,{A:()=>m});var t=i(96540),s=i(28453),r=i(72774);const a="riContainer_QAfm",d="riDescriptionShort_ogAL",l="riDetail_rDiW",o="riIcon_zSrR",c="riTitle__Mkd",g="riDescription_k_lG",v="riMore_lLbd";var p=i(34164),u=i(74848);const m=e=>{const[n,i]=t.useState(!1);return(0,u.jsxs)("a",{href:e.page,className:a,children:[(0,u.jsxs)("div",{className:d,children:[(0,u.jsx)("div",{className:o,children:(0,u.jsx)("span",{className:"fe fe-zap"})}),(0,u.jsxs)("div",{className:l,children:[(0,u.jsx)("div",{className:c,children:(0,u.jsx)("a",{href:e.page,children:e.title})}),(0,u.jsxs)("div",{className:g,children:[e.description,t.Children.count(e.children)>0&&(0,u.jsx)("span",{className:(0,p.A)(v,"fe","fe-more-horizontal"),onClick:()=>i(!n)})]})]})]}),n&&(0,u.jsx)("div",{className:"ri-description-long",children:(0,u.jsx)(s.x,{components:r.A,children:e.children})})]})}}}]);