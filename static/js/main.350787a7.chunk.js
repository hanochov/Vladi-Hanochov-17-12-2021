(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],{111:function(e,t,r){},117:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r(29),a=r.n(n),i=r(18),s=r(33),o=Object(s.b)({name:"ui",initialState:{isVisible:!0,autocompleteNotification:null,currentconditionsNotification:null,forecastsNotification:null},reducers:{toggle:function(e){e.isVisible=!e.isVisible},showAutocompleteNotification:function(e,t){e.autocompleteNotification={status:t.payload.status,title:t.payload.title,message:t.payload.message,type:t.payload.type}},showCurrentconditionsNotification:function(e,t){e.currentconditionsNotification={status:t.payload.status,title:t.payload.title,message:t.payload.message,type:t.payload.type}},showForecastsNotification:function(e,t){e.forecastsNotification={status:t.payload.status,title:t.payload.title,message:t.payload.message,type:t.payload.type}}}}),u=o.actions,l=o,j=Object(s.b)({name:"favorites",initialState:{items:[],isFavorite:!1},reducers:{toggleFavorites:function(e,t){var r=t.payload;e.items.find((function(e){return e.id===r.id}))?(e.items=e.items.filter((function(e){return e.id!==r.id})),e.isFavorite=!1):(e.items.push({id:r.id,name:r.name,curWeather:r.curWeather,description:r.description}),e.isFavorite=!0)},toggleStatus:function(e,t){!0===t.payload?e.isFavorite=!0:e.isFavorite=!1}}}),d=j.actions,b=j,p=Object(s.b)({name:"autocompleteApi",initialState:{currentInput:""},reducers:{setCurrentInput:function(e,t){var r=t.payload;e.currentInput=r}}}),h=p.actions,m=p,x=Object(s.b)({name:"currenWeatherApi",initialState:{cities:[],currentWeatherDescription:"",currentTemperature:"",currentKey:{key:"215854",cityId:"215854",label:"Tel Aviv - Tel Aviv - Israel"},nextDaysDetails:[]},reducers:{setCurrentCities:function(e,t){var r=t.payload;e.cities=r},setCurrentKey:function(e,t){var r=t.payload;null!==r&&(e.currentKey=r)},setCurrentCityDetails:function(e,t){var r=t.payload;e.currentWeatherDescription=r[0].subLabel,e.currentTemperature=r[0].temperature},setNextDaysDetails:function(e,t){var r=t.payload;e.nextDaysDetails=[];for(var c=0;c<r.length;c++)e.nextDaysDetails.push({id:r[c].EpochDate.toString(),date:new Date(1e3*r[c].EpochDate).toString().split(" ")[0],maxTemp:r[c].Temperature.Maximum.Value,minTemp:r[c].Temperature.Minimum.Value})}}}),f=x.actions,O=x,y=Object(s.a)({reducer:{ui:l.reducer,favorites:b.reducer,autocompleteApi:m.reducer,currenWeatherApi:O.reducer}}),v=(r(111),r(52)),g=r(15),k=(r(39),r(161)),w=r(162),N=r(152),I=r(67),D=r(45),A=r.n(D),C=r(51),T=r.p+"static/media/winter.7469a563.jpg",F=r.p+"static/media/spring.7223ee74.jpg",W=r.p+"static/media/summer.85947e84.jpg",S=r(167),E=r(1);var L=function(e){return Object(E.jsx)("div",{children:Object(E.jsx)(S.a,{style:{width:"12rem"},children:Object(E.jsxs)(S.a.Body,{children:[Object(E.jsx)(S.a.Title,{children:e.label}),Object(E.jsx)(S.a.Subtitle,{className:"mb-2 text-muted",children:e.subLabel}),Object(E.jsx)(S.a.Subtitle,{className:"mb-2 text-muted",children:e.description})]})})})},K=r(77),J=r(153),V=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.favorites.isFavorite})),r=Object(i.c)((function(e){return e.favorites.items})),n=Object(i.c)((function(e){return e.currenWeatherApi.currentKey})),a=Object(i.c)((function(e){return e.currenWeatherApi.currentTemperature})),s=Object(i.c)((function(e){return e.currenWeatherApi.currentWeatherDescription}));return Object(c.useEffect)((function(){null!==n.key&&(r.filter((function(e){return e.id===n.key})).length>0?e(d.toggleStatus(!0)):e(d.toggleStatus(!1)))}),[n.key,r,e]),Object(E.jsxs)(c.Fragment,{children:[Object(E.jsx)(N.a,{sm:9,children:Object(E.jsx)(L,{id:n.cityId,label:n.label,subLabel:a},n.cityId)}),!t&&Object(E.jsxs)(N.a,{sm:1,children:[" ",Object(E.jsx)("h1",{children:Object(E.jsx)(K.a,{color:"grey"})})," "]}),t&&Object(E.jsxs)(N.a,{sm:1,children:[" ",Object(E.jsx)("h1",{children:Object(E.jsx)(K.a,{color:"red"})})," "]}),Object(E.jsx)(N.a,{sm:2,children:Object(E.jsxs)(J.a,{variant:"warning",onClick:function(){e(d.toggleFavorites({id:n.cityId,name:n.label,curWeather:a,description:s}))},children:[!t&&"Add current city to favorites",t&&"Remove current city from favorites"]})})]})},H=function(){var e=Object(i.c)((function(e){return e.currenWeatherApi.nextDaysDetails}));return Object(E.jsx)(c.Fragment,{children:e.map((function(e){return Object(E.jsx)(N.a,{children:Object(E.jsx)(L,{label:e.date,subLabel:"Max  : "+e.maxTemp+"F",description:"Min  : "+e.minTemp+"F"},e.date)},e.date)}))})},B=r(7),M=r(164),U=r(163),z=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.currenWeatherApi.cities}));return Object(E.jsx)(U.a,{disablePortal:!0,id:"combo-box-demo",options:t,renderInput:function(e){return Object(E.jsx)(M.a,Object(B.a)(Object(B.a)({},e),{},{label:"City"}))},onChange:function(t,r){e(f.setCurrentKey(r))},onInputChange:function(t,r){e(h.setCurrentInput(r))}})},q=r(166);var G=function(e){return Object(E.jsxs)(q.a,{children:[Object(E.jsxs)(q.a.Header,{children:[Object(E.jsx)("img",{className:"rounded me-2",alt:""}),Object(E.jsx)("strong",{className:"me-auto",children:e.label}),Object(E.jsx)("small",{children:e.description})]}),Object(E.jsx)(q.a.Body,{children:e.subLabel})]})},P=function(){var e="aTCAtdkX97ann5skSEVGWihmFt1JA7JK&q",t=Object(i.c)((function(e){return e.autocompleteApi.currentInput})),r=Object(i.c)((function(e){return e.currenWeatherApi.currentKey})),n=Object(i.c)((function(e){return e.currenWeatherApi.currentTemperature})),a=(Object(i.c)((function(e){return e.currenWeatherApi.currentWeatherDescription})),Object(i.c)((function(e){return e.ui.autocompleteNotification}))),s=Object(i.c)((function(e){return e.ui.currentconditionsNotification})),o=Object(i.c)((function(e){return e.ui.forecastsNotification})),l=(Object(i.c)((function(e){return e.favorites.isFavorite})),Object(i.b)()),j=function(){var r=Object(I.a)(A.a.mark((function r(){var c,n,a;return A.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(e,"=").concat(t));case 3:if((c=r.sent).ok){r.next=6;break}throw new Error("Something went wrong!");case 6:return r.next=8,c.json();case 8:n=r.sent,a=n.map((function(e){return{key:e.Key,cityId:e.Key,label:e.LocalizedName+" - "+e.AdministrativeArea.LocalizedName+" - "+e.Country.LocalizedName}})),l(f.setCurrentCities(a)),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),"Unexpected end of JSON input"!==r.t0.message&&l(u.showAutocompleteNotification({status:"error",title:"Error!",message:r.t0.message,type:"autocomplete"}));case 16:case"end":return r.stop()}}),r,null,[[0,13]])})));return function(){return r.apply(this,arguments)}}(),d=function(){var t=Object(I.a)(A.a.mark((function t(){var c,n,a;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://dataservice.accuweather.com/currentconditions/v1/".concat(r.cityId,"?apikey=").concat(e));case 3:if((c=t.sent).ok){t.next=6;break}throw new Error("Something went wrong!");case 6:return t.next=8,c.json();case 8:n=t.sent,a=n.map((function(e){return{key:e.EpochTime,cityId:r.cityId,label:r.label,subLabel:e.WeatherText,temperature:e.Temperature.Imperial.Value+e.Temperature.Imperial.Unit}})),l(f.setCurrentCityDetails(a)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),"Unexpected end of JSON input"!==t.t0.message&&l(u.showCurrentconditionsNotification({status:"error",title:"Error!",message:t.t0.message,type:"Currentconditions"}));case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(I.a)(A.a.mark((function t(){var c,n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(r.cityId,"?apikey=").concat(e));case 3:if((c=t.sent).ok){t.next=6;break}throw new Error("Something went wrong!");case 6:return t.next=8,c.json();case 8:n=t.sent,l(f.setNextDaysDetails(n.DailyForecasts)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),"Unexpected end of JSON input"!==t.t0.message&&l(u.showForecastsNotification({status:"error",title:"Error!",message:t.t0.message,type:"Forecasts"}));case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){j()}),[t]),Object(c.useEffect)((function(){d(),b()}),[r]),Object(E.jsxs)(k.a,{children:[null!==a&&Object(E.jsx)(G,{label:a.title,subLabel:a.message,description:a.type}),null!==s&&Object(E.jsx)(G,{label:s.title,subLabel:s.message,description:s.type}),null!==o&&Object(E.jsx)(G,{label:o.title,subLabel:o.message,description:o.type}),Object(E.jsx)(w.a,{children:Object(E.jsx)(z,{})}),Object(E.jsx)("br",{}),Object(E.jsx)(w.a,{children:Object(E.jsx)(V,{})}),Object(E.jsx)("br",{}),Object(E.jsx)(w.a,{children:Object(E.jsxs)(k.a,{children:[parseInt(n)<60&&Object(E.jsx)(C.a,{src:T,fluid:!0}),parseInt(n)>=60&&parseInt(n)<=77&&Object(E.jsx)(C.a,{src:F,fluid:!0}),parseInt(n)>77&&Object(E.jsx)(C.a,{src:W,fluid:!0})]})}),Object(E.jsx)("br",{}),Object(E.jsx)(w.a,{children:Object(E.jsx)(H,{})})]})};var R=function(e){var t=Object(i.b)();return Object(E.jsx)("div",{children:Object(E.jsx)(S.a,{style:{width:"14rem",minHeight:"14em"},children:Object(E.jsxs)(S.a.Body,{children:[Object(E.jsx)(S.a.Title,{children:e.label}),Object(E.jsx)(S.a.Subtitle,{className:"mb-2 text-muted",children:e.subLabel}),Object(E.jsx)(S.a.Text,{children:e.description}),Object(E.jsx)(v.b,{to:"/",children:Object(E.jsx)(J.a,{variant:"warning",onClick:function(){t(f.setCurrentKey({key:e.id,cityId:e.id,label:e.label}))},children:"Show full details"})})]})})})},X=r(165),Q=r.p+"static/media/pexels-david-jakab-1080722.1f8505f8.jpg";var Y=function(){var e=Object(i.c)((function(e){return e.favorites.items}));return Object(E.jsxs)(k.a,{children:[e.length<1&&Object(E.jsxs)(X.a,{variant:"warning",children:[Object(E.jsx)(X.a.Heading,{children:"Oh ! The Favorites page is empty!"}),Object(E.jsx)("p",{children:'To see your favorite cities on this page, please navigate to the homepage and add the cities you like to your favorites page using the "Add current to favorites" button'})]}),Object(E.jsx)(w.a,{children:e.map((function(e){return Object(E.jsx)(N.a,{children:Object(E.jsx)(R,{id:e.id,label:e.name,subLabel:e.curWeather,description:e.description},e.id)},e.id)}))}),Object(E.jsx)("br",{}),Object(E.jsx)(w.a,{children:Object(E.jsx)(C.a,{src:Q,fluid:!0})})]})};var Z=function(){return Object(E.jsx)(k.a,{children:Object(E.jsxs)(v.a,{children:[Object(E.jsx)("nav",{className:"nav",children:Object(E.jsx)(k.a,{children:Object(E.jsxs)(w.a,{children:[Object(E.jsx)(N.a,{className:"col-1",children:Object(E.jsx)("h4",{children:Object(E.jsx)(v.b,{to:"/",style:{textDecoration:"none"},children:Object(E.jsx)("div",{style:{color:"black"},className:"nav-link",children:"Home"})})})}),Object(E.jsx)(N.a,{className:"col-1",children:Object(E.jsx)("h4",{children:Object(E.jsx)(v.b,{to:"/fav",style:{textDecoration:"none"},children:Object(E.jsx)("div",{style:{color:"black"},className:"nav-link",children:"Favorites"})})})}),Object(E.jsx)(N.a,{className:"col-10 text-end",children:Object(E.jsx)("h4",{children:Object(E.jsx)("div",{style:{color:"black",fontFamily:"cursive"},className:"nav-link",children:"Herolo Weather Task"})})})]})})}),Object(E.jsx)(c.Fragment,{children:Object(E.jsxs)(g.c,{children:[Object(E.jsx)(g.a,{exact:!0,path:"/",element:Object(E.jsx)(P,{})}),Object(E.jsx)(g.a,{exact:!0,path:"/fav",element:Object(E.jsx)(Y,{})})]})})]})})},$=function(){return Object(E.jsx)(k.a,{children:Object(E.jsx)(Z,{})})};a.a.render(Object(E.jsx)(i.a,{store:y,children:Object(E.jsx)($,{})}),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.350787a7.chunk.js.map