function charCount(arr: string[]): number {

  if (arr.length !== 0) {
    return 0
  }

 return arr[0].trim().length + charCount(arr.slice(1))
}

// console.log(charCount([' hello ', 'new world'])); // 14
// console.log(charCount([' '])); // 0
// console.log(charCount(['win'])); // 3
//
