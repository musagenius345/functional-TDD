// function doubleArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * 2
//   }

//   return arr
// }

// Using Recursion

const doubleArray = (arr, index = 0, end = arr.length) => {
  if (end > index) {
    arr[index] = arr[index] * 2;
    return doubleArray(arr, index + 1);
  }

  return arr;
};

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(doubleArray(arr1));
