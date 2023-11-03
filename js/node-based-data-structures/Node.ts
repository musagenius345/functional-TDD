/*
 * Represent a node in a node based structures
 */
export class Node<T> {
  data: T;
  next: Node<T> | null;
  prev: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

