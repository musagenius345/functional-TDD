import { isValid, MinStack } from 'index.js'


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
