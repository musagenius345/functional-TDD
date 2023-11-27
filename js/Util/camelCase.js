
export const camelCase = (str) => str.toLowerCase().split(/[\s-]/).map((el, i) => i > 0 ? el.slice(0, 1).toUpperCase() + el.slice(1) : el).join('');
const result = camelCase('Hello japan-MiyagI')
console.log(result)
