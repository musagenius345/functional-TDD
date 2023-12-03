import { max, fill, doubl, add } from "./fun-pro.js";

/**
 * Composes multiple functions into a single function with debugging logs.
 *
 * @param {...function} funcs - Functions to compose.
 * @returns {function} A composed function.
 */
function compose(...funcs) {
  return (...args) => {
    return funcs.reduceRight((result, func, index) => {
      const flattenedArgs = Array.isArray(result) ? result.flat() : [result];
      const nextResult = func(...flattenedArgs);
      console.log(`Step ${funcs.length - index}:`, func.name, "->", nextResult);
      return index === funcs.length - 1 ? nextResult : [nextResult];
    }, args);
  };
}

const f = compose(max, fill, doubl, add);
console.log(f(0, 1, 2));
// Output with debugging logs:
// Step 4: add -> 3
// Step 3: doubl -> 6
// Step 2: fill -> [6, 6, 6, 6, 6, 6]
// Step 1: max -> 6
// Result: 6
