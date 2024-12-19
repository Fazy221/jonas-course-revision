'use strict';
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
    console.log(`Your order with ${ing1}, ${ing2} and ${ing3} is confirmed!`);
  },
};
// old method of making array with new elements from old array
const badArr = [1, 2, 3];
const badArrNew = [4, 5, badArr[0], badArr[1], badArr[2]];
console.log(badArrNew);
// Using Spread Operator(SO) (...arr will insert all elements of arr array)
const goodArrNew = [4, 5, ...badArr];
console.log(goodArrNew);
// Can also use SO to log in all elements at once of array
console.log(...badArr);
// Now we can use it to add additional item to existing array from restaurant
console.log('Fish', ...restaurant.categories, 'Gulab Jaman');
// TWO Important usecases of SO

// 1. Copy Array
const copyCategories = [...restaurant.categories];
console.log(copyCategories);
//2. Join 2 arrays
const mixMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(mixMenu);
// SO works on all iterables like strings, maps,sets
// Working with strings (SO will put out individual elements)
const str = 'Ansa';
const letters = [...str, "'s"];
console.log(letters);
console.log(...str);
// Won't work with template literals bcuz it expects seperate values

// Let's use function
// const ingredients = [
//   prompt('Give Ing 1'),
//   prompt('Give ing 2'),
//   prompt('give ing 3'),
// ];
//old method
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
//SO method (will write food manually in prompt, same in above)
// restaurant.orderPasta(...ingredients);
// SO can also work on objects even if it's not iterable
const newInfoRestaurant = {
  founderName: 'Faizan Raza',
  foundedIn: 1991,
  ...restaurant,
};
console.log(newInfoRestaurant);
// Can also copy object then override changes in it
const copyRestaurant = { ...restaurant, name: 'Karachi Silver Spoons' };
console.log(copyRestaurant);
