(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{22:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(2),r=n.n(c),s=n(15),i=n.n(s),o=(n(22),n(3)),u=n.n(o),p=n(4),h=n(5),m=n(16),j=n.n(m),l=function(){var e=Object(p.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://api.openweathermap.org/data/2.5/weather",{params:{q:t,units:"metric",APPID:"ebaccce7a791576860d251188bde275e"}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var d=function(){var e=r.a.useState(""),t=Object(h.a)(e,2),n=t[0],c=t[1],s=r.a.useState({}),i=Object(h.a)(s,2),o=i[0],m=i[1],j=r.a.useState(!1),d=Object(h.a)(j,2),b=d[0],f=d[1],x=r.a.useEffect(function(){var e=Object(p.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==b){e.next=8;break}return e.next=3,l(n);case 3:a=e.sent,console.log(a),m(a),c(""),f(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[b]);return Object(a.jsxs)("div",{className:"main-container",children:[Object(a.jsxs)("div",{class:"search-box",children:[Object(a.jsx)("input",{type:"text",class:"search-txt",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430",value:n,onChange:function(e){return c(e.target.value)},onKeyPress:x}),Object(a.jsx)("a",{href:"#",onClick:function(){f(!0)},class:"search-btn",children:Object(a.jsx)("i",{class:"fa fa-search","aria-hidden":"true"})})]}),o.main&&Object(a.jsxs)("div",{className:"city",children:[Object(a.jsxs)("h2",{className:"city-name",children:[Object(a.jsx)("span",{children:o.name}),Object(a.jsx)("sup",{children:o.sys.country})]}),Object(a.jsxs)("div",{className:"city-temp",children:[Math.round(o.main.temp),Object(a.jsx)("sup",{children:"\xb0C"})]}),Object(a.jsxs)("div",{className:"info",children:[o.main.temp&&(o.main.temp>=30?"\u0416\u0430\u0440\u0430... \u041f\u0435\u0439\u0442\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u043e\u0434\u044b":o.main.temp<30&&o.main.temp>=15?"\u0425\u043e\u0440\u043e\u0448\u0430\u044f \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0434\u043b\u044f \u043f\u0440\u043e\u0433\u0443\u043b\u043e\u043a":o.main.temp<15&&o.main.temp>0?"\u041f\u0440\u043e\u0445\u043b\u0430\u0434\u043d\u043e, \u043e\u0434\u0435\u0432\u0430\u0442\u0435\u0439\u0441\u044c \u0442\u0435\u043f\u043b\u0435\u0435":o.main.temp<0&&o.main.temp>=-15?"\u041c\u043e\u0440\u043e\u0437... \u0414\u043e\u0441\u0442\u0430\u0432\u0430\u0439\u0442\u0435 \u0432\u0441\u0451 \u0441\u0430\u043c\u043e\u0435 \u0442\u0435\u043f\u043b\u043e\u0435":o.main.temp<-15?"\u041b\u0443\u0447\u0448\u0435 \u043e\u0441\u0442\u0430\u0432\u0430\u0439\u0442\u0435\u0441\u044c \u0434\u043e\u043c\u0430":""),Object(a.jsx)("img",{className:"city-icon",src:"https://openweathermap.org/img/wn/".concat(o.weather[0].icon,"@2x.png"),alt:o.weather[0].description}),Object(a.jsx)("p",{children:o.weather[0].description})]})]})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(d,{})}),document.getElementById("root")),b()}},[[42,1,2]]]);
//# sourceMappingURL=main.82f4e3b8.chunk.js.map