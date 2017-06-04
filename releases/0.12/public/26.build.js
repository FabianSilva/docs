webpackJsonp([26],{340:function(t,o,e){function n(t){e(665)}var i=e(0)(e(524),e(895),n,null,null);t.exports=i.exports},524:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{doc:{title:"Bottom navigation",edit:"BottomNavigationView",component:"bottom-navigation/BottomNavigation.js",desc:"The <code>v-bottom-nav</code> is an alternative to the sidebar. It is primarily used on mobile and comes in two variants, icons and text, and shift.",examples:[{header:"Icons and text",file:"bottom-navigation/1",desc:"While the bottom nav is meant to be used with the <code>vue-router</code>, you can also programmatically control the active state of the buttons by using a <code>v-model</code>."},{header:"Color & shift",file:"bottom-navigation/2",desc:"When using a colored background, it is recommended to use the <code>light</code> prop. The <code>shift</code> prop will hide the button text until active. Keep in mind, <code>v-btn</code> text is required to be wrapped in a <code>&lt;span&gt;</code> tag."},{header:"Toggle",file:"bottom-navigation/3",desc:"As with other Vuetify components, you can control the display state with <code>v-model</code>."}],props:{"v-bottom-navigation":{model:{type:"*"},params:[["absolute","Boolean","False","Change the position from fixed to absolute"],["shift","Boolean","False","Hide text of button when not active"]]}},slots:{"v-bottom-navigation":{shared:["default"]}}}}},mounted:function(){this.$emit("view",this.meta())},preFetch:function(){return this.methods.meta()},methods:{meta:function(){return{title:"Bottom navigation Component | Vuetify.js",h1:"Bottom navigation",description:"Bottom navigation component for Vuetify Framework",keywords:"vuetify, bottom navigation, navigation, component"}}}}},621:function(t,o,e){o=t.exports=e(129)(void 0),o.push([t.i,"#bottom-navigation-view .bottom-nav{z-index:1}",""])},665:function(t,o,e){var n=e(621);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(130)("6782b182",n,!0)},895:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement;return(t._self._c||o)("component-view",{attrs:{doc:t.doc}})},staticRenderFns:[]}}});