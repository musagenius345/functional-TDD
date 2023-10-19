function golomb(n, memo) {
  if (memo === void 0) {
    memo = new Map();
  }
  if (n === 1) {
    return 1;
  }
  if (!memo.has(n)) {
    memo.set(n, 1 + golomb(n - golomb(golomb(n - 1, memo), memo), memo));
  }
  return memo.get(n);
}
console.log(golomb(2));
