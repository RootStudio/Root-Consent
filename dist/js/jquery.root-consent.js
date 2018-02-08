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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fireEvent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_custom_event__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_custom_event___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_custom_event__);


function fireEvent(element, type, detail) {
    var event = new __WEBPACK_IMPORTED_MODULE_0_custom_event___default.a(type, {
        bubbles: true,
        cancelable: true,
        detail: detail
    });

    element.dispatchEvent(event);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
var NativeCustomEvent = global.CustomEvent;

function useNative () {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return  'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {
  }
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :

// IE >= 9
'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent (type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent (type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["rootConsent"] = rootConsent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_fire_event__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaults__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




function rootConsent(element, options) {

    var config = {};

    var plugins = [];

    /**
     * Convert jQuery objects to standard element
     */

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
            denyLabel = _config.denyLabel,
            position = _config.position,
            theme = _config.theme;


        var html = '\n            <div class="root-consent root-consent--' + position + ' root-consent--' + theme + '">\n                <div class="root-consent__message">\n                    <strong class="root-consent__message-title">' + messageTitle + '</strong>\n                    <p class="root-consent__message-text">' + messageText + '</p>\n                </div>\n                <div class="root-consent__actions">\n                    <button class="root-consent__btn root-consent__btn--approve">' + approveLabel + '</button>\n                    <button class="root-consent__btn root-consent__btn--deny">' + denyLabel + '</button>\n                </div>\n            </div>\n        ';

        var template = document.createRange().createContextualFragment(html);

        template.querySelector('.root-consent__btn--approve').addEventListener('click', consentApproved);
        template.querySelector('.root-consent__btn--deny').addEventListener('click', consentDenied);

        return template;
    }

    function _displayConsentMessage() {
        element.appendChild(_consentMessageTemplate());

        setTimeout(function () {
            document.querySelector('.root-consent').classList.add('root-consent--active');
            Object(__WEBPACK_IMPORTED_MODULE_0__utils_fire_event__["a" /* default */])(element, 'root-consent.display');
        }, config.delay);
    }

    function _hideConsentMessage() {
        document.querySelector('.root-consent').classList.remove('root-consent--active');
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_fire_event__["a" /* default */])(element, 'root-consent.hide');
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
        plugin.loaded = true;

        // Fire load method
        plugin.instance.onLoad(plugin.options);

        Object(__WEBPACK_IMPORTED_MODULE_0__utils_fire_event__["a" /* default */])(element, 'root-consent.plugin.' + name + '.load', {
            name: name,
            instance: instance
        });

        // We need to run this each time to catch up
        // slow loading plugins if the user has
        // already made their choice.
        _actionPlugins();
    }

    function _actionPlugins() {
        if (isNewVisitor()) return;

        var fireApprove = hasConsented();

        plugins.filter(function (plugin) {
            return plugin.loaded && !plugin.actioned;
        }).forEach(function (plugin) {
            var name = plugin.name,
                instance = plugin.instance;


            fireApprove ? instance.onApprove() : instance.onDeny();

            Object(__WEBPACK_IMPORTED_MODULE_0__utils_fire_event__["a" /* default */])(element, 'root-consent.plugin.' + name + '.' + (fireApprove ? 'approve' : 'deny'), {
                name: name,
                instance: instance
            });

            plugin.actioned = true;
        });
    }

    /**
     * Public
     */

    function consentApproved() {
        localStorage.setItem(config.storageKey, true);

        Object(__WEBPACK_IMPORTED_MODULE_0__utils_fire_event__["a" /* default */])(element, 'root-consent.approve');

        _hideConsentMessage();

        _actionPlugins();
    }

    function consentDenied() {
        localStorage.setItem(config.storageKey, false);

        Object(__WEBPACK_IMPORTED_MODULE_0__utils_fire_event__["a" /* default */])(element, 'root-consent.deny');

        _hideConsentMessage();

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
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        plugins.push({
            name: name,
            options: options,
            instance: false,
            loaded: false,
            actioned: false
        });

        document.addEventListener('root-consent.plugin.load.' + name, _loadPlugin);
    }

    function setup() {
        config = _extends({}, __WEBPACK_IMPORTED_MODULE_1__defaults__["a" /* default */], options);

        if (!hasConsented() && isNewVisitor()) {
            _displayConsentMessage();
        }

        Object(__WEBPACK_IMPORTED_MODULE_0__utils_fire_event__["a" /* default */])(element, 'root-consent.setup');
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({

    messageTitle: 'GDPR Consent',

    messageText: 'Do you want us to track everything you do?',

    approveLabel: 'I accept',

    denyLabel: 'No thanks',

    storageKey: 'root-consent',

    delay: 1000,

    position: 'bottom',

    theme: 'dark'

});

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_consent__ = __webpack_require__(3);


function init($) {
    $.fn.lory = function (options) {
        return this.each(function () {
            var instanceOptions;

            if (!$.data(this, 'lory')) {
                instanceOptions = $.extend({}, options, $(this).data());
                $.data(this, 'rootConsent', Object(__WEBPACK_IMPORTED_MODULE_0__root_consent__["rootConsent"])(this, instanceOptions));
            }
        });
    };
};

if (typeof jQuery !== 'undefined') {
    init(jQuery);
}

/***/ })
/******/ ]);
});