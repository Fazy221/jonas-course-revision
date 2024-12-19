// Lec 220 - Inheritance b/w classes

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
