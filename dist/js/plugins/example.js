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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = providePlugin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fire_event__ = __webpack_require__(0);


/**
 * Convenience wrapper for notifying the main library
 * that a plugin has been loaded and is ready for use
 *
 * @param {String} pluginName
 * @param {Function} pluginInstance
 */
function providePlugin(pluginName, pluginInstance) {
    Object(__WEBPACK_IMPORTED_MODULE_0__fire_event__["a" /* default */])(document, 'root-consent.plugin.load.' + pluginName, {
        name: pluginName,
        instance: pluginInstance
    });
};

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_provide_plugin__ = __webpack_require__(7);


/**
 * This is the simplest example of a plugin, it will output the executed
 * methods to the console. It demonstrates the scaffolding all plugins
 * must use in order to work with the main library.
 *
 * @returns {{onLoad: onLoad, onApprove: onApprove, onDeny: onDeny}}
 * @constructor
 */
function Example() {

  /**
   * The `onLoad()` method is called once the plugin script has been
   * loaded and has notified the main library that it is ready. You
   * should use this to set up any configuration objects.
   *
   * The first parameter of this method contains any configuration
   * parameters passed through when using the `registerPlugin()`
   * API method.
   *
   * Warning! This event is fired *before* any consent status
   * is determined. You should *not* load any data collection
   * scripts within this method.
   */
  function onLoad() {
    console.log('PLUGIN REGISTERED');
  };

  /**
   * This method is called when the user has granted consent. This
   * is where you should now begin loading any data collection scripts
   * as you can now be certain the user has expressed explicit permission
   * to do so. Remember, the user may consent at any time and may necessarily
   * interact with the consent screen on first page load.
   *
   * This method will be called on each page load once the consent status
   * has been stored.
   */
  function onApprove() {
    console.log('PLUGIN CONSENT GIVEN');
  };

  /**
   * The `onDeny` method is called when a user does not consent to the proposed
   * data collection. You should use this to destroy any already loaded scripts
   * or block any future ones.
   *
   * This method will be called on each page load once the consent status
   * has been stored.
   */
  function onDeny() {
    console.log('PLUGIN CONSENT DENIED');
  };

  /**
   * The plugin must return an object exposing these three core methods
   * as they form the public API of the plugin. You are free to add as many
   * private methods as required but only the values below will be executed
   * within the main library.
   */
  return {
    onLoad: onLoad,
    onApprove: onApprove,
    onDeny: onDeny
  };
}

/**
 * This is an example of using the `providePlugin` helper
 * to announce the plugin's ready state to the main library.
 *
 * You must include this or an identical event signature otherwise
 * your plugin will never be loaded into the system.
 */
Object(__WEBPACK_IMPORTED_MODULE_0__utils_provide_plugin__["a" /* default */])('example', new Example());

/***/ })
/******/ ]);
});