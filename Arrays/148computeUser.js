// Lec 148 - Computing Usernames (making initials for account login)
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

// Work below

const username = 'Steven Thomas Williams'; // make as stw
// First lowercase then split str in multiple words
console.log(username.toLowerCase().split());
// Now declare in variable & add .map through chaining and return 0 it return first letter of word in each iteration
// After it, .join through chaining
// Will do first w/ regular function
const user = username
  .toLowerCase()
  .split(' ')
  .map(function (word) {
    return word[0];
  })
  .join('');
console.log(user);
// Will do simplified arrow version now in .map
const userArr = username
  .toLowerCase()
  .split(' ')
  .map(word => word[0])
  .join('');
console.log(userArr);
// Creating a simple function now by name of createUsername, trap argument chained by methods in variable & return variable
const createUserName = function (user) {
  const userName = user
    .toLowerCase()
    .split(' ')
    .map(word => word[0])
    .join('');
  return userName;
};
console.log(createUserName('Faizan Raza'));
console.log(createUserName('Gul Sher Khan Chaudhary'));
// Now coming to users accounts, we want to change originals but not return new array so we'd use forEach method
// Won't use return bcuz doing side effect with forEach instead of returning new array
// Also won't do function (accounts.account1) but function inside function with forEach tp pass iteration 1 by 1
const userAccount = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
userAccount(accounts);
// To see if it works, check new property of username in each account array
console.log(accounts);
