"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[7463],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>N});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),d=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(u.Provider,{value:e},t.children)},o="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),o=d(n),s=r,N=o["".concat(u,".").concat(s)]||o[s]||k[s]||l;return n?a.createElement(N,i(i({ref:e},m),{},{components:n})):a.createElement(N,i({ref:e},m))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p[o]="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},299:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={id:"index-vtl",title:"VTL",sidebar_label:"\u6982\u8ff0",slug:"/user-guide/vtl",custom_edit_url:null},i=void 0,p={unversionedId:"user-guide/vtl/index-vtl",id:"user-guide/vtl/index-vtl",title:"VTL",description:"Documentation",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/vtl/index-vtl.mdx",sourceDirName:"user-guide/vtl",slug:"/user-guide/vtl",permalink:"/Trevas/zh-CN/user-guide/vtl",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1683885989,formattedLastUpdatedAt:"2023\u5e745\u670812\u65e5",frontMatter:{id:"index-vtl",title:"VTL",sidebar_label:"\u6982\u8ff0",slug:"/user-guide/vtl",custom_edit_url:null},sidebar:"docs",previous:{title:"v1.x.x",permalink:"/Trevas/zh-CN/releases/1.x.x"},next:{title:"\u6982\u8ff0",permalink:"/Trevas/zh-CN/user-guide/vtl/sas-vtl"}},u={},d=[{value:"Documentation",id:"documentation",level:2},{value:"Jeux de donn\xe9es",id:"jeux-de-donn\xe9es",level:2},{value:"Exemple simple",id:"exemple-simple",level:2}],m={toc:d};function o(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("p",null,"La documentation de VTL est accessible sur le site officiel ",(0,r.kt)("a",{parentName:"p",href:"https://sdmx.org/"},"SDMX")," :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://sdmx.org/wp-content/uploads/VTL-2.0-User-Manual-20180416-final.pdf"},"Manuel utilisateur")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://sdmx.org/wp-content/uploads/VTL-2.0-Reference-Manual-20180712-final.pdf"},"Manuel de r\xe9f\xe9rence"))),(0,r.kt)("h2",{id:"jeux-de-donn\xe9es"},"Jeux de donn\xe9es"),(0,r.kt)("p",null,"Les jeux de donn\xe9es VTL doivent \xeatre d\xe9crit par des m\xe9tadonn\xe9es. Les diff\xe9rentes colonnes ont un ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," et un ",(0,r.kt)("inlineCode",{parentName:"p"},"role"),"."),(0,r.kt)("p",null,"Par d\xe9faut, dans Trevas, une colonne sans type ni r\xf4le se verra affecter le ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," et le ",(0,r.kt)("inlineCode",{parentName:"p"},"role")," ",(0,r.kt)("inlineCode",{parentName:"p"},"measure"),"."),(0,r.kt)("p",null,"L'utilisateur aura ensuite la possibilit\xe9 de muter ces attributs au sein de son script, via les op\xe9rateurs ",(0,r.kt)("inlineCode",{parentName:"p"},"calc")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"cast")," notamment."),(0,r.kt)("h2",{id:"exemple-simple"},"Exemple simple"),(0,r.kt)("p",null,"En consid\xe9rant ",(0,r.kt)("inlineCode",{parentName:"p"},"ds_1")," d\xe9finit comme suit :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"id_1"),(0,r.kt)("th",{parentName:"tr",align:null},"id_2"),(0,r.kt)("th",{parentName:"tr",align:null},"me_1"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"role"),(0,r.kt)("td",{parentName:"tr",align:null},"identifier"),(0,r.kt)("td",{parentName:"tr",align:null},"identifier"),(0,r.kt)("td",{parentName:"tr",align:null},"measure")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"id_1"),(0,r.kt)("th",{parentName:"tr",align:null},"id_2"),(0,r.kt)("th",{parentName:"tr",align:null},"me_1"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"75001"'),(0,r.kt)("td",{parentName:"tr",align:null},'"75"'),(0,r.kt)("td",{parentName:"tr",align:null},'"10"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"75002"'),(0,r.kt)("td",{parentName:"tr",align:null},'"75"'),(0,r.kt)("td",{parentName:"tr",align:null},'"100"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"70001"'),(0,r.kt)("td",{parentName:"tr",align:null},'"70"'),(0,r.kt)("td",{parentName:"tr",align:null},'"5"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"70002"'),(0,r.kt)("td",{parentName:"tr",align:null},'"70"'),(0,r.kt)("td",{parentName:"tr",align:null},'"70"')))),(0,r.kt)("p",null,"Pour obtenir la somme de ",(0,r.kt)("inlineCode",{parentName:"p"},"me_1")," par ",(0,r.kt)("inlineCode",{parentName:"p"},"id_2"),", il faut que seul ",(0,r.kt)("inlineCode",{parentName:"p"},"id_2")," ait pour r\xf4le ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," et que le type de ",(0,r.kt)("inlineCode",{parentName:"p"},"me_1")," soit ",(0,r.kt)("inlineCode",{parentName:"p"},"integer"),". On applique donc le script suivant :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ds_2 := ds_1[calc measure id_2 := id_2, me_1 := cast(me_1, integer)];\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ds_2")," est alors :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"id_1"),(0,r.kt)("th",{parentName:"tr",align:null},"id_2"),(0,r.kt)("th",{parentName:"tr",align:null},"me_1"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"role"),(0,r.kt)("td",{parentName:"tr",align:null},"measure"),(0,r.kt)("td",{parentName:"tr",align:null},"identifier"),(0,r.kt)("td",{parentName:"tr",align:null},"measure")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"id_1"),(0,r.kt)("th",{parentName:"tr",align:null},"id_2"),(0,r.kt)("th",{parentName:"tr",align:null},"me_1"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"75001"'),(0,r.kt)("td",{parentName:"tr",align:null},'"75"'),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"75002"'),(0,r.kt)("td",{parentName:"tr",align:null},'"75"'),(0,r.kt)("td",{parentName:"tr",align:null},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"70001"'),(0,r.kt)("td",{parentName:"tr",align:null},'"70"'),(0,r.kt)("td",{parentName:"tr",align:null},"5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"70002"'),(0,r.kt)("td",{parentName:"tr",align:null},'"70"'),(0,r.kt)("td",{parentName:"tr",align:null},"70")))),(0,r.kt)("p",null,"On peut dor\xe9navant appliquer l'op\xe9rateur ",(0,r.kt)("inlineCode",{parentName:"p"},"aggr")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ds_3 := ds_2[aggr sum_me_1 := sum(me_1) group by id_2];\n")),(0,r.kt)("p",null,"Et obtenir ",(0,r.kt)("inlineCode",{parentName:"p"},"ds_3")," :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"id_2"),(0,r.kt)("th",{parentName:"tr",align:null},"sum_me_1"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"role"),(0,r.kt)("td",{parentName:"tr",align:null},"identifier"),(0,r.kt)("td",{parentName:"tr",align:null},"measure")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"id_2"),(0,r.kt)("th",{parentName:"tr",align:null},"me_1"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"75"'),(0,r.kt)("td",{parentName:"tr",align:null},"110")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"70"'),(0,r.kt)("td",{parentName:"tr",align:null},"75")))))}o.isMDXComponent=!0}}]);