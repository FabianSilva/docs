webpackJsonp([132],{215:function(t,e,a){var i=a(0)(a(448),a(793),null,null,null);t.exports=i.exports},448:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{items:[{active:!0,title:"Jason Oner",avatar:"/static/doc-images/lists/1.jpg"},{active:!0,title:"Ranee Carlson",avatar:"/static/doc-images/lists/2.jpg"},{title:"Cindy Baker",avatar:"/static/doc-images/lists/3.jpg"},{title:"Ali Connors",avatar:"/static/doc-images/lists/4.jpg"}],items2:[{title:"Travis Howard",avatar:"/static/doc-images/lists/5.jpg"}]}}}},793:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-card",[a("v-toolbar",{staticClass:"teal",attrs:{light:""}},[a("v-toolbar-side-icon",{attrs:{light:""}}),a("v-toolbar-title",{staticClass:"text-xs-center"},[t._v("New Chat")]),a("v-btn",{attrs:{light:"",icon:""}},[a("v-icon",[t._v("search")])],1)],1),a("v-list",{attrs:{subheader:""}},[a("v-subheader",[t._v("Recent chat")]),t._l(t.items,function(e){return a("v-list-item",{key:e.title},[a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-avatar",[a("img",{attrs:{src:e.avatar}})]),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{innerHTML:t._s(e.title)}})],1),a("v-list-tile-action",[a("v-icon",{class:[e.active?"teal--text":"grey--text"]},[t._v("chat_bubble")])],1)],1)],1)})],2),a("v-divider"),a("v-list",{attrs:{subheader:""}},[a("v-subheader",[t._v("Previous chats")]),t._l(t.items2,function(e){return a("v-list-item",{key:e.title},[a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-avatar",[a("img",{attrs:{src:e.avatar}})]),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{innerHTML:t._s(e.title)}})],1)],1)],1)})],2)],1)],1)],1)},staticRenderFns:[]}}});