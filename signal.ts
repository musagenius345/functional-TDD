// Signal.ts

type Listener<T> = (data: T) => void;

class Signal<T> {
  private listeners: Listener<T>[] = [];
  private value: T;

  constructor(initialValue: T) {
    this.value = initialValue;
  }

  subscribe(listener: Listener<T>): () => void {
    this.listeners.push(listener);

    // Return a function to unsubscribe
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  getValue(): T {
    return this.value;
  }

  setValue(newValue: T): void {
    this.value = newValue;
    this.notify();
  }

  private notify(): void {
    this.listeners.forEach((listener) => {
      listener(this.value);
    });
  }
}

// Example usage:

// Define a type for the signal data
type CounterSignalData = number;

// Create an instance of Signal
const counterSignal = new Signal<CounterSignalData>(0);

// Subscribe to the signal
const unsubscribe = counterSignal.subscribe((count) => {
  console.log(`Count: ${count}`);
});

// Get initial value
console.log(`Initial Count: ${counterSignal.getValue()}`);

// Update the signal value
counterSignal.setValue(1);

// Unsubscribe (stop listening)
unsubscribe();
