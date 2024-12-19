/*
// Lec 214 - Setters and Getters
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
// Animals example from chatGPT
class Animals {
  constructor(species, name) {
    this.species = species;
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  description() {
    console.log(`This animal of species ${this.species} is ${this._name}.`);
  }
}
const dog = new Animals('Dog', 'Labrador');
dog.description();
