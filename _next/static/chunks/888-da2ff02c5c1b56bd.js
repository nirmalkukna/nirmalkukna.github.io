(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6223:function(e,t,n){!function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=r(t),o=r(n);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach(function(t){var r,i;r=t,i=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var d=["animationData","loop","autoplay","initialSegment","onComplete","onLoopComplete","onEnterFrame","onSegmentStart","onConfigReady","onDataReady","onDataFailed","onLoadedImages","onDOMLoaded","onDestroy","lottieRef","renderer","name","assetsPath","rendererSettings"],c=function(e,t){var r,a=e.animationData,c=e.loop,f=e.autoplay,m=e.initialSegment,p=e.onComplete,g=e.onLoopComplete,y=e.onEnterFrame,v=e.onSegmentStart,h=e.onConfigReady,b=e.onDataReady,w=e.onDataFailed,S=e.onLoadedImages,j=e.onDOMLoaded,O=e.onDestroy;e.lottieRef,e.renderer,e.name,e.assetsPath,e.rendererSettings;var _=u(e,d),x=function(e){if(Array.isArray(e))return e}(r=n.useState(!1))||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,l=[],u=!0,s=!1;try{for(o=(n=n.call(e)).next;!(u=(r=o.call(n)).done)&&(l.push(r.value),2!==l.length);u=!0);}catch(e){s=!0,i=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw i}}return l}}(r,2)||function(e,t){if(e){if("string"==typeof e)return s(e,2);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,2)}}(r,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),E=x[0],P=x[1],C=n.useRef(),A=n.useRef(null),R=function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(A.current){null===(t=C.current)||void 0===t||t.destroy();var r=l(l(l({},e),n),{},{container:A.current});return C.current=i.default.loadAnimation(r),P(!!C.current),function(){var e;null===(e=C.current)||void 0===e||e.destroy(),C.current=void 0}}};return n.useEffect(function(){var e=R();return function(){return null==e?void 0:e()}},[a,c]),n.useEffect(function(){C.current&&(C.current.autoplay=!!f)},[f]),n.useEffect(function(){if(C.current){if(!m){C.current.resetSegments(!0);return}Array.isArray(m)&&m.length&&((C.current.currentRawFrame<m[0]||C.current.currentRawFrame>m[1])&&(C.current.currentRawFrame=m[0]),C.current.setSegment(m[0],m[1]))}},[m]),n.useEffect(function(){var e=[{name:"complete",handler:p},{name:"loopComplete",handler:g},{name:"enterFrame",handler:y},{name:"segmentStart",handler:v},{name:"config_ready",handler:h},{name:"data_ready",handler:b},{name:"data_failed",handler:w},{name:"loaded_images",handler:S},{name:"DOMLoaded",handler:j},{name:"destroy",handler:O}].filter(function(e){return null!=e.handler});if(e.length){var t=e.map(function(e){var t;return null===(t=C.current)||void 0===t||t.addEventListener(e.name,e.handler),function(){var t;null===(t=C.current)||void 0===t||t.removeEventListener(e.name,e.handler)}});return function(){t.forEach(function(e){return e()})}}},[p,g,y,v,h,b,w,S,j,O]),{View:o.default.createElement("div",l({style:t,ref:A},_)),play:function(){var e;null===(e=C.current)||void 0===e||e.play()},stop:function(){var e;null===(e=C.current)||void 0===e||e.stop()},pause:function(){var e;null===(e=C.current)||void 0===e||e.pause()},setSpeed:function(e){var t;null===(t=C.current)||void 0===t||t.setSpeed(e)},goToAndStop:function(e,t){var n;null===(n=C.current)||void 0===n||n.goToAndStop(e,t)},goToAndPlay:function(e,t){var n;null===(n=C.current)||void 0===n||n.goToAndPlay(e,t)},setDirection:function(e){var t;null===(t=C.current)||void 0===t||t.setDirection(e)},playSegments:function(e,t){var n;null===(n=C.current)||void 0===n||n.playSegments(e,t)},setSubframe:function(e){var t;null===(t=C.current)||void 0===t||t.setSubframe(e)},getDuration:function(e){var t;return null===(t=C.current)||void 0===t?void 0:t.getDuration(e)},destroy:function(){var e;null===(e=C.current)||void 0===e||e.destroy(),C.current=void 0},animationContainerRef:A,animationLoaded:E,animationItem:C.current}},f=function(e){var t=e.wrapperRef,r=e.animationItem,i=e.mode,o=e.actions;n.useEffect(function(){var e,n,a,l,u,s=t.current;if(s&&r&&o.length)switch(r.stop(),i){case"scroll":return e=null,n=function(){var t,n,i,a=(n=(t=s.getBoundingClientRect()).top,i=t.height,(window.innerHeight-n)/(window.innerHeight+i)),l=o.find(function(e){var t=e.visibility;return t&&a>=t[0]&&a<=t[1]});if(l){if("seek"===l.type&&l.visibility&&2===l.frames.length){var u=l.frames[0]+Math.ceil((a-l.visibility[0])/(l.visibility[1]-l.visibility[0])*l.frames[1]);r.goToAndStop(u-r.firstFrame-1,!0)}"loop"===l.type&&(null===e?(r.playSegments(l.frames,!0),e=l.frames):e!==l.frames?(r.playSegments(l.frames,!0),e=l.frames):r.isPaused&&(r.playSegments(l.frames,!0),e=l.frames)),"play"===l.type&&r.isPaused&&(r.resetSegments(!0),r.play()),"stop"===l.type&&r.goToAndStop(l.frames[0]-r.firstFrame-1,!0)}},document.addEventListener("scroll",n),function(){document.removeEventListener("scroll",n)};case"cursor":return a=function(e,t){var n=e,i=t;if(-1!==n&&-1!==i){var a,l,u,d,c=(a=n,l=i,d=(u=s.getBoundingClientRect()).top,{x:(a-u.left)/u.width,y:(l-d)/u.height});n=c.x,i=c.y}var f=o.find(function(e){var t=e.position;return t&&Array.isArray(t.x)&&Array.isArray(t.y)?n>=t.x[0]&&n<=t.x[1]&&i>=t.y[0]&&i<=t.y[1]:!(!t||Number.isNaN(t.x)||Number.isNaN(t.y))&&n===t.x&&i===t.y});if(f){if("seek"===f.type&&f.position&&Array.isArray(f.position.x)&&Array.isArray(f.position.y)&&2===f.frames.length){var m=(n-f.position.x[0])/(f.position.x[1]-f.position.x[0]),p=(i-f.position.y[0])/(f.position.y[1]-f.position.y[0]);r.playSegments(f.frames,!0),r.goToAndStop(Math.ceil((m+p)/2*(f.frames[1]-f.frames[0])),!0)}"loop"===f.type&&r.playSegments(f.frames,!0),"play"===f.type&&(r.isPaused&&r.resetSegments(!1),r.playSegments(f.frames)),"stop"===f.type&&r.goToAndStop(f.frames[0],!0)}},l=function(e){a(e.clientX,e.clientY)},u=function(){a(-1,-1)},s.addEventListener("mousemove",l),s.addEventListener("mouseout",u),function(){s.removeEventListener("mousemove",l),s.removeEventListener("mouseout",u)}}},[i,r])},m=function(e){var t=e.actions,n=e.mode,r=e.lottieObj,i=r.animationItem,o=r.View;return f({actions:t,animationItem:i,mode:n,wrapperRef:r.animationContainerRef}),o},p=["style","interactivity"];Object.defineProperty(e,"LottiePlayer",{enumerable:!0,get:function(){return i.default}}),e.default=function(e){var t,r,i,o=e.style,a=e.interactivity,l=c(u(e,p),o),s=l.View,d=l.play,f=l.stop,g=l.pause,y=l.setSpeed,v=l.goToAndStop,h=l.goToAndPlay,b=l.setDirection,w=l.playSegments,S=l.setSubframe,j=l.getDuration,O=l.destroy,_=l.animationContainerRef,x=l.animationLoaded,E=l.animationItem;return n.useEffect(function(){e.lottieRef&&(e.lottieRef.current={play:d,stop:f,pause:g,setSpeed:y,goToAndPlay:h,goToAndStop:v,setDirection:b,playSegments:w,setSubframe:S,getDuration:j,destroy:O,animationContainerRef:_,animationLoaded:x,animationItem:E})},[null===(t=e.lottieRef)||void 0===t?void 0:t.current]),m({lottieObj:{View:s,play:d,stop:f,pause:g,setSpeed:y,goToAndStop:v,goToAndPlay:h,setDirection:b,playSegments:w,setSubframe:S,getDuration:j,destroy:O,animationContainerRef:_,animationLoaded:x,animationItem:E},actions:null!==(r=null==a?void 0:a.actions)&&void 0!==r?r:[],mode:null!==(i=null==a?void 0:a.mode)&&void 0!==i?i:"scroll"})},e.useLottie=c,e.useLottieInteractivity=m,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(5223),n(2115))},7970:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return w}});let r=n(306),i=n(9955),o=n(5155),a=i._(n(2115)),l=r._(n(7650)),u=r._(n(6107)),s=n(666),d=n(1159),c=n(3621);n(2363);let f=n(3576),m=r._(n(5514)),p=n(5353),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function y(e,t,n,r,i,o,a){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function v(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let h=(0,a.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:l,width:u,decoding:s,className:d,style:c,fetchPriority:f,placeholder:m,loading:g,unoptimized:h,fill:b,onLoadRef:w,onLoadingCompleteRef:S,setBlurComplete:j,setShowAltText:O,sizesInput:_,onLoad:x,onError:E,...P}=e,C=(0,a.useCallback)(e=>{e&&(E&&(e.src=e.src),e.complete&&y(e,m,w,S,j,h,_))},[n,m,w,S,j,E,h,_]),A=(0,p.useMergedRef)(t,C);return(0,o.jsx)("img",{...P,...v(f),loading:g,width:u,height:l,decoding:s,"data-nimg":b?"fill":"1",className:d,style:c,sizes:i,srcSet:r,src:n,ref:A,onLoad:e=>{y(e.currentTarget,m,w,S,j,h,_)},onError:e=>{O(!0),"empty"!==m&&j(!0),E&&E(e)}})});function b(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...v(n.fetchPriority)};return t&&l.default.preload?(l.default.preload(n.src,r),null):(0,o.jsx)(u.default,{children:(0,o.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}let w=(0,a.forwardRef)((e,t)=>{let n=(0,a.useContext)(f.RouterContext),r=(0,a.useContext)(c.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=g||r||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:l,onLoadingComplete:u}=e,p=(0,a.useRef)(l);(0,a.useEffect)(()=>{p.current=l},[l]);let y=(0,a.useRef)(u);(0,a.useEffect)(()=>{y.current=u},[u]);let[v,w]=(0,a.useState)(!1),[S,j]=(0,a.useState)(!1),{props:O,meta:_}=(0,s.getImgProps)(e,{defaultLoader:m.default,imgConf:i,blurComplete:v,showAltText:S});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h,{...O,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:p,onLoadingCompleteRef:y,setBlurComplete:w,setShowAltText:j,sizesInput:e.sizes,ref:t}),_.priority?(0,o.jsx)(b,{isAppRouter:!n,imgAttributes:O}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3003:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(306)._(n(2115)).default.createContext({})},675:(e,t)=>{"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},666:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),n(2363);let r=n(5859),i=n(1159);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var n;let l,u,s,{src:d,sizes:c,unoptimized:f=!1,priority:m=!1,loading:p,className:g,quality:y,width:v,height:h,fill:b=!1,style:w,overrideSrc:S,onLoad:j,onLoadingComplete:O,placeholder:_="empty",blurDataURL:x,fetchPriority:E,decoding:P="async",layout:C,objectFit:A,objectPosition:R,lazyBoundary:M,lazyRoot:I,...D}=e,{imgConf:k,showAltText:z,blurComplete:L,defaultLoader:T}=t,N=k||i.imageConfigDefault;if("allSizes"in N)l=N;else{let e=[...N.deviceSizes,...N.imageSizes].sort((e,t)=>e-t),t=N.deviceSizes.sort((e,t)=>e-t);l={...N,allSizes:e,deviceSizes:t}}if(void 0===T)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=D.loader||T;delete D.loader,delete D.srcSet;let B="__next_img_default"in F;if(B){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:n,...r}=t;return e(r)}}if(C){"fill"===C&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!c&&(c=t)}let U="",q=a(v),G=a(h);if((n=d)&&"object"==typeof n&&(o(n)||void 0!==n.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(u=e.blurWidth,s=e.blurHeight,x=x||e.blurDataURL,U=e.src,!b){if(q||G){if(q&&!G){let t=q/e.width;G=Math.round(e.height*t)}else if(!q&&G){let t=G/e.height;q=Math.round(e.width*t)}}else q=e.width,G=e.height}}let V=!m&&("lazy"===p||void 0===p);(!(d="string"==typeof d?d:U)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,V=!1),l.unoptimized&&(f=!0),B&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0);let H=a(y),W=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:R}:{},z?{}:{color:"transparent"},w),X=L||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:q,heightInt:G,blurWidth:u,blurHeight:s,blurDataURL:x||"",objectFit:W.objectFit})+'")':'url("'+_+'")',$=X?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},Y=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:a,loader:l}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),d=u.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:u.map((e,r)=>l({config:t,src:n,quality:o,width:e})+" "+("w"===s?e:r+1)+s).join(", "),src:l({config:t,src:n,quality:o,width:u[d]})}}({config:l,src:d,unoptimized:f,width:q,quality:H,sizes:c,loader:F});return{props:{...D,loading:V?"lazy":p,fetchPriority:E,width:q,height:G,decoding:P,className:g,style:{...W,...$},sizes:Y.sizes,srcSet:Y.srcSet,src:S||Y.src},meta:{unoptimized:f,priority:m,placeholder:_,fill:b}}}},6107:(e,t,n)=>{"use strict";var r=n(2818);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return y},defaultHead:function(){return f}});let i=n(306),o=n(9955),a=n(5155),l=o._(n(2115)),u=i._(n(1172)),s=n(3003),d=n(1147),c=n(675);function f(e){void 0===e&&(e=!1);let t=[(0,a.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function m(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(2363);let p=["name","httpEquiv","charSet","itemProp"];function g(e,t){let{inAmpMode:n}=t;return e.reduce(m,[]).reverse().concat(f(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!a)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let i=e.key||t;if(r.env.__NEXT_OPTIMIZE_FONTS&&!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:i})})}let y=function(e){let{children:t}=e,n=(0,l.useContext)(s.AmpStateContext),r=(0,l.useContext)(d.HeadManagerContext);return(0,a.jsx)(u.default,{reduceComponentsToState:g,headManager:r,inAmpMode:(0,c.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5859:(e,t)=>{"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=r?40*r:t,u=i?40*i:n,s=l&&u?"viewBox='0 0 "+l+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},3621:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=n(306)._(n(2115)),i=n(1159),o=r.default.createContext(i.imageConfigDefault)},1159:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},5514:(e,t)=>{"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},1172:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(2115),i="undefined"==typeof window,o=i?()=>{}:r.useLayoutEffect,a=i?()=>{}:r.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}if(i){var u;null==t||null==(u=t.mountedInstances)||u.add(e.children),l()}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},8331:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2115),i=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(r);!function(e){if(!e||"undefined"==typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');let o=r.forwardRef(function(e,t){let{style:n={},className:o="",autoFill:a=!1,play:l=!0,pauseOnHover:u=!1,pauseOnClick:s=!1,direction:d="left",speed:c=50,delay:f=0,loop:m=0,gradient:p=!1,gradientColor:g="white",gradientWidth:y=200,onFinish:v,onCycleComplete:h,onMount:b,children:w}=e,[S,j]=r.useState(0),[O,_]=r.useState(0),[x,E]=r.useState(1),[P,C]=r.useState(!1),A=r.useRef(null),R=t||A,M=r.useRef(null),I=r.useCallback(()=>{if(M.current&&R.current){let e=R.current.getBoundingClientRect(),t=M.current.getBoundingClientRect(),n=e.width,r=t.width;("up"===d||"down"===d)&&(n=e.height,r=t.height),a&&n&&r?E(r<n?Math.ceil(n/r):1):E(1),j(n),_(r)}},[a,R,d]);r.useEffect(()=>{if(P&&(I(),M.current&&R.current)){let e=new ResizeObserver(()=>I());return e.observe(R.current),e.observe(M.current),()=>{e&&e.disconnect()}}},[I,R,P]),r.useEffect(()=>{I()},[I,w]),r.useEffect(()=>{C(!0)},[]),r.useEffect(()=>{"function"==typeof b&&b()},[]);let D=r.useMemo(()=>a?O*x/c:O<S?S/c:O/c,[a,S,O,x,c]),k=r.useMemo(()=>Object.assign(Object.assign({},n),{"--pause-on-hover":!l||u?"paused":"running","--pause-on-click":!l||u&&!s||s?"paused":"running","--width":"up"===d||"down"===d?"100vh":"100%","--transform":"up"===d?"rotate(-90deg)":"down"===d?"rotate(90deg)":"none"}),[n,l,u,s,d]),z=r.useMemo(()=>({"--gradient-color":g,"--gradient-width":"number"==typeof y?"".concat(y,"px"):y}),[g,y]),L=r.useMemo(()=>({"--play":l?"running":"paused","--direction":"left"===d?"normal":"reverse","--duration":"".concat(D,"s"),"--delay":"".concat(f,"s"),"--iteration-count":m?"".concat(m):"infinite","--min-width":a?"auto":"100%"}),[l,d,D,f,m,a]),T=r.useMemo(()=>({"--transform":"up"===d?"rotate(90deg)":"down"===d?"rotate(-90deg)":"none"}),[d]),N=r.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>i.default.createElement(r.Fragment,{key:t},r.Children.map(w,e=>i.default.createElement("div",{style:T,className:"rfm-child"},e)))),[T,w]);return P?i.default.createElement("div",{ref:R,style:k,className:"rfm-marquee-container "+o},p&&i.default.createElement("div",{style:z,className:"rfm-overlay"}),i.default.createElement("div",{className:"rfm-marquee",style:L,onAnimationIteration:h,onAnimationEnd:v},i.default.createElement("div",{className:"rfm-initial-child-container",ref:M},r.Children.map(w,e=>i.default.createElement("div",{style:T,className:"rfm-child"},e))),N(x-1)),i.default.createElement("div",{className:"rfm-marquee",style:L},N(x))):null});t.default=o}}]);