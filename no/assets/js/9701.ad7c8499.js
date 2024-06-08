(self.webpackChunktrevas_documentation=self.webpackChunktrevas_documentation||[]).push([[9701],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,f=p["".concat(s,".").concat(d)]||p[d]||y[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},49090:e=>{function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,n,a){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof n&&(a=n,n={}),n=n||{},a=a||function(){},i.type=n.type||"text/javascript",i.charset=n.charset||"utf8",i.async=!("async"in n)||!!n.async,i.src=e,n.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(i,n.attrs),n.text&&(i.text=""+n.text),("onload"in i?t:r)(i,a),i.onload||t(i,a),o.appendChild(i)}},30845:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function a(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(a=e[r],o=t[r],!(a===o||n(a)&&n(o)))return!1;var a,o;return!0}const o=function(e,t){var r;void 0===t&&(t=a);var n,o=[],i=!1;return function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return i&&r===this&&t(a,o)||(n=e.apply(this,a),i=!0,r=this,o=a),n}}},69590:(e,t,r)=>{var n=r(25108),a="undefined"!=typeof Element,o="function"==typeof Map,i="function"==typeof Set,l="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function s(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var r,n,u,c;if(Array.isArray(e)){if((r=e.length)!=t.length)return!1;for(n=r;0!=n--;)if(!s(e[n],t[n]))return!1;return!0}if(o&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(c=e.entries();!(n=c.next()).done;)if(!t.has(n.value[0]))return!1;for(c=e.entries();!(n=c.next()).done;)if(!s(n.value[1],t.get(n.value[0])))return!1;return!0}if(i&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(c=e.entries();!(n=c.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(l&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((r=e.length)!=t.length)return!1;for(n=r;0!=n--;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof t.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof t.toString)return e.toString()===t.toString();if((r=(u=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(n=r;0!=n--;)if(!Object.prototype.hasOwnProperty.call(t,u[n]))return!1;if(a&&e instanceof Element)return!1;for(n=r;0!=n--;)if(("_owner"!==u[n]&&"__v"!==u[n]&&"__o"!==u[n]||!e.$$typeof)&&!s(e[u[n]],t[u[n]]))return!1;return!0}return e!=e&&t!=t}e.exports=function(e,t){try{return s(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return n.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},59605:(e,t,r)=>{var n,a=r(25108),o=Object.create,i=Object.defineProperty,l=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,u=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,p=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of s(t))c.call(e,a)||a===r||i(e,a,{get:()=>t[a],enumerable:!(n=l(t,a))||n.enumerable});return e},y=(e,t,r)=>(r=null!=e?o(u(e)):{},p(!t&&e&&e.__esModule?r:i(r,"default",{value:e,enumerable:!0}),e)),d=(e,t,r)=>(((e,t,r)=>{t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),f={};((e,t)=>{for(var r in t)i(e,r,{get:t[r],enumerable:!0})})(f,{default:()=>g}),e.exports=(n=f,p(i({},"__esModule",{value:!0}),n));var h=y(r(67294)),m=y(r(69590)),b=r(29448),P=r(56281);class g extends h.Component{constructor(){super(...arguments),d(this,"mounted",!1),d(this,"isReady",!1),d(this,"isPlaying",!1),d(this,"isLoading",!0),d(this,"loadOnReady",null),d(this,"startOnPlay",!0),d(this,"seekOnPlay",null),d(this,"onDurationCalled",!1),d(this,"handlePlayerMount",(e=>{this.player||(this.player=e,this.player.load(this.props.url)),this.progress()})),d(this,"getInternalPlayer",(e=>this.player?this.player[e]:null)),d(this,"progress",(()=>{if(this.props.url&&this.player&&this.isReady){const e=this.getCurrentTime()||0,t=this.getSecondsLoaded(),r=this.getDuration();if(r){const n={playedSeconds:e,played:e/r};null!==t&&(n.loadedSeconds=t,n.loaded=t/r),n.playedSeconds===this.prevPlayed&&n.loadedSeconds===this.prevLoaded||this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)})),d(this,"handleReady",(()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:e,playing:t,volume:r,muted:n}=this.props;e(),n||null===r||this.player.setVolume(r),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):t&&this.player.play(),this.handleDurationCheck()})),d(this,"handlePlay",(()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:e,onPlay:t,playbackRate:r}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&1!==r&&this.player.setPlaybackRate(r),e(),this.startOnPlay=!1),t(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()})),d(this,"handlePause",(e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)})),d(this,"handleEnded",(()=>{const{activePlayer:e,loop:t,onEnded:r}=this.props;e.loopOnEnded&&t&&this.seekTo(0),t||(this.isPlaying=!1,r())})),d(this,"handleError",((...e)=>{this.isLoading=!1,this.props.onError(...e)})),d(this,"handleDurationCheck",(()=>{clearTimeout(this.durationCheckTimeout);const e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)})),d(this,"handleLoaded",(()=>{this.isLoading=!1}))}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;const{url:t,playing:r,volume:n,muted:o,playbackRate:i,pip:l,loop:s,activePlayer:u,disableDeferredLoading:c}=this.props;if(!(0,m.default)(e.url,t)){if(this.isLoading&&!u.forceLoad&&!c&&!(0,P.isMediaStream)(t))return a.warn(`ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`),void(this.loadOnReady=t);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(t,this.isReady)}e.playing||!r||this.isPlaying||this.player.play(),e.playing&&!r&&this.isPlaying&&this.player.pause(),!e.pip&&l&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!l&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==n&&null!==n&&this.player.setVolume(n),e.muted!==o&&(o?this.player.mute():(this.player.unmute(),null!==n&&setTimeout((()=>this.player.setVolume(n))))),e.playbackRate!==i&&this.player.setPlaybackRate&&this.player.setPlaybackRate(i),e.loop!==s&&this.player.setLoop&&this.player.setLoop(s)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,t,r){if(!this.isReady)return void(0!==e&&(this.seekOnPlay=e,setTimeout((()=>{this.seekOnPlay=null}),5e3)));if(t?"fraction"===t:e>0&&e<1){const t=this.player.getDuration();return t?void this.player.seekTo(t*e,r):void a.warn("ReactPlayer: could not seek using fraction \u2013\xa0duration not yet available")}this.player.seekTo(e,r)}render(){const e=this.props.activePlayer;return e?h.default.createElement(e,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}d(g,"displayName","Player"),d(g,"propTypes",b.propTypes),d(g,"defaultProps",b.defaultProps)},71276:(e,t,r)=>{var n,a=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of l(t))u.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(n=i(t,a))||n.enumerable});return e},p=(e,t,r)=>(r=null!=e?a(s(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),y=(e,t,r)=>(((e,t,r)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(d,{createReactPlayer:()=>T}),e.exports=(n=d,c(o({},"__esModule",{value:!0}),n));var f=p(r(67294)),h=p(r(82819)),m=p(r(30845)),b=p(r(69590)),P=r(29448),g=r(56281),v=p(r(59605));const w=(0,g.lazy)((()=>r.e(7664).then(r.t.bind(r,57284,23)))),O="undefined"!=typeof window&&window.document&&"undefined"!=typeof document,j=void 0!==r.g&&r.g.window&&r.g.window.document,k=Object.keys(P.propTypes),_=O||j?f.Suspense:()=>null,S=[],T=(e,t)=>{var r;return r=class extends f.Component{constructor(){super(...arguments),y(this,"state",{showPreview:!!this.props.light}),y(this,"references",{wrapper:e=>{this.wrapper=e},player:e=>{this.player=e}}),y(this,"handleClickPreview",(e=>{this.setState({showPreview:!1}),this.props.onClickPreview(e)})),y(this,"showPreview",(()=>{this.setState({showPreview:!0})})),y(this,"getDuration",(()=>this.player?this.player.getDuration():null)),y(this,"getCurrentTime",(()=>this.player?this.player.getCurrentTime():null)),y(this,"getSecondsLoaded",(()=>this.player?this.player.getSecondsLoaded():null)),y(this,"getInternalPlayer",((e="player")=>this.player?this.player.getInternalPlayer(e):null)),y(this,"seekTo",((e,t,r)=>{if(!this.player)return null;this.player.seekTo(e,t,r)})),y(this,"handleReady",(()=>{this.props.onReady(this)})),y(this,"getActivePlayer",(0,m.default)((r=>{for(const t of[...S,...e])if(t.canPlay(r))return t;return t||null}))),y(this,"getConfig",(0,m.default)(((e,t)=>{const{config:r}=this.props;return h.default.all([P.defaultProps.config,P.defaultProps.config[t]||{},r,r[t]||{}])}))),y(this,"getAttributes",(0,m.default)((e=>(0,g.omit)(this.props,k)))),y(this,"renderActivePlayer",(e=>{if(!e)return null;const t=this.getActivePlayer(e);if(!t)return null;const r=this.getConfig(e,t.key);return f.default.createElement(v.default,{...this.props,key:t.key,ref:this.references.player,config:r,activePlayer:t.lazyPlayer||t,onReady:this.handleReady})}))}shouldComponentUpdate(e,t){return!(0,b.default)(this.props,e)||!(0,b.default)(this.state,t)}componentDidUpdate(e){const{light:t}=this.props;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}renderPreview(e){if(!e)return null;const{light:t,playIcon:r,previewTabIndex:n,oEmbedUrl:a,previewAriaLabel:o}=this.props;return f.default.createElement(w,{url:e,light:t,playIcon:r,previewTabIndex:n,previewAriaLabel:o,oEmbedUrl:a,onClick:this.handleClickPreview})}render(){const{url:e,style:t,width:r,height:n,fallback:a,wrapper:o}=this.props,{showPreview:i}=this.state,l=this.getAttributes(e),s="string"==typeof o?this.references.wrapper:void 0;return f.default.createElement(o,{ref:s,style:{...t,width:r,height:n},...l},f.default.createElement(_,{fallback:a},i?this.renderPreview(e):this.renderActivePlayer(e)))}},y(r,"displayName","ReactPlayer"),y(r,"propTypes",P.propTypes),y(r,"defaultProps",P.defaultProps),y(r,"addCustomPlayer",(e=>{S.push(e)})),y(r,"removeCustomPlayers",(()=>{S.length=0})),y(r,"canPlay",(t=>{for(const r of[...S,...e])if(r.canPlay(t))return!0;return!1})),y(r,"canEnablePIP",(t=>{for(const r of[...S,...e])if(r.canEnablePIP&&r.canEnablePIP(t))return!0;return!1})),r}},56310:(e,t,r)=>{var n,a=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of l(t))u.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(n=i(t,a))||n.enumerable});return e},p={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(p,{default:()=>h}),e.exports=(n=p,c(o({},"__esModule",{value:!0}),n));var y=((e,t,r)=>(r=null!=e?a(s(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)))(r(29760)),d=r(71276);const f=y.default[y.default.length-1];var h=(0,d.createReactPlayer)(y.default,f)},99790:(e,t,r)=>{var n,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.prototype.hasOwnProperty,s={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(s,{AUDIO_EXTENSIONS:()=>k,DASH_EXTENSIONS:()=>T,FLV_EXTENSIONS:()=>E,HLS_EXTENSIONS:()=>S,MATCH_URL_DAILYMOTION:()=>v,MATCH_URL_FACEBOOK:()=>f,MATCH_URL_FACEBOOK_WATCH:()=>h,MATCH_URL_KALTURA:()=>j,MATCH_URL_MIXCLOUD:()=>w,MATCH_URL_MUX:()=>d,MATCH_URL_SOUNDCLOUD:()=>p,MATCH_URL_STREAMABLE:()=>m,MATCH_URL_TWITCH_CHANNEL:()=>g,MATCH_URL_TWITCH_VIDEO:()=>P,MATCH_URL_VIDYARD:()=>O,MATCH_URL_VIMEO:()=>y,MATCH_URL_WISTIA:()=>b,MATCH_URL_YOUTUBE:()=>c,VIDEO_EXTENSIONS:()=>_,canPlay:()=>C}),e.exports=(n=s,((e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of i(t))l.call(e,s)||s===r||a(e,s,{get:()=>t[s],enumerable:!(n=o(t,s))||n.enumerable});return e})(a({},"__esModule",{value:!0}),n));var u=r(56281);const c=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,p=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,y=/vimeo\.com\/(?!progressive_redirect).+/,d=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,f=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,h=/^https?:\/\/fb\.watch\/.+$/,m=/streamable\.com\/([a-z0-9]+)$/,b=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,P=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,g=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,v=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,w=/mixcloud\.com\/([^/]+\/[^/]+)/,O=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,j=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,k=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,_=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,S=/\.(m3u8)($|\?)/i,T=/\.(mpd)($|\?)/i,E=/\.(flv)($|\?)/i,A=e=>{if(e instanceof Array){for(const t of e){if("string"==typeof t&&A(t))return!0;if(A(t.src))return!0}return!1}return!(!(0,u.isMediaStream)(e)&&!(0,u.isBlobUrl)(e))||(k.test(e)||_.test(e)||S.test(e)||T.test(e)||E.test(e))},C={youtube:e=>e instanceof Array?e.every((e=>c.test(e))):c.test(e),soundcloud:e=>p.test(e)&&!k.test(e),vimeo:e=>y.test(e)&&!_.test(e)&&!S.test(e),mux:e=>d.test(e),facebook:e=>f.test(e)||h.test(e),streamable:e=>m.test(e),wistia:e=>b.test(e),twitch:e=>P.test(e)||g.test(e),dailymotion:e=>v.test(e),mixcloud:e=>w.test(e),vidyard:e=>O.test(e),kaltura:e=>j.test(e),file:A}},29760:(e,t,r)=>{Object.create;var n,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=(Object.getPrototypeOf,Object.prototype.hasOwnProperty),s=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of i(t))l.call(e,s)||s===r||a(e,s,{get:()=>t[s],enumerable:!(n=o(t,s))||n.enumerable});return e},u={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(u,{default:()=>y}),e.exports=(n=u,s(a({},"__esModule",{value:!0}),n));var c=r(56281),p=r(99790),y=[{key:"youtube",name:"YouTube",canPlay:p.canPlay.youtube,lazyPlayer:(0,c.lazy)((()=>r.e(4439).then(r.t.bind(r,85034,23))))},{key:"soundcloud",name:"SoundCloud",canPlay:p.canPlay.soundcloud,lazyPlayer:(0,c.lazy)((()=>r.e(6125).then(r.t.bind(r,76655,23))))},{key:"vimeo",name:"Vimeo",canPlay:p.canPlay.vimeo,lazyPlayer:(0,c.lazy)((()=>r.e(3743).then(r.t.bind(r,86746,23))))},{key:"mux",name:"Mux",canPlay:p.canPlay.mux,lazyPlayer:(0,c.lazy)((()=>r.e(4258).then(r.t.bind(r,91618,23))))},{key:"facebook",name:"Facebook",canPlay:p.canPlay.facebook,lazyPlayer:(0,c.lazy)((()=>r.e(2121).then(r.t.bind(r,26429,23))))},{key:"streamable",name:"Streamable",canPlay:p.canPlay.streamable,lazyPlayer:(0,c.lazy)((()=>r.e(2546).then(r.t.bind(r,76479,23))))},{key:"wistia",name:"Wistia",canPlay:p.canPlay.wistia,lazyPlayer:(0,c.lazy)((()=>r.e(8055).then(r.t.bind(r,13134,23))))},{key:"twitch",name:"Twitch",canPlay:p.canPlay.twitch,lazyPlayer:(0,c.lazy)((()=>r.e(6216).then(r.t.bind(r,89743,23))))},{key:"dailymotion",name:"DailyMotion",canPlay:p.canPlay.dailymotion,lazyPlayer:(0,c.lazy)((()=>r.e(7596).then(r.t.bind(r,65134,23))))},{key:"mixcloud",name:"Mixcloud",canPlay:p.canPlay.mixcloud,lazyPlayer:(0,c.lazy)((()=>r.e(4667).then(r.t.bind(r,99734,23))))},{key:"vidyard",name:"Vidyard",canPlay:p.canPlay.vidyard,lazyPlayer:(0,c.lazy)((()=>r.e(8888).then(r.t.bind(r,27287,23))))},{key:"kaltura",name:"Kaltura",canPlay:p.canPlay.kaltura,lazyPlayer:(0,c.lazy)((()=>r.e(261).then(r.t.bind(r,49289,23))))},{key:"file",name:"FilePlayer",canPlay:p.canPlay.file,canEnablePIP:e=>p.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,c.supportsWebKitPresentationMode)())&&!p.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,c.lazy)((()=>r.e(6011).then(r.t.bind(r,33364,23))))}]},29448:(e,t,r)=>{var n,a=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of l(t))u.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(n=i(t,a))||n.enumerable});return e},p={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(p,{defaultProps:()=>k,propTypes:()=>O}),e.exports=(n=p,c(o({},"__esModule",{value:!0}),n));var y=((e,t,r)=>(r=null!=e?a(s(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)))(r(45697));const{string:d,bool:f,number:h,array:m,oneOfType:b,shape:P,object:g,func:v,node:w}=y.default,O={url:b([d,m,g]),playing:f,loop:f,controls:f,volume:h,muted:f,playbackRate:h,width:b([d,h]),height:b([d,h]),style:g,progressInterval:h,playsinline:f,pip:f,stopOnUnmount:f,light:b([f,d,g]),playIcon:w,previewTabIndex:h,previewAriaLabel:d,fallback:w,oEmbedUrl:d,wrapper:b([d,v,P({render:v.isRequired})]),config:P({soundcloud:P({options:g}),youtube:P({playerVars:g,embedOptions:g,onUnstarted:v}),facebook:P({appId:d,version:d,playerId:d,attributes:g}),dailymotion:P({params:g}),vimeo:P({playerOptions:g,title:d}),mux:P({attributes:g,version:d}),file:P({attributes:g,tracks:m,forceVideo:f,forceAudio:f,forceHLS:f,forceSafariHLS:f,forceDisableHls:f,forceDASH:f,forceFLV:f,hlsOptions:g,hlsVersion:d,dashVersion:d,flvVersion:d}),wistia:P({options:g,playerId:d,customControls:m}),mixcloud:P({options:g}),twitch:P({options:g,playerId:d}),vidyard:P({options:g})}),onReady:v,onStart:v,onPlay:v,onPause:v,onBuffer:v,onBufferEnd:v,onEnded:v,onError:v,onDuration:v,onSeek:v,onPlaybackRateChange:v,onPlaybackQualityChange:v,onProgress:v,onClickPreview:v,onEnablePIP:v,onDisablePIP:v},j=()=>{},k={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:j},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:j,onStart:j,onPlay:j,onPause:j,onBuffer:j,onBufferEnd:j,onEnded:j,onError:j,onDuration:j,onSeek:j,onPlaybackRateChange:j,onPlaybackQualityChange:j,onProgress:j,onClickPreview:j,onEnablePIP:j,onDisablePIP:j}},56281:(e,t,r)=>{var n,a=r(25108),o=Object.create,i=Object.defineProperty,l=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,u=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,p=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of s(t))c.call(e,a)||a===r||i(e,a,{get:()=>t[a],enumerable:!(n=l(t,a))||n.enumerable});return e},y=(e,t,r)=>(r=null!=e?o(u(e)):{},p(!t&&e&&e.__esModule?r:i(r,"default",{value:e,enumerable:!0}),e)),d={};((e,t)=>{for(var r in t)i(e,r,{get:t[r],enumerable:!0})})(d,{callPlayer:()=>M,getConfig:()=>C,getSDK:()=>A,isBlobUrl:()=>x,isMediaStream:()=>R,lazy:()=>b,omit:()=>I,parseEndTime:()=>k,parseStartTime:()=>j,queryString:()=>S,randomString:()=>_,supportsWebKitPresentationMode:()=>D}),e.exports=(n=d,p(i({},"__esModule",{value:!0}),n));var f=y(r(67294)),h=y(r(49090)),m=y(r(82819));const b=e=>f.default.lazy((async()=>{const t=await e();return"function"==typeof t.default?t:t.default})),P=/[?&#](?:start|t)=([0-9hms]+)/,g=/[?&#]end=([0-9hms]+)/,v=/(\d+)(h|m|s)/g,w=/^\d+$/;function O(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const e=r[1];if(e.match(v))return function(e){let t=0,r=v.exec(e);for(;null!==r;){const[,n,a]=r;"h"===a&&(t+=60*parseInt(n,10)*60),"m"===a&&(t+=60*parseInt(n,10)),"s"===a&&(t+=parseInt(n,10)),r=v.exec(e)}return t}(e);if(w.test(e))return parseInt(e)}}function j(e){return O(e,P)}function k(e){return O(e,g)}function _(){return Math.random().toString(36).substr(2,5)}function S(e){return Object.keys(e).map((t=>`${t}=${e[t]}`)).join("&")}function T(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const E={},A=function(e){0;return e}((function(e,t,r=null,n=(()=>!0),a=h.default){const o=T(t);return o&&n(o)?Promise.resolve(o):new Promise(((n,o)=>{if(E[e])return void E[e].push({resolve:n,reject:o});E[e]=[{resolve:n,reject:o}];const i=t=>{E[e].forEach((e=>e.resolve(t)))};if(r){const e=window[r];window[r]=function(){e&&e(),i(T(t))}}a(e,(n=>{n?(E[e].forEach((e=>e.reject(n))),E[e]=null):r||i(T(t))}))}))}));function C(e,t){return(0,m.default)(t.config,e.config)}function I(e,...t){const r=[].concat(...t),n={},a=Object.keys(e);for(const o of a)-1===r.indexOf(o)&&(n[o]=e[o]);return n}function M(e,...t){if(!this.player||!this.player[e]){let t=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c \u2013 `;return this.player?this.player[e]||(t+="The method was not available"):t+="The player was not available",a.warn(t,"font-weight: bold",""),null}return this.player[e](...t)}function R(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream}function x(e){return/^blob:/.test(e)}function D(e=document.createElement("video")){const t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"==typeof e.webkitSetPresentationMode&&t}},82819:e=>{"use strict";var t=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)};var r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?s((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function a(e,t,r){return e.concat(t).map((function(e){return n(e,r)}))}function o(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function i(e,t){try{return t in e}catch(r){return!1}}function l(e,t,r){var a={};return r.isMergeableObject(e)&&o(e).forEach((function(t){a[t]=n(e[t],r)})),o(t).forEach((function(o){(function(e,t){return i(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,o)||(i(e,o)&&r.isMergeableObject(t[o])?a[o]=function(e,t){if(!t.customMerge)return s;var r=t.customMerge(e);return"function"==typeof r?r:s}(o,r)(e[o],t[o],r):a[o]=n(t[o],r))})),a}function s(e,r,o){(o=o||{}).arrayMerge=o.arrayMerge||a,o.isMergeableObject=o.isMergeableObject||t,o.cloneUnlessOtherwiseSpecified=n;var i=Array.isArray(r);return i===Array.isArray(e)?i?o.arrayMerge(e,r,o):l(e,r,o):n(r,o)}s.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return s(e,r,t)}),{})};var u=s;e.exports=u}}]);