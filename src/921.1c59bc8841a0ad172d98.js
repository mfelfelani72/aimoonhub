/*! For license information please see 921.1c59bc8841a0ad172d98.js.LICENSE.txt */
"use strict";(self.webpackChunkaimoonhub=self.webpackChunkaimoonhub||[]).push([[921],{7921:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var r=n(6540),a=n(7767),l=n(4976),o=n(2857),i=n(5345),s=n(1872),c=n(3710),u=n(5846),m=n(9402),d=n(7480);const f=function(e){var t,n,l,o,i=(0,c.Bd)().t,s=(0,a.Zp)();return r.createElement("div",{className:"flex flex-row p-2 border-b border-color-theme-light dark:border-D-color-theme-light"},r.createElement("div",{className:"w-[8rem] h-[6rem]"},r.createElement("a",{href:e.row.link,target:"_blank"},r.createElement("img",{className:"w-full !h-full transition duration-300 ease-in-out hover:scale-110 rounded-2xl rounded-bl-none",alt:e.row.title,src:null!==(t=e.row)&&void 0!==t&&t.local_image?null===(n=e.row)||void 0===n?void 0:n.local_image:null!==(l=e.row)&&void 0!==l&&l.thImage?null===(o=e.row)||void 0===o?void 0:o.thImage:m.XB,onError:function(e){e.target.src=m.XB}}))),r.createElement("div",{className:"flex flex-col w-full"},r.createElement("div",{className:"rtl:ltr px-2 text-sm"},r.createElement("a",{href:e.row.link,target:"_blank",className:"text-color-theme dark:text-D-color-theme"},e.row.title)),r.createElement("div",{className:"flex px-2 pt-4"},r.createElement("span",null,r.createElement("img",{alt:null==e?void 0:e.row.provider,src:null!=e&&e.row.provider_info.local_image?null==e?void 0:e.row.provider_info.local_image:null!=e&&e.row.provider_info.logoUrl?null==e?void 0:e.row.provider_info.logoUrl:m.oH,onError:function(e){e.target.src=m.oH},className:"h-5 w-5 rounded-[30px]"})),r.createElement("span",{className:"px-1 text-[0.7rem] self-center"},i("provider")),r.createElement("span",{className:"px-1 text-[0.7rem] font-bold self-center"},r.createElement("a",{className:"cursor-pointer hover:text-color-theme",onClick:function(t){return(0,d.L)(s,t,null==e?void 0:e.row.provider,null==e?void 0:e.nav)}},null==e?void 0:e.row.provider))),r.createElement("div",{className:"px-2 text-end"},r.createElement("span",{className:"px-1 text-[0.7rem] text-slate-500"}," ",(0,u.F)(e.row.pubDate,"difference")))))};var v=n(6741),h=n(4357),p=n(8558),y=n(6032);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function b(){b=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},o=l.iterator||"@@iterator",i=l.asyncIterator||"@@asyncIterator",s=l.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var l=t&&t.prototype instanceof y?t:y,o=Object.create(l.prototype),i=new O(r||[]);return a(o,"_invoke",{value:A(e,n,i)}),o}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var d="suspendedStart",f="suspendedYield",v="executing",h="completed",p={};function y(){}function E(){}function x(){}var N={};c(N,o,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(D([])));_&&_!==n&&r.call(_,o)&&(N=_);var S=x.prototype=y.prototype=Object.create(N);function k(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function n(a,l,o,i){var s=m(e[a],e,l);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==g(u)&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,o,i)}),(function(e){n("throw",e,o,i)})):t.resolve(u).then((function(e){c.value=e,o(c)}),(function(e){return n("throw",e,o,i)}))}i(s.arg)}var l;a(this,"_invoke",{value:function(e,r){function a(){return new t((function(t,a){n(e,r,t,a)}))}return l=l?l.then(a,a):a()}})}function A(t,n,r){var a=d;return function(l,o){if(a===v)throw Error("Generator is already running");if(a===h){if("throw"===l)throw o;return{value:e,done:!0}}for(r.method=l,r.arg=o;;){var i=r.delegate;if(i){var s=j(i,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===d)throw a=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=v;var c=m(t,n,r);if("normal"===c.type){if(a=r.done?h:f,c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=h,r.method="throw",r.arg=c.arg)}}}function j(t,n){var r=n.method,a=t.iterator[r];if(a===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var l=m(a,t.iterator,n.arg);if("throw"===l.type)return n.method="throw",n.arg=l.arg,n.delegate=null,p;var o=l.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function D(t){if(t||""===t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,l=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return l.next=l}}throw new TypeError(g(t)+" is not iterable")}return E.prototype=x,a(S,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:E,configurable:!0}),E.displayName=c(x,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===E||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,c(e,s,"GeneratorFunction")),e.prototype=Object.create(S),e},t.awrap=function(e){return{__await:e}},k(L.prototype),c(L.prototype,i,(function(){return this})),t.AsyncIterator=L,t.async=function(e,n,r,a,l){void 0===l&&(l=Promise);var o=new L(u(e,n,r,a),l);return t.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},k(S),c(S,s,"Generator"),c(S,o,(function(){return this})),c(S,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=D,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(M),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return i.type="throw",i.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var l=this.tryEntries.length-1;l>=0;--l){var o=this.tryEntries[l],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var l=a;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,p):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),M(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;M(n)}return a}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:D(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}function E(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||_(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t,n,r,a,l,o){try{var i=e[l](o),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,a)}function N(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var l=e.apply(t,n);function o(e){x(l,r,a,o,i,"next",e)}function i(e){x(l,r,a,o,i,"throw",e)}o(void 0)}))}}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],s=!0,c=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{if(!s&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return i}}(e,t)||_(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){if(e){if("string"==typeof e)return S(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var k=n(2543);const L=function(){var e=(0,a.zy)(),t=w((0,r.useState)(e.state.author),2),n=t[0],c=t[1],u=w((0,r.useState)(e.state.nav),1)[0],d=w((0,r.useState)(!0),2),g=d[0],x=d[1],_=w((0,r.useState)(!1),2),S=_[0],L=_[1],A=w((0,r.useState)(),2),j=A[0],P=A[1],M=w((0,r.useState)(),2),O=M[0],D=M[1],F=w((0,r.useState)(),2),I=F[0],C=F[1],T=w((0,r.useState)(),2),U=T[0],G=T[1],z=w((0,r.useState)(),2),B=z[0],H=z[1],R=w((0,r.useState)(),2),W=R[0],X=R[1],Y=w((0,r.useState)(),2),J=Y[0],Z=Y[1],$=w((0,r.useState)(),2),q=$[0],K=$[1],Q=w((0,r.useState)(["free"]),2),V=Q[0],ee=Q[1],te=w((0,r.useState)(),2),ne=te[0],re=te[1],ae=w((0,r.useState)("cryptocurrencies"),2),le=ae[0],oe=(ae[1],w((0,r.useState)("1716373411"),2)),ie=oe[0],se=(oe[1],w((0,r.useState)(!1),2)),ce=se[0],ue=(se[1],w((0,r.useState)(5),2)),me=ue[0],de=(ue[1],w((0,r.useState)(1),2)),fe=de[0],ve=de[1],he=function(){var e=N(b().mark((function e(t){var n,r=arguments;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={author:t,category:le,startDate:ie,llmOnly:ce,page:r.length>1&&void 0!==r[1]?r[1]:1,pageLimit:me};try{(0,p.b)(y._1,n).then((function(e){e.data.data.result&&(console.log("Fetch data author news done."),ee((function(t){return[].concat(E(t),E(e.data.data.result))})),ve((function(e){return e+1})),re(!1),L(!0))}))}catch(e){console.log(e)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),pe=function(){var e=N(b().mark((function e(){return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:re(!0),1===fe&&2===fe||ye();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ye=k.debounce((function(){he(e.state.author.name,fe)}),100);return n.name!==e.state.author.name&&(c(e.state.author),x(!0),ee([]),ve(1),he(e.state.author.name,1),L(!1)),(0,r.useEffect)((function(){g&&("free"===V[0]&&(he(e.state.author.name),V.shift()),P(Math.max(null==n?void 0:n.last_day_sentiment.negative,null==n?void 0:n.last_day_sentiment.neutral,null==n?void 0:n.last_day_sentiment.positive)),0==(null==n?void 0:n.last_day_sentiment.negative)&&0==(null==n?void 0:n.last_day_sentiment.neutral)&&0==(null==n?void 0:n.last_day_sentiment.positive)?(G("text-center font-bold "),C(""),D("")):Math.max(null==n?void 0:n.last_day_sentiment.negative,null==n?void 0:n.last_day_sentiment.neutral,null==n?void 0:n.last_day_sentiment.positive)===(null==n?void 0:n.last_day_sentiment.negative)?(G("text-center font-bold text-rose-300"),C("Negative"),D("-")):Math.max(null==n?void 0:n.last_day_sentiment.negative,null==n?void 0:n.last_day_sentiment.neutral,null==n?void 0:n.last_day_sentiment.positive)===(null==n?void 0:n.last_day_sentiment.neutral)?(G("text-center font-bold text-slate-300"),C("Neutral"),D(" ")):(G("text-center font-bold text-lime-300"),C("Positive"),D("+")),H(Math.max(null==n?void 0:n.last_week_sentiment.negative,null==n?void 0:n.last_week_sentiment.neutral,null==n?void 0:n.last_week_sentiment.positive)),0==(null==n?void 0:n.last_week_sentiment.negative)&&0==(null==n?void 0:n.last_week_sentiment.neutral)&&0==(null==n?void 0:n.last_week_sentiment.positive)?(K("text-center font-bold "),Z(""),X("")):Math.max(null==n?void 0:n.last_week_sentiment.negative,null==n?void 0:n.last_week_sentiment.neutral,null==n?void 0:n.last_week_sentiment.positive)===(null==n?void 0:n.last_week_sentiment.negative)?(K("text-center font-bold text-rose-300"),Z("Negative"),X("-")):Math.max(null==n?void 0:n.last_week_sentiment.negative,null==n?void 0:n.last_week_sentiment.neutral,null==n?void 0:n.last_week_sentiment.positive)===(null==n?void 0:n.last_week_sentiment.neutral)?(K("text-center font-bold text-slate-300"),Z("Neutral"),X(" ")):(K("text-center font-bold text-lime-300"),Z("Positive"),X("+"))),x(!1)}),[]),r.createElement(r.Fragment,null,S&&r.createElement("div",{className:"bg-white m-4 rounded-[1rem]"},r.createElement("h3",{className:"pt-2 px-2"},"Author Dashboard"),r.createElement("div",{className:"text-[0.7rem] text-slate-500 font-bold px-2"},r.createElement("span",null,null==u?void 0:u.map((function(e,t){return r.createElement("span",{key:t},"end"!==(null==e?void 0:e.title)?r.createElement(l.k2,{key:t,to:null==e?void 0:e.address},r.createElement("span",{className:"capitalize pr-1"},null==e?void 0:e.title),r.createElement("span",null," "," > ")):r.createElement("span",{className:"pl-1 capitalize"},"Author Dashboard"))})))," "),r.createElement("div",{className:"container mx-auto my-3 mb-3"},r.createElement("div",{className:"flex mt-1"},r.createElement("div",{className:"basis-1/4"},r.createElement("div",{className:""},r.createElement("a",{href:null==n?void 0:n.biographyUrl,target:"_blank"},r.createElement("img",{className:"h-[4rem] w-[4rem] rounded-full mx-auto border-2 border-color-theme",alt:null==n?void 0:n.name,src:null!=n&&n.local_image?null==n?void 0:n.local_image:null!=n&&n.picUrl?null==n?void 0:n.picUrl:m.a6,onError:function(e){e.target.src=m.a6}}))),r.createElement("div",{className:"text-[0.8rem] text-slate-800 pt-1 text-center"},r.createElement("a",{href:null==n?void 0:n.biographyUrl,target:"_blank"},null==n?void 0:n.name))),r.createElement("div",{className:"basis-3/4 mx-2"},r.createElement("div",{className:"text-[0.8rem] text-slate-800 pt-1 px-2 border rounded-md"},r.createElement("div",{className:"font-bold"},r.createElement("span",null,"Journalist at")," ",null==n?void 0:n.worked),null!=n&&n.biography?r.createElement(r.Fragment,null,r.createElement("span",{className:"text-[0.8rem] font-bold"},"Biography"),r.createElement("a",{href:null==n?void 0:n.biographyUrl,target:"_blank"},r.createElement("div",{className:"text-[0.7rem] text-justify"},null==n?void 0:n.biography))):""))),r.createElement("div",{className:"flex mt-2"},r.createElement("div",{className:"bg-indigo-200 border-y-2 border-indigo-400 w-full mt-1 py-1 text-center"},r.createElement("span",{className:"text-indigo-700"},r.createElement("span",{className:"font-bold"},null==n?void 0:n.name)," "," Statistics"))),r.createElement("div",{className:"flex my-2"},r.createElement("div",{className:"basis-2/5 self-center"},r.createElement("div",{className:"h-[3rem] w-[3rem] mx-auto rounded-full border-2 border-color-theme"},r.createElement(o.SS2,{className:"h-[2rem] w-[2rem] m-auto mt-1 text-color-theme"}))),r.createElement("div",{className:"basis-3/5 p-2 justify-center"},r.createElement("div",{className:"text-sm"},r.createElement("span",{className:"text-sm font-bold"},"+",null==n?void 0:n.newsCount.toLocaleString())," ","News"),r.createElement("div",{className:"text-sm"},r.createElement("span",{className:"text-sm font-bold"},"+",null==n?void 0:n.AvgNewsPERday.toLocaleString())," ","News Per Day"),r.createElement("div",{className:"text-sm"},r.createElement("span",{className:"text-sm font-bold"},"+",null==n?void 0:n.AvgNewsPERweek.toLocaleString())," ","News Per Week"),r.createElement("div",{className:"text-sm"},r.createElement("span",{className:"text-sm font-bold"},"+",null==n?void 0:n.AvgNewsPERMonth.toLocaleString())," ","News Per Month"))),0!==j&&r.createElement(r.Fragment,null,r.createElement("div",{className:"flex"},r.createElement("div",{className:"bg-violet-200 border-y-2 border-violet-400 w-full mt-1 py-1 text-center"},r.createElement("span",{className:"text-violet-700"},"Today ",r.createElement("span",{className:"font-bold"},null==n?void 0:n.name)," "," Sentiment"))),r.createElement("div",{className:"flex my-2"},r.createElement("div",{className:"basis-1/2 self-center"},r.createElement("div",{className:"text-center py-2"},r.createElement("span",null,"نمودار سنتیمنت")),r.createElement(h.A,{sentiment:null==n?void 0:n.last_day_sentiment,classNameNewScore:U,signScore:O,percentNewScore:j})),r.createElement("div",{className:"basis-1/2 p-2 justify-center text-center"},r.createElement("div",{className:"flex text-md justify-center"},r.createElement("span",{className:"px-2"},"+"==O?r.createElement(o.twP,{className:"h-7 w-7 rounded-full bg-[#fef08a]"}):" "==O?"":r.createElement(o.hIP,{className:"h-7 w-7 rounded-full bg-[#fef08a]"})),r.createElement("span",{className:"self-center"},O,Math.round(100*j),"%")),r.createElement("div",{className:"text-md font-bold mt-1"},"Out of"," ",r.createElement("span",{className:"font-bod"},null==n?void 0:n.last_day_count.toLocaleString())),r.createElement("div",{className:"text-lg"},r.createElement("span",{className:U},I))))),0!==B&&r.createElement(r.Fragment,null,r.createElement("div",{className:"flex"},r.createElement("div",{className:"bg-violet-100 border-y-2 border-violet-200 w-full mt-1 py-1 text-center"},r.createElement("span",{className:"text-violet-500"},"This Week ",r.createElement("span",{className:"font-bold"},null==n?void 0:n.name)," "," Sentiment"))),r.createElement("div",{className:"flex my-2"},r.createElement("div",{className:"basis-1/2 self-center"},r.createElement("div",{className:"text-center py-2"},r.createElement("span",null,"نمودار سنتیمنت")),r.createElement(h.A,{sentiment:null==n?void 0:n.last_week_sentiment,classNameNewScore:q,signScore:W,percentNewScore:B})),r.createElement("div",{className:"basis-1/2 p-2 justify-center text-center"},r.createElement("div",{className:"flex text-md justify-center"},r.createElement("span",{className:"px-2"},"+"==W?r.createElement(o.twP,{className:"h-7 w-7 rounded-full bg-[#fef08a]"}):" "==W?"":r.createElement(o.hIP,{className:"h-7 w-7 rounded-full bg-[#fef08a]"})),r.createElement("span",{className:"self-center"},W,Math.round(100*B),"%")),r.createElement("div",{className:"text-md font-bold mt-1"},"Out of"," ",r.createElement("span",{className:"font-bod"},null==n?void 0:n.last_week_count.toLocaleString())),r.createElement("div",{className:"text-lg"},r.createElement("span",{className:q},J))))),null!=n&&n.symbols.length&&0!==(null==n?void 0:n.symbols.length)?r.createElement(r.Fragment,null,r.createElement("div",{className:"flex"},r.createElement("div",{className:"bg-blue-100 border-y-2 border-blue-200 w-full mt-1 py-1 text-center"},r.createElement("span",{className:"text-blue-500"},r.createElement("span",{className:"font-bold"},null==n?void 0:n.name)," "," News Distribution Per Coins"))),r.createElement("div",{className:"text-center py-3"},r.createElement("span",null,"نمودار توزیع اخبار نویسنده به ازای هر سکه")),r.createElement("div",{className:"flex justify-center my-2 mx-2"},r.createElement(i.A,{labels:k.chunk(null==n?void 0:n.symbols,10)[0].map((function(e){return e.coin})),data:k.chunk(null==n?void 0:n.symbols,10)[0].map((function(e){return e.news_count})),label:"News Count"}))):"",0!==V.length&&r.createElement(r.Fragment,null,r.createElement("div",{className:"flex"},r.createElement("div",{className:"bg-orange-100 border-y-2 border-orange-200 w-full mt-1 py-1 text-center"},r.createElement("span",{className:"text-orange-500"},"Latest News from"," ",r.createElement("span",{className:"font-bold"},null==n?void 0:n.name)))),r.createElement("div",{className:"my-2"},V.map((function(e,t){return r.createElement(f,{row:e,key:t,nav:u})})),r.createElement("div",{className:"ltr:text-right rtl:text-left"},r.createElement(s.A,{onClick:function(){return pe()},className:"m-3 bg-color-theme hover:bg-color-theme dark:bg-D-color-theme dark:hover:bg-D-color-theme"},"More")),ne&&r.createElement(v.A,null))))))}},5345:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(6540),a=n(101);const l=function(e){var t=e.labels,n=e.data,l=e.label;return r.createElement(a.gI,{type:"bar",data:{labels:t,datasets:[{label:l,data:n,backgroundColor:["rgba(54, 162, 235, 0.2)"],borderColor:["rgba(54, 162, 235, 1)"],borderWidth:1}]},options:{indexAxis:"x",plugins:{legend:{position:"top"}},scales:{x:{stacked:!0,grid:{display:!0,borderDash:[2],zeroLineColor:"rgba(0,0,0,0)",zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]},ticks:{color:"rgba(0,0,0, 0.5)"}},y:{stacked:!0,grid:{display:!0},ticks:{color:"rgba(0,0,0, 0.5)"}}}}})}},4357:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(6540),a=n(9383);const l=function(e){return r.createElement(r.Fragment,null,r.createElement("div",{className:"flex w-ful justify-center mx-2 border-2"},r.createElement("div",{style:{width:"".concat(100*(null==e?void 0:e.sentiment.positive),"%")},className:"bg-lime-300 h-6"},r.createElement(a.A,{className:"tooltip",text:"Positive ".concat(Math.round(100*(null==e?void 0:e.sentiment.positive)),"%")},r.createElement("span",{className:"text-lime-300"},"p"))),r.createElement("div",{style:{width:"".concat(100*(null==e?void 0:e.sentiment.negative),"%")},className:"bg-rose-300"},r.createElement(a.A,{className:"tooltip",text:"Negative ".concat(Math.round(100*(null==e?void 0:e.sentiment.negative)),"%")},r.createElement("span",{className:"text-rose-300"},"n"))),r.createElement("div",{style:{width:"".concat(100*(null==e?void 0:e.sentiment.neutral),"%")},className:"bg-slate-300"},r.createElement(a.A,{className:"tooltip",text:"Neutral ".concat(Math.round(100*(null==e?void 0:e.sentiment.neutral)),"%")},r.createElement("span",{className:"text-slate-300"},"n")))),r.createElement("div",{className:null==e?void 0:e.classNameNewScore},null==e?void 0:e.signScore,Math.round(100*(null==e?void 0:e.percentNewScore)),"%"))}},6741:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(6540);const a=function(){return r.createElement("div",{className:"flex justify-center mt-5 mb-3"},r.createElement("div",{className:"inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-color-theme dark:text-D-color-theme motion-reduce:animate-[spin_1.5s_linear_infinite]",role:"status"}))}},9383:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(6540),a=n(4265);const l=function(e){var t=e.text,n=e.children,l=e.className;return r.createElement("div",{className:"has-tooltip"},r.createElement("span",{className:(0,a.cn)("rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-8 text-[0.8rem]",l)},t),n)}},5846:(e,t,n)=>{function r(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"regular",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"full",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"AD-date";"AD-date"==l?t="en-US":"SH-date"==l&&(t="fa-IR");var o=new Date(1e3*e);if("regular"==r&&"full"==a)n=o.toLocaleString(t,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});else if("regular"==r&&"date"==a)n=o.toLocaleString(t,{year:"numeric",month:"2-digit",day:"2-digit"});else if("regular"==r&&"time"==a)n=o.toLocaleString(t,{hour:"2-digit",minute:"2-digit"});else if("chart"==r)n=o.toLocaleString(t,{month:"short",day:"2-digit"});else if("difference"==r){var i=new Date-o,s=Math.floor(i/864e5),c=Math.floor(i%864e5/36e5),u=Math.floor(i%36e5/6e4),m="";0!==s&&s<2?m+=s+" Day ":0!==s&&s>1&&(m+=s+" Days "),0!==c&&c<2?m+=c+" Hour ":0!==c&&c>1&&(m+=c+" Hours "),0!==u&&u<2?m+=u+" Minute ":0!==u&&u>1&&(m+=u+" Minutes "),n=0==s&&0==c&&0==u?m+"Exactly Now":m+" ago"}return n}n.d(t,{F:()=>r})}}]);