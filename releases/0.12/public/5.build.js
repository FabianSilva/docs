webpackJsonp([5],{381:function(o,t,e){function a(o){e(650)}var r=e(0)(e(564),e(759),a,null,null);o.exports=r.exports},564:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{doc:{title:"Toolbar",component:"toolbar",edit:"ToolbarsView",desc:"The <code>v-toolbar</code> component is pivotol to any gui, as it generally is the primary source of site navigation. The toolbar component works great in cojunction with a sidebar for hiding links and presenting an activator to open the sidebar on mobile.",examples:[{header:"With icons",file:"toolbar/1",desc:"You can use icons for your applications various actions."},{header:"With items",file:"toolbar/2",desc:"Toolbar items implement the <code>router-link</code> mixin and have access to <strong>router-link</strong> and <strong>nuxt-link</strong> props."},{header:"With dropdown",file:"toolbar/3",desc:"Menu dropdowns can be used within a toolbar to provide more space for actionable items."},{header:"With dropdown",file:"toolbar/4",desc:"You can control the display of the menu to best suite your application."},{header:"Transparent",file:"toolbar/5",desc:"Using css helper classes, you can make a toolbar transparent"},{header:"With search",file:"toolbar/6",desc:"Add a text-field to a toolbar to provide a search."}],props:{"v-toolbar":{params:[["fixed","Boolean","false","Fixes the toolbar to the top"]]},"v-toolbar-item":{shared:["router"],params:[["activeClass","String","toolbar__item--active","Class to apply for the active toolbar item"]]}},functional:{"v-toolbar":{params:[["v-toolbar-items",".toolbar__items"],["v-toolbar-logo",".toolbar__logo"],["v-toolbar-title",".toolbar__title"],["v-toolbar-side-icon",".toolbar__side-icon"]]}},slots:{"v-toolbar":{shared:["default"]},"v-toolbar-item":{shared:["default"]}}}}},mounted:function(){this.$emit("view",this.meta())},preFetch:function(){return this.methods.meta()},methods:{meta:function(){return{title:"Toolbar Component | Vuetify.js",h1:"Toolbars",description:"Toolbar component for Vuetify Framework",keywords:"vuetify, toolbars, components"}}}}},606:function(o,t,e){t=o.exports=e(129)(void 0),t.push([o.i,"#toolbar .component-example{position:relative;z-index:1}#toolbar .toolbar{height:64px!important;margin:1rem 0}#toolbar-image{height:300px;width:100%}#toolbar-image .toolbar{margin:0}",""])},650:function(o,t,e){var a=e(606);"string"==typeof a&&(a=[[o.i,a,""]]),a.locals&&(o.exports=a.locals);e(130)("e13713b2",a,!0)},759:function(o,t){o.exports={render:function(){var o=this,t=o.$createElement;return(o._self._c||t)("component-view",{attrs:{doc:o.doc}})},staticRenderFns:[]}}});