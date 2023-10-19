const add = (...nums) => nums.reduce((sum, num) => sum + num, 0);

const accPartial =
  (func, start, end) =>
  (...args) => {
    const subset = args.slice(start, end);
    return subset.reduce(func);
  };

const addSecondToThird = accPartial(add, 1, 2);
const result = addSecondToThird(1, 2, 4, 8); // [ 1, 6, 8 ]

console.log(result);
