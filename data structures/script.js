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
/*
// Looping over object
// logging obj variables (keys)
const properties = Object.keys(openingHours);
console.log(properties);
// We're open at (properties length)
console.log(`We are open on ${properties.length}`);
// Logging obj property variable (loop)
for (const day of properties) {
  console.log(day);
}
// openStr example with length and properties
let openStr = `We are open for ${properties.length} days: `;
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
// Looping over objet (destructure too)
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
*/
/* Optical chaining
// Imagine we receive data from API if restaurant open on Monday or not
// Due to diff wording mon/monday, can result undefined
// mon.open means undefined.open so result = error
// console.log(restaurant.openingHours.mon.open);
// We can use if block or logical operator
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// Now imagine openingHour & restaurant object different which is messy
if (restaurant.openingHours && restaurant.openingHours.open)
  console.log(restaurant.openingHours.open);
// Optical chain can be used so if undefined right before ?, return immediately so no error
// Before
// console.log(restaurant.openingHours.mon.open);
// After
console.log(restaurant.openingHours.mon?.open);
// Multiple optical chaining (for multiple optional properties)
console.log(restaurant.openingHours?.mon?.open);
// Real example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods (can check if method exist before calling)
console.log(restaurant.order?.(0, 1) ?? 'Method doesnt exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method doesnt exist');

// Array (check if empty)
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User Element not found'); //found
console.log(users[3]?.name ?? 'User Element not found'); //not found
const users2 = [];
console.log(users2[0]?.name ?? 'User Array Empty');
// old method if array empty
if (users2.length > 0) console.log(users[0].name);
else console.log('User array empty');
*/
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
// /*
//Coding Challenge #1
/*
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
// --- My attempt
// const [player1, player2] = [...game.players];
// console.log(player1);
// console.log(player2);
// const [gk, ...fieldPlayer] = [...player1];
// console.log(gk, fieldPlayer);
// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);
// const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// const { team1, x: draw, team2 } = { ...game.odds };
// console.log(team1, draw, team2);
// game.printGoals(game.scored);
// const teamWin = 4 || 0;
// console.log(teamWin);
*/
// --- Instructor attempt
/*
const [player1, player2] = game.players;
console.log(player1, player2);
const [gk, ...fieldPlayer] = player1;
console.log(gk, fieldPlayer);
const allPlayers = [...player1, ...player2];
console.log(allPlayers);
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);

team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);
*/
/*
// Coding Challenge 2
const goalEntries = Object.entries(game.scored);
console.log(goalEntries);
for (const [i, el] of goalEntries) {
  console.log(`Goal ${Number(i) + 1}: ${el}`);
}
const gameOdds = Object.values(game.odds);
for (const odds of gameOdds) {
  console.log(odds);
  // console.log(gameOdds);
  const average = odds / gameOdds.length;
  console.log(average);
}
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.x}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);
*/
/*
// Sets (less useful than arrays)
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
//Won't log duplicate & order is irrelevant
console.log(orderSet);
// Use .size to know how many values in set like .length in array
console.log(orderSet.size);
// Check if certain element is present
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
// Adding to set
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);
// Deleting from set
orderSet.delete('Risotto');
console.log(orderSet);
// Can't retrieve data from set but not needed. Only use to know if value present or not. If want with numbering then use array
// Deleting everything from set
// orderSet.clear();
// As iterables so can loop
for (const order of orderSet) {
  console.log(order);
}
// Normally, sets used to remove duplicates from arrays
// Example 1
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// Want to know positions without duplicates
const staffUnique = new Set(staff);
console.log(staffUnique);
// Can also convert set to new array
const staffUniqueArray = [...new Set(staff)];
console.log(staffUniqueArray);
// Seeing size of array without duplicates
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
// Can also know how many different letters are in string
console.log(new Set('jonnashshcemmetman').size);
*/
/*
// Maps (more useful than sets)
// In obj, keys are only string but we can assign different type of variabels in maps
// Make empty map of restaurant
const rest = new Map();
// We'll use set method to fill map which's similar to add method in sets
// rest.set('keyname', 'restaurant name itself')
rest.set('name', 'Classico Italiano');
// Now using number data type as key, let's say different branches of restaurant
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
// Calling this set method does return whole set
console.log(rest.set(2, 'Lisbon, Portugal'));
// Can also chain with different sets
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
// Use get method to read data from map (data type matters there)
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));
// Can't log boolean or number keys as string, will return undefined
console.log(rest.get('true'));
console.log(rest.get('1'));
// Checking time (clever but not so readable so don't overuse, it's only to show power of Booleans as map keys)
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// See if map contain certain key
console.log(rest.has('categories'));
// deleting from map
rest.delete(2);
console.log(rest);
// checking size of map
console.log(rest.size);
// clearing everything from map
// rest.clear();
// Use array as map key (failed method)
rest.set([1, 2, 3], 'Test');
console.log(rest);
// Getting data based on this array (won't work because js get this from memory not heap)
console.log(rest.get([1, 2]));
// Recommended method of using array as map key
const arr = [4, 5, 6];
rest.set(arr, 'Test');
console.log(rest.get(arr));
// Using obj as map keys (useful for dumb elements)
rest.set(document.querySelector('h1'), 'Heading'); //will highlight when selecting h1 from console
console.log(rest);
*/
/*
// Maps Iteration
// Previously, we made empty map then added elements to it.
// There is another way of making new map (preferred bcuz set method cumbersome and only use when keep adding new elements)
// Make quiz
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct ✅'],
  [false, 'Try again! 💢'],
]);
console.log(question);
// Structure is similar to array entries with key and element
console.log(Object.entries(openingHours));
// Converting object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
// Using for loop to log map elements
// Same as looping over object but since object wasn't iterable so we used object.entries
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
// Cheking if answer is 3rd or not my method
// if (answer === 3) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }
// Instructor method
// console.log(question.get(question.get('correct') === answer));
// Converting map to array
console.log([...question]);
// Other maps ethods
console.log(question.entries());
console.log(question.keys());
console.log(question.values());
*/
/*
// Coding Challenge 3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes.`
);

// My method
// for (const [t, el] of gameEvents) {
//   if (t < 45) {
//     console.log(`[First Half] ${t}: ${el}`);
//   } else {
//     console.log(`[Second Half] ${t}: ${el}`);
//   }
// }
// Instructor method
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'First' : 'Second';
  console.log(`[${half} HALF] ${min}:${event}`);
}
*/

// Working with string part 1
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';
// Getting character of string from specific position
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
// Other method
console.log('B737'[0]);
// Logging length of string
console.log(airline.length);
console.log('B737'.length);
// Methods (similar to array)
// string is also 0-based
// indexOf method to know position of letter (space also counts as character)
console.log(airline.indexOf('r'));
// lastIndexOf to search in reverse way
console.log(airline.lastIndexOf('r'));
// Searching whole word from string
console.log(airline.indexOf('Portugal'));
// Case sensitive so no match will give error
console.log(airline.indexOf('portugal'));
// Slicing string to cut x values from start (this won't mutate but will return new string)
console.log(airline.slice(4));
// Add 2nd value to limit how much we want to cut
console.log(airline.slice(4, 7)); //Length is always end-begining which is 7-4 = 3 in this case
// Slicing string with index (extract until 'TAP ')
// Will use start & end parameter
console.log(airline.slice(0, airline.indexOf(' '))); //Will use space because want to extract there
// Slicing string with indexLastOf to extract from last
console.log(airline.slice(airline.lastIndexOf(' ')));
// excluding space in lastIndexOf
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// Slicing from the end
console.log(airline.slice(-2));
// Slicing from the end with 2nd parameter
console.log(airline.slice(1, -1));
// Write function that receives airplane  & log if mid seat or not
// Talking of plane seat, it's row x column where 11 is row and B is column, starting from left to right.
// In small planes (A32), we only've 6 seats in 1 row so B & E are mid seats
const checkMiddleSeat = function (seat) {
  // Take last char of string to see if it's B/E or not
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😁');
  else console.log('You got lucky 😎');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
// Since strings are primitive, JS convert them to objects behind the scenes when calling strings with methods. This is called boxing bcuz takes string and put in object box.
// Example of string as object
console.log(new String('jonas'));
console.log(typeof new String('jonas'));
*/
// Working with strings part 2
/*
// Lower & Upper casing string method
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
// Can also call like this
console.log('bonas'.toUpperCase());

// Fix capitalization in passenger name
const passenger = 'jOnAS'; //Shoud look like 'Jonas'
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); //Can also make function of it

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io  \n';
// 1. use lower case
const lowerEmail = loginEmail.toLowerCase();
// 2. remove space
const trimmedEmail = lowerEmail.trim();
// Can also do both steps above at once (similar to map set method)
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
// Now comparing both if true (can also make function of this)
console.log(email === normalizedEmail);
// Can also use trimstart and trimend
console.log(loginEmail.trimStart());
console.log(loginEmail.trimEnd());

// Replacing characters in strings
const priceGB = '288,97£';
const priceUS1 = priceGB.replace('£', '$');
console.log(priceUS1);
// doing with chaining for multiple chars
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);
// Replacing whole word in string (will create brand new string)
const announcement = //Will only replace first found word
  'All passengers come to boarding on door 23. I repeat door 23!';
console.log(announcement.replace('door', 'gate'));
// Replacing all words
const announcement2 =
  'All passengers come to boarding on door 23. I repeat  door 23!';
console.log(announcement2.replaceAll('gate', 'door'));
// Replacing all words with regular expressions (old method)
console.log(announcement2.replace(/gate/g, 'door')); // /word/ mean expression and g mean global
// Replace method also case sensitive
const announcement3 =
  'All passengers come to boarding on door 23. I repeat passengers, door 23!';

console.log(announcement3.replaceAll('passengers', 'musafirs'));
console.log(announcement3.replaceAll('Passengers', 'musafirs'));

// Booleans methods (helpful on string based decisions)
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boing'));
console.log(plane.startsWith('Air'));
console.log(plane.startsWith('Aib'));
console.log(plane.endsWith('neo'));
console.log(plane.endsWith('no'));
// Example
if (plane.startsWith('Air') && plane.endsWith('neo')) {
  console.log('Part of the new airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase(); //knife could've been skipped if didn't use lowercase
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board ✋');
  } else {
    console.log('Welcome aboard sir 👋');
  }
};
checkBaggage('I have a laptop, Food and pocket Knife');
checkBaggage('I have socks and camera');
checkBaggage('Got some snacks & gun for protection');
*/
// Working with strings part 3
/*
// Splitting string will seperate el in arrays
console.log('This+is+a+string'.split('+'));
// Splitting with space
console.log('Faizan Raza'.split(' '));

// Using destructuring
const [firstName, lastName] = 'Faizan Raza'.split(' ');
console.log(firstName, lastName); //Can also be done with splice but more complicated
// Joint method (opposite of split)
// Let's uppercase lastName & add Mr. before firstName
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);
// Capitalizing entire name
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // Another method (easier)
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');

// Padding string (adding chars with x amount)
// shorter string = more chars (bcuz it cover string chars too)
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('Jonas'.padStart(25, '+'));
console.log(message.padStart(25, '+').padEnd(35, '+'));
// Credit card number example where only last 4 words visible
const maskCredit = function (number) {
  // const str = String(); //one method
  const str = number + ''; //another method
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCredit(3213141451));
console.log(maskCredit('32134596124932'));

// Repeat method
const message2 = 'Bad weather at Jinnah airport ';
console.log(message2.repeat(5));

const planeInLine = function (n) {
  console.log(`There are ${n} planes flying in line ${'✈'.repeat(n)}`);
};
planeInLine(4);
planeInLine(2);
planeInLine(6);
*/
// Coding Challenge 4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}, ${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    // console.log(output.padEnd(20, ' ')); Can do without space
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
// Logical Assignment Operator (better than nullish op) (2021 lec)
const rest1 = {
  restaurant: 'Capri',
  numGuest: 20,
};
const rest2 = {
  restaurant: 'La Pizza',
  owner: 'Jumani Rasi',
};
// Set default number of guests for rest not having that property (imagine rec from API)
rest1.numGuest = rest1.numGuest || 10;
rest2.numGuest = rest2.numGuest || 10;
console.log(rest1); // rest1 had numGuest 20
console.log(rest2); // rest didn't so default 10
// Do same with logical assignment operator OR
const rest3 = {
  restaurant: 'Capri',
  numGuest: 20,
};
const rest4 = {
  restaurant: 'La Pizza',
  owner: 'Jumani Rasi',
};
rest3.numGuest ||= 10;
rest4.numGuest ||= 10;
console.log(rest3);
console.log(rest4);
// Have same problem with 0 considered undefined so default 10
const rest5 = {
  restaurant: 'Capri',
  numGuest: 0,
};
rest5.numGuest ||= 10;
console.log(rest5);
// Can do with ?? in this case again
const rest6 = {
  restaurant: 'Capri',
  numGuest: 0,
};
rest6.numGuest ??= 10;
console.log(rest6);
// Use logical assignment op which work if curr value is truthy
// If a rest has owner, he will automatically become anonymous
const rest7 = {
  restaurant: 'Capri',
  numGuest: 20,
};
const rest8 = {
  restaurant: 'La Pizza',
  owner: 'Jumani Rasi',
};
rest7.owner &&= '<Anonymous>';
rest8.owner &&= '<Anonymous>';
console.log(rest7);
console.log(rest8);
