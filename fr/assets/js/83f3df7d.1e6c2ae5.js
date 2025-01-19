"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[7690],{84174:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"administrator-guide/grammar/index-grammar","title":"Modifications de la grammaire VTL","description":"Utilisation de la grammaire VTL","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/administrator-guide/grammar/index-grammar.mdx","sourceDirName":"administrator-guide/grammar","slug":"/administrator-guide/grammar","permalink":"/Trevas/fr/administrator-guide/grammar","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","lastUpdatedAt":1737305883000,"frontMatter":{"id":"index-grammar","title":"Modifications de la grammaire VTL","sidebar_label":"Modifications de la grammaire VTL","slug":"/administrator-guide/grammar","custom_edit_url":null},"sidebar":"docs","previous":{"title":"Provenance","permalink":"/Trevas/fr/developer-guide/provenance"}}');var s=a(74848),t=a(28453);const n={id:"index-grammar",title:"Modifications de la grammaire VTL",sidebar_label:"Modifications de la grammaire VTL",slug:"/administrator-guide/grammar",custom_edit_url:null},d=void 0,l={},o=[{value:"Utilisation de la grammaire VTL",id:"utilisation-de-la-grammaire-vtl",level:2},{value:"Adaptations de la grammaire",id:"adaptations-de-la-grammaire",level:3},{value:"Simplification de l&#39;arbre grammatical",id:"simplification-de-larbre-grammatical",level:4},{value:"Addition d&#39;op\xe9rateurs de distance",id:"addition-dop\xe9rateurs-de-distance",level:4}];function c(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"utilisation-de-la-grammaire-vtl",children:"Utilisation de la grammaire VTL"}),"\n",(0,s.jsxs)(r.p,{children:["Trevas s'appuie sur la grammaire formelle de VTL exprim\xe9e sous forme ",(0,s.jsx)(r.a,{href:"https://fr.wikipedia.org/wiki/Extended_Backus-Naur_Form",children:"EBNF"}),". La r\xe9f\xe9rence est l'upgrade de la version 2.0 publi\xe9e en juillet 2020 ",(0,s.jsx)(r.a,{href:"https://sdmx.org/wp-content/uploads/VTL-2.0-EBNF-Grammar-2020-07.zip",children:"sur le site web SDMX"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["La grammaire consiste en deux fichiers pr\xeats \xe0 \xeatre trait\xe9s par le g\xe9n\xe9rateur de parseurs ",(0,s.jsx)(r.a,{href:"https://www.antlr.org/",children:"Antlr"})," :"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://github.com/InseeFr/Trevas/blob/master/vtl-parser/src/main/antlr4/fr/insee/vtl/parser/VtlTokens.g4",children:"VtlTokens.g4"})," contient la liste des termes VTL valides."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://github.com/InseeFr/Trevas/blob/master/vtl-parser/src/main/antlr4/fr/insee/vtl/parser/Vtl.g4",children:"Vtl.g4"})," contient les r\xe8gles qui cr\xe9ent les expressions VTL valides."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Antlr utilise ces fichiers pour produire un lexeur, qui cr\xe9e une liste de symboles du vocabulaire \xe0 partir d'un flot de caract\xe8res en entr\xe9e, et un parseur, qui cr\xe9e la structure grammaticale correspondant \xe0 cette liste de symboles. Antlr peut g\xe9n\xe9rer des parseurs utilisables dans diff\xe9rents langages cibles. Trevas utilise le parseur pour Java, qui est expos\xe9 dans le module ",(0,s.jsx)(r.a,{href:"https://github.com/InseeFr/Trevas/tree/master/vtl-parser",children:(0,s.jsx)(r.code,{children:"vtl-parser"})}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"adaptations-de-la-grammaire",children:"Adaptations de la grammaire"}),"\n",(0,s.jsx)(r.p,{children:"Afin d'am\xe9liorer les performances et les fonctionnalit\xe9s, des modifications mineures ont \xe9t\xe9 faites \xe0 la grammaire VTL grammar utilis\xe9e dans Trevas."}),"\n",(0,s.jsx)(r.h4,{id:"simplification-de-larbre-grammatical",children:"Simplification de l'arbre grammatical"}),"\n",(0,s.jsxs)(r.p,{children:["Comme document\xe9 ",(0,s.jsx)(r.a,{href:"https://github.com/VTL-Community/VTL-Community/issues/5",children:"ici"})," et ",(0,s.jsx)(r.a,{href:"https://github.com/InseeFr/Trevas-JS/issues/40",children:"ici"}),", les branches ",(0,s.jsx)(r.code,{children:"expr"})," et ",(0,s.jsx)(r.code,{children:"exprComp"})," de l'arbre grammatical sont presques identiques. Afin d'\xe9viter d'avoir \xe0 impl\xe9menter deux fois la m\xeame logique, la branche ",(0,s.jsx)(r.code,{children:"exprComp"})," a \xe9t\xe9 mise en commentaires par le commit ",(0,s.jsx)(r.a,{href:"https://github.com/InseeFr/Trevas/commit/498c1f8be39702fbcfc89a3144ac1842d7771d93",children:"498c1f8"}),". Il fut remarqu\xe9 par la suite que cette modification invalidait \xe0 tort l'expression ",(0,s.jsx)(r.code,{children:"COUNT()"})," expression, et la r\xe8gle correspondante fut donc r\xe9introduite dans la grammaire par le commit [54f86f2] (",(0,s.jsx)(r.a,{href:"https://github.com/InseeFr/Trevas/commit/54f86f27d2e8fdd57df1439d74ed56d225064a7d",children:"https://github.com/InseeFr/Trevas/commit/54f86f27d2e8fdd57df1439d74ed56d225064a7d"}),")."]}),"\n",(0,s.jsx)(r.h4,{id:"addition-dop\xe9rateurs-de-distance",children:"Addition d'op\xe9rateurs de distance"}),"\n",(0,s.jsxs)(r.p,{children:["Les op\xe9rateurs de distances tels que Levenshtein ou Jaro-Winkler sont commun\xe9ment utilis\xe9s dans les tests sur les cha\xeenes de caract\xe8res. Afin de les autoriser dans les expressions VTL, le commit ",(0,s.jsx)(r.a,{href:"https://github.com/InseeFr/Trevas/commit/036dc6055240a38c19be7afd1d3067e370353f9f",children:"036dc60"})," a ajout\xe9 dans la grammaire une section ",(0,s.jsx)(r.code,{children:"distanceOperators"})," contenant une r\xe8gle ",(0,s.jsx)(r.code,{children:"LEVENSHTEIN"}),", ainsi que le symbole ",(0,s.jsx)(r.code,{children:"LEVENSHTEIN"})," dans le fichier du lexeur."]})]})}function m(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,r,a)=>{a.d(r,{R:()=>n,x:()=>d});var i=a(96540);const s={},t=i.createContext(s);function n(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);