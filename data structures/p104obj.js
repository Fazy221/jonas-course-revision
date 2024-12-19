const jackNutrition = {
  nameShop: ['Jack Nutrition'],
  categories: ['BCC', 'Energy Drinks', 'Protein Power'],
  mainDiscounted: ['Whey Protein Powder', 'Isolated Whey', 'Dymatize Protein'],
  oldOriginals: ['Red Bull drink', 'String', 'Protein Bottle'],
  openingHours: {
    fri: {
      open: 11,
      close: 22,
    },
    sat: {
      open: 9,
      close: 20,
    },
    sun: {
      open: 10,
      close: 21,
    },
  },
  order: function (mainIndex, oldIndex) {
    return [this.mainDiscounted[mainIndex], this.oldOriginals[oldIndex]];
  },
  orderDelivery: function ({
    mainIndex = 0,
    oldIndex = 1,
    location = 'coming soon',
    time = 'soon',
  }) {
    return `Your order ${this.mainDiscounted[mainIndex]} and ${this.oldOriginals[oldIndex]} has been confirmed! It will arrive around ${time} at ${location}.`;
  },
};
// Logging object variables with destructure
const { nameShop, categories, mainDiscounted, oldOriginals } = jackNutrition;
console.log(nameShop, categories, mainDiscounted, oldOriginals);
// Giving new variables with reference to property names of object
const {
  nameShop: shop,
  categories: tags,
  mainDiscounted: main,
  oldOriginals: old,
} = jackNutrition;
console.log(shop, tags, main, old);
// Default values if undefined value (useful when receiving data from other site)
// Can also combine syntax from propertywith starterMenu example
const { oldOriginals: oldd = [], mainn = [] } = jackNutrition;
console.log(oldd, mainn);
// Mutating variables
let a = 'Ansa';
let b = 'Khalid';
let obj = { a: 'Aansa', b: 'Faizan' };
// We want the code in code block () as it works differently in case of object
({ a, b } = obj);
console.log(a, b);

// Nesting objects (friday is inside opening hour inside restaurant so obj in obj in obj which need nesting)
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// Alternative but better way
const {
  openingHours: {
    sun: { open: o, close: c },
  },
} = jackNutrition;
console.log(o, c);
// Passing object in function (standard thing in js)
console.log(
  jackNutrition.orderDelivery({
    mainIndex: 1,
    oldIndex: 2,
    location: '385-C, Marghazar Colony',
    time: 12,
  })
);
// checking default values
console.log(
  jackNutrition.orderDelivery({
    mainIndex: 1,
    oldIndex: 2,
  })
);
