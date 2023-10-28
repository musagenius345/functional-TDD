/*
 * Represent a node in a node based structures
 */
export class Node<T> {
  data: T;
  next: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}
/**
 * Represents a linked list with various operations.
 */
class LinkedList<T> {
  head: Node<T> | null;

  /**
   * Adds a new element to the end of the list.
   * @param {T} data - The data to be added to the list.
   */
  add(data: T): void {
    const newNode = new Node(data);

  if (!this.head) {
    // If the list is empty, set the new node as the head
    this.head = newNode;
  } else {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    // Set the next of the last node to the new node
    current.next = newNode;
  }}
/**
   * Checks if the linked list is empty.
   * @returns {boolean} - True if the list is empty, false otherwise.
   */
  isEmpty(): boolean{
    return this.head !== null
  }
  /**
   * Remove linked node by index. if index is not provided last item is removed
   */
  delete(index?: number): void {
    if (index < 0) {
      // Invalid index or non-numeric argument provided
      return;
    }

    if (index === undefined) {
      // If no index provided, delete the last node
      if (this.head === null) {
        // List is empty, nothing to delete
        return;
      }

      if (this.head.next === null) {
        // Only one node in the list
        this.head = null;
      } else {
        let current = this.head;
        let previous: Node<T> | null = null;
        while (current.next !== null) {
          previous = current;
          current = current.next;
        }
        if (previous) {
          previous.next = null;
        }
      }
    } else {
      // Delete node at the specified index
      let current = this.head;
      let previous: Node<T> | null = null;
      let count = 0;

      while (current !== null && count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      if (current === null) {
        // Index is out of bounds
        return;
      }

      if (previous === null) {
        // Deleting the head node
        this.head = current.next;
      } else {
        previous.next = current.next;
      }
    }
  }

 /**
  * Returns thhhe length of a LinkedList
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
  // if (index < 0) {
  //   return null;
  // }
  // let count = 0;
  // let current = this.head;
  // while (current !== null && count < index) {
  //   current = current.next;
  //   count++;
  // }
    const current = this._getNodeAtIndex(index) 
  return current ? current.data : null;
}
/**
 * Modifies thhe data of a given node at a certain index
 */
set(index: number, value: T): void{
    // if(index  < 0) return null
    //
    // let count = 0
    // let current = this.head
    //
    // while(current !== null && count < index){
    //   current = current.next
    //   count++
    // }
    const current = this._getNodeAtIndex(index)

    current.data = value
  }

  /** Returns a view of the portion of this list between the specified fromIndex, inclusive, and toIndex, exclusive. 
    * The returned list is backed by this list, so non-structural changes in the returned list are reflected in this list, and vice-versa.
    */
  

  subList(fromIndex: number, toIndex: number): LinkedList<T> | null {
    if (fromIndex < 0 || toIndex > this.size() || fromIndex > toIndex) {
      // Invalid indices, return null or throw an error as appropriate
      return null;
    }

    const sublist = new LinkedList<T>();
    let current = this.head;
    let index = 0;

    // Traverse the original list until the fromIndex
    while (current !== null && index < fromIndex) {
      current = current.next;
      index++;
    }

    // Add nodes to the sublist until the toIndex (exclusive)
    while (current !== null && index < toIndex) {
      sublist.add(current.data);
      current = current.next;
      index++;
    }

    return sublist;
  }



  /** 
   * Returns an array of all list items
   * @returns {T[]} list of all the linnked items
   */
  toArray(): T[] {
    const arr: T[] = []
    let current = this.head
    if(current === null) return []
    while(current !== null){
      arr.push(current.data)
      current = current.next
    }
    return arr;
  }

/**
   * Removes the first occurrence of the specified element from the list.
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
      return;
    }

    let current = this.head;
    let previous: Node<T> | null = null;

    while (current !== null && current.data !== data) {
      previous = current;
      current = current.next;
    }

    if (current === null) {
      // Element not found in the list
      return;
    }

    // Remove the node with the specified data
    if (previous !== null) {
      previous.next = current.next;
    }
  }

// Utilty
private _getNodeAtIndex(index: number): Node<T> | null {
  if (index < 0) {
    return null;
  }

  let count = 0;
  let current = this.head;
  while (current !== null && count < index) {
    current = current.next;
    count++;
  }
  return current;
}
  /**
   * Removes all elements from the list.
   */
  clear(): void{
    this.head = null
  }
}

// Example usage
const list = new LinkedList<number>();
list.add(1);
list.add(2);
list.add(3);

console.log(list.toArray()); // Output: [1, 2, 3]
list.delete(2);
console.log(list.toArray()); // Output: [1, 3]
console.log(list.contains(3)); // Output: true
console.log(list.contains(2)); // Output: false

