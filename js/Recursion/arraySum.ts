function sum(arr, index = 0, total = 0) {
  if (arr.length === 1) {
    return arr[0];
  }

  if (arr.length > index) {
    total = arr[index] + arr[index];
    return sum(arr, index + 2, total);
  }

  if (arr.length % 2 !== 0) {
    total += arr[arr.length - 1];
  }

  return total;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1];
console.log(sum(arr1));
