!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}([function(e,t,n){"use strict";t.a=function(e,t,n){var o=new a.a(t,{bubbles:!0,cancelable:!0,detail:n});e.dispatchEvent(o)};var o=n(1),a=n.n(o)},function(e,t,n){(function(t){var n=t.CustomEvent;e.exports=function(){try{var e=new n("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?n:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(t,n(2))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},,,,function(e,t,n){"use strict";t.a=function(e,t){document.addEventListener("root-consent.plugin.load."+e,function(n){t.onLoad(n.detail,t),Object(o.a)(document,"root-consent.plugin.registered."+e,{instance:t,name:e})}),Object(o.a)(document,"root-consent.plugin.registered."+e,{instance:t,name:e})};var o=n(0)},,,,,,,function(e,t,n){e.exports=n(14)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(6),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config={trackingID:"UA-123",gaScript:"https://www.google-analytics.com/analytics.js",gaSettings:"auto",anonymizeIp:!1}}return i(e,[{key:"onLoad",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};console.log("Analytics loaded"),this.config=a({},t)}},{key:"onApprove",value:function(){this._loadAnalyticsScript(),console.log("Google Analytics are enabled.")}},{key:"onDeny",value:function(){console.log("Google Analytics are not enabled.")}},{key:"_loadAnalyticsScript",value:function(){var e,t,n,o,a,i,c;e=window,t=document,n="script",o=this.config.gaScript,a="ga",e.GoogleAnalyticsObject=a,e.ga=e.ga||function(){(e.ga.q=e.ga.q||[]).push(arguments)},e.ga.l=1*new Date,i=t.createElement(n),c=t.getElementsByTagName(n)[0],i.async=1,i.src=void 0!==o?o:"https://www.google-analytics.com/analytics.js",c.parentNode.insertBefore(i,c),window.ga("create",this.config.trackingID,this.config.gaSettings),window.ga("send","pageview"),window.ga("set",this.config.anonymizeIp)}}]),e}();setTimeout(function(){Object(o.a)("google-analytics",new c)},0)}])});