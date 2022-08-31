(()=>{"use strict";var r,n,e,t,o,a,i,s,c,p,d,u,f,l,m={426:(r,n,e)=>{e.d(n,{Z:()=>s});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([r.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 16px;\r\n  background: #f5f5f5;\r\n}\r\n\r\nh1 {\r\n  font-size: 50px;\r\n  font-weight: 700;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.wrapper {\r\n  width: 90%;\r\n  max-width: 960px;\r\n  margin: 50px auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.leaderboard {\r\n  display: flex;\r\n  gap: 10px;\r\n  align-items: center;\r\n}\r\n\r\n.right {\r\n  width: 50%;\r\n  height: 100%;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.recent-score {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.left {\r\n  width: 50%;\r\n  height: 100%;\r\n  padding: 2px;\r\n}\r\n\r\n.left p {\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n  margin-bottom: 10px;\r\n  padding: 10px;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 7px;\r\n  padding: 10px;\r\n}\r\n\r\nform input[type] {\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  padding: 5px;\r\n  width: 50%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nform button {\r\n  border: none;\r\n  border-radius: 5px;\r\n  width: 50%;\r\n  padding: 5px;\r\n  color: #fff;\r\n  background: #4caf50;\r\n  cursor: pointer;\r\n}\r\n",""]);const s=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var p=0;p<r.length;p++){var d=[].concat(r[p]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],s=0;s<r.length;s++){var c=r[s],p=t.base?c[0]+t.base:c[0],d=a[p]||0,u="".concat(p," ").concat(d);a[p]=d+1;var f=e(u),l={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)n[f].references++,n[f].updater(l);else{var m=o(l,t);t.byIndex=s,n.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var s=e(a[i]);n[s].references--}for(var c=t(r,o),p=0;p<a.length;p++){var d=e(a[p]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},v={};function h(r){var n=v[r];if(void 0!==n)return n.exports;var e=v[r]={id:r,exports:{}};return m[r](e,e.exports,h),e.exports}h.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return h.d(n,{a:n}),n},h.d=(r,n)=>{for(var e in n)h.o(n,e)&&!h.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},h.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),h.nc=void 0,r=h(379),n=h.n(r),e=h(795),t=h.n(e),o=h(569),a=h.n(o),i=h(565),s=h.n(i),c=h(216),p=h.n(c),d=h(589),u=h.n(d),f=h(426),(l={}).styleTagTransform=u(),l.setAttributes=s(),l.insert=a().bind(null,"head"),l.domAPI=t(),l.insertStyleElement=p(),n()(f.Z,l),f.Z&&f.Z.locals&&f.Z.locals})();