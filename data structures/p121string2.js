// Working with strings part 2
// Lower & Upper casing string method
const airplane = 'Pia 032';
console.log(airplane.toUpperCase());
console.log(airplane.toLowerCase());
// Can also call directly
console.log('PIA 032'.toLowerCase());
// Fixing capitalization in a passenger's name
// Should look like 'Jonas'
const goodEmail = 'faizanraza2221@gmail.com';
const loginEmail = '  FaizAnraza2221@Gmail.com  \n';
// Comparing emails
console.log(goodEmail);
console.log(loginEmail);
// 1. use lower case
const lowerEmail = loginEmail.toLowerCase();
// 2. remove space
const trimEmail = lowerEmail.trim();
console.log(trimEmail);
// Can also do both steps above at once (similar to map set method)
const normalizedEmail = loginEmail.toLowerCase().trim();
// Now comparing both if true (can also make function of this)
console.log(goodEmail === normalizedEmail);
// Can also use trimstart and trimend
console.log(lowerEmail.trimStart());
console.log(lowerEmail.trimEnd());
// Replacing characters in strings
const priceGB = '399£';
const priceUS = priceGB.replace('£', '$');
console.log(priceUS);
// doing with chaining for multiple chars
const priceGB2 = '399,£';
const priceUS2 = priceGB2.replace('£', '$').replace(',', '.');
console.log(priceGB2, priceUS2);
// Replacing whole word in string (will create brand new string)
const announcement1 =
  'Attention! All passengers head over to door. I repeat, all passengers head over to door';
const announcement2 = announcement1.replace('passengers', 'people');
console.log(announcement2);
// Replacing all words
const announcement3 = announcement1.replaceAll('passengers', 'people');
console.log(announcement3);

// Replacing all words with regular expressions (old method)
const announcement4 = announcement1.replace(/'passengers'/, 'people');
console.log(announcement4);
// Replace method also case sensitive
const announcement5 = announcement1.replace('Passengers', 'people');
console.log(announcement5);

// Booleans methods (includes, startsWith, endsWith) (helpful on string based decisions)
const jahaz = 'Airbus 0320 neo';
console.log(jahaz.includes('0320'));
console.log(jahaz.includes('020'));
console.log(jahaz.startsWith('Airbus'));
console.log(jahaz.startsWith('Air '));
console.log(jahaz.endsWith('neo'));
console.log(jahaz.endsWith('Neo'));
// Example (if start with & end with)
if (jahaz.startsWith('Air') && jahaz.endsWith('neo')) {
  console.log('Welcome to the Airbus Neo Family!');
} else {
  console.log('No welcome');
}
// Practice exercise (checkBaggage function)
function checkBaggage(item) {
  const itemOrg = item.toLowerCase();
  if (itemOrg.includes('knife') || itemOrg.includes('gun')) {
    console.log("You're not allowed sir! 🤚");
  } else {
    console.log("You're on board sir! 👋");
  }
}
checkBaggage('knife, bag, chocolage');
checkBaggage('Gun, bag, chocolage');
checkBaggage('bag, chocolage');
