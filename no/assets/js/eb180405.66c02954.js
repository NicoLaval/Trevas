"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[2524],{28848:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=t(74848),a=t(28453);const i={id:"index-grammar",title:"Modifikasjoner av VTL-grammatikk",sidebar_label:"Modifikasjoner av VTL-grammatikk",slug:"/administrator-guide/grammar",custom_edit_url:null},s=void 0,l={id:"administrator-guide/grammar/index-grammar",title:"Modifikasjoner av VTL-grammatikk",description:"Bruke VTL-grammatikken",source:"@site/i18n/no/docusaurus-plugin-content-docs/current/administrator-guide/grammar/index-grammar.mdx",sourceDirName:"administrator-guide/grammar",slug:"/administrator-guide/grammar",permalink:"/Trevas/no/administrator-guide/grammar",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1728455981e3,frontMatter:{id:"index-grammar",title:"Modifikasjoner av VTL-grammatikk",sidebar_label:"Modifikasjoner av VTL-grammatikk",slug:"/administrator-guide/grammar",custom_edit_url:null},sidebar:"docs",previous:{title:"Andre",permalink:"/Trevas/no/developer-guide/spark-mode/data-sources/others"}},o={},d=[{value:"Bruke VTL-grammatikken",id:"bruke-vtl-grammatikken",level:2},{value:"Grammatikktilpasninger",id:"grammatikktilpasninger",level:3},{value:"Forenkling av det grammatiske treet",id:"forenkling-av-det-grammatiske-treet",level:4},{value:"Tilsetting av avstandsoperat\xf8rer",id:"tilsetting-av-avstandsoperat\xf8rer",level:4}];function m(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"bruke-vtl-grammatikken",children:"Bruke VTL-grammatikken"}),"\n",(0,n.jsxs)(r.p,{children:["Trevas er avhengig av den formelle grammatikken til VTL uttrykt som ",(0,n.jsx)(r.a,{href:"https://fr.wikipedia.org/wiki/Extended_Backus-Naur_Form",children:"EBNF"}),". La r\xe9f\xe9rence est l'upgrade de la version 2.0 publi\xe9e en juillet 2020 ",(0,n.jsx)(r.a,{href:"https://sdmx.org/wp-content/uploads/VTL-2.0-EBNF-Grammar-2020-07.zip",children:"sur le site web SDMX"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Grammatikken best\xe5r av to filer klare til \xe5 bli behandlet av ",(0,n.jsx)(r.a,{href:"https://www.antlr.org/",children:"Antlr"})," parsergeneratoren :"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://github.com/InseeFr/Trevas/blob/master/vtl-parser/src/main/antlr4/fr/insee/vtl/parser/VtlTokens.g4",children:"VtlTokens.g4"})," inneholder listen over gyldige VTL-termer."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://github.com/InseeFr/Trevas/blob/master/vtl-parser/src/main/antlr4/fr/insee/vtl/parser/Vtl.g4",children:"Vtl.g4"})," inneholder regler som lager gyldige VTL-uttrykk."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Antlr bruker disse filene til \xe5 produsere en lexer, som lager en liste over ordforr\xe5dssymboler fra en input-tegnstr\xf8m, og en parser, som lager den grammatiske strukturen som tilsvarer denne listen over symboler. Antlr kan generere parsere som kan brukes p\xe5 forskjellige m\xe5lspr\xe5k. Trevas bruker parseren for Java, som er eksponert i ",(0,n.jsx)(r.a,{href:"https://github.com/InseeFr/Trevas/tree/master/vtl-parser",children:(0,n.jsx)(r.code,{children:"vtl-parser"})})," modulen."]}),"\n",(0,n.jsx)(r.h3,{id:"grammatikktilpasninger",children:"Grammatikktilpasninger"}),"\n",(0,n.jsx)(r.p,{children:"For \xe5 forbedre ytelsen og funksjonaliteten er det gjort mindre endringer i VTL-grammatikken som brukes i Trevas."}),"\n",(0,n.jsx)(r.h4,{id:"forenkling-av-det-grammatiske-treet",children:"Forenkling av det grammatiske treet"}),"\n",(0,n.jsxs)(r.p,{children:["Som dokumentert ",(0,n.jsx)(r.a,{href:"https://github.com/VTL-Community/VTL-Community/issues/5",children:"her"})," og ",(0,n.jsx)(r.a,{href:"https://github.com/InseeFr/Trevas-JS/issues/40",children:"her"}),", ",(0,n.jsx)(r.code,{children:"expr"})," og ",(0,n.jsx)(r.code,{children:"exprComp"})," grenene til grammatikktreet er nesten identiske. For \xe5 unng\xe5 \xe5 m\xe5tte implementere den samme logikken to ganger, ble ",(0,n.jsx)(r.code,{children:"exprComp"})," grenen kommentert ut av commit ",(0,n.jsx)(r.a,{href:"https://github.com/InseeFr/Trevas/commit/498c1f8be39702fbcfc89a3144ac1842d7771d93",children:"498c1f8"}),". Det ble senere lagt merke til at denne modifikasjonen feilaktig ugyldiggjorde ",(0,n.jsx)(r.code,{children:"COUNT()"})," uttrykket, og den tilsvarende regelen ble derfor gjeninnf\xf8rt i grammatikken av commit ",(0,n.jsx)(r.a,{href:"https://github.com/InseeFr/Trevas/commit/54f86f27d2e8fdd57df1439d74ed56d225064a7d",children:"54f86f2"}),"."]}),"\n",(0,n.jsx)(r.h4,{id:"tilsetting-av-avstandsoperat\xf8rer",children:"Tilsetting av avstandsoperat\xf8rer"}),"\n",(0,n.jsxs)(r.p,{children:["Avstandsoperat\xf8rer som Levenshtein eller Jaro-Winkler brukes ofte i strengtesting. For \xe5 tillate dem i VTL-uttrykk, commit ",(0,n.jsx)(r.a,{href:"https://github.com/InseeFr/Trevas/commit/036dc6055240a38c19be7afd1d3067e370353f9f",children:"036dc60"})," lagt til en del i grammatikken ",(0,n.jsx)(r.code,{children:"distanceOperators"})," som inneholder en ",(0,n.jsx)(r.code,{children:"LEVENSHTEIN"})," regel, samt ",(0,n.jsx)(r.code,{children:"LEVENSHTEIN"})," symbolet i lexer-filen."]})]})}function c(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>l});var n=t(96540);const a={},i=n.createContext(a);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);