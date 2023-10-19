import { Stack } from "./Stack.js";
export class Linter {
  stack = new Stack();

  lint(text) {
    for (const char of text) {
      if (this.isOpenBrace(char)) {
        this.stack.push(char);
      } else if (this.isClosingBrace(char)) {
        const poppedOpeningBrace = this.stack.pop();
        if (!poppedOpeningBrace) {
          return `${char} doesn't have an opening brace`;
        }
        if (this.isNotAMatch(poppedOpeningBrace, char)) {
          return `${char} has a mismatched opening brace`;
        }
      }
    }

    if (!this.stack.isEmpty()) {
      return `${this.stack.peek()} does not have a closing brace`;
    }

    return true;
  }

  isOpenBrace(char) {
    return ["(", "[", "{"].includes(char);
  }

  isClosingBrace(char) {
    return [")", "]", "}"].includes(char);
  }

  isNotAMatch(openingBrace, closingBrace) {
    const matchingBraces = new Map();
    matchingBraces.set("(", ")");
    matchingBraces.set("{", "}");
    matchingBraces.set("[", "]");

    return closingBrace !== matchingBraces.get(openingBrace);
  }
}

// // Example usage:
// const linter = new Linter();
// const text = "function() { console.log('Hello, world!');";
// console.log(linter.lint(text)); // Output: { does not have a closing brace
//
