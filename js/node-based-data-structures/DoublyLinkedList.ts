import { Node } from "./Node";

/**
 * Represents a doubly linked list with various operations.
 */
export class DoublyLinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }
  /**
   * Adds a new element to the end of the list.
   * @param {T} data - The data to be added to the list.
   */
  add(data: T): void {
    const newNode = new Node(data);

    if (!this.head) {
      // If the list is empty, set the new node as both head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Update the next and previous references accordingly
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  /**
   * Checks if the linked list is empty.
   * @returns {boolean} - True if the list is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.head === null;
  }

  /**
   * Remove linked node by index. If index is not provided, remove the last item.
   * @param {number} index - The index of the node to be deleted.
   */
  delete(index?: number): void {
    if (index !== undefined && (index < 0 || index >= this.size())) {
      // Invalid index provided
      return;
    }

    if (index === undefined) {
      // If no index provided, delete the last node
      if (this.tail === null) {
        // List is empty, nothing to delete
        return;
      }

      if (this.size() === 1) {
        // Only one node in the list
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
    } else {
      // Delete node at the specified index
      let current = this._getNodeAtIndex(index);
      if (current === null) {
        // Index is out of bounds
        return;
      }

      if (current.prev === null) {
        // Deleting the head node
        this.head = current.next;
      } else {
        current.prev.next = current.next;
      }

      if (current.next === null) {
        // Deleting the tail node
        this.tail = current.prev;
      } else {
        current.next.prev = current.prev;
      }
    }
  }

  /**
   * Returns the length of a LinkedList
   */
  size(): number {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  /**
   * Chck if a certain value is in a LinkedList
   */
  contains(data: T): boolean {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  /**
   * Returns the data of a given node at a certain index
   */

  get(index: number): T | null {
    const current = this._getNodeAtIndex(index);
    return current ? current.data : null;
  }
  /**
   * Modifies thhe data of a given node at a certain index
   */
  set(index: number, value: T): void {
    const current = this._getNodeAtIndex(index);
    current.data = value;
  }

  /** Returns a view of the portion of this list between the specified fromIndex, inclusive, and toIndex, exclusive.
   * The returned list is backed by this list, so non-structural changes in the returned list are reflected in this list, and vice-versa.
   */

  /**
   * Returns a new Doubly LinkedList containing elements from the specified fromIndex, inclusive, to the specified toIndex, exclusive.
   * @param {number} fromIndex - The starting index (inclusive) of the sublist.
   * @param {number} toIndex - The ending index (exclusive) of the sublist.
   * @returns {DoublyLinkedList<T> | null} - A new Doubly LinkedList containing the sublist, or null if the indices are invalid.
   */

  subList(fromIndex: number, toIndex: number): DoublyLinkedList<T> | null {
    if (fromIndex < 0 || toIndex >= this.size() || fromIndex > toIndex) {
      // Invalid indices, return null
      return null;
    }

    const sublist = new DoublyLinkedList<T>();
    let current: Node<T> | null;

    // Traverse the list to the starting index
    if (fromIndex <= this.size() / 2) {
      current = this.head;
      while (fromIndex > 0) {
        current = current!.next;
        fromIndex--;
      }
    } else {
      current = this.tail;
      while (fromIndex < this.size() - 1) {
        current = current!.prev;
        fromIndex++;
      }
    }

    // Add nodes to the sublist until the ending index
    while (fromIndex <= toIndex) {
      if (current) {
        sublist.add(current.data);
        if (fromIndex === toIndex) {
          break;
        }
        current = fromIndex <= this.size() / 2 ? current.next : current.prev;
        fromIndex++;
      }
    }

    return sublist;
  }

  /**
   * Returns an array of all list items
   * @returns {T[]} list of all the linnked items
   */
  toArray(): T[] {
    const arr: T[] = [];
    let current = this.head;
    if (current === null) return [];
    while (current !== null) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }

  /**
   * Removes the first occurrence of the specified element from the Doubly LinkedList.
   * @param {T} data - The data to be removed from the list.
   */
  remove(data: T): void {
    if (this.head === null) {
      // List is empty, nothing to remove
      return;
    }

    if (this.head.data === data) {
      // If the element to remove is in the head node
      this.head = this.head.next;
      if (this.head !== null) {
        // Update the prev reference of the new head to null
        this.head.prev = null;
      } else {
        // List becomes empty, update the tail to null
        this.tail = null;
      }
      return;
    }

    let current = this.head;
    while (current !== null && current.data !== data) {
      current = current.next;
    }

    if (current === null) {
      // Element not found in the list
      return;
    }

    // Remove the node with the specified data
    if (current.prev !== null) {
      // Update the next reference of the previous node
      current.prev.next = current.next;
    }

    if (current.next !== null) {
      // Update the prev reference of the next node
      current.next.prev = current.prev;
    } else {
      // If the node to remove is the tail, update the tail reference
      this.tail = current.prev;
    }
  }

  /**
   * Remove first node from the list
   * @returns {Node<T>} - The removed node
   */
  removeFirstNode(): Node<T> {
    const removedNode = this.head;
    this.head = this.head.next;
    return removedNode;
  }

  /**
   * Utility method to get the node at a specific index in the Doubly LinkedList.
   * @param {number} index - The index of the node to retrieve.
   * @returns {Node<T> | null} - The node at the specified index, or null if the index is out of bounds.
   */
  private _getNodeAtIndex(index: number): Node<T> | null {
    if (index < 0 || index >= this.size()) {
      // Invalid index provided
      return null;
    }

    let count = 0;
    let current: Node<T>;

    // Determine whether to start traversal from the head or the tail based on index position
    if (index <= this.size() / 2) {
      // If the index is closer to the front half of the list, start from the head
      current = this.head!;
      while (count < index) {
        current = current.next!;
        count++;
      }
    } else {
      // If the index is closer to the back half of the list, start from the tail
      current = this.tail!;
      while (count < this.size() - 1 - index) {
        current = current.prev!;
        count++;
      }
    }

    return current;
  }

  /**
   * Removes all elements from the list.
   */
  clear(): void {
    this.head = null;
    this.tail = null;
  }
}
