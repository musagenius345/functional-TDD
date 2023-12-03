// import { describe.skip, it, expect, test } from '/data/data/com.termux/files/home/.local/share/pnpm/global/5/node_modules/vitest'
import {
  identity,
  addb,
  subb,
  mulb,
  minb,
  maxb,
  add,
  sub,
  mul,
  min,
  max,
  addRecurse,
  mulRecurse,
  minRecurse,
  maxRecurse,
  not,
  acc,
  accPartial,
  accRecurse,
  fill,
  fillRecurse,
  set,
  identityf,
  addf,
  liftf,
  pure,
  curryb,
  curry,
  inc,
  twiceUnary,
  doubl,
  square,
  twice,
  reverseb,
  reverse,
  composeuTwo,
  composeu,
  composeb,
  composeTwo,
  compose,
  limitb,
  limit,
  genFrom,
  genTo,
  genFromTo,
  elementGen,
  element,
  collect,
  filter,
  // filterTail,
  concatTwo,
  concat,
  // concatTail,
  gensymf,
  gensymff,
  fibonaccif,
  counter,
  revocableb,
  revocable,
  extract,
  m,
  addmTwo,
  addm,
  liftmbM,
  // liftmb,
  liftm,
  exp,
  expn,
  // addg,
  // liftg,
  // arrayg,
  // continuizeu,
  // continuize,
  // vector
} from "./fun-pro.js";

// Test suite for the identity function
describe("identity", () => {
  test("should return the argument unchanged", () => {
    const result = identity(3);
    expect(result).to.equal(3);
  });
});

// Test suite for the addb function
describe("addb", () => {
  test("should return the sum of two numbers", () => {
    const result = addb(3, 4);
    expect(result).to.equal(7);
  });
});

// Test suite for the subb function
describe("subb", () => {
  test("should return the difference of two numbers", () => {
    const result = subb(3, 4);
    expect(result).to.equal(-1);
  });
});

// Test suite for the mulb function
describe("mulb", () => {
  test("should return the product of two numbers", () => {
    const result = mulb(3, 4);
    expect(result).to.equal(12);
  });
});

// Test suite for the minb function
describe("minb", () => {
  test("should return the smaller of two numbers", () => {
    const result = minb(3, 4);
    expect(result).to.equal(3);
  });
});

// Test suite for the maxb function
describe("maxb", () => {
  test("should return the larger of two numbers", () => {
    const result = maxb(3, 4);
    expect(result).to.equal(4);
  });
});

// Test suite for the add function
describe("add", () => {
  test("should return the sum of any number of arguments", () => {
    const result = add(1, 2, 4);
    expect(result).to.equal(7);
  });

  test("should return 0 for no arguments", () => {
    const result = add();
    expect(result).to.equal(0);
  });

  test("should handle negative numbers", () => {
    const result = add(-5, 10, -15);
    expect(result).to.equal(-10);
  });

  test("should handle floating-point numbers", () => {
    const result = add(1.5, 2.5);
    expect(result).to.equal(4);
  });
});

// Test suite for the sub function
describe("sub", () => {
  test("should return the difference of any number of arguments", () => {
    const result = sub(1, 2, 4);
    expect(result).to.equal(-5);
  });

  // test('should return 0 for no arguments', () => {
  //   const result = sub();
  //   expect(result).to.equal(0);
  // });

  test("should handle negative numbers", () => {
    const result = sub(10, -5, -15);
    expect(result).to.equal(30);
  });

  test("should handle floating-point numbers", () => {
    const result = sub(5.5, 2.5);
    expect(result).to.equal(3);
  });
});

// Test suite for the mul function
describe("mul", () => {
  test("should return the product of any number of arguments", () => {
    const result = mul(1, 2, 4);
    expect(result).to.equal(8);
  });

  // test('should return 0 for no arguments', () => {
  //   const result = mul();
  //   expect(result).to.equal(0);
  // });

  test("should handle negative numbers", () => {
    const result = mul(-2, 5, -3);
    expect(result).to.equal(30);
  });

  test("should handle floating-point numbers", () => {
    const result = mul(2.5, 0.5);
    expect(result).to.equal(1.25);
  });
});

// Test suite for the min function
describe("min", () => {
  test("should return the smallest of any number of arguments", () => {
    const result = min(1, 2, 4);
    expect(result).to.equal(1);
  });

  // test('should return NaN for no arguments', () => {
  //   const result = min();
  //   expect(Number.isNaN(result)).to.equal(true);
  // })

  test("should handle negative numbers", () => {
    const result = min(-5, 10, -15);
    expect(result).to.equal(-15);
  });

  test("should handle floating-point numbers", () => {
    const result = min(1.5, 2.5, -1.5);
    expect(result).to.equal(-1.5);
  });
});

// Test suite for the max function
describe("max", () => {
  test("should return the largest of any number of arguments", () => {
    const result = max(1, 2, 4);
    expect(result).to.equal(4);
  });

  // test('should return NaN for no arguments', () => {
  //   const result = max();
  //   expect(Number.isNaN(result)).to.equal(true);
  // });

  test("should handle negative numbers", () => {
    const result = max(-5, 10, -15);
    expect(result).to.equal(10);
  });

  test("should handle floating-point numbers", () => {
    const result = max(1.5, 2.5, -1.5);
    expect(result).to.equal(2.5);
  });
});

// Test suite for the addRecurse function
describe("addRecurse", () => {
  test("should return the sum of any number of arguments using recursion", () => {
    const result = addRecurse(1, 2, 4);
    expect(result).to.equal(7);
  });

  test("should return 0 for no arguments", () => {
    const result = addRecurse();
    expect(result).to.equal(0);
  });

  test("should handle negative numbers", () => {
    const result = addRecurse(-5, 10, -15);
    expect(result).to.equal(-10);
  });

  test("should handle floating-point numbers", () => {
    const result = addRecurse(1.5, 2.5);
    expect(result).to.equal(4);
  });
});

// Test suite for the mulRecurse function
describe("mulRecurse", () => {
  test("should return the product of any number of arguments using recursion", () => {
    const result = mulRecurse(1, 2, 4);
    expect(result).to.equal(8);
  });

  test("should return 0 for no arguments", () => {
    const result = mulRecurse();
    expect(result).to.equal(0);
  });

  test("should handle negative numbers", () => {
    const result = mulRecurse(-2, 5, -3);
    expect(result).to.equal(30);
  });

  test("should handle floating-point numbers", () => {
    const result = mulRecurse(2.5, 0.5);
    expect(result).to.equal(1.25);
  });
});

// Test suite for the minRecurse function
describe("minRecurse", () => {
  test("should return the smallest of any number of arguments using recursion", () => {
    const result = minRecurse(1, 2, 4);
    expect(result).to.equal(1);
  });

  test("should return NaN for no arguments", () => {
    const result = minRecurse();
    expect(Number.isNaN(result)).to.equal(true);
  });

  test("should handle negative numbers", () => {
    const result = minRecurse(-5, 10, -15);
    expect(result).to.equal(-15);
  });

  test("should handle floating-point numbers", () => {
    const result = minRecurse(1.5, 2.5, -1.5);
    expect(result).to.equal(-1.5);
  });
});

// Test suite for the maxRecurse function
describe("maxRecurse", () => {
  test("should return the largest of any number of arguments using recursion", () => {
    const result = maxRecurse(1, 2, 4);
    expect(result).to.equal(4);
  });

  test("should return NaN for no arguments", () => {
    const result = maxRecurse();
    expect(Number.isNaN(result)).to.equal(true);
  });

  test("should handle negative numbers", () => {
    const result = maxRecurse(-5, 10, -15);
    expect(result).to.equal(10);
  });

  test("should handle floating-point numbers", () => {
    const result = maxRecurse(1.5, 2.5, -1.5);
    expect(result).to.equal(2.5);
  });
});

// Test suite for not()
describe("not", () => {
  test("returns negation of result", () => {
    const isOdd = (x) => x % 2 === 1;
    const isEven = not(isOdd);
    expect(isEven(1)).toBeFalsy();
    expect(isEven(2)).toBeTruthy();
  });
});

// Test suite for acc
describe("acc", () => {
  test("takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result", () => {
    expect(add(1, 2, 4)).to.equal(7);

    const mult = acc(mulb, 1);
    expect(mult(1, 2, 4)).to.equal(8);
  });
  test("should work when no initial is given", () => {
    const subt = acc(subb);
    expect(subt(6, 7, 8, 9)).to.equal(-30);
  });
});

// Test for accPartial
describe("accPartial", () => {
  test("takes in a function, a start index, and an end index, and returns a function that accumulates a subset of its arguments by applying the given function to all elements between start and end.", () => {
    const addSecondToThird = accPartial(add, 1, 3);
    expect(addSecondToThird(1, 2, 4, 8)).toEqual([1, 6, 8]);
  });
});

// Test suite for accRecurse
describe("accRecurse", () => {
  test("takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result", () => {
    expect(add(1, 2, 4)).to.equal(7);

    const mult = accRecurse(mulb, 1);
    expect(mult(1, 2, 4)).to.equal(8);
  });
  test("should work when no initial is given", () => {
    const subt = accRecurse(subb);
    expect(subt(6, 7, 8, 9)).to.equal(-30);
  });
});

describe("fill", () => {
  test("takes a number and returns an array with that many numbers equal to the given number", () => {
    expect(fill(1)).toStrictEqual([1]);
    expect(fill(4)).toStrictEqual([4, 4, 4, 4]);
  });
  test("number of items should be equal to the number itself", () => {
    const result = fill(8);
    expect(result.length).to.equal(8);
  });
});
describe("fillRecurse", () => {
  test("takes a number and returns an array with that many numbers equal to the given number", () => {
    expect(fillRecurse(1)).toStrictEqual([1]);
    expect(fillRecurse(4)).toStrictEqual([4, 4, 4, 4]);
  });
  test("number of items should be equal to the number itself", () => {
    const result = fillRecurse(8);
    expect(result.length).to.equal(8);
  });
});

describe("set", () => {
  test("that given a list of arguments, it returns an array with all duplicates removed", () => {
    expect(set(1, 1, 1, 2, 2, 2)).toStrictEqual([1, 2]);
  });
  it("it can handle unsorted arrays", () => {
    expect(set(2, 8, 4, 6, 3, 2, 6)).toStrictEqual([2, 8, 4, 6, 3]);
  });
});

describe("identityf", () => {
  it("takes an argument and returns a function that returns that argument", async () => {
    expect(identityf("any")).to.equal("any");
  });
});

describe("addf", () => {
  it("adds from two invocations", async () => {
    expect(addf(3)(4)).to.equal(7);
  });
});

describe("liftf", () => {
  it("takes a binary function, and makes it callable with two invocations", async () => {
    const addft = liftf(addb);
    expect(addft(3)(4)).to.equal(7);
  });

  it("can handle multiple operation", async () => {
    const multft = liftf(mulb);
    expect(multft(3)(5)).to.equal(15);
  });
});

describe("pure", () => {
  it("a pure function pure that is a wrapper arround the impure function impure", async () => {
    // let result = 5
    expect(pure(20, 5)).toStrictEqual([6, 120]);
    expect(pure(25, 6)).toStrictEqual([7, 175]);
  });
});

describe("curryb", () => {
  it("takes a binary function and an argument, and returns a function that can take a second argument", async () => {
    const add3 = curryb(addb, 3);
    expect(add3(4)).to.equal(7);
  });
});

describe("curry", () => {
  test("a function curry that is generalized for any amount of argument", () => {
    const result1 = curry(add, 1, 2, 4)(4, 2, 1);
    // let result2 = result1(4,2,1)
    expect(result1).toStrictEqual(14);
  });
});

describe("inc", () => {
  it("Increment by one", () => {
    const result = inc(5);
    const result2 = inc(inc(5));
    expect(result).to.equal(6);
    expect(result2).to.equal(7);
  });
});
describe("twiceUnary", () => {
  it("takes a binary function and returns a unary function that passes its argument to the binary function twice", () => {
    const addtu = twiceUnary(addb);
    const double = addtu(2);
    const multu = twiceUnary(mulb);
    const square = multu(5);
    expect(double).to.equal(4);
    expect(square).to.equal(25);
  });
});

describe("doubl", () => {
  test("Use the function twiceUnary to create the doubl function", () => {
    expect(doubl(4)).toStrictEqual(8);
  });
});

describe("square", () => {
  it("Use the function twiceUnary to create the square function", async () => {
    const result = square(5);
    const result2 = square(11);
    expect(result).toEqual(25);
    expect(result2).toEqual(121);
  });
});

describe("twice", () => {
  test("function twice that is generalized for any amount of arguments", async () => {
    const doubleSum = twice(add);
    const result = doubleSum(3, 8, 9);
    expect(result).toEqual(40);
  });
});

describe("reverseb", () => {
  it("reverses the arguments of a binary function", async () => {
    const bus = reverseb(subb);
    const result = bus(3, 2);
    expect(result).toEqual(-1);
  });
});

describe("reverse", () => {
  it("reverses the arguments of a binary function", async () => {
    const bus = reverse(sub);
    const result = bus(3, 2, 5);
    expect(result).toEqual(0);
  });
});

describe("composeuTwo", () => {
  it("takes two unary functions and returns a unary function that calls them both", async () => {
    const result = composeuTwo(doubl, square)(5);
    expect(result).toEqual(100);
  });
});

describe("composeu", () => {
  it("takes generalized unary functions and returns a unary function that calls them", async () => {
    const result = composeu(doubl, square, identity, curry(add, 1, 2))(5);
    expect(result).toEqual(103);
  });
});

describe("composeb", () => {
  it("takes two binary functions and returns a function that calls them both", async () => {
    const result = composeb(addb, mulb)(2, 3, 7);
    expect(result).toEqual(35);
  });
});
describe("compose", () => {
  it("takes any amount of functions and returns a function that takes any amount of arguments and gives them to the first function, then that result to the second function and so on", async () => {
    const f = compose(add, doubl, square, inc);
    const result = f(0, 1);
    expect(result).toEqual(5);
  });
});

describe("limitb", () => {
  it("should return a function that limits the number of calls to the binary function", () => {
    const addLmtb = limitb(addb, 2);
    expect(addLmtb(3, 4)).toEqual(7); // 7
    expect(addLmtb(3, 5)).toEqual(8);
    expect(addLmtb(3, 6)).toBeUndefined();
  });
});

describe("limit", () => {
  it("should return a function that limits, generalized for any amount of arguments", () => {
    const addLmtb = limit(add, 2);
    expect(addLmtb(3, 4, 5)).toEqual(12); // 7
    expect(addLmtb(3, 6, 1, 10)).toEqual(20);
    expect(addLmtb(3, 5, 9, 10)).toBeUndefined();
  });
});

describe("genFrom", () => {
  it("produces a generator that will produces a series of values. Follows the iterator protocol for the returned format.", () => {
    const index = genFrom();
    expect(index.next().value).toBe(0);
    expect(index.next().value).toBe(1);
    expect(index.next().value).toBe(2);
  });

  it("handles any number", async () => {
    const index = genFrom(-3);
    expect(index.next().value).toBe(-3);
    expect(index.next().value).toBe(-2);
    expect(index.next().value).toBe(-1);
    expect(index.next().value).toBe(0);
  });
});

describe("genTo", () => {
  it("takes a generator and an end limit, and returns a generator that will produce numbers up to that limit", () => {
    // eslint-disable-next-line prefer-const
    let index = genTo(genFrom(1), 3);
    expect(index.next().value).toBe(1);
    expect(index.next().value).toBe(2);
    expect(index.next().value).toBe(3);
    expect(index.next().value).toBeUndefined();
  });

  it("handles any number", async () => {
    const index = genTo(genFrom(-3), 2);
    expect(index.next().value).toBe(-3);
    expect(index.next().value).toBe(-2);
    expect(index.next().value).toBeUndefined();
  });
});

describe("genFromTo", () => {
  it("generates values in the specified range", () => {
    const indexInRange = genFromTo(0, 3);
    expect(indexInRange.next().value).toBe(0);
    expect(indexInRange.next().value).toBe(1);
    expect(indexInRange.next().value).toBe(2);
    expect(indexInRange.next().value).toBe(undefined);
    // You can add more test cases here
  });
});

describe("elementGen", () => {
  test("should produce elements from the array based on the generator", () => {
    const ele = elementGen(["a", "b", "c", "d"], genFromTo(1, 3));
    expect(ele.next().value).toBe("b");
    expect(ele.next().value).toBe("c");
    expect(ele.next().value).toBe(undefined);
  });
});

describe("element", () => {
  test("should produce each element of the array without a generator", () => {
    const ele = element(["a", "b", "c", "d"]);
    expect(ele.next().value).toBe("a");
    expect(ele.next().value).toBe("b");
    expect(ele.next().value).toBe("c");
    expect(ele.next().value).toBe("d");
    expect(ele.next().value).toBe(undefined);
  });
});

describe("collect", () => {
  test("should collect results in the array using the provided generator", () => {
    let array = [];
    let col = collect(genFromTo(0, 2), array);

    expect(col.next().value).toBe(0);
    expect(col.next().value).toBe(1);
    expect(col.next().value).toBe(undefined);
    expect(array).toEqual([0, 1]);
  });
});

describe("filter", () => {
  test("should produce values approved by the predicate", () => {
    let third = (val) => val % 3 === 0;
    let fil = filter(genFromTo(0, 5), third);

    expect(fil.next().value).toBe(0);
    expect(fil.next().value).toBe(3);
    expect(fil.next().value).toBe(undefined);
  });
});

describe("concatTwo", () => {
  test("should combine sequences from two generators", () => {
    let con = concatTwo(genFromTo(0, 3), genFromTo(0, 2));
    expect(con.next().value).toBe(0);
    expect(con.next().value).toBe(1);
    expect(con.next().value).toBe(2);
    expect(con.next().value).toBe(0);
    expect(con.next().value).toBe(1);
    expect(con.next().value).toBe(undefined);
  });
});

describe("concat", () => {
  test("should combine sequences from multiple generators", () => {
    let con = concat(genFromTo(0, 3), genFromTo(0, 2), genFromTo(5, 7));
    expect(con.next().value).toBe(0);
    expect(con.next().value).toBe(1);
    expect(con.next().value).toBe(2);
    expect(con.next().value).toBe(0);
    expect(con.next().value).toBe(1);
    expect(con.next().value).toBe(5);
    expect(con.next().value).toBe(6);
    expect(con.next().value).toBe(undefined);
  });
});

describe.skip("concatTail", () => {
  test("should combine sequences from multiple generators using tail-recursion", () => {
    let con = concatTail(genFromTo(0, 3), genFromTo(0, 2), genFromTo(5, 7));
    expect(con.next().value).toBe(0);
    expect(con.next().value).toBe(1);
    expect(con.next().value).toBe(2);
    expect(con.next().value).toBe(0);
    expect(con.next().value).toBe(1);
    expect(con.next().value).toBe(5);
    expect(con.next().value).toBe(6);
    expect(con.next().value).toBe(undefined);
  });
});

describe("gensymf", () => {
  test("should generate unique symbols with incremental suffix", () => {
    let genG = gensymf("G");
    let genH = gensymf("H");

    expect(genG.next().value).toBe("G1");
    expect(genH.next().value).toBe("H1");
    expect(genG.next().value).toBe("G2");
    expect(genH.next().value).toBe("H2");
  });
});

describe("gensymff", () => {
  test("should return a gensymf using a unary function and seed", () => {
    let gensymf = gensymff(inc, 0);
    let genG = gensymf("G");
    let genH = gensymf("H");

    expect(genG.next().value).toBe("G1");
    expect(genH.next().value).toBe("H1");
    expect(genG.next().value).toBe("G2");
    expect(genH.next().value).toBe("H2");
  });
});

describe("fibonaccif", () => {
  test("should return the next fibonacci number in the sequence", () => {
    let fib = fibonaccif(0, 1);

    expect(fib.next().value).toBe(0);
    expect(fib.next().value).toBe(1);
    expect(fib.next().value).toBe(1);
    expect(fib.next().value).toBe(2);
    expect(fib.next().value).toBe(3);
    expect(fib.next().value).toBe(5);
    expect(fib.next().value).toBe(8);
  });
});

describe("counter", () => {
  test("should return an object with up and down functions for an up/down counter", () => {
    let obj = counter(10);
    let { up, down } = obj;

    expect(up()).toBe(11);
    expect(down()).toBe(10);
    expect(down()).toBe(9);
    expect(up()).toBe(10);
  });
});

describe("revocableb", () => {
  test("should return an object with an invoke function and a revoke function for a binary function", () => {
    let rev = revocableb(addb);

    expect(rev.invoke(3, 4)).toBe(7);
    rev.revoke();
    expect(rev.invoke(5, 7)).toBe(undefined);
  });
});

describe("revocable", () => {
  test("should return an object with an invoke function and a revoke function for any amount of arguments", () => {
    let rev = revocable(add);

    expect(rev.invoke(3, 4)).toBe(7);
    rev.revoke();
    expect(rev.invoke(5, 7)).toBe(undefined);
  });
});

describe("extract", () => {
  test("should convert each object in the array by extracting the specified property", () => {
    let people = [{ name: "john" }, { name: "bob" }];
    let names = extract(people, "name");

    expect(names).toEqual(["john", "bob"]);
  });
});

describe("m", () => {
  test("should return an object with a value and an optional source string", () => {
    expect(m(1)).toEqual({ value: 1, source: "1" });
    expect(m(Math.PI, "pi")).toEqual({ value: Math.PI, source: "pi" });
  });
});

describe("addmTwo", () => {
  test("should add two m objects and return an m object", () => {
    expect(addmTwo(m(3), m(4))).toEqual({ value: 7, source: "(3+4)" });
    expect(addmTwo(m(1, m(Math.PI, "pi")))).toEqual({
      value: 4.141592653589793,
      source: "(1+pi)",
    });
  });
});

describe("addm", () => {
  test("should add multiple m objects and return an m object", () => {
    expect(addm(m(1), m(2), m(4))).toEqual({ value: 7, source: "(1+2+4)" });
  });
});

describe("liftmbM", () => {
  test("should return a function that acts on m objects for a binary function and a string", () => {
    let addmb = liftmbM(addb, "+");

    expect(addmb(m(3), m(4))).toEqual({ value: 7, source: "(3+4)" });
    expect(liftmbM(mulb, "*")(m(3), m(4))).toEqual({
      value: 12,
      source: "(3*4)",
    });
  });
});

describe.skip("liftmb", () => {
  test("should return a modified function liftmbM that can accept numbers or m objects", () => {
    let addmb = liftmb(addb, "+");

    expect(addmb(3, 4)).toEqual({ value: 7, source: "(3+4)" });
  });
});

describe("liftm", () => {
  test("should return a function that is generalized for any amount of arguments", () => {
    let addm = liftm(add, "+");

    expect(addm(m(3), m(4))).toEqual({ value: 7, source: "(3+4)" });
    expect(liftm(mul, "*")(m(3), m(4))).toEqual({ value: 12, source: "(3*4)" });
  });
});

describe("exp", () => {
  test("should evaluate simple array expressions", () => {
    let sae = [mul, 1, 2, 4];

    expect(exp(sae)).toBe(8);
    expect(exp(42)).toBe(42);
  });
});

describe("expn", () => {
  test("should evaluate nested array expressions", () => {
    let nae = [Math.sqrt, [add, [square, 3], [square, 4]]];

    expect(expn(nae)).toBe(5);
  });
});

describe.skip("addg", () => {
  test("should add from many invocations until it sees an empty invocation", () => {
    expect(addg()).toBe(undefined);
    expect(addg(2)()).toBe(2);
    expect(addg(2)(7)()).toBe(9);
    expect(addg(3)(0)(4)()).toBe(7);
    expect(addg(1)(2)(4)(8)()).toBe(15);
  });
});

describe.skip("liftg", () => {
  test("should apply a binary function to many invocations", () => {
    expect(liftg(mulb)()).toBe(undefined);
    expect(liftg(mulb)(3)()).toBe(3);
    expect(liftg(mulb)(3)(0)(4)()).toBe(0);
    expect(liftg(mulb)(1)(2)(4)(8)()).toBe(64);
  });
});

describe.skip("arrayg", () => {
  test("should build an array from many invocations", () => {
    expect(arrayg()).toEqual([]);
    expect(arrayg(3)()).toEqual([3]);
    expect(arrayg(3)(4)(5)()).toEqual([3, 4, 5]);
  });
});

describe.skip("continuizeu", () => {
  test("should return a function that takes a callback and an argument for a unary function", () => {
    let sqrtc = continuizeu(Math.sqrt);

    // Mock console.log to capture log output
    const mockConsoleLog = vi
      .spyOn(console, "log")
      .mockImplementation(() => {});

    sqrtc(console.log, 81);

    // Check if console.log was called with the correct argument
    expect(mockConsoleLog).toHaveBeenCalledWith(9);

    // Restore the original console.log
    mockConsoleLog.mockRestore();
  });
});

describe.skip("continuize", () => {
  test("should return a function that takes a callback and arguments for any function", () => {
    let mullc = continuize(mul);

    // Mock console.log to capture log output
    const mockConsoleLog = vi
      .spyOn(console, "log")
      .mockImplementation(() => {});

    mullc(console.log, 81, 4, 2);

    // Check if console.log was called with the correct argument
    expect(mockConsoleLog).toHaveBeenCalledWith(648);

    // Restore the original console.log
    mockConsoleLog.mockRestore();
  });
});

describe.skip("vector", () => {
  test("should make an array wrapper object with get, store, and append methods", () => {
    let v = vector();
    v.append(7);
    v.store(1, 8);

    expect(v.get(0)).toBe(7);
    expect(v.get(1)).toBe(8);
  });
});

describe.skip("exploitVector", () => {
  test("should exploit vector implementation and get access to the internal array", () => {
    let v = vector();
    v.append(1);
    v.append(2);

    // Exploit vector and get access to the internal array
    let internalData = exploitVector(v);

    expect(internalData).toEqual([1, 2]);
  });
});

describe.skip("vectorSafe", () => {
  test("should rewrite vector to deal with the security concern and prevent access to the internal array", () => {
    let v = vectorSafe();
    v.append(1);
    v.append(2);

    // Exploit vectorSafe and try to get access to the internal array
    let internalData = exploitVector(v);

    expect(internalData).toBe(undefined);
  });
});

describe.skip("pubsub", () => {
  test("should make a publish/subscribe object that delivers publications to subscribers in the right order", () => {
    // Mock console.log to capture log output
    const mockConsoleLog = vi
      .spyOn(console, "log")
      .mockImplementation(() => {});

    let ps = pubsub();
    ps.subscribe(console.log);
    ps.publish("It works!");

    // Check if console.log was called with the correct argument
    expect(mockConsoleLog).toHaveBeenCalledWith("It works!");

    // Restore the original console.log
    mockConsoleLog.mockRestore();
  });
});

describe.skip("mapRecurse", () => {
  test("should perform a transformation for each element of a given array recursively", () => {
    expect(mapRecurse([1, 2, 3, 4], (x) => x * 2)).toEqual([2, 4, 6, 8]);
  });
});
describe.skip("filterRecurse", () => {
  test("should filter out items from the array using the predicate function recursively", () => {
    expect(filterRecurse([1, 2, 3, 4], (x) => x % 2 === 0)).toEqual([2, 4]);
  });
});
