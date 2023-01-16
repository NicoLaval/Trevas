"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[1151],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var a=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,i=function(e,r){if(null==e)return{};var t,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),m=function(e){var r=a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=m(e.components);return a.createElement(o.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},c=a.forwardRef((function(e,r){var t=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(t),c=i,f=p["".concat(o,".").concat(c)]||p[c]||u[c]||n;return t?a.createElement(f,s(s({ref:r},d),{},{components:t})):a.createElement(f,s({ref:r},d))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var n=t.length,s=new Array(n);s[0]=c;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l[p]="string"==typeof e?e:i,s[1]=l;for(var m=2;m<n;m++)s[m]=t[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4677:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>m});var a=t(7462),i=(t(7294),t(3905));const n={id:"index-grammar",title:"Modifications de la grammaire VTL",sidebar_label:"Modifications de la grammaire VTL",slug:"/administrator-guide/grammar",custom_edit_url:null},s=void 0,l={unversionedId:"administrator-guide/grammar/index-grammar",id:"administrator-guide/grammar/index-grammar",title:"Modifications de la grammaire VTL",description:"Utilisation de la grammaire VTL",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/administrator-guide/grammar/index-grammar.mdx",sourceDirName:"administrator-guide/grammar",slug:"/administrator-guide/grammar",permalink:"/fr/administrator-guide/grammar",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1673881924,formattedLastUpdatedAt:"16 janv. 2023",frontMatter:{id:"index-grammar",title:"Modifications de la grammaire VTL",sidebar_label:"Modifications de la grammaire VTL",slug:"/administrator-guide/grammar",custom_edit_url:null},sidebar:"docs",previous:{title:"Others",permalink:"/fr/developer-guide/spark-mode/data-sources/others"}},o={},m=[{value:"Utilisation de la grammaire VTL",id:"utilisation-de-la-grammaire-vtl",level:2},{value:"Adaptations de la grammaire",id:"adaptations-de-la-grammaire",level:3},{value:"Simplification de l&#39;arbre grammatical",id:"simplification-de-larbre-grammatical",level:4},{value:"Addition d&#39;op\xe9rateurs de distance",id:"addition-dop\xe9rateurs-de-distance",level:4}],d={toc:m};function p(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"utilisation-de-la-grammaire-vtl"},"Utilisation de la grammaire VTL"),(0,i.kt)("p",null,"Trevas s'appuie sur la grammaire formelle de VTL exprim\xe9e sous forme ",(0,i.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/Extended_Backus-Naur_Form"},"EBNF"),". La r\xe9f\xe9rence est l'upgrade de la version 2.0 publi\xe9e en juillet 2020 ",(0,i.kt)("a",{parentName:"p",href:"https://sdmx.org/wp-content/uploads/VTL-2.0-EBNF-Grammar-2020-07.zip"},"sur le site web SDMX"),"."),(0,i.kt)("p",null,"La grammaire consiste en deux fichiers pr\xeats \xe0 \xeatre trait\xe9s par le g\xe9n\xe9rateur de parseurs ",(0,i.kt)("a",{parentName:"p",href:"https://www.antlr.org/"},"Antlr")," :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/InseeFr/Trevas/blob/master/vtl-parser/src/main/antlr4/fr/insee/vtl/parser/VtlTokens.g4"},"VtlTokens.g4")," contient la liste des termes VTL valides.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/InseeFr/Trevas/blob/master/vtl-parser/src/main/antlr4/fr/insee/vtl/parser/Vtl.g4"},"Vtl.g4")," contient les r\xe8gles qui cr\xe9ent les expressions VTL valides."))),(0,i.kt)("p",null,"Antlr utilise ces fichiers pour produire un lexeur, qui cr\xe9e une liste de symboles du vocabulaire \xe0 partir d'un flot de caract\xe8res en entr\xe9e, et un parseur, qui cr\xe9e la structure grammaticale correspondant \xe0 cette liste de symboles. Antlr peut g\xe9n\xe9rer des parseurs utilisables dans diff\xe9rents langages cibles. Trevas utilise le parseur pour Java, qui est expos\xe9 dans le module ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/InseeFr/Trevas/tree/master/vtl-parser"},(0,i.kt)("inlineCode",{parentName:"a"},"vtl-parser")),"."),(0,i.kt)("h3",{id:"adaptations-de-la-grammaire"},"Adaptations de la grammaire"),(0,i.kt)("p",null,"Afin d'am\xe9liorer les performances et les fonctionnalit\xe9s, des modifications mineures ont \xe9t\xe9 faites \xe0 la grammaire VTL grammar utilis\xe9e dans Trevas."),(0,i.kt)("h4",{id:"simplification-de-larbre-grammatical"},"Simplification de l'arbre grammatical"),(0,i.kt)("p",null,"Comme document\xe9 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/VTL-Community/VTL-Community/issues/5"},"ici")," et ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/InseeFr/Trevas-JS/issues/40"},"ici"),", les branches ",(0,i.kt)("inlineCode",{parentName:"p"},"expr")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"exprComp")," de l'arbre grammatical sont presques identiques. Afin d'\xe9viter d'avoir \xe0 impl\xe9menter deux fois la m\xeame logique, la branche ",(0,i.kt)("inlineCode",{parentName:"p"},"exprComp")," a \xe9t\xe9 mise en commentaires par le commit ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/InseeFr/Trevas/commit/498c1f8be39702fbcfc89a3144ac1842d7771d93"},"498c1f8"),". Il fut remarqu\xe9 par la suite que cette modification invalidait \xe0 tort l'expression ",(0,i.kt)("inlineCode",{parentName:"p"},"COUNT()")," expression, et la r\xe8gle correspondante fut donc r\xe9introduite dans la grammaire par le commit ","[54f86f2]"," (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/InseeFr/Trevas/commit/54f86f27d2e8fdd57df1439d74ed56d225064a7d"},"https://github.com/InseeFr/Trevas/commit/54f86f27d2e8fdd57df1439d74ed56d225064a7d"),")."),(0,i.kt)("h4",{id:"addition-dop\xe9rateurs-de-distance"},"Addition d'op\xe9rateurs de distance"),(0,i.kt)("p",null,"Les op\xe9rateurs de distances tels que Levenshtein ou Jaro-Winkler sont commun\xe9ment utilis\xe9s dans les tests sur les cha\xeenes de caract\xe8res. Afin de les autoriser dans les expressions VTL, le commit ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/InseeFr/Trevas/commit/036dc6055240a38c19be7afd1d3067e370353f9f"},"036dc60")," a ajout\xe9 dans la grammaire une section ",(0,i.kt)("inlineCode",{parentName:"p"},"distanceOperators")," contenant une r\xe8gle ",(0,i.kt)("inlineCode",{parentName:"p"},"LEVENSHTEIN"),", ainsi que le symbole ",(0,i.kt)("inlineCode",{parentName:"p"},"LEVENSHTEIN")," dans le fichier du lexeur."))}p.isMDXComponent=!0}}]);