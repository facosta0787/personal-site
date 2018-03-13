module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/react-granim/index.js":
/*!****************************************!*\
  !*** ./packages/react-granim/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Granim; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var granim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! granim */ "granim");
/* harmony import */ var granim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(granim__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/felipe/projects/personal-site/packages/react-granim/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Granim extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  get config() {
    // default
    return {
      element: `#${this.props.id}`,
      states: {
        [this.props.defaultStateName]: {
          gradients: [['#EB3349', '#F45C43'], ['#FF8008', '#FFC837'], ['#4CB8C4', '#3CD3AD'], ['#24C6DC', '#514A9D'], ['#FF512F', '#DD2476'], ['#DA22FF', '#9733EE']],
          transitionSpeed: 500
        }
      }
    };
  }

  get style() {
    return {
      position: 'absolute',
      display: 'block',
      width: '100%',
      height: '100%',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  componentDidMount() {
    this.granim = new granim__WEBPACK_IMPORTED_MODULE_2___default.a(Object.assign({}, this.config, this.props));
  }

  render() {
    const {
      id,
      style,
      className
    } = this.props;
    return __jsx("canvas", {
      id: id,
      className: className,
      style: style || this.style,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 12
      }
    });
  }

}

_defineProperty(Granim, "propsType", {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  elToSetClassOn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf('diagonal', 'left-right', 'top-bottom', 'radial', 'custom'),
  customDirection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  isPausedWhenNotInView: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  scrollDebounceThreshold: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  stateTransitionSpeed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  defaultStateName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  states: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
});

_defineProperty(Granim, "defaultProps", {
  id: `granim-canvas-${Math.random().toString(36).substring(2)}`,
  defaultStateName: 'default-state',
  stateTransitionSpeed: 250
});

/***/ }),

/***/ "./src/components/Avatar.js":
/*!**********************************!*\
  !*** ./src/components/Avatar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/felipe/projects/personal-site/src/components/Avatar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Avatar() {
  return __jsx("figure", {
    className: "jsx-3207287455",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "img/avatar.jpg",
    className: "jsx-3207287455",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3207287455",
    __self: this
  }, "figure.jsx-3207287455{margin:0;padding:0;display:contents;}img.jsx-3207287455{width:50%;max-width:200px;border-radius:50%;border:6px solid white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWxpcGUvcHJvamVjdHMvcGVyc29uYWwtc2l0ZS9zcmMvY29tcG9uZW50cy9BdmF0YXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWtCLEFBR29CLEFBTUMsU0FMQSxDQU1NLFNBTEMsT0FNQyxVQUxwQixRQU15Qix1QkFDekIiLCJmaWxlIjoiL1VzZXJzL2ZlbGlwZS9wcm9qZWN0cy9wZXJzb25hbC1zaXRlL3NyYy9jb21wb25lbnRzL0F2YXRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gQXZhdGFyICgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZmlndXJlPlxuICAgICAgPGltZyBzcmM9XCJpbWcvYXZhdGFyLmpwZ1wiPjwvaW1nPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBmaWd1cmUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlcjogNnB4IHNvbGlkIHdoaXRlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9maWd1cmU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyXG4iXX0= */\n/*@ sourceURL=/Users/felipe/projects/personal-site/src/components/Avatar.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Avatar);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/felipe/projects/personal-site/src/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Header() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("header", {
    className: "jsx-3555273223",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-3555273223" + " " + 'title',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "FA."), __jsx("div", {
    className: "jsx-3555273223" + " " + 'contact-info',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "jsx-3555273223",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, "(+57 311 349 5655)"), __jsx("p", {
    className: "jsx-3555273223",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, "facosta0787@gmail.com"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3555273223",
    __self: this
  }, "header.jsx-3555273223{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-top:40px;}header.jsx-3555273223>.title.jsx-3555273223{margin:0;padding:0;font-size:30px;margin-left:40px;text-shadow:0 3px 8px rgba(0,0,0,0.1);font-weight:900;}header.jsx-3555273223>.contact-info.jsx-3555273223{margin-right:20px;font-size:14px;font-family:'Lora';font-style:italic;color:#fafafa;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out;}header.jsx-3555273223>.contact-info.jsx-3555273223>p.jsx-3555273223:first-child{opacity:0.5;margin:0 25px 3px 0;}@media screen and (min-width:768px){header.jsx-3555273223>.contact-info.jsx-3555273223{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWxpcGUvcHJvamVjdHMvcGVyc29uYWwtc2l0ZS9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWtCLEFBR3dCLEFBTUosQUFTUyxBQVdOLEFBTVMsU0F6QlgsR0FvQlUsTUFYTCxDQVJBLGFBb0JqQixDQVhxQixDQVJGLGlCQUN3QixDQVF2QixpQkFlbEIsQ0FkYyxJQWxCZ0IsVUFtQmpCLEtBVEcsZ0JBQ2xCLHFEQVN3QiwrQkFuQkwsaUJBQ25CLDhCQW1CaUMsc0VBQ2pDIiwiZmlsZSI6Ii9Vc2Vycy9mZWxpcGUvcHJvamVjdHMvcGVyc29uYWwtc2l0ZS9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGl0bGUnPkZBLjwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWN0LWluZm8nPlxuICAgICAgICAgIDxwPigrNTcgMzExIDM0OSA1NjU1KTwvcD5cbiAgICAgICAgICA8cD5mYWNvc3RhMDc4N0BnbWFpbC5jb208L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBoZWFkZXIgPiAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAzcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaGVhZGVyID4gLmNvbnRhY3QtaW5mbyB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0xvcmEnO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICBjb2xvcjogI2ZhZmFmYTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhlYWRlciA+IC5jb250YWN0LWluZm8gPiBwOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgbWFyZ2luOiAwIDI1cHggM3B4IDA7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIGhlYWRlciA+IC5jb250YWN0LWluZm8ge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXX0= */\n/*@ sourceURL=/Users/felipe/projects/personal-site/src/components/Header.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Social.js":
/*!**********************************!*\
  !*** ./src/components/Social.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons */ "react-icons");
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/felipe/projects/personal-site/src/components/Social.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Social() {
  return __jsx(react_icons__WEBPACK_IMPORTED_MODULE_2__["IconContext"].Provider, {
    value: {
      className: 'social-icons'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "jsx-1001172831",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: "jsx-1001172831",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://www.linkedin.com/in/facosta0787/",
    target: "_blank",
    className: "jsx-1001172831",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaLinkedinIn"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }))), __jsx("li", {
    className: "jsx-1001172831",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://twitter.com/facosta0787",
    target: "_blank",
    className: "jsx-1001172831",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaTwitter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }))), __jsx("li", {
    className: "jsx-1001172831",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://github.com/facosta0787",
    target: "_blank",
    className: "jsx-1001172831",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaGithub"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2062093774",
    __self: this
  }, "ul.jsx-1001172831{margin-top:50px;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;list-style:none;}ul.jsx-1001172831 a.jsx-1001172831{-webkit-text-decoration:none;text-decoration:none;color:white;opacity:0.5;-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;}ul.jsx-1001172831 a.jsx-1001172831:hover{opacity:0.7;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWxpcGUvcHJvamVjdHMvcGVyc29uYWwtc2l0ZS9zcmMvY29tcG9uZW50cy9Tb2NpYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JrQixBQUcyQixBQVFLLEFBT1QsWUFDZCxJQWZhLFdBQ0UsdUJBT0QsWUFDQSxZQUN3QiwyQkFSYixxREFTekIsOENBUmtCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvZmVsaXBlL3Byb2plY3RzL3BlcnNvbmFsLXNpdGUvc3JjL2NvbXBvbmVudHMvU29jaWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSWNvbkNvbnRleHQgfSBmcm9tICdyZWFjdC1pY29ucydcbmltcG9ydCB7IEZhVHdpdHRlciwgRmFMaW5rZWRpbkluLCBGYUdpdGh1YiB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xuXG5mdW5jdGlvbiBTb2NpYWwoKSB7XG4gIHJldHVybiAoXG4gICAgPEljb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNsYXNzTmFtZTogJ3NvY2lhbC1pY29ucycgfX0+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZmFjb3N0YTA3ODcvJyB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICA8RmFMaW5rZWRpbkluIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly90d2l0dGVyLmNvbS9mYWNvc3RhMDc4NycgdGFyZ2V0PSdfYmxhbmsnPlxuICAgICAgICAgICAgPEZhVHdpdHRlciAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNvc3RhMDc4NycgdGFyZ2V0PSdfYmxhbmsnPlxuICAgICAgICAgICAgPEZhR2l0aHViIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgdWwge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgdWwgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG5cbiAgICAgICAgdWwgYTpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5zb2NpYWwtaWNvbnMge1xuICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0ljb25Db250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvY2lhbFxuIl19 */\n/*@ sourceURL=/Users/felipe/projects/personal-site/src/components/Social.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4167660088",
    __self: this
  }, ".social-icons{width:20px;height:20px;margin-right:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWxpcGUvcHJvamVjdHMvcGVyc29uYWwtc2l0ZS9zcmMvY29tcG9uZW50cy9Tb2NpYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkN5QixBQUdzQixXQUNDLFlBQ00sa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9mZWxpcGUvcHJvamVjdHMvcGVyc29uYWwtc2l0ZS9zcmMvY29tcG9uZW50cy9Tb2NpYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJY29uQ29udGV4dCB9IGZyb20gJ3JlYWN0LWljb25zJ1xuaW1wb3J0IHsgRmFUd2l0dGVyLCBGYUxpbmtlZGluSW4sIEZhR2l0aHViIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXG5cbmZ1bmN0aW9uIFNvY2lhbCgpIHtcbiAgcmV0dXJuIChcbiAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY2xhc3NOYW1lOiAnc29jaWFsLWljb25zJyB9fT5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9mYWNvc3RhMDc4Ny8nIHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgICAgIDxGYUxpbmtlZGluSW4gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL3R3aXR0ZXIuY29tL2ZhY29zdGEwNzg3JyB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICA8RmFUd2l0dGVyIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL2ZhY29zdGEwNzg3JyB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICA8RmFHaXRodWIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICB1bCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICB1bCBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cblxuICAgICAgICB1bCBhOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLnNvY2lhbC1pY29ucyB7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU29jaWFsXG4iXX0= */\n/*@ sourceURL=/Users/felipe/projects/personal-site/src/components/Social.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Social);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_react_granim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../packages/react-granim */ "./packages/react-granim/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.js");
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Avatar */ "./src/components/Avatar.js");
/* harmony import */ var _components_Social__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Social */ "./src/components/Social.js");
var _jsxFileName = "/Users/felipe/projects/personal-site/src/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







function Home() {
  const granimProps = {
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states: {
      'default-state': {
        gradients: [['rgba(50, 50, 50, .85)', 'rgba(0, 0, 0, .85)'], ['rgba(0, 0, 0, .85)', 'rgba(50, 50, 50, .85)']]
      }
    },
    // image: {
    //   source: 'img/patt.png',
    //   position: ['left', 'top'],
    //   stretchMode: ['stretch', 'stretch'],
    //   blendingMode: 'lighten',
    // },
    className: 'canva-background'
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_packages_react_granim__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    id: "background"
  }, granimProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: "jsx-2927735055" + " " + 'content',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx("main", {
    className: "jsx-2927735055",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2927735055" + " " + 'avatar-container',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx(_components_Avatar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  })), __jsx("h2", {
    className: "jsx-2927735055",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "FELIPE ACOSTA"), __jsx("h4", {
    className: "jsx-2927735055",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "Front-End Developer"), __jsx("div", {
    className: "jsx-2927735055" + " " + 'social-container',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx(_components_Social__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2089278787",
    __self: this
  }, ".content.jsx-2927735055{position:relative;width:100%;max-width:1024px;margin:0 auto;}main.jsx-2927735055{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;z-index:1;max-width:1024px;}.avatar-container.jsx-2927735055{margin-top:30%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all 1s ease-in-out;transition:all 1s ease-in-out;}main.jsx-2927735055>h2.jsx-2927735055{margin-top:35px;font-size:28px;font-weight:700;}main.jsx-2927735055>h4.jsx-2927735055{font-family:'Lora';font-style:italic;font-size:14px;font-weight:400;}@media screen and (min-width:768px){.avatar-container.jsx-2927735055{margin-top:100px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWxpcGUvcHJvamVjdHMvcGVyc29uYWwtc2l0ZS9zcmMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENrQixBQUc2QixBQU9MLEFBVUUsQUFPQyxBQU1HLEFBUUEsZUFwQk4sQ0FPRSxDQWNmLENBdENXLENBOEJPLFVBN0JELEVBd0JELE1BTUQsU0E3QkQsQ0F3QmhCLEtBTWtCLFFBN0JsQixRQThCQSxNQTFCeUIsZUFXQSxvRkFWRCxlQVdRLCtEQVZaLEtBV3BCLGFBVnVCLHFHQUNYLFVBQ08saUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9mZWxpcGUvcHJvamVjdHMvcGVyc29uYWwtc2l0ZS9zcmMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR3JhbmltIGZyb20gJy4uLy4uL3BhY2thZ2VzL3JlYWN0LWdyYW5pbSdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uL2NvbXBvbmVudHMvQXZhdGFyJ1xuaW1wb3J0IFNvY2lhbCBmcm9tICcuLi9jb21wb25lbnRzL1NvY2lhbCdcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgZ3JhbmltUHJvcHMgPSB7XG4gICAgZGlyZWN0aW9uOiAnZGlhZ29uYWwnLFxuICAgIGlzUGF1c2VkV2hlbk5vdEluVmlldzogdHJ1ZSxcbiAgICBzdGF0ZXM6IHtcbiAgICAgICdkZWZhdWx0LXN0YXRlJzoge1xuICAgICAgICBncmFkaWVudHM6IFtcbiAgICAgICAgICBbJ3JnYmEoNTAsIDUwLCA1MCwgLjg1KScsICdyZ2JhKDAsIDAsIDAsIC44NSknXSxcbiAgICAgICAgICBbJ3JnYmEoMCwgMCwgMCwgLjg1KScsICdyZ2JhKDUwLCA1MCwgNTAsIC44NSknXSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBpbWFnZToge1xuICAgIC8vICAgc291cmNlOiAnaW1nL3BhdHQucG5nJyxcbiAgICAvLyAgIHBvc2l0aW9uOiBbJ2xlZnQnLCAndG9wJ10sXG4gICAgLy8gICBzdHJldGNoTW9kZTogWydzdHJldGNoJywgJ3N0cmV0Y2gnXSxcbiAgICAvLyAgIGJsZW5kaW5nTW9kZTogJ2xpZ2h0ZW4nLFxuICAgIC8vIH0sXG4gICAgY2xhc3NOYW1lOiAnY2FudmEtYmFja2dyb3VuZCcsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R3JhbmltIGlkPSdiYWNrZ3JvdW5kJyB7Li4uZ3JhbmltUHJvcHN9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2F2YXRhci1jb250YWluZXInPlxuICAgICAgICAgICAgPEF2YXRhciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMj5GRUxJUEUgQUNPU1RBPC9oMj5cbiAgICAgICAgICA8aDQ+RnJvbnQtRW5kIERldmVsb3BlcjwvaDQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NvY2lhbC1jb250YWluZXInPlxuICAgICAgICAgICAgPFNvY2lhbCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogMTAyNHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdmF0YXItY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluID4gaDIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluID4gaDQge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTG9yYSc7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAuYXZhdGFyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgKiB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xuICAgICAgICB9XG5cbiAgICAgICAgI19fbmV4dCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhbnZhLWJhY2tncm91bmQge1xuICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xuICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1nL3BhdHQucG5nJyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1vcmlnaW46IHBhZGRpbmctYm94O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCUgIWltcG9ydGFudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/Users/felipe/projects/personal-site/src/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3418757957",
    __self: this
  }, "*{margin:0;padding:0;box-sizing:border-box;}body{height:100vh;font-family:'Montserrat',sans-serif;color:#fff;background-color:#323232;}#__next{height:100%;}.canva-background{background-attachment:scroll;background-clip:border-box;background-color:#333333;background-image:url('img/patt.png');background-origin:padding-box;background-position:50% 50% !important;background-repeat:repeat;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWxpcGUvcHJvamVjdHMvcGVyc29uYWwtc2l0ZS9zcmMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUZ5QixBQUdvQixBQU1JLEFBT0QsQUFJaUIsU0FoQm5CLEdBYVosQ0FQdUMsTUFMZixVQWdCSyxZQWY3QixRQUthLE9BV2MsSUFWQSxxQkFXWSxJQVZ2QyxpQ0FXZ0MsOEJBQ1MsdUNBQ2QseUJBQzNCIiwiZmlsZSI6Ii9Vc2Vycy9mZWxpcGUvcHJvamVjdHMvcGVyc29uYWwtc2l0ZS9zcmMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR3JhbmltIGZyb20gJy4uLy4uL3BhY2thZ2VzL3JlYWN0LWdyYW5pbSdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uL2NvbXBvbmVudHMvQXZhdGFyJ1xuaW1wb3J0IFNvY2lhbCBmcm9tICcuLi9jb21wb25lbnRzL1NvY2lhbCdcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgZ3JhbmltUHJvcHMgPSB7XG4gICAgZGlyZWN0aW9uOiAnZGlhZ29uYWwnLFxuICAgIGlzUGF1c2VkV2hlbk5vdEluVmlldzogdHJ1ZSxcbiAgICBzdGF0ZXM6IHtcbiAgICAgICdkZWZhdWx0LXN0YXRlJzoge1xuICAgICAgICBncmFkaWVudHM6IFtcbiAgICAgICAgICBbJ3JnYmEoNTAsIDUwLCA1MCwgLjg1KScsICdyZ2JhKDAsIDAsIDAsIC44NSknXSxcbiAgICAgICAgICBbJ3JnYmEoMCwgMCwgMCwgLjg1KScsICdyZ2JhKDUwLCA1MCwgNTAsIC44NSknXSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBpbWFnZToge1xuICAgIC8vICAgc291cmNlOiAnaW1nL3BhdHQucG5nJyxcbiAgICAvLyAgIHBvc2l0aW9uOiBbJ2xlZnQnLCAndG9wJ10sXG4gICAgLy8gICBzdHJldGNoTW9kZTogWydzdHJldGNoJywgJ3N0cmV0Y2gnXSxcbiAgICAvLyAgIGJsZW5kaW5nTW9kZTogJ2xpZ2h0ZW4nLFxuICAgIC8vIH0sXG4gICAgY2xhc3NOYW1lOiAnY2FudmEtYmFja2dyb3VuZCcsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R3JhbmltIGlkPSdiYWNrZ3JvdW5kJyB7Li4uZ3JhbmltUHJvcHN9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2F2YXRhci1jb250YWluZXInPlxuICAgICAgICAgICAgPEF2YXRhciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMj5GRUxJUEUgQUNPU1RBPC9oMj5cbiAgICAgICAgICA8aDQ+RnJvbnQtRW5kIERldmVsb3BlcjwvaDQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NvY2lhbC1jb250YWluZXInPlxuICAgICAgICAgICAgPFNvY2lhbCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogMTAyNHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdmF0YXItY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluID4gaDIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluID4gaDQge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTG9yYSc7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAuYXZhdGFyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgKiB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xuICAgICAgICB9XG5cbiAgICAgICAgI19fbmV4dCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhbnZhLWJhY2tncm91bmQge1xuICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xuICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1nL3BhdHQucG5nJyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1vcmlnaW46IHBhZGRpbmctYm94O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCUgIWltcG9ydGFudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/Users/felipe/projects/personal-site/src/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/felipe/projects/personal-site/src/pages/index.js */"./src/pages/index.js");


/***/ }),

/***/ "granim":
/*!*************************!*\
  !*** external "granim" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("granim");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons":
/*!******************************!*\
  !*** external "react-icons" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map