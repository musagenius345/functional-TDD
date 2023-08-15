type Memo<Key, Value> = Map<Key, Value>

function fibonacci(n: number, memo: Memo<number, number> = new Map()): number {
  console.log('Recursion');

  if (n === 1 || n === 0) {
    return n
  }

  if (memo.has(n)) {
    return memo.get(n)!
  }

  const result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
  memo.set(n, result)

  return result
}



// Using loops
function fib(n: number) {

  if (n === 0) { return n }
  let a = 0
  let b = 1

  for (let index = 0; index < n; index++) {
    let temp = a + b
    a = b
    b = temp + a

  }

  return b

}

console.time()
console.log(fib(40));
console.timeEnd()
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
//
