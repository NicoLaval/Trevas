"use strict";(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[3249],{82907:(e,t,a)=>{a.d(t,{A:()=>O});a(96540);var s=a(34164),n=a(44096),r=a(74848);function o(e){let{children:t,className:a}=e;return(0,r.jsx)("article",{className:a,children:t})}var l=a(28774);const i={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,n.e7)(),{permalink:c,title:d}=a,m=o?"h1":"h2";return(0,r.jsx)(m,{className:(0,s.A)(i.title,t),children:o?d:(0,r.jsx)(l.A,{to:c,children:d})})}var d=a(21312),m=a(53465),u=a(36266);const g={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,m.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,r.jsx)(r.Fragment,{children:a(t)})}function p(e){let{date:t,formattedDate:a}=e;return(0,r.jsx)("time",{dateTime:t,children:a})}function x(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,n.e7)(),{date:o,readingTime:l}=a,i=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,s.A)(g.container,"margin-vert--md",t),children:[(0,r.jsx)(p,{date:o,formattedDate:(c=o,i.format(new Date(c)))}),void 0!==l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{}),(0,r.jsx)(h,{readingTime:l})]})]});var c}var b=a(56913);const f={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,n.e7)();if(0===a.length)return null;const l=a.every((e=>{let{name:t}=e;return!t})),i=1===a.length;return(0,r.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",l?f.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,r.jsx)("div",{className:(0,s.A)(!l&&(i?"col col--12":"col col--6"),l?f.imageOnlyAuthorCol:f.authorCol),children:(0,r.jsx)(b.A,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(j,{}),(0,r.jsx)(A,{})]})}var N=a(70440),y=a(77910);function w(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,n.e7)();return(0,r.jsx)("div",{id:o?N.LU:void 0,className:(0,s.A)("markdown",a),children:(0,r.jsx)(y.A,{children:t})})}var _=a(17559),T=a(4336),P=a(62053);function k(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function U(e){const{blogPostTitle:t,...a}=e;return(0,r.jsx)(l.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,r.jsx)(k,{})})}function R(){const{metadata:e,isBlogPostPage:t}=(0,n.e7)(),{tags:a,title:o,editUrl:l,hasTruncateMarker:i,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&i,u=a.length>0;if(!(u||m||l))return null;if(t){const e=!!(l||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,s.A)("row","margin-top--sm",_.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(P.A,{tags:a})})}),e&&(0,r.jsx)(T.A,{className:(0,s.A)("margin-top--sm",_.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,s.A)("col",{"col--9":m}),children:(0,r.jsx)(P.A,{tags:a})}),m&&(0,r.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":u}),children:(0,r.jsx)(U,{blogPostTitle:o,to:e.permalink})})]})}function O(e){let{children:t,className:a}=e;const l=function(){const{isBlogPostPage:e}=(0,n.e7)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(o,{className:(0,s.A)(l,a),children:[(0,r.jsx)(v,{}),(0,r.jsx)(w,{children:t}),(0,r.jsx)(R,{})]})}},73858:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});a(96540);var s=a(34164),n=a(61213),r=a(17559),o=a(44096),l=a(28027),i=a(82907),c=a(21312),d=a(39022),m=a(74848);function u(e){const{nextItem:t,prevItem:a}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[a&&(0,m.jsx)(d.A,{...a,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,m.jsx)(d.A,{...t,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function g(){const{assets:e,metadata:t}=(0,o.e7)(),{title:a,description:s,date:r,tags:l,authors:i,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(n.be,{title:a,description:s,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:r}),i.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:i.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")})]})}var h=a(5260);function p(){const e=(0,o.J_)();return(0,m.jsx)(h.A,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var x=a(67763),j=a(41689);function b(e){let{sidebar:t,children:a}=e;const{metadata:s,toc:n}=(0,o.e7)(),{nextItem:r,prevItem:c,frontMatter:d}=s,{hide_table_of_contents:g,toc_min_heading_level:h,toc_max_heading_level:p}=d;return(0,m.jsxs)(l.A,{sidebar:t,toc:!g&&n.length>0?(0,m.jsx)(x.A,{toc:n,minHeadingLevel:h,maxHeadingLevel:p}):void 0,children:[(0,m.jsx)(j.A,{metadata:s}),(0,m.jsx)(i.A,{children:a}),(r||c)&&(0,m.jsx)(u,{nextItem:r,prevItem:c})]})}function f(e){const t=e.content;return(0,m.jsx)(o.in,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(n.e3,{className:(0,s.A)(r.G.wrapper.blogPages,r.G.page.blogPostPage),children:[(0,m.jsx)(g,{}),(0,m.jsx)(p,{}),(0,m.jsx)(b,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}}}]);