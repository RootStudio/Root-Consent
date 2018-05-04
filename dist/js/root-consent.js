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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["rootConsent"] = rootConsent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sass_root_consent_scss__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sass_root_consent_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__sass_root_consent_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_fire_event__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaults__ = __webpack_require__(9);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






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
            Object(__WEBPACK_IMPORTED_MODULE_1__utils_fire_event__["a" /* default */])(element, 'root-consent.display');
        }, config.delay);
    }

    /**
     * Triggers hide animation for message template
     *
     * @private
     */
    function _hideConsentMessage() {
        document.querySelector('.root-consent').classList.remove('root-consent--active');
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_fire_event__["a" /* default */])(element, 'root-consent.hide');
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

        Object(__WEBPACK_IMPORTED_MODULE_1__utils_fire_event__["a" /* default */])(element, 'root-consent.plugin.' + name + '.load', {
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

            Object(__WEBPACK_IMPORTED_MODULE_1__utils_fire_event__["a" /* default */])(element, 'root-consent.plugin.' + name + '.' + (fireApprove ? 'approve' : 'deny'), {
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

        Object(__WEBPACK_IMPORTED_MODULE_1__utils_fire_event__["a" /* default */])(element, 'root-consent.approve');

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

        Object(__WEBPACK_IMPORTED_MODULE_1__utils_fire_event__["a" /* default */])(element, 'root-consent.deny');

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
        config = _extends({}, __WEBPACK_IMPORTED_MODULE_2__defaults__["a" /* default */], options);

        if (!hasConsented() && isNewVisitor()) {
            _displayConsentMessage();
        }

        Object(__WEBPACK_IMPORTED_MODULE_1__utils_fire_event__["a" /* default */])(element, 'root-consent.setup');
    }

    /**
     * Removes the localStorage data and resets the consent status
     *
     * @returns {void}
     */
    function destroy() {
        localStorage.removeItem(config.storageKey);

        Object(__WEBPACK_IMPORTED_MODULE_1__utils_fire_event__["a" /* default */])(element, 'root-consent.destroy');
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./root-consent.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./root-consent.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".root-consent {\n  display: table;\n  position: fixed;\n  box-sizing: border-box;\n  transition: opacity 0.2s linear;\n  opacity: 0;\n  font-family: Helvetica, Arial, sans-serif; }\n\n.root-consent__message,\n.root-consent__actions {\n  display: table-cell;\n  padding: 15px 20px;\n  vertical-align: middle; }\n\n.root-consent__message {\n  width: 100%; }\n\n.root-consent__message-title,\n.root-consent__message-text {\n  display: block;\n  margin: 0;\n  padding: 0; }\n\n.root-consent__message-title {\n  margin-bottom: 5px;\n  font-weight: bold;\n  font-size: 1rem; }\n\n.root-consent__message-text {\n  font-size: 0.8rem;\n  line-height: 1rem; }\n\n.root-consent__actions {\n  white-space: nowrap; }\n\n.root-consent__btn {\n  display: inline-block;\n  border: 0;\n  border-radius: 3px;\n  padding: 8px 12px;\n  font-size: 0.8rem;\n  cursor: pointer; }\n\n.root-consent__btn + .root-consent__btn {\n  margin-left: 10px; }\n\n.root-consent--active {\n  opacity: 1; }\n\n.root-consent--top {\n  top: 0;\n  width: 100%; }\n\n.root-consent--bottom {\n  bottom: 0;\n  width: 100%; }\n\n.root-consent--top-right,\n.root-consent--top-left,\n.root-consent--bottom-right,\n.root-consent--bottom-left {\n  border-radius: 3px; }\n  .root-consent--top-right .root-consent__message,\n  .root-consent--top-left .root-consent__message,\n  .root-consent--bottom-right .root-consent__message,\n  .root-consent--bottom-left .root-consent__message {\n    width: auto; }\n\n.root-consent--top-right {\n  top: 20px;\n  right: 20px; }\n\n.root-consent--top-left {\n  top: 20px;\n  left: 20px; }\n\n.root-consent--bottom-right {\n  bottom: 20px;\n  right: 20px; }\n\n.root-consent--bottom-left {\n  bottom: 20px;\n  left: 20px; }\n\n.root-consent--dark {\n  background-color: rgba(0, 0, 0, 0.9);\n  color: #FFF; }\n  .root-consent--dark .root-consent__btn--approve {\n    background: #A7D46F;\n    color: #FFF; }\n  .root-consent--dark .root-consent__btn--deny {\n    background: #FC3A52;\n    color: #FFF; }\n\n.root-consent--light {\n  background-color: rgba(255, 255, 255, 0.9);\n  color: #333; }\n  .root-consent--light .root-consent__btn--approve {\n    background: #A7D46F;\n    color: #FFF; }\n  .root-consent--light .root-consent__btn--deny {\n    background: #FC3A52;\n    color: #FFF; }\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 9 */
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
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ })
/******/ ]);
});