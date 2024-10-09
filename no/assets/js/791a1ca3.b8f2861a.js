"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[5397],{36990:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var n=l(74848),r=l(28453);const s={slug:"/trevas-check_hierarchy",title:"Trevas - check_hierarchy",authors:["nicolas"],tags:["Trevas"]},i=void 0,c={permalink:"/Trevas/no/blog/trevas-check_hierarchy",source:"@site/blog/2023-09-01-trevas-check_hierarchy.mdx",title:"Trevas - check_hierarchy",description:"News",date:"2023-09-01T00:00:00.000Z",tags:[{inline:!0,label:"Trevas",permalink:"/Trevas/no/blog/tags/trevas"}],readingTime:1.815,hasTruncateMarker:!1,authors:[{name:"Nicolas Laval",link:"https://github.com/NicoLaval",title:"Making Sense - Developer",image:"/img/profile_pic_nicolas_laval.jpg",key:"nicolas",page:null}],frontMatter:{slug:"/trevas-check_hierarchy",title:"Trevas - check_hierarchy",authors:["nicolas"],tags:["Trevas"]},unlisted:!1,prevItem:{title:"Trevas - Persistent assignments",permalink:"/Trevas/no/blog/trevas-persistent-assignments"},nextItem:{title:"Trevas Batch 0.1.1",permalink:"/Trevas/no/blog/trevas-batch-0.1.1"}},d={authorsImageUrls:[void 0]},h=[{value:"News",id:"news",level:3},{value:"Example",id:"example",level:3},{value:"Input",id:"input",level:4},{value:"VTL script",id:"vtl-script",level:4},{value:"Outputs",id:"outputs",level:4}];function x(e){const t={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"news",children:"News"}),"\n",(0,n.jsxs)(t.p,{children:["Trevas 1.1.0 includes hierarchical validation via operators ",(0,n.jsx)(t.code,{children:"define hierarchical ruleset"})," and ",(0,n.jsx)(t.code,{children:"check_hierarchy"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.h4,{id:"input",children:"Input"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"ds1"}),":"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"id"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Me"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"ABC"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"12"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"A"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"B"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"10"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"C"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"DEF"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"100"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"E"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"99"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"F"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"HIJ"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"100"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"H"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"99"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"I"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"0"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"vtl-script",children:"VTL script"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'// Ensure ds1 metadata definition is good\nds1 := ds1[calc identifier id := id, Me := cast(Me, integer)];\n\n// Define hierarchical ruleset\ndefine hierarchical ruleset hr (variable rule Me) is\n    My_Rule : ABC = A + B + C errorcode "ABC is not sum of A,B,C" errorlevel 1;\n    DEF = D + E + F errorcode "DEF is not sum of D,E,F";\n    HIJ : HIJ = H + I - J errorcode "HIJ is not H + I - J" errorlevel 10\nend hierarchical ruleset;\n\n// Check hierarchy\nds_all := check_hierarchy(ds1, hr rule id all);\nds_all_measures := check_hierarchy(ds1, hr rule id always_null all_measures);\nds_invalid := check_hierarchy(ds1, hr rule id always_zero invalid);\n'})}),"\n",(0,n.jsx)(t.h4,{id:"outputs",children:"Outputs"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"ds_all"})}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"id"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"ruleid"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"bool_var"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"errorcode"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"errorlevel"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"imbalance"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"ABC"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"My_Rule"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"true"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"null"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"null"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"0"})]})})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"ds_always_null_all_measures"})}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"id"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Me"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"ruleid"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"bool_var"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"errorcode"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"errorlevel"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"imbalance"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"ABC"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"12"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"My_Rule"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"true"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"null"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"null"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"DEF"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"100"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"hr_2"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"null"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"null"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"null"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"null"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"HIJ"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"100"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"HIJ"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"null"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"null"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"null"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"null"})]})]})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"ds_invalid"})}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"id"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Me"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"ruleid"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"errorcode"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"errorlevel"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"imbalance"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"HIJ"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"100"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"HIJ"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"HIJ is not H + I - J"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"10"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"1"})]})})]})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},28453:(e,t,l)=>{l.d(t,{R:()=>i,x:()=>c});var n=l(96540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);