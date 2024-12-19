// Coding Challenge - 1 (my way but bad practice bcuz not recommended function inside CF)
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
//   const accelerate = Number(speed) + 10;
//   console.log(`${make} is accelerating at ${accelerate} km/h speed`);
//   const brake = speed - 5;
//   console.log(`${make} is braking at ${brake} km/h speed`);
// };
// const bmw = new Car('BMW', '120');
// const mercedes = new Car('Mercedes', 95);
// const testVehicle = new Car('testvehicle', 90);
// const testVehicle2 = new Car('testvehicle2', 70);
// my 2nd way
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.calcSpeed = function () {
//   const accelerate = 10 + Number(this.speed);
//   console.log(`Your ${this.make} car is accelerating at ${accelerate}`);
//   const brake = this.speed - 5;
//   console.log(`Your ${this.make} car is braking at ${brake}`);
// };

// const bmw = new Car('BMW', 125);
// const mercedes = new Car('Mercedes', 90);

// bmw.calcSpeed();
// mercedes.calcSpeed();

// const testCar1 = new Car('Ferari', 150);
// const testCar2 = new Car('Bhugati', 285);
// testCar1.calcSpeed();
// testCar2.calcSpeed();
// Instructor's work
const Carr = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Carr.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} accelerating at ${this.speed} km/h`);
};
Carr.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} brake at ${this.speed} km/h`);
};
const bmww = new Carr('BMW', 125);
const mercedess = new Carr('Mercedes', 90);
bmww.accelerate();
bmww.accelerate();
bmww.accelerate();
bmww.brake();
bmww.brake();
mercedess.accelerate();
mercedess.accelerate();
mercedess.brake();
mercedess.brake();
mercedess.brake();
