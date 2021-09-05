(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{12:function(e,t,n){e.exports={"search-form":"UserSearch_search-form__3qIa8","form-group":"UserSearch_form-group__KfEPa"}},14:function(e,t,n){e.exports={main:"Layout_main__1xgYq"}},15:function(e,t,n){e.exports={notification:"Notification_notification__1WiPc"}},16:function(e,t,n){e.exports={"lds-roller":"Loading_lds-roller__26Yfy"}},22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(8),i=n.n(a),s=(n(22),n(14)),o=n.n(s),u=n(1),j=function(e){return Object(u.jsx)(c.Fragment,{children:Object(u.jsx)("main",{className:o.a.main,children:e.children})})},l=n(12),h=n.n(l),d=n(6),f=Object(d.b)({name:"ui",initialState:{notification:null,loading:!1},reducers:{showNotification:function(e,t){e.notification={message:t.payload.message}},clearNotification:function(e,t){e.notification=null},setLoading:function(e,t){e.loading=t.payload}}}),b=f.actions,m=f,x=n(3),O=n(5),v=n.n(O),p=n(9),g=Object(d.b)({name:"city",initialState:{city:null,weather:null},reducers:{addCity:function(e,t){e.city=t.payload},addWeather:function(e,t){e.weather=t.payload}}}),y=g.actions,w=g,_="dGd4rEiqwfaUUsyWCj29QIVBXP6r7hAP",N=function(e){return function(){var t=Object(p.a)(v.a.mark((function t(n){var c,r,a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(){var t=Object(p.a)(v.a.mark((function t(){var c,r,a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://dataservice.accuweather.com/locations/v1/cities/search?apikey=".concat(_,"&q=").concat(e,"&language=ru"));case 2:if((c=t.sent).ok){t.next=5;break}throw new Error({message:"There is a server error"});case 5:return t.next=7,c.json();case 7:return r=t.sent,n(y.addCity(r)),a=r[0].Key,t.abrupt("return",a);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),r=function(){var e=Object(p.a)(v.a.mark((function e(t){var c,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://dataservice.accuweather.com/currentconditions/v1/".concat(t,"?apikey=").concat(_,"&language=ru"));case 2:if((c=e.sent).ok){e.next=5;break}throw new Error({message:"There is a server error"});case 5:return e.next=7,c.json();case 7:return r=e.sent,n(y.addWeather(r)),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.prev=2,n(b.setLoading(!0)),t.next=6,c();case 6:return a=t.sent,t.next=9,r(a);case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),n(b.showNotification({message:"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0433\u043e\u0440\u043e\u0434\u0430"}));case 14:n(b.setLoading(!1));case 15:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()},k=function(e){var t=Object(x.b)(),n=Object(c.useRef)();return Object(u.jsxs)("form",{className:h.a["search-form"],onSubmit:function(e){e.preventDefault();var c=n.current.value.trim();""===c?t(b.showNotification({message:"\u0413\u043e\u0440\u043e\u0434 \u043d\u0435 \u0432\u0432\u0435\u0434\u0435\u043d. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430."})):(t(N(c)),n.current.value="")},children:[Object(u.jsxs)("div",{className:h.a["form-group"],children:[Object(u.jsx)("label",{htmlFor:"city",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{ref:n,type:"text",id:"city"})]}),Object(u.jsx)("button",{children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u043f\u043e\u0433\u043e\u0434\u0435"})]})},W=n(31),I=n(7),L=n.n(I),T=function(){var e=Object(x.c)((function(e){return e.city.weather})),t=Object(x.c)((function(e){return e.city.city}));console.log(e);var n=e[0].IsDayTime?"./images/day.svg":"./images/night.svg",c="./images/icons/".concat(e[0].WeatherIcon,".svg");return Object(u.jsxs)(W.a.div,{initial:{x:"-100vw"},animate:{x:0},className:L.a.weather,children:[Object(u.jsx)("div",{className:L.a.weatherImage,children:Object(u.jsx)("img",{src:n,alt:"day/night"})}),Object(u.jsx)("div",{className:L.a.icon,children:Object(u.jsx)("img",{src:c,alt:"weather icon"})}),Object(u.jsxs)("div",{className:L.a.weatherDesc,children:[Object(u.jsxs)("span",{children:[t[0].LocalizedName,", "]}),Object(u.jsx)("span",{children:t[0].Country.LocalizedName}),Object(u.jsx)("h3",{children:e[0].WeatherText}),Object(u.jsxs)("h3",{children:[e[0].Temperature.Metric.Value," \u0433\u0440\u0430\u0434\u0443\u0441\u043e\u0432"]})]})]})},C=n(15),E=n.n(C),S=function(e){return Object(u.jsx)(W.a.div,{initial:{y:"-100vh"},animate:{y:0},className:E.a.notification,children:Object(u.jsx)("div",{className:"message",children:e.message})})},D=n(16),F=n.n(D),P=function(){return Object(u.jsxs)("div",{class:F.a["lds-roller"],children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{})]})};var q=function(){var e=Object(x.b)(),t=Object(x.c)((function(e){return e.city.weather})),n=Object(x.c)((function(e){return e.city.city})),r=Object(x.c)((function(e){return e.ui.notification})),a=Object(x.c)((function(e){return e.ui.loading}));return Object(c.useEffect)((function(){e(N("\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433"))}),[e]),Object(c.useEffect)((function(){var t=setTimeout((function(){e(b.clearNotification())}),3e3);return function(){return clearTimeout(t)}}),[e,r]),Object(u.jsxs)(j,{children:[a&&Object(u.jsx)(P,{}),!a&&r&&Object(u.jsx)(S,{message:r.message}),!a&&t&&n.length>0&&Object(u.jsx)(T,{}),Object(u.jsx)(k,{})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},M=Object(d.a)({reducer:{ui:m.reducer,city:w.reducer}});i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(x.a,{store:M,children:Object(u.jsx)(q,{})})}),document.getElementById("root")),U()},7:function(e,t,n){e.exports={weather:"Weather_weather__2rd2M",weatherImage:"Weather_weatherImage__1y_Rv",icon:"Weather_icon__KUuQJ",weatherDesc:"Weather_weatherDesc__3mqM7"}}},[[29,1,2]]]);
//# sourceMappingURL=main.f3b34c93.chunk.js.map