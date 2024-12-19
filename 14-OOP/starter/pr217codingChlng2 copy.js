// Coding Challenge - 2
// My way
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    const accelerate = (this.speed += 10);
    console.log(`${this.make} accelerating at ${accelerate} speed km/h speed`);
  }
  brake() {
    const brake = (this.speed -= 5);
    console.log(`${this.make} braking at ${brake} km/h speed `);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    return this.speed * 1.6;
  }
}
const ford = new CarCl('Ford', 120);
ford.speedUS = 24;
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford.speedUS);
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};
const Student = function (firstName, birthYear, course) {
  // This part of below 2 code is same as of Parent class.
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  // Instead of duplicate, can call directly
  // Will give error however bcuz this keyword undefined.
  // Person(firstName, birthYear);
  // Manually insert this keyword using call method. It will call set property of this from parent obj.
  Person.call(this, firstName, birthYear);

  this.course = course;
};
// It's imp to make person as prototype of Student for connecting. Can do through Obj.create
Student.prototype = Object.create(Person.prototype);
// Can't do Student.prototype = Person.prototype bcuz they're parent child not same obj

// Need to keep methods after object.create or it will override methods.
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2003, 'Computer Science');
console.log(mike);
mike.introduce();
// Now with calcAge, JS will first look in Mike obj then it's proto Student obj then it's proto proto Person obj. It will use method no matter how far up in proto chain it is.
mike.calcAge();
// Can also see in console
console.log(mike.__proto__); //Student proto
console.log(mike.__proto__.__proto__); //Person proto
// Instead of pointing back to student, it'll point to Person bcuz we used Obj.create. Can fix
console.dir(Student.prototype.constructor);
console.log(mike instanceof Student); //True
console.log(mike instanceof Person); //True
// Fixing
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
