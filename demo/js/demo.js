/*! ui v: 0.10.15 | Copyright © 2017 Sohu.com, Inc. All Rights Reserved | Date - 2017-01-05 12:19:45 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["UI"] = factory();
	else
		root["UI"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "../../js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _zepto = __webpack_require__(1);

	var _zepto2 = _interopRequireDefault(_zepto);

	var _ui = __webpack_require__(12);

	var _ui2 = _interopRequireDefault(_ui);

	var _dialog = __webpack_require__(23);

	var _dialog2 = _interopRequireDefault(_dialog);

	var _toast = __webpack_require__(26);

	var _toast2 = _interopRequireDefault(_toast);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Name: Demo
	 * Date: 16-11-1
	 */
	(0, _zepto2.default)(function () {
		var testParse = '?test=1&lalal=2&hhh=3';
		_ui2.default.utils.queryStringParse(testParse);

		console.log(_ui2.default.utils);
		// $(document).on('wechatSDKOnload', ()=> {
		//   console.log('wechat on load');
		// })
	});

	//单个dialog
	var options1 = {
		title: '温馨提示', //title
		content: '温馨提示内容:anywhere you are, I am near', //the topic main content
		button: ['确认1', '取消1'], //the button name //
		eventBind: 'click', //tap | click
		type: 0
	};
	(0, _zepto2.default)('#btn1').on(options1.eventBind, function () {
		var dia2 = _zepto2.default.dialog(options1); //'show'模板弹出时自动为顶级加上show类名，隐藏时自动去掉show，所以一般需要通过show类名来控制模板的显示隐藏。
		dia2.on('dialog:action', function (e) {
			console.log(e.index);
			console.log('function-- close');
		});
	});

	//$('#id').dialog(options);
	var options2 = {
		title: '温馨提示', //title
		content: '温馨提示内容 When you need me more', //the topic main content
		button: ['确认2', '取消2'], //the button name 若type为2只能两个参数，若超过两个参数，则不展示多余参数
		eventBind: 'click', //tap | click
		type: 1
	};
	(0, _zepto2.default)('#btn2').on(options2.eventBind, function () {
		console.info('dialog--->go');
		var dia = _zepto2.default.dialog(options2);

		dia.on('dialog:action', function (e) {
			console.log(e.index);
			console.log('function go--');
		});
		dia.on('dialog:hide', function (e) {
			console.log('dialog hide');
		});
	});

	//----toast---top--
	var el1,
	    toastOption1 = {
		content: '发表成功top', //弹出内容
		stayTime: 2000, //弹出时间 ms
		type: 'success', //弹出类型
		eventBind: 'click', //绑定类型click | tap 
		position: 'top' // top【顶部下拉收起】 |  middle 【中间显示再隐藏】
	};
	(0, _zepto2.default)('#btn-toast-top').on(toastOption1.eventBind, function () {
		console.log('--toast go-');
		el1 = _zepto2.default.toast(toastOption1);
		el1.on('toast:hide', function () {
			console.log('toast hide');
		});
	});

	//----toast---middle--
	var el2,
	    toastOption2 = {
		content: '发表成功middle', //弹出内容
		stayTime: 2000, //弹出时间 ms
		type: 'success', //弹出类型
		eventBind: 'click', //绑定类型click | tap 
		position: 'middle' // top【顶部下拉收起】 |  middle 【中间显示再隐藏】
	};
	(0, _zepto2.default)('#btn-toast-middle').on(toastOption2.eventBind, function () {
		console.log('--toast go-');
		el2 = _zepto2.default.toast(toastOption2);
		el2.on('toast:hide', function () {
			console.log('toast hide');
		});
	});
	//---progress
	// for (var i = 0; i < 100; i++) {
	// 	time = i + '%';
	// 	console.log(time)
	// 	$('.ui-progress li').width(time);
	// };
	var preTime = '',
	    inintTime = 0;
	window.startProgress = function () {
		inintTime++;
		preTime = inintTime + '%';
		console.log(preTime);
		if (inintTime > 100) {
			return;
		}
		(0, _zepto2.default)('.demo-block span').width(preTime);
		if (inintTime < 30 || inintTime > 90 || inintTime > 60 && inintTime < 70) {
			setTimeout('startProgress()', 50);
		} else if (inintTime >= 30 && inintTime <= 60) {
			inintTime = 61;
			setTimeout('startProgress()', 50);
		} else if (inintTime <= 90 && inintTime >= 70) {
			inintTime = 91;
			setTimeout('startProgress()', 50);
		}
	};
	startProgress();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// zepto and modules
	// ====================================

	// zepto modules

	var Zepto = __webpack_require__(2);   // core
	__webpack_require__(3);  // Provides $.os and $.browser information
	__webpack_require__(4);   // The animate() method
	__webpack_require__(5); // Animated show, hide, toggle, and fade*() methods.
	__webpack_require__(6);  // Experimental support for cleaning up iOS memory after removing image elements from the DOM.
	__webpack_require__(7);  // A full-blown data() method, capable of storing arbitrary objects in memory.
	__webpack_require__(8); // Provides $.Deferred promises API. Depends on the "callbacks" module. When included, $.ajax() supports a promise interface for chaining callbacks.
	__webpack_require__(9); // Provides $.Callbacks for use in "deferred" module.
	__webpack_require__(10); // Experimental jQuery CSS extensions support for functionality such as $('div:first') and el.is(':visible').
	__webpack_require__(11); // Fires tap– and swipe–related events on touch devices. This works with both `touch` (iOS, Android) and `pointer` events (Windows Phone).

	module.exports = Zepto;


/***/ },
/* 2 */
/***/ function(module, exports) {

	/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */

	var Zepto = (function() {
	  var undefined, key, $, classList, emptyArray = [], slice = emptyArray.slice, filter = emptyArray.filter,
	    document = window.document,
	    elementDisplay = {}, classCache = {},
	    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },
	    fragmentRE = /^\s*<(\w+|!)[^>]*>/,
	    singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	    rootNodeRE = /^(?:body|html)$/i,
	    capitalRE = /([A-Z])/g,

	  // special attributes that should be get/set via method calls
	    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],

	    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],
	    table = document.createElement('table'),
	    tableRow = document.createElement('tr'),
	    containers = {
	      'tr': document.createElement('tbody'),
	      'tbody': table, 'thead': table, 'tfoot': table,
	      'td': tableRow, 'th': tableRow,
	      '*': document.createElement('div')
	    },
	    readyRE = /complete|loaded|interactive/,
	    simpleSelectorRE = /^[\w-]*$/,
	    class2type = {},
	    toString = class2type.toString,
	    zepto = {},
	    camelize, uniq,
	    tempParent = document.createElement('div'),
	    propMap = {
	      'tabindex': 'tabIndex',
	      'readonly': 'readOnly',
	      'for': 'htmlFor',
	      'class': 'className',
	      'maxlength': 'maxLength',
	      'cellspacing': 'cellSpacing',
	      'cellpadding': 'cellPadding',
	      'rowspan': 'rowSpan',
	      'colspan': 'colSpan',
	      'usemap': 'useMap',
	      'frameborder': 'frameBorder',
	      'contenteditable': 'contentEditable'
	    },
	    isArray = Array.isArray ||
	      function(object){ return object instanceof Array }

	  zepto.matches = function(element, selector) {
	    if (!selector || !element || element.nodeType !== 1) return false
	    var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector ||
	      element.oMatchesSelector || element.matchesSelector
	    if (matchesSelector) return matchesSelector.call(element, selector)
	    // fall back to performing a selector:
	    var match, parent = element.parentNode, temp = !parent
	    if (temp) (parent = tempParent).appendChild(element)
	    match = ~zepto.qsa(parent, selector).indexOf(element)
	    temp && tempParent.removeChild(element)
	    return match
	  }

	  function type(obj) {
	    return obj == null ? String(obj) :
	    class2type[toString.call(obj)] || "object"
	  }

	  function isFunction(value) { return type(value) == "function" }
	  function isWindow(obj)     { return obj != null && obj == obj.window }
	  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
	  function isObject(obj)     { return type(obj) == "object" }
	  function isPlainObject(obj) {
	    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
	  }
	  function likeArray(obj) {
	    return typeof obj.length == 'number'
	  }

	  function compact(array) { return filter.call(array, function(item){ return item != null }) }
	  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }
	  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }
	  function dasherize(str) {
	    return str.replace(/::/g, '/')
	      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
	      .replace(/([a-z\d])([A-Z])/g, '$1_$2')
	      .replace(/_/g, '-')
	      .toLowerCase()
	  }
	  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }

	  function classRE(name) {
	    return name in classCache ?
	      classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
	  }

	  function maybeAddPx(name, value) {
	    return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value
	  }

	  function defaultDisplay(nodeName) {
	    var element, display
	    if (!elementDisplay[nodeName]) {
	      element = document.createElement(nodeName)
	      document.body.appendChild(element)
	      display = getComputedStyle(element, '').getPropertyValue("display")
	      element.parentNode.removeChild(element)
	      display == "none" && (display = "block")
	      elementDisplay[nodeName] = display
	    }
	    return elementDisplay[nodeName]
	  }

	  function children(element) {
	    return 'children' in element ?
	      slice.call(element.children) :
	      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })
	  }

	  // `$.zepto.fragment` takes a html string and an optional tag name
	  // to generate DOM nodes nodes from the given html string.
	  // The generated DOM nodes are returned as an array.
	  // This function can be overriden in plugins for example to make
	  // it compatible with browsers that don't support the DOM fully.
	  zepto.fragment = function(html, name, properties) {
	    var dom, nodes, container

	    // A special case optimization for a single tag
	    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))

	    if (!dom) {
	      if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>")
	      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
	      if (!(name in containers)) name = '*'

	      container = containers[name]
	      container.innerHTML = '' + html
	      dom = $.each(slice.call(container.childNodes), function(){
	        container.removeChild(this)
	      })
	    }

	    if (isPlainObject(properties)) {
	      nodes = $(dom)
	      $.each(properties, function(key, value) {
	        if (methodAttributes.indexOf(key) > -1) nodes[key](value)
	        else nodes.attr(key, value)
	      })
	    }

	    return dom
	  }

	  // `$.zepto.Z` swaps out the prototype of the given `dom` array
	  // of nodes with `$.fn` and thus supplying all the Zepto functions
	  // to the array. Note that `__proto__` is not supported on Internet
	  // Explorer. This method can be overriden in plugins.
	  zepto.Z = function(dom, selector) {
	    dom = dom || []
	    dom.__proto__ = $.fn
	    dom.selector = selector || ''
	    return dom
	  }

	  // `$.zepto.isZ` should return `true` if the given object is a Zepto
	  // collection. This method can be overriden in plugins.
	  zepto.isZ = function(object) {
	    return object instanceof zepto.Z
	  }

	  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
	  // takes a CSS selector and an optional context (and handles various
	  // special cases).
	  // This method can be overriden in plugins.
	  zepto.init = function(selector, context) {
	    var dom
	    // If nothing given, return an empty Zepto collection
	    if (!selector) return zepto.Z()
	    // Optimize for string selectors
	    else if (typeof selector == 'string') {
	      selector = selector.trim()
	      // If it's a html fragment, create nodes from it
	      // Note: In both Chrome 21 and Firefox 15, DOM error 12
	      // is thrown if the fragment doesn't begin with <
	      if (selector[0] == '<' && fragmentRE.test(selector))
	        dom = zepto.fragment(selector, RegExp.$1, context), selector = null
	      // If there's a context, create a collection on that context first, and select
	      // nodes from there
	      else if (context !== undefined) return $(context).find(selector)
	      // If it's a CSS selector, use it to select nodes.
	      else dom = zepto.qsa(document, selector)
	    }
	    // If a function is given, call it when the DOM is ready
	    else if (isFunction(selector)) return $(document).ready(selector)
	    // If a Zepto collection is given, just return it
	    else if (zepto.isZ(selector)) return selector
	    else {
	      // normalize array if an array of nodes is given
	      if (isArray(selector)) dom = compact(selector)
	      // Wrap DOM nodes.
	      else if (isObject(selector))
	        dom = [selector], selector = null
	      // If it's a html fragment, create nodes from it
	      else if (fragmentRE.test(selector))
	        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null
	      // If there's a context, create a collection on that context first, and select
	      // nodes from there
	      else if (context !== undefined) return $(context).find(selector)
	      // And last but no least, if it's a CSS selector, use it to select nodes.
	      else dom = zepto.qsa(document, selector)
	    }
	    // create a new Zepto collection from the nodes found
	    return zepto.Z(dom, selector)
	  }

	  // `$` will be the base `Zepto` object. When calling this
	  // function just call `$.zepto.init, which makes the implementation
	  // details of selecting nodes and creating Zepto collections
	  // patchable in plugins.
	  $ = function(selector, context){
	    return zepto.init(selector, context)
	  }

	  function extend(target, source, deep) {
	    for (key in source)
	      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	        if (isPlainObject(source[key]) && !isPlainObject(target[key]))
	          target[key] = {}
	        if (isArray(source[key]) && !isArray(target[key]))
	          target[key] = []
	        extend(target[key], source[key], deep)
	      }
	      else if (source[key] !== undefined) target[key] = source[key]
	  }

	  // Copy all but undefined properties from one or more
	  // objects to the `target` object.
	  $.extend = function(target){
	    var deep, args = slice.call(arguments, 1)
	    if (typeof target == 'boolean') {
	      deep = target
	      target = args.shift()
	    }
	    args.forEach(function(arg){ extend(target, arg, deep) })
	    return target
	  }

	  // `$.zepto.qsa` is Zepto's CSS selector implementation which
	  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
	  // This method can be overriden in plugins.
	  zepto.qsa = function(element, selector){
	    var found,
	      maybeID = selector[0] == '#',
	      maybeClass = !maybeID && selector[0] == '.',
	      nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked
	      isSimple = simpleSelectorRE.test(nameOnly)
	    return (isDocument(element) && isSimple && maybeID) ?
	      ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :
	      (element.nodeType !== 1 && element.nodeType !== 9) ? [] :
	        slice.call(
	          isSimple && !maybeID ?
	            maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
	              element.getElementsByTagName(selector) : // Or a tag
	            element.querySelectorAll(selector) // Or it's not simple, and we need to query all
	        )
	  }

	  function filtered(nodes, selector) {
	    return selector == null ? $(nodes) : $(nodes).filter(selector)
	  }

	  $.contains = document.documentElement.contains ?
	    function(parent, node) {
	      return parent !== node && parent.contains(node)
	    } :
	    function(parent, node) {
	      while (node && (node = node.parentNode))
	        if (node === parent) return true
	      return false
	    }

	  function funcArg(context, arg, idx, payload) {
	    return isFunction(arg) ? arg.call(context, idx, payload) : arg
	  }

	  function setAttribute(node, name, value) {
	    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
	  }

	  // access className property while respecting SVGAnimatedString
	  function className(node, value){
	    var klass = node.className || '',
	      svg   = klass && klass.baseVal !== undefined

	    if (value === undefined) return svg ? klass.baseVal : klass
	    svg ? (klass.baseVal = value) : (node.className = value)
	  }

	  // "true"  => true
	  // "false" => false
	  // "null"  => null
	  // "42"    => 42
	  // "42.5"  => 42.5
	  // "08"    => "08"
	  // JSON    => parse if valid
	  // String  => self
	  function deserializeValue(value) {
	    try {
	      return value ?
	      value == "true" ||
	      ( value == "false" ? false :
	        value == "null" ? null :
	          +value + "" == value ? +value :
	            /^[\[\{]/.test(value) ? $.parseJSON(value) :
	              value )
	        : value
	    } catch(e) {
	      return value
	    }
	  }

	  $.type = type
	  $.isFunction = isFunction
	  $.isWindow = isWindow
	  $.isArray = isArray
	  $.isPlainObject = isPlainObject

	  $.isEmptyObject = function(obj) {
	    var name
	    for (name in obj) return false
	    return true
	  }

	  $.inArray = function(elem, array, i){
	    return emptyArray.indexOf.call(array, elem, i)
	  }

	  $.camelCase = camelize
	  $.trim = function(str) {
	    return str == null ? "" : String.prototype.trim.call(str)
	  }

	  // plugin compatibility
	  $.uuid = 0
	  $.support = { }
	  $.expr = { }

	  $.map = function(elements, callback){
	    var value, values = [], i, key
	    if (likeArray(elements))
	      for (i = 0; i < elements.length; i++) {
	        value = callback(elements[i], i)
	        if (value != null) values.push(value)
	      }
	    else
	      for (key in elements) {
	        value = callback(elements[key], key)
	        if (value != null) values.push(value)
	      }
	    return flatten(values)
	  }

	  $.each = function(elements, callback){
	    var i, key
	    if (likeArray(elements)) {
	      for (i = 0; i < elements.length; i++)
	        if (callback.call(elements[i], i, elements[i]) === false) return elements
	    } else {
	      for (key in elements)
	        if (callback.call(elements[key], key, elements[key]) === false) return elements
	    }

	    return elements
	  }

	  $.grep = function(elements, callback){
	    return filter.call(elements, callback)
	  }

	  if (window.JSON) $.parseJSON = JSON.parse

	  // Populate the class2type map
	  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	    class2type[ "[object " + name + "]" ] = name.toLowerCase()
	  })

	  // Define methods that will be available on all
	  // Zepto collections
	  $.fn = {
	    // Because a collection acts like an array
	    // copy over these useful array functions.
	    forEach: emptyArray.forEach,
	    reduce: emptyArray.reduce,
	    push: emptyArray.push,
	    sort: emptyArray.sort,
	    indexOf: emptyArray.indexOf,
	    concat: emptyArray.concat,

	    // `map` and `slice` in the jQuery API work differently
	    // from their array counterparts
	    map: function(fn){
	      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))
	    },
	    slice: function(){
	      return $(slice.apply(this, arguments))
	    },

	    ready: function(callback){
	      // need to check if document.body exists for IE as that browser reports
	      // document ready when it hasn't yet created the body element
	      if (readyRE.test(document.readyState) && document.body) callback($)
	      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
	      return this
	    },
	    get: function(idx){
	      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
	    },
	    toArray: function(){ return this.get() },
	    size: function(){
	      return this.length
	    },
	    remove: function(){
	      return this.each(function(){
	        if (this.parentNode != null)
	          this.parentNode.removeChild(this)
	      })
	    },
	    each: function(callback){
	      emptyArray.every.call(this, function(el, idx){
	        return callback.call(el, idx, el) !== false
	      })
	      return this
	    },
	    filter: function(selector){
	      if (isFunction(selector)) return this.not(this.not(selector))
	      return $(filter.call(this, function(element){
	        return zepto.matches(element, selector)
	      }))
	    },
	    add: function(selector,context){
	      return $(uniq(this.concat($(selector,context))))
	    },
	    is: function(selector){
	      return this.length > 0 && zepto.matches(this[0], selector)
	    },
	    not: function(selector){
	      var nodes=[]
	      if (isFunction(selector) && selector.call !== undefined)
	        this.each(function(idx){
	          if (!selector.call(this,idx)) nodes.push(this)
	        })
	      else {
	        var excludes = typeof selector == 'string' ? this.filter(selector) :
	          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
	        this.forEach(function(el){
	          if (excludes.indexOf(el) < 0) nodes.push(el)
	        })
	      }
	      return $(nodes)
	    },
	    has: function(selector){
	      return this.filter(function(){
	        return isObject(selector) ?
	          $.contains(this, selector) :
	          $(this).find(selector).size()
	      })
	    },
	    eq: function(idx){
	      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)
	    },
	    first: function(){
	      var el = this[0]
	      return el && !isObject(el) ? el : $(el)
	    },
	    last: function(){
	      var el = this[this.length - 1]
	      return el && !isObject(el) ? el : $(el)
	    },
	    find: function(selector){
	      var result, $this = this
	      if (!selector) result = $()
	      else if (typeof selector == 'object')
	        result = $(selector).filter(function(){
	          var node = this
	          return emptyArray.some.call($this, function(parent){
	            return $.contains(parent, node)
	          })
	        })
	      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))
	      else result = this.map(function(){ return zepto.qsa(this, selector) })
	      return result
	    },
	    closest: function(selector, context){
	      var node = this[0], collection = false
	      if (typeof selector == 'object') collection = $(selector)
	      while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))
	        node = node !== context && !isDocument(node) && node.parentNode
	      return $(node)
	    },
	    parents: function(selector){
	      var ancestors = [], nodes = this
	      while (nodes.length > 0)
	        nodes = $.map(nodes, function(node){
	          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
	            ancestors.push(node)
	            return node
	          }
	        })
	      return filtered(ancestors, selector)
	    },
	    parent: function(selector){
	      return filtered(uniq(this.pluck('parentNode')), selector)
	    },
	    children: function(selector){
	      return filtered(this.map(function(){ return children(this) }), selector)
	    },
	    contents: function() {
	      return this.map(function() { return slice.call(this.childNodes) })
	    },
	    siblings: function(selector){
	      return filtered(this.map(function(i, el){
	        return filter.call(children(el.parentNode), function(child){ return child!==el })
	      }), selector)
	    },
	    empty: function(){
	      return this.each(function(){ this.innerHTML = '' })
	    },
	    // `pluck` is borrowed from Prototype.js
	    pluck: function(property){
	      return $.map(this, function(el){ return el[property] })
	    },
	    show: function(){
	      return this.each(function(){
	        this.style.display == "none" && (this.style.display = '')
	        if (getComputedStyle(this, '').getPropertyValue("display") == "none")
	          this.style.display = defaultDisplay(this.nodeName)
	      })
	    },
	    replaceWith: function(newContent){
	      return this.before(newContent).remove()
	    },
	    wrap: function(structure){
	      var func = isFunction(structure)
	      if (this[0] && !func)
	        var dom   = $(structure).get(0),
	          clone = dom.parentNode || this.length > 1

	      return this.each(function(index){
	        $(this).wrapAll(
	          func ? structure.call(this, index) :
	            clone ? dom.cloneNode(true) : dom
	        )
	      })
	    },
	    wrapAll: function(structure){
	      if (this[0]) {
	        $(this[0]).before(structure = $(structure))
	        var children
	        // drill down to the inmost element
	        while ((children = structure.children()).length) structure = children.first()
	        $(structure).append(this)
	      }
	      return this
	    },
	    wrapInner: function(structure){
	      var func = isFunction(structure)
	      return this.each(function(index){
	        var self = $(this), contents = self.contents(),
	          dom  = func ? structure.call(this, index) : structure
	        contents.length ? contents.wrapAll(dom) : self.append(dom)
	      })
	    },
	    unwrap: function(){
	      this.parent().each(function(){
	        $(this).replaceWith($(this).children())
	      })
	      return this
	    },
	    clone: function(){
	      return this.map(function(){ return this.cloneNode(true) })
	    },
	    hide: function(){
	      return this.css("display", "none")
	    },
	    toggle: function(setting){
	      return this.each(function(){
	        var el = $(this)
	          ;(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide()
	      })
	    },
	    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },
	    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },
	    html: function(html){
	      return 0 in arguments ?
	        this.each(function(idx){
	          var originHtml = this.innerHTML
	          $(this).empty().append( funcArg(this, html, idx, originHtml) )
	        }) :
	        (0 in this ? this[0].innerHTML : null)
	    },
	    text: function(text){
	      return 0 in arguments ?
	        this.each(function(idx){
	          var newText = funcArg(this, text, idx, this.textContent)
	          this.textContent = newText == null ? '' : ''+newText
	        }) :
	        (0 in this ? this[0].textContent : null)
	    },
	    attr: function(name, value){
	      var result
	      return (typeof name == 'string' && !(1 in arguments)) ?
	        (!this.length || this[0].nodeType !== 1 ? undefined :
	            (!(result = this[0].getAttribute(name)) && name in this[0]) ? this[0][name] : result
	        ) :
	        this.each(function(idx){
	          if (this.nodeType !== 1) return
	          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])
	          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))
	        })
	    },
	    removeAttr: function(name){
	      return this.each(function(){ this.nodeType === 1 && name.split(' ').forEach(function(attribute){
	        setAttribute(this, attribute)
	      }, this)})
	    },
	    prop: function(name, value){
	      name = propMap[name] || name
	      return (1 in arguments) ?
	        this.each(function(idx){
	          this[name] = funcArg(this, value, idx, this[name])
	        }) :
	        (this[0] && this[0][name])
	    },
	    data: function(name, value){
	      var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase()

	      var data = (1 in arguments) ?
	        this.attr(attrName, value) :
	        this.attr(attrName)

	      return data !== null ? deserializeValue(data) : undefined
	    },
	    val: function(value){
	      return 0 in arguments ?
	        this.each(function(idx){
	          this.value = funcArg(this, value, idx, this.value)
	        }) :
	        (this[0] && (this[0].multiple ?
	            $(this[0]).find('option').filter(function(){ return this.selected }).pluck('value') :
	            this[0].value)
	        )
	    },
	    offset: function(coordinates){
	      if (coordinates) return this.each(function(index){
	        var $this = $(this),
	          coords = funcArg(this, coordinates, index, $this.offset()),
	          parentOffset = $this.offsetParent().offset(),
	          props = {
	            top:  coords.top  - parentOffset.top,
	            left: coords.left - parentOffset.left
	          }

	        if ($this.css('position') == 'static') props['position'] = 'relative'
	        $this.css(props)
	      })
	      if (!this.length) return null
	      var obj = this[0].getBoundingClientRect()
	      return {
	        left: obj.left + window.pageXOffset,
	        top: obj.top + window.pageYOffset,
	        width: Math.round(obj.width),
	        height: Math.round(obj.height)
	      }
	    },
	    css: function(property, value){
	      if (arguments.length < 2) {
	        var computedStyle, element = this[0]
	        if(!element) return
	        computedStyle = getComputedStyle(element, '')
	        if (typeof property == 'string')
	          return element.style[camelize(property)] || computedStyle.getPropertyValue(property)
	        else if (isArray(property)) {
	          var props = {}
	          $.each(property, function(_, prop){
	            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))
	          })
	          return props
	        }
	      }

	      var css = ''
	      if (type(property) == 'string') {
	        if (!value && value !== 0)
	          this.each(function(){ this.style.removeProperty(dasherize(property)) })
	        else
	          css = dasherize(property) + ":" + maybeAddPx(property, value)
	      } else {
	        for (key in property)
	          if (!property[key] && property[key] !== 0)
	            this.each(function(){ this.style.removeProperty(dasherize(key)) })
	          else
	            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'
	      }

	      return this.each(function(){ this.style.cssText += ';' + css })
	    },
	    index: function(element){
	      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
	    },
	    hasClass: function(name){
	      if (!name) return false
	      return emptyArray.some.call(this, function(el){
	        return this.test(className(el))
	      }, classRE(name))
	    },
	    addClass: function(name){
	      if (!name) return this
	      return this.each(function(idx){
	        if (!('className' in this)) return
	        classList = []
	        var cls = className(this), newName = funcArg(this, name, idx, cls)
	        newName.split(/\s+/g).forEach(function(klass){
	          if (!$(this).hasClass(klass)) classList.push(klass)
	        }, this)
	        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "))
	      })
	    },
	    removeClass: function(name){
	      return this.each(function(idx){
	        if (!('className' in this)) return
	        if (name === undefined) return className(this, '')
	        classList = className(this)
	        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass){
	          classList = classList.replace(classRE(klass), " ")
	        })
	        className(this, classList.trim())
	      })
	    },
	    toggleClass: function(name, when){
	      if (!name) return this
	      return this.each(function(idx){
	        var $this = $(this), names = funcArg(this, name, idx, className(this))
	        names.split(/\s+/g).forEach(function(klass){
	          (when === undefined ? !$this.hasClass(klass) : when) ?
	            $this.addClass(klass) : $this.removeClass(klass)
	        })
	      })
	    },
	    scrollTop: function(value){
	      if (!this.length) return
	      var hasScrollTop = 'scrollTop' in this[0]
	      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset
	      return this.each(hasScrollTop ?
	        function(){ this.scrollTop = value } :
	        function(){ this.scrollTo(this.scrollX, value) })
	    },
	    scrollLeft: function(value){
	      if (!this.length) return
	      var hasScrollLeft = 'scrollLeft' in this[0]
	      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset
	      return this.each(hasScrollLeft ?
	        function(){ this.scrollLeft = value } :
	        function(){ this.scrollTo(value, this.scrollY) })
	    },
	    position: function() {
	      if (!this.length) return

	      var elem = this[0],
	      // Get *real* offsetParent
	        offsetParent = this.offsetParent(),
	      // Get correct offsets
	        offset       = this.offset(),
	        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()

	      // Subtract element margins
	      // note: when an element has margin: auto the offsetLeft and marginLeft
	      // are the same in Safari causing offset.left to incorrectly be 0
	      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0
	      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0

	      // Add offsetParent borders
	      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0
	      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0

	      // Subtract the two offsets
	      return {
	        top:  offset.top  - parentOffset.top,
	        left: offset.left - parentOffset.left
	      }
	    },
	    offsetParent: function() {
	      return this.map(function(){
	        var parent = this.offsetParent || document.body
	        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
	          parent = parent.offsetParent
	        return parent
	      })
	    }
	  }

	  // for now
	  $.fn.detach = $.fn.remove

	    // Generate the `width` and `height` functions
	  ;['width', 'height'].forEach(function(dimension){
	    var dimensionProperty =
	      dimension.replace(/./, function(m){ return m[0].toUpperCase() })

	    $.fn[dimension] = function(value){
	      var offset, el = this[0]
	      if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] :
	        isDocument(el) ? el.documentElement['scroll' + dimensionProperty] :
	        (offset = this.offset()) && offset[dimension]
	      else return this.each(function(idx){
	        el = $(this)
	        el.css(dimension, funcArg(this, value, idx, el[dimension]()))
	      })
	    }
	  })

	  function traverseNode(node, fun) {
	    fun(node)
	    for (var i = 0, len = node.childNodes.length; i < len; i++)
	      traverseNode(node.childNodes[i], fun)
	  }

	  // Generate the `after`, `prepend`, `before`, `append`,
	  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
	  adjacencyOperators.forEach(function(operator, operatorIndex) {
	    var inside = operatorIndex % 2 //=> prepend, append

	    $.fn[operator] = function(){
	      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
	      var argType, nodes = $.map(arguments, function(arg) {
	          argType = type(arg)
	          return argType == "object" || argType == "array" || arg == null ?
	            arg : zepto.fragment(arg)
	        }),
	        parent, copyByClone = this.length > 1
	      if (nodes.length < 1) return this

	      return this.each(function(_, target){
	        parent = inside ? target : target.parentNode

	        // convert all methods to a "before" operation
	        target = operatorIndex == 0 ? target.nextSibling :
	          operatorIndex == 1 ? target.firstChild :
	            operatorIndex == 2 ? target :
	              null

	        var parentInDocument = $.contains(document.documentElement, parent)

	        nodes.forEach(function(node){
	          if (copyByClone) node = node.cloneNode(true)
	          else if (!parent) return $(node).remove()

	          parent.insertBefore(node, target)
	          if (parentInDocument) traverseNode(node, function(el){
	            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&
	              (!el.type || el.type === 'text/javascript') && !el.src)
	              window['eval'].call(window, el.innerHTML)
	          })
	        })
	      })
	    }

	    // after    => insertAfter
	    // prepend  => prependTo
	    // before   => insertBefore
	    // append   => appendTo
	    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){
	      $(html)[operator](this)
	      return this
	    }
	  })

	  zepto.Z.prototype = $.fn

	  // Export internal API functions in the `$.zepto` namespace
	  zepto.uniq = uniq
	  zepto.deserializeValue = deserializeValue
	  $.zepto = zepto

	  return $
	})()

	window.Zepto = Zepto
	window.$ === undefined && (window.$ = Zepto)

	;(function($){
	  var _zid = 1, undefined,
	    slice = Array.prototype.slice,
	    isFunction = $.isFunction,
	    isString = function(obj){ return typeof obj == 'string' },
	    handlers = {},
	    specialEvents={},
	    focusinSupported = 'onfocusin' in window,
	    focus = { focus: 'focusin', blur: 'focusout' },
	    hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }

	  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'

	  function zid(element) {
	    return element._zid || (element._zid = _zid++)
	  }
	  function findHandlers(element, event, fn, selector) {
	    event = parse(event)
	    if (event.ns) var matcher = matcherFor(event.ns)
	    return (handlers[zid(element)] || []).filter(function(handler) {
	      return handler
	        && (!event.e  || handler.e == event.e)
	        && (!event.ns || matcher.test(handler.ns))
	        && (!fn       || zid(handler.fn) === zid(fn))
	        && (!selector || handler.sel == selector)
	    })
	  }
	  function parse(event) {
	    var parts = ('' + event).split('.')
	    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}
	  }
	  function matcherFor(ns) {
	    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
	  }

	  function eventCapture(handler, captureSetting) {
	    return handler.del &&
	      (!focusinSupported && (handler.e in focus)) ||
	      !!captureSetting
	  }

	  function realEvent(type) {
	    return hover[type] || (focusinSupported && focus[type]) || type
	  }

	  function add(element, events, fn, data, selector, delegator, capture){
	    var id = zid(element), set = (handlers[id] || (handlers[id] = []))
	    events.split(/\s/).forEach(function(event){
	      if (event == 'ready') return $(document).ready(fn)
	      var handler   = parse(event)
	      handler.fn    = fn
	      handler.sel   = selector
	      // emulate mouseenter, mouseleave
	      if (handler.e in hover) fn = function(e){
	        var related = e.relatedTarget
	        if (!related || (related !== this && !$.contains(this, related)))
	          return handler.fn.apply(this, arguments)
	      }
	      handler.del   = delegator
	      var callback  = delegator || fn
	      handler.proxy = function(e){
	        e = compatible(e)
	        if (e.isImmediatePropagationStopped()) return
	        e.data = data
	        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args))
	        if (result === false) e.preventDefault(), e.stopPropagation()
	        return result
	      }
	      handler.i = set.length
	      set.push(handler)
	      if ('addEventListener' in element)
	        element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
	    })
	  }
	  function remove(element, events, fn, selector, capture){
	    var id = zid(element)
	      ;(events || '').split(/\s/).forEach(function(event){
	      findHandlers(element, event, fn, selector).forEach(function(handler){
	        delete handlers[id][handler.i]
	        if ('removeEventListener' in element)
	          element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
	      })
	    })
	  }

	  $.event = { add: add, remove: remove }

	  $.proxy = function(fn, context) {
	    var args = (2 in arguments) && slice.call(arguments, 2)
	    if (isFunction(fn)) {
	      var proxyFn = function(){ return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) }
	      proxyFn._zid = zid(fn)
	      return proxyFn
	    } else if (isString(context)) {
	      if (args) {
	        args.unshift(fn[context], fn)
	        return $.proxy.apply(null, args)
	      } else {
	        return $.proxy(fn[context], fn)
	      }
	    } else {
	      throw new TypeError("expected function")
	    }
	  }

	  $.fn.bind = function(event, data, callback){
	    return this.on(event, data, callback)
	  }
	  $.fn.unbind = function(event, callback){
	    return this.off(event, callback)
	  }
	  $.fn.one = function(event, selector, data, callback){
	    return this.on(event, selector, data, callback, 1)
	  }

	  var returnTrue = function(){return true},
	    returnFalse = function(){return false},
	    ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$)/,
	    eventMethods = {
	      preventDefault: 'isDefaultPrevented',
	      stopImmediatePropagation: 'isImmediatePropagationStopped',
	      stopPropagation: 'isPropagationStopped'
	    }

	  function compatible(event, source) {
	    if (source || !event.isDefaultPrevented) {
	      source || (source = event)

	      $.each(eventMethods, function(name, predicate) {
	        var sourceMethod = source[name]
	        event[name] = function(){
	          this[predicate] = returnTrue
	          return sourceMethod && sourceMethod.apply(source, arguments)
	        }
	        event[predicate] = returnFalse
	      })

	      if (source.defaultPrevented !== undefined ? source.defaultPrevented :
	          'returnValue' in source ? source.returnValue === false :
	          source.getPreventDefault && source.getPreventDefault())
	        event.isDefaultPrevented = returnTrue
	    }
	    return event
	  }

	  function createProxy(event) {
	    var key, proxy = { originalEvent: event }
	    for (key in event)
	      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]

	    return compatible(proxy, event)
	  }

	  $.fn.delegate = function(selector, event, callback){
	    return this.on(event, selector, callback)
	  }
	  $.fn.undelegate = function(selector, event, callback){
	    return this.off(event, selector, callback)
	  }

	  $.fn.live = function(event, callback){
	    $(document.body).delegate(this.selector, event, callback)
	    return this
	  }
	  $.fn.die = function(event, callback){
	    $(document.body).undelegate(this.selector, event, callback)
	    return this
	  }

	  $.fn.on = function(event, selector, data, callback, one){
	    var autoRemove, delegator, $this = this
	    if (event && !isString(event)) {
	      $.each(event, function(type, fn){
	        $this.on(type, selector, data, fn, one)
	      })
	      return $this
	    }

	    if (!isString(selector) && !isFunction(callback) && callback !== false)
	      callback = data, data = selector, selector = undefined
	    if (isFunction(data) || data === false)
	      callback = data, data = undefined

	    if (callback === false) callback = returnFalse

	    return $this.each(function(_, element){
	      if (one) autoRemove = function(e){
	        remove(element, e.type, callback)
	        return callback.apply(this, arguments)
	      }

	      if (selector) delegator = function(e){
	        var evt, match = $(e.target).closest(selector, element).get(0)
	        if (match && match !== element) {
	          evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})
	          return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))
	        }
	      }

	      add(element, event, callback, data, selector, delegator || autoRemove)
	    })
	  }
	  $.fn.off = function(event, selector, callback){
	    var $this = this
	    if (event && !isString(event)) {
	      $.each(event, function(type, fn){
	        $this.off(type, selector, fn)
	      })
	      return $this
	    }

	    if (!isString(selector) && !isFunction(callback) && callback !== false)
	      callback = selector, selector = undefined

	    if (callback === false) callback = returnFalse

	    return $this.each(function(){
	      remove(this, event, callback, selector)
	    })
	  }

	  $.fn.trigger = function(event, args){
	    event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event)
	    event._args = args
	    return this.each(function(){
	      // handle focus(), blur() by calling them directly
	      if (event.type in focus && typeof this[event.type] == "function") this[event.type]()
	      // items in the collection might not be DOM elements
	      else if ('dispatchEvent' in this) this.dispatchEvent(event)
	      else $(this).triggerHandler(event, args)
	    })
	  }

	  // triggers event handlers on current element just as if an event occurred,
	  // doesn't trigger an actual event, doesn't bubble
	  $.fn.triggerHandler = function(event, args){
	    var e, result
	    this.each(function(i, element){
	      e = createProxy(isString(event) ? $.Event(event) : event)
	      e._args = args
	      e.target = element
	      $.each(findHandlers(element, event.type || event), function(i, handler){
	        result = handler.proxy(e)
	        if (e.isImmediatePropagationStopped()) return false
	      })
	    })
	    return result
	  }

	    // shortcut methods for `.bind(event, fn)` for each event type
	  ;('focusin focusout focus blur load resize scroll unload click dblclick '+
	  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+
	  'change select keydown keypress keyup error').split(' ').forEach(function(event) {
	      $.fn[event] = function(callback) {
	        return (0 in arguments) ?
	          this.bind(event, callback) :
	          this.trigger(event)
	      }
	    })

	  $.Event = function(type, props) {
	    if (!isString(type)) props = type, type = props.type
	    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true
	    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])
	    event.initEvent(type, bubbles, true)
	    return compatible(event)
	  }

	})(Zepto)

	;(function($){
	  var jsonpID = 0,
	    document = window.document,
	    key,
	    name,
	    rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	    scriptTypeRE = /^(?:text|application)\/javascript/i,
	    xmlTypeRE = /^(?:text|application)\/xml/i,
	    jsonType = 'application/json',
	    htmlType = 'text/html',
	    blankRE = /^\s*$/,
	    originAnchor = document.createElement('a')

	  originAnchor.href = window.location.href

	  // trigger a custom event and return false if it was cancelled
	  function triggerAndReturn(context, eventName, data) {
	    var event = $.Event(eventName)
	    $(context).trigger(event, data)
	    return !event.isDefaultPrevented()
	  }

	  // trigger an Ajax "global" event
	  function triggerGlobal(settings, context, eventName, data) {
	    if (settings.global) return triggerAndReturn(context || document, eventName, data)
	  }

	  // Number of active Ajax requests
	  $.active = 0

	  function ajaxStart(settings) {
	    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')
	  }
	  function ajaxStop(settings) {
	    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')
	  }

	  // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
	  function ajaxBeforeSend(xhr, settings) {
	    var context = settings.context
	    if (settings.beforeSend.call(context, xhr, settings) === false ||
	      triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
	      return false

	    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])
	  }
	  function ajaxSuccess(data, xhr, settings, deferred) {
	    var context = settings.context, status = 'success'
	    settings.success.call(context, data, status, xhr)
	    if (deferred) deferred.resolveWith(context, [data, status, xhr])
	    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])
	    ajaxComplete(status, xhr, settings)
	  }
	  // type: "timeout", "error", "abort", "parsererror"
	  function ajaxError(error, type, xhr, settings, deferred) {
	    var context = settings.context
	    settings.error.call(context, xhr, type, error)
	    if (deferred) deferred.rejectWith(context, [xhr, type, error])
	    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type])
	    ajaxComplete(type, xhr, settings)
	  }
	  // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
	  function ajaxComplete(status, xhr, settings) {
	    var context = settings.context
	    settings.complete.call(context, xhr, status)
	    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])
	    ajaxStop(settings)
	  }

	  // Empty function, used as default callback
	  function empty() {}

	  $.ajaxJSONP = function(options, deferred){
	    if (!('type' in options)) return $.ajax(options)

	    var _callbackName = options.jsonpCallback,
	      callbackName = ($.isFunction(_callbackName) ?
	          _callbackName() : _callbackName) || ('jsonp' + (++jsonpID)),
	      script = document.createElement('script'),
	      originalCallback = window[callbackName],
	      responseData,
	      abort = function(errorType) {
	        $(script).triggerHandler('error', errorType || 'abort')
	      },
	      xhr = { abort: abort }, abortTimeout

	    if (deferred) deferred.promise(xhr)

	    $(script).on('load error', function(e, errorType){
	      clearTimeout(abortTimeout)
	      $(script).off().remove()

	      if (e.type == 'error' || !responseData) {
	        ajaxError(null, errorType || 'error', xhr, options, deferred)
	      } else {
	        ajaxSuccess(responseData[0], xhr, options, deferred)
	      }

	      window[callbackName] = originalCallback
	      if (responseData && $.isFunction(originalCallback))
	        originalCallback(responseData[0])

	      originalCallback = responseData = undefined
	    })

	    if (ajaxBeforeSend(xhr, options) === false) {
	      abort('abort')
	      return xhr
	    }

	    window[callbackName] = function(){
	      responseData = arguments
	    }

	    script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName)
	    document.head.appendChild(script)

	    if (options.timeout > 0) abortTimeout = setTimeout(function(){
	      abort('timeout')
	    }, options.timeout)

	    return xhr
	  }

	  $.ajaxSettings = {
	    // Default type of request
	    type: 'GET',
	    // Callback that is executed before request
	    beforeSend: empty,
	    // Callback that is executed if the request succeeds
	    success: empty,
	    // Callback that is executed the the server drops error
	    error: empty,
	    // Callback that is executed on request complete (both: error and success)
	    complete: empty,
	    // The context for the callbacks
	    context: null,
	    // Whether to trigger "global" Ajax events
	    global: true,
	    // Transport
	    xhr: function () {
	      return new window.XMLHttpRequest()
	    },
	    // MIME types mapping
	    // IIS returns Javascript as "application/x-javascript"
	    accepts: {
	      script: 'text/javascript, application/javascript, application/x-javascript',
	      json:   jsonType,
	      xml:    'application/xml, text/xml',
	      html:   htmlType,
	      text:   'text/plain'
	    },
	    // Whether the request is to another domain
	    crossDomain: false,
	    // Default timeout
	    timeout: 0,
	    // Whether data should be serialized to string
	    processData: true,
	    // Whether the browser should be allowed to cache GET responses
	    cache: true
	  }

	  function mimeToDataType(mime) {
	    if (mime) mime = mime.split(';', 2)[0]
	    return mime && ( mime == htmlType ? 'html' :
	        mime == jsonType ? 'json' :
	          scriptTypeRE.test(mime) ? 'script' :
	          xmlTypeRE.test(mime) && 'xml' ) || 'text'
	  }

	  function appendQuery(url, query) {
	    if (query == '') return url
	    return (url + '&' + query).replace(/[&?]{1,2}/, '?')
	  }

	  // serialize payload and append it to the URL for GET requests
	  function serializeData(options) {
	    if (options.processData && options.data && $.type(options.data) != "string")
	      options.data = $.param(options.data, options.traditional)
	    if (options.data && (!options.type || options.type.toUpperCase() == 'GET'))
	      options.url = appendQuery(options.url, options.data), options.data = undefined
	  }

	  $.ajax = function(options){
	    var settings = $.extend({}, options || {}),
	      deferred = $.Deferred && $.Deferred(),
	      urlAnchor
	    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]

	    ajaxStart(settings)

	    if (!settings.crossDomain) {
	      urlAnchor = document.createElement('a')
	      urlAnchor.href = settings.url
	      urlAnchor.href = urlAnchor.href
	      settings.crossDomain = (originAnchor.protocol + '//' + originAnchor.host) !== (urlAnchor.protocol + '//' + urlAnchor.host)
	    }

	    if (!settings.url) settings.url = window.location.toString()
	    serializeData(settings)

	    var dataType = settings.dataType, hasPlaceholder = /\?.+=\?/.test(settings.url)
	    if (hasPlaceholder) dataType = 'jsonp'

	    if (settings.cache === false || (
	        (!options || options.cache !== true) &&
	        ('script' == dataType || 'jsonp' == dataType)
	      ))
	      settings.url = appendQuery(settings.url, '_=' + Date.now())

	    if ('jsonp' == dataType) {
	      if (!hasPlaceholder)
	        settings.url = appendQuery(settings.url,
	          settings.jsonp ? (settings.jsonp + '=?') : settings.jsonp === false ? '' : 'callback=?')
	      return $.ajaxJSONP(settings, deferred)
	    }

	    var mime = settings.accepts[dataType],
	      headers = { },
	      setHeader = function(name, value) { headers[name.toLowerCase()] = [name, value] },
	      protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
	      xhr = settings.xhr(),
	      nativeSetHeader = xhr.setRequestHeader,
	      abortTimeout

	    if (deferred) deferred.promise(xhr)

	    if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest')
	    setHeader('Accept', mime || '*/*')
	    if (mime = settings.mimeType || mime) {
	      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]
	      xhr.overrideMimeType && xhr.overrideMimeType(mime)
	    }
	    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))
	      setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded')

	    if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name])
	    xhr.setRequestHeader = setHeader

	    xhr.onreadystatechange = function(){
	      if (xhr.readyState == 4) {
	        xhr.onreadystatechange = empty
	        clearTimeout(abortTimeout)
	        var result, error = false
	        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
	          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'))
	          result = xhr.responseText

	          try {
	            // http://perfectionkills.com/global-eval-what-are-the-options/
	            if (dataType == 'script')    (1,eval)(result)
	            else if (dataType == 'xml')  result = xhr.responseXML
	            else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)
	          } catch (e) { error = e }

	          if (error) ajaxError(error, 'parsererror', xhr, settings, deferred)
	          else ajaxSuccess(result, xhr, settings, deferred)
	        } else {
	          ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred)
	        }
	      }
	    }

	    if (ajaxBeforeSend(xhr, settings) === false) {
	      xhr.abort()
	      ajaxError(null, 'abort', xhr, settings, deferred)
	      return xhr
	    }

	    if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]

	    var async = 'async' in settings ? settings.async : true
	    xhr.open(settings.type, settings.url, async, settings.username, settings.password)

	    for (name in headers) nativeSetHeader.apply(xhr, headers[name])

	    if (settings.timeout > 0) abortTimeout = setTimeout(function(){
	      xhr.onreadystatechange = empty
	      xhr.abort()
	      ajaxError(null, 'timeout', xhr, settings, deferred)
	    }, settings.timeout)

	    // avoid sending empty string (#319)
	    xhr.send(settings.data ? settings.data : null)
	    return xhr
	  }

	  // handle optional data/success arguments
	  function parseArguments(url, data, success, dataType) {
	    if ($.isFunction(data)) dataType = success, success = data, data = undefined
	    if (!$.isFunction(success)) dataType = success, success = undefined
	    return {
	      url: url
	      , data: data
	      , success: success
	      , dataType: dataType
	    }
	  }

	  $.get = function(/* url, data, success, dataType */){
	    return $.ajax(parseArguments.apply(null, arguments))
	  }

	  $.post = function(/* url, data, success, dataType */){
	    var options = parseArguments.apply(null, arguments)
	    options.type = 'POST'
	    return $.ajax(options)
	  }

	  $.getJSON = function(/* url, data, success */){
	    var options = parseArguments.apply(null, arguments)
	    options.dataType = 'json'
	    return $.ajax(options)
	  }

	  $.fn.load = function(url, data, success){
	    if (!this.length) return this
	    var self = this, parts = url.split(/\s/), selector,
	      options = parseArguments(url, data, success),
	      callback = options.success
	    if (parts.length > 1) options.url = parts[0], selector = parts[1]
	    options.success = function(response){
	      self.html(selector ?
	        $('<div>').html(response.replace(rscript, "")).find(selector)
	        : response)
	      callback && callback.apply(self, arguments)
	    }
	    $.ajax(options)
	    return this
	  }

	  var escape = encodeURIComponent

	  function serialize(params, obj, traditional, scope){
	    var type, array = $.isArray(obj), hash = $.isPlainObject(obj)
	    $.each(obj, function(key, value) {
	      type = $.type(value)
	      if (scope) key = traditional ? scope :
	      scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'
	      // handle data in serializeArray() format
	      if (!scope && array) params.add(value.name, value.value)
	      // recurse into nested objects
	      else if (type == "array" || (!traditional && type == "object"))
	        serialize(params, value, traditional, key)
	      else params.add(key, value)
	    })
	  }

	  $.param = function(obj, traditional){
	    var params = []
	    params.add = function(key, value) {
	      if ($.isFunction(value)) value = value()
	      if (value == null) value = ""
	      this.push(escape(key) + '=' + escape(value))
	    }
	    serialize(params, obj, traditional)
	    return params.join('&').replace(/%20/g, '+')
	  }
	})(Zepto)

	;(function($){
	  $.fn.serializeArray = function() {
	    var name, type, result = [],
	      add = function(value) {
	        if (value.forEach) return value.forEach(add)
	        result.push({ name: name, value: value })
	      }
	    if (this[0]) $.each(this[0].elements, function(_, field){
	      type = field.type, name = field.name
	      if (name && field.nodeName.toLowerCase() != 'fieldset' &&
	        !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' &&
	        ((type != 'radio' && type != 'checkbox') || field.checked))
	        add($(field).val())
	    })
	    return result
	  }

	  $.fn.serialize = function(){
	    var result = []
	    this.serializeArray().forEach(function(elm){
	      result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value))
	    })
	    return result.join('&')
	  }

	  $.fn.submit = function(callback) {
	    if (0 in arguments) this.bind('submit', callback)
	    else if (this.length) {
	      var event = $.Event('submit')
	      this.eq(0).trigger(event)
	      if (!event.isDefaultPrevented()) this.get(0).submit()
	    }
	    return this
	  }

	})(Zepto)

	;(function($){
	  // __proto__ doesn't exist on IE<11, so redefine
	  // the Z function to use object extension instead
	  if (!('__proto__' in {})) {
	    $.extend($.zepto, {
	      Z: function(dom, selector){
	        dom = dom || []
	        $.extend(dom, $.fn)
	        dom.selector = selector || ''
	        dom.__Z = true
	        return dom
	      },
	      // this is a kludge but works
	      isZ: function(object){
	        return $.type(object) === 'array' && '__Z' in object
	      }
	    })
	  }

	  // getComputedStyle shouldn't freak out when called
	  // without a valid element as argument
	  try {
	    getComputedStyle(undefined)
	  } catch(e) {
	    var nativeGetComputedStyle = getComputedStyle;
	    window.getComputedStyle = function(element){
	      try {
	        return nativeGetComputedStyle(element)
	      } catch(e) {
	        return null
	      }
	    }
	  }
	})(Zepto)


	// umd exports 出口
	module.exports = Zepto;


/***/ },
/* 3 */
/***/ function(module, exports) {

	//     Zepto.js
	//     (c) 2010-2015 Thomas Fuchs
	//     Zepto.js may be freely distributed under the MIT license.

	;(function($){
	  function detect(ua, platform){
	    var os = this.os = {}, browser = this.browser = {},
	      webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
	      android = ua.match(/(Android);?[\s\/]+([\d.]+)?/),
	      osx = !!ua.match(/\(Macintosh\; Intel /),
	      ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
	      ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
	      iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
	      webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
	      win = /Win\d{2}|Windows/.test(platform),
	      wp = ua.match(/Windows Phone ([\d.]+)/),
	      touchpad = webos && ua.match(/TouchPad/),
	      kindle = ua.match(/Kindle\/([\d.]+)/),
	      silk = ua.match(/Silk\/([\d._]+)/),
	      blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/),
	      bb10 = ua.match(/(BB10).*Version\/([\d.]+)/),
	      rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
	      playbook = ua.match(/PlayBook/),
	      chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
	      firefox = ua.match(/Firefox\/([\d.]+)/),
	      firefoxos = ua.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
	      ie = ua.match(/MSIE\s([\d.]+)/) || ua.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
	      webview = !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
	      safari = webview || ua.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/)

	    // Todo: clean this up with a better OS/browser seperation:
	    // - discern (more) between multiple browsers on android
	    // - decide if kindle fire in silk mode is android or not
	    // - Firefox on Android doesn't specify the Android version
	    // - possibly devide in os, device and browser hashes

	    if (browser.webkit = !!webkit) browser.version = webkit[1]

	    if (android) os.android = true, os.version = android[2]
	    if (iphone && !ipod) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.')
	    if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.')
	    if (ipod) os.ios = os.ipod = true, os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null
	    if (wp) os.wp = true, os.version = wp[1]
	    if (webos) os.webos = true, os.version = webos[2]
	    if (touchpad) os.touchpad = true
	    if (blackberry) os.blackberry = true, os.version = blackberry[2]
	    if (bb10) os.bb10 = true, os.version = bb10[2]
	    if (rimtabletos) os.rimtabletos = true, os.version = rimtabletos[2]
	    if (playbook) browser.playbook = true
	    if (kindle) os.kindle = true, os.version = kindle[1]
	    if (silk) browser.silk = true, browser.version = silk[1]
	    if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true
	    if (chrome) browser.chrome = true, browser.version = chrome[1]
	    if (firefox) browser.firefox = true, browser.version = firefox[1]
	    if (firefoxos) os.firefoxos = true, os.version = firefoxos[1]
	    if (ie) browser.ie = true, browser.version = ie[1]
	    if (safari && (osx || os.ios || win)) {
	      browser.safari = true
	      if (!os.ios) browser.version = safari[1]
	    }
	    if (webview) browser.webview = true

	    os.tablet = !!(ipad || playbook || (android && !ua.match(/Mobile/)) ||
	    (firefox && ua.match(/Tablet/)) || (ie && !ua.match(/Phone/) && ua.match(/Touch/)))
	    os.phone  = !!(!os.tablet && !os.ipod && (android || iphone || webos || blackberry || bb10 ||
	    (chrome && ua.match(/Android/)) || (chrome && ua.match(/CriOS\/([\d.]+)/)) ||
	    (firefox && ua.match(/Mobile/)) || (ie && ua.match(/Touch/))))
	  }

	  detect.call($, navigator.userAgent, navigator.platform)
	  // make available to unit tests
	  $.__detect = detect

	})(Zepto)


/***/ },
/* 4 */
/***/ function(module, exports) {

	//     Zepto.js
	//     (c) 2010-2015 Thomas Fuchs
	//     Zepto.js may be freely distributed under the MIT license.

	;(function($, undefined){
	  var prefix = '', eventPrefix,
	    vendors = { Webkit: 'webkit', Moz: '', O: 'o' },
	    testEl = document.createElement('div'),
	    supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
	    transform,
	    transitionProperty, transitionDuration, transitionTiming, transitionDelay,
	    animationName, animationDuration, animationTiming, animationDelay,
	    cssReset = {}

	  function dasherize(str) { return str.replace(/([a-z])([A-Z])/, '$1-$2').toLowerCase() }
	  function normalizeEvent(name) { return eventPrefix ? eventPrefix + name : name.toLowerCase() }

	  $.each(vendors, function(vendor, event){
	    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
	      prefix = '-' + vendor.toLowerCase() + '-'
	      eventPrefix = event
	      return false
	    }
	  })

	  transform = prefix + 'transform'
	  cssReset[transitionProperty = prefix + 'transition-property'] =
	    cssReset[transitionDuration = prefix + 'transition-duration'] =
	      cssReset[transitionDelay    = prefix + 'transition-delay'] =
	        cssReset[transitionTiming   = prefix + 'transition-timing-function'] =
	          cssReset[animationName      = prefix + 'animation-name'] =
	            cssReset[animationDuration  = prefix + 'animation-duration'] =
	              cssReset[animationDelay     = prefix + 'animation-delay'] =
	                cssReset[animationTiming    = prefix + 'animation-timing-function'] = ''

	  $.fx = {
	    off: (eventPrefix === undefined && testEl.style.transitionProperty === undefined),
	    speeds: { _default: 400, fast: 200, slow: 600 },
	    cssPrefix: prefix,
	    transitionEnd: normalizeEvent('TransitionEnd'),
	    animationEnd: normalizeEvent('AnimationEnd')
	  }

	  $.fn.animate = function(properties, duration, ease, callback, delay){
	    if ($.isFunction(duration))
	      callback = duration, ease = undefined, duration = undefined
	    if ($.isFunction(ease))
	      callback = ease, ease = undefined
	    if ($.isPlainObject(duration))
	      ease = duration.easing, callback = duration.complete, delay = duration.delay, duration = duration.duration
	    if (duration) duration = (typeof duration == 'number' ? duration :
	        ($.fx.speeds[duration] || $.fx.speeds._default)) / 1000
	    if (delay) delay = parseFloat(delay) / 1000
	    return this.anim(properties, duration, ease, callback, delay)
	  }

	  $.fn.anim = function(properties, duration, ease, callback, delay){
	    var key, cssValues = {}, cssProperties, transforms = '',
	      that = this, wrappedCallback, endEvent = $.fx.transitionEnd,
	      fired = false

	    if (duration === undefined) duration = $.fx.speeds._default / 1000
	    if (delay === undefined) delay = 0
	    if ($.fx.off) duration = 0

	    if (typeof properties == 'string') {
	      // keyframe animation
	      cssValues[animationName] = properties
	      cssValues[animationDuration] = duration + 's'
	      cssValues[animationDelay] = delay + 's'
	      cssValues[animationTiming] = (ease || 'linear')
	      endEvent = $.fx.animationEnd
	    } else {
	      cssProperties = []
	      // CSS transitions
	      for (key in properties)
	        if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') '
	        else cssValues[key] = properties[key], cssProperties.push(dasherize(key))

	      if (transforms) cssValues[transform] = transforms, cssProperties.push(transform)
	      if (duration > 0 && typeof properties === 'object') {
	        cssValues[transitionProperty] = cssProperties.join(', ')
	        cssValues[transitionDuration] = duration + 's'
	        cssValues[transitionDelay] = delay + 's'
	        cssValues[transitionTiming] = (ease || 'linear')
	      }
	    }

	    wrappedCallback = function(event){
	      if (typeof event !== 'undefined') {
	        if (event.target !== event.currentTarget) return // makes sure the event didn't bubble from "below"
	        $(event.target).unbind(endEvent, wrappedCallback)
	      } else
	        $(this).unbind(endEvent, wrappedCallback) // triggered by setTimeout

	      fired = true
	      $(this).css(cssReset)
	      callback && callback.call(this)
	    }
	    if (duration > 0){
	      this.bind(endEvent, wrappedCallback)
	      // transitionEnd is not always firing on older Android phones
	      // so make sure it gets fired
	      setTimeout(function(){
	        if (fired) return
	        wrappedCallback.call(that)
	      }, ((duration + delay) * 1000) + 25)
	    }

	    // trigger page reflow so new elements can animate
	    this.size() && this.get(0).clientLeft

	    this.css(cssValues)

	    if (duration <= 0) setTimeout(function() {
	      that.each(function(){ wrappedCallback.call(this) })
	    }, 0)

	    return this
	  }

	  testEl = null
	})(Zepto)


/***/ },
/* 5 */
/***/ function(module, exports) {

	//     Zepto.js
	//     (c) 2010-2015 Thomas Fuchs
	//     Zepto.js may be freely distributed under the MIT license.

	;(function($, undefined){
	  var document = window.document, docElem = document.documentElement,
	    origShow = $.fn.show, origHide = $.fn.hide, origToggle = $.fn.toggle

	  function anim(el, speed, opacity, scale, callback) {
	    if (typeof speed == 'function' && !callback) callback = speed, speed = undefined
	    var props = { opacity: opacity }
	    if (scale) {
	      props.scale = scale
	      el.css($.fx.cssPrefix + 'transform-origin', '0 0')
	    }
	    return el.animate(props, speed, null, callback)
	  }

	  function hide(el, speed, scale, callback) {
	    return anim(el, speed, 0, scale, function(){
	      origHide.call($(this))
	      callback && callback.call(this)
	    })
	  }

	  $.fn.show = function(speed, callback) {
	    origShow.call(this)
	    if (speed === undefined) speed = 0
	    else this.css('opacity', 0)
	    return anim(this, speed, 1, '1,1', callback)
	  }

	  $.fn.hide = function(speed, callback) {
	    if (speed === undefined) return origHide.call(this)
	    else return hide(this, speed, '0,0', callback)
	  }

	  $.fn.toggle = function(speed, callback) {
	    if (speed === undefined || typeof speed == 'boolean')
	      return origToggle.call(this, speed)
	    else return this.each(function(){
	      var el = $(this)
	      el[el.css('display') == 'none' ? 'show' : 'hide'](speed, callback)
	    })
	  }

	  $.fn.fadeTo = function(speed, opacity, callback) {
	    return anim(this, speed, opacity, null, callback)
	  }

	  $.fn.fadeIn = function(speed, callback) {
	    var target = this.css('opacity')
	    if (target > 0) this.css('opacity', 0)
	    else target = 1
	    return origShow.call(this).fadeTo(speed, target, callback)
	  }

	  $.fn.fadeOut = function(speed, callback) {
	    return hide(this, speed, null, callback)
	  }

	  $.fn.fadeToggle = function(speed, callback) {
	    return this.each(function(){
	      var el = $(this)
	      el[
	        (el.css('opacity') == 0 || el.css('display') == 'none') ? 'fadeIn' : 'fadeOut'
	        ](speed, callback)
	    })
	  }

	})(Zepto)


/***/ },
/* 6 */
/***/ function(module, exports) {

	//     Zepto.js
	//     (c) 2010-2015 Thomas Fuchs
	//     Zepto.js may be freely distributed under the MIT license.

	;(function($){
	  var cache = [], timeout

	  $.fn.remove = function(){
	    return this.each(function(){
	      if(this.parentNode){
	        if(this.tagName === 'IMG'){
	          cache.push(this)
	          this.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
	          if (timeout) clearTimeout(timeout)
	          timeout = setTimeout(function(){ cache = [] }, 60000)
	        }
	        this.parentNode.removeChild(this)
	      }
	    })
	  }
	})(Zepto)


/***/ },
/* 7 */
/***/ function(module, exports) {

	//     Zepto.js
	//     (c) 2010-2015 Thomas Fuchs
	//     Zepto.js may be freely distributed under the MIT license.

	// The following code is heavily inspired by jQuery's $.fn.data()

	;(function($){
	  var data = {}, dataAttr = $.fn.data, camelize = $.camelCase,
	    exp = $.expando = 'Zepto' + (+new Date()), emptyArray = []

	  // Get value from node:
	  // 1. first try key as given,
	  // 2. then try camelized key,
	  // 3. fall back to reading "data-*" attribute.
	  function getData(node, name) {
	    var id = node[exp], store = id && data[id]
	    if (name === undefined) return store || setData(node)
	    else {
	      if (store) {
	        if (name in store) return store[name]
	        var camelName = camelize(name)
	        if (camelName in store) return store[camelName]
	      }
	      return dataAttr.call($(node), name)
	    }
	  }

	  // Store value under camelized key on node
	  function setData(node, name, value) {
	    var id = node[exp] || (node[exp] = ++$.uuid),
	      store = data[id] || (data[id] = attributeData(node))
	    if (name !== undefined) store[camelize(name)] = value
	    return store
	  }

	  // Read all "data-*" attributes from a node
	  function attributeData(node) {
	    var store = {}
	    $.each(node.attributes || emptyArray, function(i, attr){
	      if (attr.name.indexOf('data-') == 0)
	        store[camelize(attr.name.replace('data-', ''))] =
	          $.zepto.deserializeValue(attr.value)
	    })
	    return store
	  }

	  $.fn.data = function(name, value) {
	    return value === undefined ?
	      // set multiple values via object
	      $.isPlainObject(name) ?
	        this.each(function(i, node){
	          $.each(name, function(key, value){ setData(node, key, value) })
	        }) :
	        // get value from first element
	        (0 in this ? getData(this[0], name) : undefined) :
	      // set value on all elements
	      this.each(function(){ setData(this, name, value) })
	  }

	  $.fn.removeData = function(names) {
	    if (typeof names == 'string') names = names.split(/\s+/)
	    return this.each(function(){
	      var id = this[exp], store = id && data[id]
	      if (store) $.each(names || store, function(key){
	        delete store[names ? camelize(this) : key]
	      })
	    })
	  }

	    // Generate extended `remove` and `empty` functions
	  ;['remove', 'empty'].forEach(function(methodName){
	    var origFn = $.fn[methodName]
	    $.fn[methodName] = function() {
	      var elements = this.find('*')
	      if (methodName === 'remove') elements = elements.add(this)
	      elements.removeData()
	      return origFn.call(this)
	    }
	  })
	})(Zepto)


/***/ },
/* 8 */
/***/ function(module, exports) {

	//     Zepto.js
	//     (c) 2010-2015 Thomas Fuchs
	//     Zepto.js may be freely distributed under the MIT license.
	//
	//     Some code (c) 2005, 2013 jQuery Foundation, Inc. and other contributors

	;(function($){
	  var slice = Array.prototype.slice

	  function Deferred(func) {
	    var tuples = [
	        // action, add listener, listener list, final state
	        [ "resolve", "done", $.Callbacks({once:1, memory:1}), "resolved" ],
	        [ "reject", "fail", $.Callbacks({once:1, memory:1}), "rejected" ],
	        [ "notify", "progress", $.Callbacks({memory:1}) ]
	      ],
	      state = "pending",
	      promise = {
	        state: function() {
	          return state
	        },
	        always: function() {
	          deferred.done(arguments).fail(arguments)
	          return this
	        },
	        then: function(/* fnDone [, fnFailed [, fnProgress]] */) {
	          var fns = arguments
	          return Deferred(function(defer){
	            $.each(tuples, function(i, tuple){
	              var fn = $.isFunction(fns[i]) && fns[i]
	              deferred[tuple[1]](function(){
	                var returned = fn && fn.apply(this, arguments)
	                if (returned && $.isFunction(returned.promise)) {
	                  returned.promise()
	                    .done(defer.resolve)
	                    .fail(defer.reject)
	                    .progress(defer.notify)
	                } else {
	                  var context = this === promise ? defer.promise() : this,
	                    values = fn ? [returned] : arguments
	                  defer[tuple[0] + "With"](context, values)
	                }
	              })
	            })
	            fns = null
	          }).promise()
	        },

	        promise: function(obj) {
	          return obj != null ? $.extend( obj, promise ) : promise
	        }
	      },
	      deferred = {}

	    $.each(tuples, function(i, tuple){
	      var list = tuple[2],
	        stateString = tuple[3]

	      promise[tuple[1]] = list.add

	      if (stateString) {
	        list.add(function(){
	          state = stateString
	        }, tuples[i^1][2].disable, tuples[2][2].lock)
	      }

	      deferred[tuple[0]] = function(){
	        deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments)
	        return this
	      }
	      deferred[tuple[0] + "With"] = list.fireWith
	    })

	    promise.promise(deferred)
	    if (func) func.call(deferred, deferred)
	    return deferred
	  }

	  $.when = function(sub) {
	    var resolveValues = slice.call(arguments),
	      len = resolveValues.length,
	      i = 0,
	      remain = len !== 1 || (sub && $.isFunction(sub.promise)) ? len : 0,
	      deferred = remain === 1 ? sub : Deferred(),
	      progressValues, progressContexts, resolveContexts,
	      updateFn = function(i, ctx, val){
	        return function(value){
	          ctx[i] = this
	          val[i] = arguments.length > 1 ? slice.call(arguments) : value
	          if (val === progressValues) {
	            deferred.notifyWith(ctx, val)
	          } else if (!(--remain)) {
	            deferred.resolveWith(ctx, val)
	          }
	        }
	      }

	    if (len > 1) {
	      progressValues = new Array(len)
	      progressContexts = new Array(len)
	      resolveContexts = new Array(len)
	      for ( ; i < len; ++i ) {
	        if (resolveValues[i] && $.isFunction(resolveValues[i].promise)) {
	          resolveValues[i].promise()
	            .done(updateFn(i, resolveContexts, resolveValues))
	            .fail(deferred.reject)
	            .progress(updateFn(i, progressContexts, progressValues))
	        } else {
	          --remain
	        }
	      }
	    }
	    if (!remain) deferred.resolveWith(resolveContexts, resolveValues)
	    return deferred.promise()
	  }

	  $.Deferred = Deferred
	})(Zepto)


/***/ },
/* 9 */
/***/ function(module, exports) {

	//     Zepto.js
	//     (c) 2010-2015 Thomas Fuchs
	//     Zepto.js may be freely distributed under the MIT license.

	;(function($){
	  // Create a collection of callbacks to be fired in a sequence, with configurable behaviour
	  // Option flags:
	  //   - once: Callbacks fired at most one time.
	  //   - memory: Remember the most recent context and arguments
	  //   - stopOnFalse: Cease iterating over callback list
	  //   - unique: Permit adding at most one instance of the same callback
	  $.Callbacks = function(options) {
	    options = $.extend({}, options)

	    var memory, // Last fire value (for non-forgettable lists)
	      fired,  // Flag to know if list was already fired
	      firing, // Flag to know if list is currently firing
	      firingStart, // First callback to fire (used internally by add and fireWith)
	      firingLength, // End of the loop when firing
	      firingIndex, // Index of currently firing callback (modified by remove if needed)
	      list = [], // Actual callback list
	      stack = !options.once && [], // Stack of fire calls for repeatable lists
	      fire = function(data) {
	        memory = options.memory && data
	        fired = true
	        firingIndex = firingStart || 0
	        firingStart = 0
	        firingLength = list.length
	        firing = true
	        for ( ; list && firingIndex < firingLength ; ++firingIndex ) {
	          if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
	            memory = false
	            break
	          }
	        }
	        firing = false
	        if (list) {
	          if (stack) stack.length && fire(stack.shift())
	          else if (memory) list.length = 0
	          else Callbacks.disable()
	        }
	      },

	      Callbacks = {
	        add: function() {
	          if (list) {
	            var start = list.length,
	              add = function(args) {
	                $.each(args, function(_, arg){
	                  if (typeof arg === "function") {
	                    if (!options.unique || !Callbacks.has(arg)) list.push(arg)
	                  }
	                  else if (arg && arg.length && typeof arg !== 'string') add(arg)
	                })
	              }
	            add(arguments)
	            if (firing) firingLength = list.length
	            else if (memory) {
	              firingStart = start
	              fire(memory)
	            }
	          }
	          return this
	        },
	        remove: function() {
	          if (list) {
	            $.each(arguments, function(_, arg){
	              var index
	              while ((index = $.inArray(arg, list, index)) > -1) {
	                list.splice(index, 1)
	                // Handle firing indexes
	                if (firing) {
	                  if (index <= firingLength) --firingLength
	                  if (index <= firingIndex) --firingIndex
	                }
	              }
	            })
	          }
	          return this
	        },
	        has: function(fn) {
	          return !!(list && (fn ? $.inArray(fn, list) > -1 : list.length))
	        },
	        empty: function() {
	          firingLength = list.length = 0
	          return this
	        },
	        disable: function() {
	          list = stack = memory = undefined
	          return this
	        },
	        disabled: function() {
	          return !list
	        },
	        lock: function() {
	          stack = undefined;
	          if (!memory) Callbacks.disable()
	          return this
	        },
	        locked: function() {
	          return !stack
	        },
	        fireWith: function(context, args) {
	          if (list && (!fired || stack)) {
	            args = args || []
	            args = [context, args.slice ? args.slice() : args]
	            if (firing) stack.push(args)
	            else fire(args)
	          }
	          return this
	        },
	        fire: function() {
	          return Callbacks.fireWith(this, arguments)
	        },
	        fired: function() {
	          return !!fired
	        }
	      }

	    return Callbacks
	  }
	})(Zepto)


/***/ },
/* 10 */
/***/ function(module, exports) {

	//     Zepto.js
	//     (c) 2010-2015 Thomas Fuchs
	//     Zepto.js may be freely distributed under the MIT license.

	;(function($){
	  var zepto = $.zepto, oldQsa = zepto.qsa, oldMatches = zepto.matches

	  function visible(elem){
	    elem = $(elem)
	    return !!(elem.width() || elem.height()) && elem.css("display") !== "none"
	  }

	  // Implements a subset from:
	  // http://api.jquery.com/category/selectors/jquery-selector-extensions/
	  //
	  // Each filter function receives the current index, all nodes in the
	  // considered set, and a value if there were parentheses. The value
	  // of `this` is the node currently being considered. The function returns the
	  // resulting node(s), null, or undefined.
	  //
	  // Complex selectors are not supported:
	  //   li:has(label:contains("foo")) + li:has(label:contains("bar"))
	  //   ul.inner:first > li
	  var filters = $.expr[':'] = {
	    visible:  function(){ if (visible(this)) return this },
	    hidden:   function(){ if (!visible(this)) return this },
	    selected: function(){ if (this.selected) return this },
	    checked:  function(){ if (this.checked) return this },
	    parent:   function(){ return this.parentNode },
	    first:    function(idx){ if (idx === 0) return this },
	    last:     function(idx, nodes){ if (idx === nodes.length - 1) return this },
	    eq:       function(idx, _, value){ if (idx === value) return this },
	    contains: function(idx, _, text){ if ($(this).text().indexOf(text) > -1) return this },
	    has:      function(idx, _, sel){ if (zepto.qsa(this, sel).length) return this }
	  }

	  var filterRe = new RegExp('(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*'),
	    childRe  = /^\s*>/,
	    classTag = 'Zepto' + (+new Date())

	  function process(sel, fn) {
	    // quote the hash in `a[href^=#]` expression
	    sel = sel.replace(/=#\]/g, '="#"]')
	    var filter, arg, match = filterRe.exec(sel)
	    if (match && match[2] in filters) {
	      filter = filters[match[2]], arg = match[3]
	      sel = match[1]
	      if (arg) {
	        var num = Number(arg)
	        if (isNaN(num)) arg = arg.replace(/^["']|["']$/g, '')
	        else arg = num
	      }
	    }
	    return fn(sel, filter, arg)
	  }

	  zepto.qsa = function(node, selector) {
	    return process(selector, function(sel, filter, arg){
	      try {
	        var taggedParent
	        if (!sel && filter) sel = '*'
	        else if (childRe.test(sel))
	        // support "> *" child queries by tagging the parent node with a
	        // unique class and prepending that classname onto the selector
	          taggedParent = $(node).addClass(classTag), sel = '.'+classTag+' '+sel

	        var nodes = oldQsa(node, sel)
	      } catch(e) {
	        console.error('error performing selector: %o', selector)
	        throw e
	      } finally {
	        if (taggedParent) taggedParent.removeClass(classTag)
	      }
	      return !filter ? nodes :
	        zepto.uniq($.map(nodes, function(n, i){ return filter.call(n, i, nodes, arg) }))
	    })
	  }

	  zepto.matches = function(node, selector){
	    return process(selector, function(sel, filter, arg){
	      return (!sel || oldMatches(node, sel)) &&
	        (!filter || filter.call(node, null, arg) === node)
	    })
	  }
	})(Zepto)


/***/ },
/* 11 */
/***/ function(module, exports) {

	//     Zepto.js
	//     (c) 2010-2015 Thomas Fuchs
	//     Zepto.js may be freely distributed under the MIT license.

	;(function($){
	  var touch = {},
	    touchTimeout, tapTimeout, swipeTimeout, longTapTimeout,
	    longTapDelay = 750,
	    gesture

	  function swipeDirection(x1, x2, y1, y2) {
	    return Math.abs(x1 - x2) >=
	    Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
	  }

	  function longTap() {
	    longTapTimeout = null
	    if (touch.last) {
	      touch.el.trigger('longTap')
	      touch = {}
	    }
	  }

	  function cancelLongTap() {
	    if (longTapTimeout) clearTimeout(longTapTimeout)
	    longTapTimeout = null
	  }

	  function cancelAll() {
	    if (touchTimeout) clearTimeout(touchTimeout)
	    if (tapTimeout) clearTimeout(tapTimeout)
	    if (swipeTimeout) clearTimeout(swipeTimeout)
	    if (longTapTimeout) clearTimeout(longTapTimeout)
	    touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null
	    touch = {}
	  }

	  function isPrimaryTouch(event){
	    return (event.pointerType == 'touch' ||
	      event.pointerType == event.MSPOINTER_TYPE_TOUCH)
	      && event.isPrimary
	  }

	  function isPointerEventType(e, type){
	    return (e.type == 'pointer'+type ||
	    e.type.toLowerCase() == 'mspointer'+type)
	  }

	  $(document).ready(function(){
	    var now, delta, deltaX = 0, deltaY = 0, firstTouch, _isPointerType

	    if ('MSGesture' in window) {
	      gesture = new MSGesture()
	      gesture.target = document.body
	    }

	    $(document)
	      .bind('MSGestureEnd', function(e){
	        var swipeDirectionFromVelocity =
	          e.velocityX > 1 ? 'Right' : e.velocityX < -1 ? 'Left' : e.velocityY > 1 ? 'Down' : e.velocityY < -1 ? 'Up' : null;
	        if (swipeDirectionFromVelocity) {
	          touch.el.trigger('swipe')
	          touch.el.trigger('swipe'+ swipeDirectionFromVelocity)
	        }
	      })
	      .on('touchstart MSPointerDown pointerdown', function(e){
	        if((_isPointerType = isPointerEventType(e, 'down')) &&
	          !isPrimaryTouch(e)) return
	        firstTouch = _isPointerType ? e : e.touches[0]
	        if (e.touches && e.touches.length === 1 && touch.x2) {
	          // Clear out touch movement data if we have it sticking around
	          // This can occur if touchcancel doesn't fire due to preventDefault, etc.
	          touch.x2 = undefined
	          touch.y2 = undefined
	        }
	        now = Date.now()
	        delta = now - (touch.last || now)
	        touch.el = $('tagName' in firstTouch.target ?
	          firstTouch.target : firstTouch.target.parentNode)
	        touchTimeout && clearTimeout(touchTimeout)
	        touch.x1 = firstTouch.pageX
	        touch.y1 = firstTouch.pageY
	        if (delta > 0 && delta <= 250) touch.isDoubleTap = true
	        touch.last = now
	        longTapTimeout = setTimeout(longTap, longTapDelay)
	        // adds the current touch contact for IE gesture recognition
	        if (gesture && _isPointerType) gesture.addPointer(e.pointerId);
	      })
	      .on('touchmove MSPointerMove pointermove', function(e){
	        if((_isPointerType = isPointerEventType(e, 'move')) &&
	          !isPrimaryTouch(e)) return
	        firstTouch = _isPointerType ? e : e.touches[0]
	        cancelLongTap()
	        touch.x2 = firstTouch.pageX
	        touch.y2 = firstTouch.pageY

	        deltaX += Math.abs(touch.x1 - touch.x2)
	        deltaY += Math.abs(touch.y1 - touch.y2)
	      })
	      .on('touchend MSPointerUp pointerup', function(e){
	        if((_isPointerType = isPointerEventType(e, 'up')) &&
	          !isPrimaryTouch(e)) return
	        cancelLongTap()

	        // swipe
	        if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) ||
	          (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30))

	          swipeTimeout = setTimeout(function() {
	            touch.el.trigger('swipe')
	            touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)))
	            touch = {}
	          }, 0)

	        // normal tap
	        else if ('last' in touch)
	        // don't fire tap when delta position changed by more than 30 pixels,
	        // for instance when moving to a point and back to origin
	          if (deltaX < 30 && deltaY < 30) {
	            // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
	            // ('tap' fires before 'scroll')
	            tapTimeout = setTimeout(function() {

	              // trigger universal 'tap' with the option to cancelTouch()
	              // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
	              var event = $.Event('tap')
	              event.cancelTouch = cancelAll
	              touch.el.trigger(event)

	              // trigger double tap immediately
	              if (touch.isDoubleTap) {
	                if (touch.el) touch.el.trigger('doubleTap')
	                touch = {}
	              }

	              // trigger single tap after 250ms of inactivity
	              else {
	                touchTimeout = setTimeout(function(){
	                  touchTimeout = null
	                  if (touch.el) touch.el.trigger('singleTap')
	                  touch = {}
	                }, 250)
	              }
	            }, 0)
	          } else {
	            touch = {}
	          }
	        deltaX = deltaY = 0

	      })
	      // when the browser window loses focus,
	      // for example when a modal dialog is shown,
	      // cancel all ongoing events
	      .on('touchcancel MSPointerCancel pointercancel', cancelAll)

	    // scrolling the window indicates intention of the user
	    // to scroll, not tap or swipe, so cancel all ongoing events
	    $(window).on('scroll', cancelAll)
	  })

	  ;['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown',
	    'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function(eventName){
	      $.fn[eventName] = function(callback){ return this.on(eventName, callback) }
	    })
	})(Zepto)


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _zepto = __webpack_require__(1);

	var _zepto2 = _interopRequireDefault(_zepto);

	var _core = __webpack_require__(13);

	var _core2 = _interopRequireDefault(_core);

	var _utils = __webpack_require__(16);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(20);
	// import wechat from './wechat';

	// ui.js
	// =================================

	_core2.default.utils = _utils2.default;

	module.exports = _core2.default;

	// TODO:
	// 1. 统一处理 url 夜间模式,无图模式
	// 2. helper 方法,无图模式
	// 3. UA 探测更加丰富,
	// 4. 增加 flexible

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// core.js
	// ==========================================

	'use strict';

	var _zepto = __webpack_require__(1);

	var _zepto2 = _interopRequireDefault(_zepto);

	var _fastclick = __webpack_require__(14);

	var _fastclick2 = _interopRequireDefault(_fastclick);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	if (typeof _zepto2.default === 'undefined') {
	  throw new Error('NewsSDK H5 requires zepto -.-');
	}

	var UI = _zepto2.default.UI || {};
	var doc = window.document;

	// Attach FastClick on touch devices
	(0, _zepto2.default)(function () {
	  _fastclick2.default.attach(doc.body);
	});

	// 检测支持的属性
	UI.support = {};

	// 检测 animationEnd 支持
	UI.support.animation = function () {
	  var animationEnd = function () {
	    var element = doc.body || doc.documentElement;
	    var animEndEventNames = {
	      // firefox 和 o 不用检测
	      //MozAnimation: 'animationend',
	      //OAnimation: 'oAnimationEnd oanimationend',
	      WebkitAnimation: 'webkitAnimationEnd',
	      animation: 'animationend'
	    };

	    for (var name in animEndEventNames) {
	      if (element.style[name] !== undefined) {
	        return animEndEventNames[name];
	      }
	    }
	  }();

	  return animationEnd && { end: animationEnd };
	}();

	// 检测 transitionEnd 支持
	UI.support.transition = function () {
	  var transitionEnd = function () {
	    // https://developer.mozilla.org/en-US/docs/Web/Events/transitionend#Browser_compatibility
	    var element = doc.body || doc.documentElement;
	    var transEndEventNames = {
	      //MozTransition: 'transitionend',
	      //OTransition: 'oTransitionEnd otransitionend',
	      WebkitTransition: 'webkitTransitionEnd',
	      transition: 'transitionend'
	    };

	    for (var name in transEndEventNames) {
	      if (element.style[name] !== undefined) {
	        return transEndEventNames[name];
	      }
	    }
	  }();

	  return transitionEnd && { end: transitionEnd };
	}();

	// http://blog.alexmaccaw.com/css-transitions
	_zepto2.default.fn.emulateTransitionEnd = function (duration) {
	  var called = false;
	  var $el = this;

	  (0, _zepto2.default)(this).one(UI.support.transition.end, function () {
	    called = true;
	  });

	  var callback = function callback() {
	    if (!called) {
	      (0, _zepto2.default)($el).trigger(UI.support.transition.end);
	    }
	    $el.transitionEndTimmer = undefined;
	  };
	  this.transitionEndTimmer = setTimeout(callback, duration);
	  return this;
	};

	// UI 版本
	UI.version = '0.10.15';

	// exports
	module.exports = window.UI = UI;

	// TODO: 重写 query2obj


	//

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	;(function () {
	  'use strict';

	  /*jslint browser:true, node:true*/
	  /*global define, Event, Node*/

	  /**
	   * Instantiate fast-clicking listeners on the specified layer.
	   *
	   * @constructor
	   * @param {Element} layer The layer to listen on
	   * @param {Object} [options={}] The options to override the defaults
	   */

	  function FastClick(layer, options) {
	    var oldOnClick;

	    options = options || {};

	    /**
	     * Whether a click is currently being tracked.
	     *
	     * @type boolean
	     */
	    this.trackingClick = false;

	    /**
	     * Timestamp for when click tracking started.
	     *
	     * @type number
	     */
	    this.trackingClickStart = 0;

	    /**
	     * The element being tracked for a click.
	     *
	     * @type EventTarget
	     */
	    this.targetElement = null;

	    /**
	     * X-coordinate of touch start event.
	     *
	     * @type number
	     */
	    this.touchStartX = 0;

	    /**
	     * Y-coordinate of touch start event.
	     *
	     * @type number
	     */
	    this.touchStartY = 0;

	    /**
	     * ID of the last touch, retrieved from Touch.identifier.
	     *
	     * @type number
	     */
	    this.lastTouchIdentifier = 0;

	    /**
	     * Touchmove boundary, beyond which a click will be cancelled.
	     *
	     * @type number
	     */
	    this.touchBoundary = options.touchBoundary || 10;

	    /**
	     * The FastClick layer.
	     *
	     * @type Element
	     */
	    this.layer = layer;

	    /**
	     * The minimum time between tap(touchstart and touchend) events
	     *
	     * @type number
	     */
	    this.tapDelay = options.tapDelay || 200;

	    /**
	     * The maximum time for a tap
	     *
	     * @type number
	     */
	    this.tapTimeout = options.tapTimeout || 700;

	    if (FastClick.notNeeded(layer)) {
	      return;
	    }

	    // Some old versions of Android don't have Function.prototype.bind
	    function bind(method, context) {
	      return function () {
	        return method.apply(context, arguments);
	      };
	    }

	    var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
	    var context = this;
	    for (var i = 0, l = methods.length; i < l; i++) {
	      context[methods[i]] = bind(context[methods[i]], context);
	    }

	    // Set up event handlers as required
	    if (deviceIsAndroid) {
	      layer.addEventListener('mouseover', this.onMouse, true);
	      layer.addEventListener('mousedown', this.onMouse, true);
	      layer.addEventListener('mouseup', this.onMouse, true);
	    }

	    layer.addEventListener('click', this.onClick, true);
	    layer.addEventListener('touchstart', this.onTouchStart, false);
	    layer.addEventListener('touchmove', this.onTouchMove, false);
	    layer.addEventListener('touchend', this.onTouchEnd, false);
	    layer.addEventListener('touchcancel', this.onTouchCancel, false);

	    // Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
	    // which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
	    // layer when they are cancelled.
	    if (!Event.prototype.stopImmediatePropagation) {
	      layer.removeEventListener = function (type, callback, capture) {
	        var rmv = Node.prototype.removeEventListener;
	        if (type === 'click') {
	          rmv.call(layer, type, callback.hijacked || callback, capture);
	        } else {
	          rmv.call(layer, type, callback, capture);
	        }
	      };

	      layer.addEventListener = function (type, callback, capture) {
	        var adv = Node.prototype.addEventListener;
	        if (type === 'click') {
	          adv.call(layer, type, callback.hijacked || (callback.hijacked = function (event) {
	            if (!event.propagationStopped) {
	              callback(event);
	            }
	          }), capture);
	        } else {
	          adv.call(layer, type, callback, capture);
	        }
	      };
	    }

	    // If a handler is already declared in the element's onclick attribute, it will be fired before
	    // FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
	    // adding it as listener.
	    if (typeof layer.onclick === 'function') {

	      // Android browser on at least 3.2 requires a new reference to the function in layer.onclick
	      // - the old one won't work if passed to addEventListener directly.
	      oldOnClick = layer.onclick;
	      layer.addEventListener('click', function (event) {
	        oldOnClick(event);
	      }, false);
	      layer.onclick = null;
	    }
	  }

	  /**
	   * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	   *
	   * @type boolean
	   */
	  var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	  /**
	   * Android requires exceptions.
	   *
	   * @type boolean
	   */
	  var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;

	  /**
	   * iOS requires exceptions.
	   *
	   * @type boolean
	   */
	  var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;

	  /**
	   * iOS 4 requires an exception for select elements.
	   *
	   * @type boolean
	   */
	  var deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);

	  /**
	   * iOS 6.0-7.* requires the target element to be manually derived
	   *
	   * @type boolean
	   */
	  var deviceIsIOSWithBadTarget = deviceIsIOS && /OS [6-7]_\d/.test(navigator.userAgent);

	  /**
	   * BlackBerry requires exceptions.
	   *
	   * @type boolean
	   */
	  var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	  /**
	   * Determine whether a given element requires a native click.
	   *
	   * @param {EventTarget|Element} target Target DOM element
	   * @returns {boolean} Returns true if the element needs a native click
	   */
	  FastClick.prototype.needsClick = function (target) {
	    switch (target.nodeName.toLowerCase()) {

	      // Don't send a synthetic click to disabled inputs (issue #62)
	      case 'button':
	      case 'select':
	      case 'textarea':
	        if (target.disabled) {
	          return true;
	        }

	        break;
	      case 'input':

	        // File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
	        if (deviceIsIOS && target.type === 'file' || target.disabled) {
	          return true;
	        }

	        break;
	      case 'label':
	      case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
	      case 'video':
	        return true;
	    }

	    return (/\bneedsclick\b/.test(target.className)
	    );
	  };

	  /**
	   * Determine whether a given element requires a call to focus to simulate click into element.
	   *
	   * @param {EventTarget|Element} target Target DOM element
	   * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	   */
	  FastClick.prototype.needsFocus = function (target) {
	    switch (target.nodeName.toLowerCase()) {
	      case 'textarea':
	        return true;
	      case 'select':
	        return !deviceIsAndroid;
	      case 'input':
	        switch (target.type) {
	          case 'button':
	          case 'checkbox':
	          case 'file':
	          case 'image':
	          case 'radio':
	          case 'submit':
	            return false;
	        }

	        // No point in attempting to focus disabled inputs
	        return !target.disabled && !target.readOnly;
	      default:
	        return (/\bneedsfocus\b/.test(target.className)
	        );
	    }
	  };

	  /**
	   * Send a click event to the specified element.
	   *
	   * @param {EventTarget|Element} targetElement
	   * @param {Event} event
	   */
	  FastClick.prototype.sendClick = function (targetElement, event) {
	    var clickEvent, touch;

	    // On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
	    if (document.activeElement && document.activeElement !== targetElement) {
	      document.activeElement.blur();
	    }

	    touch = event.changedTouches[0];

	    // Synthesise a click event, with an extra attribute so it can be tracked
	    clickEvent = document.createEvent('MouseEvents');
	    clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
	    clickEvent.forwardedTouchEvent = true;
	    targetElement.dispatchEvent(clickEvent);
	  };

	  FastClick.prototype.determineEventType = function (targetElement) {

	    //Issue #159: Android Chrome Select Box does not open with a synthetic click event
	    if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
	      return 'mousedown';
	    }

	    return 'click';
	  };

	  /**
	   * @param {EventTarget|Element} targetElement
	   */
	  FastClick.prototype.focus = function (targetElement) {
	    var length;

	    // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
	    if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
	      length = targetElement.value.length;
	      targetElement.setSelectionRange(length, length);
	    } else {
	      targetElement.focus();
	    }
	  };

	  /**
	   * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	   *
	   * @param {EventTarget|Element} targetElement
	   */
	  FastClick.prototype.updateScrollParent = function (targetElement) {
	    var scrollParent, parentElement;

	    scrollParent = targetElement.fastClickScrollParent;

	    // Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
	    // target element was moved to another parent.
	    if (!scrollParent || !scrollParent.contains(targetElement)) {
	      parentElement = targetElement;
	      do {
	        if (parentElement.scrollHeight > parentElement.offsetHeight) {
	          scrollParent = parentElement;
	          targetElement.fastClickScrollParent = parentElement;
	          break;
	        }

	        parentElement = parentElement.parentElement;
	      } while (parentElement);
	    }

	    // Always update the scroll top tracker if possible.
	    if (scrollParent) {
	      scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
	    }
	  };

	  /**
	   * @param {EventTarget} targetElement
	   * @returns {Element|EventTarget}
	   */
	  FastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {

	    // On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
	    if (eventTarget.nodeType === Node.TEXT_NODE) {
	      return eventTarget.parentNode;
	    }

	    return eventTarget;
	  };

	  /**
	   * On touch start, record the position and scroll offset.
	   *
	   * @param {Event} event
	   * @returns {boolean}
	   */
	  FastClick.prototype.onTouchStart = function (event) {
	    var targetElement, touch, selection;

	    // Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
	    if (event.targetTouches.length > 1) {
	      return true;
	    }

	    targetElement = this.getTargetElementFromEventTarget(event.target);
	    touch = event.targetTouches[0];

	    if (deviceIsIOS) {

	      // Only trusted events will deselect text on iOS (issue #49)
	      selection = window.getSelection();
	      if (selection.rangeCount && !selection.isCollapsed) {
	        return true;
	      }

	      if (!deviceIsIOS4) {

	        // Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
	        // when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
	        // with the same identifier as the touch event that previously triggered the click that triggered the alert.
	        // Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
	        // immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
	        // Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
	        // which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
	        // random integers, it's safe to to continue if the identifier is 0 here.
	        if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
	          event.preventDefault();
	          return false;
	        }

	        this.lastTouchIdentifier = touch.identifier;

	        // If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
	        // 1) the user does a fling scroll on the scrollable layer
	        // 2) the user stops the fling scroll with another tap
	        // then the event.target of the last 'touchend' event will be the element that was under the user's finger
	        // when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
	        // is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
	        this.updateScrollParent(targetElement);
	      }
	    }

	    this.trackingClick = true;
	    this.trackingClickStart = event.timeStamp;
	    this.targetElement = targetElement;

	    this.touchStartX = touch.pageX;
	    this.touchStartY = touch.pageY;

	    // Prevent phantom clicks on fast double-tap (issue #36)
	    if (event.timeStamp - this.lastClickTime < this.tapDelay) {
	      event.preventDefault();
	    }

	    return true;
	  };

	  /**
	   * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	   *
	   * @param {Event} event
	   * @returns {boolean}
	   */
	  FastClick.prototype.touchHasMoved = function (event) {
	    var touch = event.changedTouches[0],
	        boundary = this.touchBoundary;

	    if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
	      return true;
	    }

	    return false;
	  };

	  /**
	   * Update the last position.
	   *
	   * @param {Event} event
	   * @returns {boolean}
	   */
	  FastClick.prototype.onTouchMove = function (event) {
	    if (!this.trackingClick) {
	      return true;
	    }

	    // If the touch has moved, cancel the click tracking
	    if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
	      this.trackingClick = false;
	      this.targetElement = null;
	    }

	    return true;
	  };

	  /**
	   * Attempt to find the labelled control for the given label element.
	   *
	   * @param {EventTarget|HTMLLabelElement} labelElement
	   * @returns {Element|null}
	   */
	  FastClick.prototype.findControl = function (labelElement) {

	    // Fast path for newer browsers supporting the HTML5 control attribute
	    if (labelElement.control !== undefined) {
	      return labelElement.control;
	    }

	    // All browsers under test that support touch events also support the HTML5 htmlFor attribute
	    if (labelElement.htmlFor) {
	      return document.getElementById(labelElement.htmlFor);
	    }

	    // If no for attribute exists, attempt to retrieve the first labellable descendant element
	    // the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
	    return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	  };

	  /**
	   * On touch end, determine whether to send a click event at once.
	   *
	   * @param {Event} event
	   * @returns {boolean}
	   */
	  FastClick.prototype.onTouchEnd = function (event) {
	    var forElement,
	        trackingClickStart,
	        targetTagName,
	        scrollParent,
	        touch,
	        targetElement = this.targetElement;

	    if (!this.trackingClick) {
	      return true;
	    }

	    // Prevent phantom clicks on fast double-tap (issue #36)
	    if (event.timeStamp - this.lastClickTime < this.tapDelay) {
	      this.cancelNextClick = true;
	      return true;
	    }

	    if (event.timeStamp - this.trackingClickStart > this.tapTimeout) {
	      return true;
	    }

	    // Reset to prevent wrong click cancel on input (issue #156).
	    this.cancelNextClick = false;

	    this.lastClickTime = event.timeStamp;

	    trackingClickStart = this.trackingClickStart;
	    this.trackingClick = false;
	    this.trackingClickStart = 0;

	    // On some iOS devices, the targetElement supplied with the event is invalid if the layer
	    // is performing a transition or scroll, and has to be re-detected manually. Note that
	    // for this to function correctly, it must be called *after* the event target is checked!
	    // See issue #57; also filed as rdar://13048589 .
	    if (deviceIsIOSWithBadTarget) {
	      touch = event.changedTouches[0];

	      // In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
	      targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
	      targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
	    }

	    targetTagName = targetElement.tagName.toLowerCase();
	    if (targetTagName === 'label') {
	      forElement = this.findControl(targetElement);
	      if (forElement) {
	        this.focus(targetElement);
	        if (deviceIsAndroid) {
	          return false;
	        }

	        targetElement = forElement;
	      }
	    } else if (this.needsFocus(targetElement)) {

	      // Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
	      // Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
	      if (event.timeStamp - trackingClickStart > 100 || deviceIsIOS && window.top !== window && targetTagName === 'input') {
	        this.targetElement = null;
	        return false;
	      }

	      this.focus(targetElement);
	      this.sendClick(targetElement, event);

	      // Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
	      // Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
	      if (!deviceIsIOS || targetTagName !== 'select') {
	        this.targetElement = null;
	        event.preventDefault();
	      }

	      return false;
	    }

	    if (deviceIsIOS && !deviceIsIOS4) {

	      // Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
	      // and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
	      scrollParent = targetElement.fastClickScrollParent;
	      if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
	        return true;
	      }
	    }

	    // Prevent the actual click from going though - unless the target node is marked as requiring
	    // real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
	    if (!this.needsClick(targetElement)) {
	      event.preventDefault();
	      this.sendClick(targetElement, event);
	    }

	    return false;
	  };

	  /**
	   * On touch cancel, stop tracking the click.
	   *
	   * @returns {void}
	   */
	  FastClick.prototype.onTouchCancel = function () {
	    this.trackingClick = false;
	    this.targetElement = null;
	  };

	  /**
	   * Determine mouse events which should be permitted.
	   *
	   * @param {Event} event
	   * @returns {boolean}
	   */
	  FastClick.prototype.onMouse = function (event) {

	    // If a target element was never set (because a touch event was never fired) allow the event
	    if (!this.targetElement) {
	      return true;
	    }

	    if (event.forwardedTouchEvent) {
	      return true;
	    }

	    // Programmatically generated events targeting a specific element should be permitted
	    if (!event.cancelable) {
	      return true;
	    }

	    // Derive and check the target element to see whether the mouse event needs to be permitted;
	    // unless explicitly enabled, prevent non-touch click events from triggering actions,
	    // to prevent ghost/doubleclicks.
	    if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

	      // Prevent any user-added listeners declared on FastClick element from being fired.
	      if (event.stopImmediatePropagation) {
	        event.stopImmediatePropagation();
	      } else {

	        // Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
	        event.propagationStopped = true;
	      }

	      // Cancel the event
	      event.stopPropagation();
	      event.preventDefault();

	      return false;
	    }

	    // If the mouse event is permitted, return true for the action to go through.
	    return true;
	  };

	  /**
	   * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	   * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	   * an actual click which should be permitted.
	   *
	   * @param {Event} event
	   * @returns {boolean}
	   */
	  FastClick.prototype.onClick = function (event) {
	    var permitted;

	    // It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
	    if (this.trackingClick) {
	      this.targetElement = null;
	      this.trackingClick = false;
	      return true;
	    }

	    // Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
	    if (event.target.type === 'submit' && event.detail === 0) {
	      return true;
	    }

	    permitted = this.onMouse(event);

	    // Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
	    if (!permitted) {
	      this.targetElement = null;
	    }

	    // If clicks are permitted, return true for the action to go through.
	    return permitted;
	  };

	  /**
	   * Remove all FastClick's event listeners.
	   *
	   * @returns {void}
	   */
	  FastClick.prototype.destroy = function () {
	    var layer = this.layer;

	    if (deviceIsAndroid) {
	      layer.removeEventListener('mouseover', this.onMouse, true);
	      layer.removeEventListener('mousedown', this.onMouse, true);
	      layer.removeEventListener('mouseup', this.onMouse, true);
	    }

	    layer.removeEventListener('click', this.onClick, true);
	    layer.removeEventListener('touchstart', this.onTouchStart, false);
	    layer.removeEventListener('touchmove', this.onTouchMove, false);
	    layer.removeEventListener('touchend', this.onTouchEnd, false);
	    layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	  };

	  /**
	   * Check whether FastClick is needed.
	   *
	   * @param {Element} layer The layer to listen on
	   */
	  FastClick.notNeeded = function (layer) {
	    var metaViewport;
	    var chromeVersion;
	    var blackberryVersion;
	    var firefoxVersion;

	    // Devices that don't support touch don't need FastClick
	    if (typeof window.ontouchstart === 'undefined') {
	      return true;
	    }

	    // Chrome version - zero for other browsers
	    chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

	    if (chromeVersion) {

	      if (deviceIsAndroid) {
	        metaViewport = document.querySelector('meta[name=viewport]');

	        if (metaViewport) {
	          // Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
	          if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
	            return true;
	          }
	          // Chrome 32 and above with width=device-width or less don't need FastClick
	          if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
	            return true;
	          }
	        }

	        // Chrome desktop doesn't need FastClick (issue #15)
	      } else {
	        return true;
	      }
	    }

	    if (deviceIsBlackBerry10) {
	      blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

	      // BlackBerry 10.3+ does not require Fastclick library.
	      // https://github.com/ftlabs/fastclick/issues/251
	      if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
	        metaViewport = document.querySelector('meta[name=viewport]');

	        if (metaViewport) {
	          // user-scalable=no eliminates click delay.
	          if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
	            return true;
	          }
	          // width=device-width (or less than device-width) eliminates click delay.
	          if (document.documentElement.scrollWidth <= window.outerWidth) {
	            return true;
	          }
	        }
	      }
	    }

	    // IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
	    if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
	      return true;
	    }

	    // Firefox version - zero for other browsers
	    firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

	    if (firefoxVersion >= 27) {
	      // Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

	      metaViewport = document.querySelector('meta[name=viewport]');
	      if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
	        return true;
	      }
	    }

	    // IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
	    // http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
	    if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
	      return true;
	    }

	    return false;
	  };

	  /**
	   * Factory method for creating a FastClick object
	   *
	   * @param {Element} layer The layer to listen on
	   * @param {Object} [options={}] The options to override the defaults
	   */
	  FastClick.attach = function (layer, options) {
	    return new FastClick(layer, options);
	  };

	  if ("function" === 'function' && _typeof(__webpack_require__(15)) === 'object' && __webpack_require__(15)) {

	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return FastClick;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module !== 'undefined' && module.exports) {
	    module.exports = FastClick.attach;
	    module.exports.FastClick = FastClick;
	  } else {
	    window.FastClick = FastClick;
	  }
	})();

/***/ },
/* 15 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _queryString = __webpack_require__(17);

	var _queryString2 = _interopRequireDefault(_queryString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import $ from 'zepto';
	// import UI from './core';

	var utils = {};

	/**
	 * 端外CID是用 UUID 生成，统计组需要
	 * 生产UUID，标示本台机器
	 * @returns {*}
	 */
	// 端外工具函数
	// ===================================================

	utils.uuid = function () {
	  var _rnds = new Array(16);
	  var _rng = function _rng() {
	    for (var i = 0, r; i < 16; i++) {
	      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
	      _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	    }
	    return _rnds;
	  };
	  // Maps for number <-> hex string conversion
	  var _byteToHex = [];
	  for (var i = 0; i < 256; i++) {
	    _byteToHex[i] = (i + 0x100).toString(16).substr(1);
	  }
	  // **`unparse()` - Convert UUID byte array (ala parse()) into a string**
	  function unparse(buf, offset) {
	    var i = offset || 0,
	        bth = _byteToHex;
	    return bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]];
	  }

	  var rnds = _rng();
	  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
	  rnds[6] = rnds[6] & 0x0f | 0x40;
	  rnds[8] = rnds[8] & 0x3f | 0x80;
	  return unparse(rnds);
	};

	/**
	 * cookie
	 * @type {{get: Function, set: Function, unset: Function}}
	 */

	/**
	 * 获取 cookie
	 * @param name
	 * @returns {*}
	 */
	utils.getCookie = function (name) {
	  var cookieName = encodeURIComponent(name) + '=';
	  var cookieStart = document.cookie.indexOf(cookieName);
	  var cookieValue = null;
	  var cookieEnd;

	  if (cookieStart > -1) {
	    cookieEnd = document.cookie.indexOf(';', cookieStart);
	    if (cookieEnd == -1) {
	      cookieEnd = document.cookie.length;
	    }
	    cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
	  }

	  return cookieValue;
	};

	/**
	 * 设置 cookie
	 * @param name
	 * @param value
	 * @param expires
	 * @param path
	 * @param domain
	 * @param secure
	 */
	utils.setCookie = function (name, value, expires, path, domain, secure) {
	  var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);

	  if (expires instanceof Date) {
	    cookieText += '; expires=' + expires.toUTCString();
	  }

	  if (path) {
	    cookieText += '; path=' + path;
	  }

	  if (domain) {
	    cookieText += '; domain=' + domain;
	  }

	  if (secure) {
	    cookieText += '; secure';
	  }

	  document.cookie = cookieText;
	};

	/**
	 * 删除cookie
	 * @param name
	 * @param path
	 * @param domain
	 * @param secure
	 */
	utils.unsetCookie = function (name, path, domain, secure) {
	  utils.getCookie(name, '', new Date(0), path, domain, secure);
	};

	// 图片预加载
	utils.imgLoad = function (url, callback) {
	  var img = new Image();
	  //img.crossOrigin = 'anonymous';
	  img.src = url;

	  if (img.complete) {
	    callback(img);
	  } else {
	    img.onload = function () {
	      callback(img);
	      img.onload = null;
	    };
	  }
	};

	/**
	 * 进入可视区
	 * @param element
	 * @param options 距离位置
	 * @returns {boolean}
	 */
	utils.isInView = function (element, options) {
	  var $element = $(element);
	  var visible = !!($element.width() || $element.height()) && $element.css('display') !== 'none';

	  if (!visible) {
	    return false;
	  }

	  var windowLeft = $win.scrollLeft();
	  var windowTop = $win.scrollTop();
	  var offset = $element.offset();
	  var left = offset.left;
	  var top = offset.top;

	  options = $.extend({ topOffset: 0, leftOffset: 0 }, options);

	  return top + $element.height() >= windowTop && top - options.topOffset <= windowTop + $win.height() && left + $element.width() >= windowLeft && left - options.leftOffset <= windowLeft + $win.width();
	};

	// 解析 data 参数
	utils.parseOptions = function (string) {
	  if ($.isPlainObject(string)) {
	    return string;
	  }

	  var start = string ? string.indexOf('{') : -1;
	  var options = {};

	  if (start != -1) {
	    try {
	      options = new Function('', 'var json = ' + string.substr(start) + '; return JSON.parse(JSON.stringify(json));')();
	    } catch (e) {}
	  }

	  return options;
	};

	// handle multiple browsers for requestAnimationFrame()
	// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
	// https://github.com/gnarf/jquery-requestAnimationFrame
	utils.rAF = function () {
	  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
	  // if all else fails, use setTimeout
	  function (callback) {
	    return window.setTimeout(callback, 1000 / 60); // shoot for 60 fps
	  };
	}();

	// handle multiple browsers for cancelAnimationFrame()
	utils.cancelAF = function () {
	  return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
	    window.clearTimeout(id);
	  };
	}();

	// 解析参数
	// https://github.com/sindresorhus/query-string
	// parse(string) ? # location.search location.hash
	// stringify (object, [options])
	// extract (string)
	utils.queryStringParse = _queryString2.default.parse;
	utils.queryStringify = _queryString2.default.stringify;

	/**
	 * url params isappinstalled
	 * 0 未安装 return false
	 * 1 安装 return true
	 */
	utils.getIsAppInstalled = function () {
	  var params = this.queryStringParse(location.search);
	  return !!(params['isappinstalled'] == 1 || 0);
	};

	/**
	 * 检查是否是空对象
	 */
	utils.isEmpty = function (object) {
	  for (var name in object) {
	    if (object.hasOwnProperty(name)) {
	      return false;
	    }
	  }
	  return true;
	};

	utils.templateCompile = function (tpl, data) {
	  return template.compile(tpl)(data);
	};

	exports.default = utils;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(18);
	var objectAssign = __webpack_require__(19);

	function encode(value, opts) {
		if (opts.encode) {
			return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
		}

		return value;
	}

	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};

	exports.parse = function (str) {
		// Create an object with no prototype
		// https://github.com/sindresorhus/query-string/issues/47
		var ret = Object.create(null);

		if (typeof str !== 'string') {
			return ret;
		}

		str = str.trim().replace(/^(\?|#|&)/, '');

		if (!str) {
			return ret;
		}

		str.split('&').forEach(function (param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;

			key = decodeURIComponent(key);

			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			if (ret[key] === undefined) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}
		});

		return ret;
	};

	exports.stringify = function (obj, opts) {
		var defaults = {
			encode: true,
			strict: true
		};

		opts = objectAssign(defaults, opts);

		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];

			if (val === undefined) {
				return '';
			}

			if (val === null) {
				return encode(key, opts);
			}

			if (Array.isArray(val)) {
				var result = [];

				val.slice().forEach(function (val2) {
					if (val2 === undefined) {
						return;
					}

					if (val2 === null) {
						result.push(encode(key, opts));
					} else {
						result.push(encode(key, opts) + '=' + encode(val2, opts));
					}
				});

				return result.join('&');
			}

			return encode(key, opts) + '=' + encode(val, opts);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _zepto = __webpack_require__(1);

	var _zepto2 = _interopRequireDefault(_zepto);

	var _jsKit = __webpack_require__(21);

	var _jsKit2 = _interopRequireDefault(_jsKit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 检测端内和端外环境
	// init.js
	// ======================================

	(0, _zepto2.default)(function () {
	  var $html = (0, _zepto2.default)('html');

	  // native
	  $html.addClass('native');
	  window.ENV = 'native'; // 兼容专题的 环境

	  if (_zepto2.default.os.android) {
	    $html.addClass('android');
	  }

	  if (_zepto2.default.os.ios) {
	    $html.addClass('ios');
	  }

	  if (isWeChatBrowser()) {
	    $html.addClass('wechat');
	  }

	  if (_jsKit2.default.hasNativeSupport === false) {
	    __webpack_require__(22);
	    $html.removeClass('native');
	    $html.addClass('browser');
	    window.ENV = 'browser'; // TODO: 去掉 兼容专题的 环境
	  }

	  _jsKit2.default.onDeviceReady(function () {
	    // 夜间模式
	    if (jsKitStorage.getItem('settings_nightMode')) {
	      window.nightMode = true; // TODO: 专题使用,准备干掉
	      $html.addClass('ui-night');
	    }

	    // 无图模式
	    if (jsKitStorage.getItem('settings_imageMode')) {
	      // ios 蜂窝下 才使用无图模式
	      if (_zepto2.default.os.ios && commonApi.getNetworkInfo().type == 'wifi') {
	        return;
	      }
	      window.noPicMode = true; // TODO: 专题使用,准备干掉
	      $html.addClass('ui-nopic');
	    }

	    // 字体设置
	    // 0 默认字体
	    // 1 中号字体
	    // 2 大号字体
	    var fontSize = jsKitStorage.getItem('settings_fontSize');
	    if (fontSize === 1) {
	      $html.addClass('ui-font-md');
	    } else if (fontSize === 2) {
	      $html.addClass('ui-font-lg');
	    }
	  });

	  function isWeChatBrowser() {
	    return (/MicroMessenger/i.test(window.navigator.userAgent)
	    );
	  }
	});

/***/ },
/* 21 */
/***/ function(module, exports) {

	// jsKit.js
	// ================================

	var jsKitClient = function () {
	  var client = {};
	  client.isReady = false;
	  var a = / JsKit\/([\.\d]*) \((\w*)\)/;
	  var result = a.exec(navigator.userAgent);
	  if (result) {
	    client.hasNativeSupport = true;
	    client.version = result[1];
	    client.platform = result[2];
	  } else {
	    client.hasNativeSupport = false;
	    client.version = '0';
	    client.platform = 'browser';
	  }
	  //iOS 无法注入_jsKitN对象，使用xhr请求代替
	  var _jsKitN;
	  if (client.platform == 'iOS') {
	    var clientIdRegex = /jsKitClientId=(\d*)/;
	    var clientId = clientIdRegex.exec(window.location)[1];
	    _jsKitN = {};
	    _jsKitN.callCount = new Date().getTime();
	    _jsKitN.callNative = function (objName, methodName, args) {
	      var xmlHttp = new XMLHttpRequest();
	      _jsKitN.callCount++;
	      xmlHttp.open('POST', '/' + clientId + '/' + objName + '/' + methodName + '/call.jskitbridge?callCount=' + _jsKitN.callCount, false);
	      xmlHttp.send(args);
	      return xmlHttp.response;
	    };
	    _jsKitN.getInitScript = function () {
	      return JSON.parse(this.callNative('_jsKitN', 'getInitScript', '[]'))[0];
	    }
	    window._jsKitN = _jsKitN;
	  }
	  _jsKitN = window._jsKitN;
	  if (typeof _jsKitN == "undefined") {
	    _jsKitN = {};
	    _jsKitN.getInitScript = function () {
	      return ""
	    };
	    window._jsKitN = _jsKitN;
	  }
	  var jsKit = {};
	  window.jsKit = jsKit;
	  jsKit.create = function (parent) {
	    var f = function () {
	    };
	    f.prototype = parent;
	    return new f();
	  };
	  jsKit.createCallNativeFun = function (method, resultObject) {
	    return function (resultCallBack) {
	      var args = [];
	      var hasCallback = typeof resultCallBack == 'function';
	      for (var i = (hasCallback ? 1 : 0), c = arguments.length; i < c; i++) {
	        args.push(arguments[i]);
	      }
	      var result = _jsKitN.callNative(this._jsKitName, method, JSON.stringify(args));
	      result = resultObject ? eval(result) : JSON.parse(result)[0];
	      if (hasCallback) {
	        resultCallBack(result);
	      } else {
	        return result;
	      }
	    };
	  };
	  client._callbacks = {};
	  client._callbacksCount = 0;
	  client._createFunctionId = function (callback) {
	    var callId = "_jsKitFunCallback_" + (++this._callbacksCount);
	    this._callbacks[callId] = callback;
	    return callId;
	  };
	  jsKit.createCallNativeFunWithCallback = function (method, resultObject) {
	    return function () {
	      var args = [];
	      for (var i = 0, c = arguments.length; i < c; i++) {
	        var arg = arguments[i];
	        if ((typeof arg) == 'function') {
	          args.push(client._createFunctionId(arg));
	        } else {
	          args.push(arg);
	        }
	      }
	      var result = _jsKitN.callNative(this._jsKitName, method, JSON.stringify(args));
	      result = resultObject ? eval(result) : JSON.parse(result)[0];
	      return result;
	    };
	  };
	  jsKit.createInstance = function (name, type) {
	    var i = jsKit.create(type);
	    i._jsKitName = name;
	    return i;
	  };
	  jsKit.newInstance = function (name, type) {
	    window[name] = jsKit.createInstance(name, type);
	  };
	  jsKit.addMethod = function (obj, method, resultObject) {
	    obj[method] = jsKit.createCallNativeFun(method, resultObject);
	  };
	  jsKit.addMethodWithCallback = function (obj, method, resultObject) {
	    obj[method] = jsKit.createCallNativeFunWithCallback(method, resultObject);
	  };
	  jsKit.init = function () {
	    eval(_jsKitN.getInitScript(window.location.pathname));
	  };

	  client.pageCached = document.getElementsByName("jskit_page_cached").length != 0;
	  client.cachePage = function () {
	    if (!this.pageCached) {
	      var jskit_page_cached = document.createElement("meta");
	      jskit_page_cached.name = "jskit_page_cached";
	      jskit_page_cached.content = "true";
	      document.getElementsByTagName("head")[0].appendChild(jskit_page_cached);
	      this.pageCached = true;
	    }
	    jsKitStorage.setItem("jskit_page_cache_" + location.href, document.getElementsByTagName("html")[0].innerHTML);
	  }

	  client.enableAjaxCrossDomain = function () {
	    if (this.hasNativeSupport) {
	      XMLHttpRequest.prototype.old_open = XMLHttpRequest.prototype.open;
	      XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
	        this.old_open(method, "/jskitbridge/cross_domain?url=" + encodeURIComponent(url), async, user, password);
	      }
	    }
	  }

	  client.setDeviceReady = function () {
	    this.isReady = true;
	    if (this.readyListener) {
	      this.readyListener(this.pageCached);
	    }
	  };
	  client.init = function () {
	    if (!this.isReady) {
	      jsKit.init();
	      var evt = document.createEvent('HTMLEvents');
	      evt.initEvent('jsKitReady', false, false);
	      window.dispatchEvent(evt);
	      this.setDeviceReady();
	    }
	    this.setDeviceReady();
	  };
	  client.onDeviceReady = function (readyListener) {
	    this.readyListener = readyListener;
	    this.init();
	  };
	  client._notificationListeneres = {};
	  client.addNotificationListener = function (action, listener) {
	    this._notificationListeneres[action] = listener;
	  };
	  client._dispatchNotificationFromNative = function (action, data) {
	    if (this._notificationListeneres.hasOwnProperty(action)) {
	      this._notificationListeneres[action](action, data);
	    }
	  };
	  client.dispatchNotification = function (action, data) {
	    _jsKitNotification.dispatchNotification(action, data);
	  };

	  client.setAttr = function (tagName, attrName, value) {
	    var allTag = document.getElementsByTagName(tagName);
	    for (var i = 0,
	           c = allTag.length; i < c; i++) {
	      allTag[i][attrName] = value;
	    }
	  };
	  client.setImageShowMode = function (show) {
	    var allTag = document.getElementsByTagName('img');
	    var regImageMode = /jsKitImageMode=([^\?&])/;
	    for (var i = 0, c = allTag.length; i < c; i++) {
	      var imgTag = allTag[i];
	      if (!imgTag.hasOwnProperty('data')) {
	        imgTag.data = {};
	      }
	      if (!imgTag.data.hasOwnProperty('originSrc')) {
	        imgTag.data.originSrc = imgTag.src;
	      }
	      if (show) { //show image
	        var imgSrc = imgTag.data.originSrc;
	        if (regImageMode.exec(imgSrc)) {
	          imgSrc = imgSrc.replace(regImageMode, 'jsKitImageMode=' + show);
	        } else {
	          imgSrc += (((imgSrc.indexOf('?') == -1) ? '?' : '&') + 'jsKitImageMode=' + show);
	        }
	        imgTag.src = imgSrc;
	      } else { //no image
	        imgTag.src = '';
	      }
	    }
	  };
	  client.addNotificationListener('com.sohu.jskit.action.setImageMode', function (action, data) {
	    client.setImageShowMode(data);
	  });
	  client.init();
	  return client;
	}();

	window.jsBridgeClient = window.jsKitClient = jsKitClient;

	module.exports = jsKitClient;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// browser.js
	// 端外环境 替换 jsKit Api
	// ===============================

	var $ = __webpack_require__(1);
	var jsKitClient = {};
	jsKitClient.onDeviceReady = $;

	var commonApi = {};

	commonApi.getNetworkInfo = function (callback) {
	  var data = {
	    type: ''
	  };

	  callback && callback(data);

	  return data;
	};

	commonApi.getRequestParam = function () {
	  return {
	    platform: ''
	  };
	};

	commonApi.getAppInfo = function () {
	  return {
	    platform: ''
	  };
	};

	var widgetApi = {};
	widgetApi.toast = function (val, type) {};

	var jsKitStorage = {};
	jsKitStorage.getItem = function (key) {
	  return localStorage.getItem(key);
	};

	jsKitStorage.setItem = function (key, val) {
	  return localStorage.setItem(key, val);
	};

	var newsApi = {};
	newsApi.showLoadingView = function () {};

	newsApi.showTitle = function () {};

	newsApi.showShareBtn = function () {};

	// 是否是微信，引入微信 sdk
	(function () {
	  function isWeChatBrowser() {
	    //截至2014年2月12日,这个方法不能测试 windows phone 中的微信浏览器
	    return (/MicroMessenger/i.test(window.navigator.userAgent)
	    );
	  }

	  if (isWeChatBrowser()) {
	    $('html').addClass('wechat');
	  }
	})();

	// 是否是 sohu 端内 外链，引入 二代协议
	(function () {
	  function isSohuBrowser() {
	    return (/SohuNews/i.test(window.navigator.userAgent)
	    );
	  }

	  if (isSohuBrowser()) {
	    window.platform = 'iOS';
	  }
	})();

	// export
	window.jsKitClient = jsKitClient;
	window.commonApi = commonApi;
	window.widgetApi = widgetApi;
	window.jsKitStorage = jsKitStorage;
	window.newsApi = newsApi;

	// TODO: 简单满足 special.js 需求，后续添加完成

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _zepto = __webpack_require__(1);

	var _zepto2 = _interopRequireDefault(_zepto);

	var _core = __webpack_require__(13);

	var _core2 = _interopRequireDefault(_core);

	var _dialog = __webpack_require__(24);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var dialog = {};

	// 默认参数
	/**
	 * Name: dialog.js
	 * User: Arthur
	 * Date: 16-11-17
	 */
	var defaults = {
		title: '',
		content: '',
		button: ['确认'],
		select: 0,
		eventBind: 'click',
		type: 0,
		callback: function callback() {}
	};
	// 构造函数
	var Dialog = function Dialog(option) {
		var self = this;
		this.option = _zepto2.default.extend(defaults, option);
		var el = (0, _dialog2.default)(self.option);
		this.element = (0, _zepto2.default)(el).appendTo('body');
		this.button = self.element.find('[data-role="button"]');
		// this.button_no = $(el).find('[data-role="button_no"]');
		// console.log(self.button);
		this._bindEvent();
		this.toggle();
		return self.element;
	};
	Dialog.prototype = {
		//绑定相关操作事件
		_bindEvent: function _bindEvent() {
			var self = this;
			self.button.on(self.option.eventBind, function (e) {
				var $index = (0, _zepto2.default)(e.target);
				var index = (0, _zepto2.default)(self.button).index($index);
				self.option.callback('button', index);
				console.log(index);
				var e = _zepto2.default.Event('dialog:action');
				e.index = index;
				self.element.trigger(e);
				self.hide.apply(self);
			});
		},
		toggle: function toggle() {
			if (this.element.hasClass('show')) {
				this.hide();
			} else {
				this.show();
			}
		},
		show: function show() {
			var self = this;
			self.option.callback('show');
			self.element.trigger(_zepto2.default.Event('dialog:show'));
			self.element.addClass('show');
		},
		hide: function hide() {
			var self = this;
			self.option.callback('hide');
			self.element.trigger(_zepto2.default.Event('dialog:hide'));
			self.element.removeClass('show');
			self.element.remove();
		}
	};

	function Plugin(option) {
		return new Dialog(option);
	}
	_zepto2.default.fn.dialog = _zepto2.default.dialog = Plugin;

	_core2.default.dialog = dialog;
		module.exports = dialog;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(25);
	module.exports=template('js/dialog',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,title=$data.title,content=$data.content,$each=$utils.$each,button=$data.button,value=$data.value,index=$data.index,type=$data.type,i=$data.i,select=$data.select,$out='';$out+=' <div class="ui-dialog"> <div class="ui-dialog-cnt"> <div class="ui-dialog-bd"> <div> <h4>';
	$out+=$string(title);
	$out+='</h4> <div>';
	$out+=$string(content);
	$out+='</div> </div> </div> <div class="ui-dialog-ft ui-btn-group"> ';
	$each(button,function(value,index){
	$out+=' ';
	if(type == 0 && index == 0){
	$out+=' <button type="button" data-role="button" class="select" id="dialogButton';
	$out+=$string(i);
	$out+='">';
	$out+=$string(value);
	$out+='</button> ';
	}else if(type == 1){
	$out+=' ';
	if(index == select){
	$out+=' <button type="button" data-role="button" class="select" id="dialogButton';
	$out+=$string(i);
	$out+='">';
	$out+=$string(value);
	$out+='</button> ';
	}else{
	$out+=' <button type="button" data-role="button" id="dialogButton';
	$out+=$string(i);
	$out+='">';
	$out+=$string(value);
	$out+='</button> ';
	}
	$out+=' ';
	}
	$out+=' ';
	});
	$out+=' </div> </div> </div>';
	return new String($out);
	});

/***/ },
/* 25 */
/***/ function(module, exports) {

	/*TMODJS:{}*/
	!function () {
		function a(a, b) {
			return (/string|function/.test(typeof b) ? h : g)(a, b)
		}

		function b(a, c) {
			return "string" != typeof a && (c = typeof a, "number" === c ? a += "" : a = "function" === c ? b(a.call(a)) : ""), a
		}

		function c(a) {
			return l[a]
		}

		function d(a) {
			return b(a).replace(/&(?![\w#]+;)|[<>"']/g, c)
		}

		function e(a, b) {
			if (m(a))for (var c = 0, d = a.length; d > c; c++)b.call(a, a[c], c, a); else for (c in a)b.call(a, a[c], c)
		}

		function f(a, b) {
			var c = /(\/)[^\/]+\1\.\.\1/, d = ("./" + a).replace(/[^\/]+$/, ""), e = d + b;
			for (e = e.replace(/\/\.\//g, "/"); e.match(c);)e = e.replace(c, "/");
			return e
		}

		function g(b, c) {
			var d = a.get(b) || i({filename: b, name: "Render Error", message: "Template not found"});
			return c ? d(c) : d
		}

		function h(a, b) {
			if ("string" == typeof b) {
				var c = b;
				b = function () {
					return new k(c)
				}
			}
			var d = j[a] = function (c) {
				try {
					return new b(c, a) + ""
				} catch (d) {
					return i(d)()
				}
			};
			return d.prototype = b.prototype = n, d.toString = function () {
				return b + ""
			}, d
		}

		function i(a) {
			var b = "{Template Error}", c = a.stack || "";
			if (c)c = c.split("\n").slice(0, 2).join("\n"); else for (var d in a)c += "<" + d + ">\n" + a[d] + "\n\n";
			return function () {
				return "object" == typeof console && console.error(b + "\n\n" + c), b
			}
		}

		var j = a.cache = {}, k = String, l = {
			"<": "&#60;",
			">": "&#62;",
			'"': "&#34;",
			"'": "&#39;",
			"&": "&#38;"
		}, m = Array.isArray || function (a) {
				return "[object Array]" === {}.toString.call(a)
			}, n = a.utils = {
			$helpers: {}, $include: function (a, b, c) {
				return a = f(c, a), g(a, b)
			}, $string: b, $escape: d, $each: e
		}, o = a.helpers = n.$helpers;
		a.get = function (a) {
			return j[a.replace(/^\.\//, "")]
		}, a.helper = function (a, b) {
			o[a] = b
		}, module.exports = a
	}();


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _zepto = __webpack_require__(1);

	var _zepto2 = _interopRequireDefault(_zepto);

	var _core = __webpack_require__(13);

	var _core2 = _interopRequireDefault(_core);

	var _toast = __webpack_require__(27);

	var _toast2 = _interopRequireDefault(_toast);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 默认参数
	var defaults = {
		content: '操作提示',
		stayTime: 1000,
		type: 'info',
		position: 'top',
		callback: function callback() {}
	};
	// 构造函数
	// var _tpl =  dialogTpl(defaults);
	// console.log(_tpl);
	// var toast = function(el, option, isFromTpl) {
	/**
	 * Name: toast.js
	 * User: Arthur
	 * Date: 16-11-24
	 */
	var toast = function toast(option) {
		var self = this;
		this.option = _zepto2.default.extend(defaults, option);
		console.log('---toastTpl--');
		var el = (0, _toast2.default)(self.option);
		this.element = (0, _zepto2.default)(el).appendTo('body');
		// this._isFromTpl = isFromTpl;
		// console.log($(el))
		this.elementHeight = self.element.height() || 41;
		if (self.option.position == 'middle') {
			console.log('--middle go-');
			// var thisStayTime = 2;//this.option.stayTime/1000;
			self.element.css({
				// '-webkit-transition': 'opacity .5s', //+this.option.stayTime,
				'opacity': '0'
			});
		} else {
			self.element.css({
				'-webkit-transform': 'translateY(-' + this.elementHeight + 'px)'
				// '-webkit-transform': 'translateY(100px)'
			});
			console.log('-3-top hide--' + self.elementHeight);
		}
		setTimeout(function () {
			self.element.css({
				'-webkit-transition': 'all .5s'
			});
			self.show();
		}, 20);
		return self.element;
	};
	toast.prototype = {
		show: function show() {
			var self = this;

			self.element.trigger(_zepto2.default.Event('toast:show'));
			if (self.option.position == 'middle') {
				this.element.css({
					'-webkit-transition': 'opacity 1s',
					'opacity': '1'
				});
			} else {
				this.element.css({
					'-webkit-transform': 'translateY(0px)'
				});
			}
			self.option.callback('show');

			if (self.option.stayTime > 0) {
				setTimeout(function () {
					self.hide();
				}, self.option.stayTime);
			}
		},
		hide: function hide() {
			var self = this;
			self.element.trigger(_zepto2.default.Event('toast:hide'));
			if (self.option.position == 'middle') {
				this.element.css({
					'opacity': '0'
				});
			} else {
				this.element.css({
					'-webkit-transform': 'translateY(-' + this.elementHeight + 'px)'
				});
			}
			setTimeout(function () {
				self.element.remove();
			}, 500);
		}
	};

	function Plugin(option) {
		// return $.adaptObject(this, defaults, option, _toastTpl, toast, 'toast');
		return new toast(option);
	}
	_zepto2.default.fn.toast = _zepto2.default.toast = Plugin;

	_core2.default.toast = toast;
	module.exports = toast;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(25);
	module.exports=template('js/toast',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,position=$data.position,type=$data.type,content=$data.content,$out='';$out+=' <div class=\'ui-poptoast ui-poptoast-';
	$out+=$string(position);
	$out+=' ui-poptoast-';
	$out+=$string(type);
	$out+='\'> <div class=\'ui-poptoast-cnt\'> <i></i> ';
	$out+=$string(content);
	$out+=' </div> </div>';
	return new String($out);
	});

/***/ }
/******/ ])
});
;
//# sourceMappingURL=demo.js.map