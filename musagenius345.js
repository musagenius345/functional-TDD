"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.doubl = exports.twiceUnary = exports.inc = exports.curry = exports.curryb = exports.pure = exports.liftf = exports.addf = exports.identityf = exports.set = exports.fillRecurse = exports.fill = exports.accRecurse = exports.accPartial = exports.acc = exports.not = exports.maxRecurse = exports.minRecurse = exports.mulRecurse = exports.addRecurse = exports.max = exports.min = exports.mul = exports.sub = exports.add = exports.maxb = exports.minb = exports.mulb = exports.subb = exports.addb = exports.identity = void 0;
var identity = function (x) { return x; };
exports.identity = identity;
var addb = function (a, b) { return a + b; };
exports.addb = addb;
var subb = function (a, b) { return a - b; };
exports.subb = subb;
var mulb = function (a, b) { return a * b; };
exports.mulb = mulb;
var minb = function (a, b) { return Math.min(a, b); };
exports.minb = minb;
var maxb = function (a, b) { return Math.max(a, b); };
exports.maxb = maxb;
var add = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (sum, num) { return sum + num; }, 0);
};
exports.add = add;
var sub = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (diff, num) { return diff - num; });
};
exports.sub = sub;
var mul = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (product, num) { return product * num; });
};
exports.mul = mul;
var min = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return Math.min.apply(Math, nums);
};
exports.min = min;
var max = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return Math.max.apply(Math, nums);
};
exports.max = max;
var addRecurse = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    if (nums.length === 0) {
        return 0;
    }
    else {
        var first = nums[0], rest = nums.slice(1);
        return first + exports.addRecurse.apply(void 0, rest);
    }
};
exports.addRecurse = addRecurse;
var mulRecurse = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    if (nums.length === 0) {
        return 0;
    }
    else if (nums.length === 1) {
        return nums[0];
    }
    else {
        var first = nums[0], rest = nums.slice(1);
        return first * exports.mulRecurse.apply(void 0, rest);
    }
};
exports.mulRecurse = mulRecurse;
var minRecurse = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    if (nums.length === 0) {
        return NaN;
    }
    var first = nums[0], rest = nums.slice(1);
    var minRest = rest.length > 0 ? exports.minRecurse.apply(void 0, rest) : NaN;
    return isNaN(minRest) || first < minRest ? first : minRest;
};
exports.minRecurse = minRecurse;
var maxRecurse = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    if (nums.length === 0) {
        return NaN;
    }
    else if (nums.length === 1) {
        return nums[0];
    }
    else {
        var first = nums[0], rest = nums.slice(1);
        var maxRest = exports.maxRecurse.apply(void 0, rest);
        return Math.max(first, maxRest);
    }
};
exports.maxRecurse = maxRecurse;
var not = function (func) { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return !func.apply(void 0, args);
}; };
exports.not = not;
var acc = function (func, intial) {
    if (intial === void 0) { intial = 0; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args.reduce(func, intial);
    };
};
exports.acc = acc;
var accPartial = function (func, start, end) { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var subset = args.slice(start, end);
    var result = func.apply(void 0, subset);
    var beginning = args.slice(0, start);
    var ending = args.slice(end);
    var accumulatedArgs = beginning.concat(result).concat(ending);
    return accumulatedArgs;
}; };
exports.accPartial = accPartial;
var accRecurse = function (func, initial) {
    if (initial === void 0) { initial = 0; }
    var recurse = function (accumulator, _a) {
        var currentArg = _a[0], restArgs = _a.slice(1);
        return currentArg === undefined ? accumulator : recurse(func(accumulator, currentArg), restArgs);
    };
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return recurse(initial, args);
    };
};
exports.accRecurse = accRecurse;
//export const fill = (num) => Array(num).fill(num)
var fill = function (num) {
    var arr = [];
    while (arr.length < num) {
        arr.push(num);
    }
    return arr;
};
exports.fill = fill;
var fill_2 = function (num) { return Array.from({ length: num }, function () { return num; }); };
function fillRecurse_2(num, array) {
    if (array === void 0) { array = []; }
    if (array.length >= num) {
        return array;
    }
    array.push(num);
    return fillRecurse_2(num, array);
}
function fillRecurse_3(num, array) {
    if (array === void 0) { array = []; }
    if (array.length >= num) {
        return array;
    }
    return fillRecurse_3(num, array.concat(num));
}
function fillRecurse_4(num, index) {
    if (index === void 0) { index = 0; }
    if (index >= num) {
        return [];
    }
    return [num].concat(fillRecurse_4(num, index + 1));
}
function fillRecurse(num, current, array) {
    if (current === void 0) { current = num; }
    if (array === void 0) { array = []; }
    if (current <= 0) {
        return array;
    }
    return fillRecurse(num, current - 1, __spreadArray(__spreadArray([], array, true), [num], false));
}
exports.fillRecurse = fillRecurse;
var set = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return __spreadArray([], new Set(args), true);
};
exports.set = set;
var identityf = function (arg) { return arg; };
exports.identityf = identityf;
var addf = function (a) { return function (b) { return a + b; }; };
exports.addf = addf;
var liftf = function (binary) { return function (a) { return function (b) { return binary(a, b); }; }; };
exports.liftf = liftf;
var pure = function (x, y, z) {
    if (y === void 0) { y = 5; }
    function impure(x) {
        y++;
        z = x * y;
    }
    impure(x);
    return [y, z];
};
exports.pure = pure;
var curryb = function (binary, num1) { return function (num2) { return binary(num1, num2); }; };
exports.curryb = curryb;
var curry = function (func) {
    var outer = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        outer[_i - 1] = arguments[_i];
    }
    return function () {
        var inner = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inner[_i] = arguments[_i];
        }
        return func.apply(void 0, __spreadArray(__spreadArray([], outer, false), inner, false));
    };
};
exports.curry = curry;
var inc = function (x) { return x + 1; };
exports.inc = inc;
var twiceUnary = function (binary) { return function (x) { return binary(x, x); }; };
exports.twiceUnary = twiceUnary;
exports.doubl = (0, exports.twiceUnary)(function (a, b) { return a + b; });
