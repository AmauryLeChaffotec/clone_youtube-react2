(this["webpackJsonpyoutube-clone"]=this["webpackJsonpyoutube-clone"]||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(9),l=a.n(i),s=(a(102),a(103),a(16)),r=a(24),o=(a(104),a(66)),m=a.n(o),u=a(71),d=a.n(u),p=a(72),v=a.n(p),h=a(73),E=a.n(h),f=a(74),b=a.n(f),g=a(185),w=a(183);var _=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],i=t[1];return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header__left"},c.a.createElement(m.a,null),c.a.createElement(r.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:"youtube2.svg",alt:""}))),c.a.createElement("div",{className:"header__center"},c.a.createElement(w.a,{style:{width:"95%"},id:"outlined-basic",value:a,onChange:function(e){return i(e.target.value)},label:"Rechercher",variant:"outlined"}),c.a.createElement(r.b,{to:"/search/".concat(a)},c.a.createElement(d.a,{className:"header__searchbutton"}))),c.a.createElement("div",{className:"header__right"},c.a.createElement(v.a,{className:"header__icon"}),c.a.createElement(E.a,{className:"header__icon"}),c.a.createElement(b.a,{className:"header__icon"}),c.a.createElement(g.a,{alt:"Amaury le chaffotec",stc:"https://avatars.githubusercontent.com/u/111974984?v=4"})))},y=(a(111),function(e){var t=e.selected,a=e.Icon,n=e.title;return c.a.createElement("div",{className:"sidebarrow ".concat(t?"selected":"")},c.a.createElement(a,{className:"sidebarrow__icon"}),c.a.createElement("h2",{className:"sidebarrow__title"},n))}),N=(a(112),a(75)),I=a.n(N),S=a(76),j=a.n(S),A=a(77),O=a.n(A),k=a(78),x=a.n(k),C=a(79),Y=a.n(C),V=a(80),R=a.n(V),L=a(81),T=a.n(L),D=a(42),G=a.n(D),z=function(){return c.a.createElement("div",{className:"sidebar"},c.a.createElement(y,{selected:!0,Icon:I.a,title:"Home"}),c.a.createElement(y,{Icon:j.a,title:"Trending"}),c.a.createElement(y,{Icon:O.a,title:"Subscription"}),c.a.createElement("hr",null),c.a.createElement(y,{Icon:x.a,title:"Library"}),c.a.createElement(y,{Icon:Y.a,title:"History"}),c.a.createElement(y,{Icon:R.a,title:"Your videos"}),c.a.createElement(y,{Icon:T.a,title:"Watch later"}),c.a.createElement(y,{Icon:G.a,title:"Liked vides"}),c.a.createElement("hr",null))},X=a(20),Z=a.n(X),B=a(43),H=a(29),W=(a(114),function(e){var t=e.image,a=e.title,n=e.channel,i=e.views,l=e.timestamp,s=e.channelImage;return c.a.createElement("div",{className:"videocard"},c.a.createElement("img",{className:"videocard__image",src:t,alt:""}),c.a.createElement("div",{className:"videocard__info"},c.a.createElement(g.a,{className:"videocard__avatar",alt:n,src:s}),c.a.createElement("div",{className:"videocard__text"},c.a.createElement("h4",null,a),c.a.createElement("p",null,n),c.a.createElement("p",null,i," views \u2022 ",l))))}),q=(a(115),a(21)),F=a.n(q),J=a(44),Q=a(181),M=a(184),P=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)(!0),o=Object(s.a)(l,2),m=o[0],u=o[1],d=Object(n.useState)(!1),p=Object(s.a)(d,2),v=p[0],h=p[1];function E(){return(E=Object(H.a)(Z.a.mark((function e(t){var a,n,c,l,s,r,o,m,d,p,v,h,E,f;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],n=Object(B.a)(t),e.prev=2,n.s();case 4:if((c=n.n()).done){e.next=21;break}return l=c.value,s=l.id,r=l.snippet,o=r.channelId,e.next=11,F.a.get("https://www.googleapis.com/youtube/v3/channels?part=snippet&id=".concat(o,"&key=").concat("AIzaSyAjCGYoSyx86SmY5AhVlNgnXxoA0wLsZ94"));case 11:m=e.sent,d=m.data.items[0].snippet.thumbnails.medium.url,p=r.title,v=r.thumbnails.medium.url,h=l.statistics.viewCount,E=J.DateTime.fromISO(r.publishedAt).toRelative(),f=r.channelTitle,a.push({videoId:s,image:v,title:p,channel:f,views:h,timestamp:E,channelImage:d});case 19:e.next=4;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(2),n.e(e.t0);case 26:return e.prev=26,n.f(),e.finish(26);case 29:i(a),u(!1);case 32:case"end":return e.stop()}}),e,null,[[2,23,26,29]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){F.a.get("https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=FR&key=".concat("AIzaSyAjCGYoSyx86SmY5AhVlNgnXxoA0wLsZ94")).then((function(e){!function(e){E.apply(this,arguments)}(e.data.items)})).catch((function(e){console.log(e),h(!0)}))}),[]),v?c.a.createElement(M.a,{severity:"error",className:"loading"},"No Results found!"):c.a.createElement("div",{className:"recommendedvideos"},m?c.a.createElement(Q.a,{className:"loading",color:"secondary"}):null,c.a.createElement("div",{className:"recommendedvideos__videos"},a.map((function(e){return c.a.createElement(r.b,{key:e.videoId,to:"/video/".concat(e.videoId)},c.a.createElement(W,{title:e.title,image:e.image,views:e.views,timestamp:e.timestamp,channel:e.channel,channelImage:e.channelImage}))}))))},U=(a(132),a(82)),$=a.n(U),K=(a(133),function(e){var t=e.image,a=e.channel,n=e.subs,i=e.noOfVideos,l=e.description;return c.a.createElement("div",{className:"channelrow"},c.a.createElement(g.a,{className:"channelrow__logo",alt:a,src:t}),c.a.createElement("div",{className:"channelrow__text"},c.a.createElement("h4",null,a),c.a.createElement("p",null,n," subscribers \u2022 ",i," videos"),c.a.createElement("p",null,l)))}),ee=(a(134),function(e){var t=e.views,a=e.description,n=e.timestamp,i=e.channel,l=e.title,s=e.image;return c.a.createElement("div",{className:"videorow"},c.a.createElement("img",{src:s,alt:""}),c.a.createElement("div",{className:"videorow__text"},c.a.createElement("h3",null,l),c.a.createElement("p",{className:"videorow__headline"},i," \u2022 ",t," views \u2022 ",n),c.a.createElement("p",{className:"videorow__description"},a)))}),te=a(8),ae=function(e){var t=Object(te.f)().searchQuery,a=Object(n.useState)(""),i=Object(s.a)(a,2),l=i[0],o=i[1],m=Object(n.useState)([]),u=Object(s.a)(m,2),d=u[0],p=u[1],v=Object(n.useState)(!0),h=Object(s.a)(v,2),E=h[0],f=h[1],b=Object(n.useState)(!1),g=Object(s.a)(b,2),w=g[0],_=g[1];function y(){return(y=Object(H.a)(Z.a.mark((function e(t){var a,n,c,i,l,s,r,m;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id.channelId,e.next=3,F.a.get("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=".concat(a,"&key=").concat("AIzaSyAjCGYoSyx86SmY5AhVlNgnXxoA0wLsZ94"));case 3:n=e.sent,c=n.data.items[0].statistics.videoCount,i=n.data.items[0].statistics.subscriberCount,l=t.snippet,s=l.title,r=l.description,m=l.thumbnails.medium.url,o({channelId:a,image:m,title:s,subs:i,noOfVideos:c,description:r});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(H.a)(Z.a.mark((function e(t){var a,n,c,i,l,s,r,o,m,u,d,v,h;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],n=Object(B.a)(t),e.prev=2,n.s();case 4:if((c=n.n()).done){e.next=20;break}return i=c.value,l=i.id.videoId,e.next=9,F.a.get("https://www.googleapis.com/youtube/v3/videos?part=statistics%2C%20snippet&id=".concat(l,"&key=").concat("AIzaSyAjCGYoSyx86SmY5AhVlNgnXxoA0wLsZ94"));case 9:s=e.sent,r=s.data.items[0].statistics.viewCount,o=i.snippet,m=o.title,u=J.DateTime.fromISO(o.publishedAt).toRelative(),d=o.channelTitle,v=o.description,h=o.thumbnails.medium.url,a.push({videoId:l,title:m,image:h,views:r,timestamp:u,channel:d,description:v});case 18:e.next=4;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(2),n.e(e.t0);case 25:return e.prev=25,n.f(),e.finish(25);case 28:p(a),f(!1);case 31:case"end":return e.stop()}}),e,null,[[2,22,25,28]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){o(""),p([]),F.a.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=channel&q=".concat(t,"&safeSearch=none&key=").concat("AIzaSyAjCGYoSyx86SmY5AhVlNgnXxoA0wLsZ94")).then((function(e){!function(e){y.apply(this,arguments)}(e.data.items[0])})),F.a.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&type=video&q=".concat(t,"&safeSearch=none&key=").concat("AIzaSyAjCGYoSyx86SmY5AhVlNgnXxoA0wLsZ94")).then((function(e){!function(e){N.apply(this,arguments)}(e.data.items),_(!1)})).catch((function(e){console.log(e),_(!0),f(!1)}))}),[t]),w?c.a.createElement(M.a,{severity:"error",className:"loading"},"No Results found!"):c.a.createElement("div",{className:"searchpage"},c.a.createElement("div",{className:"searchpage__filter"},c.a.createElement($.a,null),c.a.createElement("h2",null,"Filter")),E?c.a.createElement(Q.a,{className:"loading",color:"secondary"}):null,c.a.createElement("hr",null),E?null:c.a.createElement(K,{key:l.channelId,image:l.image,channel:l.title,subs:l.subs,noOfVideos:l.noOfVideos,description:l.description}),c.a.createElement("hr",null),d.map((function(e){return c.a.createElement(r.b,{key:e.videoId,to:"/video/".concat(e.videoId)},c.a.createElement(ee,{title:e.title,image:e.image,views:e.views,timestamp:e.timestamp,channel:e.channel,description:e.description}))})))},ne=a(83),ce=function(e){var t=e.videoId;return c.a.createElement("div",null,c.a.createElement(ne.a,{videoId:t}))},ie=(a(146),a(86)),le=a.n(ie),se=a(87),re=a.n(se),oe=a(89),me=a.n(oe),ue=a(88),de=a.n(ue),pe=(a(147),a(182)),ve=function(e){var t=e.title,a=e.description,n=e.publishedDate,i=e.channelTitle,l=e.channelImage,s=e.viewCount,r=e.likeCount,o=e.dislikeCount,m=e.subs;return c.a.createElement("div",{className:"videoinfo"},c.a.createElement("div",{className:"videoinfo__headline"},c.a.createElement("h1",null,t)),c.a.createElement("div",{className:"videoinfo__stats"},c.a.createElement("p",null,s," views \u2022 ",n),c.a.createElement("div",{className:"videoinfo__likes"},c.a.createElement(y,{Icon:G.a,title:r}),c.a.createElement(y,{Icon:le.a,title:o}),c.a.createElement(y,{Icon:re.a,title:"SHARE"}),c.a.createElement(y,{Icon:de.a,title:"SAVE"}),c.a.createElement(y,{Icon:me.a,title:""}))),c.a.createElement("hr",null),c.a.createElement("div",{className:"videoinfo__channel"},c.a.createElement("div",null,c.a.createElement(g.a,{className:"videoinfo__avatar",alt:i,src:l}),c.a.createElement("div",{className:"videoinfo__channelinfo"},c.a.createElement("h3",{className:"videoinfo__channeltitle"},i),c.a.createElement("p",{className:"videoinfo__channelsubs"},m," subscribers"))),c.a.createElement("div",{className:"videoinfo__subscribe"},c.a.createElement(pe.a,{color:"secondary"},"SUBSCRIBE"))),c.a.createElement("div",{className:"videoinfo__channeldesc"},c.a.createElement("p",null,a)))},he=function(){var e=Object(te.f)().videoId,t=Object(n.useState)([]),a=Object(s.a)(t,2),i=a[0],l=a[1],r=Object(n.useState)(!0),o=Object(s.a)(r,2),m=o[0],u=o[1],d=Object(n.useState)(!1),p=Object(s.a)(d,2),v=p[0],h=p[1];function E(){return(E=Object(H.a)(Z.a.mark((function e(t){var a,n,c,i,s,r,o,m,d,p,v,h,E;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.snippet,n=t.statistics,c=a.channelId,e.next=5,F.a.get("https://www.googleapis.com/youtube/v3/channels?part=snippet%2C%20statistics&id=".concat(c,"&key=").concat("AIzaSyAjCGYoSyx86SmY5AhVlNgnXxoA0wLsZ94"));case 5:i=e.sent,s=i.data.items[0].snippet.thumbnails.medium.url,r=i.data.items[0].statistics.subscriberCount,o=new Date(a.publishedAt).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}),m=a.title,d=a.description,p=a.channelTitle,v=n.viewCount,h=n.likeCount,E=n.dislikeCount,l({title:m,description:d,publishedDate:o,channelTitle:p,channelImage:s,viewCount:v,likeCount:h,dislikeCount:E,subs:r}),u(!1);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){l([]),u(!0),F.a.get("https://www.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=".concat(e,"&key=").concat("AIzaSyAjCGYoSyx86SmY5AhVlNgnXxoA0wLsZ94")).then((function(e){!function(e){E.apply(this,arguments)}(e.data.items[0]),h(!1)})).catch((function(e){console.log(e),h(!0)}))}),[e]),v?c.a.createElement(M.a,{severity:"error",className:"loading"},"No Results found!"):c.a.createElement("div",{className:"videoplayer"},c.a.createElement("div",{className:"videoplayer__videodetails"},c.a.createElement("div",{className:"videoplayer__video"},m?c.a.createElement(Q.a,{className:"loading",color:"secondary"}):c.a.createElement(ce,{videoId:e})),c.a.createElement("div",{className:"videoplayer__videoinfo"},m?null:c.a.createElement(ve,{title:i.snippet,description:i.description,publishedDate:i.publishedDate,channelTitle:i.channelTitle,channelImage:i.channelImage,viewCount:i.viewCount,likeCount:i.likeCount,dislikeCount:i.dislikeCount,subs:i.subs}))),c.a.createElement("div",{className:"videoplayer__suggested"},c.a.createElement(P,null)))};var Ee=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(r.a,null,c.a.createElement(_,null),c.a.createElement(te.c,null,c.a.createElement(te.a,{path:"/video/:videoId"},c.a.createElement("div",{className:"app__mainpage"},c.a.createElement(he,null))),c.a.createElement(te.a,{path:"/search/:searchQuery"},c.a.createElement("div",{className:"app__mainpage"},c.a.createElement(z,null),c.a.createElement(ae,null))),c.a.createElement(te.a,{path:"/"},c.a.createElement("div",{className:"app__mainpage"},c.a.createElement(z,null),c.a.createElement(P,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},97:function(e,t,a){e.exports=a(148)}},[[97,1,2]]]);
//# sourceMappingURL=main.15dd8f79.chunk.js.map