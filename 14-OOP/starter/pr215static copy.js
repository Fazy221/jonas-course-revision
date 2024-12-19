// Lec 215 - Static Methods
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

// Password validation example (chatGPT)
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  static validatePassword(password) {
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regexPassword.test(password);
  }
}
const user1 = new User('faizan', 'pass');
const user2 = new User('faiz', 'password123');
console.log(User.validatePassword(user1.password));
console.log(User.validatePassword(user2.password));
