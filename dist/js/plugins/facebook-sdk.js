!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}("undefined"!=typeof self?self:this,function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=19)}({0:function(e,n,t){"use strict";n.a=function(e,n){setTimeout(function(){document.addEventListener("root-consent.plugin."+e+".load",function(t){n.onLoad(t.detail),Object(o.a)(document,"root-consent.plugin."+e+".loaded",{instance:n,name:e})}),Object(o.a)(document,"root-consent.plugin."+e+".registered",{instance:n,name:e})},0)};var o=t(1)},1:function(e,n,t){"use strict";n.a=function(e,n,t){var o=new r.a(n,{bubbles:!0,cancelable:!0,detail:t});e.dispatchEvent(o)};var o=t(2),r=t.n(o)},19:function(e,n,t){e.exports=t(7)},2:function(e,n,t){(function(n){var t=n.CustomEvent;e.exports=function(){try{var e=new t("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?t:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(e,n){var t=document.createEvent("CustomEvent");return n?t.initCustomEvent(e,n.bubbles,n.cancelable,n.detail):t.initCustomEvent(e,!1,!1,void 0),t}:function(e,n){var t=document.createEventObject();return t.type=e,n?(t.bubbles=Boolean(n.bubbles),t.cancelable=Boolean(n.cancelable),t.detail=n.detail):(t.bubbles=!1,t.cancelable=!1,t.detail=void 0),t}}).call(n,t(3))},3:function(e,n){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},7:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},c=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.config={appID:"123456789",version:"2.0"}}return c(e,[{key:"onLoad",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.config=r({},this.config,e)}},{key:"onApprove",value:function(){this._loadSDK(),console.log("Facebook SDK is enabled.")}},{key:"onDeny",value:function(){console.log("Facebook SDK is not enabled.")}},{key:"_loadSDK",value:function(){var e=document.createElement("div",{id:"fb-root"});document.body.appendChild(e);var n,t,o,r,c,a=this.config.appID+"&version=v"+this.config.version;n=document,t="script",o="facebook-jssdk",c=n.getElementsByTagName(t)[0],n.getElementById(o)||((r=n.createElement(t)).id=o,r.src="//connect.facebook.net/en_US/sdk.js#xfbml=1&appId="+a,c.parentNode.insertBefore(r,c))}}]),e}();Object(o.a)("facebook-sdk",new a)}})});