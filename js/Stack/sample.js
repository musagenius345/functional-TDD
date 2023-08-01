import { Stack } from './Stack.js'
const myStack = new Stack();

myStack.push(10);
myStack.push(20);
myStack.push(30);

console.log(myStack.peek()); // Output: 30

console.log(myStack[0]); //undefined
console.log(myStack.pop()); // Output: 30
console.log(myStack.pop()); // Output: 20

console.log(myStack.size()); // Output: 1

console.log(myStack.isEmpty()); // Output: false

myStack.clear();
console.log(myStack.isEmpty()); // Output: true