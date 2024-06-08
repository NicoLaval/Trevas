"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[4411],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,d=c["".concat(i,".").concat(m)]||c[m]||v[m]||o;return r?a.createElement(d,l(l({ref:t},u),{},{components:r})):a.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66739:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={slug:"/trevas-java-17",title:"Trevas - Java 17",authors:["nicolas"],tags:["Trevas"]},l=void 0,s={permalink:"/Trevas/fr/blog/trevas-java-17",source:"@site/i18n/fr/docusaurus-plugin-content-blog/2023-11-22-trevas-java-17.mdx",title:"Trevas - Java 17",description:"Nouveaut\xe9s",date:"2023-11-22T00:00:00.000Z",formattedDate:"22 novembre 2023",tags:[{label:"Trevas",permalink:"/Trevas/fr/blog/tags/trevas"}],readingTime:.365,hasTruncateMarker:!1,authors:[{name:"Nicolas Laval",link:"https://github.com/NicoLaval",title:"Making Sense - Developer",image:"/img/profile_pic_nicolas_laval.jpg",key:"nicolas"}],frontMatter:{slug:"/trevas-java-17",title:"Trevas - Java 17",authors:["nicolas"],tags:["Trevas"]},prevItem:{title:"Trevas - SDMX",permalink:"/Trevas/fr/blog/trevas-sdmx"},nextItem:{title:"Trevas - Assignements persistants",permalink:"/Trevas/fr/blog/trevas-persistent-assignment"}},i={authorsImageUrls:[void 0]},p=[{value:"Nouveaut\xe9s",id:"nouveaut\xe9s",level:3},{value:"Gestion des modules Java",id:"gestion-des-modules-java",level:3},{value:"Maven",id:"maven",level:4},{value:"Docker",id:"docker",level:4}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"nouveaut\xe9s"},"Nouveaut\xe9s"),(0,n.kt)("p",null,"Trevas 1.2.0 permet le support de Java 17."),(0,n.kt)("h3",{id:"gestion-des-modules-java"},"Gestion des modules Java"),(0,n.kt)("p",null,"Spark ne supporte pas les modules Java."),(0,n.kt)("p",null,"Les applications clientes en Java 17 embarquant Trevas doivent configurer les ",(0,n.kt)("inlineCode",{parentName:"p"},"UNNAMED")," modules pour Spark."),(0,n.kt)("h4",{id:"maven"},"Maven"),(0,n.kt)("p",null,"Ajouter \xe0 votre fichier ",(0,n.kt)("inlineCode",{parentName:"p"},"pom.xml"),", dans la section ",(0,n.kt)("inlineCode",{parentName:"p"},"build > plugins")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-compiler-plugin</artifactId>\n    <version>3.11.0</version>\n    <configuration>\n        <compilerArgs>\n            <arg>--add-exports</arg>\n            <arg>java.base/sun.nio.ch=ALL-UNNAMED</arg>\n        </compilerArgs>\n    </configuration>\n</plugin>\n")),(0,n.kt)("h4",{id:"docker"},"Docker"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'ENTRYPOINT ["java", "--add-exports", "java.base/sun.nio.ch=ALL-UNNAMED", "mainClass"]\n')))}c.isMDXComponent=!0}}]);