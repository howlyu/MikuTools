(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{365:function(t,e,o){var content=o(874);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(7).default)("9113e72a",content,!0,{sourceMap:!1})},873:function(t,e,o){"use strict";var n=o(365);o.n(n).a},874:function(t,e,o){(t.exports=o(6)(!1)).push([t.i,".website_screenshots img{max-width:100%}.website_screenshots .nya-checkbox{margin-top:.9375rem;display:flex}.website_screenshots .nya-input{width:100%;margin-top:.9375rem}.website_screenshots .size{display:flex}.website_screenshots .size .nya-input{width:50%}.website_screenshots .size .nya-input:last-child input{border-left:none}",""])},914:function(t,e,o){"use strict";o.r(e);o(91),o(95),o(142),o(70),o(18),o(92);var n={name:"WebsiteScreenshots",head:function(){return this.$store.state.currentTool.head},data:function(){return{url:"",results:"",advancedOptions:!1,authentication:!1,options:{width:1280,height:800,styles:"",scripts:"",element:"",hideElements:"",removeElements:"",clickElement:"",userAgent:"",headers:"",cookies:"",delay:0,authentication:{username:"",password:""}},requestIn:!1}},methods:{screenshots:function(){var t=this;if(this.requestIn)return!1;if(/https?:\/\/[-A-Za-z0-9+&@#\/%?=~_|!:,.;]+[-A-Za-z0-9+&@#\/%=~_|]/.test(this.url)){var e=this.validate();if(!e)return!1;this.requestIn=!0,this.results="",this.$axios.post("/website_screenshots",{url:this.url,options:e}).then(function(e){t.requestIn=!1,t.results="data:image/jpg;base64,".concat(e.data.data)}).catch(function(e){t.requestIn=!1,t.$modal.show("dialog",{title:"下载失败",text:"ERROR: ".concat(e)})})}else this.$modal.show("dialog",{title:"截图失败",text:"ERROR: 请输入正确的链接"})},validate:function(){if(!(this.options.width>100&&this.options.width<7680&this.options.height>100&&this.options.height<4320))return alert("宽高请在 100x100 至 7680x4320 之间"),!1;if(this.options.delay>15)return alert("等待时间最多为15秒"),!1;if(!this.advancedOptions)return{width:parseInt(this.options.width),height:parseInt(this.options.height)};if(this.options.headers)try{JSON.parse(this.options.headers)}catch(t){return this.$modal.show("dialog",{title:"截图失败",text:"ERROR: headers 必须是一个对象"}),!1}if(this.authentication&&(!this.options.authentication.username||!this.options.authentication.password))return this.$modal.show("dialog",{title:"截图失败",text:"ERROR: 请填写http认证信息"}),!1;var t=Object.assign({},this.options);return t.width=parseInt(t.width),t.height=parseInt(t.height),t.delay=parseInt(t.delay),Object.keys(t).forEach(function(e){""===t[e]&&delete t[e],["hideElements","removeElements","scripts","styles"].includes(e)&&t[e]&&(t[e]=t[e].split("\n"))}),t}}},l=(o(873),o(2)),component=Object(l.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"website_screenshots"},[o("nya-container",{attrs:{title:"网页截图"}},[o("div",{staticClass:"inputbtn"},[o("nya-input",{attrs:{label:"请输入网址",placeholder:"https://miku.tools/",autocomplete:"off",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.screenshots(e)}},model:{value:t.url,callback:function(e){t.url="string"==typeof e?e.trim():e},expression:"url"}}),t._v(" "),o("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.requestIn},on:{click:t.screenshots}},[t._v("\n                "+t._s(t.requestIn?"截图中":"开始截图")+"\n            ")])],1),t._v(" "),o("div",{staticClass:"size"},[o("nya-input",{attrs:{label:"宽度",type:"number",placeholder:"1024x768",autocomplete:"off"},model:{value:t.options.width,callback:function(e){t.$set(t.options,"width","string"==typeof e?e.trim():e)},expression:"options.width"}}),t._v(" "),o("nya-input",{attrs:{label:"高度",type:"number",placeholder:"1024x768",autocomplete:"off"},model:{value:t.options.height,callback:function(e){t.$set(t.options,"height","string"==typeof e?e.trim():e)},expression:"options.height"}})],1),t._v(" "),o("nya-checkbox",{attrs:{label:"启用高级选项"},model:{value:t.advancedOptions,callback:function(e){t.advancedOptions=e},expression:"advancedOptions"}}),t._v(" "),t.advancedOptions?[o("nya-input",{attrs:{type:"number",label:"在页面加载完成后等待数秒",placeholder:"如果网页上有动画，这个功能将会有用",autocomplete:"off"},model:{value:t.options.delay,callback:function(e){t.$set(t.options,"delay","string"==typeof e?e.trim():e)},expression:"options.delay"}}),t._v(" "),o("nya-input",{attrs:{label:"自定义 style 标签，多个用换行分开",rows:"3",type:"textarea",placeholder:"例如：“.body{display: none}” 会被解析成 “<style>.body{background: red}</style>”",autocomplete:"off"},model:{value:t.options.styles,callback:function(e){t.$set(t.options,"styles","string"==typeof e?e.trim():e)},expression:"options.styles"}}),t._v(" "),o("nya-input",{attrs:{label:"自定义 script 标签，多个用换行分开",rows:"3",type:"textarea",placeholder:"例如：“console.log('script');” 会被解析成 “<script>console.log('script');<\/script>”",autocomplete:"off"},model:{value:t.options.scripts,callback:function(e){t.$set(t.options,"scripts","string"==typeof e?e.trim():e)},expression:"options.scripts"}}),t._v(" "),o("nya-input",{attrs:{label:"要截图的 CSS 选择器",placeholder:"#body",autocomplete:"off"},model:{value:t.options.element,callback:function(e){t.$set(t.options,"element","string"==typeof e?e.trim():e)},expression:"options.element"}}),t._v(" "),o("nya-input",{attrs:{label:"要隐藏的 CSS 选择器，多个用换行分开",rows:"3",type:"textarea",placeholder:"#nav",autocomplete:"off"},model:{value:t.options.hideElements,callback:function(e){t.$set(t.options,"hideElements","string"==typeof e?e.trim():e)},expression:"options.hideElements"}}),t._v(" "),o("nya-input",{attrs:{label:"要删除的 CSS 选择器，多个用换行分开",rows:"3",type:"textarea",placeholder:"#nav",autocomplete:"off"},model:{value:t.options.removeElements,callback:function(e){t.$set(t.options,"removeElements","string"==typeof e?e.trim():e)},expression:"options.removeElements"}}),t._v(" "),o("nya-input",{attrs:{label:"需要点击的 CSS 选择器",placeholder:"#nav",autocomplete:"off"},model:{value:t.options.clickElement,callback:function(e){t.$set(t.options,"clickElement","string"==typeof e?e.trim():e)},expression:"options.clickElement"}}),t._v(" "),o("nya-input",{attrs:{label:"userAgent",placeholder:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36",autocomplete:"off"},model:{value:t.options.userAgent,callback:function(e){t.$set(t.options,"userAgent","string"==typeof e?e.trim():e)},expression:"options.userAgent"}}),t._v(" "),o("nya-input",{attrs:{label:"headers（Object）",placeholder:'{ "x-powered-by": "https://github.com" }',autocomplete:"off"},model:{value:t.options.headers,callback:function(e){t.$set(t.options,"headers","string"==typeof e?e.trim():e)},expression:"options.headers"}}),t._v(" "),o("nya-input",{attrs:{label:"Cookies（Object | String）",placeholder:'BAIDUID=AAAAAAAAAA; 或者 { "BAIDUID": "AAAAAAAAAA" }',autocomplete:"off"},model:{value:t.options.cookies,callback:function(e){t.$set(t.options,"cookies","string"==typeof e?e.trim():e)},expression:"options.cookies"}}),t._v(" "),o("nya-checkbox",{attrs:{label:"需要HTTP认证"},model:{value:t.authentication,callback:function(e){t.authentication=e},expression:"authentication"}}),t._v(" "),t.authentication?[o("nya-input",{attrs:{label:"username",placeholder:"jack",autocomplete:"off"},model:{value:t.options.authentication.username,callback:function(e){t.$set(t.options.authentication,"username","string"==typeof e?e.trim():e)},expression:"options.authentication.username"}}),t._v(" "),o("nya-input",{attrs:{label:"password",placeholder:"123456",autocomplete:"off"},model:{value:t.options.authentication.password,callback:function(e){t.$set(t.options.authentication,"password","string"==typeof e?e.trim():e)},expression:"options.authentication.password"}})]:t._e()]:t._e()],2),t._v(" "),t.results?o("nya-container",{attrs:{title:"截图成功"}},[o("img",{attrs:{src:t.results,alt:"results"}})]):t._e()],1)},[],!1,null,null,null);e.default=component.exports}}]);