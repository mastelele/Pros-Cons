(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,n,t){e.exports=t(37)},28:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),i=t(12),r=(t(28),t(5)),l=t(1),c=t(10),u=t(16),s=t(17),d=t(21),f=t(18),h=t(22),v=t(9),g=t.n(v),m=l.a.input({fontWeight:400,fontSize:"1.5rem"}),p=(Object(l.a)(m)({fontSize:"1rem"}),l.a.li({fontSize:"1.5rem"})),w=(Object(l.a)(p)({fontSize:"1rem"}),function(e){var n=e.value,t=e.onChange;return o.a.createElement(p,null,o.a.createElement(m,{value:n,onChange:t}))}),b=function(e){function n(){var e,t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=Object(d.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(o)))).state={items:[{value:"",key:g()()}]},t.onChangeHandler=function(e,n){var a=e.target.value,o=t.state.items,i=Object(c.a)(o),r=i[n];n===i.length-1?i.push({value:"",key:g()()}):a||i.splice(n,1),r.value="".concat(a),t.setState({items:Object(c.a)(i)})},t}return Object(h.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this,n=this.state.items;return o.a.createElement(x,null,n.map(function(n,t){return o.a.createElement(w,{key:n.key,value:n.value,onChange:function(n){e.onChangeHandler(n,t)}})}))}}]),n}(a.Component),y=Object(r.b)(function(e){return{}},{})(b),x=l.a.ol({listStylePosition:"inside",overflowY:"auto",padding:"10px 20px"}),E=function(){return o.a.createElement(j,null,o.a.createElement(k,null,"Cons"),o.a.createElement(y,null))},j=l.a.div({height:"100%",flex:"1",display:"flex",flexDirection:"column"}),k=l.a.div({fontSize:"1.5rem",display:"flex",justifyContent:"center",padding:"10px 0",borderBottom:"1px solid"}),O=function(){return o.a.createElement(C,null,o.a.createElement(S,null,"Pros"),o.a.createElement(y,null))},C=l.a.div({height:"100%",flex:"1",display:"flex",flexDirection:"column",borderRight:"1px solid"}),S=l.a.div({fontSize:"1.5rem",display:"flex",justifyContent:"center",padding:"10px 0",borderBottom:"1px solid"}),W=function(){return o.a.createElement(z,null,o.a.createElement(A,null,"Should I eat McDonalds?"),o.a.createElement(B,null,o.a.createElement(O,null),o.a.createElement(E,null)))},z=l.a.div({width:"100%",height:"100%",display:"flex",flexDirection:"column"}),A=l.a.div({backgroundColor:"#aaaaaa",fontSize:"2rem",color:"#ffffff",textAlign:"center",padding:"15px 0"}),B=l.a.div({display:"flex",height:"100%"}),D=function(){return o.a.createElement(P,null,o.a.createElement(W,null))},P=l.a.div({height:"100vh",width:"100vw",padding:"10vh 20vw",display:"flex"}),R=t(19),U=t(2),H=t(20),I={},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,n=arguments.length>1?arguments[1]:void 0;return Object(H.a)(e,function(e){n.type})},L=Object(U.c)({main:J});var N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var M,Y=Object(U.d)(L,Object(U.a)(R.a),M);!function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/service-worker.js");N?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):T(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):T(n,e)})}}(),Object(i.render)(o.a.createElement(r.a,{store:Y},o.a.createElement(D,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.5b124007.chunk.js.map