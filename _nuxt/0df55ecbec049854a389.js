(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{924:function(t,e,n){"use strict";n.r(e);n(138);var r={name:"NetEaseVideoDownloader",head:function(){return this.$store.state.currentTool.head},data:function(){return{musicUrl:"",data:"",requestIn:!1}},methods:{getUrl:function(){if(/(https?:\/\/)(music\.163\.com)\/(song|#\/song)(\?|\/)(id=)?[0-9]+/.test(this.musicUrl)){var t=this.musicUrl.match(/[0-9]{4,12}/)[0];this.data="https://music.163.com/song/media/outer/url?id=".concat(t,".mp3")}else this.$modal.show("dialog",{title:"下载失败",text:"ERROR: 请输入正确的链接"})}}},o=n(2),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"163_music_downloader"},[n("nya-container",{attrs:{title:"网易云音乐解析下载"}},[n("div",{staticClass:"inputbtn"},[n("nya-input",{attrs:{autofocus:"",label:"输入链接开始下载",placeholder:"https://music.163.com/#/song?id=31134451",autocomplete:"off"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getUrl(e)}},model:{value:t.musicUrl,callback:function(e){t.musicUrl="string"==typeof e?e.trim():e},expression:"musicUrl"}}),t._v(" "),n("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.requestIn},on:{click:t.getUrl}},[t._v("\n                "+t._s(t.requestIn?"获取中":"开始获取")+"\n            ")])],1)]),t._v(" "),n("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.data,expression:"data"}],attrs:{title:"获取成功"}},[n("a",{attrs:{href:t.data,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n            "+t._s(t.data)+"\n        ")])]),t._v(" "),n("nya-container",{attrs:{title:"Explain"}},[n("ul",{staticClass:"nya-list"},[n("li",[t._v("不支持 VIP 和付费歌曲的下载")])])])],1)},[],!1,null,null,null);e.default=component.exports}}]);