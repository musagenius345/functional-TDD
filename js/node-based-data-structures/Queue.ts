import { DoublyLinkedList } from "./DoublyLinkedList";

export class Queue <T>{
  #queue: DoublyLinkedList<T>
  #data: DoublyLinkedList<T>
  constructor(){
    this.#data = new DoublyLinkedList<T>()
  }

  enqueue(el: T){
    this.#data.add(el)
  }

  dequeue(){
    return this.#data.removeFirstNode()
  }

  read(){
    return this.#data.head ? this.#data.head : null
  }

}


