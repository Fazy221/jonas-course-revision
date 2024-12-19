// Lec 208 - Constructor Functions and the new Operator
// Constructor function is normal function, just with 'new' operator
// Always start with capital letter
// Arrow function won't work bcuz doesn't have this keyword
const Person = function (firstName, birthYear) {
  //   Logging will ret this keyword
  // console.log(this);
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
