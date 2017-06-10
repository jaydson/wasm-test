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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var buffer = new ArrayBuffer(294);var uint8 = new Uint8Array(buffer);uint8.set([0,97,115,109,1,0,0,0,0,12,6,100,121,108,105,110,107,144,128,192,2,0,1,136,128,128,128,0,2,96,0,1,127,96,0,0,2,193,128,128,128,0,4,3,101,110,118,10,109,101,109,111,114,121,66,97,115,101,3,127,0,3,101,110,118,6,109,101,109,111,114,121,2,0,128,2,3,101,110,118,5,116,97,98,108,101,1,112,0,0,3,101,110,118,9,116,97,98,108,101,66,97,115,101,3,127,0,3,132,128,128,128,0,3,0,1,1,6,144,128,128,128,0,3,127,1,65,0,11,127,1,65,0,11,127,0,65,0,11,7,184,128,128,128,0,4,6,95,99,111,117,110,116,0,0,18,95,95,112,111,115,116,95,105,110,115,116,97,110,116,105,97,116,101,0,2,11,114,117,110,80,111,115,116,83,101,116,115,0,1,8,95,99,111,117,110,116,101,114,3,4,9,129,128,128,128,0,0,10,195,128,128,128,0,3,152,128,128,128,0,1,1,127,2,127,35,0,35,0,40,2,0,65,1,106,34,0,54,2,0,32,0,11,11,131,128,128,128,0,0,1,11,152,128,128,128,0,0,2,64,35,0,65,16,106,36,2,35,2,65,128,128,192,2,106,36,3,16,1,11,11,11,135,128,128,128,0,1,0,35,0,11,1,100,]);// This file will not run on it's own

const {
  Module,
  Instance,
  Memory,
  Table
} = WebAssembly;

let wa;
const make = source => {
  // buffer should already be set
  return wa = new Module(buffer);
};

const WebAssemblyModule = function(deps = {
  'global': {},
  'env': {
    'memory': new Memory({initial: 10, limit: 100}),
    'table': new Table({initial: 0, element: 'anyfunc'})
  }
}) {
  return new Instance(wa || make(), deps);
}

module.exports = WebAssemblyModule;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var buffer = new ArrayBuffer(291);var uint8 = new Uint8Array(buffer);uint8.set([0,97,115,109,1,0,0,0,0,12,6,100,121,108,105,110,107,128,128,192,2,0,1,137,128,128,128,0,2,96,1,127,1,127,96,0,0,2,193,128,128,128,0,4,3,101,110,118,10,109,101,109,111,114,121,66,97,115,101,3,127,0,3,101,110,118,6,109,101,109,111,114,121,2,0,128,2,3,101,110,118,5,116,97,98,108,101,1,112,0,0,3,101,110,118,9,116,97,98,108,101,66,97,115,101,3,127,0,3,132,128,128,128,0,3,0,1,1,6,139,128,128,128,0,2,127,1,65,0,11,127,1,65,0,11,7,177,128,128,128,0,3,10,95,70,105,98,111,110,97,99,99,105,0,0,18,95,95,112,111,115,116,95,105,110,115,116,97,110,116,105,97,116,101,0,2,11,114,117,110,80,111,115,116,83,101,116,115,0,1,9,129,128,128,128,0,0,10,216,128,128,128,0,3,176,128,128,128,0,1,1,127,2,127,2,64,2,64,2,64,32,0,14,2,1,0,2,11,65,1,15,11,65,0,15,11,32,0,65,127,106,16,0,33,1,32,0,65,126,106,16,0,32,1,106,11,11,131,128,128,128,0,0,1,11,149,128,128,128,0,0,2,64,35,0,36,2,35,2,65,128,128,192,2,106,36,3,16,1,11,11,]);// This file will not run on it's own

const {
  Module,
  Instance,
  Memory,
  Table
} = WebAssembly;

let wa;
const make = source => {
  // buffer should already be set
  return wa = new Module(buffer);
};

const WebAssemblyModule = function(deps = {
  'global': {},
  'env': {
    'memory': new Memory({initial: 10, limit: 100}),
    'table': new Table({initial: 0, element: 'anyfunc'})
  }
}) {
  return new Instance(wa || make(), deps);
}

module.exports = WebAssemblyModule;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__counter__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__counter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__counter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fibo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fibo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__fibo__);



window.wasmCounter = () => {
    const counter = new __WEBPACK_IMPORTED_MODULE_0__counter___default.a({
      'env': {
        'memoryBase': 0,
        'tableBase': 0,
        'memory': new WebAssembly.Memory({initial: 256}),
        'table': new WebAssembly.Table({initial: 0, element: 'anyfunc'})
      }
    })
    return counter.exports._count();
}

window.wasmFibo = (n) => {  
    const fibo = new __WEBPACK_IMPORTED_MODULE_1__fibo___default.a({
      'env': {
        'memoryBase': 0,
        'tableBase': 0,
        'memory': new WebAssembly.Memory({initial: 256}),
        'table': new WebAssembly.Table({initial: 0, element: 'anyfunc'})
      }
    })
 	return fibo.exports._Fibonacci(n);
}

/***/ })
/******/ ]);