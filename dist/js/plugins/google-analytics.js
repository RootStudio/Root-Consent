!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}([function(e,t,n){"use strict";t.a=function(e,t,n){var o=new a.a(t,{bubbles:!0,cancelable:!0,detail:n});e.dispatchEvent(o)};var o=n(1),a=n.n(o)},function(e,t,n){(function(t){var n=t.CustomEvent;e.exports=function(){try{var e=new n("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?n:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(t,n(2))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},,,,,function(e,t,n){"use strict";t.a=function(e,t){document.addEventListener("root-consent.plugin.load."+e,function(e){t.onLoad(e,t)})};n(0)},,,,,,function(e,t,n){e.exports=n(14)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),a=n(0),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};Object(o.a)("google-analytics",new function(){var e={},t={trackingID:"UA-123",gaScript:"https://www.google-analytics.com/analytics.js",gaSettings:"auto"};return{onLoad:function(n,o){e=c({},t,n),Object(a.a)(document,"root-consent.plugin.loaded.google-analytics",{name:"google-analytics",instance:o})},onApprove:function(){var t,n,o,a,c,r,i;t=window,n=document,o="script",a=e.gaScript,c="ga",t.GoogleAnalyticsObject=c,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,r=n.createElement(o),i=n.getElementsByTagName(o)[0],r.async=1,r.src=a,i.parentNode.insertBefore(r,i),window.ga("create",e.trackingID,e.gaSettings),window.ga("send","pageview"),console.log("Google Analytics are enabled.")},onDeny:function(){console.log("Google Analytics are not enabled.")}}})}])});