"use strict";(self.webpackChunkaimoonhub=self.webpackChunkaimoonhub||[]).push([[8340],{5338:(e,n,t)=>{var s=t(961);n.H=s.createRoot,s.hydrateRoot},961:(e,n,t)=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=t(2551)},3710:(e,n,t)=>{t.d(n,{r9:()=>h,Bd:()=>_});var s=t(6540);t(3804);const a={},o=(...e)=>{u(e[0])&&a[e[0]]||(u(e[0])&&(a[e[0]]=new Date),((...e)=>{console?.warn&&(u(e[0])&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e))})(...e))},r=(e,n)=>()=>{if(e.isInitialized)n();else{const t=()=>{setTimeout((()=>{e.off("initialized",t)}),0),n()};e.on("initialized",t)}},i=(e,n,t)=>{e.loadNamespaces(n,r(e,t))},c=(e,n,t,s)=>{u(t)&&(t=[t]),t.forEach((n=>{e.options.ns.indexOf(n)<0&&e.options.ns.push(n)})),e.loadLanguages(n,r(e,s))},u=e=>"string"==typeof e,l=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,p={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},d=e=>p[e];let g={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(l,d)};let f;const h={type:"3rdParty",init(e){((e={})=>{g={...g,...e}})(e.options.react),(e=>{f=e})(e)}},m=(0,s.createContext)();class y{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach((e=>{this.usedNamespaces[e]??=!0}))}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const b=(e,n,t,s)=>e.getFixedT(n,t,s),_=(e,n={})=>{const{i18n:t}=n,{i18n:a,defaultNS:r}=(0,s.useContext)(m)||{},l=t||a||f;if(l&&!l.reportNamespaces&&(l.reportNamespaces=new y),!l){o("You will need to pass in an i18next instance by using initReactI18next");const e=(e,n)=>{return u(n)?n:"object"==typeof(t=n)&&null!==t&&u(n.defaultValue)?n.defaultValue:Array.isArray(e)?e[e.length-1]:e;var t},n=[e,{},!1];return n.t=e,n.i18n={},n.ready=!1,n}l.options.react?.wait&&o("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const p={...g,...l.options.react,...n},{useSuspense:d,keyPrefix:h}=p;let _=e||r||l.options?.defaultNS;_=u(_)?[_]:_||["translation"],l.reportNamespaces.addUsedNamespaces?.(_);const O=(l.isInitialized||l.initializedStoreOnce)&&_.every((e=>((e,n,t={})=>n.languages&&n.languages.length?n.hasLoadedNamespace(e,{lng:t.lng,precheck:(n,s)=>{if(t.bindI18n?.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!s(n.isLanguageChangingTo,e))return!1}}):(o("i18n.languages were undefined or empty",n.languages),!0))(e,l,p))),N=((e,n,t,a)=>(0,s.useCallback)(b(e,n,t,a),[e,n,t,a]))(l,n.lng||null,"fallback"===p.nsMode?_:_[0],h),E=()=>N,C=()=>b(l,n.lng||null,"fallback"===p.nsMode?_:_[0],h),[k,w]=(0,s.useState)(E);let x=_.join();n.lng&&(x=`${n.lng}${x}`);const L=((e,n)=>{const t=(0,s.useRef)();return(0,s.useEffect)((()=>{t.current=n?t.current:e}),[e,n]),t.current})(x),S=(0,s.useRef)(!0);(0,s.useEffect)((()=>{const{bindI18n:e,bindI18nStore:t}=p;S.current=!0,O||d||(n.lng?c(l,n.lng,_,(()=>{S.current&&w(C)})):i(l,_,(()=>{S.current&&w(C)}))),O&&L&&L!==x&&S.current&&w(C);const s=()=>{S.current&&w(C)};return e&&l?.on(e,s),t&&l?.store.on(t,s),()=>{S.current=!1,l&&e?.split(" ").forEach((e=>l.off(e,s))),t&&l&&t.split(" ").forEach((e=>l.store.off(e,s)))}}),[l,x]),(0,s.useEffect)((()=>{S.current&&O&&w(E)}),[l,h,O]);const T=[k,l,O];if(T.t=k,T.i18n=l,T.ready=O,O)return T;if(!O&&!d)return T;throw new Promise((e=>{n.lng?c(l,n.lng,_,(()=>e())):i(l,_,(()=>e()))}))}}}]);