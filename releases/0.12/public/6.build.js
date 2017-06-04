webpackJsonp([6],{379:function(e,t,i){function a(e){i(662)}var r=i(0)(i(562),i(877),a,null,null);e.exports=r.exports},562:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{doc:{title:"Text fields",desc:"Text fields components are used for collecting user provided information.",component:"text-fields",edit:"TextFieldsView",examples:[{header:"With label",file:"text-fields/1",desc:"Text-fields come in two theme options, dark and light."},{header:"Dark theme with label",file:"text-fields/2",desc:"The dark theme compliments darker backgrounds."},{header:"Single line light theme",file:"text-fields/3",desc:"Single line text-fields do not float their label on focus or with data."},{header:"Single line dark theme",file:"text-fields/4",desc:"A single line label mimics the display of a placeholder."},{header:"With Icon",file:"text-fields/5",desc:"Icons can be specified as prepended or appended."},{header:"Dark theme with icon",file:"text-fields/6",desc:"The icon inherits the applications primary color on text-field focus."},{header:"Multi-Line",file:"text-fields/7",desc:"A multi-line text-field is useful for larger amounts of text."},{header:"Dark theme multi-line",file:"text-fields/8",desc:"Multi-line text-fields can be set to autogrow allowing the field to scale with the input."},{header:"Character counter",file:"text-fields/9",desc:"Use a counter to inform a user of the maximum or minium character limit."},{header:"Password input",file:"text-fields/10",desc:"A password input can be used with an appended icon and callback to control the visibility."},{header:"Multi-line with character counter",file:"text-fields/11",desc:"The rules prop accepts an array of callbacks. While validating rules, the current v-model value will be passed to the callback. This callback should return either <code>true</code> or a <code>String</code>, the error message."},{header:"Full-width text field with character counter",file:"text-fields/12",desc:"Light theme"},{header:"Required fields",file:"text-fields/13",desc:"Light theme"},{header:"Hint text",file:"text-fields/14",desc:"Light theme"},{header:"Prefixes & suffixes",file:"text-fields/15",desc:"Light theme"},{header:"Custom validation",file:"text-fields/16",desc:'If you want to skip the built in validation and use your own or a plugin such as <a href="https://github.com/monterail/vuelidate" target="_blank">vuelidate</a> or <a href="https://github.com/logaretm/vee-validate" target="_blank">vee-validation</a>, you can use the <strong>errors</strong> or <strong>error</strong> props. Errors accepts a string or array and error simply places the field in an error state.'}],props:{"v-text-field":{shared:["input"],params:[["autofocus","Boolean","False","Enable autofocus"],["auto-grow","Boolean","False","Auto-grows the input"],["counter","Boolean","False","Creates counter for input length"],["full-width","Boolean","False","Desginates input type as full-width"],["prefix","String","","Displays prefix text"],["min","Number","0","Sets minimum value for attribute"],["max","Number","25","Sets maximum value for attribute"],["maxlength","Number","25","Sets maximum value for a text-field"],["multi-line","Boolean","False","Turns into textarea"],["readonly","Boolean","False","Disables input"],["rows","Number","5","Number of rows in textarea"],["single-line","Boolean","False","Label does not move on focus/dirty"],["suffix","String","","Displays suffix text"],["type","String","text","Sets input type"]],model:{type:["*"],default:"-",description:"Current input value"}}},events:{"v-text-field":{params:[["input","String","Current input value. Fires while typing."],["focus","-","Input gained focus."],["blur","-","Input lost focus."],["change","String","Input value was changed. Fired on blur."]]}}}}},mounted:function(){this.$emit("view",this.meta())},preFetch:function(){return this.methods.meta()},methods:{meta:function(){return{title:"Text fields Input Components | Vuetify.js",h1:"Text fields",description:"Text fields input components for Vuetify Framework",keywords:"vuetify, form, components"}}}}},618:function(e,t,i){t=e.exports=i(129)(void 0),t.push([e.i,"#text-fields-view .container,#text-fields-view main{min-height:0}",""])},662:function(e,t,i){var a=i(618);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(130)("37a45e04",a,!0)},877:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("component-view",{attrs:{doc:e.doc}})},staticRenderFns:[]}}});