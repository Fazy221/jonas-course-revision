// Working with strings part 2
// Lower & Upper casing string method
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
// Can also call directly
console.log('bonas'.toUpperCase());

// Fix capitalization in passenger name
//Shoud look like 'Jonas'
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1); //slice used to cut J of lowercase jonas
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

// Booleans methods (includes, startsWith, endsWith) (helpful on string based decisions)
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boing'));
console.log(plane.startsWith('Air'));
console.log(plane.startsWith('Aib'));
console.log(plane.endsWith('neo'));
console.log(plane.endsWith('no'));
// Example (if start with & end with)
if (plane.startsWith('Air') && plane.endsWith('neo')) {
  console.log('Part of the new airbus family');
}

// Practice exercise (checkBaggage function)
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
