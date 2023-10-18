export const bubbleSort = (arr: number[]) => {
  if (arr.length === 0) {
    return []
  } else if(arr.length === 1){
    return arr
  } else {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i; j++) {
        if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
      }
    }
    return arr
  }
}





// const bubbleSort = (arr) => {

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {

//       if (arr[j] > arr[j+1]) {
//         [arr[ j ], arr[ j + 1]] = [arr[ j + 1], arr[ j ]]
//       }
//     }
//   }

// }
//   return arr
//}


// function bubbleSort(list) {
//   let unsorted_until_index = list.length - 1
//   let sorted = false
//   while (!sorted) {
//     sorted = true
//     for (let i = 0; i < unsorted_until_index; i++) {
//       if (list[i] > list[i + 1]) {
//         [list[i], list[i + 1]] = [list[i + 1], list[i]]
//         sorted = false
//       }
//     }
//     unsorted_until_index -= 1
//   }
//   return list

// }

// const arr = newArray(30, 1000);
// console.log("Original array:", arr);

// const sortedArr = bubbleSort(arr);
// console.log("Sorted array: ", sortedArr);


// const sortArr = arr.sort( (a, b) => a - b)
// console.log("Built-in sorted:", sortArr);
// // console.assert(sortArr, sortedArr)
