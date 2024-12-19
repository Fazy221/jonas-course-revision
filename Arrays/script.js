'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Lec 144 (after commenting out opacity in style.css)
// Added sorting in Lec 160
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  // (Sorting) Will use slice bcuz don't want original arr & only it's copy
  const mov = sort ? movements.slice().sort((a, b) => a - b) : movements;
  mov.forEach(function (m, i) {
    const type = m ? 'deposit' : 'withdrawal';
    const html = `
  <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${m}€</div>
  </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);

// const displayCalcSummary = function (movements) { // Changed movements to acc in first argument
const displayCalcSummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}€`;
  const outcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcome)}€`;
  // Bank take interest of 1.2% each time deposit being made
  // Will return new array with .map containing all interest then add all up
  // const interest = movements
  //   .filter(mov => mov > 0)
  //   .map(deposit => (deposit * 1.2) / 100)
  //   .reduce((acc, int) => acc + int, 0);
  // labelSumInterest.textContent = `${interest}€`;

  // Let's say bank only pay interest if it's atleast 1 euro
  const interestNew = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100) //changed 1.2 to acc.interest rate
    .filter(int => int > 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interestNew}€`;
};
// displayCalcSummary(account1.movements);
// Ending notes are we shouldn't use too much chaining bcuz cause performance issues with huge arrays. Can compress into as lil method as possible.
// Should also not chain with methods which mutate original arr like splice or reverse. Might work in small apps but not large.
// Display Balance copied from below code for lec 155
const calcDisplayBalance = function (acc) {
  //added acc insted of movement in lec 156 for bal transfer
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${acc.balance} EUR`; //added acc insted of movement in lec 156 for bal transfer
};
// Adding updateUI function from lec 156, transfer bal
const updateUI = function (acc) {
  // Display Movements
  displayMovements(acc.movements);
  // Display Balance
  calcDisplayBalance(acc);
  // Display Summary
  // As different acc have diff interest so will manipulate first from that function
  displayCalcSummary(acc);
};

// Lec 152 - The Magic of Chaining Methods (other half)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// lec 142 - Map & Set method forEach
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// Lec 155 - Implementing login
// Event Handlers
// Will see flash here of 'Login 'but on clicking, page reloads so disappear
// btnLogin.addEventListener('click', function () {
//   console.log('LOGIN');
// });
// Therefore, will use parameter in function
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  //Preventing form from submitting
  e.preventDefault();
  // Hitting enter in form will also trigger click
  // console.log('LOGIN');
  // Now to log in, we need account from account arr for which we'll use find method
  // accounts.find(acc => acc.owner === inputLoginUsername.value); //(.value in end will read value from input field)
  // Saved above one in variable declared out of function bcuz can be used in other part of app like transfer money
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);
  // logging pin
  // Logging account of user not from account can ret error so use optical chaining ?. so JS 1st check if it exist to move on
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Displaying Message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0] //Use split in end then [0] to take only first word
    }`;
    // Display UI (make sure commenting is removed from opacity in style.css)
    containerApp.style.opacity = 100;
    // console.log('LOGIN');
    // Will put all in one function for updating UI on transfer in lec 156
    updateUI(currentAccount);
  }
  // Clearing input fields when logging in (can empty in one try) (will use .value or otherwise will empty whole element)
  inputLoginUsername.value = inputLoginPin.value = '';
  // Can also remove cursor blinking after logging in
  inputLoginPin.blur();
});
// Make sure the computed username from lec 148 is there
const createUsernameAcc = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner //acc.username is new property to be diff. w/ acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
  // Also make sure both displayBalance & displaySummary are on and cut their calling code then paste above
};
createUsernameAcc(accounts);
// Lec 156 - Implementing transfers
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // console.log(amount, receiverAcc);
  // Cleaning fields

  // Also first need to check if sending amount is positive & if sender've enough money & sender can't send to his own acc & if rec acc actually exist
  // For calcBalance, will make same change as we did with calcSummary. Change to acc in function argument
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // console.log('Transfer Valid!');
    // Now make Negative movement in sender account and Positive movement in receiver account
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // Updating UI
    updateUI(currentAccount);
  }
});
// Lec 158 - Some method to find loan
// Our bank has rule which say only request loan if there is deposit of min 10% of requested loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  // As seen in flowchart, when we see word any, some meth is good usecase there
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement to user account
    currentAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
  // CLearing fields
  inputLoanAmount.value = '';
});
// Lec 157 - FindIndex (to find & ret index)
// Will be used for closing obj which mean deleting acc obj from accounts arr
// To del el from arr, we use splice meth which need index to del where findIndex help
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('Delete');
  // Now check if current user & current pin is correct
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // findindex has same order as forEach etc with el,i,arr and it's esx feature. i & arr not so useful.
    const index = accounts.findIndex(
      //Will loop over arr just like other callback functions
      acc => acc.username === currentAccount.username
    );
    console.log(index); //Will get index number in console on entering if match, for Jonas will be 0
    // Can also check if index of obj is correct or not
    // .indexOf(23)
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
    // Can check in console typing accounts. Will only show 3 bcuz jonas one will be removed
    // Can also login again and nothing will happen. Will ret undefined in console.
  }
  // Clearing fields (recommend putting after if-else statement)
  inputCloseUsername.value = inputClosePin.value = '';
});

// Lec 160 - Button sort
// Preserving sorting state so we can click again & again
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  // Flipping variables
  sorted = !sorted;
});
// Lec 148 - Computing Usernames (making initials for account login)
/*
const username = 'Steven Thomas Williams'; // make as stw
// will first lowercase then split str in multiple words
const user0 = username.toLowerCase().split(' ');
console.log(user0);
// now loop over array to take 1 letter in each iteration, add in new array then join array to make str again
// will do first w/ regular function
const user = username
  .toLowerCase()
  .split(' ')
  .map(function (word) {
    return word[0];
  })
  .join('');

console.log(user);
// will do simplified arrow version now
const user2 = username
  .toLowerCase()
  .split(' ')
  .map(word => word[0])
  .join('');
console.log(user2);
// Creating a function now
const createUsername = function (user) {
  const username = user
    .toLowerCase()
    .split(' ')
    .map(word => word[0])
    .join('');
  return username;
};
console.log(createUsername('Steven Thomas Williams'));
// Now coming to users accounts, we want to change originals but not return new array so we'd use forEach method
// Won't use return bcuz doing side effect with forEach instead of returning new array
// Also won't do function (accounts.account1) but function inside function with forEach tp pass iteration 1 by 1
const createUsernameAcc = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner //acc.username is new property to be diff. w/ acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
createUsernameAcc(accounts);
// To see if it works, check new property of username in each account array
console.log(accounts);
*/

// 149 - The Filter Method (will return based on defined conditions)
/*
// Same order as forEach & mapMethod
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);
// Doing same with forOf loop
const depositts = [];
for (const mov of movements) if (mov > 0) depositts.push(mov);
console.log(depositts);
// Now do of withdrawls with filter method (will use arrow method)
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
// Do same with forOf loop method
const withdrawal2 = [];
for (const mov of movements) {
  if (mov < 0) withdrawal2.push(mov);
}
console.log(withdrawal2);
*/
// 150 - Reduce Method (boiling all el of array to single value)
/*
// bit diff order than forEach & mapMethod. accumulator (acc) is like snowball, keep adding up with each call with current el (curr el).
const balance = movements.reduce(function (acc, curr, i, arr) {
  console.log(`Iteration number ${i} is accoumulator ${acc}`);
  return acc + curr;
}, 0); //Specify 0 there bcuz otherwise will start with 1
console.log(balance);
// Can also begin an accumulator with custom value like 100
const balanceMore = movements.reduce(function (acc, curr, i, arr) {
  console.log(`Iteration number ${i} is accoumulator ${acc}`);
  return acc + curr;
}, 100);
console.log(balanceMore);
// Using forOf loop (need external variable like 0 example below so multiple values can become problem so not preferred)
let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);
// Using arrow method
const balanceArr = movements.reduce((acc, curr, i, arr) => {
  console.log(`Iteration number ${i} is accoumulator ${acc}`);
  return acc + curr;
});
console.log(balanceArr);
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
*/
/////////////////////////////////////////////////
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// 140 - Simple array methods
/*
// Arrays are obj too as they've methods which are functions attached to them

// Slice Method (same as string, extract part of arrays w/o changing org one)
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// Will add begin parameter to extract from that point
console.log(arr.slice(2));
// Now add end parameter too (end parameter don't appear)
console.log(arr.slice(2, 4));
// Negative parameter which take el from end
console.log(arr.slice(-2));
// Can also be used to take last el of array
console.log(arr.slice(-1));
// Using start & then negative (negative will skip given values from end)
console.log(arr.slice(1, -2));
// Making copy of array
console.log(arr.slice());
// Can also do with spread operator (Optional to use 1 of 2, up to personal choice)
console.log([...arr]);
// Can also chain diff methods when copying with slice method
// console.log(arr.slice().push());

// Splice method (same as slice but changes original array)
// Will extract all the elements after value and before one  will be left in org array
console.log(arr.splice(2)); //extract starting with c upto f
console.log(arr); //a & b left in org arr
// With multiple parameters, 1st is where to extract & 2nd is how many numbers to extract
const arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr2.splice(2, 3)); //Will start from c & 3 value mean extract c, d & e
console.log(arr2);

// Reverse method (will reverse array element, mutate)
const arrRev = ['f', 'e', 'd', 'c', 'b', 'a'];
console.log(arrRev.reverse());
console.log(arrRev);

// Concat (join 2 array elements as 1 array, don't mutate)
const arrC1 = ['a', 'b', 'c'];
const arrC2 = ['d', 'e', 'f'];
const arrC1C2 = arrC1.concat(arrC2);
console.log(arrC1C2);
// Can also do same with spread operator (upto personal choice to use 1)
console.log([...arrC1, ...arrC2]);

// Join method (to join together all array elements as string, don't mutate)
console.log(arrC1C2.join());
// Can also seperate with -
console.log(arrC1C2.join('-'));
// Also we already know push, pop, shift, unshift, indexOf, include
*/
// 141 - Looping Arrays ForEach
/*
// ForEach loop is diff from ForOf loop & will now start working with bank app
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// We want to loop over movements array to print msg for each movement in this bank account
// Positive values are deposits & Negative values are withdrawls
// Try with for of loop
for (const m of movements) {
  if (m > 0) {
    console.log(`You deposited ${m}`);
  } else {
    console.log(`You withdrawed ${Math.abs(m)}`); //Use Math.abs to remove - sign
  }
}
console.log('------ For Each Below ------');
// Let's do same with forEach method (easier)
movements.forEach(function (m) {
  if (m > 0) {
    console.log(`You deposited ${m}`);
  } else {
    console.log(`You withdrawed ${Math.abs(m)}`); //Use Math.abs to remove - sign
  }
});

// Now doing forOf with index
for (const [i, m] of movements.entries()) {
  if (m > 0) {
    console.log(`Movement ${i + 1}: You deposited ${m}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrawed ${Math.abs(m)}`); //Use Math.abs to remove - sign
  }
}
console.log('----- Movement with index ForEach -----');
// Doing same with forEach method (have already inbuilt so order matters there but names don't)
movements.forEach(function (element, index, array) {
  if (element > 0) {
    console.log(`Movement ${index + 1}: You deposited ${element}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrawed ${Math.abs(element)}`); //Use Math.abs to remove - sign
  }
});
// Difference in parameters: In ForOf, index comes 1st then el while in ForEach, el comes 1st then index then array
// Difference in fundamentals: Can't break out of forEach loop. Always loop entire array. If want break then use forOf loop.
*/
// 142 - forEach With Maps and Sets
/*
// Each inner array of map array counted as 1 entry. USD is key & United states dollar is value.
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Similarities b/w maps & arrays in forEach function
// currencies.forEach(function (value, key, map) {}
// animals.forEach(function(element,index,array){})

// Using sets
const currenciesUnique = new Set(['USD', 'EUR', 'GBP']);
console.log(currenciesUnique);
// value is same as key in set as can be seen with loop (USD = USD)
// It's bcuz set don't have key/index.However, devs kept order same to avoid confusion.
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
// Will write like with _ as throway variable
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/
// 147 - Map method (work as callback method, will return function by itself with logging without calling)
/*
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

// Simplifying map method will arrow function (might read to bad readability)
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
*/
// 152 - The Magic of Chaining Method
/*
// Let's say we take all movement deposits then convert to from EUR to USD & finally add them all up. Can do all together.
const eurToUsd = 1.1;
const totalDeposits = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, curr) => acc + curr, 0);
console.log(totalDeposits);
// Check current state of array
// const eurToUsd2 = 1.1;
// const totalDeposits2 = movements
//   .filter(mov => mov < 0)
//   // .map(mov => mov * eurToUsd)
//   .map((mov, i, arr) => {
//     console.log(arr); //Logged 3 times bcuz callback function used 3 times
//     mov * eurToUsd;
//   })
//   .reduce((acc, curr) => acc + curr, 0);
// console.log(totalDeposits); 
*/
// Lec 154 - The find Method (can retrieve 1 el of array based on condition)
/*
// Won't ret new arr like filter method but 1st el only
// Take out first withdrawl from movements arr
const firstWithdrawl = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawl);
// Take out jessica owner account from accounts
const accFind = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(accFind);
// Using same for for-Of loop (couldn't work)
for (const acc of accounts) {
  for (const accs of acc.owner) {
    if (accs === 'Jessica Davis') console.log(accs);
  }
}
*/
// Lec 157 - Some & every method
/*
// First see includes method. Check if -130 include in movements.
console.log(movements);
console.log(movements.includes(-130));
// Includes only ret if value exactly equal -130
// Some can be used to check based on condition
// Finding if any positive dep in acc. Ret true or false
const deposits = movements.some(mov => mov > 0);
console.log(deposits);
// Check if any deposit above 5000
const deposit5000 = movements.some(mov => mov > 5000);
console.log(deposit5000);
// Check if any deposit above 1500
const deposit1500 = movements.some(mov => mov > 1500);
console.log(deposit1500);
// Some is also exactly same when checking equal value
console.log(movements.includes(-130));
console.log(movements.some(mov => mov === -130));

// Every method (only ret true if all el of arr satisfy condition)
console.log(movements.every(mov => mov > 0)); // ret false bcuz some are negative
// Check acc 4 bcuz all movements positive in it (will ret true)
console.log(account4.movements.every(mov => mov > 0));
// Can also store callback function in variable & call it everytime directly from variable
const storedMov = mov => mov > 0;
console.log(movements.some(storedMov));
console.log(movements.every(storedMov));
console.log(movements.filter(storedMov));
// Change in one thing will implement everwhere else, saving time!
const storedMovNeg = mov => mov < 0;
console.log(movements.some(storedMov));
console.log(movements.every(storedMov));
console.log(movements.filter(storedMov));
*/
// Lec 158 - flat & flatMap method
/*
// Make array of nested arrays
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// Put all of it in one big array using flat method
console.log(arr.flat());
// Make deeply nested array (flat only go 1 lvl deep so won't work there)
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());
// We can enter death argument like go 2 level deep
const arrDeepFix = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeepFix.flat(2));
// If bank want to calc bal, will've to take movements in arr in obj of accounts so long
// Can put all acc movements in seperate arr using map
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
// Now we want 1 big arr with all these values, will use flat
const allMovements = accountMovements.flat();
console.log(allMovements);
// Adding all values together
const addedMovements = allMovements.reduce((acc, red) => acc + red, 0);
console.log(addedMovements);
// Can also do this whole procedure with chaining (oreferred)
const accountMovementsNew = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, red) => acc + red, 0);
console.log(accountMovementsNew);
// Using map first then flatenning is common. Can also do both together with flatMap
// Only problem is, flatMap go 1 lvl deep & if wanna go more, use both seperately with dead argument in flat
const accountMovementsFM = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, red) => acc + red, 0);
console.log(accountMovementsFM);
*/
// Lec 160 - Sorting Arrays
/*
// Make owner array then use method to sort alphabetically
const owner = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owner.sort()); // Mutates
// Do same with numbers (won't work bcuz only work on strings)
// Will convert num to str & count alphabetically
console.log(movements);
// console.log(movements.sort());
// Will use callback func with 2 arg, current (a) & next value (b)

// Ascending order: Ret < 0 = A,B (keep order) and Ret > 0 = B,A (switch order)
// movements.sort((a, b) => {
//   if (a > b) return 1; //number here not matter ala > 0
//   if (b > a) return -1; //number here not matter ala < 0
//   // (b > a) can also be (a < b)
// });
// console.log(movements);

// Descending order
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
// console.log(movements);

// Can also do in another way
// Ascending
// movements.sort((a, b) => a - b);
// console.log(movements);
// Descending
// movements.sort((a, b) => b - a);
// console.log(movements);
*/
// Lec 142.1 The new at method (lec 2022 updated)
/*
// Taking one value out of array
const arr = [23, 15, 17];
console.log(arr[0]);
// Do same with at method
console.log(arr.at(0));
// Taking last el of arr
// Old method
console.log(arr[arr.length - 1]);
// Using slice method
console.log(arr.slice(-1)); // Will be in arr
console.log(arr.slice(-1)[0]); // In value now
// Using At Method
console.log(arr.at(-1));
// Choosing b/w 2: Use at for taking last el of arr, method chaining & use [] if quickly want to take first el of arr
// Using At Method on String
console.log('jonas'.at(0));
console.log('jonas'.at(-1));
*/
// Lec 162.2 - Array Methods Practice
// Exercise 1
// Calculating how much deposit in banks, First take out all movements from obj in one big arr then filter deposits & add all together
// Will use Map for returning new arr
const bankDepositSum1 = accounts.map(acc => acc.movements);
console.log(bankDepositSum1); //Will get array of arrays with all movements
// Now use flat to take all nested arr in 1 big arr
const bankDepositSum2 = accounts.map(acc => acc.movements).flat();
console.log(bankDepositSum2);
// Use flatMap to simplify
const bankDepositSum3 = accounts.flatMap(acc => acc.movements);
console.log(bankDepositSum3);
// Filter positive values
const bankDepositSum4 = accounts
  .flatMap(acc => acc.movements)
  .filter(acc => acc > 0);
console.log(bankDepositSum4);
// Add them all together with reduce
const bankDepositSum5 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, curr) => acc + curr, 0);
console.log(bankDepositSum5);

// Exercise 2
// Counting how many deposits are in bank with atleast $1000

// First way of doing (easier)
// Flatten arr in one big arr
const num1Deposit1000 = accounts.flatMap(acc => acc.movements);
console.log(num1Deposit1000);
// Filter for values > $1000
const num2Deposit1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 1000);
console.log(num2Deposit1000);
// Using filter to count how many deposits are in num
const num3Deposit1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 1000).length;
console.log(num3Deposit1000);

// Second way of doing (reduce)
// Flatten arrays in one big arr
const num4Deposit1000 = accounts.flatMap(acc => acc.movements);
// Now in reduce, our accumulator will be num of mov > $00
const num5Deposit1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => (cur > 1000 ? acc + 1 : acc), 0);
// Can do same with ++ in reduce but will ret 0
const num6Deposit1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => (cur > 1000 ? acc++ : acc), 0);
console.log(num6Deposit1000);
// Lil example of why ++ doesn't work
let a = 10;
console.log(a++); //Even on this, a will be 10
console.log(a); //But now, it's 11. ++ will ret old value if log directly
// Can use prefix ++ op instead (will log directly)
let b = 10;
console.log(++b);
// Implementing in reduce
const num7Deposit1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => (cur > 1000 ? ++acc : acc), 0);
console.log(num7Deposit1000);

// Exercise 3 (Instead of num or str, use reduce to boil down arr to 1 obj)
// Create obj with sum of all deposits & withdrawals

// Flatten all arrs in one big arr
const sum1 = accounts.flatMap(acc => acc.movements);
console.log(sum1);
// Use reduce
const sum2 = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (acc, cur) => {
      cur > 0 ? (acc.deposits += cur) : (acc.withdrawals += cur);
      return acc;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(sum2);
// Can also log values directly in console
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (acc, cur) => {
      cur > 0 ? (acc.deposits += cur) : (acc.withdrawals += cur);
      return acc;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);
// We can also simplify with bracket notation instead of dot
const sum3 = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (acc, cur) => {
      acc[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return acc;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(sum3);

// Exercise 4 (function to turn simple str into title case like This Is a Nice Example)
const convertTitleCase = function (str) {
  // Make exception for words we don't want in title case
  const exceptions = ['a', 'an', 'or', 'but', 'in', 'with', 'on', 'the', 'is'];
  // First lowercase every word
  const titleCase1 = str.toLowerCase();
  // Then split in arr so each word count as el & seperated with space
  const titleCase2 = str.toLowerCase().split(' ');
  // return titleCase2;
  // Loop over array & capitalize word not in exceptiosn array
  // As ret new arr so use map
  const titleCase3 = str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1)); //First letter of word as uppercase then rest of the word
  // return titleCase3;
  // Will now use exception to exclude words we don't want capitalize
  const titleCase4 = str
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    );
  // return titleCase4;
  // Now join arr back in str
  const titleCase5 = str
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return titleCase5;
};
console.log(convertTitleCase('this is good example'));
console.log(convertTitleCase('this Is an LONG example'));
console.log(convertTitleCase('WRONG Example but on no mOre'));
