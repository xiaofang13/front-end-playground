(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{2060:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=o(e("945c"));function o(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{trailerList:[],keywords:"",page:1,pageSize:15,totalPages:1}},onLoad:function(){var t=this;t.requestData()},methods:{requestData:function(){var a=this;t.showLoading({title:"正在搜索...",mask:!0}),t.showNavigationBarLoading(),t.request({url:"".concat(n.default.serverURL,"/search/list?&qq=843002185&page=").concat(a.page,"&pageSize=").concat(a.pageSize,"&keywords=").concat(a.keywords),method:"POST",success:function(t){var e=t.data,n=(e.status,e.data);console.log(n),200===t.data.status&&(a.trailerList=a.trailerList.concat(n.rows),a.totalPages=n.total)},fail:function(){},complete:function(){t.hideNavigationBarLoading(),t.hideLoading()}})},searchMovie:function(t){var a=this,e=t.detail.value;a.keywords=e,a.trailerList=[],a.page=1,a.requestData()},showTrailer:function(a){var e=a.currentTarget.dataset.trailerId;console.log(e),t.navigateTo({url:"../movie/movie?trailerId="+e})}},onReachBottom:function(){var t=this;t.page+=1,t.page>t.totalPages||t.requestData()}};a.default=r}).call(this,e("543d")["default"])},"24fc":function(t,a,e){"use strict";var n=e("d68e"),o=e.n(n);o.a},"6ebc":function(t,a,e){"use strict";e.r(a);var n=e("2060"),o=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,function(){return n[t]})}(r);a["default"]=o.a},7229:function(t,a,e){"use strict";(function(t){e("1835"),e("921b");n(e("66fd"));var a=n(e("d753"));function n(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("543d")["createPage"])},"8f1f":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c},o=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return o})},d68e:function(t,a,e){},d753:function(t,a,e){"use strict";e.r(a);var n=e("8f1f"),o=e("6ebc");for(var r in o)"default"!==r&&function(t){e.d(a,t,function(){return o[t]})}(r);e("24fc");var i=e("2877"),u=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,"df163a6a",null);a["default"]=u.exports}},[["7229","common/runtime","common/vendor"]]]);