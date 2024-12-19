// Lec 211 - Checking prototype Inheritence on built-in obj like arrays
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