(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{352:function(e,t,n){var content=n(851);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(7).default)("26777b09",content,!0,{sourceMap:!1})},850:function(e,t,n){"use strict";var r=n(352);n.n(r).a},851:function(e,t,n){(e.exports=n(6)(!1)).push([e.i,".temperature_conversion .nya-input{width:100%;margin-bottom:.9375rem}",""])},940:function(e,t,n){"use strict";n.r(t);n(69);var r={name:"TemperatureConversion",head:function(){return this.$store.state.currentTool.head},data:function(){return{valC:"",valF:"",valK:"",valRa:"",valRe:""}},methods:{convert:function(e,t){if(e.length<1)this.clear();else{var n=0;switch(e=Number(e),t){case"C":n=e;break;case"F":n=(e-32)/1.8;break;case"K":n=e-273.15;break;case"Ra":n=(e-32-459.67)/1.8;break;case"Re":n=1.25*e}var r=function(i,n){return t===i?e:parseFloat(n.toFixed(2))};n=Number(n),this.valC=r("C",n),this.valF=r("F",1.8*n+32),this.valK=r("K",n+273.15),this.valRa=r("Ra",1.8*n+32+459.67),this.valRe=r("Re",.8*n)}},clear:function(){this.valC="",this.valF="",this.valK="",this.valRa="",this.valRe=""}}},l=(n(850),n(2)),component=Object(l.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"temperature_conversion"},[n("nya-container",{attrs:{title:"温度单位转换"}},[n("nya-input",{attrs:{type:"number",autocomplete:"off",label:"摄氏度",placeholder:"请输入摄氏度",value:e.valC},on:{input:function(t){return e.convert(t,"C")}}}),e._v(" "),n("br"),e._v(" "),n("nya-input",{attrs:{type:"number",autocomplete:"off",label:"华氏度",placeholder:"请输入华氏度",value:e.valF},on:{input:function(t){return e.convert(t,"F")}}}),e._v(" "),n("br"),e._v(" "),n("nya-input",{attrs:{type:"number",autocomplete:"off",label:"开氏度",placeholder:"请输入开氏度",value:e.valK},on:{input:function(t){return e.convert(t,"K")}}}),e._v(" "),n("br"),e._v(" "),n("nya-input",{attrs:{type:"number",autocomplete:"off",label:"兰氏度",placeholder:"请输入兰氏度",value:e.valRa},on:{input:function(t){return e.convert(t,"Ra")}}}),e._v(" "),n("br"),e._v(" "),n("nya-input",{attrs:{type:"number",autocomplete:"off",label:"列氏度",placeholder:"请输入列氏度",value:e.valRe},on:{input:function(t){return e.convert(t,"Re")}}}),e._v(" "),n("br")],1)],1)},[],!1,null,null,null);t.default=component.exports}}]);