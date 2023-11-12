//import { Node } from "./Node";

const head = Symbol("head");

class LinkedListNode<T> {
  data: T;
  next: LinkedListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList<T> {
  #head: LinkedListNode<T> | null;

  constructor() {
    this.#head = null;
  }

  get head() {
    return this.#head;
  }

  set head(node) {
    this.#head = node;
  }

  add(data: T): void {
    const newNode = new LinkedListNode(data);
    if (!this.#head) {
      this.#head = newNode;
    } else {
      let current = this.#head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  isEmpty(): boolean {
    return this.#head === null;
  }

  delete(index?: number): void {
    if (index !== undefined && index >= 0) {
      const nodeToRemove = this._getNodeAtIndex(index);
      if (nodeToRemove) {
        const prevNode = this._getNodeAtIndex(index - 1);
        if (prevNode) {
          prevNode.next = nodeToRemove.next;
        } else {
          this.#head = nodeToRemove.next;
        }
      }
    } else {
      let current = this.#head;
      let prevNode: LinkedListNode<T> | null = null;
      while (current && current.next) {
        prevNode = current;
        current = current.next;
      }
      if (prevNode) {
        prevNode.next = null;
      } else {
        this.#head = null;
      }
    }
  }

  size(): number {
    let count = 0;
    let current = this.#head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  contains(data: T): boolean {
    let current = this.#head;
    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  get(index: number): T | null {
    const node = this._getNodeAtIndex(index);
    return node ? node.data : null;
  }

  set(index: number, value: T): void {
    const node = this._getNodeAtIndex(index);
    if (node) {
      node.data = value;
    }
  }

  *[Symbol.iterator](): Iterator<T> {
    let current = this.#head;
    while (current) {
      yield current.data;
      current = current.next;
    }
  }

  private _getNodeAtIndex(index: number): LinkedListNode<T> | null {
    if (index < 0) {
      return null;
    }

    let count = 0;
    let current = this.#head;
    while (current && count < index) {
      current = current.next;
      count++;
    }
    return current;
  }

  toArray(): T[] {
    return [...this];
  }

  remove(data: T): void {
    let current = this.#head;
    let prevNode: LinkedListNode<T> | null = null;

    while (current) {
      if (current.data === data) {
        if (prevNode) {
          prevNode.next = current.next;
        } else {
          this.#head = current.next;
        }
        return;
      }
      prevNode = current;
      current = current.next;
    }
  }

  clear(): void {
    this.#head = null;
  }

  subList(fromIndex: number, toIndex: number): LinkedList<T> | null {
    if (fromIndex < 0 || toIndex > this.size() || fromIndex > toIndex) {
      return null;
    }

    const sublist = new LinkedList<T>();
    let current = this._getNodeAtIndex(fromIndex);

    for (let i = fromIndex; i < toIndex && current !== null; i++) {
      sublist.add(current.data);
      current = current.next;
    }

    return sublist;
  }

  insertBefore(data: T, index: number): void {
    if (index === 0) {
      const newNode = new LinkedListNode(data);
      newNode.next = this.#head;
      this.#head = newNode;
    } else {
      const prevNode = this._getNodeAtIndex(index - 1);
      if (prevNode) {
        const newNode = new LinkedListNode(data);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
      } else {
        throw new RangeError(`Index ${index} does not exist in the list.`);
      }
    }
  }

  insertAfter(data: T, index: number): void {
    const prevNode = this._getNodeAtIndex(index);
    if (prevNode) {
      const newNode = new LinkedListNode(data);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
    } else {
      throw new RangeError(`Index ${index} does not exist in the list.`);
    }
  }

  indexOf(data: T): number {
    let current = this.#head;
    let index = 0;
    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }
}
