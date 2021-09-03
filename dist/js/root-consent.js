!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=11)}({0:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(2),r=n.n(o);function i(e,t,n){var o=new r.a(t,{bubbles:!0,cancelable:!0,detail:n});e.dispatchEvent(o)}},11:function(e,t,n){n(4),e.exports=n(23)},2:function(e,t,n){(function(t){var n=t.CustomEvent;e.exports=function(){try{var e=new n("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?n:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(this,n(3))},23:function(e,t){},3:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},4:function(e,t,n){"use strict";n.r(t),n.d(t,"RootConsent",(function(){return a}));var o=n(0),r={messageTitle:"Your Right to Privacy",messageText:"This website uses analytics software - do you wish to be included in the collected data? Find out more in our Privacy Policy.",approveLabel:"I accept",denyLabel:"No thanks",storageKey:"root-consent",delay:1e3,expiryFrame:864e5,expiry:30,position:"bottom",theme:"dark",alwaysApproved:!1};function i(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t instanceof Element?this.element=t:this.element=document.querySelector(t),"undefined"!=typeof jQuery&&this.element instanceof jQuery&&(this.element=this.element[0]),this.config=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r,{},n),!this.hasConsented()&&this.isNewVisitor()&&this._displayConsentMessage(),this.plugins=[],Object(o.a)(this.element,"root-consent.setup")}var t,n,a;return t=e,(n=[{key:"_consentMessageTemplate",value:function(){var e=this,t=this.config,n=t.messageTitle,o=t.messageText,r=t.approveLabel,i=t.denyLabel,c=t.position,s=t.theme,a='\n            <div class="root-consent root-consent--'.concat(c," root-consent--").concat(s,'">\n                <div class="root-consent__message">\n                    <strong class="root-consent__message-title">').concat(n,'</strong>\n                    <p class="root-consent__message-text">').concat(o,'</p>\n                </div>\n                <div class="root-consent__actions">\n                    <button class="root-consent__btn root-consent__btn--approve">').concat(r,'</button>\n                    <button class="root-consent__btn root-consent__btn--deny">').concat(i,"</button>\n                </div>\n            </div>\n        ");try{var u=document.createRange().createContextualFragment(a);return u.querySelector(".root-consent__btn--approve").addEventListener("click",(function(){e.consentApproved()})),this.config.alwaysApproved?u.querySelector(".root-consent__btn--deny").style.display="none":u.querySelector(".root-consent__btn--deny").addEventListener("click",(function(){e.consentDenied()})),u}catch(t){var l=document.createElement("html");return l.innerHTML=a,(l=l.cloneNode(!0).querySelector(".root-consent")).querySelector(".root-consent__btn--approve").addEventListener("click",(function(){e.consentApproved()})),this.config.alwaysApproved?l.querySelector(".root-consent__btn--deny").style.display="none":l.querySelector(".root-consent__btn--deny").addEventListener("click",(function(){e.consentDenied()})),l}}},{key:"_displayConsentMessage",value:function(){var e=this;this.element.appendChild(this._consentMessageTemplate()),setTimeout((function(){e.element.querySelector(".root-consent").classList.add("root-consent--active"),Object(o.a)(e.element,"root-consent.display")}),this.config.delay)}},{key:"_hideConsentMessage",value:function(){var e=this.element.querySelector(".root-consent");e.classList.remove("root-consent--active"),Object(o.a)(this.element,"root-consent.hide"),setTimeout((function(){e.remove()}),200)}},{key:"_loadPlugin",value:function(e){var t=e.detail,n=t.instance,o=t.name,r=this.plugins.find((function(e){return e.name===o}));r.instance=n,r.loaded=!0,this._actionPlugins()}},{key:"_actionPlugins",value:function(){var e=this;if(!this.isNewVisitor()||this.config.alwaysApproved){var t=this.hasConsented()||this.config.alwaysApproved;this.plugins.filter((function(e){return e.loaded&&!e.actioned})).forEach((function(n){var r=n.name,i=n.instance;t?i.onApprove():i.onDeny(),Object(o.a)(e.element,"root-consent.plugin.".concat(r,".").concat(t?"approve":"deny"),{name:r,instance:i}),n.actioned=!0}))}}},{key:"consentApproved",value:function(){localStorage.setItem(this.config.storageKey,JSON.stringify({consent:!0,date:Date.now()})),Object(o.a)(this.element,"root-consent.approve"),this._hideConsentMessage(),this._actionPlugins()}},{key:"consentDenied",value:function(){localStorage.setItem(this.config.storageKey,JSON.stringify({consent:!1,date:Date.now()})),Object(o.a)(this.element,"root-consent.deny"),this._hideConsentMessage(),this._actionPlugins()}},{key:"isNewVisitor",value:function(){return null===JSON.parse(localStorage.getItem(this.config.storageKey))}},{key:"hasConsented",value:function(){var e=JSON.parse(localStorage.getItem(this.config.storageKey));return e&&e.consent&&!this.consentExpired(e.date)}},{key:"registerPlugin",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.plugins.push({name:e,options:n,instance:!1,loaded:!1,actioned:!1}),document.addEventListener("root-consent.plugin.".concat(e,".registered"),(function(r){Object(o.a)(t.element,"root-consent.plugin.".concat(e,".load"),n)})),document.addEventListener("root-consent.plugin.".concat(e,".loaded"),(function(e){t._loadPlugin(e)})),Object(o.a)(this.element,"root-consent.plugin.".concat(e,".load"),n)}},{key:"registerMultiple",value:function(e){var t=this;e.forEach((function(e){t.registerPlugin(e.name,e.options)}))}},{key:"destroy",value:function(){localStorage.removeItem(this.config.storageKey),Object(o.a)(this.element,"root-consent.destroy")}},{key:"consentExpired",value:function(e){e=new Date(e);var t=new Date;if(Math.abs(t.getTime()-e.getTime())/this.config.expiryFrame>this.config.expiry)return this.destroy(),!0}}])&&s(t.prototype,n),a&&s(t,a),e}();window.rootConsent=function(e,t){return new a(e,t)}}})}));