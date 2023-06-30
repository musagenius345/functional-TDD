export const identity = x => x;

export const addb = (a, b) => a + b;

export const subb = (a, b) => a - b;

export const mulb = (a, b) => a * b;

export const minb = (a, b) => Math.min(a, b);

export const maxb = (a, b) => Math.max(a, b);

export const add = (...nums) => nums.reduce((sum, num) => sum + num, 0);

export const sub = (...nums) => nums.reduce((diff, num) => diff - num);

export const mul = (...nums) => nums.reduce((product, num) => product * num);

export const min = (...nums) => Math.min(...nums);

export const max = (...nums) => Math.max(...nums);

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
    return 1
  } else {
    const [first, ...rest] = nums
    return first * mulRecurse(...rest)
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
    return -Infinity;
  } else {
    const [first, ...rest] = nums;
    const maxRest = maxRecurse(...rest);
    return Math.max(first, maxRest);
  }
};


  //   const [first, ...rest] = nums
  //   const maxRest = rest.length > 0 ? maxRecurse(...rest) : NaN
  //
  //   return isNaN(maxRest) || first > minRest ? first : minRest
  // }
  //
  // const not = (func) => {
  //   return (...args) => {
  //     return !func(...args)
  //   }
  // }
  //
  // const acc = (func, intial) => {
  //   return (...args) => {
  //     return args.reduce(func, intial)

  //   }
  // }
  //
  // const accPartial = (func, start, end) => {
  //   return (...args) => {
  //     const subset = args.slice(start, end)
  //     return subset.reduce(func)
  //   }
  // }
  //
  // const accRecurse = (func, initial) => {
  //   const recurse = (accumulator, [currentArg, ...restArgs]) =>
  //     currentArg === undefined ?
  //     accumulator :
  //     recurse(func(accumulator, currentArg), restArgs)
  //
  //   return (...args) => recurse(initial, args)
  // }
  //
  // const fill = (num) => Array(num).fill(num)
  //
  //
  // const fillRecurse = (num) => num === 0 ? [] : [...fillRecurse(num - 1), num]
  //
  // const set = (...args) => [...new Set(args)]
  //
  // const identityf = (x) => () => x
  //
  //
  // const addf = (a) => (b) => a + b
  //
  // const liftf = (binary) => (a) => (b) => binary(a, b)
  //
  //
  // const pure = (x) => {
  //   let y = 5 // Initial value of y
  //   let z // Initial value of z
  //
  //   const impure = (x) => {
  //     y++
  //     z = x * y
  //   }
  //
  //   impure(x) 
  //   // Call the impure function with the provided argument
  //   
  //   return [z, y] 
  //   // Return the updated values of z and y as an array
  // }
  //
  // const curryb = (binary, a) => (b) => binary(a, b)
  //
  //
  // const curry = (func, ...outer) => (...inner) => func(...outer, ...inner)
  //
  // const inc = (x) => x++
  // const inc_1 = (x) => ~-x;
  //



