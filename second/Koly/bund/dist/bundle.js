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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var loginPath = "http://localhost:3001/login";
var itemsPath = "http://localhost:3001/items?login=boris&password=12345";
var usersPath = "http://localhost:3001/users";
function GetUsers(path) {
    return fetch(path).then(function (x) {
        return x.json();
    }).then(function (x) {
        return x[0];
    });
};
function GetItems(path) {
    return fetch(path).then(function (x) {
        return x.json();
    });
}
function CreateItem(_ref) {
    var id = _ref.id,
        name = _ref.name,
        price = _ref.price,
        desc = _ref.desc,
        pic = _ref.pic;

    return "\n        <div id=\"" + id + "\" class=\"element\">\n        <div class=\"nameOfProduct\">" + name + "</div>\n        <img class=\"product\" src=\"" + pic + "\">\n        <div class=\"price\">" + price + " $</div>\n        <div class=\"description\"><p>" + desc + "</p></div>\n        <input type=\"button\" onclick=\"BuyItem()\" value=\"BUY\" class=\"byProduct\">\n    \n    ";
}
function AppendItems(items) {
    var cont = document.getElementById("items");
    items.forEach(function (element) {
        cont.innerHTML += element;
    });
}
function login() {
    var log = document.getElementById("login").value;
    return fetch(loginPath, {
        method: "POST",
        credentials: 'include',
        body: {
            login: log
        }
    }).then(function (x) {
        if (x.status == "200" && x.ok == true) alert("loged");
    });
}
function BuyItem(path) {
    return fetch(loginPath, {
        method: "POST",
        credentials: 'include',
        body: {
            itemId: this.id

        }
    }).then(function (x) {
        if (x.status == "200" && x.ok == true) alert("Buyed");
    });
}

GetUsers(usersPath);
GetItems(itemsPath).then(function (x) {
    return x.map(function (element) {
        return CreateItem(element);
    });
}).then(function (x) {
    return AppendItems(x);
});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map