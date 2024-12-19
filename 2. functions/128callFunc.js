// Higher Order Functions using Callback Functions

// First we make 2 simple functions
// oneWord function which takes string as argument, replace all spaces and turn to lowerCase
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
// upperFirstWord function will take string as argument, take array to split first and ...other words then turn first word uppercase and rejoin
const upperFirstWord = function (str) {
  const [first, ...others] = str.split();
  return [first.toUpperCase(), ...others].join();
};
//  Then we'll make higher order function 'transformer' which receive an str and callback functions (fn) and return 3 strings
const transformer = function (str, fn) {
  //   Original string
  console.log(`Transformed original text: ${str}`);
  //   Using callback function with calling
  console.log(`Transformed text using callback function: ${fn(str)}`);
  //   Using built in property .name which is feature of functions other than methods. It tells name of function.
  console.log(`Transformed text function called by: ${fn.name}`);
};

// Now we'll call transformer function with a string 'Javascript is best' and pass callback function value
transformer('Javscript is the best!', oneWord);
transformer('Javscript is the best!', upperFirstWord);

// Now let's make simple high five function which log in console
const high5 = function (str) {
  console.log('👋');
};
// Now use addEventListener which is also higher order function so we can put highfive function in it as value without passing
document.body.addEventListener('click', high5);
// Make array of 3 friends then use forEach function (new stuff) to pass highfive callback function as value.
['Ansa', 'Faizan', 'Noor'].forEach(high5);
