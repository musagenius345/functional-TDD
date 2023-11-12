export class MinStack {
  private items: { value: number; min: number }[];

  constructor() {
    this.items = [];
  }

  push(val: number): void {
    const min = this.items.length === 0 ? val : Math.min(val, this.getMin());
    this.items.push({ value: val, min });
  }

  pop(): void {
    this.items.pop();
  }

  top(): number {
    if (this.items.length === 0) {
      return undefined;
    } else {
      return this.items[this.items.length - 1].value;
    }
  }

  getMin(): number {
    if (this.items.length === 0) {
      return undefined;
    } else {
      return this.items[this.items.length - 1].min;
    }
  }
}
