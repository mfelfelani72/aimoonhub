(self.webpackChunkcardnews=self.webpackChunkcardnews||[]).push([[511],{6314:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,o,r){"string"==typeof t&&(t=[[null,t,void 0]]);var l={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(l[c]=!0)}for(var a=0;a<t.length;a++){var f=[].concat(t[a]);i&&l[f[0]]||(void 0!==r&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=r),n&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=n):f[2]=n),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),e.push(f))}},e}},4417:t=>{"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},1601:t=>{"use strict";t.exports=function(t){return t[1]}},7334:t=>{function e(t,e=100,n={}){if("function"!=typeof t)throw new TypeError(`Expected the first parameter to be a function, got \`${typeof t}\`.`);if(e<0)throw new RangeError("`wait` must not be negative.");const{immediate:i}="boolean"==typeof n?{immediate:n}:n;let o,r,l,s,c;function a(){const e=o,n=r;return o=void 0,r=void 0,c=t.apply(e,n),c}function f(){const t=Date.now()-s;t<e&&t>=0?l=setTimeout(f,e-t):(l=void 0,i||(c=a()))}const u=function(...t){if(o&&this!==o)throw new Error("Debounced method called with different contexts.");o=this,r=t,s=Date.now();const n=i&&!l;return l||(l=setTimeout(f,e)),n&&(c=a()),c};return u.clear=()=>{l&&(clearTimeout(l),l=void 0)},u.flush=()=>{l&&u.trigger()},u.trigger=()=>{c=a(),u.clear()},u}t.exports.debounce=e,t.exports=e},6885:(t,e,n)=>{"use strict";n.d(e,{UE:()=>D,RK:()=>R,ll:()=>b,rD:()=>P,UU:()=>E,cY:()=>T,BN:()=>L});var i=n(7193);function o(t,e,n){let{reference:o,floating:r}=t;const l=(0,i.TV)(e),s=(0,i.Dz)(e),c=(0,i.sq)(s),a=(0,i.C0)(e),f="y"===l,u=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,g=o[c]/2-r[c]/2;let h;switch(a){case"top":h={x:u,y:o.y-r.height};break;case"bottom":h={x:u,y:o.y+o.height};break;case"right":h={x:o.x+o.width,y:d};break;case"left":h={x:o.x-r.width,y:d};break;default:h={x:o.x,y:o.y}}switch((0,i.Sg)(e)){case"start":h[s]-=g*(n&&f?-1:1);break;case"end":h[s]+=g*(n&&f?-1:1)}return h}async function r(t,e){var n;void 0===e&&(e={});const{x:o,y:r,platform:l,rects:s,elements:c,strategy:a}=t,{boundary:f="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:g=!1,padding:h=0}=(0,i._3)(e,t),m=(0,i.nI)(h),p=c[g?"floating"===d?"reference":"floating":d],y=(0,i.B1)(await l.getClippingRect({element:null==(n=await(null==l.isElement?void 0:l.isElement(p)))||n?p:p.contextElement||await(null==l.getDocumentElement?void 0:l.getDocumentElement(c.floating)),boundary:f,rootBoundary:u,strategy:a})),v="floating"===d?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,x=await(null==l.getOffsetParent?void 0:l.getOffsetParent(c.floating)),w=await(null==l.isElement?void 0:l.isElement(x))&&await(null==l.getScale?void 0:l.getScale(x))||{x:1,y:1},b=(0,i.B1)(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:v,offsetParent:x,strategy:a}):v);return{top:(y.top-b.top+m.top)/w.y,bottom:(b.bottom-y.bottom+m.bottom)/w.y,left:(y.left-b.left+m.left)/w.x,right:(b.right-y.right+m.right)/w.x}}var l=n(6635);function s(t){const e=(0,l.L9)(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=(0,l.sb)(t),s=r?t.offsetWidth:n,c=r?t.offsetHeight:o,a=(0,i.LI)(n)!==s||(0,i.LI)(o)!==c;return a&&(n=s,o=c),{width:n,height:o,$:a}}function c(t){return(0,l.vq)(t)?t:t.contextElement}function a(t){const e=c(t);if(!(0,l.sb)(e))return(0,i.Jx)(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:a}=s(e);let f=(a?(0,i.LI)(n.width):n.width)/o,u=(a?(0,i.LI)(n.height):n.height)/r;return f&&Number.isFinite(f)||(f=1),u&&Number.isFinite(u)||(u=1),{x:f,y:u}}const f=(0,i.Jx)(0);function u(t){const e=(0,l.zk)(t);return(0,l.Tc)()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:f}function d(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const r=t.getBoundingClientRect(),s=c(t);let f=(0,i.Jx)(1);e&&(o?(0,l.vq)(o)&&(f=a(o)):f=a(t));const d=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==(0,l.zk)(t))&&e}(s,n,o)?u(s):(0,i.Jx)(0);let g=(r.left+d.x)/f.x,h=(r.top+d.y)/f.y,m=r.width/f.x,p=r.height/f.y;if(s){const t=(0,l.zk)(s),e=o&&(0,l.vq)(o)?(0,l.zk)(o):o;let n=t,i=(0,l._m)(n);for(;i&&o&&e!==n;){const t=a(i),e=i.getBoundingClientRect(),o=(0,l.L9)(i),r=e.left+(i.clientLeft+parseFloat(o.paddingLeft))*t.x,s=e.top+(i.clientTop+parseFloat(o.paddingTop))*t.y;g*=t.x,h*=t.y,m*=t.x,p*=t.y,g+=r,h+=s,n=(0,l.zk)(i),i=(0,l._m)(n)}}return(0,i.B1)({width:m,height:p,x:g,y:h})}function g(t){return d((0,l.ep)(t)).left+(0,l.CP)(t).scrollLeft}function h(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=(0,l.zk)(t),i=(0,l.ep)(t),o=n.visualViewport;let r=i.clientWidth,s=i.clientHeight,c=0,a=0;if(o){r=o.width,s=o.height;const t=(0,l.Tc)();(!t||t&&"fixed"===e)&&(c=o.offsetLeft,a=o.offsetTop)}return{width:r,height:s,x:c,y:a}}(t,n);else if("document"===e)o=function(t){const e=(0,l.ep)(t),n=(0,l.CP)(t),o=t.ownerDocument.body,r=(0,i.T9)(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=(0,i.T9)(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let c=-n.scrollLeft+g(t);const a=-n.scrollTop;return"rtl"===(0,l.L9)(o).direction&&(c+=(0,i.T9)(e.clientWidth,o.clientWidth)-r),{width:r,height:s,x:c,y:a}}((0,l.ep)(t));else if((0,l.vq)(e))o=function(t,e){const n=d(t,!0,"fixed"===e),o=n.top+t.clientTop,r=n.left+t.clientLeft,s=(0,l.sb)(t)?a(t):(0,i.Jx)(1);return{width:t.clientWidth*s.x,height:t.clientHeight*s.y,x:r*s.x,y:o*s.y}}(e,n);else{const n=u(t);o={...e,x:e.x-n.x,y:e.y-n.y}}return(0,i.B1)(o)}function m(t,e){const n=(0,l.$4)(t);return!(n===e||!(0,l.vq)(n)||(0,l.eu)(n))&&("fixed"===(0,l.L9)(n).position||m(n,e))}function p(t,e,n){const o=(0,l.sb)(e),r=(0,l.ep)(e),s="fixed"===n,c=d(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const f=(0,i.Jx)(0);if(o||!o&&!s)if(("body"!==(0,l.mq)(e)||(0,l.ZU)(r))&&(a=(0,l.CP)(e)),o){const t=d(e,!0,s,e);f.x=t.x+e.clientLeft,f.y=t.y+e.clientTop}else r&&(f.x=g(r));return{x:c.left+a.scrollLeft-f.x,y:c.top+a.scrollTop-f.y,width:c.width,height:c.height}}function y(t){return"static"===(0,l.L9)(t).position}function v(t,e){return(0,l.sb)(t)&&"fixed"!==(0,l.L9)(t).position?e?e(t):t.offsetParent:null}function x(t,e){const n=(0,l.zk)(t);if((0,l.Tf)(t))return n;if(!(0,l.sb)(t)){let e=(0,l.$4)(t);for(;e&&!(0,l.eu)(e);){if((0,l.vq)(e)&&!y(e))return e;e=(0,l.$4)(e)}return n}let i=v(t,e);for(;i&&(0,l.Lv)(i)&&y(i);)i=v(i,e);return i&&(0,l.eu)(i)&&y(i)&&!(0,l.sQ)(i)?n:i||(0,l.gJ)(t)||n}const w={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:o,strategy:r}=t;const s="fixed"===r,c=(0,l.ep)(o),f=!!e&&(0,l.Tf)(e.floating);if(o===c||f&&s)return n;let u={scrollLeft:0,scrollTop:0},g=(0,i.Jx)(1);const h=(0,i.Jx)(0),m=(0,l.sb)(o);if((m||!m&&!s)&&(("body"!==(0,l.mq)(o)||(0,l.ZU)(c))&&(u=(0,l.CP)(o)),(0,l.sb)(o))){const t=d(o);g=a(o),h.x=t.x+o.clientLeft,h.y=t.y+o.clientTop}return{width:n.width*g.x,height:n.height*g.y,x:n.x*g.x-u.scrollLeft*g.x+h.x,y:n.y*g.y-u.scrollTop*g.y+h.y}},getDocumentElement:l.ep,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const s=[..."clippingAncestors"===n?(0,l.Tf)(e)?[]:function(t,e){const n=e.get(t);if(n)return n;let i=(0,l.v9)(t,[],!1).filter((t=>(0,l.vq)(t)&&"body"!==(0,l.mq)(t))),o=null;const r="fixed"===(0,l.L9)(t).position;let s=r?(0,l.$4)(t):t;for(;(0,l.vq)(s)&&!(0,l.eu)(s);){const e=(0,l.L9)(s),n=(0,l.sQ)(s);n||"fixed"!==e.position||(o=null),(r?!n&&!o:!n&&"static"===e.position&&o&&["absolute","fixed"].includes(o.position)||(0,l.ZU)(s)&&!n&&m(t,s))?i=i.filter((t=>t!==s)):o=e,s=(0,l.$4)(s)}return e.set(t,i),i}(e,this._c):[].concat(n),o],c=s[0],a=s.reduce(((t,n)=>{const o=h(e,n,r);return t.top=(0,i.T9)(o.top,t.top),t.right=(0,i.jk)(o.right,t.right),t.bottom=(0,i.jk)(o.bottom,t.bottom),t.left=(0,i.T9)(o.left,t.left),t}),h(e,c,r));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:x,getElementRects:async function(t){const e=this.getOffsetParent||x,n=this.getDimensions,i=await n(t.floating);return{reference:p(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:n}=s(t);return{width:e,height:n}},getScale:a,isElement:l.vq,isRTL:function(t){return"rtl"===(0,l.L9)(t).direction}};function b(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:f="function"==typeof IntersectionObserver,animationFrame:u=!1}=o,g=c(t),h=r||s?[...g?(0,l.v9)(g):[],...(0,l.v9)(e)]:[];h.forEach((t=>{r&&t.addEventListener("scroll",n,{passive:!0}),s&&t.addEventListener("resize",n)}));const m=g&&f?function(t,e){let n,o=null;const r=(0,l.ep)(t);function s(){var t;clearTimeout(n),null==(t=o)||t.disconnect(),o=null}return function l(c,a){void 0===c&&(c=!1),void 0===a&&(a=1),s();const{left:f,top:u,width:d,height:g}=t.getBoundingClientRect();if(c||e(),!d||!g)return;const h={rootMargin:-(0,i.RI)(u)+"px "+-(0,i.RI)(r.clientWidth-(f+d))+"px "+-(0,i.RI)(r.clientHeight-(u+g))+"px "+-(0,i.RI)(f)+"px",threshold:(0,i.T9)(0,(0,i.jk)(1,a))||1};let m=!0;function p(t){const e=t[0].intersectionRatio;if(e!==a){if(!m)return l();e?l(!1,e):n=setTimeout((()=>{l(!1,1e-7)}),1e3)}m=!1}try{o=new IntersectionObserver(p,{...h,root:r.ownerDocument})}catch(t){o=new IntersectionObserver(p,h)}o.observe(t)}(!0),s}(g,n):null;let p,y=-1,v=null;a&&(v=new ResizeObserver((t=>{let[i]=t;i&&i.target===g&&v&&(v.unobserve(e),cancelAnimationFrame(y),y=requestAnimationFrame((()=>{var t;null==(t=v)||t.observe(e)}))),n()})),g&&!u&&v.observe(g),v.observe(e));let x=u?d(t):null;return u&&function e(){const i=d(t);!x||i.x===x.x&&i.y===x.y&&i.width===x.width&&i.height===x.height||n();x=i,p=requestAnimationFrame(e)}(),n(),()=>{var t;h.forEach((t=>{r&&t.removeEventListener("scroll",n),s&&t.removeEventListener("resize",n)})),null==m||m(),null==(t=v)||t.disconnect(),v=null,u&&cancelAnimationFrame(p)}}const T=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:r,y:l,placement:s,middlewareData:c}=e,a=await async function(t,e){const{placement:n,platform:o,elements:r}=t,l=await(null==o.isRTL?void 0:o.isRTL(r.floating)),s=(0,i.C0)(n),c=(0,i.Sg)(n),a="y"===(0,i.TV)(n),f=["left","top"].includes(s)?-1:1,u=l&&a?-1:1,d=(0,i._3)(e,t);let{mainAxis:g,crossAxis:h,alignmentAxis:m}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return c&&"number"==typeof m&&(h="end"===c?-1*m:m),a?{x:h*u,y:g*f}:{x:g*f,y:h*u}}(e,t);return s===(null==(n=c.offset)?void 0:n.placement)&&null!=(o=c.arrow)&&o.alignmentOffset?{}:{x:r+a.x,y:l+a.y,data:{...a,placement:s}}}}},R=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,l;const{rects:s,middlewareData:c,placement:a,platform:f,elements:u}=e,{crossAxis:d=!1,alignment:g,allowedPlacements:h=i.DD,autoAlignment:m=!0,...p}=(0,i._3)(t,e),y=void 0!==g||h===i.DD?function(t,e,n){return(t?[...n.filter((e=>(0,i.Sg)(e)===t)),...n.filter((e=>(0,i.Sg)(e)!==t))]:n.filter((t=>(0,i.C0)(t)===t))).filter((n=>!t||(0,i.Sg)(n)===t||!!e&&(0,i.aD)(n)!==n))}(g||null,m,h):h,v=await r(e,p),x=(null==(n=c.autoPlacement)?void 0:n.index)||0,w=y[x];if(null==w)return{};const b=(0,i.w7)(w,s,await(null==f.isRTL?void 0:f.isRTL(u.floating)));if(a!==w)return{reset:{placement:y[0]}};const T=[v[(0,i.C0)(w)],v[b[0]],v[b[1]]],R=[...(null==(o=c.autoPlacement)?void 0:o.overflows)||[],{placement:w,overflows:T}],L=y[x+1];if(L)return{data:{index:x+1,overflows:R},reset:{placement:L}};const E=R.map((t=>{const e=(0,i.Sg)(t.placement);return[t.placement,e&&d?t.overflows.slice(0,2).reduce(((t,e)=>t+e),0):t.overflows[0],t.overflows]})).sort(((t,e)=>t[1]-e[1])),D=(null==(l=E.filter((t=>t[2].slice(0,(0,i.Sg)(t[0])?2:3).every((t=>t<=0))))[0])?void 0:l[0])||E[0][0];return D!==a?{data:{index:x+1,overflows:R},reset:{placement:D}}:{}}}},L=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:l}=e,{mainAxis:s=!0,crossAxis:c=!1,limiter:a={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...f}=(0,i._3)(t,e),u={x:n,y:o},d=await r(e,f),g=(0,i.TV)((0,i.C0)(l)),h=(0,i.PG)(g);let m=u[h],p=u[g];if(s){const t="y"===h?"bottom":"right",e=m+d["y"===h?"top":"left"],n=m-d[t];m=(0,i.qE)(e,m,n)}if(c){const t="y"===g?"bottom":"right",e=p+d["y"===g?"top":"left"],n=p-d[t];p=(0,i.qE)(e,p,n)}const y=a.fn({...e,[h]:m,[g]:p});return{...y,data:{x:y.x-n,y:y.y-o}}}}},E=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:l,middlewareData:s,rects:c,initialPlacement:a,platform:f,elements:u}=e,{mainAxis:d=!0,crossAxis:g=!0,fallbackPlacements:h,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:y=!0,...v}=(0,i._3)(t,e);if(null!=(n=s.arrow)&&n.alignmentOffset)return{};const x=(0,i.C0)(l),w=(0,i.C0)(a)===a,b=await(null==f.isRTL?void 0:f.isRTL(u.floating)),T=h||(w||!y?[(0,i.bV)(a)]:(0,i.WJ)(a));h||"none"===p||T.push(...(0,i.lP)(a,y,p,b));const R=[a,...T],L=await r(e,v),E=[];let D=(null==(o=s.flip)?void 0:o.overflows)||[];if(d&&E.push(L[x]),g){const t=(0,i.w7)(l,c,b);E.push(L[t[0]],L[t[1]])}if(D=[...D,{placement:l,overflows:E}],!E.every((t=>t<=0))){var P,k;const t=((null==(P=s.flip)?void 0:P.index)||0)+1,e=R[t];if(e)return{data:{index:t,overflows:D},reset:{placement:e}};let n=null==(k=D.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:k.placement;if(!n)switch(m){case"bestFit":{var A;const t=null==(A=D.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:A[0];t&&(n=t);break}case"initialPlacement":n=a}if(l!==n)return{reset:{placement:n}}}return{}}}},D=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:r,rects:l,platform:s,elements:c,middlewareData:a}=e,{element:f,padding:u=0}=(0,i._3)(t,e)||{};if(null==f)return{};const d=(0,i.nI)(u),g={x:n,y:o},h=(0,i.Dz)(r),m=(0,i.sq)(h),p=await s.getDimensions(f),y="y"===h,v=y?"top":"left",x=y?"bottom":"right",w=y?"clientHeight":"clientWidth",b=l.reference[m]+l.reference[h]-g[h]-l.floating[m],T=g[h]-l.reference[h],R=await(null==s.getOffsetParent?void 0:s.getOffsetParent(f));let L=R?R[w]:0;L&&await(null==s.isElement?void 0:s.isElement(R))||(L=c.floating[w]||l.floating[m]);const E=b/2-T/2,D=L/2-p[m]/2-1,P=(0,i.jk)(d[v],D),k=(0,i.jk)(d[x],D),A=P,C=L-p[m]-k,q=L/2-p[m]/2+E,O=(0,i.qE)(A,q,C),S=!a.arrow&&null!=(0,i.Sg)(r)&&q!==O&&l.reference[m]/2-(q<A?P:k)-p[m]/2<0,z=S?q<A?q-A:q-C:0;return{[h]:g[h]+z,data:{[h]:O,centerOffset:q-O-z,...S&&{alignmentOffset:z}},reset:S}}}),P=(t,e,n)=>{const i=new Map,r={platform:w,...n},l={...r.platform,_c:i};return(async(t,e,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:l=[],platform:s}=n,c=l.filter(Boolean),a=await(null==s.isRTL?void 0:s.isRTL(e));let f=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:d}=o(f,i,a),g=i,h={},m=0;for(let n=0;n<c.length;n++){const{name:l,fn:p}=c[n],{x:y,y:v,data:x,reset:w}=await p({x:u,y:d,initialPlacement:i,placement:g,strategy:r,middlewareData:h,rects:f,platform:s,elements:{reference:t,floating:e}});u=null!=y?y:u,d=null!=v?v:d,h={...h,[l]:{...h[l],...x}},w&&m<=50&&(m++,"object"==typeof w&&(w.placement&&(g=w.placement),w.rects&&(f=!0===w.rects?await s.getElementRects({reference:t,floating:e,strategy:r}):w.rects),({x:u,y:d}=o(f,g,a))),n=-1)}return{x:u,y:d,placement:g,strategy:r,middlewareData:h}})(t,e,{...r,platform:l})}}}]);