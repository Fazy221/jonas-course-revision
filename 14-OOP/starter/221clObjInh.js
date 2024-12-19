// Lec 221 - Inheritence between class object
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
/*
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
