(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{349:function(t,e,n){"use strict";(function(t){n(70),n(92),n(91),n(67),n(68),n(18),n(32),n(138);var r=n(845);e.a={name:"SsrDecode",head:function(){return this.$store.state.currentTool.head},data:function(){return{configText:"",requestIn:!1}},computed:{results:function(){if(this.configText){var e,n=Boolean(this.configText.match(/^ssr?:\/\//)),text=this.configText.replace(/(vmess|ssr?):\/\//,""),o=t.from(text,"base64").toString();if(n){var c=new Object,l=o.split(":"),f=Object(r.a)(l[5]);return c.IP=l[0],c["端口"]=l[1],c["协议"]=l[2],c["加密"]=l[3],c["混淆"]=l[4],Object.keys(f).length&&(c["密码"]=t.from(l[5].split("/")[0],"base64").toString()),f.group&&(c["分组"]=t.from(f.group,"base64").toString()),f.remarks&&(c["备注"]=t.from(f.remarks,"base64").toString()),f.protoparam&&(c["协议参数"]=t.from(f.protoparam,"base64").toString()),f.obfsparam&&(c["混淆参数"]=t.from(f.obfsparam,"base64").toString()),c}try{e=JSON.parse(o)}catch(t){return"解析失败，请检查配置是否正确"}return e}return!1}}}}).call(this,n(139).Buffer)},350:function(t,e,n){var content=n(847);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("e615636e",content,!0,{sourceMap:!1})},845:function(t,e,n){"use strict";n(91);e.a=function(t){if(t&&t.indexOf("?")>-1){var e=t.split("?")[1],n={},r=e.length?e.split("&"):[],o=null,c=null,l=null,i=0,f=r.length;for(i=0;i<f;i++)o=r[i].split("="),c=decodeURIComponent(o[0]),l=decodeURIComponent(o[1]),c.length&&(n[c]=l);return n}return{}}},846:function(t,e,n){"use strict";var r=n(350);n.n(r).a},847:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".ssr_decode .nya-input{width:100%;margin-bottom:.9375rem}",""])},981:function(t,e,n){"use strict";n.r(e);var r=n(349).a,o=(n(846),n(2)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ssr_decode"},[n("nya-container",{attrs:{title:"SSR配置解析"}},[n("nya-input",{attrs:{label:"请输入SSR/SS/V2ray 配置",autocomplete:"off",autofocus:""},model:{value:t.configText,callback:function(e){t.configText="string"==typeof e?e.trim():e},expression:"configText"}})],1),t._v(" "),t.results?n("nya-container",{attrs:{title:"解析成功"}},[n("pre",[t._v(t._s(t.results))])]):t._e(),t._v(" "),n("nya-container",{attrs:{title:"Explain"}},[n("ul",{staticClass:"nya-list"},[n("li",[t._v("所有解析均在本地进行，不会收集任何配置")])])])],1)},[],!1,null,null,null);e.default=component.exports}}]);