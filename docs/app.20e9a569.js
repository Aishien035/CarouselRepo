parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"A2T1":[function(require,module,exports) {
for(var e=document.querySelectorAll(".fa-angle-double-left"),t=document.querySelectorAll(".swiper-details"),l=0,c=function(t){e[t].addEventListener("click",function(){l=t})},i=0;i<t.length;i++)c(i);document.addEventListener("click",function(e){if(e.target.classList.contains("fa-angle-double-left"))t[l].style.clipPath="circle(130% at 110% 50%)";else if(e.target.classList.contains("swiper-details"))for(var c=0;c<t.length;c++)t[c].style.clipPath="circle(0% at 110% 50%)";else if(e.target.classList.contains("swiper"))for(var i=0;i<t.length;i++)t[i].style.clipPath="circle(0% at 110% 50%)"});
},{}]},{},["A2T1"], null)
//# sourceMappingURL=app.20e9a569.js.map