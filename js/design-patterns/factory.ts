type Make = string | null
type Model = number | string | null
class Car{
  make: Make = null;
  model: Model = null
  constructor(make: Make , model: Model){
    this.make = make;
    this.model = model;
  }
}

class carFactory {
  createCar(make: Make, model: Model){
    return new Car(make, model)
  }
}
