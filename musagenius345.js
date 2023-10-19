"use strict";
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.genTo =
  exports.genFrom =
  exports.limit =
  exports.limitb =
  exports.compose =
  exports.composeTwo =
  exports.composeb =
  exports.composeu =
  exports.composeuTwo =
  exports.reverse =
  exports.reverseb =
  exports.twice =
  exports.square =
  exports.doubl =
  exports.twiceUnary =
  exports.inc =
  exports.curry =
  exports.curryb =
  exports.pure =
  exports.liftf =
  exports.addf =
  exports.identityf =
  exports.set =
  exports.fillRecurse =
  exports.fill =
  exports.accRecurse =
  exports.accPartial =
  exports.acc =
  exports.not =
  exports.maxRecurse =
  exports.minRecurse =
  exports.mulRecurse =
  exports.addRecurse =
  exports.max =
  exports.min =
  exports.mul =
  exports.sub =
  exports.add =
  exports.maxb =
  exports.minb =
  exports.mulb =
  exports.subb =
  exports.addb =
  exports.identity =
    void 0;
var identity = function (x) {
  return x;
};
exports.identity = identity;
var addb = function (a, b) {
  return a + b;
};
exports.addb = addb;
var subb = function (a, b) {
  return a - b;
};
exports.subb = subb;
var mulb = function (a, b) {
  return a * b;
};
exports.mulb = mulb;
var minb = function (a, b) {
  return Math.min(a, b);
};
exports.minb = minb;
var maxb = function (a, b) {
  return Math.max(a, b);
};
exports.maxb = maxb;
// export const add = (...nums) => nums.reduce((sum, num) => sum + num, 0)
//
var add = function () {
  var nums = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    nums[_i] = arguments[_i];
  }
  return nums.reduce(function (sum, num) {
    return sum + num;
  }, 0);
};
exports.add = add;
var sub = function () {
  var nums = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    nums[_i] = arguments[_i];
  }
  return nums.reduce(function (diff, num) {
    return diff - num;
  });
};
exports.sub = sub;
var mul = function () {
  var nums = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    nums[_i] = arguments[_i];
  }
  return nums.reduce(function (product, num) {
    return product * num;
  });
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
  return Math.max.apply(Math, nums.flat(Infinity));
};
exports.max = max;
var addRecurse = function () {
  var nums = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    nums[_i] = arguments[_i];
  }
  if (nums.length === 0) {
    return 0;
  } else {
    var first = nums[0],
      rest = nums.slice(1);
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
  } else if (nums.length === 1) {
    return nums[0];
  } else {
    var first = nums[0],
      rest = nums.slice(1);
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
  var first = nums[0],
    rest = nums.slice(1);
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
  } else if (nums.length === 1) {
    return nums[0];
  } else {
    var first = nums[0],
      rest = nums.slice(1);
    var maxRest = exports.maxRecurse.apply(void 0, rest);
    return Math.max(first, maxRest);
  }
};
exports.maxRecurse = maxRecurse;
var not = function (func) {
  return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return !func.apply(void 0, args);
  };
};
exports.not = not;
var acc = function (func, intial) {
  if (intial === void 0) {
    intial = 0;
  }
  return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return args.reduce(func, intial);
  };
};
exports.acc = acc;
var accPartial = function (func, start, end) {
  return function () {
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
  };
};
exports.accPartial = accPartial;
var accRecurse = function (func, initial) {
  if (initial === void 0) {
    initial = 0;
  }
  var recurse = function (accumulator, _a) {
    var currentArg = _a[0],
      restArgs = _a.slice(1);
    return currentArg === undefined
      ? accumulator
      : recurse(func(accumulator, currentArg), restArgs);
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
var fill2 = function (num) {
  return Array(num).fill(num);
};
var fill = function (num) {
  return Array.from({ length: num }, function () {
    return num;
  });
};
exports.fill = fill;
function fillRecurse_2(num, array) {
  if (array === void 0) {
    array = [];
  }
  if (array.length >= num) {
    return array;
  }
  array.push(num);
  return fillRecurse_2(num, array);
}
function fillRecurse_3(num, array) {
  if (array === void 0) {
    array = [];
  }
  if (array.length >= num) {
    return array;
  }
  return fillRecurse_3(num, array.concat(num));
}
function fillRecurse_4(num, index) {
  if (index === void 0) {
    index = 0;
  }
  if (index >= num) {
    return [];
  }
  return [num].concat(fillRecurse_4(num, index + 1));
}
function fillRecurse(num, current, array) {
  if (current === void 0) {
    current = num;
  }
  if (array === void 0) {
    array = [];
  }
  if (current <= 0) {
    return array;
  }
  return fillRecurse(
    num,
    current - 1,
    __spreadArray(__spreadArray([], array, true), [num], false),
  );
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
var identityf = function (arg) {
  return arg;
};
exports.identityf = identityf;
var addf = function (a) {
  return function (b) {
    return a + b;
  };
};
exports.addf = addf;
var liftf = function (binary) {
  return function (a) {
    return function (b) {
      return binary(a, b);
    };
  };
};
exports.liftf = liftf;
var pure = function (x, y, z) {
  if (y === void 0) {
    y = 5;
  }
  function impure(x) {
    y++;
    z = x * y;
  }
  impure(x);
  return [y, z];
};
exports.pure = pure;
var curryb = function (binary, num1) {
  return function (num2) {
    return binary(num1, num2);
  };
};
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
    return func.apply(
      void 0,
      __spreadArray(__spreadArray([], outer, false), inner, false),
    );
  };
};
exports.curry = curry;
var inc = function (x) {
  return x + 1;
};
exports.inc = inc;
var twiceUnary = function (binary) {
  return function (x) {
    return binary(x, x);
  };
};
exports.twiceUnary = twiceUnary;
exports.doubl = (0, exports.twiceUnary)(function (a, b) {
  return a + b;
});
var square = function (num) {
  return (0, exports.twiceUnary)(exports.mulb)(num);
};
exports.square = square;
var twice = function (func) {
  return function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      num[_i] = arguments[_i];
    }
    return func.apply(void 0, num) * 2;
  };
};
exports.twice = twice;
var reverseb = function (func) {
  return function (a, b) {
    return func(b, a);
  };
};
exports.reverseb = reverseb;
var reverse = function (func) {
  return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return func.apply(void 0, args.reverse());
  };
};
exports.reverse = reverse;
var composeuTwo = function (unary1, unary2) {
  return function (arg) {
    return unary2(unary1(arg));
  };
};
exports.composeuTwo = composeuTwo;
var composeu = function () {
  var funcs = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    funcs[_i] = arguments[_i];
  }
  return funcs.reduce(function (accumulator, func) {
    return function (x) {
      return func(accumulator(x));
    };
  });
};
exports.composeu = composeu;
var composeb = function (binary1, binary2) {
  return function (a, b, c) {
    return binary2(binary1(a, b), c);
  };
};
exports.composeb = composeb;
var composeTwo = function (func1, func2) {
  return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return func2(func1.apply(void 0, args));
  };
};
exports.composeTwo = composeTwo;
var compose = function () {
  var functions = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    functions[_i] = arguments[_i];
  }
  return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return functions.reduce(function (result, fn) {
      return [fn.apply(void 0, result)];
    }, args)[0];
  };
};
exports.compose = compose;
var limitb = function (binary, lmt) {
  var count = 0;
  return function (a, b) {
    if (count < lmt) {
      count++;
      return binary(a, b);
    }
    return undefined;
  };
};
exports.limitb = limitb;
var limit = function (binary, lmt) {
  var count = 0;
  return function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      nums[_i] = arguments[_i];
    }
    if (count < lmt) {
      count++;
      return binary.apply(void 0, nums);
    }
    return undefined;
  };
};
exports.limit = limit;
function genFrom(x) {
  if (x === void 0) {
    x = 0;
  }
  return __generator(this, function (_a) {
    switch (_a.label) {
      case 0:
        if (!true) return [3 /*break*/, 2];
        return [4 /*yield*/, x++];
      case 1:
        _a.sent();
        return [3 /*break*/, 0];
      case 2:
        return [2 /*return*/];
    }
  });
}
exports.genFrom = genFrom;
var genTo = function (gen, lmt) {
  var count = 0;
  var value = gen();
  while (count >= lmt) {
    return value;
    count++;
  }
};
exports.genTo = genTo;
