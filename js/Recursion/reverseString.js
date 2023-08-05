function reverseString(str, reverse='', end = str.length -1, previous = end-1){
  if (end >= 0) {
  console.log(reverse)
    return reverse += reverseString(str.substring(previous, end - 1))

  }
  console.log(reverse)
}

let string2 = 'helloWorld'
reverseString(string2)
// console.log(result)