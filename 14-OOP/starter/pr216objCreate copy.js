// Lec 216 - Obj.create (least used way in rf for implementing prototypal inhericance)
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

// Challenge - ChatGPT
const animal = {
  name: '',
  species: '',
  habitat: '',
  sound: '',
};
const cat = Object.create(animal);
cat.name = 'browny';
cat.species = 'cat';
cat.habitat = 'scratching with paws';
cat.sound = 'meow';
console.log(cat);
cat.getInfo = function () {
  console.log(`Name: ${this.name}`);
  console.log(`Species: ${this.species}`);
  console.log(`Habitat: ${this.habitat}`);
  console.log(`Sound: ${this.sound}`);
};
cat.getInfo();
