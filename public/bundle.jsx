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

	'use strict';

	var _store = __webpack_require__(1);

	var _store2 = _interopRequireDefault(_store);

	var _AddTodo = __webpack_require__(67);

	var _AddTodo2 = _interopRequireDefault(_AddTodo);

	var _FilterTodos = __webpack_require__(70);

	var _FilterTodos2 = _interopRequireDefault(_FilterTodos);

	var _TodoList = __webpack_require__(73);

	var _TodoList2 = _interopRequireDefault(_TodoList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ReactRedux = ReactRedux;
	var Provider = _ReactRedux.Provider;


	var TodoApp = function TodoApp() {
	  return React.createElement(
	    'div',
	    null,
	    React.createElement(_AddTodo2.default, null),
	    React.createElement(_FilterTodos2.default, null),
	    React.createElement(_TodoList2.default, null)
	  );
	};

	ReactDOM.render(React.createElement(
	  Provider,
	  { store: _store2.default },
	  React.createElement(TodoApp, null)
	), document.getElementById('root'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keys = __webpack_require__(2);

	var _keys2 = _interopRequireDefault(_keys);

	var _toConsumableArray2 = __webpack_require__(37);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _extends2 = __webpack_require__(60);

	var _extends3 = _interopRequireDefault(_extends2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var todo = function todo() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'ADD_TODO':
	      return {
	        id: action.id, name: action.name, completed: false
	      };
	    case 'TOGGLE_TODO':
	      if (state.id !== action.id) return state;
	      return (0, _extends3.default)({}, state, {
	        completed: !state.completed
	      });
	    default:
	      return state;
	  }
	};

	var todos = function todos() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'ADD_TODO':
	      return [todo(undefined, action)].concat((0, _toConsumableArray3.default)(state));
	    case 'TOGGLE_TODO':
	      return state.map(function (t) {
	        return todo(t, action);
	      });
	    default:
	      return state;
	  }
	};

	var visibilityFilter = function visibilityFilter() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? 'SHOW_ALL' : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'SET_VISIBILITY_FILTER':
	      return action.filter;
	    default:
	      return state;
	  }
	};

	var combineReducers = function combineReducers(reducers) {
	  return function () {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    return (0, _keys2.default)(reducers).reduce(function (previous, key) {
	      previous[key] = reducers[key](state[key], action);
	      return previous;
	    }, {});
	  };
	};

	var todoApp = combineReducers({
	  todos: todos,
	  visibilityFilter: visibilityFilter
	});

	var _Redux = Redux;
	var createStore = _Redux.createStore;
	exports.default = createStore(todoApp);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	module.exports = __webpack_require__(24).Object.keys;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(5)
	  , $keys    = __webpack_require__(7);

	__webpack_require__(22)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(6);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(8)
	  , enumBugKeys = __webpack_require__(21);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(9)
	  , toIObject    = __webpack_require__(10)
	  , arrayIndexOf = __webpack_require__(13)(false)
	  , IE_PROTO     = __webpack_require__(17)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(11)
	  , defined = __webpack_require__(6);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(12);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(10)
	  , toLength  = __webpack_require__(14)
	  , toIndex   = __webpack_require__(16);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(15)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(15)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(18)('keys')
	  , uid    = __webpack_require__(20);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(19)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 20 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(23)
	  , core    = __webpack_require__(24)
	  , fails   = __webpack_require__(33);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(19)
	  , core      = __webpack_require__(24)
	  , ctx       = __webpack_require__(25)
	  , hide      = __webpack_require__(27)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 24 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(26);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(28)
	  , createDesc = __webpack_require__(36);
	module.exports = __webpack_require__(32) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(29)
	  , IE8_DOM_DEFINE = __webpack_require__(31)
	  , toPrimitive    = __webpack_require__(35)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(32) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(30);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(32) && !__webpack_require__(33)(function(){
	  return Object.defineProperty(__webpack_require__(34)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(33)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(30)
	  , document = __webpack_require__(19).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(30);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(38);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(39), __esModule: true };

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(40);
	__webpack_require__(53);
	module.exports = __webpack_require__(24).Array.from;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(41)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(42)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(15)
	  , defined   = __webpack_require__(6);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(43)
	  , $export        = __webpack_require__(23)
	  , redefine       = __webpack_require__(44)
	  , hide           = __webpack_require__(27)
	  , has            = __webpack_require__(9)
	  , Iterators      = __webpack_require__(45)
	  , $iterCreate    = __webpack_require__(46)
	  , setToStringTag = __webpack_require__(50)
	  , getPrototypeOf = __webpack_require__(52)
	  , ITERATOR       = __webpack_require__(51)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(27);

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(47)
	  , descriptor     = __webpack_require__(36)
	  , setToStringTag = __webpack_require__(50)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(27)(IteratorPrototype, __webpack_require__(51)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(29)
	  , dPs         = __webpack_require__(48)
	  , enumBugKeys = __webpack_require__(21)
	  , IE_PROTO    = __webpack_require__(17)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(34)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(49).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(28)
	  , anObject = __webpack_require__(29)
	  , getKeys  = __webpack_require__(7);

	module.exports = __webpack_require__(32) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(19).document && document.documentElement;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(28).f
	  , has = __webpack_require__(9)
	  , TAG = __webpack_require__(51)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(18)('wks')
	  , uid        = __webpack_require__(20)
	  , Symbol     = __webpack_require__(19).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(9)
	  , toObject    = __webpack_require__(5)
	  , IE_PROTO    = __webpack_require__(17)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(25)
	  , $export        = __webpack_require__(23)
	  , toObject       = __webpack_require__(5)
	  , call           = __webpack_require__(54)
	  , isArrayIter    = __webpack_require__(55)
	  , toLength       = __webpack_require__(14)
	  , createProperty = __webpack_require__(56)
	  , getIterFn      = __webpack_require__(57);

	$export($export.S + $export.F * !__webpack_require__(59)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(29);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(45)
	  , ITERATOR   = __webpack_require__(51)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(28)
	  , createDesc      = __webpack_require__(36);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(58)
	  , ITERATOR  = __webpack_require__(51)('iterator')
	  , Iterators = __webpack_require__(45);
	module.exports = __webpack_require__(24).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(12)
	  , TAG = __webpack_require__(51)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(51)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(61);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(62), __esModule: true };

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(63);
	module.exports = __webpack_require__(24).Object.assign;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(23);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(64)});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(7)
	  , gOPS     = __webpack_require__(65)
	  , pIE      = __webpack_require__(66)
	  , toObject = __webpack_require__(5)
	  , IObject  = __webpack_require__(11)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(33)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 65 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 66 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _InputText = __webpack_require__(68);

	var _InputText2 = _interopRequireDefault(_InputText);

	var _Actions = __webpack_require__(69);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React = React;
	var Component = _React.Component;
	var _ReactRedux = ReactRedux;
	var connect = _ReactRedux.connect;


	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    onAddTodo: function onAddTodo(name) {
	      dispatch((0, _Actions.addTodoAction)(name));
	    }
	  };
	};

	exports.default = connect(null, mapDispatchToProps)(_InputText2.default);

/***/ },
/* 68 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var onAddTodo = _ref.onAddTodo;

	  var input = void 0;
	  return React.createElement(
	    'div',
	    null,
	    React.createElement(
	      'form',
	      { onSubmit: function onSubmit(e) {
	          e.preventDefault();
	          if (input.value) {
	            onAddTodo(input.value);
	            input.value = '';
	          }
	        } },
	      React.createElement('input', {
	        autoFocus: true,
	        ref: function ref(node) {
	          return input = node;
	        } }),
	      React.createElement(
	        'button',
	        null,
	        'Add Todo'
	      )
	    )
	  );
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var nextTodoId = 0;

	var addTodoAction = exports.addTodoAction = function addTodoAction(name) {
	  return {
	    type: 'ADD_TODO',
	    id: ++nextTodoId,
	    name: name
	  };
	};

	var toggleTodoAction = exports.toggleTodoAction = function toggleTodoAction(id) {
	  return {
	    type: 'TOGGLE_TODO',
	    id: id
	  };
	};

	var changeFilterAction = exports.changeFilterAction = function changeFilterAction(filter) {
	  return {
	    type: 'SET_VISIBILITY_FILTER',
	    filter: filter
	  };
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FilterLink = __webpack_require__(71);

	var _FilterLink2 = _interopRequireDefault(_FilterLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	  var onFilterChange = _ref.onFilterChange;
	  var visibilityFilter = _ref.visibilityFilter;

	  return React.createElement(
	    'div',
	    { style: { color: 'blue' } },
	    React.createElement(
	      _FilterLink2.default,
	      { filter: 'SHOW_ALL' },
	      'Show All'
	    ),
	    ' ',
	    React.createElement(
	      _FilterLink2.default,
	      { filter: 'COMPLETED' },
	      'Show Completed'
	    ),
	    ' ',
	    React.createElement(
	      _FilterLink2.default,
	      { filter: 'TODO' },
	      'Show Todo'
	    )
	  );
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Link = __webpack_require__(72);

	var _Link2 = _interopRequireDefault(_Link);

	var _Actions = __webpack_require__(69);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ReactRedux = ReactRedux;
	var connect = _ReactRedux.connect;


	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    active: ownProps.filter === state.visibilityFilter
	  };
	};
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    onClick: function onClick() {
	      dispatch((0, _Actions.changeFilterAction)(ownProps.filter));
	    }
	  };
	};

	exports.default = connect(mapStateToProps, mapDispatchToProps)(_Link2.default);

/***/ },
/* 72 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var children = _ref.children;
	  var onClick = _ref.onClick;
	  var active = _ref.active;

	  if (active) return React.createElement(
	    'span',
	    null,
	    children
	  );
	  return React.createElement(
	    'a',
	    {
	      style: { textDecoration: 'underline', cursor: 'pointer' },
	      onClick: onClick },
	    children
	  );
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(60);

	var _extends3 = _interopRequireDefault(_extends2);

	var _todoItem = __webpack_require__(74);

	var _todoItem2 = _interopRequireDefault(_todoItem);

	var _Actions = __webpack_require__(69);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ReactRedux = ReactRedux;
	var connect = _ReactRedux.connect;


	var filterTodos = function filterTodos(allTodos, filter) {
	  switch (filter) {
	    case 'SHOW_ALL':
	      return allTodos;
	    case 'COMPLETED':
	      return allTodos.filter(function (t) {
	        return t.completed;
	      });
	    case 'TODO':
	      return allTodos.filter(function (t) {
	        return !t.completed;
	      });
	    default:
	      return allTodos;
	  }
	};
	var mapStateToProps = function mapStateToProps(state) {
	  var todos = state.todos;
	  var visibilityFilter = state.visibilityFilter;

	  return {
	    todos: filterTodos(todos, visibilityFilter)
	  };
	};
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    onTodoClick: function onTodoClick(id) {
	      dispatch((0, _Actions.toggleTodoAction)(id));
	    }
	  };
	};
	var List = function List(_ref) {
	  var todos = _ref.todos;
	  var onTodoClick = _ref.onTodoClick;

	  return React.createElement(
	    'ul',
	    null,
	    todos.map(function (todoItem) {
	      return React.createElement(_todoItem2.default, (0, _extends3.default)({ key: todoItem.id
	      }, todoItem, {
	        onClick: function onClick() {
	          return onTodoClick(todoItem.id);
	        } }));
	    })
	  );
	};

	exports.default = connect(mapStateToProps, mapDispatchToProps)(List);

/***/ },
/* 74 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var completed = _ref.completed;
	  var name = _ref.name;
	  var onClick = _ref.onClick;

	  var tick = completed ? React.createElement(
	    "span",
	    null,
	    " ✓"
	  ) : null;
	  return React.createElement(
	    "li",
	    { onClick: onClick },
	    name,
	    tick
	  );
	};

/***/ }
/******/ ]);