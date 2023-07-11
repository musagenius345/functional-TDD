export const identity = (x: number) => x;

export const addb = (a: number, b: number) => a + b;

export const subb = (a:number, b:number) => a - b;

export const mulb = (a, b) => a * b;

export const minb = (a, b) => Math.min(a, b);

export const maxb = (a, b) => Math.max(a, b);

// export const add = (...nums) => nums.reduce((sum, num) => sum + num, 0)
//
export const add = (...nums) => nums.reduce((sum, num) => sum + num, 0);

export const sub = (...nums) => nums.reduce((diff, num) => diff - num)

export const mul = (...nums) => nums.reduce((product, num) => product * num);

export const min = (...nums) => Math.min(...nums);
export const max = (...nums) => Math.max(...nums.flat(Infinity))

export const addRecurse = (...nums) => {
  if (nums.length === 0) {
    return 0;
  } else {
    const [first, ...rest] = nums;
    return first + addRecurse(...rest);
  }
};

export const mulRecurse = (...nums) => {
  if (nums.length === 0) {
    return 0;
  } else if (nums.length === 1) {
    return nums[0]
  } else {
    const [first, ...rest] = nums;
    return first * mulRecurse(...rest);
  }
}


export const minRecurse = (...nums) => {
  if (nums.length === 0) {
    return NaN
  }

  const [first, ...rest] = nums;
  const minRest = rest.length > 0 ? minRecurse(...rest) : NaN;

  return isNaN(minRest) || first < minRest ? first : minRest;
}

export const maxRecurse = (...nums) => {
  if (nums.length === 0) {
    return NaN;
  } else if (nums.length === 1) {
    return nums[0];
  } else {
    const [first, ...rest] = nums;
    const maxRest = maxRecurse(...rest);
    return Math.max(first, maxRest);
  }
};




export const not = (func) => (...args) => !func(...args)

export const acc = (func, intial = 0) => (...args) => args.reduce(func, intial)

export const accPartial = (func, start, end) => (...args) => {
  const subset = args.slice(start, end)
  const result = func(...subset)
  const beginning = args.slice(0, start)
  const ending = args.slice(end)

  const accumulatedArgs = beginning.concat(result).concat(ending)
  return accumulatedArgs
}

export const accRecurse = (func, initial = 0) => {
  const recurse = (accumulator, [currentArg, ...restArgs]) =>
    currentArg === undefined ? accumulator : recurse(func(accumulator, currentArg), restArgs) 

  return (...args) => recurse(initial, args)
}


const fill2 = (num) => Array(num).fill(num)


export const fill = num => Array.from({ length: num }, () => num)

function fillRecurse_2(num, array = []) {
  if (array.length >= num) {
    return array;
  }

  array.push(num);
  return fillRecurse_2(num, array);
}

function fillRecurse_3(num, array = []) {
  if (array.length >= num) {
    return array;
  }

  return fillRecurse_3(num, array.concat(num));
}

function fillRecurse_4(num, index = 0) {
  if (index >= num) {
    return [];
  }

  return [num].concat(fillRecurse_4(num, index + 1));
}

export function fillRecurse(num, current = num, array = []) {
  if (current <= 0) {
    return array;
  }

  return fillRecurse(num, current - 1, [...array, num]);
}

export const set = (...args) => [...new Set(args)]

export const identityf = (arg) => arg

export const addf = (a: number) => (b: number) => a + b

export const liftf = (binary:Function) => (a: number) => (b: number) => binary(a, b)

export const pure = (x: number, y: number=5, z:number) => {
  function impure(x:number){
    y++
    z = x * y

  }

  impure(x)
  return [y, z]
}

export const curryb = (binary: Function, num1: number) => (num2:number) => binary(num1, num2)

export const curry = (func: Function, ...outer: number[]) => (...inner: number[]) => func(...outer, ...inner)

export const inc = (x: number) => x + 1

export const twiceUnary = (binary: Function) => (x: number)  => binary(x, x)

export const doubl = twiceUnary((a: number, b: number) => a + b);

export const square = (num: number) =>  twiceUnary(mulb)(num)

export const twice = (func: Function) => (...num: number[]) => (func(...num)) * 2

export const reverseb = (func: Function) => (a:number, b:number) => func(b, a)

export const reverse = (func: Function) => (...args: number[]) => func(...args.reverse())

export const composeuTwo = (unary1: Function, unary2: Function) => (arg: number) => unary2(unary1(arg))

export const composeu = (...funcs: Function[]) => funcs.reduce((accumulator, func) => (x: number) => func(accumulator(x)))

export const composeb = (binary1: Function, binary2: Function) => (a: number, b: number, c: number) => binary2(binary1(a, b), c)

export const composeTwo = (func1: Function, func2: Function) => (...args: any[]) => func2(func1(...args))

 export const compose = (...functions: Function[]) => (...args: any[]) => functions.reduce((result, fn) => [fn(...result)], args)[0];

export const limitb = (binary: Function, lmt: number) => {
  let count = 0

  return (a: number, b: number) => {
    if (count < lmt) {
      count++
      return binary(a, b);
    }

    return undefined
  }
}

export const limit = (binary: Function, lmt: number) => {
  let count = 0

  return (...nums: number[]) => {
    if (count < lmt) {
      count++
      return binary(...nums);
    }

    return undefined
  }
}


// export const compose = (...functions: Function[]) => (...args: any[]) => functions.reduce((result, fn) => [fn(...result)], args)[0]; 

// export
//limitb(binary, lmt) ⇒ function
// Write a function limitb that allows a binary function to be called a limited number of times
//
// Param	Type
// binary	function
// lmt	number
// Example
//
// let addLmtb = limitb(addb, 1)
// addLmtb(3, 4) // 7
// addLmtb(3, 5) // undefined
//
// limit(func, lmt) ⇒ function
// Write a function limit that is generalized for any amount of arguments
//
// Param	Type
// func	function
// lmt	number
// Example
//
// let addLmt = limit(add, 1)
// addLmt(1, 2, 4) // 7
// addLmt(3, 5, 9, 2) // undefined
//  *
//  *
//  * */
