(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{959:function(t,e,n){"use strict";n.r(e);n(138),n(32);var o={name:"FacebookVideoDownloader",head:function(){return this.$store.state.currentTool.head},data:function(){return{facebookLink:"",videoData:{},requestIn:!1}},computed:{handleSize:function(){return function(t){return t?t.replace(/ \(.+\)/,""):""}}},methods:{download:function(){var t=this;if(this.requestIn)return!1;var e=/https?:\/\/[-A-Za-z0-9+&@#\/%?=~_|!:,.;]+[-A-Za-z0-9+&@#\/%=~_|]/;e.test(this.facebookLink)?(this.requestIn=!0,this.videoData={},this.$axios.post("/facebook_video_downloader",{url:this.facebookLink.match(e)[0]}).then(function(e){t.requestIn=!1,t.videoData=e.data.data}).catch(function(e){t.requestIn=!1,t.$modal.show("dialog",{title:"获取失败",text:"ERROR: ".concat(e)})})):this.$modal.show("dialog",{title:"获取失败",text:"ERROR: 请输入正确的链接"})}}},r=n(2),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"facebook_video_downloader"},[n("nya-container",{attrs:{title:"Facebook 视频下载"}},[n("div",{staticClass:"inputbtn"},[n("nya-input",{attrs:{label:"输入链接开始下载",placeholder:"https://www.facebook.com/neneko.page/videos/407343883148739/",autocomplete:"off",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.download(e)}},model:{value:t.facebookLink,callback:function(e){t.facebookLink="string"==typeof e?e.trim():e},expression:"facebookLink"}}),t._v(" "),n("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.requestIn},on:{click:t.download}},[t._v("\n                "+t._s(t.requestIn?"获取中":"开始获取")+"\n            ")])],1)]),t._v(" "),t.videoData.title?n("nya-container",{attrs:{title:"获取视频信息成功"}},[n("h2",[t._v("标题："+t._s(t.videoData.title))]),t._v(" "),n("h2",[t._v("下载链接")]),t._v(" "),t._l(t.videoData.formats,function(e,o){return n("div",{key:o},[n("p",[n("span",[t._v(t._s(e.ext)+" "),e.width?n("span",[t._v("("+t._s(e.width+"x"+e.height)+")")]):t._e(),t._v(" "),e.fps?n("span",[t._v(t._s(e.fps)+"fps")]):t._e(),t._v("：")]),t._v(" "),n("a",{attrs:{href:e.url,target:"_blank",title:"右键另存为下载或长按保存",rel:"noopener noreferrer"}},[t._v("\n                    "+t._s(e.url)+"\n                ")])])])})],2):t._e(),t._v(" "),n("nya-container",{attrs:{title:"Explain"}},[n("ul",{staticClass:"nya-list"},[n("li",[t._v("只支持解析在 Facebook 上传的视频，不支持分享的视频")]),t._v(" "),n("li",[t._v("部分视频做了音频和视频的分离，请自行下载合并")])])])],1)},[],!1,null,null,null);e.default=component.exports}}]);