/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!*********************************!*\
  !*** ./src/anchorTagBuilder.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = anchorTagBuilder;\nfunction anchorTagBuilder(anchorText) {\n    if (anchorText == undefined || anchorText == null) throw new Error(\"anchor text shouldn't be null or undefined\");\n    this.anchorText = anchorText; //document.createElement('a'); \n    this.href = \"#\";\n    this.target = \"_blank\";\n    this.title = \"click\";\n    this.setHref = function (href) {\n        this.href = href;\n        return this;\n    };\n    this.setTarget = function (target) {\n        this.target = target;\n        return this;\n    };\n    this.setTitle = function (title) {\n        this.title = title;\n        return this;\n    };\n    this.build = function () {\n        var anchorNode = document.createElement('a');\n        var textNode = document.createTextNode(this.anchorText);\n        anchorNode.appendChild(textNode);\n        anchorNode.href = this.href;\n        anchorNode.target = this.target;\n        anchorNode.title = this.title;\n        return anchorNode;\n    };\n    return this;\n}\n\n// var anchor = createAnchor(\"Google\",\"https://www.google.com\",\"_blank\",\"Google\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYW5jaG9yVGFnQnVpbGRlci5qcz81NDlkIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYW5jaG9yVGFnQnVpbGRlcihhbmNob3JUZXh0KXtcbiAgICBpZihhbmNob3JUZXh0PT11bmRlZmluZWQgfHwgYW5jaG9yVGV4dD09bnVsbCl0aHJvdyBuZXcgRXJyb3IoXCJhbmNob3IgdGV4dCBzaG91bGRuJ3QgYmUgbnVsbCBvciB1bmRlZmluZWRcIik7XG4gICAgdGhpcy5hbmNob3JUZXh0ID0gYW5jaG9yVGV4dDsvL2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTsgXG4gICAgdGhpcy5ocmVmID0gXCIjXCI7XG4gICAgdGhpcy50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgIHRoaXMudGl0bGUgPSBcImNsaWNrXCI7XG4gICAgdGhpcy5zZXRIcmVmID0gZnVuY3Rpb24oaHJlZil7XG4gICAgICAgIHRoaXMuaHJlZiA9IGhyZWY7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aGlzLnNldFRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCl7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhpcy5zZXRUaXRsZSA9IGZ1bmN0aW9uKHRpdGxlKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhpcy5idWlsZCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBhbmNob3JOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICB2YXIgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmFuY2hvclRleHQpO1xuICAgICAgICBhbmNob3JOb2RlLmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICAgICAgYW5jaG9yTm9kZS5ocmVmID0gdGhpcy5ocmVmO1xuICAgICAgICBhbmNob3JOb2RlLnRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgICAgICBhbmNob3JOb2RlLnRpdGxlID0gdGhpcy50aXRsZTtcbiAgICAgICAgcmV0dXJuIGFuY2hvck5vZGU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG4vLyB2YXIgYW5jaG9yID0gY3JlYXRlQW5jaG9yKFwiR29vZ2xlXCIsXCJodHRwczovL3d3dy5nb29nbGUuY29tXCIsXCJfYmxhbmtcIixcIkdvb2dsZVwiKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2FuY2hvclRhZ0J1aWxkZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/* no static exports found */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _anchorTagBuilder = __webpack_require__(/*! ./anchorTagBuilder */ 0);\n\nvar _anchorTagBuilder2 = _interopRequireDefault(_anchorTagBuilder);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = document.getElementById(\"main\");\nvar anchor = new _anchorTagBuilder2.default(\"Google\").setHref(\"https://www.google.com\").setTitle(\"_blank\").build();\napp.appendChild(anchor);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYW5jaG9yVGFnQnVpbGRlciBmcm9tICcuL2FuY2hvclRhZ0J1aWxkZXInXG52YXIgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xudmFyIGFuY2hvciA9IG5ldyBhbmNob3JUYWdCdWlsZGVyKFwiR29vZ2xlXCIpLnNldEhyZWYoXCJodHRwczovL3d3dy5nb29nbGUuY29tXCIpLnNldFRpdGxlKFwiX2JsYW5rXCIpLmJ1aWxkKCk7XG5hcHAuYXBwZW5kQ2hpbGQoYW5jaG9yKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);