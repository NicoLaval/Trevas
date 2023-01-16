"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[1449],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,g=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(g,l(l({ref:t},u),{},{components:r})):a.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:n,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4188:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={id:"general-operators",title:"VTL - General purpose operators",sidebar_label:"General purpose operators",slug:"/user-guide/coverage/general-operators",custom_edit_url:null},l=void 0,p={unversionedId:"user-guide/coverage/general-operators",id:"user-guide/coverage/general-operators",title:"VTL - General purpose operators",description:"| Name                                               | Symbol |     Supported      |",source:"@site/docs/user-guide/coverage/general-operators.mdx",sourceDirName:"user-guide/coverage",slug:"/user-guide/coverage/general-operators",permalink:"/Trevas/user-guide/coverage/general-operators",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1673886801,formattedLastUpdatedAt:"Jan 16, 2023",frontMatter:{id:"general-operators",title:"VTL - General purpose operators",sidebar_label:"General purpose operators",slug:"/user-guide/coverage/general-operators",custom_edit_url:null},sidebar:"docs",previous:{title:"Overview",permalink:"/Trevas/user-guide/coverage"},next:{title:"Join operators",permalink:"/Trevas/user-guide/coverage/join-operators"}},i={},s=[],u={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Symbol"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Supported"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Parentheses"),(0,n.kt)("td",{parentName:"tr",align:"left"},"( )"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Persistent assignment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"<-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Temporary assignment"),(0,n.kt)("td",{parentName:"tr",align:"left"},":="),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Membership"),(0,n.kt)("td",{parentName:"tr",align:"left"},"#"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"User-defined operator call"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Evaluation of an external routine"),(0,n.kt)("td",{parentName:"tr",align:"left"},"eval"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Type conversion (string, integer, double, boolean)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"cast"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Type conversion (others)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"cast"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c")))))}c.isMDXComponent=!0}}]);