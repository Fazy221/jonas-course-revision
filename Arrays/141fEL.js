// 141 - Looping Arrays ForEach
// Starting simply with banking app
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// We want to loop over movements array to print msg for each movement in this bank account
// Positive values are deposits & Negative values are withdrawls
// Try with for of loop (loop in each iteration. If value above 0 then deposit or else withdraw. Use technique to remove -)
for (const m of movements) {
  if (m > 0) {
    console.log(`Bank deposit is ${m}`);
  } else {
    console.log(`Bank withdrawl is ${Math.abs(m)}`);
  }
}
console.log('------ For Each Below ------');
// Let's do same with forEach method (easier)
movements.forEach(function (m) {
  if (m > 0) {
    console.log(`Deposit in bank is ${m}`);
  } else {
    console.log(`Withdrawal from bank is ${Math.abs(m)}`);
  }
});
// Now doing forOf with index (order is index, element) (Movement i : ) (add 1 bcuz array index starts with 0)
for (const [i, m] of movements.entries()) {
  if (m > 0) {
    console.log(`Movement #${i + 1}: Deposited ${m}`);
  } else {
    console.log(`Movement #${i + 1}: Withdrawed ${Math.abs(m)}`);
  }
}
console.log('----- Movement with index ForEach -----');
// Doing same with forEach method (order is element, index)
movements.forEach(function (m, i, arr) {
  if (m > 0) {
    console.log(`Movement #${i + 1}: Deposited ${m}`);
  } else {
    console.log(`Movement #${i + 1}: Withdrawed ${Math.abs(m)}`);
  }
});
// Difference in parameters: In ForOf, index comes 1st then el while in ForEach, el comes 1st then index then array
// Difference in fundamentals: Can't break out of forEach loop. Always loop entire array. If want break then use forOf loop.

// Challenge with chatGPT
const temperatures = [12, 15, 18, 20, 22, 25, 27];
temperatures.forEach(function (m) {
  if (m >= 25) {
    console.log(`Temperature (${m})° is hot`);
  } else if (m >= 15 && m <= 24) {
    console.log(`Temperature (${m})° is warm.`);
  } else {
    console.log(`Temperature (${m})° is too cold`);
  }
});
