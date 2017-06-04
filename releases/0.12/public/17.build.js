webpackJsonp([17],{360:function(e,t,a){function o(e){a(668)}var n=a(0)(a(543),a(905),o,null,null);e.exports=n.exports},543:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{doc:{title:"Layouts",edit:"LayoutsView",component:"app",desc:"The layout system is the heart of every application. Below are the officially supported examples, ranging from desktop to mobile applications. While Vuetify.js aims to be as un-opinionated as possible, the layout structure must be <strong>explicitly</strong> followed to receive the expected results.",examples:[{header:"Baseline",file:"layouts/1",desc:"The default structure of the Vuetify layout is one of the few opinionated designs you will encounter in the framework. It is done so that each layout is easy to understand and works as expected for any given scenario. Below is the <strong>baseline</strong> structure for a layout. It includes a navigation drawer w/ right variant, toolbar, temporary navigation drawer w/ right variant, content and footer."},{header:"Permanent drawer",file:"layouts/2",desc:"Permanent navigation drawers are default open. These are used for applications that are desktop only and are not openable or closeable."},{header:"Permanent clipped drawer",file:"layouts/3",desc:"A clipped drawer rests under the application toolbar."},{header:"Permanent floating drawer",file:"layouts/4",desc:"A floating drawer has no visible container (no border-right)."},{header:"Permanent floating drawer in a card",file:"layouts/5",desc:"A card can be used to contain a navigation drawer's items."},{header:"Persistent",file:"layouts/6",desc:"A persistent drawer can be opened or closed. This is recommended sidebar for an application that supports both desktop and mobile."},{header:"Temporary",file:"layouts/7",desc:"A temporary drawer sits above its application and uses a scrim (overlay) to darken the background. This drawer behavior is mimicked on the persistent drawer when on mobile. Clicking outside of the drawer will cause it to close."},{header:"Dark theme",file:"layouts/8",desc:"Vuetify also supports the dark application theme. This will not override components that have default themes so in some cases it will be necessary to manually set the dark theme accents."}]}}}}},624:function(e,t,a){t=e.exports=a(129)(void 0),t.push([e.i,"#layouts-view .component-example{position:relative;z-index:0}#layouts-view .component-example [data-app]{overflow:hidden;height:400px}#layouts-view .component-example [data-app] .navigation-drawer,#layouts-view .component-example [data-app] .overlay,#layouts-view .component-example [data-app] .toolbar{position:absolute}#layouts-view .component-example [data-app] main .container{min-height:364px!important}#layouts-view .component-example [data-app] .navigation-drawer{height:400px!important}",""])},668:function(e,t,a){var o=a(624);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(130)("3a81562a",o,!0)},905:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("component-view",{attrs:{doc:e.doc}},[a("div",{slot:"top"},[a("section",[a("h2",{staticClass:"display-1"},[e._v("Default application markup")]),a("section-text",[e._v("This is the default application markup for Vuetify. The key is that drawer, toolbar, main and footer exist on the same level in the DOM. Using any one of the 5 pre-made vue-cli templates will automatically include this structure:")]),a("markup",{attrs:{lang:"html"}},[e._v("<v-app>\n  <v-navigation-drawer></v-navigation-drawer>\n  <v-toolbar></v-toolbar>\n  <main>\n    <v-container fluid>\n      <router-view></router-view>\n    </v-container>\n  </main>\n  <v-footer></v-footer>\n</v-app>")])],1)])])},staticRenderFns:[]}}});