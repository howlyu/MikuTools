(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{272:function(t,e,n){"use strict";n.r(e);var o=n(283),l=n(273);n(284),e.default=function(content){return o(content,{breaks:!0,highlight:function(code){return l.highlightAuto(code).value}})}},285:function(t,e,n){var content=n(599);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("0730ee14",content,!0,{sourceMap:!1})},598:function(t,e,n){"use strict";var o=n(285);n.n(o).a},599:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".leave-message .nya-input,.leave-message .nya-select{width:100%;margin-bottom:.9375rem}.leave-message .nya-checkbox{margin-bottom:.9375rem}",""])},913:function(t,e,n){"use strict";n.r(e);var o=n(272),l={name:"LeaveMessage",head:function(){return{title:this.title}},data:function(){return{title:"留言反馈 - ".concat("MikuTools"),msg:"",contact:"",dontUseApp:!1,requestIn:!1,msgTypeList:["问题反馈","功能建议","其他"],msgType:"0"}},methods:{submit:function(){var t=this;return/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(this.contact)?this.dontUseApp||"0"!==this.msgType?void(this.msg.length>15?(this.requestIn=!0,this.$axios.post("/leave_message",{msg:Object(o.default)(this.msg),type:this.msgTypeList[this.msgType],contact:this.contact}).then(function(){t.$modal.show("dialog",{title:"提交成功",text:"感谢您的反馈，我们已收到你的留言，作者会即时查看"}),t.requestIn=!1}).catch(function(e){t.$modal.show("dialog",{title:"提交失败",text:"ERROR: ".concat(e)}),t.requestIn=!1})):this.$modal.show("dialog",{title:"提交失败",text:"ERROR: 请输入留言信息，且不少于15个字"})):(this.$modal.show("dialog",{title:"提交失败",text:"本工具地址为：https://miku.tools，请复制到浏览器内打开，不要使用任何APP程序"}),!1):(this.$modal.show("dialog",{title:"提交失败",text:"ERROR: 请输入正确的联系方式"}),!1)}}},c=(n(598),n(2)),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"leave-message"},[n("nya-container",{attrs:{title:"留言反馈"}},[n("nya-select",{attrs:{items:t.msgTypeList,label:"留言类型"},model:{value:t.msgType,callback:function(e){t.msgType=e},expression:"msgType"}}),t._v(" "),"0"===t.msgType?n("nya-checkbox",{attrs:{label:"我已确认没有使用APP"},model:{value:t.dontUseApp,callback:function(e){t.dontUseApp=e},expression:"dontUseApp"}}):t._e(),t._v(" "),n("nya-input",{attrs:{name:"email",autofocus:"",label:"联系方式",placeholder:"输入你的邮箱",autocomplete:"off"},model:{value:t.contact,callback:function(e){t.contact="string"==typeof e?e.trim():e},expression:"contact"}}),t._v(" "),n("nya-input",{attrs:{rows:"5",type:"textarea",label:"留言内容",placeholder:"请输入留言信息，且不少于15个字，支持 markdown"},model:{value:t.msg,callback:function(e){t.msg="string"==typeof e?e.trim():e},expression:"msg"}}),t._v(" "),n("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.requestIn},on:{click:t.submit}},[t._v("\n            "+t._s(t.requestIn?"提交中":"提交留言")+"\n        ")])],1),t._v(" "),n("nya-container",{attrs:{title:"Explain"}},[n("ul",{staticClass:"nya-list"},[n("li",[n("b",[t._v("你的所有留言都会被即时推送到作者QQ、微信、邮箱，但不一定会回复")])]),t._v(" "),n("li",[n("b",[t._v("请不要使用任何APP程序，APP内使用的BUG反馈将全部无视")])]),t._v(" "),n("li",[t._v("所有样式，无法使用等问题请更换浏览器后重试")]),t._v(" "),n("li",[t._v("任何无法使用的问题请留下详细的信息，如视频链接等")]),t._v(" "),n("li",[t._v("如果你的留言包含视频、文件、图片等信息，请通过邮件发送给作者：imiku.me@gmail.com")])])])],1)},[],!1,null,null,null);e.default=component.exports}}]);