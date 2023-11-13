export const identity = x => x
export const addb = (x, y) => x + y
export const add = (...num) => num.reduce((acc, curr) => acc + curr , 0)
export const addRecurse = (...num) => num.length === 0 ? 0 : num[0] + addRecurse(...num.slice(1))
export const subb = (x, y) => x - y
export const sub = (...num) => num.reduce((diff, curr) => diff - curr)
export const mulb = (x, y) => x * y
export const mulRecurse = (...num) => num.length === 0 ? 0 : num.length === 1 ? num[0] : num[0] * mulRecurse(...num.slice(1)) 
export const mul = (...num) => num.reduce((product, curr) => product * curr)
export const minb = (x, y) => Math.min(x, y)
export const minRecurse = (...num) => num.length === 0 ? NaN : num.length === 2 ? Math.min(...num) : Math.min(num[0], minRecurse(Math.min(num[0], num[1]), ...num.slice(2)))
export const min = (...num) => Math.min(...num)
export const maxb = (x, y) => Math.max(x, y)
export const maxRecurse = (...num) => num.length === 0 ? NaN : num.length === 2 ? Math.max(...num) : Math.max(num[0], maxRecurse(...num.slice(1)))
export const max = (...num) => Math.max(...num)
export const not = (func) => (x) => !func(x)
export const acc = (func, initial=0) => (...num) => num.reduce(func, initial)
export const accPartial = (func, start, end) => (...num) => [...num.slice(0, start), func(...num.slice(start, end)), ...num.slice(end)]
export const accRecurse = (func, initial = 0) => {
  const recurse = (acc, [currentNum, ...restNum]) => currentNum === undefined ? acc : recurse(func(acc, currentNum), restNum)
  return (...num) => recurse(initial, num)
}

export const fill = x => Array(x).fill(x)
export const fillRecurse = (num, index = 0) =>  index >= num ? [] : [num, ...fillRecurse(num, index + 1)]
export const set = (...num) => [...new Set(num)]
export const identityf = (x) => x
export const addf = x => y => x + y
export const liftf = func => x => y => func(x, y)
export const pure = (x, y, z) => {
  function impure(x) {
    y++;
    z = x * y;
  }
  impure(x);
  return [y, z];
}
export const curryb = (func, x) => y => func(x, y)
export const curry = (func, ...num) => (...extra) => func(...num, ...extra)
export const inc = x => x + 1
export const twiceUnary = (func) => (x) => func(x, x)
export const doubl = (x) => twiceUnary(addb)(x)
export const square = (x) => twiceUnary(mulb)(x)
export const twice = func => (...num) => func(...num) * 2
export const reverseb = func => (x, y) => func(y, x) 
export const reverse = func => (...num) => func(...num.reverse()) // TODO find immutable method
export const composeuTwo = (func1, func2) => x => func2(func1(x))
export const composeu = (...funcs) => funcs.reduce((acc, func) => x => func(acc(x)))
export const composeb = (func1, func2) => (x, y, z) => func2(func1(x, y), z)
export const compose = (...funcs) =>  (...num) => funcs.reduce((acc, func) => [func(...acc)], num)[0]



