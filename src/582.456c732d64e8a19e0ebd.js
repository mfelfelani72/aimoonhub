/*! For license information please see 582.456c732d64e8a19e0ebd.js.LICENSE.txt */
"use strict";(self.webpackChunkaimoonhub=self.webpackChunkaimoonhub||[]).push([[582],{4582:(t,e,r)=>{r.r(e),r.d(e,{default:()=>L});var n=r(6540),o=r(7767),a=r(4976),i=r(8558),l=r(6032),c=r(1872),u=r(6741),s=r(1327),f=r(9402);function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return m(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}const d=function(t){var e,r,o=h((0,n.useState)(!0),2),a=o[0],i=o[1];return n.createElement("div",{className:"relative h-[17rem] border rounded-lg"},n.createElement("div",{className:"h-[13rem]"},n.createElement("a",{href:null==t?void 0:t.row.link,target:"_blank"},n.createElement("img",{className:"h-[13rem] w-full border border-transparent rounded-lg",alt:null==t?void 0:t.row.title,src:null!=t&&t.row.local_image?null==t?void 0:t.row.local_image:null!=t&&null!==(e=t.row)&&void 0!==e&&e.thImage?null==t||null===(r=t.row)||void 0===r?void 0:r.thImage:f.XB,onError:function(t){t.target.src=f.XB}})),n.createElement("div",{className:"absolute top-0 left-0 m-5 mt-10 border rounded-xl bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg h-[6.7rem] w-[16rem] text-[0.8rem] p-2 text-justify text-slate-800 mx-2"},n.createElement("a",{onClick:function(t){return function(t){2==t.detail&&i((function(t){return!t}))}(t)},className:"cursor-pointer"},a?n.createElement("div",{className:"rtl"},null==t?void 0:t.row.summaryFa):null==t?void 0:t.row.summaryEn)),n.createElement("div",{className:"absolute right-0 top-0 m-2 bg-D-color-theme rounded-md"},n.createElement("div",{className:"p-[0.2rem] text-[0.8rem] font-bold text-white"},null==t?void 0:t.row.category))),n.createElement("div",{className:"absolute top-[10rem] w-full"},n.createElement(s.A,{data:null==t?void 0:t.row,lineChartWidth:"w-[2rem]"})))};function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(){y=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),l=new P(n||[]);return o(i,"_invoke",{value:A(t,r,l)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",m="suspendedYield",d="executing",v="completed",g={};function b(){}function w(){}function E(){}var x={};u(x,i,(function(){return this}));var S=Object.getPrototypeOf,L=S&&S(S(T([])));L&&L!==r&&n.call(L,i)&&(x=L);var N=E.prototype=b.prototype=Object.create(x);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,a,i,l){var c=f(t[o],t,a);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==p(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,l)}),(function(t){r("throw",t,i,l)})):e.resolve(s).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,l)}))}l(c.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function A(e,r,n){var o=h;return function(a,i){if(o===d)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var l=n.delegate;if(l){var c=O(l,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var u=f(e,r,n);if("normal"===u.type){if(o=n.done?v:m,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=v,n.method="throw",n.arg=u.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(p(e)+" is not iterable")}return w.prototype=E,o(N,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:w,configurable:!0}),w.displayName=u(E,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,u(t,c,"GeneratorFunction")),t.prototype=Object.create(N),t},e.awrap=function(t){return{__await:t}},k(j.prototype),u(j.prototype,l,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new j(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(N),u(N,c,"Generator"),u(N,i,(function(){return this})),u(N,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return l.type="throw",l.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function v(t){return function(t){if(Array.isArray(t))return x(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||E(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e,r,n,o,a,i){try{var l=t[a](i),c=l.value}catch(t){return void r(t)}l.done?e(c):Promise.resolve(c).then(n,o)}function b(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){g(a,n,o,i,l,"next",t)}function l(t){g(a,n,o,i,l,"throw",t)}i(void 0)}))}}function w(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(t,e)||E(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,e){if(t){if("string"==typeof t)return x(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(t,e):void 0}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var S=r(2543);const L=function(){var t=(0,o.zy)(),e=(0,n.useState)(t.state.endDate),r=w((0,n.useState)(t.state.nav),1)[0],s=w((0,n.useState)([]),2),f=s[0],h=s[1],m=w((0,n.useState)(),2),p=m[0],g=m[1],E=w((0,n.useState)("cryptocurrencies"),2),x=E[0],L=(E[1],w((0,n.useState)("all"),2)),N=L[0],k=(L[1],w((0,n.useState)("1716373411"),2)),j=k[0],A=(k[1],w((0,n.useState)(1),2)),O=A[0],_=A[1],I=w((0,n.useState)(10),2),P=I[0],T=(I[1],function(){var t=b(y().mark((function t(){var r;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r={category:x,symbols:N,startDate:j,endDate:e[0],page:O,pageLimit:P,llmOnly:!0};try{(0,i.b)(l.iq,r).then((function(t){t.data.data.result&&(console.log("Fetch dataLlm done."),h((function(e){return[].concat(v(e),v(t.data.data.result))})),_((function(t){return t+1})),g(!1))}))}catch(t){console.log(t)}case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()),G=function(){var t=b(y().mark((function t(){return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:g(!0),1===O&&2===O||C();case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=S.debounce((function(){T()}),100);return(0,n.useEffect)((function(){0==f.length&&T()}),[f]),n.createElement("div",{className:"bg-white mx-4 rounded-[1rem]"},n.createElement("h2",{className:"p-2"},"Aimoon News"),n.createElement("div",{className:"text-[0.7rem] text-slate-500 font-bold px-2"},n.createElement("span",null,null==r?void 0:r.map((function(t,e){return n.createElement("span",{key:e},"end"!==(null==t?void 0:t.title)?n.createElement(a.k2,{key:e,to:null==t?void 0:t.address},n.createElement("span",{className:"capitalize pr-1"},null==t?void 0:t.title),n.createElement("span",null," "," > ")):n.createElement("span",{className:"pl-1 capitalize"},"Aimoon News"))})))," "),n.createElement("div",{className:"container p-2 mx-auto"},n.createElement("div",{className:"grid grid-cols-1 gap-2 "},null==f?void 0:f.map((function(t,e){return n.createElement(d,{key:e,row:t})}))),n.createElement("div",{className:"text-end"},n.createElement(c.A,{onClick:function(){return G()},className:"m-3 bg-color-theme hover:bg-color-theme dark:bg-D-color-theme dark:hover:bg-D-color-theme"},"More")),p&&n.createElement(u.A,null)))}}}]);