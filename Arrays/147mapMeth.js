// 147 - Map method (work as callback method, will return function by itself with logging without calling)
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// Converting USD to EUR
// Declare eur to usd variable as 1.1
const eurToUsd = 1.1;
// Use map method now to declare movementUSD & return movement * eurToUsd then log both movement & movementUSD
const movementUSD = movements.map(function (movement) {
  return movement * eurToUsd;
}, 0);
console.log(movements);
console.log(movementUSD);
// If we return 23 then it will return 23 in each iteration of movement. Try it below
const movement23 = movements.map(function (movement) {
  return movement * 23;
}, 0);
console.log(movement23);
// Now do same conversion with forOf loop method
const movementUSD2 = [];
for (const movv of movements) {
  movementUSD2.push(movv * eurToUsd);
}
console.log(movementUSD2);
// Talking of difference with forOf loop, mapMethod is functional and modern programming so more prefered

// Simplifying map method with arrow function
const movementUSDshort = movements.map(movement => movement * eurToUsd);
console.log(movementUSDshort);
// Using index & return this time instead of console.log. Also, use terniary op instead of if else. We can use ret 2 times.
const movementIndex = movements.map(function (el, i) {
  if (el > 0) {
    return `Movement ${i + 1}: Deposited value is ${el}`;
  } else {
    return `Movement ${i + 1}: Witdhraw value is ${Math.abs(el)}`;
  }
});
console.log(movementIndex);
// Simplifying with arrow method
const movementShortIndex = movements.map(
  (el, i) =>
    `Movement ${i + 1}: ${el > 0 ? 'deposit' : 'withdrawal'} value is ${el}`
);
console.log(movementShortIndex);

// Difference with forEach: mapMethod ret new array while forEach leave side effects and return undefined. Try below
const movementShortForEach = movements.forEach(
  (el, i) =>
    `Movement ${i + 1}: ${el > 0 ? 'deposit' : 'withdrawal'} value is ${el}`
);
console.log(movementShortForEach);
