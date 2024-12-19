// Working with strings part 3
// Splitting string with + (will put them in array)
console.log('This+is+a+string'.split('+'));
// Splitting with space
console.log('Faizan Raza'.split(' '));

// Using split in destructuring with firstName & lastName
const [firstName, lastName] = 'Faizan Raza'.split(' ');
console.log(firstName, lastName);
// Can also be done with splice but more complicated
// const [firsstName, lasstName] = 'Faizan Raza'.slice(0, 1);
// console.log(firsstName, lasstName);
// Joint method (opposite & rejoin str from splitted array)
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
// .padStart(x times amount to be entered, amount)
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('Jonas'.padStart(25, '+'));
console.log(message.padStart(25, '+').padEnd(35, '+'));
// Credit card number example where only last 4 words visible
const maskCredit = function (number) {
  const str = String(number); //one method
  // const str = number + ''; //another method
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCredit(3213141451));
console.log(maskCredit('32134596124932'));

// Repeat method (bad weather at airport)
const message2 = 'Bad weather at Jinnah airport ';
console.log(message2.repeat(5));
// making function with x amount of planes = x ✈ of plane
const planeInLine = function (n) {
  console.log(`There are ${n} planes flying in line ${'✈'.repeat(n)}`);
};
planeInLine(4);
planeInLine(2);
planeInLine(6);
