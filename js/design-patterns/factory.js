class Car {
    make = null;
    model = null;
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}
class carFactory {
    createCar(make, model) {
        return new Car(make, model);
    }
}
