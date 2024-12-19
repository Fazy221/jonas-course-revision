const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} on ${time}.`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// Rest operator (opposite of SO and pack elements into array instead)
// 1) Destructuring with spread vs rest op
const arr = [1, 2, 3];
const spreadArr = [4, 5, ...arr];
console.log(spreadArr);
// Rest collects unused elements when destructuring object (restaurant example)
const [a, b, ...others] = [1, 2, 3, 4, 6, 7, 8];
console.log(a, b);
console.log(others);
// Should be in last so JS know when to collect rest of elements
// Objects (fri & thur put in their own objects)
const { sat, ...weekends } = restaurant.openingHours;
console.log(sat);
console.log(weekends);
// 2) Functions (adding sum with for loop and using rest in x)
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum;
};
console.log(add(2, 3));
const x = [2, 3, 4, 5, 1, 5];
console.log(add(...x));
//First argument was logged as value while rest were packed in array by rest operator

// Challenge
function sumNumbers(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum;
}
console.log(sumNumbers(2, 3));
const xx = [2, 3, 4];
console.log(sumNumbers(...xx));
