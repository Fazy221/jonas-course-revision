// Lec 213 - ES6 Classes
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
