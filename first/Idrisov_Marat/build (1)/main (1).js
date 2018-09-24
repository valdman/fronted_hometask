require('source-map-support/register')
module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_node_fetch__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_node_fetch__);


const baseURL = "https://fund.mipt.ru/api/pages";
/* harmony export (immutable) */ __webpack_exports__["a"] = baseURL;


const requestTree = page => {
    const finalURL = `${baseURL}/${page}`;
    return __WEBPACK_IMPORTED_MODULE_0_node_fetch___default()(`${finalURL}`).then(res => res.json()).catch(err => {
        console.log("Yet another broken page: ", err);
    });
};
/* harmony export (immutable) */ __webpack_exports__["c"] = requestTree;


const requestLink = link => {
    return __WEBPACK_IMPORTED_MODULE_0_node_fetch___default()(`${link}`).then(res => res.json()).catch(err => {
        console.log("Yet another broken page: ", err);
    });
};
/* harmony export (immutable) */ __webpack_exports__["b"] = requestLink;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__taketree__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parsefunc__ = __webpack_require__(4);



function main() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__taketree__["c" /* requestTree */])("tree").then(res => Object(__WEBPACK_IMPORTED_MODULE_1__parsefunc__["a" /* rec */])(res.nodes, ""));
}

function reqPages(array) {
    const requests = array.map(value => Object(__WEBPACK_IMPORTED_MODULE_0__taketree__["b" /* requestLink */])(value));
    Promise.all(requests).then(res => {
        res.map(({ id, url, description, creatingTime }) => {
            console.log({
                id,
                url,
                description,
                creatingTime
            });
        });
    });
}

main().then(res => reqPages(res));

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__taketree__ = __webpack_require__(0);


let links = [];

const rec = (item, path) => {
    item.forEach(({ nodes, pageName }) => {
        if (nodes.length) {
            rec(nodes, path + "/" + pageName);
        } else {
            links.push(__WEBPACK_IMPORTED_MODULE_0__taketree__["a" /* baseURL */] + path + "/" + pageName);
        }
    });

    return links;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = rec;


/***/ })
/******/ ]);
//# sourceMappingURL=main.map