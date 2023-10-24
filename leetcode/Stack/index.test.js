import { isValid, MinStack, evalRPN } from 'index.js'

// LEARN a × (b + c) is written a b c + ×
describe('Evaluate Reverse Polish Notation', () => {
    it('should evaluate basic arithmetic operations correctly', () => {
        expect(evalRPN(['2', '1', '+'])).toEqual(3); // 2 + 1 = 3
        expect(evalRPN(['4', '10', '5', '/', '+'])).toEqual(6); // 4 + (10 / 5) = 6
        expect(evalRPN(['12', '9', '6', '3', '/', '-', '*'])).toEqual(84); // 12 * ((9 - 6) / 3) = 12
        expect(evalRPN(['18', '2', '/'])).toEqual(9); // 18 / 2 = 9
    });

    it('should handle negative numbers and subtraction correctly', () => {
        expect(evalRPN(['-1', '1', '-'])).toEqual(-2); // -1 - 1 = -2
        expect(evalRPN(['-1', '-1', '-'])).toEqual(0); // -1 - (-1) = 0
    });

    it('should handle multiplication and division correctly', () => {
        expect(evalRPN(['2', '3', '*'])).toEqual(6); // 2 * 3 = 6
        expect(evalRPN(['8', '4', '/'])).toEqual(2); // 8 / 4 = 2
        expect(evalRPN(['20', '5', '*'])).toEqual(100); // 20 * 5 = 100
        expect(evalRPN(['100', '10', '/'])).toEqual(10); // 100 / 10 = 10
    });

    it('should handle complex expressions correctly', () => {
        expect(evalRPN(['4', '110', '10', '/', '+', '2', '*'])).toEqual(30); // (4 + (110 / 10)) * 2 = 30
        expect(evalRPN(['3', '4', '*', '2', '5', '*', '+'])).toEqual(22); // (3 * 4) + (2 * 5) = 23
    });

    it('should handle edge cases and single-number expressions', () => {
        expect(evalRPN(['0', '0', '/'])).toEqual(0); // Division by zero edge case
        expect(evalRPN(['3'])).toEqual(3); // Single-number expression
    });

    it('should return NaN for invalid RPN expressions', () => {
        expect(isNaN(evalRPN(['+', '2', '3']))).toBe(true); // Invalid RPN expression
    });
});



describe("Valid Parentheses Order", () => {
  test('Basic ()', () => {
    expect(isValid('()')).toBe(true);
  });

  test('Mixed  Ordered', () => {
    expect(isValid('()[]{}')).toBe(true);
  });

  test('Mixed Unordered', () => {
    expect(isValid('(]')).toBe(false);
  });
})


describe('MinStack', () => {
  test('Test Case 1: Push, Top, and GetMin operations', () => {
    const minStack = new MinStack();
    minStack.push(5);
    expect(minStack.top()).toBe(5);
    expect(minStack.getMin()).toBe(5);
    minStack.push(2);
    expect(minStack.top()).toBe(2);
    expect(minStack.getMin()).toBe(2);
    minStack.push(7);
    expect(minStack.top()).toBe(7);
    expect(minStack.getMin()).toBe(2);
    minStack.pop();
    expect(minStack.top()).toBe(2);
    expect(minStack.getMin()).toBe(2);
    minStack.pop();
    expect(minStack.top()).toBe(5);
    expect(minStack.getMin()).toBe(5);
  });

  test('Test Case 2: Edge case with empty stack', () => {
    const minStack = new MinStack();
    expect(minStack.top()).toBeUndefined();
    expect(minStack.getMin()).toBeUndefined();
  });

  test('Test Case 3: Large input', () => {
    const minStack = new MinStack();
    for (let i = 0; i < 10000; i++) {
      minStack.push(i);
    }
    expect(minStack.top()).toBe(9999);
    expect(minStack.getMin()).toBe(0);
  });

  test('Test Case 4: Pop operations on an empty stack', () => {
    const minStack = new MinStack();
    minStack.pop();
    expect(minStack.top()).toBeUndefined();
    expect(minStack.getMin()).toBeUndefined();
  });
});
