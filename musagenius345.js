export const identity = x => x;

export const addb = (a, b) => a + b;

export const subb = (a, b) => a - b;

export const mulb = (a, b) => a * b;

export const minb = (a, b) => Math.min(a, b);

export const maxb = (a, b) => Math.max(a, b);

export const add = (...nums) => nums.reduce((sum, num) => sum + num, 0)

export const sub = (...nums) => nums.reduce((diff, num) => diff - num)

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


//export const fill = (num) => Array(num).fill(num)
export const fill = (num) => {
  let arr = []
  while (arr.length < num) {
    arr.push(num)
  }
  return arr
}

const fill_2 = num => Array.from({ length: num }, () => num)

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

export const addf = (a) => (b) => a + b

export const liftf = (binary) => (a) => (b) => binary(a, b)

export const pure = (func) => func(1)












//
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
