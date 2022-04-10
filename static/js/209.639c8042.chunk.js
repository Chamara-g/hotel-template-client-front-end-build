"use strict";(self.webpackChunkhotel_template_client_front_end=self.webpackChunkhotel_template_client_front_end||[]).push([[209],{1200:function(t,e,n){n.d(e,{D:function(){return i},Q:function(){return u}});var r=n(5861),a=n(7757),s=n.n(a),c=n(4569),o=n.n(c),u=function(){var t=(0,r.Z)(s().mark((function t(e,n){var r,a,c;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,(r=new FormData).append("hotelId",e),r.append("type",n),t.next=6,o()({method:"post",url:"".concat("http://localhost/my-apps/hotel-template-admin-front-end/api","/image/readByHotelAndType.php"),data:r,headers:{Accept:"application/json"}});case 6:return a=t.sent,c=a.data,t.abrupt("return",c);case 11:if(t.prev=11,t.t0=t.catch(0),!t.t0.response){t.next=17;break}return t.abrupt("return",t.t0.response.data);case 17:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(s().mark((function t(e,n){var r,a,c;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,(r=new FormData).append("hotelId",e),r.append("type",n),t.next=6,o()({method:"post",url:"".concat("http://localhost/my-apps/hotel-template-admin-front-end/api","/image/readGalleryImgByHotelAndType.php"),data:r,headers:{Accept:"application/json"}});case 6:return a=t.sent,c=a.data,t.abrupt("return",c);case 11:if(t.prev=11,t.t0=t.catch(0),!t.t0.response){t.next=17;break}return t.abrupt("return",t.t0.response.data);case 17:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},5137:function(t,e,n){var r=n(8152),a=n(5605),s=n.n(a),c=n(4805),o=n.n(c),u=n(2791),i=n(1200),l=n(184);e.Z=function(t){var e=t.hotelId,n=t.type,a=(0,u.useState)([]),c=(0,r.Z)(a,2),p=c[0],d=c[1],h=(0,u.useState)(!1),m=(0,r.Z)(h,2),f=m[0],x=m[1];return(0,u.useEffect)((function(){(0,i.Q)(e,n).then((function(t){try{t.result&&("SUCCESS"===t.result?(d(t.data),x(!0)):t.result)}catch(e){}}))}),[e,n]),(0,l.jsx)(l.Fragment,{children:f&&(0,l.jsxs)("div",{children:[(0,l.jsx)(o(),{minWidth:1224,children:(0,l.jsx)(s(),{width:"100%",height:"70vh",images:p,showBullets:!0,showNavs:!0,slideDuration:1,autoPlay:!0})}),(0,l.jsx)(o(),{maxWidth:1224,children:(0,l.jsx)(s(),{width:"100%",height:"40vh",images:p,showBullets:!0,showNavs:!0,slideDuration:1,autoPlay:!0})})]})})}},8209:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(8152),a=n(2791),s=n(5861),c=n(7757),o=n.n(c),u=n(4569),i=n.n(u),l=function(){var t=(0,s.Z)(o().mark((function t(e){var n,r,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,(n=new FormData).append("hotelId",e),t.next=5,i()({method:"post",url:"".concat("http://localhost/my-apps/hotel-template-admin-front-end/api","/room/readByHotelId.php"),data:n,headers:{Accept:"application/json"}});case 5:return r=t.sent,a=r.data,t.abrupt("return",a);case 10:if(t.prev=10,t.t0=t.catch(0),!t.t0.response){t.next=16;break}return t.abrupt("return",t.t0.response.data);case 16:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),p=n(7022),d=n(9743),h=n(2677),m=n(184);var f=function(t){var e=t.rooms;return(0,m.jsx)("div",{className:"accommodations-body-div pt-5 pb-5",children:(0,m.jsxs)(p.Z,{children:[(0,m.jsx)(d.Z,{className:"justify-content-md-center text-center mb-5",children:(0,m.jsx)(h.Z,{lg:"8",children:(0,m.jsx)("h1",{children:"Alojamientos"})})}),e.map((function(t,e){return(0,m.jsxs)(d.Z,{className:"justify-content-md-center room-detail-list mb-2",children:[(0,m.jsx)(h.Z,{sm:4,className:"text-left p-1",children:(0,m.jsx)("img",{className:"room-img",src:t.url,alt:""})}),(0,m.jsxs)(h.Z,{sm:8,className:"text-left p-2",children:[(0,m.jsx)("h4",{className:"mb-2",children:t.name}),(0,m.jsx)("ul",{className:"accommodations-list",children:t.details.map((function(t,e){return(0,m.jsxs)("li",{children:[(0,m.jsx)("i",{className:"fa fa-check-circle"})," ",t]},e)}))})]})]},e)}))]})})},x=n(5137);var v=function(t){var e=t.hotelId,n=(0,a.useState)([]),s=(0,r.Z)(n,2),c=s[0],o=s[1],u=(0,a.useState)(!1),i=(0,r.Z)(u,2),p=i[0],d=i[1];return(0,a.useEffect)((function(){window.scrollTo(0,0)}),[]),(0,a.useEffect)((function(){l(e).then((function(t){try{t.result&&("SUCCESS"===t.result?(o(t.data),d(!0)):t.result)}catch(e){}}))}),[e]),(0,m.jsxs)("div",{children:[(0,m.jsx)(x.Z,{hotelId:e,type:"ACMD_H"}),p&&(0,m.jsx)(f,{rooms:c})]})}}}]);
//# sourceMappingURL=209.639c8042.chunk.js.map