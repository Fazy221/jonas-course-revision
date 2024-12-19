// 147 - Map method (work as callback method, will return function by itself with logging without calling)
// Converting USD to EUR (will use movement from top)
const eurToUsd = 1.1;
// Same as forEach method along ordering
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const movementUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movements);
console.log(movementUSD);
// If we put 23 then it will put same in each iteration of movement
const twentythree = movements.map(function (mov) {
  return 23;
});
console.log(twentythree);
// Doing same conversion in for loop
const movementUSDfor = [];
for (const mov of movements) {
  movementUSDfor.push(mov * eurToUsd);
}
console.log(movementUSDfor);
// Talking of difference, mapMethod is functional and modern programming so more prefered

// Simplifying map method will arrow function (might lead to bad readability)
const movementUSDarrow = movements.map(mov => mov * eurToUsd);
console.log(movementUSDarrow);
// This suit my style with return keyword & more understandable
const movementArrowMyStyle = movements.map(mov => {
  return mov * eurToUsd;
});
// Using index & arr as well, will use return to return new array
// Can've 2 returns in same function asa 1 is executed
const movementDescription = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: Deposited value is ${mov}`;
  } else {
    return `Movement ${i + 1}: Witdhraw value is ${Math.abs(mov)}`;
  }
});
console.log(movementDescription);
// Can also simplify this
const movementDescriptionShort = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: ${
      mov > 0 ? 'Deposited' : 'Withdraw'
    } value is ${Math.abs(mov)}`
);
console.log(movementDescriptionShort);

// Difference with forEach: mapMethod ret new array while forEach leave side effects and return undefined.
const movementDescriptionForEach = movements.forEach(
  (mov, i, arr) =>
    `Movement ${i + 1}: ${
      mov > 0 ? 'Deposited' : 'Withdraw'
    } value is ${Math.abs(mov)}`
);
console.log(movementDescriptionForEach);

// ChatGPT
// Map Method
// Example 1
const num = [25, 62, 74, 6, 92, 152];
const multiplyNumber = num.map(function (number) {
  return number * 2;
});
console.log(multiplyNumber);
// Example 2
const products = [
  { name: 'iPhone', price: 999 },
  { name: 'iPad', price: 799 },
  { name: 'MacBook', price: 1299 },
];

const productNames = products.map(function (product) {
  return product.name;
});

console.log(productNames);
// Challenge
const strNum = ['1', '2', '3', '4', '5'];
const convert = strNum.map(function (n) {
  return Number(n);
});
console.log(convert);
// Challenge 2
const users = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john@example.com',
    age: 30,
    city: 'New York',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@example.com',
    age: 25,
    city: 'Los Angeles',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    age: 40,
    city: 'Chicago',
  },
];
const userNameEmail = users.map(function (num, i) {
  return `Name: ${num.name}, email: ${num.email}`;
});
console.log(userNameEmail);
