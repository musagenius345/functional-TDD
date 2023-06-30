// const linearSearch = (arr, value) => {
//   let j = 0
//   for (var i = 0; i < arr.length; i++) {
//     j++
//     console.log(j);
//     if (arr[i] === value) {
//       return i
//     }
//   }
  
//   return -1
// }


// const checkNum = (index) => {
//   if (index !== -1) {
//     return console.log(`Number is found at ${index} index`)
//   } else {
//     return console.log(`Number not found`)
//   }
// }






function linearSearch(arr, target) {
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log(`${target} is found in array`)
      return i
    }
    
    
  }
  
  return -1
}

const message = (location) => console.log(`number found at index ${location}`) 
const error = () => console.log(`number not found`) 
const checkNum = (index) =>{ 
  index !== -1 
  ? message(index)
  : error()
  
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
  36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
  60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
  72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
  84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
  96, 97, 98, 99, 100]

const resultIndex = linearSearch(arr1, 888)
checkNum(resultIndex)