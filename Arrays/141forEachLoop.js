// 141 - Looping Arrays ForEach
// Starting simply with banking app
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// We want to loop over movements array to print msg for each movement in this bank account
// Positive values are deposits & Negative values are withdrawls
// Try with for of loop (loop in each iteration. If value above 0 then deposit or else withdraw. Use technique to remove -)
for (const m of movements) {
  if (m > 0) {
    console.log(`Deposited value is ${m}`);
  } else {
    console.log(`Witdhraw value is ${Math.abs(m)}`);
  }
}
console.log('------ For Each Below ------');
// Let's do same with forEach method (easier)
movements.forEach(function (m) {
  if (m > 0) {
    console.log(`Deposited value is ${m}`);
  } else {
    console.log(`Witdhraw value is ${Math.abs(m)}`);
  }
});
// Now doing forOf with index (order is index, element) (Movement i : ) (add 1 bcuz array index starts with 0)
for (const [i, el] of movements.entries()) {
  if (el > 0) {
    console.log(`Movement ${i + 1}: Deposited value is ${el}`);
  } else {
    console.log(`Movement ${i + 1}: Witdhraw value is ${Math.abs(el)}`);
  }
}
console.log('----- Movement with index ForEach -----');
// Doing same with forEach method (order is element, index)
movements.forEach(function (el, i, arr) {
  if (el > 0) {
    console.log(`Movement ${i + 1}: Deposited value is ${el}`);
  } else {
    console.log(`Movement ${i + 1}: Witdhraw value is ${Math.abs(el)}`);
  }
});
// Difference in parameters: In ForOf, index comes 1st then el while in ForEach, el comes 1st then index then array
// Difference in fundamentals: Can't break out of forEach loop. Always loop entire array. If want break then use forOf loop.
