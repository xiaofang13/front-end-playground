(function(e){function n(n){for(var o,r,c=n[0],s=n[1],u=n[2],g=0,f=[];g<c.length;g++)r=c[g],t[r]&&f.push(t[r][0]),t[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);l&&l(n);while(f.length)f.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,n=0;n<i.length;n++){for(var a=i[n],o=!0,r=1;r<a.length;r++){var s=a[r];0!==t[s]&&(o=!1)}o&&(i.splice(n--,1),e=c(c.s=a[0]))}return e}var o={},t={index:0},i=[];function r(e){return c.p+"static/js/"+({"pages-cover-cover":"pages-cover-cover","pages-index-index":"pages-index-index","pages-me-me":"pages-me-me","pages-meInfo-meInfo":"pages-meInfo-meInfo","pages-meface-meface":"pages-meface-meface","pages-movie-movie":"pages-movie-movie","pages-registLogin-registLogin":"pages-registLogin-registLogin","pages-search-search":"pages-search-search"}[e]||e)+"."+{"pages-cover-cover":"edbe1522","pages-index-index":"7a83ee5f","pages-me-me":"65f2f79c","pages-meInfo-meInfo":"6a045533","pages-meface-meface":"aa036f03","pages-movie-movie":"90eced32","pages-registLogin-registLogin":"e05ced4d","pages-search-search":"cf7c3183"}[e]+".js"}function c(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var n=[],a=t[e];if(0!==a)if(a)n.push(a[2]);else{var o=new Promise(function(n,o){a=t[e]=[n,o]});n.push(a[2]=o);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=r(e),i=function(n){s.onerror=s.onload=null,clearTimeout(u);var a=t[e];if(0!==a){if(a){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,r=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");r.type=o,r.request=i,a[1](r)}t[e]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:s})},12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(n)},c.m=e,c.c=o,c.d=function(e,n,a){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(a,o,function(n){return e[n]}.bind(null,o));return a},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var g=0;g<s.length;g++)n(s[g]);var l=u;i.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("138a")},"138a":function(e,n,a){"use strict";var o=a("288e"),t=o(a("cebc"));a("cadf"),a("551c"),a("097d"),a("1835"),a("1c31"),a("921b");var i=o(a("e143")),r=o(a("5397"));i.default.config.productionTip=!1,i.default.prototype.getGlobalUser=function(){var e=uni.getStorageSync("globalUser");return null!=e&&""!=e&&void 0!=e?e:null},r.default.mpType="app";var c=new i.default((0,t.default)({},r.default));c.$mount()},1835:function(e,n,a){"use strict";(function(e){var n=a("288e"),o=n(a("5176")),t=n(a("e143"));e["________"]=!0,delete e["________"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"超英预告",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"},tabBar:{color:"#bfbfbf",selectedColor:"#515151",borderStyle:"black",backgroundColor:"#ffffff",list:[{pagePath:"pages/index/index",text:"首页",iconPath:"static/tabBarIco/index.png",selectedIconPath:"static/tabBarIco/index_sel.png",redDot:!1,badge:""},{pagePath:"pages/search/search",text:"搜索",iconPath:"static/tabBarIco/search.png",selectedIconPath:"static/tabBarIco/search_sel.png",redDot:!1,badge:""},{pagePath:"pages/me/me",text:"我的",iconPath:"static/tabBarIco/me.png",selectedIconPath:"static/tabBarIco/me_sel.png",redDot:!1,badge:""}]}},e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:3e3},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e3,connectSocket:6e3,uploadFile:6e3,downloadFile:6e3},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},t.default.component("pages-index-index",function(e){var n={component:a.e("pages-index-index").then(function(){return e(a("eacd"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-search-search",function(e){var n={component:a.e("pages-search-search").then(function(){return e(a("d753"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-me-me",function(e){var n={component:a.e("pages-me-me").then(function(){return e(a("e307"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-movie-movie",function(e){var n={component:a.e("pages-movie-movie").then(function(){return e(a("fbbf"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-cover-cover",function(e){var n={component:a.e("pages-cover-cover").then(function(){return e(a("2d1d"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-registLogin-registLogin",function(e){var n={component:a.e("pages-registLogin-registLogin").then(function(){return e(a("1c8a"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-meInfo-meInfo",function(e){var n={component:a.e("pages-meInfo-meInfo").then(function(){return e(a("9134"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-meface-meface",function(e){var n={component:a.e("pages-meface-meface").then(function(){return e(a("13aa"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:(0,o.default)({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{enablePullDownRefresh:!0,titleNView:!1})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/search/search",component:{render:function(e){return e("Page",{props:(0,o.default)({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"搜索预告片"})},[e("pages-search-search",{slot:"page"})])}},meta:{id:2,name:"pages-search-search",isNVue:!1,pagePath:"pages/search/search",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/me/me",component:{render:function(e){return e("Page",{props:(0,o.default)({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTextStyle:"white",navigationBarTitleText:"我的",navigationBarBackgroundColor:"#ffd655",titleNView:!1})},[e("pages-me-me",{slot:"page"})])}},meta:{id:3,name:"pages-me-me",isNVue:!1,pagePath:"pages/me/me",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/movie/movie",component:{render:function(e){return e("Page",{props:(0,o.default)({},__uniConfig.globalStyle,{titleNView:{type:"transparent",buttons:[{type:"share"},{type:"home"}]}})},[e("pages-movie-movie",{slot:"page"})])}},meta:{name:"pages-movie-movie",isNVue:!1,pagePath:"pages/movie/movie",windowTop:0}},{path:"/pages/cover/cover",component:{render:function(e){return e("Page",{props:(0,o.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"封面",navigationBarBackgroundColor:"#000000",navigationBarTextStyle:"white"})},[e("pages-cover-cover",{slot:"page"})])}},meta:{name:"pages-cover-cover",isNVue:!1,pagePath:"pages/cover/cover",windowTop:44}},{path:"/pages/registLogin/registLogin",component:{render:function(e){return e("Page",{props:(0,o.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"注册登录"})},[e("pages-registLogin-registLogin",{slot:"page"})])}},meta:{name:"pages-registLogin-registLogin",isNVue:!1,pagePath:"pages/registLogin/registLogin",windowTop:44}},{path:"/pages/meInfo/meInfo",component:{render:function(e){return e("Page",{props:(0,o.default)({},__uniConfig.globalStyle,{navigationBarTextStyle:"white",navigationBarTitleText:"我的",navigationBarBackgroundColor:"#ffd655"})},[e("pages-meInfo-meInfo",{slot:"page"})])}},meta:{name:"pages-meInfo-meInfo",isNVue:!1,pagePath:"pages/meInfo/meInfo",windowTop:44}},{path:"/pages/meface/meface",component:{render:function(e){return e("Page",{props:(0,o.default)({},__uniConfig.globalStyle,{navigationBarTextStyle:"white",navigationBarTitleText:"头像上传",navigationBarBackgroundColor:"#000000"})},[e("pages-meface-meface",{slot:"page"})])}},meta:{name:"pages-meface-meface",isNVue:!1,pagePath:"pages/meface/meface",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,a("c8ba"))},"37cb":function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={appid:""};n.default=o},4009:function(e,n,a){"use strict";var o=a("cbc4"),t=a.n(o);t.a},4806:function(e,n,a){n=e.exports=a("2350")(!1),n.push([e.i,"\n\n\n\n\n\n\n/*每个页面公共css */.page{width:100%;height:100%;background-color:#f7f7f7}.page-block{background-color:#fff}",""])},5397:function(e,n,a){"use strict";a.r(n);var o=a("e3ae"),t=a("dad8");for(var i in t)"default"!==i&&function(e){a.d(n,e,function(){return t[e]})}(i);a("4009");var r=a("2877"),c=Object(r["a"])(t["default"],o["a"],o["b"],!1,null,null,null);n["default"]=c.exports},a507:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={};n.default=o},cbc4:function(e,n,a){var o=a("4806");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var t=a("4f06").default;t("24be2277",o,!0,{sourceMap:!1,shadowMode:!1})},dad8:function(e,n,a){"use strict";a.r(n);var o=a("a507"),t=a.n(o);for(var i in o)"default"!==i&&function(e){a.d(n,e,function(){return o[e]})}(i);n["default"]=t.a},e3ae:function(e,n,a){"use strict";var o=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},t=[];a.d(n,"a",function(){return o}),a.d(n,"b",function(){return t})},f655:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={pages:{"pages/index/index":{enablePullDownRefresh:!0,titleNView:!1},"pages/search/search":{navigationBarTitleText:"搜索预告片"},"pages/me/me":{navigationBarTextStyle:"white",navigationBarTitleText:"我的",navigationBarBackgroundColor:"#ffd655",titleNView:!1},"pages/movie/movie":{titleNView:{type:"transparent",buttons:[{type:"share"},{type:"home"}]}},"pages/cover/cover":{navigationBarTitleText:"封面",navigationBarBackgroundColor:"#000000",navigationBarTextStyle:"white"},"pages/registLogin/registLogin":{navigationBarTitleText:"注册登录"},"pages/meInfo/meInfo":{navigationBarTextStyle:"white",navigationBarTitleText:"我的",navigationBarBackgroundColor:"#ffd655"},"pages/meface/meface":{navigationBarTextStyle:"white",navigationBarTitleText:"头像上传",navigationBarBackgroundColor:"#000000"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"超英预告",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}};n.default=o}});