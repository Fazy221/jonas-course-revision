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
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Merge starter & main menu
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// make a for-of loop to log every element
for (const item of menu) console.log(item);
// Log items with index using menu.entries()
for (const item of menu.entries()) console.log(item);
// look into menu.entries manually (contain array elements along index number)
console.log([...menu.entries()]);
// can also log elements along numbering (old school method)
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
// do same in new way (destructure)
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
//using {i+1} bcuz index starts with 0 && and i, el bcuz it's first index then elements in menu.entries
