!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(self,(function(){return(()=>{var e={287:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(638),r=n.n(o);function i(e,t,n){var o=new(r())(t,{bubbles:!0,cancelable:!0,detail:n});e.dispatchEvent(o)}},383:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(287);function r(e,t){setTimeout((function(){document.addEventListener("root-consent.plugin.".concat(e,".load"),(function(n){t.onLoad(n.detail),(0,o.Z)(document,"root-consent.plugin.".concat(e,".loaded"),{instance:t,name:e})})),(0,o.Z)(document,"root-consent.plugin.".concat(e,".registered"),{instance:t,name:e})}),0)}},638:(e,t,n)=>{var o=n.g.CustomEvent;e.exports=function(){try{var e=new o("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?o:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{"use strict";n.r(o);var e=n(383);function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config={cid:1234}}var t,n,o;return t=e,n=[{key:"onLoad",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.config=r(r({},this.config),e)}},{key:"onApprove",value:function(){this.init()}},{key:"onDeny",value:function(){}},{key:"init",value:function(){this.config.cid,function(){window.digitalgroupmedia="digitalgroupmedia",window.digitalgroupmedia=window.digitalgroupmedia||function(){(window.digitalgroupmedia.q=window.ga.q||[]).push(arguments)},window.digitalgroupmedia.l=1*new Date;var e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.async=1,e.src="https://api1.websuccess-data.com/wltracker.js",t.parentNode.insertBefore(e,t)}()}}],n&&a(t.prototype,n),o&&a(t,o),e}();(0,e.Z)("DGM",new c)})(),o})()}));