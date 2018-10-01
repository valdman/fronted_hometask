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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var fetchServer = exports.fetchServer = function fetchServer(path, params) {
    return fetch("http://localhost:3001" + path, params);
};

var showHint = exports.showHint = function showHint(str) {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    popup.innerHTML = str;
    console.log(str);
    setTimeout(function () {
        popup.style.display = "none";
    }, 3000);
};

var myJSONstringify = exports.myJSONstringify = function myJSONstringify(obj) {
    var str = "{";
    for (var key in obj) {
        str += "\"" + key + "\":\"" + obj[key] + "\"";
    }
    str += "}";
    return str;
};

var HTMLtoArray = exports.HTMLtoArray = function HTMLtoArray(obj) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
        arr.push(obj[i]);
    }
    return arr;
};

var getInputValue = exports.getInputValue = function getInputValue() {
    return document.getElementById("loginInput").value;
};
var getContainer = exports.getContainer = function getContainer() {
    return document.getElementById("itemContainer");
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addCards = exports.fetchItems = undefined;

var _utils = __webpack_require__(0);

var fetchItems = exports.fetchItems = function fetchItems() {
    var myHeaders = new Headers({
        //'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

    var myInit = {
        method: 'GET',
        headers: myHeaders
        //credentials: "omit",
    };

    return (0, _utils.fetchServer)("/items", myInit).catch(function () {
        return console.log("fetch error");
    }).then(function (res) {
        return res.json();
    }).catch(function () {
        return console.log("cannot Json()");
    });
};

var addCards = exports.addCards = function addCards(cards, container) {
    cards.map(function (card) {
        container.innerHTML += getCardHtml(card);
    });
};

var getCardHtml = function getCardHtml(obj) {
    return '\n    <div class="card" name="' + obj.id + '" style="background-image: url(' + obj.pic + '">\n        <div class="cardBlock">\n            <div class="itemName"><b>' + obj.name + '</b> <ins>' + obj.price + '$</ins></div>\n            <div class="itemDesc">' + obj.desc + '</div>\n        </div>\n    </div>\n    ';
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.attachListeners = undefined;

var _utils = __webpack_require__(0);

var attachListeners = exports.attachListeners = function attachListeners(_ref) {
    var logUser = _ref.logUser,
        getUsers = _ref.getUsers,
        deleteUsers = _ref.deleteUsers,
        buyItem = _ref.buyItem;

    document.getElementById("loginButton").onclick = logUser;
    document.getElementById("getUsers").onclick = getUsers;
    document.getElementById("deleteUsers").onclick = deleteUsers;
    (0, _utils.HTMLtoArray)(document.getElementsByClassName("card")).map(function (card) {
        return card.onclick = buyItem.bind(null, card.name);
    });
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buyItem = undefined;

var _utils = __webpack_require__(0);

var buyItem = exports.buyItem = function buyItem(id) {
    var myHeaders = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'text/plain'
    });

    var myInit = {
        method: 'POST',
        headers: myHeaders,
        credentials: "include",
        body: (0, _utils.myJSONstringify)({
            itemId: id
        })
    };

    (0, _utils.fetchServer)("/buy", myInit).catch(function () {
        return console.log("gotcha");
    }).then(function (res) {
        return res;
    }).then(function (res) {
        (0, _utils.showHint)(res.ok ? "Покуплено" : "Логин?");
    }).catch(function (err) {
        return console.log("err");
    });
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getContents = __webpack_require__(1);

var _transactions = __webpack_require__(3);

var _utils = __webpack_require__(0);

var _listeners = __webpack_require__(2);

var logUser = function logUser() {

    var myHeaders = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

    var myInit = {
        method: 'POST',
        headers: myHeaders,
        body: (0, _utils.myJSONstringify)({ login: (0, _utils.getInputValue)() })
    };

    (0, _utils.fetchServer)("/login", myInit).then(function (res) {
        return res.json();
    }).then(function (res) {
        (0, _utils.showHint)(res.status);
        document.cookie = "token=" + res.token + ";expires=" + 60 * 10;
    }).catch(function (err) {
        return console.log(err);
    });
};

var getUsers = function getUsers() {
    var myHeaders = new Headers({
        'Accept': 'application/json'
    });

    var myInit = {
        method: 'GET',
        headers: myHeaders,
        credentials: "omit"
    };

    (0, _utils.fetchServer)("/users", myInit).then(function (res) {
        return res.json();
    }).then(function (res) {
        (0, _utils.showHint)("Список в консоли");
        console.log(res);
    });
};

var deleteUsers = function deleteUsers() {
    var myHeaders = new Headers({
        'Accept': 'text/plain'
    });

    var myInit = {
        method: 'DELETE',
        headers: myHeaders
    };

    (0, _utils.fetchServer)("/users", myInit).then(function (res) {
        console.log(res);
        (0, _utils.showHint)("Удален");
    }).catch(function (err) {
        console.log(err);
        (0, _utils.showHint)("Ошибка");
    });
};

(0, _getContents.fetchItems)().then(function (cards) {
    (0, _getContents.addCards)(cards, (0, _utils.getContainer)());
    (0, _listeners.attachListeners)({ logUser: logUser, getUsers: getUsers, deleteUsers: deleteUsers, buyItem: _transactions.buyItem });
});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map