webpackJsonp([8],{375:function(e,s,n){function t(e){n(633)}var i=n(0)(n(558),n(700),t,null,null);e.exports=i.exports},558:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"spacing-view"}},589:function(e,s,n){s=e.exports=n(129)(void 0),s.push([e.i,"#helpers li{margin-bottom:1rem}",""])},633:function(e,s,n){var t=n(589);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);n(130)("407c6a45",t,!0)},700:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("doc-view",{attrs:{id:"spacing-view"}},[n("v-layout",{attrs:{"column-xs":"column-xs","row-sm":"row-sm"}},[n("v-flex",{attrs:{xs12:"xs12",sm8:"sm8",md12:"md12"}},[n("section-def",[n("dt",{slot:"title"},[e._v("Spacing")]),n("dd",{slot:"desc"},[e._v("Update your layout without creating new classes. Spacing helpers are useful for modifying the padding and margin of an element.")])])],1),n("ad")],1),n("section",[n("h6",[e._v("Type")]),n("ul",{staticClass:"mb-5"},[n("li",[n("code",[e._v("m")]),e._v(" - to set margin")]),n("li",[n("code",[e._v("p")]),e._v(" - to set padding")])]),n("h6",[e._v("Direction")]),n("ul",{staticClass:"mb-5"},[n("li",[n("code",[e._v("t")]),e._v(" - to set top")]),n("li",[n("code",[e._v("r")]),e._v(" - to set right")]),n("li",[n("code",[e._v("b")]),e._v(" - to set bottom")]),n("li",[n("code",[e._v("l")]),e._v(" - to set left")]),n("li",[n("code",[e._v("x")]),e._v(" - to set x-axis")]),n("li",[n("code",[e._v("y")]),e._v(" - to set y-axis")]),n("li",[n("code",[e._v("a")]),e._v(" - to set all")])]),n("h6",[e._v("Size")]),n("ul",{staticClass:"mb-5"},[n("li",[n("code",[e._v("0")]),e._v(" - removes margin or padding for specified direction")]),n("li",[n("code",[e._v("1")]),e._v(" - applies margin or padding with "),n("code",[e._v("16px * .25")])]),n("li",[n("code",[e._v("2")]),e._v(" - applies margin or padding with "),n("code",[e._v("16px * .50")])]),n("li",[n("code",[e._v("3")]),e._v(" - applies margin or padding with "),n("code",[e._v("16px")])]),n("li",[n("code",[e._v("4")]),e._v(" - applies margin or padding with "),n("code",[e._v("16px * 1.5")])]),n("li",[n("code",[e._v("5")]),e._v(" - applies margin or padding with "),n("code",[e._v("16px * 3")])])])]),n("section",[n("h6",[e._v("Example of spacers variable")]),n("markup",{attrs:{lang:"html"}},[e._v('<p class="mt-1">...</p>\n \n<li class="pb-2">...</li>\n \n<v-btn class="primary ma-3">...</v-btn>')]),n("markup",{attrs:{lang:"stylus"}},[e._v("$spacer := 16px\n$spacer-x := $spacer\n$spacer-y := $spacer\n \n$spacers := {\n zero: {\n   x: 0,\n   y: 0\n },\n one: {\n   x: ($spacer-x * .25),\n   y: ($spacer-y * .25)\n },\n two: {\n   x: ($spacer-x * .5),\n   y: ($spacer-y * .5)\n },\n three: {\n   x: $spacer-x,\n   y: $spacer-y\n },\n four: {\n   x: ($spacer-x * 1.5),\n   y: ($spacer-y * 1.5)\n },\n five: {\n   x: ($spacer-x * 3),\n   y: ($spacer-y * 3)\n }\n}")])],1)],1)},staticRenderFns:[]}}});