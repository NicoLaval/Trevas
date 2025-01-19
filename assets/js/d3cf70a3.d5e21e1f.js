"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[3362],{8952:(e,a,t)=>{t.d(a,{A:()=>n});t(96540);var s=t(74848);const n=e=>{let{label:a,href:t}=e;return(0,s.jsx)("a",{href:t,children:a})}},88860:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>m,metadata:()=>s,toc:()=>i});var s=t(71485),n=t(74848),r=t(28453),l=t(76813),d=t(8952);const m={slug:"/trevas-provenance",title:"Trevas - Provenance",authors:["nicolas"],tags:["Trevas","provenance","SDTH"]},o=void 0,c={authorsImageUrls:[void 0]},i=[{value:"News",id:"news",level:3},{value:"SDTH model overview",id:"sdth-model-overview",level:4},{value:"Adopted model",id:"adopted-model",level:4},{value:"Tools available",id:"tools-available",level:4},{value:"Example",id:"example",level:4},{value:"Business use case",id:"business-use-case",level:5},{value:"Inputs",id:"inputs",level:3},{value:"VTL script",id:"vtl-script",level:3},{value:"RDF model target",id:"rdf-model-target",level:3}];function h(e){const a={code:"code",h3:"h3",h4:"h4",h5:"h5",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h3,{id:"news",children:"News"}),"\n",(0,n.jsx)(a.p,{children:"Trevas 1.6.0 introduces the VTL Prov module."}),"\n",(0,n.jsxs)(a.p,{children:["This module enables to produce lineage metadata from Trevas, based on RDF ontologies: ",(0,n.jsx)(a.code,{children:"PROV-O"})," and ",(0,n.jsx)(a.code,{children:"SDTH"}),"."]}),"\n",(0,n.jsx)(a.h4,{id:"sdth-model-overview",children:"SDTH model overview"}),"\n",(0,n.jsx)(a.mermaid,{value:'classDiagram\n\n  class Program["sdth:Program"] {\n    rdfs:label\n  }\n  class ProgramStep["sdth:ProgramStep"] {\n    rdfs:label\n    sdth:hasSourceCode\n    sdth:hasSDTL\n  }\n  class VariableInstance["sdth:VariableInstance"] {\n    rdfs:label\n    sdth:hasName\n  }\n  class DataframeInstance["sdth:DataframeInstance"] {\n    rdfs:label\n    sdth:hasName\n  }\n\nclass FileInstance["sdth:FileInstance"] {\n    rdfs:label\n    sdth:hasName\n  }\n\n\n  ProgramStep <-- Program : sdthhasProgramStep\n  ProgramStep <-- ProgramStep : sdth_hasProgramStep\n\n  ProgramStep --\x3e VariableInstance : sdth_usesVariable\n  ProgramStep --\x3e VariableInstance : sdth_assignsVariable\n  ProgramStep --\x3e DataframeInstance : sdth_consumesDataframe\n  ProgramStep --\x3e DataframeInstance : sdth_producesDataframe\n\n  ProgramStep --\x3e FileInstance : sdth_loadsFile\n  ProgramStep --\x3e FileInstance : sdth_savesFile\n\n\n  DataframeInstance --\x3e VariableInstance : sdth_hasVariableInstance\n  FileInstance --\x3e VariableInstance : sdth_hasVariableInstance\n\n\n  DataframeInstance --\x3e DataframeInstance : sdth_derivedFrom\n  DataframeInstance --\x3e DataframeInstance : sdth_elaborationOf\n\n  FileInstance --\x3e FileInstance : sdth_derivedFrom\n  FileInstance --\x3e FileInstance : sdth_elaborationOf\n  VariableInstance --\x3e VariableInstance : sdth_derivedFrom\n  VariableInstance --\x3e VariableInstance : sdth_elaborationOf'}),"\n",(0,n.jsx)(a.h4,{id:"adopted-model",children:"Adopted model"}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"vtl-prov"})," module, version 1.6.0, uses the following partial model:"]}),"\n",(0,n.jsx)(a.mermaid,{value:"classDiagram\n  class Agent {\n  }\n  class Program {\n    rdfs:label\n  }\n  class ProgramStep {\n    rdfs:label\n  }\n  class VariableInstance {\n    rdfs:label\n    sdth:hasName\n  }\n  class DataframeInstance {\n    rdfs:label\n    sdth:hasName\n  }\n\n  Agent <|-- Program\n  ProgramStep <-- Program : sdth_hasProgramStep\n  ProgramStep --\x3e VariableInstance : sdth_usesVariable\n  ProgramStep --\x3e VariableInstance : sdth_assignsVariable\n  ProgramStep --\x3e DataframeInstance : sdth_consumesDataframe\n  ProgramStep --\x3e DataframeInstance : sdth_producesDataframe\n  DataframeInstance --\x3e VariableInstance : sdth_hasVariableInstance\n  DataframeInstance --\x3e DataframeInstance : sdth_wasDerivedFrom\n  VariableInstance --\x3e VariableInstance : sdth_wasDerivedFrom"}),"\n",(0,n.jsx)(a.p,{children:"Improvements will come in next weeks."}),"\n",(0,n.jsx)(a.h4,{id:"tools-available",children:"Tools available"}),"\n",(0,n.jsxs)(a.p,{children:["Provenance Trevas tools are documented ",(0,n.jsx)(d.A,{label:"here",href:(0,l.Ay)("/developer-guide/spark-mode/data-sources/sdmx")}),"."]}),"\n",(0,n.jsx)(a.h4,{id:"example",children:"Example"}),"\n",(0,n.jsx)(a.h5,{id:"business-use-case",children:"Business use case"}),"\n",(0,n.jsx)(a.p,{children:"Two sources datasets are transformed to produce transient datasets and a final permanent one."}),"\n",(0,n.jsx)(a.mermaid,{value:"flowchart TD\n    OP1{add +}\n    OP2{multiply *}\n    OP3{filter}\n    OP4{create variable}\n    SC3([3])\n\n   ds_1 --\x3e OP1\n   ds_2 --\x3e OP1\n   OP1 --\x3e ds_sum\n   SC3 --\x3e OP2\n   ds_sum --\x3e OP2\n   OP2 --\x3e ds_mul\n   ds_mul --\x3e OP3\n   OP3 --\x3e OP4\n   OP4 --\x3e ds_res"}),"\n",(0,n.jsx)(a.h3,{id:"inputs",children:"Inputs"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"ds1"})," & ",(0,n.jsx)(a.code,{children:"ds2"})," metadata:"]}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{style:{textAlign:"center"},children:"id"}),(0,n.jsx)(a.th,{style:{textAlign:"center"},children:"var1"}),(0,n.jsx)(a.th,{style:{textAlign:"center"},children:"var2"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{style:{textAlign:"center"},children:"STRING"}),(0,n.jsx)(a.td,{style:{textAlign:"center"},children:"INTEGER"}),(0,n.jsx)(a.td,{style:{textAlign:"center"},children:"NUMBER"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{style:{textAlign:"center"},children:"IDENTIFIER"}),(0,n.jsx)(a.td,{style:{textAlign:"center"},children:"MEASURE"}),(0,n.jsx)(a.td,{style:{textAlign:"center"},children:"MEASURE"})]})]})]}),"\n",(0,n.jsx)(a.h3,{id:"vtl-script",children:"VTL script"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-vtl",children:"ds_sum := ds1 + ds2;\nds_mul := ds_sum * 3;\nds_res <- ds_mul[filter mod(var1, 2) = 0][calc var_sum := var1 + var2];\n"})}),"\n",(0,n.jsx)(a.h3,{id:"rdf-model-target",children:"RDF model target"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-ttl",children:'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX prov: <http://www.w3.org/ns/prov#>\nPREFIX sdth: <http://rdf-vocabulary.ddialliance.org/sdth#>\n\n# --- Program and steps\n<http://example.com/program1> a sdth:Program ;\n    a prov:Agent ; # Agent? Or an activity\n    rdfs:label "My program 1"@en, "Mon programme 1"@fr ;\n    sdth:hasProgramStep <http://example.com/program1/program-step1>,\n                        <http://example.com/program1/program-step2>,\n                        <http://example.com/program1/program-step3> .\n\n<http://example.com/program1/program-step1> a sdth:ProgramStep ;\n    rdfs:label "Program step 1"@en, "\xc9tape 1"@fr ;\n    sdth:hasSourceCode "ds_sum := ds1 + ds2;" ;\n    sdth:consumesDataframe  <http://example.com/dataset/ds1>,\n                            <http://example.com/dataset/ds2> ;\n    sdth:producesDataframe <http://example.com/dataset/ds_sum> .\n\n<http://example.com/program1/program-step2> a sdth:ProgramStep ;\n    rdfs:label "Program step 2"@en, "\xc9tape 2"@fr ;\n    sdth:hasSourceCode "ds_mul := ds_sum * 3;" ;\n    sdth:consumesDataframe <http://example.com/dataset/ds_sum> ;\n    sdth:producesDataframe <http://example.com/dataset/ds_mul> .\n\n<http://example.com/program1/program-step3> a sdth:ProgramStep ;\n    rdfs:label "Program step 3"@en, "\xc9tape 3"@fr ;\n    sdth:hasSourceCode "ds_res <- ds_mul[filter mod(var1, 2) = 0][calc var_sum := var1 + var2];" ;\n    sdth:consumesDataframe <http://example.com/dataset/ds_mul> ;\n    sdth:producesDataframe <http://example.com/dataset/ds_res> ;\n    sdth:usesVariable   <http://example.com/variable/var1>,\n                        <http://example.com/variable/var2> ;\n    sdth:assignsVariable <http://example.com/variable/var_sum> .\n\n# --- Variables\n# i think here it\'s not instances but names we refer to...\n<http://example.com/variable/id1> a sdth:VariableInstance ;\n                                  rdfs:label "id1" .\n<http://example.com/variable/var1> a sdth:VariableInstance ;\n                                  rdfs:label "var1" .\n<http://example.com/variable/var2> a sdth:VariableInstance ;\n                                  rdfs:label "var2" .\n<http://example.com/variable/var_sum> a sdth:VariableInstance ;\n                                  rdfs:label "var_sum" .\n\n# --- Data frames\n<http://example.com/dataset/ds1> a sdth:DataframeInstance ;\n    rdfs:label "ds1" ;\n    sdth:hasName "ds1" ;\n    sdth:hasVariableInstance    <http://example.com/variable/id1>,\n                                <http://example.com/variable/var1>,\n                                <http://example.com/variable/var2> .\n\n<http://example.com/dataset/ds2> a sdth:DataframeInstance ;\n    rdfs:label "ds2" ;\n    sdth:hasName "ds2" ;\n    sdth:hasVariableInstance    <http://example.com/variable/id1>,\n                                <http://example.com/variable/var1>,\n                                <http://example.com/variable/var2> .\n\n<http://example.com/dataset/ds_sum> a sdth:DataframeInstance ;\n    rdfs:label "ds_sum" ;\n    sdth:hasName "ds_sum" ;\n    sdth:wasDerivedFrom <http://example.com/dataset/ds1>,\n                        <http://example.com/dataset/ds2> ;\n    sdth:hasVariableInstance    <http://example.com/variable/id1>,\n                                <http://example.com/variable/var1>,\n                                <http://example.com/variable/var2> .\n\n<http://example.com/dataset/ds_mul> a sdth:DataframeInstance ;\n    rdfs:label "ds_mul" ;\n    sdth:hasName "ds_mul" ;\n    sdth:wasDerivedFrom <http://example.com/dataset/ds_sum> ;\n    sdth:hasVariableInstance    <http://example.com/variable/id1>,\n                                <http://example.com/variable/var1>,\n                                <http://example.com/variable/var2> .\n\n<http://example.com/dataset/ds_res> a sdth:DataframeInstance ;\n    rdfs:label "ds_res" ;\n    sdth:wasDerivedFrom <http://example.com/dataset/ds_mul> ;\n    sdth:hasVariableInstance    <http://example.com/variable/id1>,\n                                <http://example.com/variable/var1>,\n                                <http://example.com/variable/var2>,\n                                <http://example.com/variable/var_sum> .\n'})})]})}function p(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>l,x:()=>d});var s=t(96540);const n={},r=s.createContext(n);function l(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(r.Provider,{value:a},e.children)}},71485:e=>{e.exports=JSON.parse('{"permalink":"/Trevas/blog/trevas-provenance","source":"@site/blog/2024-10-07-trevas-provenance.mdx","title":"Trevas - Provenance","description":"News","date":"2024-10-07T00:00:00.000Z","tags":[{"inline":true,"label":"Trevas","permalink":"/Trevas/blog/tags/trevas"},{"inline":true,"label":"provenance","permalink":"/Trevas/blog/tags/provenance"},{"inline":true,"label":"SDTH","permalink":"/Trevas/blog/tags/sdth"}],"readingTime":3.175,"hasTruncateMarker":false,"authors":[{"name":"Nicolas Laval","link":"https://github.com/NicoLaval","title":"Making Sense - Developer","image":"/img/profile_pic_nicolas_laval.jpg","key":"nicolas","page":null}],"frontMatter":{"slug":"/trevas-provenance","title":"Trevas - Provenance","authors":["nicolas"],"tags":["Trevas","provenance","SDTH"]},"unlisted":false,"prevItem":{"title":"Trevas - VTL 2.1","permalink":"/Trevas/blog/trevas-vtl-21"},"nextItem":{"title":"Trevas - SDMX","permalink":"/Trevas/blog/trevas-sdmx"}}')}}]);