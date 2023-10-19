import { Stack } from "./Stack.js";

function reverseString(str) {
  let stack = new Stack();
  let reversed = "";

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  for (let j = 0; j < str.length; j++) {
    reversed += stack.pop();
  }

  return reversed;
}

const result = reverseString("abcde");
console.log(result);
