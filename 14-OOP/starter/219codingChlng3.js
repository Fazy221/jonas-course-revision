// Lec 219 - Coding Challenge #3
// My way (I initially took chatGPT help for extend and this keyword and then overstack for rounding charge numbers with toFixed. Then finally, it worked after lots of tweaks)
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    const accelerate = (this.speed += 10);
    console.log(`Car accelerating at ${accelerate} km/h speed`);
  }
  brake() {
    const brake = (this.speed -= 5);
    console.log(`Car braking at ${brake} km/h speed`);
  }
}
class EV extends Car {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }
  // chargeBattery(chargeTo) {
  //   this.charge -= 0.1;
  // }
  accelerate() {
    let accelerate = (this.speed += 20);
    let chargeTo = (accelerate -= 0.1);
    let chargee = (this.charge -= 0.1);
    chargee = chargee.toFixed(2);
    console.log(
      `${this.make} accelerating at ${chargeTo} with charge of ${chargee}`
    );
  }
}
const bmw = new Car('BMW', 120);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();
bmw.brake();
const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
const evtest1 = new EV('EV test 1', 80, 25);
const evtest2 = new EV('EV test 2', 80, 25);
evtest1.accelerate();
evtest1.accelerate();
evtest1.accelerate();
evtest2.accelerate();
evtest2.accelerate();
