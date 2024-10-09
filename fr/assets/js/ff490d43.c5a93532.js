"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[1497],{59279:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var n=r(74848),l=r(28453);const s={id:"aggregate-operators",title:"VTL - Op\xe9rateurs d'agr\xe9gat",sidebar_label:"Op\xe9rateurs d'agr\xe9gat",slug:"/user-guide/coverage/aggregate-operators",custom_edit_url:null},d=void 0,i={id:"user-guide/coverage/aggregate-operators",title:"VTL - Op\xe9rateurs d'agr\xe9gat",description:"| Nom                                    | Symbole     |      InMemory      |       Spark        |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/user-guide/coverage/aggregate-operators.mdx",sourceDirName:"user-guide/coverage",slug:"/user-guide/coverage/aggregate-operators",permalink:"/Trevas/fr/user-guide/coverage/aggregate-operators",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1728455981e3,frontMatter:{id:"aggregate-operators",title:"VTL - Op\xe9rateurs d'agr\xe9gat",sidebar_label:"Op\xe9rateurs d'agr\xe9gat",slug:"/user-guide/coverage/aggregate-operators",custom_edit_url:null},sidebar:"docs",previous:{title:"Agr\xe9gation hi\xe9rarchique",permalink:"/Trevas/fr/user-guide/coverage/hierarchical-aggregation"},next:{title:"Op\xe9rateurs analytiques",permalink:"/Trevas/fr/user-guide/coverage/analytic-operators"}},c={},a=[];function x(e){const t={table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Nom"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Symbole"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"InMemory"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Spark"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Instanciation de l'op\xe9rateur d'agr\xe9gat"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Comptage du nombre de point de donn\xe9es"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"count"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Valeur minimuale"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"min"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Valeur maximale"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"max"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Valeur m\xe9diane"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"median"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Somme"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"sum"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Moyenne"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"avg"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\xc9cart-type de la population"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"stddev_pop"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\xc9cart-type de l'\xe9chantillon"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"stddev_samp"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Variance de la population"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"var_pop"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Variance de l'\xe9chantillon"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"var_samp"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]})]})]})}function o(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>i});var n=r(96540);const l={},s=n.createContext(l);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);