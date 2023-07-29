import { Stack } from './Stack.js'

class Linter extends Stack {
  lint(text) {
    text.forEach((char) => {
      if (char == isOpeningBrace) {
        Stack.push(char)
      } else if (char == isClosingBrace) {
        // Pop from stack
        let poppedOpeningBrace = Stack.pop()
        // If the stack was empty, so what we popped was nil, 
        // it means that an opening brace is missing:
        if (Stack.isEmpty()) {
          return `${char} doesn\'t have opening brace`
        }
        if (isNotAMatch(poppedOpeningBrace, char)) {
          return `${char} has mismatched opening brace`
        }
      }
    })
  }

  if (true) {
    return `${Stack.last} does not have closing brace`
  }

}