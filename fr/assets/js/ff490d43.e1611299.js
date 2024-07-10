"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[1936],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>s});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),g=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=g(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=g(r),u=n,s=c["".concat(p,".").concat(u)]||c[u]||m[u]||l;return r?a.createElement(s,o(o({ref:e},d),{},{components:r})):a.createElement(s,o({ref:e},d))}));function s(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[c]="string"==typeof t?t:n,o[1]=i;for(var g=2;g<l;g++)o[g]=r[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},92853:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var a=r(87462),n=(r(67294),r(3905));const l={id:"aggregate-operators",title:"VTL - Op\xe9rateurs d'agr\xe9gat",sidebar_label:"Op\xe9rateurs d'agr\xe9gat",slug:"/user-guide/coverage/aggregate-operators",custom_edit_url:null},o=void 0,i={unversionedId:"user-guide/coverage/aggregate-operators",id:"user-guide/coverage/aggregate-operators",title:"VTL - Op\xe9rateurs d'agr\xe9gat",description:"| Nom                                    | Symbole     |      InMemory      |       Spark        |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/user-guide/coverage/aggregate-operators.mdx",sourceDirName:"user-guide/coverage",slug:"/user-guide/coverage/aggregate-operators",permalink:"/Trevas/fr/user-guide/coverage/aggregate-operators",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1720593860,formattedLastUpdatedAt:"10 juil. 2024",frontMatter:{id:"aggregate-operators",title:"VTL - Op\xe9rateurs d'agr\xe9gat",sidebar_label:"Op\xe9rateurs d'agr\xe9gat",slug:"/user-guide/coverage/aggregate-operators",custom_edit_url:null},sidebar:"docs",previous:{title:"Agr\xe9gation hi\xe9rarchique",permalink:"/Trevas/fr/user-guide/coverage/hierarchical-aggregation"},next:{title:"Op\xe9rateurs analytiques",permalink:"/Trevas/fr/user-guide/coverage/analytic-operators"}},p={},g=[],d={toc:g};function c(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Nom"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Symbole"),(0,n.kt)("th",{parentName:"tr",align:"center"},"InMemory"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Spark"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Instanciation de l'op\xe9rateur d'agr\xe9gat"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Comptage du nombre de point de donn\xe9es"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Valeur minimuale"),(0,n.kt)("td",{parentName:"tr",align:"left"},"min"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Valeur maximale"),(0,n.kt)("td",{parentName:"tr",align:"left"},"max"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Valeur m\xe9diane"),(0,n.kt)("td",{parentName:"tr",align:"left"},"median"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Somme"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sum"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Moyenne"),(0,n.kt)("td",{parentName:"tr",align:"left"},"avg"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\xc9cart-type de la population"),(0,n.kt)("td",{parentName:"tr",align:"left"},"stddev_pop"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\xc9cart-type de l'\xe9chantillon"),(0,n.kt)("td",{parentName:"tr",align:"left"},"stddev_samp"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Variance de la population"),(0,n.kt)("td",{parentName:"tr",align:"left"},"var_pop"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Variance de l'\xe9chantillon"),(0,n.kt)("td",{parentName:"tr",align:"left"},"var_samp"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}c.isMDXComponent=!0}}]);