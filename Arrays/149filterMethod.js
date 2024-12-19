const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// 159 - The Filter Method (will return based on defined conditions)
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

// ChatGPT
// Number with even only
const numbers = [5, 10, 15, 20, 25];
const evenNumbers = numbers.filter(function (el) {
  return el % 2 === 0;
});
console.log(evenNumbers);
// Words starting with a only
const words = ['apple', 'banana', 'orange', 'grapefruit', 'pear', 'annanas'];
const aWords = words.filter(function (el) {
  return el.startsWith('a');
});
console.log(aWords);
// Students who are older than 20 & studying Maths
const students = [
  { name: 'John', age: 20, major: 'Mathematics' },
  { name: 'Jane', age: 22, major: 'Computer Science' },
  { name: 'Bob', age: 21, major: 'History' },
  { name: 'Mary', age: 19, major: 'English' },
];
const selectedStudents = students.filter(function (el) {
  return el.age >= 20 && el.major === 'Mathematics';
});
console.log(selectedStudents);
// Books published after year 2000 & more than 500 pages
const library = [
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    published: 2008,
    pages: 374,
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    published: 1997,
    pages: 223,
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    published: 2003,
    pages: 454,
  },
  {
    title: 'A Game of Thrones',
    author: 'George R.R. Martin',
    published: 1996,
    pages: 694,
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    published: 1954,
    pages: 1178,
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    published: 1951,
    pages: 277,
  },
];
const selectedBooks = library.filter(function (el) {
  return el.published <= 2000 && el.pages >= 500;
});
console.log(selectedBooks);
