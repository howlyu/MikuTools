(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{964:function(t,n,e){"use strict";e.r(n);e(138);var o={name:"PornhubVideoDownloader",head:function(){return this.$store.state.currentTool.head},data:function(){return{pornhubLink:"",downloadUrl:"",requestIn:!1}},methods:{download:function(){var t=this;if(this.requestIn)return!1;var n=/https?:\/\/[-A-Za-z0-9+&@#\/%?=~_|!:,.;]+[-A-Za-z0-9+&@#\/%=~_|]/;n.test(this.pornhubLink)?(this.requestIn=!0,this.downloadUrl="",this.$axios.post("/pornhub_video_downloader",{url:this.pornhubLink.match(n)[0]}).then(function(n){t.requestIn=!1,t.downloadUrl=n.data.data}).catch(function(n){t.requestIn=!1,t.$modal.show("dialog",{title:"下载失败",text:"ERROR: ".concat(n)})})):this.$modal.show("dialog",{title:"下载失败",text:"ERROR: 请输入正确的链接"})}}},r=e(2),component=Object(r.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pornhub_video_downloader"},[e("nya-container",{attrs:{title:"Pornhub 视频下载"}},[e("div",{staticClass:"inputbtn"},[e("nya-input",{attrs:{autofocus:"",label:"输入链接开始下载",placeholder:"https://www.pornhub.com/view_video.php?viewkey=ph5c0491898480f",autocomplete:"off"},on:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.download(n)}},model:{value:t.pornhubLink,callback:function(n){t.pornhubLink="string"==typeof n?n.trim():n},expression:"pornhubLink"}}),t._v(" "),e("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.requestIn},on:{click:t.download}},[t._v("\n                "+t._s(t.requestIn?"获取中":"开始获取")+"\n            ")])],1)]),t._v(" "),e("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.downloadUrl,expression:"downloadUrl"}],attrs:{title:"获取成功"}},t._l(t.downloadUrl,function(n,o){return e("div",{key:o},[e("p",[e("span",[t._v(t._s(n.quality)+"：")]),t._v(" "),e("a",{attrs:{href:n.videoUrl,target:"_blank",title:"右键另存为下载或长按保存",rel:"noopener noreferrer"}},[t._v("\n                    "+t._s(n.videoUrl)+"\n                ")])])])}),0)],1)},[],!1,null,null,null);n.default=component.exports}}]);