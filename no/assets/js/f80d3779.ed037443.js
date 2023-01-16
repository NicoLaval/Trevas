"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[8869],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},341:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={id:"index-basic-mode",title:"Grunnleggende modus",sidebar_label:"Oversikt",slug:"/developer-guide/basic-mode",custom_edit_url:null},o=void 0,s={unversionedId:"developer-guide/basic-mode/index-basic-mode",id:"developer-guide/basic-mode/index-basic-mode",title:"Grunnleggende modus",description:"InMemoryDataset",source:"@site/i18n/no/docusaurus-plugin-content-docs/current/developer-guide/basic-mode/index-basic-mode.mdx",sourceDirName:"developer-guide/basic-mode",slug:"/developer-guide/basic-mode",permalink:"/no/developer-guide/basic-mode",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1673881924,formattedLastUpdatedAt:"16. jan. 2023",frontMatter:{id:"index-basic-mode",title:"Grunnleggende modus",sidebar_label:"Oversikt",slug:"/developer-guide/basic-mode",custom_edit_url:null},sidebar:"docs",previous:{title:"Oversikt",permalink:"/no/developer-guide"},next:{title:"Oversikt",permalink:"/no/developer-guide/basic-mode/data-sources"}},l={},d=[{value:"InMemoryDataset",id:"inmemorydataset",level:3},{value:"Eksempel",id:"eksempel",level:3}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"inmemorydataset"},"InMemoryDataset"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"InMemoryDataset")," datasett brukes til \xe5 representere statistiske tabeller i en Java-applikasjon."),(0,a.kt)("h3",{id:"eksempel"},"Eksempel"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'ScriptEngine engine = new ScriptEngineManager().getEngineByName("vtl");\n\nBindings bindings = new SimpleBindings();\n\nInMemoryDataset dataset = new InMemoryDataset(\n                List.of(\n                        Map.of("var1", "x", "var2", "y", "var3", 5),\n                        Map.of("var1", "xx", "var2", "yy", "var3", 10)\n                ),\n                Map.of("var1", String.class, "var2", String.class, "var3", Long.class),\n                Map.of("var1", Role.IDENTIFIER, "var2", Role.ATTRIBUTE, "var3", Role.MEASURE)\n);\nbindings.put("myDataset", dataset);\nengine.getContext().setBindings(bindings, ScriptContext.ENGINE_SCOPE);\n\nString script = "res := myDataset[filter var3 > 6];";\n\ntry {\n    engine.eval(script);\n} catch (ScriptException e) {\n    e.printStackTrace();\n}\n\nBindings outputBindings = engine.getContext().getBindings(ScriptContext.ENGINE_SCOPE);\nInMemoryDataset result = (InMemoryDataset) outputBindings.get("res");\n\nSystem.out.println(result.getDataPoints().size());\n// 1\n')))}p.isMDXComponent=!0}}]);