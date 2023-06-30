// //Binary Search - Sorted


// let i = 0
// function binarySearch(arr, target, start=0, end=arr.length-1){
//   midpoint = Math.floor((start + end) / 2)
//   mid = arr[midpoint]
//   i++
//   console.log(i);
//   if(mid == target){
//     console.log(`${target} found at ${mid}`)
//     return midpoint
//   }
//   if(mid > target){
//     return binarySearch(arr, target, start, end=midpoint-1)
//   }
//   if(mid < target){
//     return binarySearch(arr, target, start=midpoint+1, end)
//   }

// }

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
//   12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
//   24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
//   36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
//   48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
//   60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
//   72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
//   84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
//   96, 97, 98, 99, 100]

// const found =binarySearch(arr1, 49)

// console.log(found);



// function binarySearch2(arr, target, start=0, end=arr.length-1) {

//   middle =Math.floor((start+end) / 2)
//   midValue = arr[middle]

//   if (target == midValue) {
//     console.log(`${target} found at index ${middle}`)
//     return middle
//   }
//   if (target < midValue) {
//     return binarySearch2(arr, target, start=0, end=middle-1)
//   }
//   if (target > midValue) {
//     return binarySearch2(arr, target, start=middle+1, end=arr.length-1)
//   }

//   return -1

// }

const binarySearch3 = (arr, target) => {

  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    let middle = Math.floor((start + end) / 2)
    let midValue = arr[middle]

    if (midValue === target) {
      return console.log(`Found at ${middle}`)
      return middle
      
    } else if (midValue < target) {
      start = middle + 1

    } else {
      end = middle - 1
      
    } 
    
    
  }


  console.log('Not found')
  return -1
}

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

binarySearch3(arr3, 10)


// const message = (location) => console.log(`number found at index ${location}`)
// const error = () => console.log(`number not found`)
// const checkNum = (index) => {
//   index !== -1 ?
//     message(index) :
//     error()

// }

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
//   12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
//   24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
//   36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
//   48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
//   60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
//   72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
//   84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
//   96, 97, 98, 99, 100]

// const resultIndex = binarySearch3(arr1, 88)
// checkNum(resultIndex)