export const identity = (x) => x;
export const addb = (x, y) => x + y;
export const add = (...num) => num.reduce((acc, curr) => acc + curr, 0);
export const addRecurse = (...num) =>
  num.length === 0 ? 0 : num[0] + addRecurse(...num.slice(1));
export const subb = (x, y) => x - y;
export const sub = (...num) => num.reduce((diff, curr) => diff - curr);
export const mulb = (x, y) => x * y;
export const mulRecurse = (...num) =>
  num.length === 0
    ? 0
    : num.length === 1
    ? num[0]
    : num[0] * mulRecurse(...num.slice(1));
export const mul = (...num) => num.reduce((product, curr) => product * curr);
export const minb = (x, y) => Math.min(x, y);
export const minRecurse = (...num) =>
  num.length === 0
    ? NaN
    : num.length === 2
    ? Math.min(...num)
    : Math.min(num[0], minRecurse(Math.min(num[0], num[1]), ...num.slice(2)));
export const min = (...num) => Math.min(...num);
export const maxb = (x, y) => Math.max(x, y);
export const maxRecurse = (...num) =>
  num.length === 0
    ? NaN
    : num.length === 2
    ? Math.max(...num)
    : Math.max(num[0], maxRecurse(...num.slice(1)));
export const max = (...num) => Math.max(...num);
export const not = (func) => (x) => !func(x);
export const acc =
  (func, initial = 0) =>
  (...num) =>
    num.reduce(func, initial);
export const accPartial =
  (func, start, end) =>
  (...num) => [
    ...num.slice(0, start),
    func(...num.slice(start, end)),
    ...num.slice(end),
  ];
export const accRecurse = (func, initial = 0) => {
  const recurse = (acc, [currentNum, ...restNum]) =>
    currentNum === undefined ? acc : recurse(func(acc, currentNum), restNum);
  return (...num) => recurse(initial, num);
};

export const fill = (x) => Array(x).fill(x);
export const fillRecurse = (num, index = 0) =>
  index >= num ? [] : [num, ...fillRecurse(num, index + 1)];
export const set = (...num) => [...new Set(num)];
export const identityf = (x) => x;
export const addf = (x) => (y) => x + y;
export const liftf = (func) => (x) => (y) => func(x, y);
export const pure = (x, y, z) => {
  function impure(x) {
    y++;
    z = x * y;
  }
  impure(x);
  return [y, z];
};
export const curryb = (func, x) => (y) => func(x, y);
export const curry =
  (func, ...num) =>
  (...extra) =>
    func(...num, ...extra);
export const inc = (x) => x + 1;
export const twiceUnary = (func) => (x) => func(x, x);
export const doubl = (x) => twiceUnary(addb)(x);
export const square = (x) => twiceUnary(mulb)(x);
export const twice =
  (func) =>
  (...num) =>
    func(...num) * 2;
export const reverseb = (func) => (x, y) => func(y, x);
export const reverse =
  (func) =>
  (...num) =>
    func(...num.reverse()); // TODO find immutable method
export const composeuTwo = (func1, func2) => (x) => func2(func1(x));
export const composeu = (...funcs) =>
  funcs.reduce((acc, func) => (x) => func(acc(x)));
export const composeb = (func1, func2) => (x, y, z) => func2(func1(x, y), z);
export const compose =
  (...funcs) =>
  (...args) =>
    funcs.reduce((result, func, index) => {
      const flattenedArgs = Array.isArray(result) ? result.flat() : [result];
      const nextResult = func(...flattenedArgs);
      return index === funcs.length - 1 ? nextResult : [nextResult];
    }, args);
export const limitb = (func, limit) => {
  let count = 0;
  return (x, y) => {
    while (count < limit) {
      count++;
      return func(x, y);
    }
  };
};
export const limit = (func, limit) => {
  let count = 0;
  return (...args) => {
    while (count < limit) {
      count++;
      return func(...args);
    }
  };
};

export function* genFrom(x = 0) {
  while (true) {
    yield x++;
  }
}

export function* genTo(func, lmt) {
  let count = 0;
  for (const value of func) {
    if (count >= lmt) {
      return;
    }

    yield value;
    count++;
  }
}

export function* genFromTo(initial = 0, limit) {
  let count = initial;
  while (count < limit) {
    yield initial++;
    count++;
  }
}

export function* elementGen(arr, gen) {
  for (const val of gen) {
    yield arr[val];
  }
}

export function* element(arr, gen) {
  if (!!gen) {
    for (const val of gen) {
      yield arr[val];
    }
  } else {
    const limit = arr.length;
    let count = 0;
    while (count < limit) {
      yield arr[count];
      count++;
    }
  }
}

export function* collect(gen, arr) {
  for (const val of gen) {
    yield val;
    arr.push(val);
  }
}

export function* filter(gen, predicate) {
  for (const val of gen) {
    if (predicate(val)) {
      yield val;
    }
  }
}

export function* filterTail(gen, predicate) {
  // code
}

export function* concatTwo(gen1, gen2) {
  for (const val1 of gen1) {
    if (val1.done) break;
    yield val1;
  }

  for (const val2 of gen2) {
    yield val2;
  }
}

export function* concat(...gens) {
  for (let gen of gens) {
    for (let val of gen) {
      yield val;
    }
  }
}

export function* gensymf(symbol) {
  let i = 0;
  while (true) {
    i++;
    yield `${symbol}${i}`;
  }
}

export function gensymff(unary, seed = 0) {
  return function* innerGen(symbol) {
    let i = unary(seed);
    while (true) {
      yield `${symbol}${i}`;
      i = unary(i);
    }
  };
}

export function* fibonaccif(first, second) {
  while (true) {
    let val = first;
    yield val;
    val = first + second;
    first = second;
    second = val;
  }
}

export function counter(i) {
  function up() {
    i++;
    return i;
  }

  function down() {
    i--;
    return i;
  }

  return { up, down };
}

export function revocableb(binary) {
  let status;

  function invoke(a, b) {
    if (status !== "revoke") {
      return binary(a, b);
    } else {
      return;
    }
  }

  function revoke() {
    status = "revoke";
  }

  return { revoke, invoke };
}

export function revocable(func) {
  let status;

  function invoke(...arg) {
    if (status !== "revoke") {
      return func(...arg);
    } else {
      return;
    }
  }

  function revoke() {
    status = "revoke";
  }

  return { revoke, invoke };
}

export const extract = (arr, prop) => arr.map((element) => element[prop]);

export function m(value, source = value.toString()) {
  return { value: value, source: source.toString() };
}

export function addmTwo(m1, m2) {
  // console.log(m1)

  let value = m1.value + m2.value;
  let source = `(${m1.source.toString()}+${m2.source.toString()})`;
  return { value, source };
}
export function addm(...ms) {
  let values = 0;
  let sources = "";
  ms.forEach((element) => {
    values += element.value;
    sources =
      sources !== "" ? sources + `+${element.source}` : `${element.source}`;
  });

  return { value: values, source: "(" + sources + ")" };
}

export function liftmbM(binary, op) {
  return (a, b) => {
    let value, source;
    if (typeof a === "object" && a.hasOwnProperty("value")) {
      value = binary(a.value, b.value);
      source = `(${a.source}${op}${b.source})`;
    } else {
      value = binary(a, b);
      source = `(${a}${op}${b})`;
    }
    return { value, source };
  };
}
export function liftm(func, op) {
  return (...args) => {
    let valueArray = [];
    let sourceArray = [];

    args.forEach((el) => {
      if (typeof el === "object" && el.hasOwnProperty("value")) {
        valueArray = [...valueArray, el.value];
        sourceArray = [...sourceArray, el.source];
      } else {
        valueArray = [...valueArray, el];
        sourceArray = [...sourceArray, el.toString()];
      }
    });

    const value = valueArray.reduce((acc, curr) => func(acc, curr));
    const source = "(" + sourceArray.join(op) + ")";

    return { value, source };
  };
}

export function exp(arr) {
  if (!Array.isArray(arr)) {
    return arr;
  }

  if (arr.length > 1 && typeof arr[0] === "function") {
    const [func, ...rest] = arr;
    return func(...rest);
  }
}

/**
 * Evaluate nested array expressions.
 *
 * @param {any} value - The nested array expression.
 * @returns {any} - The result of the evaluation.
 */

export function expn(value) {
  if (!Array.isArray(value)) return value;

  const flattenArray = (arr) =>
    arr.reduce(
      (acc, curr) =>
        acc.concat(Array.isArray(curr) ? flattenArray(curr) : curr),
      [],
    );

  const flattened = flattenArray(value);

  return flattened.reduceRight((acc, curr) => {
    if (typeof curr === "function") {
      return curr(acc);
    } else {
      return [curr, acc];
    }
  });
}
