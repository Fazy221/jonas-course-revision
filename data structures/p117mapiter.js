// Maps Iteration
// Make quiz of best language question
const question = new Map([
  ['question', 'what is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct answer ✅'],
  [false, 'Wrong answer ❌'],
]);
// Using for loop, loop over map elements to log key and value
// Same as looping over object but since object wasn't iterable so we used object.entries
for (const [i, el] of question) {
  if (typeof i === 'number') console.log(`Answer ${i}: ${el}`);
}
// Check if answer is 3rd or not
// const answer = Number(prompt('What is correct answer?'));
// console.log(question.get(question.get('correct') === answer));
// Converting question map to array
console.log([...question]);
