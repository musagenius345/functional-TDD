// Observer.ts

interface Observer<T> {
  update(data: T): void;
}

class Subject<T> {
  private observers: Observer<T>[] = [];

  addObserver(observer: Observer<T>): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer<T>): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data: T): void {
    this.observers.forEach((observer) => {
      observer.update(data);
    });
  }
}

// Example usage:

// Define a type for the event data
type TemperatureEventData = {
  location: string;
  temperature: number;
};

// Create an instance of Subject
const temperatureSensor = new Subject<TemperatureEventData>();

// Implement an observer
class TemperatureDisplay implements Observer<TemperatureEventData> {
  update(data: TemperatureEventData): void {
    console.log(`Temperature at ${data.location}: ${data.temperature}°C`);
  }
}

// Register observer
const display1 = new TemperatureDisplay();
temperatureSensor.addObserver(display1);

// Notify observers
temperatureSensor.notify({ location: "Room1", temperature: 25 });

// Add another observer
const display2 = new TemperatureDisplay();
temperatureSensor.addObserver(display2);

// Notify all observers
temperatureSensor.notify({ location: "Room1", temperature: 26 });

// Remove observer
temperatureSensor.removeObserver(display1);

// Notify remaining observer
temperatureSensor.notify({ location: "Room1", temperature: 27 });
