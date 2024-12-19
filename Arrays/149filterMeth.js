const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// 159 - The Filter Method (will return based on defined conditions, same order as forEach & mapMethod)
// Make deposit variable & use filter method on movements to return if iteration > 0
const deposit = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposit);
// Doing same with forOf loop
const depositFor = [];
for (const mov of movements) {
  if (mov > 0) depositFor.push(mov);
}
console.log(depositFor);
// Now do of withdrawls with filter method (will use arrow method)
const withdrawalArr = movements.filter(mov => mov < 0);
console.log(withdrawalArr);
// Do same with forOf loop method
const withdrawalFor = [];
for (const mov of movements) {
  if (mov < 0) withdrawalFor.push(mov);
}
console.log(withdrawalFor);
