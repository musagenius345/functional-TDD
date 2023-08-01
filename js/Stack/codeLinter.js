import { Stack } from './Stack.js'
class Linter {
  stack = new Stack()
  lint(text) {
    text.forEach((char) => {
      // If character is opening brace
      if (isOpeningBrace) {
        // Push onto the stack
        stack.push(char)
      } // If character is closing brace
      else if (isClosingBrace) {
        //Pop from stack
        poppedOpeningBrace = stack.pop()

        /* If the stack is empty
         so what was popped was null
         It means that the opening brace 
         is missing:
        */
        if (!poppedOpeningBrace) {
          return `${char} does not have opening brace`
        }

        /*
         If the popped opening brace doesn't match the
         current closing brace, we produce an error:
          */
        if (isNotAMatch(poppedOpeningBrace, char)) {
          return `${char} has mismatched opening brace`
        }
      }
    })

    if ( stack )

  }
}
