// Lec 209 - Prototypes
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
