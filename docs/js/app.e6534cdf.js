(function(e){function t(t){for(var r,l,u=t[0],c=t[1],s=t[2],p=0,d=[];p<u.length;p++)l=u[p],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);i&&i(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/twitchstream/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var i=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},5552:function(e,t,n){"use strict";n("cccd")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("JeopardyBoard",{attrs:{api:"http://jservice.io/api/category?id="}})],1)},a=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{display:"block"}},[e._v(" $"+e._s(e.dollaramount)+" ")]),e._l(6,(function(e){return n("div",{key:e,staticClass:"rows"},[n("HelloWorld",{attrs:{typeofjeopardy:"single"}})],1)}))],2)},u=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.clues.length>0?n("div",{staticClass:"hello"},[n("h1",{staticClass:"boxcss"},[e._v(e._s(e.category))]),e._l(e.clues,(function(t,r){return n("div",{key:t.message},[t.question?n("div",{staticClass:"boxcss"},[n("h2",{staticClass:"cluevalue"},["shown"!=e.cluetracker[t.value]?n("button",{attrs:{disabled:"answered"==e.cluetracker[t.value]},on:{click:function(n){return e.flipCard(t.value)}}},[e._v(" $"+e._s(t.value)+" ")]):e._e()]),"shown"==e.cluetracker[t.value]?n("div",[n("div",[e._v(e._s(t.question))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input[r],expression:"input[index]"}],domProps:{value:e.input[r]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.checkAnswer(r)},input:function(t){t.target.composing||e.$set(e.input,r,t.target.value)}}}),t.message?n("div",[e._v(e._s(t.message))]):e._e()]):e._e()]):e._e()])}))],2):e._e()},s=[],i=(n("4de4"),n("bc3a")),p=n.n(i),d={name:"HelloWorld",data:function(){return{clue:"",clues:[],input:[],message:"",category:"",cluetracker:{}}},props:{typeofjeopardy:String},mounted:function(){},methods:{flipCard:function(e){this.$set(this.cluetracker,e,"shown")},checkAnswer:function(e){var t=this.input[e].toLowerCase(),n=this.clues[e].answer.toLowerCase();console.log(t),console.log(n),t==n?(this.$set(this.cluetracker,this.clues[e].value,"answered"),alert("Correct!"),this.$parent.dollaramount+=this.clues[e].value):(this.$parent.dollaramount-=this.clues[e].value,this.$set(this.cluetracker,this.clues[e].value,"answered"),alert("Wrong!")),console.log(this.clues[e])},getJeopardyClues:function(){var e=this,t=parseInt(100*Math.random());p.a.get(this.$parent.api+t).then((function(t){var n,r=t.data.clues;"single"==e.typeofjeopardy&&(n=r.filter((function(e){return 500==e["value"]}))),console.log(r),console.log(n.length);var o=Math.floor(Math.random()*(n.length-1)+0),a=r[o]["airdate"],l=r.filter((function(e){return e["airdate"]==a}));e.clues=l,e.category=t.data.title})).catch((function(e){console.log(e)})).then((function(){}))}},created:function(){this.getJeopardyClues()}},f=d,h=(n("e64c"),n("2877")),v=Object(h["a"])(f,c,s,!1,null,"7ee2afb3",null),g=v.exports,y={components:{HelloWorld:g},props:{api:String},data:function(){return{dollaramount:0}}},m=y,b=(n("5552"),Object(h["a"])(m,l,u,!1,null,null,null)),_=b.exports,w={name:"App",components:{JeopardyBoard:_}},k=w,j=(n("034f"),Object(h["a"])(k,o,a,!1,null,null,null)),O=j.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(O)}}).$mount("#app")},"766b":function(e,t,n){},"85ec":function(e,t,n){},cccd:function(e,t,n){},e64c:function(e,t,n){"use strict";n("766b")}});
//# sourceMappingURL=app.e6534cdf.js.map