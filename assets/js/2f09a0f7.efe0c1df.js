"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[2044],{92829:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>v,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var s=n(74848),r=n(28453);const t={slug:"/trevas-java-17",title:"Trevas - Java 17",authors:["nicolas"],tags:["Trevas"]},o=void 0,i={permalink:"/Trevas/blog/trevas-java-17",source:"@site/blog/2023-11-22-trevas-java-17.mdx",title:"Trevas - Java 17",description:"News",date:"2023-11-22T00:00:00.000Z",tags:[{inline:!0,label:"Trevas",permalink:"/Trevas/blog/tags/trevas"}],readingTime:.345,hasTruncateMarker:!1,authors:[{name:"Nicolas Laval",link:"https://github.com/NicoLaval",title:"Making Sense - Developer",image:"/img/profile_pic_nicolas_laval.jpg",key:"nicolas",page:null}],frontMatter:{slug:"/trevas-java-17",title:"Trevas - Java 17",authors:["nicolas"],tags:["Trevas"]},unlisted:!1,prevItem:{title:"Trevas - Temporal operators",permalink:"/Trevas/blog/trevas-temporal-operators"},nextItem:{title:"Trevas - Persistent assignments",permalink:"/Trevas/blog/trevas-persistent-assignments"}},l={authorsImageUrls:[void 0]},c=[{value:"News",id:"news",level:3},{value:"Java modules handling",id:"java-modules-handling",level:3},{value:"Maven",id:"maven",level:4},{value:"Docker",id:"docker",level:4}];function d(e){const a={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h3,{id:"news",children:"News"}),"\n",(0,s.jsx)(a.p,{children:"Trevas 1.2.0 enables Java 17 support."}),"\n",(0,s.jsx)(a.h3,{id:"java-modules-handling",children:"Java modules handling"}),"\n",(0,s.jsx)(a.p,{children:"Spark does not support Java modules."}),"\n",(0,s.jsxs)(a.p,{children:["Java 17 client apps, embedding Trevas in Spark mode have to configure ",(0,s.jsx)(a.code,{children:"UNNAMED"})," modules for Spark."]}),"\n",(0,s.jsx)(a.h4,{id:"maven",children:"Maven"}),"\n",(0,s.jsxs)(a.p,{children:["Add to your ",(0,s.jsx)(a.code,{children:"pom.xml"})," file, in the ",(0,s.jsx)(a.code,{children:"build > plugins"})," section:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-xml",children:"<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-compiler-plugin</artifactId>\n    <version>3.11.0</version>\n    <configuration>\n        <compilerArgs>\n            <arg>--add-exports</arg>\n            <arg>java.base/sun.nio.ch=ALL-UNNAMED</arg>\n        </compilerArgs>\n    </configuration>\n</plugin>\n"})}),"\n",(0,s.jsx)(a.h4,{id:"docker",children:"Docker"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:'ENTRYPOINT ["java", "--add-exports", "java.base/sun.nio.ch=ALL-UNNAMED", "mainClass"]\n'})})]})}function v(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>i});var s=n(96540);const r={},t=s.createContext(r);function o(e){const a=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:a},e.children)}}}]);