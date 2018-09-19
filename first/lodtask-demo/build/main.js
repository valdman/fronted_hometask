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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lodtask__ = __webpack_require__(2);


Object(__WEBPACK_IMPORTED_MODULE_0__lodtask__["a" /* lodtask */])({ ingredientsArray: ["potato", "milk"] }).then(answer => console.log(answer));

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_node_fetch__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_node_fetch__);


const lodtask = ({ ingredientsArray }) => {
    const ingredientsArgs = ingredientsArray.join(",");

    const requestApi = (ingredients, page) => {
        return __WEBPACK_IMPORTED_MODULE_0_node_fetch___default()(`http://www.recipepuppy.com/api/?i=${ingredients}&p=${page}`).then(res => res.json()).catch(err => {
            //console.log("Yet another broken page: ", err);
            return Promise.resolve([]);
        }).then(res => res.results);
    };

    const compareRecipes = (a, b) => {
        const getComlexity = recipe => recipe.ingredients.split(",").length;
        return Math.sign(getComlexity(a) - getComlexity(b));
    };

    const requests = [...Array(20).keys()].map(value => requestApi(ingredientsArgs, value + 1));

    return Promise.all(requests).then(res => {
        const sortedRecipies = res.reduce((memo, current) => memo.concat(current), []).sort(compareRecipes).slice(0, 3);

        return sortedRecipies.map(r => ({
            Title: r.title,
            Link: r.href,
            Ingredients: r.ingredients
        }));
    });
};
/* harmony export (immutable) */ __webpack_exports__["a"] = lodtask;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map