"use strict";(self.webpackChunkaimoonhub=self.webpackChunkaimoonhub||[]).push([[5638],{6314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",n=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),n&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),n&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,n,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);n&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),o&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=o):u[2]=o),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},4417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},1601:e=>{e.exports=function(e){return e[1]}},3804:(e,t,o)=>{o(4915);Object.create(null)},4519:(e,t,o)=>{o.d(t,{A:()=>i});var n=o(6540);function r({title:e,titleId:t,...o},r){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},o),e?n.createElement("title",{id:t},e):null,n.createElement("path",{fillRule:"evenodd",d:"M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const i=n.forwardRef(r)},7275:(e,t,o)=>{o.d(t,{A:()=>Q});var n=o(2125);const{toString:r}=Object.prototype,{getPrototypeOf:i}=Object,a=(s=Object.create(null),e=>{const t=r.call(e);return s[t]||(s[t]=t.slice(8,-1).toLowerCase())});var s;const c=e=>(e=e.toLowerCase(),t=>a(t)===e),l=e=>t=>typeof t===e,{isArray:u}=Array,d=l("undefined");const p=c("ArrayBuffer");const f=l("string"),h=l("function"),g=l("number"),m=e=>null!==e&&"object"==typeof e,w=e=>{if("object"!==a(e))return!1;const t=i(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},y=c("Date"),b=c("File"),S=c("Blob"),v=c("FileList"),x=c("URLSearchParams"),[O,k,A,L]=["ReadableStream","Request","Response","Headers"].map(c);function F(e,t,{allOwnKeys:o=!1}={}){if(null==e)return;let n,r;if("object"!=typeof e&&(e=[e]),u(e))for(n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else{const r=o?Object.getOwnPropertyNames(e):Object.keys(e),i=r.length;let a;for(n=0;n<i;n++)a=r[n],t.call(null,e[a],a,e)}}function D(e,t){t=t.toLowerCase();const o=Object.keys(e);let n,r=o.length;for(;r-- >0;)if(n=o[r],t===n.toLowerCase())return n;return null}const j="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,C=e=>!d(e)&&e!==j;const T=(E="undefined"!=typeof Uint8Array&&i(Uint8Array),e=>E&&e instanceof E);var E;const I=c("HTMLFormElement"),P=(({hasOwnProperty:e})=>(t,o)=>e.call(t,o))(Object.prototype),U=c("RegExp"),B=(e,t)=>{const o=Object.getOwnPropertyDescriptors(e),n={};F(o,((o,r)=>{let i;!1!==(i=t(o,r,e))&&(n[r]=i||o)})),Object.defineProperties(e,n)},M="abcdefghijklmnopqrstuvwxyz",R="0123456789",N={DIGIT:R,ALPHA:M,ALPHA_DIGIT:M+M.toUpperCase()+R};const $=c("AsyncFunction"),H=(q="function"==typeof setImmediate,z=h(j.postMessage),q?setImmediate:z?(_=`axios@${Math.random()}`,K=[],j.addEventListener("message",(({source:e,data:t})=>{e===j&&t===_&&K.length&&K.shift()()}),!1),e=>{K.push(e),j.postMessage(_,"*")}):e=>setTimeout(e));var q,z,_,K;const G="undefined"!=typeof queueMicrotask?queueMicrotask.bind(j):"undefined"!=typeof process&&process.nextTick||H,Q={isArray:u,isArrayBuffer:p,isBuffer:function(e){return null!==e&&!d(e)&&null!==e.constructor&&!d(e.constructor)&&h(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||h(e.append)&&("formdata"===(t=a(e))||"object"===t&&h(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&p(e.buffer),t},isString:f,isNumber:g,isBoolean:e=>!0===e||!1===e,isObject:m,isPlainObject:w,isReadableStream:O,isRequest:k,isResponse:A,isHeaders:L,isUndefined:d,isDate:y,isFile:b,isBlob:S,isRegExp:U,isFunction:h,isStream:e=>m(e)&&h(e.pipe),isURLSearchParams:x,isTypedArray:T,isFileList:v,forEach:F,merge:function e(){const{caseless:t}=C(this)&&this||{},o={},n=(n,r)=>{const i=t&&D(o,r)||r;w(o[i])&&w(n)?o[i]=e(o[i],n):w(n)?o[i]=e({},n):u(n)?o[i]=n.slice():o[i]=n};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&F(arguments[e],n);return o},extend:(e,t,o,{allOwnKeys:r}={})=>(F(t,((t,r)=>{o&&h(t)?e[r]=(0,n.A)(t,o):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,o,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),o&&Object.assign(e.prototype,o)},toFlatObject:(e,t,o,n)=>{let r,a,s;const c={};if(t=t||{},null==e)return t;do{for(r=Object.getOwnPropertyNames(e),a=r.length;a-- >0;)s=r[a],n&&!n(s,e,t)||c[s]||(t[s]=e[s],c[s]=!0);e=!1!==o&&i(e)}while(e&&(!o||o(e,t))&&e!==Object.prototype);return t},kindOf:a,kindOfTest:c,endsWith:(e,t,o)=>{e=String(e),(void 0===o||o>e.length)&&(o=e.length),o-=t.length;const n=e.indexOf(t,o);return-1!==n&&n===o},toArray:e=>{if(!e)return null;if(u(e))return e;let t=e.length;if(!g(t))return null;const o=new Array(t);for(;t-- >0;)o[t]=e[t];return o},forEachEntry:(e,t)=>{const o=(e&&e[Symbol.iterator]).call(e);let n;for(;(n=o.next())&&!n.done;){const o=n.value;t.call(e,o[0],o[1])}},matchAll:(e,t)=>{let o;const n=[];for(;null!==(o=e.exec(t));)n.push(o);return n},isHTMLForm:I,hasOwnProperty:P,hasOwnProp:P,reduceDescriptors:B,freezeMethods:e=>{B(e,((t,o)=>{if(h(e)&&-1!==["arguments","caller","callee"].indexOf(o))return!1;const n=e[o];h(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+o+"'")}))}))},toObjectSet:(e,t)=>{const o={},n=e=>{e.forEach((e=>{o[e]=!0}))};return u(e)?n(e):n(String(e).split(t)),o},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,o){return t.toUpperCase()+o})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:D,global:j,isContextDefined:C,ALPHABET:N,generateString:(e=16,t=N.ALPHA_DIGIT)=>{let o="";const{length:n}=t;for(;e--;)o+=t[Math.random()*n|0];return o},isSpecCompliantForm:function(e){return!!(e&&h(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),o=(e,n)=>{if(m(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;const r=u(e)?[]:{};return F(e,((e,t)=>{const i=o(e,n+1);!d(i)&&(r[t]=i)})),t[n]=void 0,r}}return e};return o(e,0)},isAsyncFn:$,isThenable:e=>e&&(m(e)||h(e))&&h(e.then)&&h(e.catch),setImmediate:H,asap:G}},4997:(e,t,o)=>{o.d(t,{A:()=>b});const{slice:n,forEach:r}=[];const i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,a={create(e,t,o,n){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};o&&(r.expires=new Date,r.expires.setTime(r.expires.getTime()+60*o*1e3)),n&&(r.domain=n),document.cookie=((e,t,o)=>{const n=o||{};n.path=n.path||"/";let r=`${e}=${encodeURIComponent(t)}`;if(n.maxAge>0){const e=n.maxAge-0;if(Number.isNaN(e))throw new Error("maxAge should be a Number");r+=`; Max-Age=${Math.floor(e)}`}if(n.domain){if(!i.test(n.domain))throw new TypeError("option domain is invalid");r+=`; Domain=${n.domain}`}if(n.path){if(!i.test(n.path))throw new TypeError("option path is invalid");r+=`; Path=${n.path}`}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");r+=`; Expires=${n.expires.toUTCString()}`}if(n.httpOnly&&(r+="; HttpOnly"),n.secure&&(r+="; Secure"),n.sameSite)switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return r})(e,encodeURIComponent(t),r)},read(e){const t=`${e}=`,o=document.cookie.split(";");for(let e=0;e<o.length;e++){let n=o[e];for(;" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(t))return n.substring(t.length,n.length)}return null},remove(e){this.create(e,"",-1)}};var s={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&"undefined"!=typeof document)return a.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:o,cookieMinutes:n,cookieDomain:r,cookieOptions:i}=t;o&&"undefined"!=typeof document&&a.create(o,e,n,r,i)}},c={name:"querystring",lookup(e){let t,{lookupQuerystring:o}=e;if("undefined"!=typeof window){let{search:e}=window.location;!window.location.search&&window.location.hash?.indexOf("?")>-1&&(e=window.location.hash.substring(window.location.hash.indexOf("?")));const n=e.substring(1).split("&");for(let e=0;e<n.length;e++){const r=n[e].indexOf("=");if(r>0){n[e].substring(0,r)===o&&(t=n[e].substring(r+1))}}}return t}};let l=null;const u=()=>{if(null!==l)return l;try{l="undefined"!==window&&null!==window.localStorage;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch(e){l=!1}return l};var d={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&u())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:o}=t;o&&u()&&window.localStorage.setItem(o,e)}};let p=null;const f=()=>{if(null!==p)return p;try{p="undefined"!==window&&null!==window.sessionStorage;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch(e){p=!1}return p};var h={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&f())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:o}=t;o&&f()&&window.sessionStorage.setItem(o,e)}},g={name:"navigator",lookup(e){const t=[];if("undefined"!=typeof navigator){const{languages:e,userLanguage:o,language:n}=navigator;if(e)for(let o=0;o<e.length;o++)t.push(e[o]);o&&t.push(o),n&&t.push(n)}return t.length>0?t:void 0}},m={name:"htmlTag",lookup(e){let t,{htmlTag:o}=e;const n=o||("undefined"!=typeof document?document.documentElement:null);return n&&"function"==typeof n.getAttribute&&(t=n.getAttribute("lang")),t}},w={name:"path",lookup(e){let{lookupFromPathIndex:t}=e;if("undefined"==typeof window)return;const o=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(!Array.isArray(o))return;const n="number"==typeof t?t:0;return o[n]?.replace("/","")}},y={name:"subdomain",lookup(e){let{lookupFromSubdomainIndex:t}=e;const o="number"==typeof t?t+1:1,n="undefined"!=typeof window&&window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(n)return n[o]}};class b{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e||{languageUtils:{}},this.options=function(e){return r.call(n.call(arguments,1),(t=>{if(t)for(const o in t)void 0===e[o]&&(e[o]=t[o])})),e}(t,this.options||{},{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e}),"string"==typeof this.options.convertDetectedLanguage&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=e=>e.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=o,this.addDetector(s),this.addDetector(c),this.addDetector(d),this.addDetector(h),this.addDetector(g),this.addDetector(m),this.addDetector(w),this.addDetector(y)}addDetector(e){return this.detectors[e.name]=e,this}detect(e){e||(e=this.options.order);let t=[];return e.forEach((e=>{if(this.detectors[e]){let o=this.detectors[e].lookup(this.options);o&&"string"==typeof o&&(o=[o]),o&&(t=t.concat(o))}})),t=t.map((e=>this.options.convertDetectedLanguage(e))),this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e,t){t||(t=this.options.caches),t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach((t=>{this.detectors[t]&&this.detectors[t].cacheUserLanguage(e,this.options)})))}}b.type="languageDetector"}}]);