!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}("undefined"!=typeof self?self:this,function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=18)}({0:function(e,n,t){"use strict";n.a=function(e,n,t){var o=new a.a(n,{bubbles:!0,cancelable:!0,detail:t});e.dispatchEvent(o)};var o=t(1),a=t.n(o)},1:function(e,n,t){(function(n){var t=n.CustomEvent;e.exports=function(){try{var e=new t("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?t:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(e,n){var t=document.createEvent("CustomEvent");return n?t.initCustomEvent(e,n.bubbles,n.cancelable,n.detail):t.initCustomEvent(e,!1,!1,void 0),t}:function(e,n){var t=document.createEventObject();return t.type=e,n?(t.bubbles=Boolean(n.bubbles),t.cancelable=Boolean(n.cancelable),t.detail=n.detail):(t.bubbles=!1,t.cancelable=!1,t.detail=void 0),t}}).call(n,t(2))},18:function(e,n,t){e.exports=t(7)},2:function(e,n){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},3:function(e,n,t){"use strict";n.a=function(e,n){document.addEventListener("root-consent.plugin.load."+e,function(t){n.onLoad(t.detail),Object(o.a)(document,"root-consent.plugin.loaded."+e,{instance:n,name:e})}),Object(o.a)(document,"root-consent.plugin.registered."+e,{instance:n,name:e})};var o=t(0)},7:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(3),a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var c=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.config={trackingID:"UA-123",gaScript:"https://www.google-analytics.com/analytics.js",gaSettings:"auto",anonymizeIp:!1}}return i(e,[{key:"onLoad",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.config=a({},this.config,e)}},{key:"onApprove",value:function(){this._loadAnalyticsScript(),console.log("Google Analytics are enabled.")}},{key:"onDeny",value:function(){console.log("Google Analytics are not enabled.")}},{key:"_loadAnalyticsScript",value:function(){var e,n,t,o,a,i,c;e=window,n=document,t="script",o=this.config.gaScript,a="ga",e.GoogleAnalyticsObject=a,e.ga=e.ga||function(){(e.ga.q=e.ga.q||[]).push(arguments)},e.ga.l=1*new Date,i=n.createElement(t),c=n.getElementsByTagName(t)[0],i.async=1,i.src=void 0!==o?o:"https://www.google-analytics.com/analytics.js",c.parentNode.insertBefore(i,c),window.ga("create",this.config.trackingID,this.config.gaSettings),window.ga("set","anonymizeIp",this.config.anonymizeIp),window.ga("send","pageview")}}]),e}();setTimeout(function(){Object(o.a)("google-analytics",new c)},0)}})});