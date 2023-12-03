// PubSub.ts

type Listener<T> = (data: T) => void;

class PubSub<T> {
  private listeners: Listener<T>[] = [];

  subscribe(listener: Listener<T>): () => void {
    this.listeners.push(listener);

    // Return a function to unsubscribe
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  publish(data: T): void {
    this.listeners.forEach((listener) => {
      listener(data);
    });
  }
}

// Example usage:

// Define a type for the event data
type MessageEventData = {
  sender: string;
  message: string;
};

// Create an instance of PubSub
const messageBus = new PubSub<MessageEventData>();

// Subscribe to the event
const unsubscribe = messageBus.subscribe((data) => {
  console.log(`${data.sender}: ${data.message}`);
});

// Publish an event
messageBus.publish({ sender: "User1", message: "Hello, world!" });

// Unsubscribe (stop listening)
unsubscribe();
