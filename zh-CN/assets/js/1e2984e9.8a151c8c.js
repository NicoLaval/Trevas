"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[3590],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),v=n,d=p["".concat(i,".").concat(v)]||p[v]||m[v]||o;return r?a.createElement(d,l(l({ref:t},c),{},{components:r})):a.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=v;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},88529:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(67294);const n=e=>{let{label:t,href:r}=e;return a.createElement("a",{href:r},t)}},52367:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),o=r(44996),l=r(50941),s=r(88529);const i={slug:"/trevas-sdmx",title:"Trevas - SDMX",authors:["nicolas"],tags:["Trevas","SDMX"]},u=void 0,c={permalink:"/Trevas/zh-CN/blog/trevas-sdmx",source:"@site/blog/2024-06-25-trevas-sdmx.mdx",title:"Trevas - SDMX",description:"News",date:"2024-06-25T00:00:00.000Z",formattedDate:"2024\u5e746\u670825\u65e5",tags:[{label:"Trevas",permalink:"/Trevas/zh-CN/blog/tags/trevas"},{label:"SDMX",permalink:"/Trevas/zh-CN/blog/tags/sdmx"}],readingTime:.7,hasTruncateMarker:!1,authors:[{name:"Nicolas Laval",link:"https://github.com/NicoLaval",title:"Making Sense - Developer",image:"/img/profile_pic_nicolas_laval.jpg",key:"nicolas"}],frontMatter:{slug:"/trevas-sdmx",title:"Trevas - SDMX",authors:["nicolas"],tags:["Trevas","SDMX"]},nextItem:{title:"Trevas - Temporal operators",permalink:"/Trevas/zh-CN/blog/trevas-temporal-operators"}},p={authorsImageUrls:[void 0]},m=[{value:"News",id:"news",level:3},{value:"Overview",id:"overview",level:4},{value:"Tools available",id:"tools-available",level:4},{value:"Troubleshooting",id:"troubleshooting",level:4}],v={toc:m};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"news"},"News"),(0,n.kt)("p",null,"Trevas 1.4.1 introduces the VTL SDMX module."),(0,n.kt)("p",null,"This module enables to consume SDMX metadata sources to instantiate Trevas DataStructures and Datasets."),(0,n.kt)("p",null,"It also allows to execute the VTL TransformationSchemes to obtain the resulting persistent datasets."),(0,n.kt)("h4",{id:"overview"},"Overview"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)(l.Z,{alt:"VTL SDMX Diagram",sources:{light:(0,o.Z)("/img/vtl-sdmx-light.svg"),dark:(0,o.Z)("/img/vtl-sdmx-dark.svg")},mdxType:"ThemedImage"})),(0,n.kt)("p",null,"Trevas supports the above SDMX message elements. Only the VtlMappingSchemes element is optional."),(0,n.kt)("p",null,"The elements in box 1 are used to produce Trevas DataStructures, filling VTL components attributes name, role, type, nullable and valuedomain."),(0,n.kt)("p",null,"The elements in box 2 are used to generate the VTL code (rulesets & transformations)."),(0,n.kt)("h4",{id:"tools-available"},"Tools available"),(0,n.kt)("p",null,"SDMX Trevas tools are documented ",(0,n.kt)(s.Z,{label:"here",href:(0,o.Z)("/developer-guide/spark-mode/data-sources/sdmx"),mdxType:"Link"}),"."),(0,n.kt)("h4",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Have a look to ",(0,n.kt)(s.Z,{label:"this section",href:(0,o.Z)("/developer-guide/spark-mode/data-sources/sdmx#troubleshooting"),mdxType:"Link"}),"."))}d.isMDXComponent=!0}}]);