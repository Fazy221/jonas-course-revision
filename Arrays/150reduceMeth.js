const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};
const accounts = [account1, account2, account3, account4];

const labelBalance = document.querySelector('.balance__value');
// 150 - Reduce Method (boiling all el of array to single value)
// bit diff order than forEach & mapMethod. accumulator (acc) is like snowball, keep adding up with each call with current el (curr el).
// Make a balance variable & use reduce function to log statement with `` & itartion number is accumulator. Specify 0 in end bcuz otherwise will start with 1
const balance = movements.reduce(function (acc, curr, i, arr) {
  console.log(`Your iteration ${i} is currently at ${acc}`);
  return curr + acc;
}, 0);
console.log(balance);
// Can also begin an accumulator with custom value like 100 at end instead of 0
const balance2 = movements.reduce(function (acc, curr, i, arr) {
  console.log(`Your iteration ${i} is currently at ${acc}`);
  return curr + acc;
}, 100);
console.log(balance2);
// Using forOf loop (keep balance 0 then += with iteration but this method not preferred)
let balance3 = 0;
for (const mov of movements) {
  balance3 += mov;
}
console.log(balance3);
// Using arrow method
const balance4 = movements.reduce((acc, curr, i, arr) => {
  console.log(`Your iteration ${i} is currently at ${acc}`);
  return acc + curr;
}, 0);
// Now doing in application.
// 1. Declare calcDisplayBalance with function & movement argument
// 2. Make balance variable and use argument with reduce function. Return accumulation + current element
// 3. Now to display, check with inspect element in browser then match with declards query elements above
// 4. Use query element variable with .textContent and show balance variable in it
// 5. Call function with object property in it
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);
// Finding max value
const max = movements.reduce((acc, curr) => {
  if (acc > curr) return acc;
  else return curr;
}, movements[0]); //Didn't start 0 bcuz won't work when finding minimum which can be -1 etc.
console.log(max);
