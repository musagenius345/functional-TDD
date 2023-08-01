export class Queue {
  constructor() {
    this.items = []
  }

  // Add an element to the back of the queue
  enqueue(item) {
    this.items.push(item)
  }

  // Remove the front element of the queue (dequeue)
  dequeue() {
    if (this.isEmpty()) {
      return new Error('Queue underflow')
    }

    this.items.shift()
  }

  // Return the front element without removing it
  front() {
    if (this.isEmpty()) {
      return null
    }

    return this.items[0]
  }
  size() {
    return this.items.length
  }
  isEmpty() {
    return this.items.length === 0
  }

  clear() {
    this.items = []
  }

}
