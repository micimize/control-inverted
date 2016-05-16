require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.satisfies = satisfies;
	exports.findSatisfier = findSatisfier;
	exports.default = resolve;
	exports.objectContainsOnly = objectContainsOnly;
	
	var _getPrototypeChain = __webpack_require__(9);
	
	var _getPrototypeChain2 = _interopRequireDefault(_getPrototypeChain);
	
	var _strictduck = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function satisfies(_ref) {
	    var provider = _ref.provider;
	    var dependency = _ref.dependency;
	
	    return (0, _getPrototypeChain2.default)(provider).filter(function (p) {
	        return _strictduck.utils.equals(p, dependency) || _strictduck.utils.is({ instance: p, Class: dependency }) || p === dependency || p instanceof dependency || p.constructor.name == dependency;
	    }).length > 0;
	}
	
	function findSatisfier(_ref2) {
	    var container = _ref2.container;
	    var dependency = _ref2.dependency;
	
	    var satisfierArr = Object.keys(container.providers).filter(function (key) {
	        return satisfies({
	            provider: container.providers[key], dependency: dependency
	        });
	    });
	    var satisfier = satisfierArr.length && satisfierArr[0];
	    return satisfier ? container[satisfier] : Error(dependency.name + ' is unsatsified!');
	}
	
	function resolve(_ref3) {
	    var container = _ref3.container;
	    var dependencies = _ref3.dependencies;
	
	    return dependencies.reduce(function (resolved, dependency) {
	        resolved[dependency.name || dependency.constructor.name] = findSatisfier({
	            container: container,
	            dependency: dependency
	        });
	        return resolved;
	    }, {});
	}
	
	function objectContainsOnly(_ref4) {
	    var strictduck = _ref4.strictduck;
	    var object = _ref4.object;
	
	    return Object.keys(object).filter(function (k) {
	        return !satisfies({ provider: object[k], dependency: strictduck });
	    }).length == 0;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("strictduck");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = depends;
	
	var _strictduck = __webpack_require__(2);
	
	var _strictduck2 = _interopRequireDefault(_strictduck);
	
	var _resolve = __webpack_require__(1);
	
	var _resolve2 = _interopRequireDefault(_resolve);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function depends(_ref) {
	    var name = _ref.name;
	    var _ref$parent = _ref.parent;
	    var parent = _ref$parent === undefined ? _strictduck2.default : _ref$parent;
	    var _ref$dependencies = _ref.dependencies;
	    var dependencies = _ref$dependencies === undefined ? [] : _ref$dependencies;
	    var _ref$constructor = _ref.constructor;
	    var c = _ref$constructor === undefined ? function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return args;
	    } : _ref$constructor;
	
	    return _strictduck.utils.nameClass({
	        name: name || parent.name,
	        Class: function (_parent) {
	            _inherits(Class, _parent);
	
	            function Class(_ref2) {
	                var _Object$getPrototypeO;
	
	                var container = _ref2.container;
	
	                var rest = _objectWithoutProperties(_ref2, ['container']);
	
	                _classCallCheck(this, Class);
	
	                return _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Class)).call.apply(_Object$getPrototypeO, [this].concat(_toConsumableArray(c(_extends({}, (0, _resolve2.default)({ container: container, dependencies: dependencies }), rest))))));
	            }
	
	            return Class;
	        }(parent)
	    });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _strictduck = __webpack_require__(2);
	
	var _strictduck2 = _interopRequireDefault(_strictduck);
	
	var _bottlejs = __webpack_require__(8);
	
	var _bottlejs2 = _interopRequireDefault(_bottlejs);
	
	var _depends = __webpack_require__(3);
	
	var _depends2 = _interopRequireDefault(_depends);
	
	var _resolve = __webpack_require__(1);
	
	var _resolve2 = _interopRequireDefault(_resolve);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function materializer(service) {
	    return function (container) {
	        return new service({ container: container });
	    };
	}
	
	var Composit = function (_StrictDuck) {
	    _inherits(Composit, _StrictDuck);
	
	    function Composit(_ref) {
	        var _ref$main = _ref.main;
	        var _ref$main$Class = _ref$main.Class;
	        var mainClass = _ref$main$Class === undefined ? _strictduck.Main : _ref$main$Class;
	        var _ref$main$method = _ref$main.method;
	        var mainMethod = _ref$main$method === undefined ? 'main' : _ref$main$method;
	
	        _classCallCheck(this, Composit);
	
	        var providerMap = {};
	
	        for (var _len = arguments.length, services = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            services[_key - 1] = arguments[_key];
	        }
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Composit).call(this, services.reduce(function (context, _ref2) {
	            var dependency = _ref2.dependency;
	            var provider = _ref2.provider;
	
	            var name = provider.name || provider.constructor.name;
	            providerMap[name] = provider;
	
	            if (provider instanceof dependency) {
	                context.value(name, provider);
	            } else {
	                context.factory(name, materializer(provider));
	            }
	            return context;
	        }, new _bottlejs2.default())));
	
	        _this.value('providers', providerMap);
	        var mainSatisfier = (0, _resolve.findSatisfier)({ container: _this.container, dependency: mainClass });
	        _this.main = function (kwargs) {
	            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                args[_key2 - 1] = arguments[_key2];
	            }
	
	            return mainSatisfier[mainMethod].apply(mainSatisfier, [_extends({ container: _this.container }, kwargs)].concat(args));
	        };
	        return _this;
	    }
	
	    return Composit;
	}(_strictduck2.default);
	
	exports.default = (0, _strictduck.implement)({ strictduck: _strictduck.Main, withClass: Composit });

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.Composit = exports.typedMap = exports.resolve = exports.provides = exports.depends = undefined;
	
	var _depends2 = __webpack_require__(3);
	
	var _depends3 = _interopRequireDefault(_depends2);
	
	var _provides2 = __webpack_require__(6);
	
	var _provides3 = _interopRequireDefault(_provides2);
	
	var _resolve2 = __webpack_require__(1);
	
	var _resolve = _interopRequireWildcard(_resolve2);
	
	var _typedMap2 = __webpack_require__(7);
	
	var _typedMap3 = _interopRequireDefault(_typedMap2);
	
	var _composit = __webpack_require__(4);
	
	var _composit2 = _interopRequireDefault(_composit);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.depends = _depends3.default;
	exports.provides = _provides3.default;
	exports.resolve = _resolve;
	exports.typedMap = _typedMap3.default;
	exports.Composit = _composit2.default;
	exports.default = _composit2.default;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Provider = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = provides;
	
	var _strictduck = __webpack_require__(2);
	
	var _strictduck2 = _interopRequireDefault(_strictduck);
	
	var _resolve = __webpack_require__(1);
	
	var _resolve2 = _interopRequireDefault(_resolve);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Provider = exports.Provider = (0, _strictduck.extend)({ name: 'Provider', methods: ['provide'] });
	
	function provides(_ref) {
	    var name = _ref.name;
	    var provider = _ref.provider;
	    var _ref$parent = _ref.parent;
	    var parent = _ref$parent === undefined ? _strictduck2.default : _ref$parent;
	    var _ref$dependencies = _ref.dependencies;
	    var dependencies = _ref$dependencies === undefined ? [] : _ref$dependencies;
	
	    return _strictduck.utils.nameClass({
	        name: name || parent.name,
	        Class: function (_parent) {
	            _inherits(Class, _parent);
	
	            function Class() {
	                var _Object$getPrototypeO;
	
	                _classCallCheck(this, Class);
	
	                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                    args[_key] = arguments[_key];
	                }
	
	                var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Class)).call.apply(_Object$getPrototypeO, [this].concat(args)));
	
	                _this.provide = function provide() {
	                    var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? { container: {} } : arguments[0];
	
	                    var container = _ref2.container;
	
	                    var kwargs = _objectWithoutProperties(_ref2, ['container']);
	
	                    for (var _len2 = arguments.length, pargs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                        pargs[_key2 - 1] = arguments[_key2];
	                    }
	
	                    return provider.bind(this).apply(undefined, [_extends({}, (0, _resolve2.default)({ container: container, dependencies: dependencies }), kwargs)].concat(pargs));
	                }.bind(_this);
	                return _this;
	            }
	
	            return Class;
	        }(parent)
	    });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = typedMap;
	
	var _strictduck = __webpack_require__(2);
	
	var _resolve = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function typedMap(_ref) {
	    var name = _ref.name;
	    var _ref$strictduck = _ref.strictduck;
	    var strictduck = _ref$strictduck === undefined ? StrictDuck : _ref$strictduck;
	
	    return _strictduck.utils.nameClass({
	        name: name || strictduck.name + 'Map',
	        Class: function (_extend) {
	            _inherits(Class, _extend);
	
	            function Class(object) {
	                _classCallCheck(this, Class);
	
	                (0, _resolve.objectContainsOnly)({ strictduck: strictduck, object: object });
	                return _possibleConstructorReturn(this, Object.getPrototypeOf(Class).call(this, object));
	            }
	
	            return Class;
	        }((0, _strictduck.extend)({ name: 'Map' }))
	    });
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("bottlejs");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("get-prototype-chain");

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map