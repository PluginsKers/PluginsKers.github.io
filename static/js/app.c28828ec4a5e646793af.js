webpackJsonp([1],{"/YHU":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("a",{staticClass:"github-corner",attrs:{href:"https://github.com/PluginsKers/NeteaseCloudMusicWall",target:"_blank","aria-label":"View source on Github"}},[t("svg",{attrs:{viewBox:"0 0 250 250","aria-hidden":"true"}},[t("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),this._v(" "),t("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),this._v(" "),t("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])]),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var s=a("VU/8")({name:"App",mounted:function(){}},o,!1,function(e){a("/YHU")},null,null).exports,i=a("/ocq"),r={name:"Slider",data:function(){return{clientHeight:0,commentIndex:Math.floor(20*Math.random()),startIndex:0,activeElement:null}},mounted:function(){var e=this,t=this.$refs.wrapper;if(t){this.activeElement=t.children[this.startIndex],this.activeElement.classList+=" active",this.actived.apply();var a=null;t.addEventListener("mousedown",function(n){e.clientHeight=document.documentElement.clientHeight,a=n.clientY,t.addEventListener("mousemove",e.mouseMove)}),t.addEventListener("mouseup",function(n){t.removeEventListener("mousemove",e.mouseMove);var o=a-n.clientY;o>=.1*e.clientHeight?(console.log("Next"),e.next()):o<-.1*e.clientHeight&&(console.log("Prev"),e.prev())}),t.addEventListener("mousewheel",this.mouseScroll,!1);var n=null;t.addEventListener("touchstart",function(a){e.clientHeight=document.documentElement.clientHeight,n=a.changedTouches[0].clientY,t.addEventListener("touchmove",e.touchMove)}),t.addEventListener("touchend",function(a){t.removeEventListener("touchmove",e.touchMove);var o=n-a.changedTouches[0].clientY;o>=.2*e.clientHeight?(console.log("Next"),e.next()):o<-.2*e.clientHeight&&(console.log("Prev"),e.prev())})}},methods:{next:function(){this.before.apply(),this.beforeNext.apply(),this.activeElement.nextSibling?(this.activeElement.classList="slide",this.activeElement=this.activeElement.nextSibling,this.activeElement.className+=" active"):Qmsg.warning("这就是今日份温暖咯，愿美好与你环环相扣呀~"),this.actived.apply()},prev:function(){this.before.apply(),this.beforePrev.apply(),this.activeElement.previousSibling?(this.activeElement.classList="slide",this.activeElement=this.activeElement.previousSibling,this.activeElement.className+=" active"):Qmsg.warning("到顶了哦"),this.actived.apply()},before:function(){this.$parent.$refs.player.toggle("pause")},beforeNext:function(){},beforePrev:function(){},actived:function(){var e=this.$parent.list[this.activeElement.getAttribute("index")];e.url=null,console.log("开始加载Player",e),this.$parent.$refs.player.loader(e)},mouseMove:function(e){},mouseScroll:function(e){},touchMove:function(e){e.changedTouches[0].clientY},like:function(e,t){this.$request({url:"/comment/like",params:{id:e,cid:t,t:1,type:0}}).then(function(e){e.data&&200==e.data.code?Qmsg.success("点赞成功"):Qmsg.error("点赞失败")})}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wall"},[a("div",{ref:"wrapper",staticClass:"wrapper"},e._l(e.$parent.list,function(t,n){return a("div",{key:n,staticClass:"slide",attrs:{index:n}},[t.comments[e.commentIndex]?a("div",{staticClass:"slide__cover"},[a("div",{staticClass:"slide__background",style:{background:"url("+t.comments[e.commentIndex].user.avatarUrl+")"}}),e._v(" "),a("div",{staticClass:"slide__overlay"})]):e._e(),e._v(" "),a("div",{staticClass:"header"},[a("font-awesome-icon",{attrs:{icon:"book"}}),e._v("《"),a("span",{staticClass:"ablum"},[e._v(e._s(t.name))]),e._v("》\n      ")],1),e._v(" "),t.comments[e.commentIndex]?a("div",{ref:"commit",refInFor:!0,staticClass:"body"},[a("p",{staticClass:"comment",on:{dblclick:function(a){return e.like(t.id,t.comments[e.commentIndex].commentId)}}},[e._v("\n          "+e._s(t.comments[e.commentIndex].content)+"\n        ")]),e._v(" "),a("span",{staticClass:"author"},[e._v("\n          "+e._s(t.comments[e.commentIndex].user.nickname)+"\n        ")])]):a("div",{staticClass:"body"},[a("p",{staticClass:"comment"},[e._v("他暂时还没有热评呢")])])])}),0)])},staticRenderFns:[]};var c={name:"Player",data:function(){return{audio:null,current:null,status:"pause"}},mounted:function(){},methods:{loader:function(e){var t=this;this.$request({url:"/song/url",params:{id:e.id}}).then(function(a){a.data&&200==a.data.code?(e.url=a.data.data[0].url,console.log(new Audio(e.url)),t.current=e,console.log("Player加载完毕",e),t.toggle("play")):Qmsg.error("播放失败")})},toggle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.audio)switch(e){case"play":this.audio.play(),this.status="pause";break;case"pause":this.audio.pause(),this.status="play";break;default:this.audio.paused?this.toggle("play"):this.toggle("pause")}},canPlay:function(){console.log("音乐已经就绪")},onPlay:function(){console.log("音乐开始播放"),this.audio=document.getElementById("audio"),this.audio.volume=.1},onPause:function(){console.log("音乐暂停播放")},onEnd:function(){console.log("音乐播放完毕")},like:function(e){this.$request({url:"/like",params:{id:e}}).then(function(e){e.data&&200==e.data.code?Qmsg.success("喜欢成功"):Qmsg.error("喜欢失败")})}},watch:{}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"player"},[e.current&&e.current.al?a("div",{on:{dblclick:function(t){return e.like(e.current.id)}}},[a("img",{staticClass:"pic",attrs:{src:e.current.al.picUrl}}),e._v(" "),e.current.url?a("div",{staticClass:"control",on:{click:function(t){return e.toggle()}}},[a("font-awesome-icon",{attrs:{icon:e.status}}),e._v(" "),a("audio",{staticStyle:{display:"none"},attrs:{id:"audio",src:e.current.url||"",controls:"",autoplay:"",loop:""},on:{canplay:e.canPlay,ended:e.onEnd,pause:e.onPause,play:e.onPlay}})],1):e._e(),e._v(" "),a("div",{staticClass:"details"},[a("p",{staticClass:"name"},[e._v(e._s(e.current.name))]),e._v(" "),a("div",{staticClass:"artist"},[e._v(e._s(e.current.ar[0].name))])])]):a("div",{staticClass:"player__overlay"},[e._v("加载中...")])])},staticRenderFns:[]};var d={name:"Index",components:{ComponentSlider:a("VU/8")(r,l,!1,function(e){a("gQEm")},"data-v-69c39fc7",null).exports,ComponentPlayer:a("VU/8")(c,u,!1,function(e){a("bart")},"data-v-651a5112",null).exports},data:function(){return{list:[],loaded:!1}},mounted:function(){var e=this;this.$request({url:"/recommend/songs"}).then(function(t){t.data&&200==t.data.code?e.loader(t.data.data.dailySongs):Qmsg.error("推荐拉取失败-1")})},methods:{loader:function(e){var t=this,a=function(a){var n=e[a],o={id:n.id,name:n.name,al:n.al,ar:n.ar,comments:{}};t.$request({url:"/comment/new",params:{id:n.id,sortType:2,type:0}}).then(function(e){e.data&&200==e.data.code?(o.comments=e.data.data.comments,t.list.push(o),t.loaded=!0):(Qmsg.error("热评拉取失败"+n.id),o.comments={})})};for(var n in e)a(n)}},watch:{current:function(e){}}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[e.loaded?a("component-slider"):e._e(),e._v(" "),e.loaded?a("component-player",{ref:"player"}):e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.loaded,expression:"!loaded"}],staticClass:"loading"},[e._v("页面加载中...")])],1)},staticRenderFns:[]};var p=a("VU/8")(d,m,!1,function(e){a("oKlt")},"data-v-e10620aa",null).exports,v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ul",{staticClass:"tabs"},[a("li",{staticClass:"phone",on:{click:function(t){e.type="phone"}}},[e._v("手机登录")]),e._v(" "),a("li",{staticClass:"email",on:{click:function(t){e.type="email"}}},[e._v("邮箱登录")]),e._v(" "),a("li",{staticClass:"qr",on:{click:function(t){e.type="qr"}}},[e._v("二维码登录")])]),e._v(" "),a("div",{staticClass:"login"},[a("div",{directives:[{name:"show",rawName:"v-show",value:"phone"==e.type,expression:"type == 'phone'"}],staticClass:"phone"},[a("div",{staticClass:"input-group"},[a("label",{attrs:{for:"number"}},[e._v("手机号")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone.phone,expression:"form.phone.phone"}],attrs:{id:"number",type:"text",placeholder:"请输入手机号码(+86)"},domProps:{value:e.form.phone.phone},on:{input:function(t){t.target.composing||e.$set(e.form.phone,"phone",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-group"},[a("label",{attrs:{for:"password"}},[e._v("密码")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone.password,expression:"form.phone.password"}],attrs:{id:"password",type:"password",placeholder:"请输入密码"},domProps:{value:e.form.phone.password},on:{input:function(t){t.target.composing||e.$set(e.form.phone,"password",t.target.value)}}})])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"email"==e.type,expression:"type == 'email'"}],staticClass:"email"},[a("div",{staticClass:"input-group"},[a("label",{attrs:{for:"email"}},[e._v("邮箱")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email.email,expression:"form.email.email"}],attrs:{id:"email",type:"email",placeholder:"请输入邮箱，163网易邮箱"},domProps:{value:e.form.email.email},on:{input:function(t){t.target.composing||e.$set(e.form.email,"email",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-group"},[a("label",{attrs:{for:"password"}},[e._v("密码")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email.password,expression:"form.email.password"}],attrs:{id:"password",type:"password",placeholder:"请输入密码"},domProps:{value:e.form.email.password},on:{input:function(t){t.target.composing||e.$set(e.form.email,"password",t.target.value)}}})])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"qr"==e.type,expression:"type == 'qr'"}],staticClass:"qr"},[e._v("二维码登录")]),e._v(" "),a("div",{staticClass:"submit",on:{click:e.submit}},[e._v("提交")])])])},staticRenderFns:[]};var h=a("VU/8")({name:"Login",data:function(){return{type:"phone",form:{phone:{phone:null,password:null},email:{email:null,password:null},qr:{}}}},methods:{submit:function(){this.$store.dispatch("login",{type:this.type,data:this.form[this.type]})}}},v,!1,function(e){a("kYaf")},"data-v-433c1994",null).exports;n.a.use(i.a);var f=new i.a({routes:[{path:"/",name:"Index",meta:{requireAuth:!0},component:p},{path:"/login",name:"Login",component:h}]}),g=a("mvHQ"),_=a.n(g),w=a("NYxO"),y=a("//Fk"),C=a.n(y),b=a("mtWM"),k=a.n(b).a.create({method:"post",baseURL:"https://www.52craft.cc:4000",timeout:4e3,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"},withCredentials:!0,transformRequest:[function(e){var t="";for(var a in e)t+=a+"="+e[a]+"&";return t}]});k.interceptors.request.use(function(e){return E.state.cookie&&(e.data?e.data.cookie=E.state.cookie:e.params&&(e.params.cookie=encodeURIComponent(E.state.cookie))),e},function(e){return C.a.reject(e)}),k.interceptors.response.use(function(e){return e},function(e){return C.a.reject(e)});var x=k;n.a.use(w.a);var E=new w.a.Store({state:{logged:!!localStorage.getItem("_c"),cookie:localStorage.getItem("_c")?JSON.parse(localStorage.getItem("_c")):null,profile:{},token:null},mutations:{logout:function(e){e.logged=!1,e.cookie=null,localStorage.setItem("_c",null)}},actions:{login:function(e,t){var a=this;if(this.state.logged)return f.push("/"),Qmsg.warning("您已经登录了");switch(t.type){case"phone":t.data?x({url:"/login/cellphone",data:{phone:t.data.phone,password:t.data.password}}).then(function(e){e.data&&200==e.data.code?(a.state.cookie=e.data.cookie,localStorage.setItem("_c",_()(e.data.cookie)),a.state.profile=e.data.profile,a.state.token=e.data.token,a.state.logged=!0,f.push("/"),Qmsg.success("登录成功")):Qmsg.success("登录失败-1")}):Qmsg.error("登录失败-2");break;case"email":t.data?x({url:"/login",data:{email:t.data.email,password:t.data.password}}).then(function(e){e.data&&200==e.data.code?(a.state.cookie=e.data.cookie,localStorage.setItem("_c",_()(e.data.cookie)),a.state.logged=!0,f.push("/"),Qmsg.success("登录成功")):Qmsg.success("登录失败-1")}):Qmsg.error("登录失败-2");break;case"qr":Qmsg.error("开发中");break;default:Qmsg.error("参数错误")}}}}),I=a("hPTI"),L=a("D/Gj"),$=a("YbJT");I.c.add($.a,$.c,$.d,$.b),n.a.component("font-awesome-icon",L.a),n.a.prototype.$request=x,n.a.config.productionTip=!1,f.beforeEach(function(e,t,a){e.matched.some(function(e){return e.meta.requireAuth})?E.state.logged?a():a("/login"):a()}),window.addEventListener("storage",function(e){localStorage.setItem(e.key,e.oldValue)}),new n.a({el:"#app",store:E,router:f,components:{App:s},template:"<App/>"})},bart:function(e,t){},gQEm:function(e,t){},kYaf:function(e,t){},oKlt:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.c28828ec4a5e646793af.js.map