// 140 - Simple array methods

// Slice Method (same as string, extract part of arrays w/o changing org one)
// Make array of 6 animal elements
const animalArr = ['Ant', 'Bear', 'Cockroach', 'Dog', 'Eagle'];
// Start extracting from animal element 2
console.log(animalArr.slice(2));
// Now extract up to animal element 4 (4th element and it's after ones won't appear)
console.log(animalArr.slice(2, 4));
// Take last two animal element with negative parameter
console.log(animalArr.slice(-2));
// Take only last animal element
console.log(animalArr.slice(-1));

// Start extracting from animal el 1 then skip last two (HINT: negative parameter will skip given values from end)
console.log(animalArr.slice(1, -2));
// Make copy of animal arr with slice method
const animalArrCopy = animalArr.slice();
console.log(animalArrCopy);
// Do same with spread operator
const animalArrCoopy = [...animalArr];
console.log(animalArrCoopy);
// Can use both depending on personal choice but chaining can be used with slice(). Make one below
console.log(animalArr.slice(1).reverse());
// Splice method (same as slice but changes original array, in other words: mutate)
// Will extract all the elements after value and before one  will be left in org array
let arrr = ['a', 'b', 'c', 'd', 'e', 'f'];
//extract starting with c upto f
console.log(arrr.splice(2));
//a & b left in org arr
console.log(arrr);
// Now do same with animal arr. Take from 3rd animal el to last & put them in seperate arr. Then log original animal arr too.
const animalSplice = ['lion', 'monkey', 'girafe', 'parrot', 'tiger', 'ant'];
console.log(animalSplice.splice(3));
console.log(animalSplice);
// With multiple parameters, 1st is where to extract & 2nd is how many numbers to extract
const arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];
//Will start from c & 3 value mean extract c, d & e
console.log(arr2.splice(2, 3));
// Do same with animal element. In 1st parameter, start from 2nd animal element then extract two values next with it. Also log original animal arr.
const animalarr = ['lion', 'monkey', 'girafe', 'parrot', 'tiger', 'ant'];
console.log(animalarr.splice(1, 3));
console.log(animalarr);
// Reverse method (will reverse array element, mutate)
// Reverse the animal array
const animalRev = ['lion', 'monkey', 'girafe', 'parrot', 'tiger', 'ant'];
console.log(animalRev.reverse());
// Concat (join 2 array elements as 1 array, don't mutate)
// Make two animal arrays and concat them
const animal1 = ['lion', 'monkey', 'girafe'];
const animal2 = ['parrot', 'tiger', 'ant'];
const animalBoth = animal1.concat(animal2);
console.log(animalBoth);
// Do same with spread operator (both can be used, it's up to personal choice)
const animalBooth = [...animal1, ...animal2];
console.log(animalBooth);
// Join method (to join together all array elements as string, don't mutate)
// Join animal arrays as string
console.log(animalBoth.join(', '));
// Join animal arrays strings with -
console.log(animalBoth.join(' - '));

// Challenge from ChatGPT
// Sort Method
const animals = ['Bear', 'Hawk', 'Eagle', 'Cock'];
console.log(animals.sort());
