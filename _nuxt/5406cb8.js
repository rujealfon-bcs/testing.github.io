(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{297:function(n,t,e){"use strict";e.r(t);var r=e(7),o=(e(46),e(17),e(66),{data:function(){return{mountains:[]}},fetch:function(n){function t(){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}((function(){var n=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.nuxtjs.dev/mountains").then((function(n){return n.json()}));case 2:n.mountains=t.sent;case 3:case"end":return t.stop()}}),t)})))()}))}),c=e(56),component=Object(c.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.$fetchState.pending?e("p",[n._v("Fetching mountains...")]):n.$fetchState.error?e("p",[n._v("An error occurred :(")]):e("div",[e("h1",[n._v("Nuxt Mountains")]),n._v(" "),e("ul",n._l(n.mountains,(function(t){return e("li",[n._v(n._s(t.title))])})),0),n._v(" "),e("button",{on:{click:n.$fetch}},[n._v("Refresh")])])}),[],!1,null,null,null);t.default=component.exports}}]);