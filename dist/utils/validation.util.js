"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.required = exports.getValidationRules = exports.checkPatternsValidityAsync = exports.checkPatternsValidity = void 0;
var _lodash = _interopRequireWildcard(require("lodash"));
var _constants = require("../constants");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                              Copyright 2022 Iguazio Systems Ltd.
                                                                                                                                                                                                                                                                                                                                                                                              Licensed under the Apache License, Version 2.0 (the "License") with
                                                                                                                                                                                                                                                                                                                                                                                              an addition restriction as set forth herein. You may not use this
                                                                                                                                                                                                                                                                                                                                                                                              file except in compliance with the License. You may obtain a copy of
                                                                                                                                                                                                                                                                                                                                                                                              the License at http://www.apache.org/licenses/LICENSE-2.0.
                                                                                                                                                                                                                                                                                                                                                                                              Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                              distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                              WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
                                                                                                                                                                                                                                                                                                                                                                                              implied. See the License for the specific language governing
                                                                                                                                                                                                                                                                                                                                                                                              permissions and limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                              In addition, you may not use the software for any purposes that are
                                                                                                                                                                                                                                                                                                                                                                                              illegal under applicable law, and the grant of the foregoing license
                                                                                                                                                                                                                                                                                                                                                                                              under the Apache 2.0 license is conditioned upon your compliance with
                                                                                                                                                                                                                                                                                                                                                                                              such restriction.
                                                                                                                                                                                                                                                                                                                                                                                              */
////// PRIVATE METHODS ///////
/**
 * Converts characters string to readable format
 * Note: converts Hyphens to En Dashes, replaces one space with comma and space,
 *       replaces letter `s` with `spaces` word
 * @param {string} chars - characters to convert
 * @returns {string} - converted string
 * @example
 * convertToLabel('a-z A-Z - _ *');
 * // => 'a–z, A–Z, –, _, *'
 */
var convertToLabel = function convertToLabel(chars) {
  return chars.replace(/-/g, '–').replace(/\s/g, ', ').replace(/\bs\b/);
};

/**
 * Converts characters string to valid RegExp string that will be placed into RegExp pattern
 * @param {string} chars - characters to convert
 * @returns {string} - converted string
 * @example
 * convertToPattern('a-z A-Z - _ *');
 * // => 'a-zA-Z\-\_\*'
 */
var convertToPattern = function convertToPattern(chars) {
  return chars.split(' ').map(function (patternItem) {
    return patternItem.length === 1 ? '\\' + patternItem : patternItem;
  }).join('');
};

/**
 * Checks whether there is at least one failed validation rule.
 * @returns {boolean} `true` in case there is at least one failed validation rule, or `false` otherwise.
 */
var hasInvalidRule = function hasInvalidRule(newRules) {
  return _lodash.default.some(newRules, ['isValid', false]);
};

////// PUBLIC METHODS ///////

/**
 * validate required field value
 * @param {string} validationMsg Custom validationMsg. Defualt to "Required"
 * @returns {function}  Function that accepts a value and return an array [isFieldValid, validationMsg]
 */

var required = function required() {
  var validationMsg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Required';
  return function (value) {
    var isValid = value.trim() !== '' && typeof value === 'string';
    return [isValid, validationMsg];
  };
};

/**
 * Checks whether there is at least one failed validation rule.
 * @function checkPatternsValidity
 * @param {Array} validationRules Array of Validation Rule Objects {name: "", lable: "", pattren: [Function || Regex]}
 * @param {string} value Field value to check validity
 * @param {boolean} required Specified if the value should be validated
 * @returns {Array} [validationRules, isFieldValid] New validationRules With `isValid` property, `true` in case there is at least one failed validation rule, or `false` otherwise.
 */
exports.required = required;
var checkPatternsValidity = function checkPatternsValidity(validationRules) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var required = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var newRules = !required && (0, _lodash.isEmpty)(value) ? validationRules : validationRules.filter(function (rule) {
    return !rule.async;
  }).map(function (rule) {
    return _objectSpread(_objectSpread({}, rule), {}, {
      isValid: _lodash.default.isFunction(rule.pattern) ? rule.pattern(value) : /* else, it is a RegExp */rule.pattern.test(value)
    });
  });
  return [newRules, !hasInvalidRule(newRules)];
};
exports.checkPatternsValidity = checkPatternsValidity;
var checkPatternsValidityAsync = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(validationRules, value) {
    var _checkPatternsValidit, _checkPatternsValidit2, newRules, asyncRules, allRules;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _checkPatternsValidit = checkPatternsValidity(validationRules, value), _checkPatternsValidit2 = _slicedToArray(_checkPatternsValidit, 1), newRules = _checkPatternsValidit2[0];
          _context2.next = 3;
          return Promise.all(validationRules.filter(function (rule) {
            return rule.async;
          }).map( /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(rule) {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.t0 = _objectSpread;
                    _context.t1 = _objectSpread({}, rule);
                    _context.t2 = {};
                    _context.next = 5;
                    return rule.pattern(value);
                  case 5:
                    _context.t3 = _context.sent;
                    _context.t4 = {
                      isValid: _context.t3
                    };
                    return _context.abrupt("return", (0, _context.t0)(_context.t1, _context.t2, _context.t4));
                  case 8:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x3) {
              return _ref2.apply(this, arguments);
            };
          }()));
        case 3:
          asyncRules = _context2.sent;
          allRules = newRules.concat(asyncRules);
          return _context2.abrupt("return", [allRules, !hasInvalidRule(allRules)]);
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function checkPatternsValidityAsync(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.checkPatternsValidityAsync = checkPatternsValidityAsync;
var generateRule = {
  beginWith: function beginWith(chars) {
    return {
      name: 'begin',
      label: _constants.validation.BEGIN_WITH + ': ' + convertToLabel(chars),
      pattern: new RegExp('^[' + convertToPattern(chars) + ']')
    };
  },
  beginNotWith: function beginNotWith(chars) {
    return {
      name: 'beginNot',
      label: _constants.validation.BEGIN_NOT_WITH + ': ' + convertToLabel(chars),
      pattern: new RegExp('^[^' + convertToPattern(chars) + ']')
    };
  },
  endWith: function endWith(chars) {
    return {
      name: 'end',
      label: _constants.validation.END_WITH + ': ' + convertToLabel(chars),
      pattern: new RegExp('[' + convertToPattern(chars) + ']$')
    };
  },
  endNotWith: function endNotWith(chars) {
    return {
      name: 'endNot',
      label: _constants.validation.END_NOT_WITH + ': ' + convertToLabel(chars),
      pattern: new RegExp('[^' + convertToPattern(chars) + ']$')
    };
  },
  beginEndWith: function beginEndWith(chars) {
    var convertedPattern = convertToPattern(chars);
    return {
      name: 'beginEnd',
      label: _constants.validation.BEGIN_END_WITH + ': ' + convertToLabel(chars),
      pattern: new RegExp('^([' + convertedPattern + '].*)?[' + convertedPattern + ']$')
    };
  },
  beginEndNotWith: function beginEndNotWith(chars) {
    var convertedPattern = convertToPattern(chars);
    return {
      name: 'beginEndNot',
      label: _constants.validation.BEGIN_END_NOT_WITH + ': ' + convertToLabel(chars),
      pattern: new RegExp('^([^' + convertedPattern + '].*)?[^' + convertedPattern + ']$')
    };
  },
  onlyAtTheBeginning: function onlyAtTheBeginning(chars) {
    var convertedPattern = convertToPattern(chars);
    return {
      name: 'onlyAtTheBeginning',
      label: _constants.validation.ONLY_AT_THE_BEGINNING + ': ' + convertToLabel(chars),
      pattern: new RegExp('^([' + convertedPattern + '])?[^' + convertedPattern + ']+$')
    };
  },
  validCharacters: function validCharacters(chars) {
    return {
      name: 'validCharacters',
      label: _constants.validation.VALID_CHARACTERS + ': ' + convertToLabel(chars),
      pattern: new RegExp('^[' + convertToPattern(chars) + ']+$')
    };
  },
  noConsecutiveCharacters: function noConsecutiveCharacters(chars) {
    var convertedPattern = chars.split(' ').map(function (charPair) {
      var charsPairArray = charPair.split('');
      return "(?!.*\\".concat(charsPairArray[0], "\\").concat(charsPairArray[1], ")");
    }).join('');
    return {
      name: 'noConsecutiveCharacters',
      label: _constants.validation.NO_CONSECUTIVE_CHARACTER + ': ' + convertToLabel(chars),
      pattern: new RegExp('^' + convertedPattern)
    };
  },
  maxLengthBetweenDelimiters: function maxLengthBetweenDelimiters(delimiter, maxLength, delimiterDescription) {
    return {
      name: 'labelsLength',
      label: "Max length between two ".concat(_lodash.default.defaultTo(delimiterDescription, delimiter), ": ").concat(maxLength),
      pattern: function pattern(value) {
        return value.split(delimiter).every(function (item) {
          return item.length >= 1 && item.length <= maxLength;
        });
      }
    };
  },
  mustNotBe: function mustNotBe(words) {
    var wordsArray = words.split(' ');
    return {
      name: 'mustNotBe',
      label: _constants.validation.MUST_NOT_BE + ': ' + convertToLabel(words),
      pattern: function pattern(value) {
        return !_lodash.default.includes(wordsArray, value);
      }
    };
  },
  length: function length(options) {
    var min = Number.isSafeInteger(options.min) ? options.min : 0;
    var max = Number.isSafeInteger(options.max) ? options.max : '';
    if (min || max) {
      var label = 'Length – ' + (min ? 'min: ' + options.min + '\xa0\xa0' : '') + (max ? 'max: ' + options.max : '');
      return {
        name: 'length',
        label: label,
        pattern: new RegExp('^[\\S\\s]{' + min + ',' + max + '}$')
      };
    }
  },
  required: function required() {
    return {
      name: 'required',
      label: _constants.validation.REQUIRED,
      pattern: new RegExp('\\S')
    };
  }
};

//const commonRules = {
// email: [
//   generateRule.beginEndNotWith('@ .'),
//   {
//     name: 'exactlyOne',
//     label: ValidationConstants.MUST_CONTAIN_EXACTLY_ONE + ': @',
//     pattern: /^[^@]+@[^@]+$/
//   },
//   {
//     name: 'dotAfterAt',
//     label: ValidationConstants.MUST_HAVE_DOT_AFTER_AT,
//     pattern: /@.+\..+$/
//   }
// ]
//}
var validationRules = {
  artifact: {
    name: [generateRule.validCharacters('a-z A-Z 0-9 - _ .'), generateRule.beginEndWith('a-z A-Z 0-9'), generateRule.length({
      max: 253
    }), generateRule.required()]
  },
  feature: {
    sets: {
      tag: [generateRule.validCharacters('a-z A-Z 0-9 - _'), generateRule.beginEndWith('a-z A-Z 0-9'), generateRule.length({
        max: 56
      })]
    },
    vector: {
      name: [generateRule.validCharacters('a-z A-Z 0-9 - _ .'), generateRule.beginEndWith('a-z A-Z 0-9'), generateRule.length({
        max: 56
      }), generateRule.required()]
    }
  },
  function: {
    name: [generateRule.validCharacters('a-z A-Z 0-9 - .'), generateRule.beginEndWith('a-z A-Z 0-9'), generateRule.length({
      max: 63
    }), generateRule.required()]
  },
  common: {
    name: [generateRule.validCharacters('a-z A-Z 0-9 - _ .'), generateRule.beginEndWith('a-z A-Z 0-9'), generateRule.length({
      max: 63
    }), generateRule.required()],
    tag: [generateRule.validCharacters('a-z A-Z 0-9 - _ .'), generateRule.beginEndWith('a-z A-Z 0-9'), generateRule.length({
      max: 56
    })],
    combobox: [generateRule.required()]
  },
  project: {
    name: [generateRule.validCharacters('a-z 0-9 -'), generateRule.beginWith('a-z'), generateRule.endWith('a-z 0-9'), generateRule.length({
      max: 63
    }), generateRule.required()]
  },
  environmentVariables: {
    secretName: [generateRule.validCharacters('a-z A-Z 0-9 - _ .'), generateRule.beginEndWith('a-z A-Z 0-9'), generateRule.noConsecutiveCharacters('.., .–, –.'), generateRule.maxLengthBetweenDelimiters(/[\.\-\_]/, 63, 'periods'), generateRule.length({
      max: 253
    }), generateRule.required()],
    secretKey: [generateRule.validCharacters('a-z A-Z 0-9 - _ .'), generateRule.beginNotWith('.'), generateRule.length({
      max: 253
    })]
  }
};

/**
 * Returns the list of validation rules for `type`, optionally appending provided additional rules.
 * @function getValidationRules
 * @param {string} type - The property path to the list of validation rules.
 * @param {Array.<Object>} [additionalRules] - Additional rules to append.
 * @returns {Array.<Object>} the rule list of type `type` with `additionalRules` appended to it if provided.
 */
var getValidationRules = function getValidationRules(type, additionalRules) {
  return _lodash.default.chain(validationRules).get(type).defaultTo([]).cloneDeep().concat(_lodash.default.defaultTo(additionalRules, [])).value();
};
exports.getValidationRules = getValidationRules;