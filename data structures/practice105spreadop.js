'use strict';
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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
      `Order completed! Your pasta is made with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};
// old method of making array with new elements from old array
const arr = [1, 2, 3];
const badNewArr = [4, 5, arr[0], arr[1], arr[2]];
console.log(badNewArr);
// Using Spread Operator(SO) (...arr will insert all elements of arr array)
const goodNewArr = [4, 5, ...arr];
console.log(goodNewArr);
// Can also use SO to log in all elements at once of array
console.log(...arr);
// Now we can use it to add additional item to existing array from restaurant
console.log('Fast-Food', ...restaurant.categories, 'Desserts');
// TWO Important usecases of SO
// 1. Copy Array
const categoriesCopy = [...restaurant.categories];
console.log(categoriesCopy);
//2. Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
// SO works on all iterables like strings, maps,sets
// Working with strings (SO will put out individual elements)
const string = 'Jonas';
const letters = [...string, '', 'S.'];
console.log(letters);
console.log(...string);
// Won't work with template literals bcuz it expects seperate values

// Let's use function
// const ingredients = [
//   prompt("Let's make ingredient 1!"),
//   prompt('Ingredient 2'),
//   prompt('Ingredient 3'),
// ];
//old method
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

//SO method (will write food manually in prompt, same in above)
// restaurant.orderPasta(...ingredients);
// SO can also work on objects even if it's not iterable
const addRestaurant = { foundedIn: '1998', ...restaurant, founder: 'Faizan' };
console.log(addRestaurant);
// Can also copy object then override changes in it
let newRestaurant = { ...restaurant, name: 'Malang jan' };
console.log(restaurant);
console.log(newRestaurant);
