"use strict";(self["webpackChunkvue_cnode"]=self["webpackChunkvue_cnode"]||[]).push([[487],{2487:function(e,t,s){s.r(t),s.d(t,{default:function(){return _}});var a=function(){var e=this,t=e._self._c;return e.userArr?t("div",{staticClass:"user"},[t("base-panel",{staticClass:"base-panel"},[t("template",{slot:"panel-head"},[t("router-link",{attrs:{to:"/"}},[e._v("/主页")])],1),t("template",{slot:"panel-content"},[t("div",{staticClass:"user-header"},[t("div",[t("img",{attrs:{src:e.userArr.avatar_url,alt:""}}),t("span",{staticClass:"text"},[e._v(e._s(e.loginname))])]),t("span",[e._v(e._s(e.userArr.score)+" 积分")]),t("span",[e._v("注册事件"+e._s(e._f("fromNow")(e.userArr.create_at)))])])])],2),t("base-panel",{staticClass:"base-panel"},[t("template",{slot:"panel-head"},[e._v(" 最近创建的话题 ")]),t("template",{slot:"panel-content"},e._l(e.userArr.recent_topics,(function(s){return t("topics-item",e._b({key:s.id,attrs:{isUser:"true"}},"topics-item",s,!1))})),1)],2),t("base-panel",{staticClass:"base-panel"},[t("template",{slot:"panel-head"},[e._v(" 最近添加的话题 ")]),t("template",{slot:"panel-content"},e._l(e.userArr.recent_replies,(function(s){return t("topics-item",e._b({key:s.id,attrs:{isUser:"true"}},"topics-item",s,!1))})),1)],2)],1):e._e()},r=[],n=s(3150),l=s(2301),i=s(6810),o={components:{basePanel:l.Z,TopicsItem:i.Z},props:["loginname"],data(){return{userArr:null}},watch:{loginname:{async handler(e){const t=await(0,n.bG)(this.loginname);this.userArr=t.data,console.log(this.userArr)},immediate:!0}}},c=o,p=s(1001),u=(0,p.Z)(c,a,r,!1,null,"9044c07a",null),_=u.exports}}]);
//# sourceMappingURL=487.50cee94e.js.map