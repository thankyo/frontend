require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({4:[function(require,module,exports) {

},{}],2:[function(require,module,exports) {
"use strict";require("./integration.sass"),function(){var e=document.getElementsByTagName("svg")[0],t=document.getElementById("counter"),n=0;function o(){t.innerText=n.toString()}function r(){e.setAttribute("class","fab-is-loved is-unselectable")}function i(){e.setAttribute("class","fab-is-error is-unselectable")}function a(e){if(!e)return null;var t=e.split(".")[1].replace("-","+").replace("_","/");return JSON.parse(window.atob(t)).id}var u,c=localStorage.getItem("token"),l=null!==c?a(c):null;u="/api/v1/thank/graph?url="+encodeURIComponent(document.referrer),fetch(u,{headers:{"X-Auth-Token":c}}).then(function(e){e.ok?e.json().then(function(e){var t=e.thank,i=t.given,u=t.supporters;n=i,o();var c=a(localStorage.getItem("token"));u.some(function(e){return c===e})&&r()}):i()}),e.onclick=function(e){e.preventDefault(),null!=l?function(){r(),o(n++);var e={method:"POST",headers:{"X-Auth-Token":c,"Content-Type":"application/json"},body:JSON.stringify({url:document.referrer})};fetch(new Request("/api/v1/thank/graph/my/support",e)).then(function(e){e.ok||i()})}():top.location=window.location.origin}}();
},{"./integration.sass":4}]},{},[2])