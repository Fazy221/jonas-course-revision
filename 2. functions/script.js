'use strict';

// Setting default parameters
/*
const bookings = [];
const bookAirline = function (FlightNum, NumPass = 1, price = 199 * NumPass) {
  //   ES5 way of setting default value 1 with short circuit so when it's falsy value, OR opeartor switch to 1
  NumPass = NumPass || 1;
  price = price || 199;
  // ES6 way is in function arguments & can also include expressions like price = 199*1 or calculating with other values like numPass.
  // The parameters work in order so can't put price before NumPass due to after expression
  const booking = {
    FlightNum,
    NumPass,
    price,
  };
  bookings.push(booking);
  console.log(booking);
};

bookAirline('LH319');
bookAirline('LH382', 2, 800);
bookAirline('LH212', 3);
// 1. We also can't skip argument like FlightNum then price. 2nd argument will be always considered as NumPass
bookAirline('LH332', 1000);
// 2. Way of skipping it is calling argument undefined so it can take default value from function instead which is NumPass=1
bookAirline('LH221', undefined, 4);
*/
// Passing arguments Value vs Reference
/*
const flight = 'LH302';
const fazy = {
  name: 'Faizan Raza',
  passport: 321312994,
};
const checkIn = function (flightNum, passenger) {
  // For some reasons, flight got changed & passenger have Mr. now so we'll set it
  flightNum = 'LH169'; //flightNum as primitive is completely diff value here so it can't change
  passenger.name = 'Mr.' + passenger.name;

  // Set if-else so if passport correct, alert check in or alert wrong passport
  if (passenger.passport === 321312994) {
    alert('Check In');
  } else {
    alert('Wrong passport bitch');
  }
};
//  Call with object
checkIn(flight, fazy);
// Logging in console, we can see Flight is primitive value (string) so it didn't change while fazy is object so it did
console.log(flight);
console.log(fazy);
// Passing primitive value like str is same as copying it like below
const flightStr = flight;
// Whereas it's the same object just with reference. If we make changes in fazyRef, it will do same in fazy object too.
const fazyRef = fazy;

// Real life scenerio example
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};
// Calling this function reflecting with same object causes issue in console.
newPassport(fazy);
// Final Note: JS can't pass reference like C++ but only values. Even if pass reference as objects we did above, they're considered as values still
*/

// Function accepting callback functions
/*
// First we make 2 simple functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase(); //Select all space with / /g
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
//  Then we'll make higher order function (which receive callback functions or return)
const transformer = function (str, fn) {
  // Original string
  console.log(`Transformed text original: ${str}`);
  // Using callback function with calling
  console.log(`Transformed text with function: ${fn(str)}`);
  // Using built in property .name which is feature of functions other than methods. It tells name of function.
  console.log(`Transformed text by function: ${fn.name}`);
};

// We're not calling function here but only passing it. Higher order one will pass it.
transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// Now let's make simple high five function which log in console
const highfive = function () {
  console.log('👋');
};

// In below example, addEventListener is also higher order function so we can put highfive function in it as value without passing
document.body.addEventListener('click', highfive);

// forEach function example which we'll learn more next section
['Faizan', 'Ansa', 'Noor'].forEach(highfive);
*/
// Function returning new function
/*
// Making greet function with greet str as argument then  returning name function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
// Declaring inside a variable, greet function has become a value
const greeterHey = greet('Hey!');
// So when we call with declared variable, it'll return function inside of this value. This is called closure & we'll learn more later.
greeterHey('Jonas');
greeterHey('Fazy');
// Can also do this in one step, first calling function then 2nd value as argument as of 2nd function inside it
greet('Hey!')('Faizan');
// Little Challange - rewrite same function above in arrow function
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
// Variable method
const greetArrowIn = greetArrow('Hi!');
greetArrowIn('Faizan arrow variable');
// Calling together Method
greetArrow('Hi!')('Fazy arrow together');
*/
// Call and Apply method
/*
// 1. Declare lufthansa obj with airline, iatacode, empty booking array
// 2. Book function incl flighNum & name arguments which return X booked flight on iataCode & FlightNum
// 3. Also push in empty array the flight iata, name and flightNum
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a flight on ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}, ${name}` });
  },
};
// Log in book function with flight number & name
lufthansa.book(239, 'Faizan');
lufthansa.book(142, 'Raza');
// Log in lufthansa object to check if pushing flight data into array worked
console.log(lufthansa);
// Let's say years later, lufthansa made new group
const eurowings = {
  airline: 'Euro Wings',
  iataCode: 'EW',
  bookings: [],
};
// Now we want the same function there but copy pasting from above will be bad practice so we'll store method in external function
const book = lufthansa.book;
// However, copying it will make it no longer work bcuz (this) method won't go along. We can see result as calling below
// book(233, 'Ansa khalid');
// We want javascript to point (this) keyword to eurowing instead of lufthansa airline so we use 3 function methods: call,apply,bind
// Call method
book.call(eurowings, 23, 'Ansa khalid');
console.log(eurowings);
// Now do same with lufthansa
book.call(lufthansa, 23, 'Faizan Raza');
console.log(lufthansa);
// Can make more airlines now in same way but need to have same format
const swiss = {
  airline: 'Swiss',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 42, 'Noor Faizan');
console.log(swiss);
// Apply method (does same thing but doesn't receive arguments but array of arguments)
const flightData = [321, 'Salar Faizan'];
book.apply(swiss, flightData);
console.log(swiss);
// Apply method no longer used bcuz can do same with call & rest operator
const flightData2 = [231, 'Hadi Faizan'];
book.call(swiss, ...flightData2);
console.log(swiss);
*/
// Bind method (doesn't call function like call but return new one)
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a flight on ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}, ${name}` });
  },
};
const eurowings = {
  airline: 'Euro Wings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;
// Using Call method (call same function)
book.call(eurowings, 23, 'Ansa khalid');
// Using Bind method (to store in variable & make call simple)
const booksEW = book.bind(eurowings);
booksEW(321, 'Fazy');
// Can now do same to book all the airlines
const booksLH = book.bind(lufthansa);
booksLH(351, 'Ansi');
// Can also set one number for specific flight then call simply with name only
const booksEW23 = book.bind(eurowings, 23);
booksEW23('Faizan Raza');
booksEW23('Ansa Faizan');

// With event listener, declare plane property of lufthansa obj as 300 then make function and use document handler then bind buyplane function
// (This) keyword points to it's handler which is btn element there resulting in NaN so we'll use bind there
lufthansa.plane = 300;
lufthansa.planeBuy = function () {
  console.log(this);
  this.plane++;
  console.log(this.plane);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.planeBuy.bind(lufthansa));

// with Partial Applications
// Make addTax function with with rate,value as arguments then calculate & log
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.2, 100));
// Now making addVatTax function which always has rate as 23%, we can keep it null then put rate (can't use this name of obj bcuz not dealin with it)
const addVat = addTax.bind(null, 0.23);
// Now call addVat with value
console.log(addVat(100));
// Doing same with returning function arrow method
const addTax2 = rate => value => value + value * rate;
console.log(addTax2(0.2)(100));
*/
// Coding challenge 1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

// Make method to display prompt text form poll
// const question = poll.question;
// const options = poll.options;
// const answerArr = [];
// const registerNewAnswer = function () {
//   document.querySelector('.poll').addEventListener('click', function () {
//     let answer = prompt(`${question}, ${options}}`);
//     answerArr.push(answer);
//     console.log(answer);
//     console.log(answerArr);
//     if (answer !== 'number') console.log('not a number');
//   });
// };
// registerNewAnswer(1);
// V1.2
// const question = poll.question;
// const options = poll.options;
// const answerArr = [];
// document.querySelector('.poll').addEventListener('click', function () {
//   const prompt = prompt(`${question}, ${options}}`);
// });
// // if (answer !== 'number') console.log('not a number');

// document.querySelector('.poll').addEventListener('click', function () {
//   answerArr.push(answer);
//   console.log(answer);
//   console.log(answerArr);
// });

// Immediately Invoked Function Expressions (IIFE) (used to call function only once, useful for async)
/*
// Simple function value
const runOnce = function () {
  console.log('I run normally');
};
runOnce();
// IIFE function (wrap in brackets so JS thinks it's expression then call right away)
(function () {
  console.log('This will run once for real');
})();
// Without wrapping will result error
// function () {
//   console.log('I run once (real)');
// }();
// IIFE function with arrow (extension won't put in brackets so skip)
() => console.log('This will also run only once (arrow)');
// As we can't access inner scope values from global scope, devs developed this method but now, block can be used
{
  const privateData = 'Fazy';
  var privateData2 = 'Fazy';
}
console.log(privateData2);
*/
// Closures
// Memorizes variables existed at birth of function. Can be taken even without callstack
// Coding challenge 2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
