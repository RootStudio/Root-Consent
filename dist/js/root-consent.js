!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t,n){"use strict";t.a=function(e,t,n){var o=new r.a(t,{bubbles:!0,cancelable:!0,detail:n});e.dispatchEvent(o)};var o=n(1),r=n.n(o)},function(e,t,n){(function(t){var n=t.CustomEvent;e.exports=function(){try{var e=new n("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?n:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(t,n(2))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(5),n(6);var o=n(0),r={messageTitle:"Your Right to Privacy",messageText:"This website uses analytics software - do you wish to be included in the collected data? Find out more in our Privacy Policy.",approveLabel:"I accept",denyLabel:"No thanks",storageKey:"root-consent",storageDate:"root-date",delay:1e3,expiryFrame:864e5,expiry:30,position:"bottom",theme:"dark"};n.d(t,"RootConsent",function(){return a});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var a=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t instanceof Element?this.element=t:this.element=document.querySelector(t),"undefined"!=typeof jQuery&&this.element instanceof jQuery&&(this.element=this.element[0]),this.config=i({},r,n),!this.hasConsented()&&this.isNewVisitor()&&this._displayConsentMessage(),this.plugins=[],Object(o.a)(this.element,"root-consent.setup")}return s(e,[{key:"_consentMessageTemplate",value:function(){var e=this,t=this.config,n=t.messageTitle,o=t.messageText,r=t.approveLabel,i=t.denyLabel,s='\n            <div class="root-consent root-consent--'+t.position+" root-consent--"+t.theme+'">\n                <div class="root-consent__message">\n                    <strong class="root-consent__message-title">'+n+'</strong>\n                    <p class="root-consent__message-text">'+o+'</p>\n                </div>\n                <div class="root-consent__actions">\n                    <button class="root-consent__btn root-consent__btn--approve">'+r+'</button>\n                    <button class="root-consent__btn root-consent__btn--deny">'+i+"</button>\n                </div>\n            </div>\n        ";try{var a=document.createRange().createContextualFragment(s);return a.querySelector(".root-consent__btn--approve").addEventListener("click",function(){e.consentApproved()}),a.querySelector(".root-consent__btn--deny").addEventListener("click",function(){e.consentDenied()}),a}catch(t){var c=document.createElement("html");return c.innerHTML=s,(c=c.cloneNode(!0).querySelector(".root-consent")).querySelector(".root-consent__btn--approve").addEventListener("click",function(){e.consentApproved()}),c.querySelector(".root-consent__btn--deny").addEventListener("click",function(){e.consentDenied()}),c}}},{key:"_displayConsentMessage",value:function(){var e=this;this.element.appendChild(this._consentMessageTemplate()),setTimeout(function(){document.querySelector(".root-consent").classList.add("root-consent--active"),Object(o.a)(e.element,"root-consent.display")},this.config.delay)}},{key:"_hideConsentMessage",value:function(){document.querySelector(".root-consent").classList.remove("root-consent--active"),Object(o.a)(this.element,"root-consent.hide")}},{key:"_loadPlugin",value:function(e){var t=e.detail,n=t.instance,o=t.name,r=this.plugins.find(function(e){return e.name===o});r.instance=n,r.loaded=!0,this._actionPlugins()}},{key:"_actionPlugins",value:function(){var e=this;if(!this.isNewVisitor()){var t=this.hasConsented();this.plugins.filter(function(e){return e.loaded&&!e.actioned}).forEach(function(n){var r=n.name,i=n.instance;t?i.onApprove():i.onDeny(),Object(o.a)(e.element,"root-consent.plugin."+r+"."+(t?"approve":"deny"),{name:r,instance:i}),n.actioned=!0})}}},{key:"consentApproved",value:function(){localStorage.setItem(this.config.storageKey,JSON.stringify({consent:!0,date:Date.now()})),Object(o.a)(this.element,"root-consent.approve"),this._hideConsentMessage(),this._actionPlugins()}},{key:"consentDenied",value:function(){localStorage.setItem(this.config.storageKey,JSON.stringify({consent:!1,date:Date.now()})),Object(o.a)(this.element,"root-consent.deny"),this._hideConsentMessage(),this._actionPlugins()}},{key:"isNewVisitor",value:function(){return null===JSON.parse(localStorage.getItem(this.config.storageKey))}},{key:"hasConsented",value:function(){var e=JSON.parse(localStorage.getItem(this.config.storageKey));return e&&e.consent&&!this.consentExpired(e.date)}},{key:"registerPlugin",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.plugins.push({name:e,options:n,instance:!1,loaded:!1,actioned:!1}),document.addEventListener("root-consent.plugin.registered."+e,function(r){Object(o.a)(t.element,"root-consent.plugin.load."+e,n)}),document.addEventListener("root-consent.plugin.loaded."+e,function(e){t._loadPlugin(e)}),Object(o.a)(this.element,"root-consent.plugin.load."+e,n)}},{key:"registerMultiple",value:function(e){var t=this;e.forEach(function(e){t.registerPlugin(e.name,e.options)})}},{key:"destroy",value:function(){localStorage.removeItem(this.config.storageKey),Object(o.a)(this.element,"root-consent.destroy")}},{key:"consentExpired",value:function(e){e=new Date(e);var t=new Date;if(Math.abs(t.getTime()-e.getTime())/this.config.expiryFrame>this.config.expiry)return this.destroy(),!0}}]),e}();window.rootConsent=function(e,t){return new a(e,t)}},function(e,t){Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var o=arguments[1],r=0;r<n;){var i=t[r];if(e.call(o,i,r,t))return i;r++}},configurable:!0,writable:!0})},function(e,t){try{var n=new window.CustomEvent("test");if(n.preventDefault(),!0!==n.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var o=function(e,t){var n,o;return t=t||{bubbles:!1,cancelable:!1,detail:void 0},(n=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o=n.preventDefault,n.preventDefault=function(){o.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n};o.prototype=window.Event.prototype,window.CustomEvent=o}},,,,,function(e,t,n){n(4),e.exports=n(12)},function(e,t){}])});