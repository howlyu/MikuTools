(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{949:function(t,e,n){"use strict";n.r(e);n(138);var o={name:"ZhihuVideoDownloader",head:function(){return this.$store.state.currentTool.head},data:function(){return{videoLink:"",results:"",requestIn:!1}},methods:{getVideo:function(){var t=this;if(this.requestIn)return!1;var e=/https?:\/\/[-A-Za-z0-9+&@#\/%?=~_|!:,.;]+[-A-Za-z0-9+&@#\/%=~_|]/;e.test(this.videoLink)?(this.requestIn=!0,this.results="",this.$axios.post("/zhihu_video_downloader",{url:this.videoLink.match(e)[0]}).then(function(e){t.requestIn=!1,t.results=e.data.data}).catch(function(e){t.requestIn=!1,t.$modal.show("dialog",{title:"下载失败",text:"ERROR: ".concat(e)})})):this.$modal.show("dialog",{title:"下载失败",text:"ERROR: 请输入正确的链接"})}}},r=n(2),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"zhihu_video_downloader"},[n("nya-container",{attrs:{title:"知乎视频解析"}},[n("div",{staticClass:"inputbtn"},[n("nya-input",{attrs:{label:"请输入视频链接",placeholder:"https://www.zhihu.com/question/290049048/answer/569457939",autocomplete:"off",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getVideo(e)}},model:{value:t.videoLink,callback:function(e){t.videoLink="string"==typeof e?e.trim():e},expression:"videoLink"}}),t._v(" "),n("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.requestIn},on:{click:t.getVideo}},[t._v("\n                "+t._s(t.requestIn?"获取中":"开始获取")+"\n            ")])],1)]),t._v(" "),t.results?n("nya-container",{attrs:{title:"获取成功"}},[n("a",{attrs:{href:t.results,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n            "+t._s(t.results)+"\n        ")])]):t._e()],1)},[],!1,null,null,null);e.default=component.exports}}]);