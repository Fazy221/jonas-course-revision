'use strict';
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// ES6 method (#3)
// calculating days
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  openingHours: {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    //can compute values too
    [`day=${2 + 4}`]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //new ES6 method (#1)
  // calling outside objects old method
  // openingHours: openingHours,
  // New method to call object
  openingHours,
  // new ES6 Method (#2)
  // No need to declare function expression like below.
  orderOld: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // Can call function directly like below. (will change rest too)
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} on ${time}.`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
// for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for-of loop more simple than for-loop for logging individual values of arrays in console
// can also use continue, break
for (const item of menu) console.log(item);
// can also log items with index using menu.entries()
console.log('---------with index');
for (const item of menu.entries()) {
  console.log(item);
}
// Menu.entries() look (contain array elements along index number)
console.log('---------menu.entries');
console.log([...menu.entries()]);
// can also log in this cool way (old school method)
console.log('---------with numbering');
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
// do same in new way (destructure)
console.log('---------with numbering but easier way');
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
} //using {i+1} bcuz index starts with 0 && and i, el bcuz it's first index then elements in menu.entries
*/
/*
//Nullish Coalescing Operator 
//As discussed before, 0 is falsy value which is why it return 10 which is truthy so we'll use nullish coalescing operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
//Work almost same as || but consider 0 & '' as truthy (don't work with null or undefined)
const guuestCorrect = restaurant.numGuests ?? 10;
console.log(guuestCorrect);
*/
/*
//Shortcircuting with AND OR operators
// Logical Operators can use/return any data type and short-circuiting
// Short circuiting is if first value is truthy, it will immediately return it
console.log('---- OR ---');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null); //if both values false then last value return like null here
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); //as restaurant.numGuests don't exist so undefined(false) & 10 is truthy so returned
//We can also use below method instead of turnory operator like above
restaurant.numGuests = 23; //(as we give it value then it will return)
const guests2 = restaurant.numGuests || 10;
console.log(guests2);
//Will also won't work if number of guests are 0 bcuz falsy value
restaurant.numGuests = 0;
const guests3 = restaurant.numGuests || 10;
console.log(guests3);

console.log('---- AND ---'); //Works exact opposite way (return falsy)
console.log(0 && 'Jonas');
console.log(7 && 'Jonas'); //Will return last value if all truthy

console.log('Hello' && 23 && null && 'jonas');
//Using IF to see if function exist then execution
if (restaurant.orderPasta) {
  restaurant.orderPasta('mushrooms', 'spinach');
}
// We can also use || there when we want to see if value/property exist or not
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); // If restaurant.pizza doesn't exist then it will return false otherwise it will evaluate last part bcuz &&
//For practical applications, can use || for default values and && for 2nd operand if 1st is true
*/
/*
//Rest Operator 
// Opposite of SO and pack elements into array instead
// 1) Destructuring with spread vs rest op
const arr = [4, 5];
const arrNew = [1, 2, ...arr]; //Spread op right side (value side)
const [a, b, ...others] = [1, 2, 3, 4, 5]; //Rest op left side (variable side)
console.log(a, b, others); //a = 1, b = 2, others as rest of array
// Rest collects unused elements when destructuring object (restaurant example)
const [pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Risotto, otherFood);
// Should be in last so JS know when to collect rest of elements
// Objects (fri & thur put in their own objects)
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
// 2) Functions (adding sum with for loop and using rest in x)
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);
//First argument was logged as value while rest were packed in array by rest operator
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms'); //Will get empty array
*/
/*
// Spread Operator
// old method of making array with new elements from old array
const arr = [7, 8, 9];
const arrBadNew = [1, 2, arr[0], arr[1], arr[2]];
console.log(arrBadNew);
// Using Spread Operator(SO) (...arr will insert all elements of arr array)
const newArr = [1, 2, ...arr];
console.log(newArr);
// Can also use SO to log in all elements at once of array
console.log(...newArr);
// Now we can use it to add additional item to existing array from restaurant
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
// TWO Important usecases of SO
// 1. Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
//2. Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
// SO works on all iterables like strings, maps,sets
// Working with strings (SO will put out individual elements)
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);
// Won't work with template literals bcuz it expects seperate values

// Let's use function
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);
//old method
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
//SO method (will write food manually in prompt, same in above)
// restaurant.orderPasta(...ingredients);

// SO can also work on objects even if it's not iterable
const newRestaurant = { foundIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);
// Can also copy object then make changes in it
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
/* Destructuring objects
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
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// We want the code in code block () as it works differently in case of object
({ a, b } = obj);
console.log(a, b);

// Nesting objects (friday is inside opening hour inside restaurant so obj in obj in obj which need nesting)
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
// Passing object in function (standard thing in js)
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
// checking default values
restaurant.orderDelivery({
  address: 'Vila del Sole, 21',
  starterIndex: 1,
});
*/

/*
  // Destructuring Array
  const arr = [0, 1, 2];
  // Manual Method
const a = arr[0];
const b = arr[1];
const c = arr[2];
// Modern Mathod (use const)
const [x, y, z] = arr;
console.log(x, y, z);

// Destructuring array from object (leave hole with , if want to skip)
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// Switching menu
// const temp = main;
// main = secondary;
// secondary = temp; //Won't do secondary = main because it will overwrite which is why declared temp
// console.log(main, secondary);

// Using destructuring to switch
[main, secondary] = [secondary, main]; //not using const, let because simply reassigning
console.log(main, secondary);

// calling order from array (simple)
// console.log(restaurant.order(2, 0));

// with destructuring, receiving 2 return values from function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// destructuring nested array (one array inside another) (will skip 3)
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// If we want inner values of arrays then we do destructuring inside of destructure
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values (if value undefined, it will automatically turn 1, useful when get data from API)
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
/*
//Coding Challenge #1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (playerNames) {
    console.log(...playerNames);
    const namesOfPlayers = [...playerNames];
    const totalScore = game.scored.length;
    console.log(totalScore);
    console.log(
      `Players who participated in the game are ${namesOfPlayers} and their total score is ${totalScore}.`
    );
  },
};
const [player1, player2] = [...game.players];
console.log(player1);
console.log(player2);
const [gk, ...fieldPlayer] = [...player1];
console.log(gk, fieldPlayer);
const allPlayers = [...player1, ...player2];
console.log(allPlayers);
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
const { team1, x: draw, team2 } = { ...game.odds };
console.log(team1, draw, team2);
game.printGoals(game.scored);
const teamWin = 4 || 0;
console.log(teamWin);
*/
