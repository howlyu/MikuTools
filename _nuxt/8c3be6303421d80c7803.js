(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{332:function(t,e,o){var content=o(785);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(7).default)("7c30fe26",content,!0,{sourceMap:!1})},784:function(t,e,o){"use strict";var n=o(332);o.n(n).a},785:function(t,e,o){(t.exports=o(6)(!1)).push([t.i,".kuroshiro .nya-input,.kuroshiro .nya-select{margin-bottom:.9375rem;width:100%}",""])},956:function(t,e,o){"use strict";o.r(e);var n={name:"Kuroshiro",head:function(){return this.$store.state.currentTool.head},data:function(){return{requestIn:!1,content:"",coverContent:"",romajiSystem:"nippon",mode:"spaced",to:"romaji",romajiSystemList:{nippon:"日本式",passport:"护照式",hepburn:"平文式"},toList:{hiragana:"平假名",katakana:"片假名",romaji:"罗马字"},modeList:{normal:"标准模式",spaced:"空格分组",okurigana:"送假名",furigana:"注音假名"}}},methods:{transform:function(){var t=this;if(!this.content)return!1;this.coverContent="",this.requestIn=!0,this.$axios.post("/kuroshiro",{content:this.content,mode:this.mode,to:this.to,romajiSystem:this.romajiSystem}).then(function(e){t.requestIn=!1,t.coverContent=e.data.data}).catch(function(e){t.requestIn=!1,t.$modal.show("dialog",{title:"转换失败",text:"ERROR: ".concat(e)})})}}},r=(o(784),o(2)),component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"kuroshiro"},[o("nya-container",{attrs:{title:"日语转换"}},[o("nya-input",{attrs:{rows:"5",type:"textarea",autofocus:"",autocomplete:"off",label:"待转换的内容",placeholder:"誰でも大好き"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),o("nya-select",{attrs:{items:t.modeList,label:"转换模式"},model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}}),t._v(" "),o("nya-select",{attrs:{items:t.toList,label:"转换成"},model:{value:t.to,callback:function(e){t.to=e},expression:"to"}}),t._v(" "),"romaji"===t.to?o("nya-select",{attrs:{items:t.romajiSystemList,label:"罗马字类型"},model:{value:t.romajiSystem,callback:function(e){t.romajiSystem=e},expression:"romajiSystem"}}):t._e(),t._v(" "),o("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.requestIn},on:{click:t.transform}},[t._v("\n            "+t._s(t.requestIn?"转换中":"开始转换")+"\n        ")])],1),t._v(" "),o("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.coverContent,expression:"coverContent"}],attrs:{title:"获取成功"}},[o("pre",[t._v(t._s(t.coverContent))])]),t._v(" "),o("nya-container",{attrs:{title:"Explain"}},[o("ul",{staticClass:"nya-list"},[o("li",[t._v("\n                使用 "),o("a",{attrs:{href:"https://github.com/hexenq/kuroshiro",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                    kuroshiro\n                ")]),t._v(" 进行转换\n            ")])])])],1)},[],!1,null,null,null);e.default=component.exports}}]);