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
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// log monday opening hours
console.log(restaurant.openingHours.mon);
// Log using optical chain after open before mon so if mon undefined, no further follow
console.log(restaurant.openingHours.mon?.open);
// Use for both openingHour and mon
console.log(restaurant.openingHours?.mon?.open);

// make array of
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// use for-of loop for logging all elements
for (const day of days) {
  console.log(restaurant.openingHours[day]?.open ?? 'closed');
}
// Methods (can check if function method exist before calling)
console.log(restaurant.order?.(1, 2) || "function doesn't exist");
console.log(restaurant.orderRosito?.(1, 2) || "function doesn't exist");
// Array (check if no element found first)
const arrChek = [
  {
    name: 'faizan',
    email: 'faizan222@gmail',
  },
];
console.log(arrChek[0]?.name || 'no array found');
console.log(arrChek[3]?.name || 'no array found');
// Check if array empty
const user2 = [];
console.log(user2?.[0] ?? 'array empty');
// Check if there is object is in arr or not
const obj1 = [{ name: 'faizan' }];
console.log(obj1[0]?.name ?? 'No object found');
