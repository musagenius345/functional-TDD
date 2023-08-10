function triangNums(n: number) {
  if (n <= 0) {
    return 0
  } else {
    return n + triangNums(n - 1)
  }
}
console.log(triangNums(7));
console.log(triangNums(-7));
console.log(triangNums(2));

