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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fireEvent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_custom_event__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_custom_event___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_custom_event__);


/**
 * Convenience wrapper for firing a custom event natively
 * across all browsers.
 *
 * @param {Element} element
 * @param {String} type
 * @param {String|Object|Number|Boolean} detail
 */
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
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["rootConsent"] = rootConsent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sass_root_consent_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sass_root_consent_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__sass_root_consent_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__polyfills_find__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__polyfills_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__polyfills_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_fire_event__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defaults__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



//Polyfills





/**
 * RootConsent library function
 *
 * @author James Wigger <james@rootstudio.co.uk>
 *
 * @param {Element} element
 * @param {Object} options
 * @returns {Object}
 * @constructor
 */
function rootConsent(element, options) {

    /**
     * Merged configuration values
     *
     * @type {Object}
     */
    var config = {};

    /**
     * Registered plugin state array
     *
     * @type {Array}
     */
    var plugins = [];

    // Converts jQuery Objects to DOM Node
    if (typeof jQuery !== 'undefined' && element instanceof jQuery) {
        element = element[0];
    }

    /**
     * Generates the consent message template and registered event handlers
     *
     * @private
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

    /**
     * Injects template into target element and triggers display animation
     *
     * @private
     */
    function _displayConsentMessage() {
        element.appendChild(_consentMessageTemplate());

        setTimeout(function () {
            document.querySelector('.root-consent').classList.add('root-consent--active');
            Object(__WEBPACK_IMPORTED_MODULE_2__utils_fire_event__["a" /* default */])(element, 'root-consent.display');
        }, config.delay);
    }

    /**
     * Triggers hide animation for message template
     *
     * @private
     */
    function _hideConsentMessage() {
        document.querySelector('.root-consent').classList.remove('root-consent--active');
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_fire_event__["a" /* default */])(element, 'root-consent.hide');
    }

    /**
     * Plugin load callback to update the current state and
     * fire the 'onLoad' method of the plugin.
     *
     * @param {detail}
     * @private
     */
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

        Object(__WEBPACK_IMPORTED_MODULE_2__utils_fire_event__["a" /* default */])(element, 'root-consent.plugin.' + name + '.load', {
            name: name,
            instance: instance
        });

        // We need to run this each time to catch up
        // slow loading plugins if the user has
        // already made their choice.
        _actionPlugins();
    }

    /**
     * Loops through each plugin to fire the appropriate method, ignoring
     * those that are not yet loaded or have yet to be actioned.
     *
     * @private
     */
    function _actionPlugins() {
        if (isNewVisitor()) return;

        var fireApprove = hasConsented();

        plugins.filter(function (plugin) {
            return plugin.loaded && !plugin.actioned;
        }).forEach(function (plugin) {
            var name = plugin.name,
                instance = plugin.instance;


            fireApprove ? instance.onApprove() : instance.onDeny();

            Object(__WEBPACK_IMPORTED_MODULE_2__utils_fire_event__["a" /* default */])(element, 'root-consent.plugin.' + name + '.' + (fireApprove ? 'approve' : 'deny'), {
                name: name,
                instance: instance
            });

            plugin.actioned = true;
        });
    }

    /**
     * Stores approval value in localStorage and fires plugin actions.
     *
     * @returns {Void}
     */
    function consentApproved() {
        localStorage.setItem(config.storageKey, JSON.stringify({ consent: true, date: Date.now() }));

        Object(__WEBPACK_IMPORTED_MODULE_2__utils_fire_event__["a" /* default */])(element, 'root-consent.approve');

        _hideConsentMessage();

        _actionPlugins();
    }

    /**
     * Stores rejection value in localStorage and fires plugin actions.
     *
     * @returns {Void}
     */
    function consentDenied() {
        localStorage.setItem(config.storageKey, JSON.stringify({ consent: false, date: Date.now() }));

        Object(__WEBPACK_IMPORTED_MODULE_2__utils_fire_event__["a" /* default */])(element, 'root-consent.deny');

        _hideConsentMessage();

        _actionPlugins();
    }

    /**
     * Checks whether the localStorage key has been set to identify
     * new visitors to the page.
     *
     * @returns {Boolean}
     */
    function isNewVisitor() {
        var data = JSON.parse(localStorage.getItem(config.storageKey));
        return data === null;
    }

    /**
     * Checks whether the stored value is the affirmative
     *
     * @returns {Boolean}
     */
    function hasConsented() {
        var data = JSON.parse(localStorage.getItem(config.storageKey));

        if (data) {}

        return data && data.consent && !consentExpired(data.date);
    }

    /**
     * Registers a new plugin with the library and attaches the
     * event listener for the plugin to announce load state.
     *
     * @param {String} name
     * @param {Object} options
     */
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

    /**
     * Prepares the library for execution
     *
     * @returns {Void}
     */
    function setup() {
        config = _extends({}, __WEBPACK_IMPORTED_MODULE_3__defaults__["a" /* default */], options);

        if (!hasConsented() && isNewVisitor()) {
            _displayConsentMessage();
        }

        Object(__WEBPACK_IMPORTED_MODULE_2__utils_fire_event__["a" /* default */])(element, 'root-consent.setup');
    }

    /**
     * Removes the localStorage data and resets the consent status
     *
     * @returns {void}
     */
    function destroy() {
        localStorage.removeItem(config.storageKey);

        Object(__WEBPACK_IMPORTED_MODULE_2__utils_fire_event__["a" /* default */])(element, 'root-consent.destroy');
    }

    function consentExpired(date) {

        date = new Date(date);
        var today = new Date();
        var diff = Math.abs(today.getTime() - date.getTime());

        if (diff / config.expiryFrame > config.expiry) {
            destroy();
            return true;
        }
    }

    setup();

    return {
        setup: setup,
        consentApproved: consentApproved,
        consentDenied: consentDenied,
        isNewVisitor: isNewVisitor,
        hasConsented: hasConsented,
        registerPlugin: registerPlugin,
        destroy: destroy
    };
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function value(predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            var o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;

            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }

            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];

            // 5. Let k be 0.
            var k = 0;

            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return kValue.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }
                // e. Increase k by 1.
                k++;
            }

            // 7. Return undefined.
            return undefined;
        },
        configurable: true,
        writable: true
    });
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({

  /**
   * Title of the popup message
   *
   * @string {messageTitle}
   */
  messageTitle: 'Your Right to Privacy',

  /**
   * Longer message to explain what consent is being given for
   *
   * @string {messageText}
   */
  messageText: 'This website uses analytics software - do you wish to be included in the collected data? Find out more in our Privacy Policy.',

  /**
   * Approval button text
   *
   * @string {approveLabel}
   */
  approveLabel: 'I accept',

  /**
   * Rejection button text
   *
   * @string {denyLabel}
   */
  denyLabel: 'No thanks',

  /**
   * The localStorage key that consent is stored under
   *
   * @string {storageKey}
   */
  storageKey: 'root-consent',

  /**
   * The localStorage key that consent date is stored under
   *
   * @string {storageDate}
   */
  storageDate: 'root-date',

  /**
   * Delay length from page load to displaying the consent message
   *
   * @integer {delay}
   */
  delay: 1000,

  /**
   * Time Frame to expire consent
   *
   * @integer {expiryFrame}
   */
  expiryFrame: 1000 * 60 * 60 * 24,

  /**
   * Total time frame till consent expires
   *
   * @integer {expiry}
   */
  expiry: 30,

  /**
   * Position of message on screen
   *
   * @string {position}
   */
  position: 'bottom',

  /**
   * Appearance of the consent message
   *
   * @string {theme}
   */
  theme: 'dark'

});

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
module.exports = __webpack_require__(3);


/***/ })
/******/ ]);
});