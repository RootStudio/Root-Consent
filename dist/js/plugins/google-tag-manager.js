!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=21)}({0:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(2),r=n.n(o);function a(e,t,n){var o=new r.a(t,{bubbles:!0,cancelable:!0,detail:n});e.dispatchEvent(o)}},1:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(0);function r(e,t){setTimeout((function(){document.addEventListener("root-consent.plugin.".concat(e,".load"),(function(n){t.onLoad(n.detail),Object(o.a)(document,"root-consent.plugin.".concat(e,".loaded"),{instance:t,name:e})})),Object(o.a)(document,"root-consent.plugin.".concat(e,".registered"),{instance:t,name:e})}),0)}},2:function(e,t,n){(function(t){var n=t.CustomEvent;e.exports=function(){try{var e=new n("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?n:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(this,n(3))},21:function(e,t,n){e.exports=n(6)},3:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},6:function(e,t,n){"use strict";n.r(t);var o=n(1);function r(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config={tagID:"GTM-XXXXXXX"}}var t,n,o;return t=e,(n=[{key:"onLoad",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.config=a({},this.config,{},e)}},{key:"onApprove",value:function(){this._loadAnalyticsScript()}},{key:"onDeny",value:function(){}},{key:"_loadAnalyticsScript",value:function(){!function(e,t,n,o,r){e[o]=e[o]||[],e[o].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var a=t.getElementsByTagName(n)[0],i=t.createElement(n);i.async=!0,i.src="https://www.googletagmanager.com/gtag/js?id="+r,a.parentNode.insertBefore(i,a)}(window,document,"script","dataLayer",this.config.tagID),window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)},gtag("js",new Date),gtag("config",this.config.tagID,{anonymize_ip:!0})}}])&&c(t.prototype,n),o&&c(t,o),e}();Object(o.a)("google-tag-manager",new u)}})}));