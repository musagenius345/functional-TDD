export class Stack {
  private items: any[]
  constructor() {
    this.items = [];
  }

  // Add an element to the top of the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return null;
      // or throw an error indicating underflow
    }
    return this.items.pop();
  }

  // Return the top element without removing it
  peek() {
    if (this.isEmpty()) {
      return null; // or throw an error indicating underflow
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the number of elements in the stack
  size() {
    return this.items.length;
  }

  // Clear the stack
  clear() {
    this.items = [];
  }
}
// export { Stack }
