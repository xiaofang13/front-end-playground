(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/movie/movie"],{"36b6":function(e,t,a){"use strict";var r=a("5917"),o=a.n(r);o.a},5917:function(e,t,a){},"602e":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},o=[];a.d(t,"a",function(){return r}),a.d(t,"b",function(){return o})},8315:function(e,t,a){"use strict";a.r(t);var r=a("bac7"),o=a.n(r);for(var n in r)"default"!==n&&function(e){a.d(t,e,function(){return r[e]})}(n);t["default"]=o.a},"9e17":function(e,t,a){"use strict";(function(e){a("1835"),a("921b");r(a("66fd"));var t=r(a("fbbf"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},bac7:function(e,t,a){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("945c"));function n(e){return e&&e.__esModule?e:{default:e}}var i=function(){return a.e("components/trailerStars").then(a.bind(null,"e458"))},s={data:function(){return{trailerId:"",trailerInfo:{},plotPicsArray:[],directorArray:[],actorArray:[]}},onReady:function(){this.videoContext=e.createVideoContext("myTrailer")},onHide:function(){this.videoContext.pause()},onShow:function(){this.videoContext&&this.videoContext.play()},onLoad:function(t){e.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#000000"});var a=this;a.trailerId=t.trailerId,a.requestMovieInfo(),a.requestDirectorInfo(),a.requestActorInfo()},onShareAppMessage:function(e){var t=this;return{title:t.trailerInfo.name,path:"/pages/movie/movie?trailerId="+t.trailerInfo.id}},onNavigationBarButtonTap:function(t){var a=this,o=t.index;console.log(r("tap button:"+o," at pages/movie/movie.vue:131"));var n=a.trailerInfo,i=n.id,s=n.name,u=n.cover,c=(n.poster,n.plotDesc);e.share({provider:"weixin",scene:"WXSenceTimeline",type:0,href:"http://www.imovietrailer.com/#/pages/movie/movie?trailerId="+i,title:"超英预告：《"+s+"》",summary:c,imageUrl:u,success:function(e){console.log(r("分享成功"+e," at pages/movie/movie.vue:149"))}})},methods:{lookMe:function(t){var a=this,r=t.currentTarget.dataset.imageindex,o=a.plotPicsArray;e.previewImage({urls:o,current:o[r]})},lookStaffs:function(t){for(var a=this,r=t.currentTarget.dataset.staffindex,o=a.directorArray.concat(a.actorArray),n=[],i=0;i<o.length;i++){var s=o[i].photo;n.push(s)}e.previewImage({urls:n,current:n[r]})},requestMovieInfo:function(){var t=this;e.showLoading({title:"加载中...",mask:!1}),e.showNavigationBarLoading(),e.request({url:o.default.serverURL+"/search/trailer/"+t.trailerId+"?&qq=843002185",method:"POST",data:{},success:function(e){if(200==e.data.status){var a=e.data.data;console.log(r(a," at pages/movie/movie.vue:197")),t.trailerInfo=a;var o=JSON.parse(a.plotPics);t.plotPicsArray=o}},fail:function(){},complete:function(){e.hideNavigationBarLoading(),e.hideLoading()}})},requestDirectorInfo:function(){var t=this;e.request({url:o.default.serverURL+"/search/staff/"+t.trailerId+"/1?qq=843002185",method:"POST",data:{},success:function(e){console.log(r(e.data," at pages/movie/movie.vue:219")),200==e.data.status&&(t.directorArray=e.data.data)}})},requestActorInfo:function(){var t=this;e.request({url:o.default.serverURL+"/search/staff/"+t.trailerId+"/2?qq=843002185",method:"POST",data:{},success:function(e){console.log(r(e.data," at pages/movie/movie.vue:233")),200==e.data.status&&(t.actorArray=e.data.data)}})}},components:{trailerStars:i}};t.default=s}).call(this,a("6e42")["default"],a("0de9")["default"])},fbbf:function(e,t,a){"use strict";a.r(t);var r=a("602e"),o=a("8315");for(var n in o)"default"!==n&&function(e){a.d(t,e,function(){return o[e]})}(n);a("36b6");var i=a("2877"),s=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,"06a229a4",null);t["default"]=s.exports}},[["9e17","common/runtime","common/vendor"]]]);