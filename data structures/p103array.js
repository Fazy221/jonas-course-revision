// Make object
const restaurant = {
  name: 'Karachi Silver Spoon',
  categories: ['Chaawl', 'Chicken', 'Metha'],
  starterMenu: ['Chicken Korma', 'Beef kabab', 'Malai Boti'],
  mainMenu: ['Chicken Tika', 'Mutton', 'Gulab Jamun'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
// Log in simple array with declaring variables manually
const arr = ['good', 'bad', 'evil'];
const one = arr[0];
const two = arr[1];
const three = arr[2];
console.log(one, two, three);
// Do same with destructuring method
const arrNew = ['good', 'bad', 'evil'];
const [$one, $two, $three] = arrNew;
console.log($one, $two, $three);
// Destructure array from object
let [starter, main] = [restaurant.starterMenu, restaurant.mainMenu];
console.log(starter, main);
// Switch the values of object arrays (normal way)
// let temp = main;
// main = starter;
// starter = temp;
// console.log(starter, main);
// Do same with destructuring method
[starter, main] = [main, starter];
console.log(starter, main);
// Call order function and log in console
console.log(restaurant.order(1, 2));
// Declare variables to object arrays by destructuring
const [first, secondary] = restaurant.order(2, 0);
console.log(first, secondary);
// Destructure nested arrays
const ar = [1, 2, 3, [4, 5]];
const [a, , c, d] = ar;
console.log(a, c, d);

// Destructure nested arrays values
const are = [1, 2, 3, [4, 5]];
const [e, , f, [, h]] = ar;
console.log(e, f, h);

// Declare variables to array through destructure and call unidentified as 1
const areee = [1, 2, 3];
const [i = 1, j = 1, k = 1, l = 1] = areee;
console.log(i, j, k, l);
