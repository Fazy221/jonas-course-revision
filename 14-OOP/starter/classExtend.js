// Example from chatGPT

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`${this.name} makes a noise`);
  }
}
class cat extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  speak() {
    console.log(`${this.name} meows`);
  }
  purr() {
    console.log(`${this.name} purrs`);
  }
}
class dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  speak() {
    console.log(`${this.name} barks`);
  }
  waggleTail() {
    console.log(`${this.name} waggle tail`);
  }
}
const browny = new cat('browny', 4, 'persian');
const dogu = new dog('dogu', 3, 'labrador');
console.log(browny);
console.log(dogu);

class Student {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  age() {
    console.log(`${this.fullName} is ${2023 - this.birthYear} years old.`);
  }
}
class StudentSub extends Student {
  constructor(fullName, birthYear, subject) {
    super(fullName, birthYear);
    this.subject = subject;
  }
  introduction() {
    console.log(`${this.fullName} studies ${this.subject} subject.`);
  }
}
const mariaStudent = new StudentSub('Maria', 1998, 'CS');
mariaStudent.introduction();
mariaStudent.age();
const ansaStudent = new StudentSub('Ansa', 2002, 'Arts');
ansaStudent.introduction();
ansaStudent.age();
