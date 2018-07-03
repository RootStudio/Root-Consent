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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 1:
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

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_provide_plugin__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var LinkedInWidget = function () {
    function LinkedInWidget() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.ln-share-button';

        _classCallCheck(this, LinkedInWidget);

        this.$buttons = Array.from(document.querySelectorAll(target));
        this.config = {
            type: 'IN/Share'
        };
    }

    _createClass(LinkedInWidget, [{
        key: 'onLoad',
        value: function onLoad() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


            this.$buttons.forEach(function ($button) {
                $button.style.display = 'none';
            });

            this.config = _extends({}, this.config, options);
        }
    }, {
        key: 'onApprove',
        value: function onApprove() {
            this._loadSDK();
            console.log('LinkedIn plugin is enabled.');
        }
    }, {
        key: 'onDeny',
        value: function onDeny() {
            console.log('LinkedIn plugin is not enabled.');
        }
    }, {
        key: '_loadSDK',
        value: function _loadSDK() {

            this.$buttons.forEach(function ($button) {
                $button.style.display = 'inherit';

                var script = document.createElement('script');
                script.setAttribute('type', 'IN/Share');
                $button.appendChild(script);
            });

            var script = document.createElement('script');
            script.setAttribute('type', 'text/javascript');
            script.src = '//platform.linkedin.com/in.js';
            document.querySelector('body').appendChild(script);
        }
    }]);

    return LinkedInWidget;
}();

setTimeout(function () {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_provide_plugin__["a" /* default */])('linkedin-plugin', new LinkedInWidget());
}, 0);

/***/ }),

/***/ 2:
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

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = providePlugin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fire_event__ = __webpack_require__(0);


/**
 * Convenience wrapper for notifying the main library
 * that a plugin has been loaded and is ready for use
 *
 * @param {String} pluginName
 * @param {Object} pluginInstance
 */
function providePlugin(pluginName, pluginInstance) {

    document.addEventListener('root-consent.plugin.load.' + pluginName, function (ev) {
        pluginInstance.onLoad(ev.detail);

        // Catches plugins that load before RootConsent has been called
        Object(__WEBPACK_IMPORTED_MODULE_0__fire_event__["a" /* default */])(document, 'root-consent.plugin.loaded.' + pluginName, { instance: pluginInstance, name: pluginName });
    });

    Object(__WEBPACK_IMPORTED_MODULE_0__fire_event__["a" /* default */])(document, 'root-consent.plugin.registered.' + pluginName, { instance: pluginInstance, name: pluginName });
};

/***/ })

/******/ });
});