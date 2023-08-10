import { Linter } from './codeLinter'
import { describe, it, expect, test } from '/data/data/com.termux/files/home/.local/share/pnpm/global/5/node_modules/vitest'


describe('Braces CodeLinter', () => {
  const linter = new Linter()
  const syntaxErrorOne = 'If we make it to the end of the line and there’s still something left on the stack, that means there’s an opening brace without a corresponding closing brace,'
  const syntaxErrorTwo = 'If we couldn’t pop an element because the stack was empty, that means the current closing brace doesn’t have a corresponding opening brace beforehand.'
  const syntaxErrorThree = 'If the item we popped (which is always an opening brace) does not match the current closing brace, it means we’ve encountered Syntax Error'

    it(`can handle Syntax Error #1: ${syntaxErrorOne}`, () => {
    const text = "function() { console.log('Hello, world!');";
    const result = linter.lint(text)
    expect(result).toBe('{ does not have a closing brace')
    
  })

  it(`can handle Syntax Error #2: ${syntaxErrorTwo}`, () => {
    const text = "function) { console.log('Hello, world!')};";
    const result = linter.lint(text)
    expect(result).toBe(') has a mismatched opening brace')
  })

  it(`can handle Syntax Error #3: ${syntaxErrorThree}`, () => {
    const text = "function() { console.log('Hello, world!'});";
    const result = linter.lint(text)
    expect(result).toBe('} has a mismatched opening brace')
  })
})

