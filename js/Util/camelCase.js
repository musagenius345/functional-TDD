export const camelCase = (str) => {
  // const delimiters = new Set('-', ' ')
return str.toLowerCase()
    .split(' ')
    .map( (el, i) => i > 0 ? el.slice(0, 1).toUpperCase() + el.slice(1) : el).join('')
}
// const result = camelCase('Hello japan MiyagI')
// console.log(result)
