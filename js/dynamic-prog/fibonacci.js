function fibonacci(n, memo) {
  if (memo === void 0) {
    memo = new Map();
  }
  console.log("Recursion");
  if (n === 1 || n === 0) {
    return n;
  }
  if (memo.has(n)) {
    return memo.get(n);
  }
  var result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  memo.set(n, result);
  return result;
}
// Using loops
function fib(n) {
  if (n === 0) {
    return n;
  }
  var a = 0;
  var b = 1;
  for (var index = 0; index < n; index++) {
    var temp = a + b;
    a = b;
    b = temp + a;
  }
  return b;
}
console.time();
console.log(fib(40));
console.timeEnd();
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
//
