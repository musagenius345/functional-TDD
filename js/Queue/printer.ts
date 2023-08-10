import { Queue } from "./Queue.js";

class PrinterManager {
   queue = new Queue()


  printJob(document) {
    this.queue.enqueue(document)

  }

  run() {

    while (this.queue.front()){
      this.print(this.queue.front())
      this.queue.dequeue()
    }
  }



  print(document) {
    console.log(document)
  }
}

const printManager = new PrinterManager()
// printManager.printJob('First Document')
// printManager.printJob('Second Document')
// printManager.printJob('Third Document')
// printManager.printJob('Fourth Document')
//
printManager.run()

