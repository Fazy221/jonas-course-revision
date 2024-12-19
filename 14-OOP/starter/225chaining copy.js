// Lec 225 - Chaining Methods
// We chained methods in arr with first filtering arr then map then reduce result of map in one line of code. Can do same in methods of class
// Will ret undefined if didn't ret this keyword in deposit, withdrawl etc so we'll do that now
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`Car accelerating at ${this.speed} km/h speed`);
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(`Car braking at ${this.speed} km/h speed`);
    return this;
  }
}

class EV extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  accelerate() {
    this.speed += 20;
    this.#charge -= 0.1;
    console.log(
      `${this.make} accelerating at ${this.speed} km/h with charge of ${
        this.#charge
      }`
    );
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(`Car braking at ${this.speed} km/h speed`);
    return this;
  }
}

const rivian = new EV('Rivian', 120, 23);
rivian.accelerate().brake().accelerate();
rivian.accelerate();
rivian.accelerate();
rivian.accelerate();
