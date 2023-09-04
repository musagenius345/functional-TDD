const addTo100 = (arr: number[], sum = 0) => {
  if (arr.length === 0) {
    return sum
  }

  const newSum = sum + arr[0]
  return newSum > 100 ? sum : addTo100(arr.slice(1), newSum)
}
const array1 = [1, 99]
const array2 = [1, 88, 99]
const array3 = [1, 88, 12, 99]
const array5 = [1, 3, 1, 88, 12, 99]
const array4 = [1]

console.log(addTo100(array1)) // Output: 100
console.log(addTo100(array2)) // Output: 89
console.log(addTo100(array3)) // Output: 89
console.log(addTo100(array4)) // Output: 1
console.log(addTo100(array5)) // Output: 93
