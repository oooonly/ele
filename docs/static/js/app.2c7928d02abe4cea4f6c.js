webpackJsonp([1],{"/UOq":function(t,s){},"4HgD":function(t,s){},"51gt":function(t,s){},DkWj:function(t,s){},GR9a:function(t,s){},LL7x:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a=e("/ocq"),n=e("mtWM"),o=e.n(n),l=e("woOf"),r=e.n(l),c={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,i=Math.floor(s),a=0;a<i;a++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}}},v={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"star",class:this.starType},this._l(this.itemClasses,function(t,e){return s("span",{key:e,staticClass:"star-item",class:t})}),0)},staticRenderFns:[]};var d=e("VU/8")(c,v,!1,function(t){e("jZ2Z")},null,null).exports,u={props:{seller:{type:Object}},data:function(){return{detailShow:!1}},created:function(){this.classMap=["decrease","discount","guarantee","invoice","special"]},methods:{showDetail:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}},components:{star:d}},p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrap"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,width:"64",height:"64",alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n        "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n      ")]),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.showDetail}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrap",on:{click:t.showDetail}},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%",alt:""}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrap clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrap"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{key:i,staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[i].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[i].description))])])}),0):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:t.hideDetail}},[e("i",{staticClass:"icon-close"},[t._v("✖")])])])])],1)},staticRenderFns:[]};var h={name:"App",data:function(){return{seller:{id:(t={},(s=window.location.search.match(/[?&][^?&]+=[^?&/]+/g))&&s.forEach(function(s){var e=s.substring(1).split("="),i=decodeURIComponent(e[0]),a=decodeURIComponent(e[1]);t[i]=a}),t).id}};var t,s},created:function(){var t=this;this.$axios.get("/data.json?id="+this.seller.id).then(function(s){t.seller=r()({},t.seller,s.data.seller),console.log(t.seller)}).catch(function(t){console.error(t)})},components:{AppHeader:e("VU/8")(u,p,!1,function(t){e("4HgD")},null,null).exports}},_={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("AppHeader",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab border-1px"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评价")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),e("keep-alive",[e("router-view",{attrs:{seller:t.seller}})],1)],1)},staticRenderFns:[]};var f=e("VU/8")(h,_,!1,function(t){e("vh6+")},null,null).exports,C=e("GQaK"),g={props:{food:{type:Object}},methods:{addCart:function(){this.food.count?this.food.count++:i.a.set(this.food,"count",1)},decreaseCart:function(){this.food.count--}}},m={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count,expression:"food.count"}],staticClass:"cart-decrease icon-remove_circle_outline",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.decreaseCart(s)}}},[e("div",{staticClass:"inner"},[t._v("-")])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count,expression:"food.count"}],staticClass:"cart-count icon-add_circle"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"cart-add",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addCart(s)}}},[t._v("+")])],1)},staticRenderFns:[]};var w=e("VU/8")(g,m,!1,function(t){e("GR9a")},null,null).exports,y={props:{selectFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},data:function(){return{listShow:!1,selectFoodsBak:this.selectFoods}},methods:{toggleList:function(){var t=this;this.selectFoods.length?(this.listShow=!this.listShow,this.listShow&&this.$nextTick(function(){t.scroll||(t.scroll=new C.a(t.$refs.listContent,{click:!0}))})):this.listShow=!1},empty:function(){this.selectFoods.forEach(function(t){t.count=0}),this.listShow=!1}},components:{cartcontrol:w},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){return 0===this.totalPrice?"￥"+this.minPrice+"起送":this.totalPrice<this.minPrice?"还差"+(this.minPrice-this.totalPrice)+"起送":"去结算"},payClass:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"}}},x={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content"},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrap",on:{click:t.toggleList}},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart",class:{highlight:t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount,expression:"totalCount"}],staticClass:"num"},[t._v(t._s(t.totalCount>99?99:t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice))]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right"},[e("div",{staticClass:"pay",class:t.payClass},[t._v(t._s(t.payDesc))])])]),t._v(" "),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s,i){return e("li",{key:i,staticClass:"food border-1px"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrap"},[e("cartcontrol",{attrs:{food:s}})],1)])}),0)])])])],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask",on:{click:t.toggleList}})])},staticRenderFns:[]};var k=e("VU/8")(y,x,!1,function(t){e("51gt")},null,null).exports,T={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"split"})},staticRenderFns:[]};var b=e("VU/8")({},T,!1,function(t){e("DkWj")},null,null).exports,S={props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:2},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},data:function(){return{selectTypeBak:this.selectType,onlyContentBak:this.onlyContent}},watch:{selectType:function(t){this.selectTypeBak=t},selectTypeBak:function(t){this.$emit("selectTypeChange",t)},onlyContent:function(t){this.onlyContentBak=t},onlyContentBak:function(t){this.$emit("onlyContentChange",t)}},methods:{select:function(t,s){s._constructed&&(this.selectTypeBak=t)},toggleContent:function(t){t._constructed&&(this.onlyContentBak=!this.onlyContentBak)}},computed:{positives:function(){return this.ratings.filter(function(t){return 0===t.rateType})},negatives:function(){return this.ratings.filter(function(t){return 1===t.rateType})}}},F={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratingselect"},[e("div",{staticClass:"rating-type border-1px"},[e("span",{staticClass:"block positive",class:{active:2===t.selectTypeBak},on:{click:function(s){return t.select(2,s)}}},[t._v(t._s(t.desc.all)),e("em",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("span",{staticClass:"block positive",class:{active:0===t.selectTypeBak},on:{click:function(s){return t.select(0,s)}}},[t._v(t._s(t.desc.positive)),e("em",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),t._v(" "),e("span",{staticClass:"block negative",class:{active:1===t.selectTypeBak},on:{click:function(s){return t.select(1,s)}}},[t._v(t._s(t.desc.negative)),e("em",{staticClass:"count"},[t._v(t._s(t.negatives.length))])])]),t._v(" "),e("div",{staticClass:"switch",class:{on:!0===t.onlyContentBak},on:{click:t.toggleContent}},[e("span",{staticClass:"icon-check_circle"}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},staticRenderFns:[]};var $=e("VU/8")(S,F,!1,function(t){e("/UOq")},null,null).exports;function N(t,s){/(y+)/.test(s)&&(s=s.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in e)if(new RegExp("("+i+")").test(s)){var a=e[i]+"";s=s.replace(RegExp.$1,1===RegExp.$1.length?a:P(a))}return s}function P(t){return("00"+t).substr(t.length)}var E={props:{food:{type:Object}},data:function(){return{showFlag:!1,selectType:2,onlyContent:!1,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},components:{cartcontrol:w,split:b,ratingselect:$},methods:{show:function(){var t=this;this.showFlag=!0,this.selectType=2,this.onlyContent=!1,this.$nextTick(function(){if(!t.scroll)new C.a(t.$refs.food,{click:!0})})},hide:function(){this.showFlag=!1},addFirst:function(t){t._constructed&&i.a.set(this.food,"count",1)},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)},selectTypeChange:function(t){this.selectType=t},onlyContentChange:function(t){this.onlyContent=t}},filters:{formatDate:function(t){return N(new Date(t),"yyyy-MM-dd hh:mm")}}},M={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],ref:"food",staticClass:"food"},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"img-header"},[e("img",{attrs:{src:t.food.image,alt:""}}),t._v(" "),e("div",{staticClass:"back",on:{click:t.hide}},[e("i",{staticClass:"icon-arrow_lift"})])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.count)+"份")]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrap"},[e("cartcontrol",{attrs:{food:t.food}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0===t.food.count,expression:"!food.count || food.count === 0"}],staticClass:"buy",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addFirst(s)}}},[t._v("加入购物车")])]),t._v(" "),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[t._v("商品信息")]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("ratingselect",{attrs:{selectType:t.selectType,onlyContent:t.onlyContent,desc:t.desc,ratings:t.food.ratings},on:{selectTypeChange:t.selectTypeChange,onlyContentChange:t.onlyContentChange}}),t._v(" "),e("div",{staticClass:"rating-wrap"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings&&t.food.ratings.length,expression:"food.ratings && food.ratings.length"}]},t._l(t.food.ratings,function(s,i){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType, rating.text)"}],key:i,staticClass:"rating-item border-1px"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("img",{staticClass:"avatar",attrs:{src:s.avatar,width:"12",height:"12",alt:""}})]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))]),t._v(" "),e("p",{staticClass:"text"},[e("span",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v(t._s(s.text)+"\n            ")])])}),0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.ratings||!t.food.ratings.length,expression:"!food.ratings || !food.ratings.length"}],staticClass:"no-rating"},[t._v("暂无评论")])])],1)],1)])},staticRenderFns:[]};var R=e("VU/8")(E,M,!1,function(t){e("O8N9")},null,null).exports,D={props:{seller:{type:Object}},data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},components:{shopcart:k,cartcontrol:w,food:R},created:function(){var t=this;this.classMap=["decrease","discount","guarantee","invoice","special"],this.$axios.get("data.json").then(function(s){t.goods=s.data.goods,t.$nextTick(function(){t._initScroll(),t._calculateHeight()})})},methods:{_initScroll:function(){var t=this;this.menuScroll=new C.a(this.$refs.menuWrap,{click:!0}),this.foodsScroll=new C.a(this.$refs.foodsWrap,{click:!0,probeType:3}),this.foodsScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.foodsWrap.getElementsByClassName("food-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}},selectMenu:function(t,s){if(event._constructed){var e=this.$refs.foodsWrap.getElementsByClassName("food-list-hook")[t];this.foodsScroll.scrollToElement(e,300)}},selectFood:function(t,s){event._constructed&&(this.selectedFood=t,this.$refs.food.show())}},computed:{selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t},currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0}}},B={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"goods"},[e("div",{ref:"menuWrap",staticClass:"menu-wrap"},[e("ul",t._l(t.goods,function(s,i){return e("li",{key:i,staticClass:"menu-item",class:{current:t.currentIndex===i},on:{click:function(s){return t.selectMenu(i,s)}}},[e("span",{staticClass:"text border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type > 0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v(t._s(s.name)+"\n          ")])])}),0)]),t._v(" "),e("div",{ref:"foodsWrap",staticClass:"foods-wrap"},[e("ul",t._l(t.goods,function(s,i){return e("li",{key:i,staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s,i){return e("li",{key:i,staticClass:"food-item border-1px",on:{click:function(e){return t.selectFood(s,e)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{src:s.icon,width:"57",alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),t._v(" "),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"count-wrap"},[e("cartcontrol",{attrs:{food:s}})],1)])])}),0)])}),0)]),t._v(" "),e("shopcart",{attrs:{selectFoods:t.selectFoods,"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}})],1),t._v(" "),e("food",{ref:"food",attrs:{food:t.selectedFood}})],1)},staticRenderFns:[]};var H=e("VU/8")(D,B,!1,function(t){e("TVBI")},null,null).exports,O={props:{seller:{type:Object}},data:function(){return{ratings:[],showFlag:!1,selectType:2,onlyContent:!0,desc:{all:"全部",positive:"满意",negative:"不满意"}}},components:{star:d,split:b,ratingselect:$},methods:{needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)},selectTypeChange:function(t){this.selectType=t},onlyContentChange:function(t){this.onlyContent=t}},created:function(){var t=this;this.$axios.get("data.json").then(function(s){t.ratings=s.data.ratings,t.$nextTick(function(){t.scroll||(t.scroll=new C.a(t.$refs.ratings,{click:!0}))})}).catch(function(t){console.log(t)})},filters:{formatDate:function(t){return N(new Date(t),"yyyy-MM-dd hh:mm")}}},U={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratings",staticClass:"ratings"},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"title"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"overview-right"},[e("div",{staticClass:"score-wrap"},[e("span",{staticClass:"title"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"score-wrap"},[e("span",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"delivery-wrap"},[e("span",{staticClass:"title"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"delivery"},[t._v(t._s(t.seller.deliveryTime))])])])]),t._v(" "),e("split"),t._v(" "),e("ratingselect",{attrs:{selectType:t.selectType,desc:t.desc,ratings:t.ratings,onlyContent:t.onlyContent},on:{selectTypeChange:t.selectTypeChange,onlyContentChange:t.onlyContentChange}}),t._v(" "),e("div",{staticClass:"rating-wrap"},[e("ul",t._l(t.ratings,function(s,i){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType, rating.text)"}],key:i,staticClass:"rating-item border-1px"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,width:"28",height:"28",alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("div",{staticClass:"star-wrap"},[e("star",{attrs:{size:24,score:s.score}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"delivery"},[t._v(t._s(s.deliveryTime))])],1),t._v(" "),e("div",{staticClass:"text"},[t._v(t._s(s.text))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.recommend.length,expression:"rating.recommend.length"}],staticClass:"recommend"},[e("span",{staticClass:"icon-thumb_up"}),t._v(" "),t._l(s.recommend,function(s,i){return e("span",{key:i,staticClass:"item"},[t._v(t._s(s))])})],2),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.rateTime,expression:"rating.rateTime"}],staticClass:"rateTime"},[t._v(t._s(t._f("formatDate")(s.rateTime)))])])])}),0)])],1)])},staticRenderFns:[]};var j=e("VU/8")(O,U,!1,function(t){e("LL7x")},null,null).exports,V=e("mvHQ"),W=e.n(V);var L={props:{seller:{type:Object}},data:function(){var t,s,e,i;return{favorite:(t=this.seller.id,s="favorite",e=!1,(i=window.localStorage.__seller__)&&(i=JSON.parse(i)[t])&&i[s]||e)}},computed:{favoriteText:function(){return this.favorite?"取消收藏":"点击收藏"}},components:{star:d,split:b},created:function(){this.classMap=["decrease","discount","guarantee","invoice","special"]},watch:{seller:function(){this._initPicScroll()}},mounted:function(){this.scroll||(this.scroll=new C.a(this.$refs.seller,{click:!0})),this._initPicScroll()},methods:{_initPicScroll:function(){var t=this;if(this.seller.pics){var s=126*this.seller.pics.length-6;this.$refs.picList.style.width=s+"px",this.$nextTick(function(){t.picScroll?t.picScroll.refresh():t.picScroll=new C.a(t.$refs.picWrap,{scrollX:!0,eventPassthrougn:"vertical"})})}},toggleFavorite:function(t){var s,e,i,a;t._constructed&&(this.favorite=!this.favorite,console.log(this.seller),s=this.seller.id,e="favorite",i=this.favorite,(a=window.localStorage.__seller__)?(a=JSON.parse(a))[s]||(a[s]={}):(a={})[s]={},a[s][e]=i,localStorage.__seller__=W()(a))}}},z={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"seller",staticClass:"seller"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"overview"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"desc border-1px"},[e("star",{attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"text"},[t._v("("+t._s(t.seller.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"text"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("元\n          ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\n          ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟\n          ")])])]),t._v(" "),e("div",{staticClass:"favorite",on:{click:t.toggleFavorite}},[e("span",{staticClass:"icon-favorite",class:{active:t.favorite}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"bulletin"},[e("div",{staticClass:"title"},[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content-wrap border-1px"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{key:i,staticClass:"support-item border-1px"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[i].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[i].description))])])}),0):t._e()]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"pics"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),t._v(" "),e("div",{ref:"picWrap",staticClass:"pic-wrap"},[e("ul",{ref:"picList",staticClass:"pic-list"},t._l(t.seller.pics,function(t,s){return e("li",{key:s,staticClass:"pic-item"},[e("img",{attrs:{src:t,width:"120",height:"90",alt:""}})])}),0)])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"info"},[e("h1",{staticClass:"title border-1px"},[t._v("商家信息")]),t._v(" "),e("ul",t._l(t.seller.infos,function(s,i){return e("li",{key:i,staticClass:"info-item",class:{"border-1px":i!==t.seller.infos.lenth-1}},[t._v(t._s(s))])}),0)])],1)])},staticRenderFns:[]};var Y=e("VU/8")(L,z,!1,function(t){e("YOQs")},null,null).exports;i.a.use(a.a),i.a.prototype.$axios=o.a.create({baseURL:"/ele/static"});var A=new a.a({routes:[{path:"/",redirect:"/goods"},{path:"/goods",component:H},{path:"/ratings",component:j},{path:"/seller",component:Y}],linkActiveClass:"on"});i.a.config.productionTip=!1,new i.a({el:"#app",router:A,render:function(t){return t(f)}})},O8N9:function(t,s){},TVBI:function(t,s){},YOQs:function(t,s){},jZ2Z:function(t,s){},"vh6+":function(t,s){}},["NHnr"]);