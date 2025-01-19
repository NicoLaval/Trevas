"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[2616],{30142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var s=n(26717),r=n(74848),i=n(28453);const a={slug:"/trevas-temporal-operators",title:"Trevas - Temporal operators",authors:["hadrien"],tags:["Trevas"]},o=void 0,d={authorsImageUrls:[void 0]},c=[{value:"Temporal operators in Trevas",id:"temporal-operators-in-trevas",level:3},{value:"Java mapping",id:"java-mapping",level:4},{value:"Function <code>flow_to_stock</code>",id:"function-flow_to_stock",level:4},{value:"Function <code>stock_to_flow</code>",id:"function-stock_to_flow",level:4},{value:"Function <code>timeshift</code>",id:"function-timeshift",level:4}];function l(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"temporal-operators-in-trevas",children:"Temporal operators in Trevas"}),"\n",(0,r.jsx)(t.p,{children:"The version 1.4.1 of Trevas introduces preliminary support for date and time types\nand operators."}),"\n",(0,r.jsxs)(t.p,{children:["The specification describes temporal types such as ",(0,r.jsx)(t.code,{children:"date"}),", ",(0,r.jsx)(t.code,{children:"time_period"}),", ",(0,r.jsx)(t.code,{children:"time"}),", and ",(0,r.jsx)(t.code,{children:"duration"}),". However, Trevas authors find\nthese descriptions unsatisfactory. This blog post outlines our implementation choices and how they differ from the spec."]}),"\n",(0,r.jsxs)(t.p,{children:["In the specification, ",(0,r.jsx)(t.code,{children:"time_period"})," (and the types ",(0,r.jsx)(t.code,{children:"date"}),") is described as a compound type with a start and end (or a\nstart and a duration). This complicates the implementation and brings little value to the language as one can simply\noperate on a combination of dates or date and duration directly. For this reason, we defined an algebra between the\ntemporal types and did not yet implement the ",(0,r.jsx)(t.code,{children:"time_period"}),"."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"result (operators)"}),(0,r.jsx)(t.th,{children:"date"}),(0,r.jsx)(t.th,{children:"duration"}),(0,r.jsx)(t.th,{children:"number"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"date"})}),(0,r.jsx)(t.td,{children:"n/a"}),(0,r.jsx)(t.td,{children:"date (+, -)"}),(0,r.jsx)(t.td,{children:"n/a"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"duration"})}),(0,r.jsx)(t.td,{children:"date (+, -)"}),(0,r.jsx)(t.td,{children:"duration (+, -)"}),(0,r.jsx)(t.td,{children:"duration (*)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"number"})}),(0,r.jsx)(t.td,{children:"n/a"}),(0,r.jsx)(t.td,{children:"duration (*)"}),(0,r.jsx)(t.td,{children:"n/a"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"period_indicator"})," function relies on period-awareness for types that are not defined enough at the moment to\nbe implemented."]}),"\n",(0,r.jsx)(t.h4,{id:"java-mapping",children:"Java mapping"}),"\n",(0,r.jsxs)(t.p,{children:["The VTL type ",(0,r.jsx)(t.code,{children:"date"})," is represented internally as the\ntypes ",(0,r.jsx)(t.a,{href:"https://docs.oracle.com/en%2Fjava%2Fjavase%2F11%2Fdocs%2Fapi%2F%2F/java.base/java/time/Instant.html",children:(0,r.jsx)(t.code,{children:"java.time.Instant"})}),",\n",(0,r.jsx)(t.a,{href:"https://docs.oracle.com/en%2Fjava%2Fjavase%2F11%2Fdocs%2Fapi%2F%2F/java.base/java/time/ZonedDateTime.html",children:(0,r.jsx)(t.code,{children:"java.time.ZonedDateTime"})}),"\nand ",(0,r.jsx)(t.a,{href:"https://docs.oracle.com/en%2Fjava%2Fjavase%2F11%2Fdocs%2Fapi%2F%2F/java.base/java/time/OffsetDateTime.html#:~:text=OffsetDateTime%20is%20an%20immutable%20representation,be%20stored%20in%20an%20OffsetDateTime%20.",children:(0,r.jsx)(t.code,{children:"java.time.OffsetDateTime"})})]}),"\n",(0,r.jsxs)(t.p,{children:["Instant represent a specific moment in time. Note that this type does not include timezone information and is therefore\nnot usable with all the operators. One can use the types ",(0,r.jsx)(t.code,{children:"ZonedDateTime"})," and ",(0,r.jsx)(t.code,{children:"OffsetDateTime"})," when timezone or time\nsaving is required."]}),"\n",(0,r.jsxs)(t.p,{children:["The VTL type ",(0,r.jsx)(t.code,{children:"duration"})," is represented internally as the\ntype ",(0,r.jsx)(t.a,{href:"https://www.threeten.org/threeten-extra/apidocs/org.threeten.extra/org/threeten/extra/PeriodDuration.html",children:(0,r.jsx)(t.code,{children:"org.threeten.extra.PeriodDuration"})}),"\nfrom the ",(0,r.jsx)(t.a,{href:"https://www.threeten.org/threeten-extra/",children:"threeten extra"})," package.\nIt represents a duration using both calendar units (years, months, days) and a temporal amount (hours, minutes, seconds\nand nanoseconds)."]}),"\n",(0,r.jsxs)(t.h4,{id:"function-flow_to_stock",children:["Function ",(0,r.jsx)(t.code,{children:"flow_to_stock"})]}),"\n",(0,r.jsx)(t.p,{children:"The flow_to_stock function converts a data set with flow interpretation into a stock interpretation. This transformation\nis useful when you want to aggregate flow data (e.g., sales or production rates) into cumulative stock data (e.g., total\ninventory)."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Syntax:"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"result := flow_to_stock(op)"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"op"})," - The input data set with flow interpretation. The data set must have an identifier of type ",(0,r.jsx)(t.code,{children:"time"}),", additional\nidentifiers, and at least one measure of type ",(0,r.jsx)(t.code,{children:"number"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Result:"})}),"\n",(0,r.jsx)(t.p,{children:"The function returns a data set with the same structure as the input, but with the values converted to stock\ninterpretation."}),"\n",(0,r.jsxs)(t.h4,{id:"function-stock_to_flow",children:["Function ",(0,r.jsx)(t.code,{children:"stock_to_flow"})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"stock_to_flow"})," function converts a data set with stock interpretation into a flow interpretation. This\ntransformation is useful when you want to derive flow data from cumulative stock data."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Syntax:"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"result := stock_to_flow(op)"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"op"})," - The input data set with stock interpretation. The data set must have an identifier of type ",(0,r.jsx)(t.code,{children:"time"}),", additional\nidentifiers, and at least one measure of type ",(0,r.jsx)(t.code,{children:"number"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Result:"})}),"\n",(0,r.jsx)(t.p,{children:"The function returns a data set with the same structure as the input, but with the values converted to flow\ninterpretation."}),"\n",(0,r.jsxs)(t.h4,{id:"function-timeshift",children:["Function ",(0,r.jsx)(t.code,{children:"timeshift"})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"timeshift"})," function shifts the time component of a specified range of time in the data set. This is useful for\nanalyzing data at different time offsets, such as comparing current values to past values."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Syntax:"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"result := timeshift(op, shiftNumber)"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"op"})," - The operand data set containing time series."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"shiftNumber"})," - An integer representing the number of periods to shift. Positive values shift forward in time, while\nnegative values shift backward."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Result:"})}),"\n",(0,r.jsx)(t.p,{children:"The function returns a data set with the time identifiers shifted by the specified number of periods."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}},26717:e=>{e.exports=JSON.parse('{"permalink":"/Trevas/blog/trevas-temporal-operators","source":"@site/blog/2024-06-21-temporal-operators.mdx","title":"Trevas - Temporal operators","description":"Temporal operators in Trevas","date":"2024-06-21T00:00:00.000Z","tags":[{"inline":true,"label":"Trevas","permalink":"/Trevas/blog/tags/trevas"}],"readingTime":2.845,"hasTruncateMarker":false,"authors":[{"name":"Hadrien Kohl","link":"https://github.com/hadrienk","title":"Hadrien Kohl Consulting - Developer","image":"/img/profile_pic_hadrien_kohl.jpg","key":"hadrien","page":null}],"frontMatter":{"slug":"/trevas-temporal-operators","title":"Trevas - Temporal operators","authors":["hadrien"],"tags":["Trevas"]},"unlisted":false,"prevItem":{"title":"Trevas - SDMX","permalink":"/Trevas/blog/trevas-sdmx"},"nextItem":{"title":"Trevas - Java 17","permalink":"/Trevas/blog/trevas-java-17"}}')}}]);