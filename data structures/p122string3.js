// Working with strings part 3
// Splitting string with + (will put them in array)
const str = 'I+am+a+good+guy'.split('+');
console.log(str);
// Splitting with space
const nam = 'Faizan Raza'.split(' ');
console.log(nam);
// Using split in destructuring with firstName & lastName
const [firstName, lastName] = 'Faizan Raza'.split(' ');
console.log(firstName, lastName);
// Joint method (opposite & rejoin str from splitted array)
// Let's uppercase lastName & add Mr. before firstName
const newName = ['Mr.', firstName, lastName.toLowerCase()].join(' ');
console.log(newName);
// Capitalizing entire name
const capitalizeName = function (name) {
  const names = name.split(' ');
  const upperName = [];
  for (const n of names) {
    upperName.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(upperName.join(' '));
};
capitalizeName('bera jrea brea jrea');
// Padding string (adding chars with x amount)
// shorter string = more chars (bcuz it cover string chars too)

// Credit card number example where only last 4 words visible

// Repeat method (bad weather at airport)

// making function with x amount of planes = x ✈ of plane
