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
    starterIndex,
    mainIndex,
    location = 'Lahore',
    time = 'an hour...',
  }) {
    console.log(
      `Order completed! Your ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} is being placed for order and will come to ${location} on around ${time} `
    );
  },
};
// Logging object variables with destructure
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// Giving new variables with reference to property names of object
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// Default values if undefined value (useful when receiving data from other site)
// Can also combine syntax from propertywith starterMenu example
const { main = [], starterMenu: starter = [] } = restaurant;
console.log(main, starter);

// // Mutating variables
// let a = 121;
// let b = 191;
// const obj = { a: 21, b: 91, c: 31 };
// // We want the code in code block () as it works differently in case of object
// ({ a, b } = obj);
// console.log(a, b);
// Easier Example
let a = 'Faizan';
let b = 'Raza';
let surNameChange = { a: 'Fizan', b: 'Mansoor' };
({ a, b } = surNameChange);
console.log(a, b);
// Nesting objects (friday is inside opening hour inside restaurant so obj in obj in obj which need nesting)
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
// Alternative but better way
const {
  openingHours: {
    fri: { open: o, close: c },
  },
} = restaurant;
console.log(o, c);
// Passing object in function (standard thing in js)
restaurant.orderDelivery({
  starterIndex: 2,
  mainIndex: 2,
  location: 'Ichra, lahore',
  time: '22:00',
});
// checking default values
restaurant.orderDelivery({
  starterIndex: 1,
  mainIndex: 1,
});
