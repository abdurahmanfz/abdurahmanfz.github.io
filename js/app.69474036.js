(function(t){function e(e){for(var a,r,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)r=s[u],o[r]&&d.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function s(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-c2711784":"7003db98"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-c2711784":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-c2711784":"935a9456"}[t]+".css",o=l.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===a||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],f.parentNode.removeChild(f),n(i)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)}).then(function(){r[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t),c=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}o[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticStyle:{background:"#ECEFF1"}},[a("v-app-bar",{attrs:{app:"",dark:""}},[a("v-toolbar-title",{staticClass:"Title text-sentencecase"},[a("span",{staticClass:"font-weight-bold",staticStyle:{color:"#FDD835"}},[t._v("Curriculum")]),a("span",{staticClass:"font-weight-light",staticStyle:{color:"#FDD835"}},[t._v("Vitae")])]),a("v-spacer"),a("v-btn",{attrs:{dark:"",icon:""},on:{click:function(e){t.drawer=!t.drawer}}},[a("v-icon",{attrs:{color:"yellow darken-1"}},[t._v("mdi-contacts")])],1)],1),a("v-navigation-drawer",{staticClass:"elevation-0",attrs:{clipped:"",temporary:"",app:"",fixed:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-card",{attrs:{flat:""}},[a("v-card-text",{staticClass:"pb-0"},[a("v-avatar",{attrs:{width:"220",height:"auto"}},[a("v-img",{attrs:{avatar:"","aspect-ratio":1,src:n("d09d")}})],1)],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v("\n          Fauzan Abdurrahman "),a("v-icon",{attrs:{color:"blue lighten-2"}},[t._v("mdi-check-decagram")])],1),a("v-list-item-subtitle",[t._v("\n          Front-end Web Developer\n        ")]),a("v-list-item-subtitle",[t._v("\n          zandt55@gmail.com\n        ")]),a("v-list-item-subtitle",[t._v("\n          abdrhmnfz@gmail.com\n        ")]),a("v-list-item-subtitle",[t._v("\n          (+62) 889 7060 1825\n        ")])],1)],1),a("v-divider"),a("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,function(e){return a("v-list-item",{key:e.title,attrs:{link:"",href:e.to,target:"_blank"}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.text))])],1)],1)}),1)],1),a("v-content",[a("CoreView"),a("v-container")],1),a("v-footer",{staticStyle:{height:"40px",color:"#FDD835"},attrs:{dark:"",inset:"",fixed:""}},[t._v("\n    Made with  "),a("v-icon",{attrs:{small:"",color:"green"}},[t._v("mdi-vuejs")]),t._v("  +  "),a("v-icon",{attrs:{small:"",color:"blue"}},[t._v("mdi-vuetify")]),t._v("  =  "),a("v-icon",{attrs:{small:"",color:"red"}},[t._v("mdi-heart")]),t._v(" \n  ")],1)],1)},o=[],i={name:"App",components:{CoreView:()=>n.e("chunk-c2711784").then(n.bind(null,"ccc2"))},data:()=>({drawer:!1,items:[{icon:"mdi-instagram",text:"Instagram",to:"https://www.instagram.com/abdurahmanfz/"},{icon:"mdi-github-box",text:"Github",to:"https://github.com/abdurahmanfz"},{icon:"mdi-medium",text:"Medium",to:"https://medium.com/@abdurahmanfz"},{icon:"mdi-linkedin",text:"Linkedin",to:"https://www.linkedin.com/in/fauzan-abdurrahman-b0224a136/"},{icon:"mdi-account",text:"About",to:"/about"},{icon:"mdi-blogger",text:"Blog",to:"/about"}]})},s=i,l=n("2877"),c=n("6544"),u=n.n(c),d=n("7496"),f=n("40dc"),m=n("8212"),v=n("8336"),h=n("b0af"),p=n("99d9"),b=n("a523"),g=n("a75b"),y=n("ce7e"),w=n("553a"),x=n("132d"),_=n("adda"),k=n("8860"),C=n("da13"),j=n("5d23"),V=n("34c3"),E=n("f774"),L=n("2fa4"),O=n("2a7f"),S=Object(l["a"])(s,r,o,!1,null,null,null),A=S.exports;u()(S,{VApp:d["a"],VAppBar:f["a"],VAvatar:m["a"],VBtn:v["a"],VCard:h["a"],VCardText:p["a"],VContainer:b["a"],VContent:g["a"],VDivider:y["a"],VFooter:w["a"],VIcon:x["a"],VImg:_["a"],VList:k["a"],VListItem:C["a"],VListItemContent:j["a"],VListItemIcon:V["a"],VListItemSubtitle:j["b"],VListItemTitle:j["c"],VNavigationDrawer:E["a"],VSpacer:L["a"],VToolbarTitle:O["a"]});var F=n("8c4f"),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  BEFORE HELLO WORLD\n  "),n("HelloWorld")],1)},T=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),a("v-flex",{attrs:{"mb-4":""}},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to Vuetify\n      ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For help and collaboration with other Vuetify developers,\n        "),a("br"),t._v("please join our online\n        "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-flex",{attrs:{"mb-5":"",xs12:""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1)],1)],1)},N=[],P={data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})},B=P,z=n("0e8f"),M=n("a722"),q=Object(l["a"])(B,I,N,!1,null,null,null),W=q.exports;u()(q,{VContainer:b["a"],VFlex:z["a"],VImg:_["a"],VLayout:M["a"]});var $={components:{HelloWorld:W}},H=$,J=Object(l["a"])(H,D,T,!1,null,null,null),R=J.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("CoreView")],1)},K=[],Q={components:{CoreView:()=>n.e("chunk-c2711784").then(n.bind(null,"ccc2"))},data:()=>{},mounted(){}},U=Q,X=Object(l["a"])(U,G,K,!1,null,null,null),Y=X.exports;a["a"].use(F["a"]);var Z=new F["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:R},{path:"/about",name:"about",component:Y}]}),tt=n("2f62");a["a"].use(tt["a"]);var et=new tt["a"].Store({state:{},mutations:{},actions:{}}),nt=n("9483");Object(nt["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var at=n("f309");a["a"].use(at["a"]);var rt=new at["a"]({icons:{iconfont:"mdi"}});a["a"].config.productionTip=!1,new a["a"]({router:Z,store:et,vuetify:rt,render:t=>t(A)}).$mount("#app")},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"},d09d:function(t,e,n){t.exports=n.p+"img/santolo.074157f1.jpg"}});
//# sourceMappingURL=app.69474036.js.map