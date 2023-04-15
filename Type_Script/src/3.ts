class Car {
  chaiseNumber: number;
  name: String;
  constructor(chaiseNumber: number, name: String) {
    this.chaiseNumber = chaiseNumber;
    this.name = name;
  }
}

class Indica extends Car {
  fuelType: string;

  constructor(fuelType: string) {
    super(1,"vetetra");
    this.fuelType = fuelType;
  }
}
