(function(){"use strict";var e={9611:function(e,t,r){var n=r(7195),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("nav",[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),t("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),t("router-view")],1)},u=[],i=r(1001),a={},l=(0,i.Z)(a,o,u,!1,null,null,null),s=l.exports,c=r(2241),f=function(){var e=this;e._self._c;return e._m(0)},v=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("h1",[e._v("This is an Home page")])])}],h=function(){var e=this,t=e._self._c;return t("div",{staticClass:"hello"},[t("h1",[e._v(e._s(e.msg))]),e._m(0),t("h3",[e._v("Installed CLI Plugins")]),e._m(1),t("h3",[e._v("Essential Links")]),e._m(2),t("h3",[e._v("Ecosystem")]),e._m(3)])},p=[function(){var e=this,t=e._self._c;return t("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),t("br"),e._v(" check out the "),t("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[t("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),t("li",[t("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),t("li",[t("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),t("li",[t("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),t("li",[t("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[t("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),t("li",[t("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),t("li",[t("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],d={name:"HelloWorld",props:{msg:String}},_=d,b=(0,i.Z)(_,h,p,!1,null,"ebbc34ee",null),g=b.exports,m={name:"HomeView",components:{HelloWorld:g}},k=m,j=(0,i.Z)(k,f,v,!1,null,null,null),w=j.exports;n.ZP.use(c.ZP);const y=[{path:"/",name:"home",component:w},{path:"/about",name:"about",component:()=>r.e(443).then(r.bind(r,1168))}],O=new c.ZP({mode:"history",base:"/",routes:y});var C=O;n.ZP.config.productionTip=!1,new n.ZP({router:C,render:e=>e(s)}).$mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n](u,u.exports,r),u.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,u){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],u=e[c][2];for(var a=!0,l=0;l<n.length;l++)(!1&u||i>=u)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(a=!1,u<i&&(i=u));if(a){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}u=u||0;for(var c=e.length;c>0&&e[c-1][2]>u;c--)e[c]=e[c-1];e[c]=[n,o,u]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/about.20e04f46.js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="hello-world:";r.l=function(n,o,u,i){if(e[n])e[n].push(o);else{var a,l;if(void 0!==u)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var f=s[c];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==t+u){a=f;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",t+u),a.src=n),e[n]=[o];var v=function(t,r){a.onerror=a.onload=null,clearTimeout(h);var o=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(r)})),t)return t(r)},h=setTimeout(v.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=v.bind(null,a.onerror),a.onload=v.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e={143:0};r.f.j=function(t,n){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var u=new Promise((function(r,n){o=e[t]=[r,n]}));n.push(o[2]=u);var i=r.p+r.u(t),a=new Error,l=function(n){if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var u=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,o[1](a)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,u,i=n[0],a=n[1],l=n[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(l)var c=l(r)}for(t&&t(n);s<i.length;s++)u=i[s],r.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return r.O(c)},n=self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(9611)}));n=r.O(n)})();
//# sourceMappingURL=app.0b589ee5.js.map