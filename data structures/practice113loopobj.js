'use strict';
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const openingHours = {
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
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,
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
// logging obj variables (keys)
const properties = Object.keys(openingHours);
console.log(properties);
// We're open for (properties length)
console.log(`We're open for ${properties.length} days`);
// Logging obj property variable seperately (loop)
for (const day of properties) {
  console.log(day);
}
// openStr example with length and properties
let openStr = `The restaurant is open for ${properties.length} days which are `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);
// Now with property values
const values = Object.values(openingHours);
console.log(values);
// Can use entries for both names & values
const entries = Object.entries(openingHours);
console.log(entries);
// Looping over object (destructure too)
for (const [day, { open, close }] of entries) {
  console.log(`Restaurant on ${day} opened from ${open} am to ${close} pm`);
}
