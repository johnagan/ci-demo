/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);

	__webpack_require__(8);

	__webpack_require__(1);

	__webpack_require__(6);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./favicon.ico": 3,
		"./github_logo.svg": 4,
		"./hr.svg": 5
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html"

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "favicon.ico"

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/github_logo.svg"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/hr.svg"

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/travis/build/johnagan/ci-demo/node_modules/css-loader/index.js!/home/travis/build/johnagan/ci-demo/src/styles.css", function() {
			var newContent = require("!!/home/travis/build/johnagan/ci-demo/node_modules/css-loader/index.js!/home/travis/build/johnagan/ci-demo/src/styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	exports.push([module.id, "/* Add Fonts */\n/* Add Apex New */\n@font-face {\n  font-family: 'Apex New Book';\n  src: url("+__webpack_require__(12)+");\n  src: url("+__webpack_require__(12)+"?#iefix) format('embedded-opentype'),\n       url("+__webpack_require__(13)+") format('woff2'),\n       url("+__webpack_require__(14)+") format('woff'),\n       url("+__webpack_require__(15)+") format('truetype'),\n       url("+__webpack_require__(16)+"#apex_newbook) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/* Add Apex Serif */\n@font-face {\n  font-family: 'Apex Serif Light';\n  src: url("+__webpack_require__(17)+");\n  src: url("+__webpack_require__(17)+"?#iefix) format('embedded-opentype'),\n       url("+__webpack_require__(18)+") format('woff2'),\n       url("+__webpack_require__(19)+") format('woff'),\n       url("+__webpack_require__(20)+") format('truetype'),\n       url("+__webpack_require__(21)+"#apex_seriflight) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/* Site styles begin */\n* {\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  font-family: \"Apex New Book\", \"Helvetica Neue\", Helvetica, Arial, serif;\n  font-weight: normal;\n  width: 100%;\n  height: auto;\n  margin: 0;\n  padding: 30px;\n  line-height: 1.4;\n  background: rgba(40,52,66,1);\n  background: -moz-linear-gradient(-45deg, rgba(40,52,66,1) 0%, rgba(30,31,41,1) 51%, rgba(55,41,59,1) 100%);\n  background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(40,52,66,1)), color-stop(51%, rgba(30,31,41,1)), color-stop(100%, rgba(55,41,59,1)));\n  background: -webkit-linear-gradient(-45deg, rgba(40,52,66,1) 0%, rgba(30,31,41,1) 51%, rgba(55,41,59,1) 100%);\n  background: -o-linear-gradient(-45deg, rgba(40,52,66,1) 0%, rgba(30,31,41,1) 51%, rgba(55,41,59,1) 100%);\n  background: -ms-linear-gradient(-45deg, rgba(40,52,66,1) 0%, rgba(30,31,41,1) 51%, rgba(55,41,59,1) 100%);\n  background: linear-gradient(135deg, rgba(40,52,66,1) 0%, rgba(30,31,41,1) 51%, rgba(55,41,59,1) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#283442', endColorstr='#37293b', GradientType=1 );\n\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n\na {\n  text-decoration: none;\n}\n\na:hover, a:focus {\n  text-decoration: underline;\n}\n\nh1 {\n  position: relative;\n  margin-bottom: 10px;\n  color: #fff;\n  font-family: \"Apex Serif Light\", Georgia, serif;\n  font-size: 72px;\n  font-weight: 200;\n  text-transform: uppercase;\n  text-align: center;\n  line-height: 1;\n  letter-spacing: .12em;\n}\n\nh2 {\n  position: relative;\n  margin: 0;\n  color: rgb(117,114,122);\n  font-family: \"Apex New Book\", 'Helvetica Neue', Helvetica, serif;\n  font-size: 24px;\n  font-weight: 200;\n  font-style: normal;\n  text-align: center;\n  line-height: 1.2;\n  letter-spacing: .1em;\n  text-transform: uppercase;\n}\n\nsup {\n  font-size: 50%;\n}\n\np {\n  font-family: \"Apex New Book\", 'Helvetica Neue', Helvetica, serif;\n  font-size: 18px;\n}\n\nhr {\n  position: relative;\n  margin: 45px auto;\n  width: 240px;\n  height: 20px;\n  border: none;\n  background: url("+__webpack_require__(5)+") no-repeat center;\n}\n\n.inner {\n  width: 950px;\n  margin: 0 auto;\n}\n\n.logo {\n  width: 100%;\n  margin-top: 30px;\n}\n\n.logo img {\n  display: block;\n  position: relative;\n  margin: 0 auto;\n}\n\n/* MailChimp form styles */\n#mc_embed_signup {\n  position: relative;\n  margin: 0 auto;\n  max-width: 600px;\n  height: 100px;\n  margin: 0 auto;\n  clear: left;\n  text-align: center;\n}\n\n#mc_embed_signup p {\n  position: relative;\n  top: 20px;\n  color: rgb(117,114,122);\n  font-weight: 300;\n  clear: both;\n\n  /* letter space for crisp reversed-out type */\n  letter-spacing: .03em;\n}\n\n.mc-field-group {\n  position: relative;\n  width: 400px;\n  margin: 15px auto;\n}\n\n#mc_embed_signup label {\n  display: none;\n}\n\n#mc-embedded-subscribe-form .email {\ndisplay: inline-block;\nfloat: left;\npadding: 10px;\nheight: 40px;\nwidth: 280px;\nbackground-color: rgb(117,114,122);\nborder: none;\nborder-radius: 2px;\n}\n\n#mc-embedded-subscribe-form .email:focus {\n  border: none;\n  background-color: #fff;\n}\n\n\n#mc-embedded-subscribe-form .button {\ndisplay: inline-block;\nfloat: left;\nmargin-left: 10px;\npadding: 5px;\nwidth: 100px;\nheight: 40px;\ncolor: rgb(117,114,122);\nbackground: none;\nborder: 2px solid rgb(117,114,122);\nborder-radius: 2px;\nletter-spacing: .03em\n}\n\n#mc-embedded-subscribe-form .button:hover,\n#mc-embedded-subscribe-form .button:focus {\ncolor: #fff;\nborder: 2px solid #fff;\n}\n\n/* #Media Queries\n================================================== */\n\n/* Smaller than standard 960 (devices and browsers) */\n@media only screen and (max-width: 959px) {}\n\n/* Tablet Portrait size to standard 960 (devices and browsers) */\n@media only screen and (min-width: 768px) and (max-width: 959px) {\n\n  .inner {\n    width: 100%;\n    padding: 10px 10px;\n  }\n\n  h1 {\n    font-size: 60px;\n  }\n\n  h2 {\n    font-size: 21px;\n  }\n\n  p {\n    font-size: 16px;\n  }\n}\n\n/* All Mobile Sizes (devices and browser) */\n@media only screen and (max-width: 767px) {\n\n  .inner {\n    width: 100%;\n    padding: 10px 10px;\n\n  }\n\n  h1 {\n    font-size: 60px;\n  }\n\n  h2 {\n    font-size: 21px;\n  }\n\n  p {\n    font-size: 16px;\n  }\n\n  .mc-field-group {\n    position: relative;\n    width: 300px;\n    margin: 0 auto;\n  }\n\n  #mc-embedded-subscribe-form .email {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin-bottom: 15px;\n  }\n\n\n  #mc-embedded-subscribe-form .button {\n    display: block;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n  }\n}\n\n/* Mobile Landscape Size to Tablet Portrait (devices and browsers) */\n@media only screen and (min-width: 480px) and (max-width: 767px) {}\n\n/* Mobile Portrait Size to Mobile Landscape Size (devices and browsers) */\n@media only screen and (max-width: 479px) {\n  body {\n    padding: 15px 10px 20px 10px;\n  }\n\n  .inner {\n    width: 100%;\n    padding-bottom: 40px;\n  }\n\n  .logo {\n    margin-top: 0;\n    padding-top: 0;\n  }\n\n  .logo img {\n    width: 240px;\n    height: 240px;\n  }\n\n  .mc-field-group {\n    position: relative;\n    width: 240px;\n    margin: 0 auto;\n  }\n\n  #mc-embedded-subscribe-form .email {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin-bottom: 15px;\n  }\n\n  #mc-embedded-subscribe-form .button {\n    display: block;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n  }\n\n  h1 {\n    font-size: 36px;\n  }\n\n  h2 {\n    font-size: 20px;\n  }\n\n  p {\n    font-size: 14px;\n  }\n\n  hr {\n    margin: 30px auto;\n  }\n}\n", ""]);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/travis/build/johnagan/ci-demo/node_modules/css-loader/index.js!/home/travis/build/johnagan/ci-demo/node_modules/normalize.css/normalize.css", function() {
			var newContent = require("!!/home/travis/build/johnagan/ci-demo/node_modules/css-loader/index.js!/home/travis/build/johnagan/ci-demo/node_modules/normalize.css/normalize.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	exports.push([module.id, "/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box; /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n", ""]);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/apexnew_book-webfont.eot"

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/apexnew_book-webfont.woff2"

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/apexnew_book-webfont.woff"

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/apexnew_book-webfont.ttf"

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/apexnew_book-webfont.svg"

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/apexserif_light-webfont.eot"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/apexserif_light-webfont.woff2"

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/apexserif_light-webfont.woff"

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/apexserif_light-webfont.ttf"

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/apexserif_light-webfont.svg"

/***/ }
/******/ ]);