"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[8247],{59859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>x});const l=JSON.parse('{"id":"user-guide/coverage/time-operators","title":"VTL - Time operators","description":"| Name                           | Symbol           |    Time_period     |     Component      |      Dataset       |","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/coverage/time-operators.mdx","sourceDirName":"user-guide/coverage","slug":"/user-guide/coverage/time-operators","permalink":"/Trevas/zh-CN/user-guide/coverage/time-operators","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","lastUpdatedAt":1737305883000,"frontMatter":{"id":"time-operators","title":"VTL - Time operators","sidebar_label":"Time operators","slug":"/user-guide/coverage/time-operators","custom_edit_url":null},"sidebar":"docs","previous":{"title":"Boolean operators","permalink":"/Trevas/zh-CN/user-guide/coverage/boolean-operators"},"next":{"title":"Set operators","permalink":"/Trevas/zh-CN/user-guide/coverage/set-operators"}}');var r=n(74848),s=n(28453);const i={id:"time-operators",title:"VTL - Time operators",sidebar_label:"Time operators",slug:"/user-guide/coverage/time-operators",custom_edit_url:null},d=void 0,c={},x=[];function o(e){const t={table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Symbol"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Time_period"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Component"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Dataset"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Period indicator"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"period_indicator"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Fill time series"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"fill_time_series"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Flow to stock"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"flow_to_stock"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Stock to flow"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"stock_to_flow"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Time shift"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"timeshift"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Time aggregation"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"time_agg"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Actual time"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"current_date"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Subtract dates"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"datediff"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Add to date"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"dateadd"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Year of a date"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"year"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Month of a date"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"month"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Number of day within the year"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"dayofyear"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Number of day within the month"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"dayofmonth"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Convert days to years"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"daytoyear"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Convert days to months"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"daytomonth"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Convert duration in days"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"yeartoday"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Convert duration in months"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"yeartomonth"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var l=n(96540);const r={},s=l.createContext(r);function i(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);