(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/movie/movie"],{"36b6":function(t,e,r){"use strict";var a=r("5917"),o=r.n(a);o.a},5917:function(t,e,r){},"602e":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];r.d(e,"a",function(){return a}),r.d(e,"b",function(){return o})},8315:function(t,e,r){"use strict";r.r(e);var a=r("bac7"),o=r.n(a);for(var n in a)"default"!==n&&function(t){r.d(e,t,function(){return a[t]})}(n);e["default"]=o.a},"9e17":function(t,e,r){"use strict";(function(t){r("1835"),r("921b");a(r("66fd"));var e=a(r("fbbf"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("543d")["createPage"])},bac7:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(r("945c"));function o(t){return t&&t.__esModule?t:{default:t}}var n=function(){return r.e("components/trailerStars").then(r.bind(null,"e458"))},i={data:function(){return{trailerId:"",trailerInfo:{},plotPicsArray:[],directorArray:[],actorArray:[]}},onReady:function(){this.videoContext=t.createVideoContext("myTrailer")},onHide:function(){this.videoContext.pause()},onShow:function(){this.videoContext&&this.videoContext.play()},onLoad:function(e){t.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#000000"});var r=this;r.trailerId=e.trailerId,r.requestMovieInfo(),r.requestDirectorInfo(),r.requestActorInfo()},onShareAppMessage:function(t){var e=this;return{title:e.trailerInfo.name,path:"/pages/movie/movie?trailerId="+e.trailerInfo.id}},onNavigationBarButtonTap:function(e){var r=this,a=e.index;console.log("tap button:"+a);var o=r.trailerInfo,n=o.id,i=o.name,s=o.cover,u=(o.poster,o.plotDesc);t.share({provider:"weixin",scene:"WXSenceTimeline",type:0,href:"http://www.imovietrailer.com/#/pages/movie/movie?trailerId="+n,title:"超英预告：《"+i+"》",summary:u,imageUrl:s,success:function(t){console.log("分享成功"+t)}})},methods:{lookMe:function(e){var r=this,a=e.currentTarget.dataset.imageindex,o=r.plotPicsArray;t.previewImage({urls:o,current:o[a]})},lookStaffs:function(e){for(var r=this,a=e.currentTarget.dataset.staffindex,o=r.directorArray.concat(r.actorArray),n=[],i=0;i<o.length;i++){var s=o[i].photo;n.push(s)}t.previewImage({urls:n,current:n[a]})},requestMovieInfo:function(){var e=this;t.showLoading({title:"加载中...",mask:!1}),t.showNavigationBarLoading(),t.request({url:a.default.serverURL+"/search/trailer/"+e.trailerId+"?&qq=843002185",method:"POST",data:{},success:function(t){if(200==t.data.status){var r=t.data.data;console.log(r),e.trailerInfo=r;var a=JSON.parse(r.plotPics);e.plotPicsArray=a}},fail:function(){},complete:function(){t.hideNavigationBarLoading(),t.hideLoading()}})},requestDirectorInfo:function(){var e=this;t.request({url:a.default.serverURL+"/search/staff/"+e.trailerId+"/1?qq=843002185",method:"POST",data:{},success:function(t){console.log(t.data),200==t.data.status&&(e.directorArray=t.data.data)}})},requestActorInfo:function(){var e=this;t.request({url:a.default.serverURL+"/search/staff/"+e.trailerId+"/2?qq=843002185",method:"POST",data:{},success:function(t){console.log(t.data),200==t.data.status&&(e.actorArray=t.data.data)}})}},components:{trailerStars:n}};e.default=i}).call(this,r("543d")["default"])},fbbf:function(t,e,r){"use strict";r.r(e);var a=r("602e"),o=r("8315");for(var n in o)"default"!==n&&function(t){r.d(e,t,function(){return o[t]})}(n);r("36b6");var i=r("2877"),s=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,"06a229a4",null);e["default"]=s.exports}},[["9e17","common/runtime","common/vendor"]]]);