// Working with string part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';
// Getting character of string from specific position
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
// Other direct method
console.log('B737'[0]);
// Logging length of string
console.log(airline.length);
console.log('B737'.length);
// Methods (string is also 0-based)
// indexOf method to know position of letter (space also counts as char)
console.log(airline.indexOf('r'));
// lastIndexOf to search in reverse way
console.log(airline.lastIndexOf('r'));
// Searching whole word from string
console.log(airline.indexOf('Portugal'));
// Case sensitive so no match will give error
console.log(airline.indexOf('portugal'));
// Slicing string to cut x values from start (this won't mutate but will return new str)
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
// Slicing from the end (start with 1 not 0)
console.log(airline.slice(-2));
// Slicing from both start and end
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
