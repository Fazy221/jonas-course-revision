// Make object
const restaurant = {
  starterMenu: ['Capucino', 'Tex-Mex', 'Salad', 'Oreo Shake'],
  mainMenu: ['Beef Burger', 'Cheese Shawarma', 'Coca-Cola', 'Cold Coffee'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
// Log in simple array with declaring variables manually
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);
// Do same with destructuring method
const arr2 = [1, 2, 3];
const [x, y, z] = arr2;
console.log(x, y, z);
// Destructure array from object
let [main, starter] = restaurant.starterMenu;
console.log(starter, main);
// Switch the values of object arrays (normal way)
// const temp = main;
// main = starter;
// starter = temp;
// console.log(starter, main);
// Do same with destructuring method
[starter, main] = [main, starter];
console.log(starter, main);
// Call order function and log in console
console.log(restaurant.order(1, 2));
// Declare variables to object arrays by destructuring
const [first, secondary] = restaurant.order(1, 2);
console.log(first, secondary);
// Destructure nested arrays
const arr3 = [1, 2, [3, 4]];
const [d, , e] = arr3;
console.log(d, e);
// Destructure nested arrays values
const arr4 = [1, 2, [3, 4]];
const [f, , [g, h]] = arr4;
console.log(f, g, h);
// Declare variables to array through destructure and call unidentified as 1
const arr5 = [1, 2, 3];
const [i = 1, j = 1, k = 1, l = 1] = arr5;
console.log(i, j, k, l);
