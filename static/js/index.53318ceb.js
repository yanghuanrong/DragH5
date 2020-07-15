(function(t){function e(e){for(var o,l,c=e[0],i=e[1],s=e[2],u=0,f=[];u<c.length;u++)l=c[u],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&f.push(a[l][0]),a[l]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);p&&p(e);while(f.length)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,l=1;l<n.length;l++){var i=n[l];0!==a[i]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},a={index:0},r=[];function l(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"6de3b865"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=o);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=l(t);var s=new Error;r=function(e){i.onerror=i.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",s.name="ChunkLoadError",s.type=o,s.request=r,n[1](s)}a[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:i})}),12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var p=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("2034")},2034:function(t,e,n){"use strict";n.r(e);n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],l=n("2877"),c={},i=Object(l["a"])(c,a,r,!1,null,null,null),s=i.exports,u=(n("d3b7"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor-page"},[n("div",{staticClass:"page-wrapper"},[n("leftComponent"),n("phoneComponent"),n("rightComponent")],1)])},f=[],d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor-toolbar__left"},[n("div",{staticClass:"left-layout-wrap"})])}],v={},b=Object(l["a"])(v,d,m,!1,null,null,null),g=b.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor-toolbar__center"},[n("div",{staticClass:"edit-main"},[n("div",{staticClass:"eidtor-code",on:{click:t.clickCode}},[n("a-icon",{attrs:{type:"code"}})],1),n("div",{staticClass:"phone-page"},[n("draggable",{staticClass:"phone-wrap eidtor",attrs:{group:"layouts",list:t.list,handle:".draggalbe-handle",options:{animation:150,fallbackOnBody:!0}}},[t._l(t.list,(function(e,o){return[n("div",{key:"component"+o,class:{"draggalbe-handle":e.draggalbe}},[n(e.componentName,t._b({tag:"component"},"component",e.componentAttrs,!1),[t._v(t._s(e.componentText))])],1)]}))],2)],1)])])},y=[],_=n("310e"),w=n.n(_),x=(n("99af"),n("4160"),n("b64b"),n("ac1f"),n("5319"),n("1276"),n("159b"),n("d491")),C=n.n(x),O=n("21a6"),j=n.n(O),k=(n("c4e3"),"<template>\n    <div>\n        <%_ code.forEach(function(item){ _%>\n        <%- item %>\n        <%_ }); _%>\n    </div>\n</template>\n\n<script>\nexport default {\n\n}\n<\/script>\n"),T="<van-button<%-attrs%> ><%=text%></van-button>",E="<van-tag<%-attrs%> ><%=text%></van-tag>",A={fileTemplates:k,button:T,tag:E};function N(t){var e=[];t.forEach((function(t){var n=t.componentName.split("-").reverse()[0],o={attrs:"",text:t.componentText},a=t.componentAttrs;Object.keys(a).forEach((function(t){o.attrs+=" ".concat(t,'="').concat(a[t],'"')})),console.log(A);var r=C.a.render(A[n],o);e.push(r)}));var n=C.a.render(A.fileTemplates,{code:e});console.log(n),S("App.vue",n)}var S=function(t,e){var n="This#is#fileName";e=e.replace(n,t.replace(".vue",""));var o=new Blob([e],{type:"text/plain;charset=utf-8"});j.a.saveAs(o,t)},P={components:{draggable:w.a},data:function(){return{list:[]}},watch:{list:function(t){}},methods:{clickCode:function(){N(this.list)}}},$=P,J=Object(l["a"])($,h,y,!1,null,null,null),M=J.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor-toolbar__right"},[n("div",{staticClass:"right-layout-wrap"},[n("van-tabs",{model:{value:t.layoutTab,callback:function(e){t.layoutTab=e},expression:"layoutTab"}},[n("van-tab",{attrs:{title:"默认布局"}},[n("draggable",{attrs:{list:t.list,options:{sort:!1},group:{name:"layouts",pull:"clone",put:!1},clone:t.clone}},t._l(t.list,(function(e,o){return n("Container",t._b({key:"left-layout"+o,staticClass:"left-layout-grid"},"Container",e.componentAttrs,!1))})),1)],1),n("van-tab",{attrs:{title:"自定义布局"}},[n("button",{on:{click:t.test}},[t._v("测试")])])],1),n("draggable",{attrs:{list:t.component,options:{sort:!1},group:{name:"layouts",pull:"clone",put:!1},clone:t.clone}},[t._l(t.component,(function(e,o){return[n("div",{key:"component"+o},[t._v(t._s(e.componentText))])]}))],2)],1)])},B=[];function L(t){var e=t.split(":"),n=[];return e.forEach((function(t){n.push({span:t,children:[]})})),n}var q=[],z=["24","12:12","8:8:8","6:6:6:6"];z.forEach((function(t){q.push({componentName:"nested-container",componentAttrs:{row:{},col:L(t)}})}));var D={layout:q},F={components:{draggable:w.a},data:function(){return{list:D.layout,component:[{componentName:"van-button",draggalbe:!0,componentText:"默认按钮",componentAttrs:{type:"primary"}},{componentName:"van-tag",draggalbe:!0,componentText:"标签",componentAttrs:{type:"danger"}}],layoutTab:0}},methods:{test:function(){console.log(this.list)},clone:function(t){var e=JSON.parse(JSON.stringify(t));return e}}},G=F,H=Object(l["a"])(G,V,B,!1,null,null,null),I=H.exports,K={name:"editroView",components:{leftComponent:g,phoneComponent:M,rightComponent:I}},Q=K,R=Object(l["a"])(Q,p,f,!1,null,null,null),U=R.exports;o["a"].use(u["a"]);var W=[{path:"/",name:"editor",component:U},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"a5c5"))}}],X=new u["a"]({mode:"history",base:"",routes:W}),Y=X,Z=n("2f62");o["a"].use(Z["a"]);var tt=new Z["a"].Store({state:{},mutations:{},actions:{},modules:{}}),et=(n("91a6"),n("0c63")),nt=(n("202f"),n("b970")),ot=(n("157a"),n("d81d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-row",t._b({},"van-row",{row:t.row},!1),t._l(t.col,(function(e,o){return n("van-col",t._b({key:"col"+o,attrs:{span:e.span}},"van-col",e,!1))})),1)}),at=[],rt={name:"Container",props:{componentName:String,col:Array,row:Object},created:function(){console.log(this.row)}},lt=rt,ct=Object(l["a"])(lt,ot,at,!1,null,null,null),it=ct.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-row",{attrs:{type:"flex"}},t._l(t.col,(function(e,o){return n("van-col",t._b({key:"col"+o,class:"edit",attrs:{span:e.span}},"van-col",e,!1),[n("div",{staticClass:"title draggalbe-handle"}),n("draggable",{staticStyle:{"min-height":"30px"},attrs:{group:"layouts",list:e.children}},[t._l(e.children,(function(e,o){return[n(e.componentName,t._b({key:"component"+o,tag:"component"},"component",e.componentAttrs,!1),[t._v(t._s(e.componentText||""))])]}))],2)],1)})),1)},ut=[],pt={name:"nested-container",components:{draggable:w.a},props:{componentName:String,row:Object,col:Array}},ft=pt,dt=Object(l["a"])(ft,st,ut,!1,null,null,null),mt=dt.exports,vt={Container:it,NestedContainer:mt},bt=function(t){Object.keys(vt).map((function(e){var n=vt[e];t.component(n.name,n)}))};"undefined"!==typeof window&&window.Vue&&bt(window.Vue);var gt={install:bt};Object.keys(vt).map((function(t){var e=vt[t];gt[e.name]=e}));var ht=gt;o["a"].component(et["a"].name,et["a"]),o["a"].use(nt["a"]),o["a"].use(ht),o["a"].config.productionTip=!1,new o["a"]({router:Y,store:tt,render:function(t){return t(s)}}).$mount("#app")},"91a6":function(t,e,n){}});
//# sourceMappingURL=index.53318ceb.js.map