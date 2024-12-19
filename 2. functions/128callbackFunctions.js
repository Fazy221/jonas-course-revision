// Higher Order Functions using Callback Functions

// First we make 2 simple functions
// oneWord function which takes string as argument, replace all spaces and turn to lowerCase
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase(); //Select all space with / /g
};
// upperFirstWord function will take string as argument, take array to split first and ...other words then turn first word uppercase and rejoin
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// console.log(upperFirstWord('hello world'));
// ALternative
// const upperFirstWordShortcut = function (str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// };
// console.log(upperFirstWordShortcut('hello world'));
//  Then we'll make higher order function 'transformer' which receive an str and callback functions (fn) and return 3 strings
const transformer = function (str, fn) {
  //   Original string
  console.log(`Transformed text original: ${str}`);
  //   Using callback function with calling
  console.log(`Transformed text with function: ${fn(str)}`);
  //   Using built in property .name which is feature of functions other than methods. It tells name of function.
  console.log(`Transformed text by function: ${fn.name}`);
};

// Now we'll call transformer function with a string 'Javascript is best' and pass callback function value
transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// Now let's make simple high five function which log in console
const highfive = function () {
  console.log('👋');
};

// Now use addEventListener which is also higher order function so we can put highfive function in it as value without passing
document.body.addEventListener('click', highfive);

// Make array then use forEach function (new stuff) to pass highfive callback function as value.
['Faizan', 'Ansa', 'Noor'].forEach(highfive);

// Example (chatGPT)
const capitalizeFirstWord = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
// console.log(capitalizeFirstWord('hello world'));
const higherOrderFunction = function (str, fn) {
  // Normal str
  console.log(`Normal String ${str}`);
  // String with method
  console.log(`Modified string with method ${fn(str)}`);
};
higherOrderFunction('hello pakistanis', capitalizeFirstWord);
