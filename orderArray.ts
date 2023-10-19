export function linearSearch(arr, value) {
  for (let i = 0; arr[i] < value; i++) {
    if (arr[i] === value) {
      console.log(`${value} exists in array`);
    } else {
      console.log(`${value} does not exist in array`);
    }
  }
}

// export const linearSearch = (arr, value) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       console.log(`${value} exists in array index ${i}`)
//     } else if (arr[i] > value) {
//       break
//     }
//   }
// }
