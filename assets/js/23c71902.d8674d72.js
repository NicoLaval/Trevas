"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[9724],{54868:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>n,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"administrator-guide/grammar/index-grammar","title":"Modifications of VTL grammar","description":"Usage of the VTL grammar","source":"@site/docs/administrator-guide/grammar/index-grammar.mdx","sourceDirName":"administrator-guide/grammar","slug":"/administrator-guide/grammar","permalink":"/Trevas/administrator-guide/grammar","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","lastUpdatedAt":1737305883000,"frontMatter":{"id":"index-grammar","title":"Modifications of VTL grammar","sidebar_label":"Modifications of VTL grammar","slug":"/administrator-guide/grammar","custom_edit_url":null},"sidebar":"docs","previous":{"title":"Provenance","permalink":"/Trevas/developer-guide/provenance"}}');var i=t(74848),s=t(28453);const n={id:"index-grammar",title:"Modifications of VTL grammar",sidebar_label:"Modifications of VTL grammar",slug:"/administrator-guide/grammar",custom_edit_url:null},o=void 0,d={},c=[{value:"Usage of the VTL grammar",id:"usage-of-the-vtl-grammar",level:2},{value:"Adaptations of the grammar",id:"adaptations-of-the-grammar",level:3},{value:"Simplification of the grammatical tree",id:"simplification-of-the-grammatical-tree",level:4},{value:"Addition of distance operators",id:"addition-of-distance-operators",level:4}];function m(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"usage-of-the-vtl-grammar",children:"Usage of the VTL grammar"}),"\n",(0,i.jsxs)(r.p,{children:["Trevas on the VTL formal grammar expressed with ",(0,i.jsx)(r.a,{href:"https://fr.wikipedia.org/wiki/Extended_Backus-Naur_Form",children:"EBNF"}),". The reference is the version 2.0 upgrade published in July 2020 ",(0,i.jsx)(r.a,{href:"https://sdmx.org/wp-content/uploads/VTL-2.0-EBNF-Grammar-2020-07.zip",children:"on the SDMX web site"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["The grammar consists of two files ready to be processed by the ",(0,i.jsx)(r.a,{href:"https://www.antlr.org/",children:"Antlr"})," parser generator:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"https://github.com/InseeFr/Trevas/blob/master/vtl-parser/src/main/antlr4/fr/insee/vtl/parser/VtlTokens.g4",children:"VtlTokens.g4"})," contains the list of valid VTL terms."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"https://github.com/InseeFr/Trevas/blob/master/vtl-parser/src/main/antlr4/fr/insee/vtl/parser/Vtl.g4",children:"Vtl.g4"})," contains the rules that produce valid VTL expressions."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["Antlr uses these files to produce a lexer that creates a list of vocabulary symbols from an input character stream, and a parser that creates the grammatical structure corresponding to this list of symbols. Antlr can generate parsers usable in different target languages. Trevas uses the Java parser, which is exposed in the ",(0,i.jsx)(r.a,{href:"https://github.com/InseeFr/Trevas/tree/master/vtl-parser",children:(0,i.jsx)(r.code,{children:"vtl-parser"})})," module."]}),"\n",(0,i.jsx)(r.h3,{id:"adaptations-of-the-grammar",children:"Adaptations of the grammar"}),"\n",(0,i.jsx)(r.p,{children:"In order to improve performance and functionalities, minor modifications were made to the VTL grammar used in Trevas."}),"\n",(0,i.jsx)(r.h4,{id:"simplification-of-the-grammatical-tree",children:"Simplification of the grammatical tree"}),"\n",(0,i.jsxs)(r.p,{children:["As documented ",(0,i.jsx)(r.a,{href:"https://github.com/VTL-Community/VTL-Community/issues/5",children:"here"})," and ",(0,i.jsx)(r.a,{href:"https://github.com/InseeFr/Trevas-JS/issues/40",children:"here"}),", the ",(0,i.jsx)(r.code,{children:"expr"})," and ",(0,i.jsx)(r.code,{children:"exprComp"})," branches of the grammatical tree are nearly identical. In order to avoid implementing the same logic twice, the ",(0,i.jsx)(r.code,{children:"exprComp"})," branch was commented out in the ",(0,i.jsx)(r.a,{href:"https://github.com/InseeFr/Trevas/commit/498c1f8be39702fbcfc89a3144ac1842d7771d93",children:"498c1f8"})," commit. It was then noticed that this modification wrongly invalidated the ",(0,i.jsx)(r.code,{children:"COUNT()"})," expression, and the corresponding rule was therefore reactivated in the grammar with the [54f86f2] (",(0,i.jsx)(r.a,{href:"https://github.com/InseeFr/Trevas/commit/54f86f27d2e8fdd57df1439d74ed56d225064a7d",children:"https://github.com/InseeFr/Trevas/commit/54f86f27d2e8fdd57df1439d74ed56d225064a7d"}),") commit."]}),"\n",(0,i.jsx)(r.h4,{id:"addition-of-distance-operators",children:"Addition of distance operators"}),"\n",(0,i.jsxs)(r.p,{children:["Distance operators like Levenshtein of Jaro-Winkler are commonly used in tests of character strings. In order to allow them in VTL expressions, the ",(0,i.jsx)(r.a,{href:"https://github.com/InseeFr/Trevas/commit/036dc6055240a38c19be7afd1d3067e370353f9f",children:"036dc60"})," commit added to the grammar a ",(0,i.jsx)(r.code,{children:"distanceOperators"})," section containing a ",(0,i.jsx)(r.code,{children:"LEVENSHTEIN"})," rule, as well as the ",(0,i.jsx)(r.code,{children:"LEVENSHTEIN"})," symbol in the lexer file."]})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>o});var a=t(96540);const i={},s=a.createContext(i);function n(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);