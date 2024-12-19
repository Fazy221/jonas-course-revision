// Working with string part 1
const bike = 'Honda CG 125a';
// Getting character of string from specific position
console.log(bike[0]);
// Other direct method
console.log('Honda CG 125'[0]);
// Logging length of string
console.log(bike.length);
// Methods (string is also 0-based)
// indexOf method to know position of letter (space also counts as char)
console.log(bike.indexOf('a'));
// lastIndexOf to search in reverse way
console.log(bike.lastIndexOf('a'));
// Searching whole word from string
console.log(bike.indexOf('CG'));
// Case sensitive so no match will give error
console.log(bike.indexOf('cg'));
// Slicing string to cut x values from start (this won't mutate but will return new str)
console.log(bike.slice(6));
// Add 2nd value to limit how much we want to cut
console.log(bike.slice(6, 8));
// Slicing string with index
console.log(bike.slice(bike.indexOf('125a')));
// Will use start & end parameter
console.log(bike.slice(bike.indexOf('Honda'), 4));
// Can also use index in both parameters
console.log(bike.slice(bike.indexOf('Honda'), bike.lastIndexOf('a')));
// Slicing string with indexLastOf to extract from last
console.log(bike.slice(bike.lastIndexOf(' ')));
// excluding space in lastIndexOf
console.log(bike.slice(bike.lastIndexOf(' ') + 1));
// Slicing from the end (start with 1 not 0)
console.log(bike.slice(-1));
// Slicing from both start and end
console.log(bike.slice(0, -1));
// Write function that receives airplane & log if mid seat or not
// Talking of plane seat, it's row x column where 11 is row and B is column, starting from left to right.
// In small planes (A32), we only've 6 seats in 1 row so B & E are mid seats
// Take last char of string to see if it's B/E or not
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got mid seat 😁');
  } else {
    console.log('You got centered buddy! 😋');
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('23E');
checkMiddleSeat('23A');

const getSecondHalf = function (str) {
  if (str.length % 2 === 0) {
    str.length / 2;
  } else {
    str.length / 2 + 1;
  }
};
console.log(getSecondHalf('Hello'));
// Since strings are primitive, JS convert them to objects behind the scenes when calling strings with methods. This is called boxing bcuz takes string and put in object box.
// Example of string as object
