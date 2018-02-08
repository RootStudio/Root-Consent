(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["GDPRConsentBarrier"] = GDPRConsentBarrier;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaults__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function GDPRConsentBarrier(element, options) {

    var config = {};

    var plugins = [];

    if (typeof jQuery !== 'undefined' && element instanceof jQuery) {
        element = element[0];
    }

    /**
     * Private
     */
    function _consentMessageTemplate() {
        var _config = config,
            messageTitle = _config.messageTitle,
            messageText = _config.messageText,
            approveLabel = _config.approveLabel,
            denyLabel = _config.denyLabel;


        var html = '\n            <div class="gpdr-consent">\n                <div class="gpdr-consent__message">\n                    <strong class="gpdr-consent__message-title">' + messageTitle + '</strong>\n                    <p class="gpdr-consent__message-text">' + messageText + '</p>\n                </div>\n                <div class="gpdr-consent__actions">\n                    <button class="gpdr-consent__btn gpdr-consent__btn--approve">' + approveLabel + '</button>\n                    <button class="gpdr-consent__btn gpdr-consent__btn--deny">' + denyLabel + '</button>\n                </div>\n            </div>\n        ';

        var template = document.createRange().createContextualFragment(html);

        template.querySelector('.gpdr-consent__btn--approve').addEventListener('click', consentApproved);
        template.querySelector('.gpdr-consent__btn--deny').addEventListener('click', consentDenied);

        return template;
    }

    function _displayConsentMessage() {
        element.appendChild(_consentMessageTemplate());
    }

    function _loadPlugin(_ref) {
        var detail = _ref.detail;
        var name = detail.name,
            instance = detail.instance;

        // Find plugin in stack

        var plugin = plugins.find(function (p) {
            return p.name === name;
        });

        // Update with new information
        plugin.instance = instance;
        plugin.pinged = true;

        // Fire registered method
        plugin.instance.onRegister();

        // We need to run this each time to catch up
        // slow loading plugins if the user has
        // already made their choice.
        _actionPlugins();
    }

    function _actionPlugins() {
        if (isNewVisitor()) return;

        var fireApprove = hasConsented();

        plugins.filter(function (plugin) {
            return plugin.pinged;
        }).forEach(function (_ref2) {
            var instance = _ref2.instance;

            fireApprove ? instance.onApprove() : instance.onDeny();
        });
    }

    /**
     * Public
     */

    function consentApproved() {
        localStorage.setItem(config.storageKey, true);

        _actionPlugins();
    }

    function consentDenied() {
        localStorage.setItem(config.storageKey, false);

        _actionPlugins();
    }

    function isNewVisitor() {
        var consent = localStorage.getItem(config.storageKey);

        return consent === null;
    }

    function hasConsented() {
        var consent = localStorage.getItem(config.storageKey);

        return consent === 'true';
    }

    function registerPlugin(name) {
        plugins.push({
            name: name,
            instance: false,
            pinged: false
        });

        document.addEventListener('gdpr_consent.provide.' + name, _loadPlugin);
    }

    function setup() {
        config = _extends({}, __WEBPACK_IMPORTED_MODULE_0__defaults__["a" /* default */], options);

        if (!hasConsented() && isNewVisitor()) {
            _displayConsentMessage();
        }
    }

    setup();

    // API
    return {
        setup: setup,
        consentApproved: consentApproved,
        consentDenied: consentDenied,
        isNewVisitor: isNewVisitor,
        hasConsented: hasConsented,
        registerPlugin: registerPlugin
    };
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({

    messageTitle: 'GDPR Consent',

    messageText: 'Do you want us to track everything you do?',

    approveLabel: 'I accept',

    denyLabel: 'No thanks',

    storageKey: 'gpdr_consent',

    position: 'bottom',

    theme: 'dark'

});

/***/ })
/******/ ]);
});