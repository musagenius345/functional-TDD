function evenNums(arr: number[]) {
  if (arr.length == 0) {
    return []
  }
  if (arr[0] % 2 == 0) {
    return [arr[0],...evenNums(arr.slice(1))]

  } else {
    return [...evenNums(arr.slice(1))]
  }
}

console.log(evenNums([1, 2, 3, 4, 5, 6]));

