(this["webpackJsonptomfa.github"]=this["webpackJsonptomfa.github"]||[]).push([[0],{119:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(5),o=t.n(i),c=t(2),l=t(3),u="(min-width: 768px)",f=(t(50),t(6)),m=t(13);function s(){var n=Object(c.a)(["\n  max-width: 100%;\n  max-height: 300px;\n  overflow: hidden;\n"]);return s=function(){return n},n}function d(){var n=Object(c.a)(["\n  width: 100%;\n  cursor: pointer;\n  min-height: 200px;\n\n  @media "," {\n    transition: filter 0.3s;\n    filter: brightness(0.6);\n\n    &:hover {\n      filter: brightness(1);\n    }\n  }\n"]);return d=function(){return n},n}var h=l.a.img(d(),u),b=l.a.div(s()),p=function(n){var e=n.images,t=n.thumbnail,i=e[0].caption,o=Object(r.useState)(!1),c=Object(f.a)(o,2),l=c[0],u=c[1];return a.a.createElement(b,null,a.a.createElement(h,{src:t,alt:i,onClick:function(){return u(!0)}}),a.a.createElement(m.b,null,l?a.a.createElement(m.a,{onClose:function(){return u(!1)}},a.a.createElement(m.c,{views:e.map((function(n){return{src:n}})),isFullscreen:!0})):null))};function g(){var n=Object(c.a)(["\n  border-color: #6a78cc;\n"]);return g=function(){return n},n}function v(){var n=Object(c.a)(["\n  border-color: #93cc6a;\n"]);return v=function(){return n},n}function w(){var n=Object(c.a)(["\n  border-color: #679943;\n"]);return w=function(){return n},n}function j(){var n=Object(c.a)(["\n  border-color: #fffc9e;\n"]);return j=function(){return n},n}function E(){var n=Object(c.a)(["\n  border-color: #e2deff;\n"]);return E=function(){return n},n}function y(){var n=Object(c.a)(["\n  display: block;\n  color: #dddddd;\n  font-weight: 200;\n  margin-top: 4px;\n  padding: 2px;\n  text-align: right;\n  padding-right: 0.5rem;\n  border-width: 0;\n  border-right-width: 1rem;\n  border-style: solid;\n"]);return y=function(){return n},n}function O(){var n=Object(c.a)(["\n  display: none;\n  width: 25%;\n  padding-right: 70px;\n  position: absolute;\n  bottom: 0;\n  font-size: 0.8rem;\n  cursor: pointer;\n  transition: filter 0.5s;\n  filter: brightness(0.6);\n\n  &:hover {\n    filter: brightness(1);\n  }\n\n  @media "," {\n    display: block;\n  }\n"]);return O=function(){return n},n}var k=l.a.div(O(),u),x=l.a.span(y()),M=Object(l.a)(x)(E()),F=Object(l.a)(x)(j()),T=Object(l.a)(x)(w()),J=Object(l.a)(x)(v()),z=Object(l.a)(x)(g()),N=function(n){var e=n.category,t=n.label,r={projectType:M,library:F,language:T,platform:J,deployment:z}[e];return r||console.log(t,e),a.a.createElement(r,null,t)},S=function(n){var e=n.technologies,t=[];return Object.entries(e).forEach((function(n){var e=Object(f.a)(n,2),r=e[0],a=e[1];"string"===typeof a&&(a=[a]),a.forEach((function(n){return t.push({category:r,label:n})}))})),a.a.createElement(k,null,t.sort((function(n,e){return n.label.length-e.label.length})).map((function(n){return a.a.createElement(N,{key:n.label,category:n.category,label:n.label})})))};function C(){var n=Object(c.a)(["\n  position: relative;\n  margin-top: 1rem;\n\n  @media "," {\n    margin-top: 4rem;\n  }\n"]);return C=function(){return n},n}function W(){var n=Object(c.a)(["\n  margin: 0.5rem 0 0 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n\n  /* The line */\n  @media "," {\n    &::before {\n      content: '';\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      width: 4px;\n      background: #757575;\n      left: 25%;\n      margin-left: -37px;\n    }\n  }\n"]);return W=function(){return n},n}function L(){var n=Object(c.a)(["\n  font-size: 1rem;\n  color: #dddddd;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  \n  &:first-of-type {\n    padding-top: 0.8rem;\n  }\n"]);return L=function(){return n},n}var B=function(n){var e=n.month,t=n.year;return a.a.createElement("time",{className:"m-event-date"},a.a.createElement("span",{className:"a-event-date-month"},e),a.a.createElement("span",{className:"a-event-date-year"},t))},A=function(){return a.a.createElement("div",{className:"a-event-icon"},a.a.createElement("svg",{width:"20",height:"20"},a.a.createElement("circle",{cx:"10",cy:"10",r:"10",fill:"#FFFFFF"})))},H=l.a.p(L()),I=function(n){var e=n.event;return a.a.createElement("div",{className:"m-event-block"},a.a.createElement(p,{key:e.id,thumbnail:e.thumbnail,images:e.images}),a.a.createElement(H,null,e.description))},Y=l.a.ul(W(),u),$=l.a.li(C(),u),q=function(n){var e=n.events;return a.a.createElement("div",null,a.a.createElement(Y,null,e.map((function(n,e){return a.a.createElement($,{key:e},a.a.createElement(B,{month:n.month,year:n.year}),a.a.createElement(S,{technologies:n.tech}),a.a.createElement(A,null),a.a.createElement(I,{event:n}))}))))};function D(){var n=Object(c.a)(["\n  vertical-align: middle;\n  width: 100%;\n"]);return D=function(){return n},n}function G(){var n=Object(c.a)(["\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n\n  @media "," {\n    overflow: hidden;\n  }\n  background-color: #101010;\n"]);return G=function(){return n},n}var K=l.a.div(G(),u),P=l.a.div(D()),Q=function(n){var e=n.children;n.results;return a.a.createElement(K,null,a.a.createElement(P,null,e))},R=t(12);function U(){var n=Object(c.a)(["\n  transition: all 1.5s;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.5;\n  }\n"]);return U=function(){return n},n}var V=[["#110133","#00918e","#4dd599","#ffdc34"],["#ffa259","#fe6845","#fa4252","#91bd3a"],["#561f55","#8b2f97","#cf56a1","#fcb2bf"],["#dff6f0","#46b3e6","#4d80e4","#2e279d"],["#f8b195","#f67280","#4d80e4","#6c5b7b"],["#39375b","#745c97","#d597ce","#f5b0cb"],["#9be3de","#beebe9","#fffdf9","#ffe3ed"],["#eafbea","#6f9a8d","#1f6650","#ea5e5e"]],X=function(){var n=V[Math.floor(Math.random()*V.length)];return[].concat(Object(R.a)(n),Object(R.a)(n),Object(R.a)(n))},Z=function(n){var e=n.width,t=n.height;return n.radiuses.map((function(n){return[Math.floor(Math.random()*e),Math.floor(Math.random()*t)]}))},_=l.a.circle(U()),nn=function(n){var e=n.width,t=n.height,i=Object(r.useState)(X()),o=Object(f.a)(i,2),c=o[0],l=o[1],u=Object(r.useState)(function(n){var e=n.width,t=n.height,r=n.palette,a=r.length,i=Math.floor(2*Math.min(e,t)/a),o=Math.floor(i/8);return r.map((function(){return o+Math.floor(Math.random()*(i-o))}))}({width:e,height:t,palette:c})),m=Object(f.a)(u,1)[0],s=Object(r.useState)(Z({width:e,height:t,radiuses:m})),d=Object(f.a)(s,2),h=d[0],b=d[1];return a.a.createElement("svg",{width:e,height:t,xmlns:"http://www.w3.org/2000/svg"},h.map((function(n,r){var i=Object(f.a)(n,2),o=i[0],u=i[1];return a.a.createElement(_,{key:r,transform:"translate(".concat(o,", ").concat(u,")"),r:m[r],stroke:"#212121",strokeWidth:"1",fill:c[r],onClick:function(){b(Z({width:e,height:t,radiuses:m})),Math.random()>.93&&l(X())}})})))};function en(){var n=Object(c.a)(["\n  font-family: 'Lato', Calibri, Arial, sans-serif;\n  font-size: 1.25rem;\n  display: inline;\n  \n"]);return en=function(){return n},n}function tn(){var n=Object(c.a)(["\n  color: white;\n  text-decoration: none;\n  position: absolute;\n  left: 0;\n  bottom: 10px;\n  text-align: center;\n  width: 100%;\n  margin-bottom: 0.2rem;\n  transition: transform 0.5s;\n\n  &::after {\n    content: '\u25bc';\n    margin: 0 10px;\n  }\n\n  &:hover {\n    transform: translateY(-0.3rem);\n  }\n"]);return tn=function(){return n},n}var rn=l.a.a(tn()),an=l.a.h3(en()),on=function(){var n=function(){var n="object"===typeof window;function e(){return{width:n?window.innerWidth:void 0,height:n?window.innerHeight:void 0}}var t=Object(r.useState)(e),a=Object(f.a)(t,2),i=a[0],o=a[1];return Object(r.useEffect)((function(){if(!n)return!1;function t(){o(e())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),i}();return a.a.createElement(Q,null,a.a.createElement(nn,{width:n.width,height:n.height}),a.a.createElement(rn,{href:"#timeline"},a.a.createElement(an,null,"Timeline")))},cn=function(){return a.a.createElement("div",null,a.a.createElement(on,null),a.a.createElement(q,{events:[{id:1,year:2019,month:"January",tech:{language:"elm",platform:"heroku",deployment:"aws",library:"elm-ui",projectType:"personal"},link:"https://github.com",description:"There was once upon a time a great warrior named Johnsson",thumbnail:"https://placebear.com/500/300",images:["https://placebear.com/500/300","https://placebear.com/500/300"]},{id:2,year:2019,month:"January",tech:{language:"elm",platform:"heroku",deployment:"aws",library:"elm-ui",projectType:"personal"},link:"https://github.com",description:"There was once upon a time a great warrior named Johnsson",thumbnail:"https://placebear.com/500/300",images:["https://placebear.com/500/300","https://placebear.com/500/300"]}].filter((function(n){return!n.muted}))}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(cn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))},45:function(n,e,t){n.exports=t(119)},50:function(n,e,t){}},[[45,1,2]]]);
//# sourceMappingURL=main.009c658f.chunk.js.map