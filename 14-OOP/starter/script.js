'use strict';

// Lec 208 - Constructor Functions and the new Operator
/*
// Constructor function is normal function, just with 'new' operator
// Always start with capital letter
// Arrow function won't work bcuz doesn't have this keyword
const Person = function (firstName, birthYear) {
  //   Logging will ret this keyword
  //   console.log(this);
  // Will take parameter and set it's value, also called instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   Adding methods (must not recommended inside constructor function)
  // If 1000 obj of diff people then function will be carried in each, creating 1000 copies causing performence issue
  //   Can use prototype inheritence
  this.calcAge = function () {
    console.log(2022 - this.birthYear);
  };
};
// const jonas = new Person('Jonas', 1991);
// What happen after function is called with New obj
// 1. Call Person function with new keyword (operator)
// 2. New empty obj {} created inside Person CF on this keyword. Can check by logging this
// 3. We set properties to this keyword, exact same name as parameters bcuz conventional
// 4. By end, our this keyword has 2 new properties. New obj is linked now to CF prototype property. Can check with .__proto__
// 5. Empty obj that was created in beginning has it's properties set now & returned from function
// 6. Can check after storing new obj in variable & logging in console

//Will log jonas with firstName & birthYear
const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// Can make more obj now
const matilla = new Person('Mattila', 2017);
const jack = new Person('Jack', 2002);
// Constructor function (Person) is blueprint of our house & we can make real house now
// console.log(matilla, jack);
// To Note: we didn't make class there bcuz JS don't have that. We made obj out of constructor function.
// In traditional OOP sense, can say that jonas, matilla and jack are instance of Person
// There is also operator to test whether an obj is instance of other or not
// console.log(jonas instanceof Person);
// Won't work with obj literals bcuz didn't create new obj & connected with Person
const jay = 'Jay';
// console.log(jay instanceof Person);

*/
// Lec 209 - Prototypes
/*
// 1. Every func in JS has property called prototype incl. constructor func.]
// 2. Every obj created from CF will get access to all method & properties of CF prototype property
// 3. Prototype mean property of Person obj & every inherited obj from this will get access to it's methods & properties
// 4. This keyword is set to the obj which is calling the method
// 5. After call, JS first check if Jonas has calcAge function if not the JS check Jonas prototype which is Person CF which has calcAge property. This is called prototype inheritance / behavior delegation. Jonas obj inherited calcAge method from it's prototype.
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};
// Can see calcAge method now in prototype property of person
console.log(Person.prototype);
// Now we can calculate obj
jonas.calcAge();
matilla.calcAge();
jack.calcAge();
// With obj literal, would've had to attach calcAge with every single obj

// As jonas & matilla are connected to Person, we can confirm their prototype which is same as CF prototype property
console.log(jonas.__proto__);
// Can also confirm in true or false manner
console.log(jonas.__proto__ === Person.prototype);
// To note: prototype of Person isn't Person prototype but of all obj being created from Person CF
// Can also confirm this way
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilla));
// We can see that Person.prototype isn't prototype of Person. It's only prototype of it's linked properties.
console.log(Person.prototype.isPrototypeOf(Person));
// The proto property is made in CF of Person when new empty obj is created after calling
console.log(jack.__proto__);

// Can also set properties on prototype, not just methods
Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilla);
console.log(jonas.species, matilla.species);
// However, these aren't john or matilla obj own properties. Own properties are declared directly by obj itself.
// Can check too
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
// This whole procedure work same with ES6 classes but not Obj.create
// The prototype of Person Obj will be Person[Obj.prototype] which is null
*/
// Lec 211 - Checking prototype Inheritence on built-in obj like arrays
/*
console.log(jonas.__proto__); //Will show Person prototype
console.log(jonas.__proto__.__proto__); // Moving up prototype chain will show Obj.prototype which is prototype of Person
console.log(jonas.__proto__.__proto__.__proto__); // Moving further will show null bcuz there's nothing on top of Obj.prototype
// Person.prototype has constructor property which point back to Person itself
console.log(Person.prototype.constructor);
// Can inspect too
console.dir(Person.prototype.constructor);

// Let's check prototype of arr
const arr = [3, 4, 5, 6, 1];
// Will have all methods we studied before. Methods like filter, reduce etc live inside this arr prototype.
console.log(arr.__proto__);
console.log(Array.prototype);
// Each arr doesn't copy but inherit these methods from it's prototype
// Can also confirm
console.log(arr.__proto__ === Array.prototype);
// Array is also made by array constructor which is why we can use New Method to
// Can also check it's prototype of prototype which is back to obj.prototype
console.log(arr.__proto__.__proto__);

// Can also add our own methods in array prototype. Let's make unique method which ret values from array without duplicates
const arrTest = [2, 2, 2, 3, 4, 4, 5, 5, 6, 6];
Array.prototype.unique = function () {
  // this keyword will be arr on which this method will be called
  return [...new Set(this)];
};
console.log(arrTest.unique());
// To note: Extending prototype of built-in obj like we did above ain't good idea. Gud for small project maybe but next version of JS might add method with same name like unique so code will replace it and get broke. Also multiple dev doing same method with diff name can cause bugs.
// Can also check DOM prototype after selecting them and it's parents are like HTML Element > HTML heading el > Element > Node > Event > Object etc. Type console.dir(h1) to see
const h1 = document.querySelector('h1');
// As function is also obj, can also check it's prototype which have all function methods
console.log(x => x + 1);
*/
// Coding Challenge - 1 (my way but bad practice bcuz not recommended function inside CF)
/*
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
*/
// Lec 213 - ES6 Classes
/*
// Classes have declaration & expression just like function bcuz they're special type of functions

// Class expression
// const PersonCll = class {};
// Class declaration
class PersonCl {
  // Add constructor method (work similar to CF but actually method of class)
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // Can make method there and it'll be added to .prototype property just like before
  calcAge() {
    console.log(2022 - this.birthYear);
  }
  // Can add multiple methods to prototype
  greet() {
    console.log(`Hey ${this.firstName}!`);
  }
}
const jessica = new PersonCl('Jessica', 1996);
jessica.calcAge();
jessica.greet();
// Can also add method outside like before
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}!`);
// };
// jessica.greet();

// Things to note:
// 1. Classes are not hoisted even with class declaration (putting class before declaring won't cause error)
// 2. First class citizens (can pass in func & ret from func)
// 3. Body of class always executed in strict mode (even if we don't activate strict)
// 4. Can use both CF & classes, depend on personal preference
*/
// Lec 214 - Setters and Getters
/*
// Every obj has it, these properties called assessor while normal called data properties
// Get & Set values, will use in obj literal 1st
const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],
  // Want to get latest movement
  get latest() {
    return this.movements.slice(-1).pop(); //Will ret arr with last position so use pop
  },
  // Can set latest to add new mov to arr
  set latest(mov) {
    this.movements.push(mov);
  },
};
// Won't call method but log as it was property
console.log(account.latest);
// Before like method
// account.latest(50);
// After like property
account.latest = 50;
console.log(account.movements);

// Doing same in classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2022 - this.birthYear);
  }
  greet() {
    console.log(`Hi ${this.fullName}!`);
  }
  // calculating age with get method, will set as property
  get age() {
    return 2022 - this.birthYear;
  }
  // Also useful for data validation, can create setter to check if full name or not
  // Will've to use _ when setting property that already exist (fullName in this case)
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not full name`);
  }
  // Will show undefined so return with get method too
  get fullName() {
    return this._fullName;
  }
}
const jessica = new PersonCl('Jessica Davis', 1999);
jessica.calcAge();
jessica.greet();
// Can log age now as property, no need to call
console.log(jessica.age);
// This age property can be found in prototype of Jessica; Will get alert prompt
const walter = new PersonCl('Walter', 1965);
// Many people don't use getter, setter but they're useful in data validation
*/
// Note for me: Instructor didn't declar _fullname in start which is why single name like water/ansa was undefined. Fixed it now.
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this._fullName = fullName; // define the _fullName property in the constructor
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2022 - this.birthYear);
  }
  greet() {
    console.log(`Hi ${this.fullName}!`);
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not full name`);
  }
  get fullName() {
    return this._fullName;
  }
}
const jessica = new PersonCl('Jessica', 2002);
const ansa = new PersonCl('Ansa Khalid', 1998);
jessica.greet();
ansa.greet();
*/
// Lec 215 - Static Methods
/*
// First understand array.from which convert any array like structure to real array
console.log(Array.from(document.querySelectorAll('h1')));
// From method is attached to entire array constructor not a prototype property so can't use with array. This is why it's static method.
// console.log([1, 2, 3].from());
// Number.parseFloat is another example of static method. This don't work on Number but only constructor

// Using on constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const jonas = new Person('Jonas', 2002);
const jadu = new Person('Jonas', 1998);
// Implementing static method
Person.hey = function () {
  console.log('Hey there ✋');
};
Person.hey(); // This one is not inherited
// Can't use for inherited objs bcuz not in prototype
// jonas.hey();

// Doing same in class
class PersonCl {
  constructor(fullName, birthYear) {
    this._fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2022 - this.birthYear);
  }
  greet() {
    console.log(`Hi ${this.fullName}!`);
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} Not full name`);
  }
  get fullName() {
    return this._fullName;
  }
  // Adding static method (won't get called on inherited obj & can be log directly)
  static hey() {
    console.log('HI');
  }
}
const jessica = new PersonCl('Jessica', 2002);
const ansa = new PersonCl('Ansa Khalid', 1998);
jessica.greet();
ansa.greet();
// Trying calling static with inherited obj, result error
// jessica.hey();
// Now calling directly, will work
Person.hey();

// To note, as this is static, the one methods which are inherited are called instance methods like greet and calcAge above.
*/
// Lec 216 - Obj.create (least used way in rf for implementing prototypal inhericance)
/*
// Use obj.create to manually set prototype of obj to any other obj
const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },
  // We'll make func similar to constructor in classes but instead of new operator, we use with sarah example. Can call it init.
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
// Steven can be linked to PersonProto obj which'll be it's prototye
const steven = Object.create(PersonProto);
// Can also see in console even though it's empty
console.log(steven);
// Let's add properties to steven
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
// Verifying
console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarha', 1979);
sarah.calcAge();
*/
// Coding Challenge - 2
/*
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
*/

// Lec 219 - Coding Challenge #3
/*
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
*/
// Lec 220 - Inheritance b/w classes
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this._fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2022 - this.birthYear);
  }
  greet() {
    console.log(`Hi ${this.fullName}!`);
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} Not full name`);
  }
  get fullName() {
    return this._fullName;
  }
  // Adding static method (won't get called on inherited obj & can be log directly)
  static hey() {
    console.log('HI');
  }
}
const jessica = new PersonCl('Jessica', 2002);
const ansa = new PersonCl('Ansa Khalid', 1998);
jessica.greet();
ansa.greet();
// Trying calling static with inherited obj, result error
// jessica.hey();

// In case of classes, will use extend keyword and super function to connect student with PersonCl
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Will use super instead of call and this keyword. Also should happen first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`${this.fullName} and I study ${this.course}.`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2023 - this.birthYear
      } years old but as a student I feel more like ${
        2023 - this.birthYear + 10
      }`
    );
  }
}
const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
console.log(martha);
martha.calcAge();
martha.introduce();
*/
// Lec 221 - Inheritence between class object
/*
const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
// Making student proto as child proto of Person Proto
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(
    `I'm ${2023 - this.birthYear} years old but as a student I feel more like ${
      2023 - this.birthYear + 10
    }`
  );
};
// Now jay can be child prototype of Student Proto
const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.calcAge();
jay.introduce();

const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
steven.init('Steven', 2003);
steven.calcAge();

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(
    `Hi My name is ${this.firstName} and I study ${
      this.course
    } at a university. My age is ${
      2023 - this.birthYear
    } but people think I'm ${2023 - this.birthYear - 10} year old`
  );
};
const stella = Object.create(StudentProto);
stella.init('Stella', 1998, 'Physics');
stella.introduce();
*/
// Lec 222 - Another class example
/*
// Public interface of our obj
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Can protect pin
    this._pin = pin;
    // Movement as protected property (not truly private)
    this._movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }
  // Methods below can also be called API and they can be accessed if no data encapsulation
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }
}
const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);
// acc1.movements.push(250);
// acc1.movements.push(-140);
// Can make method directly
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1._approveLoan(1000);
console.log(acc1);
// We can also access pin but it isn't good for security purpose
console.log(acc1.pin);
// Now devs can access movements without overwriting them unless use _
console.log(acc1.getMovements());

// Can also this now but now, we've done above method so no need
// acc1._movements.push(250);
// acc1._movements.push(-140);

// Lec 223 - Encapsulation_ Protected Properties and Methods (To protect data being accessed from outside the class)
// JS classes don't support it so we'll fake it with convention
// First we'll protect movements array so no one can manipulate
*/
// Lec 224 - Private class fields and methods
/*
// Public Fields
// Private Fields
// Public Methods
// Private Methods
// There is also static version

class Account {
  // Public fields (no need to use let/const)
  // They're only instances. They aren't on prototype. They're just referencable. No need to later set this keyword with fields
  locale = navigator.language;

  // Private Fields (can make properties not accessible from outside, will be referencable on instances and not on prototype)
  #movements = []; //Will use # so it'll give error if access from out. Will change from everywhere else too
  // For pin, we'll have to set it as empty variable.
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected proprty
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public Methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }

  // Private Methods (to hide implementation details)
  #approveLoan(val) {
    return true;
  }
  // Static which we usually use for helper function (not available on instances but class themselves)
  static helper() {
    console.log('Helper');
  }
}
const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1);
console.log(acc1.pin);
// JS won't let us access private fields now & give syntax error
// console.log(acc1.#movements);
// Can use this method still bcuz it's in our public API
// console.log(acc1.getMovements());
// console.log(acc1.#pin);
// Private methods
// acc1.#approveLoan(1000);
Account.helper();

// Lec 225 - Chaining Methods
// We chained methods in arr with first filtering arr then map then reduce result of map in one line of code. Can do same in methods of class
// Will ret undefined if didn't ret this keyword in deposit, withdrawl etc so we'll do that now
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
*/
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
