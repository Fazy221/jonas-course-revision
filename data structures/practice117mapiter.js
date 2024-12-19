// Maps Iteration
// Make quiz of best language question
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct ✅'],
  [false, 'Try again! 💢'],
]);
console.log(question);
// Using for loop, loop over map elements to log key and value
// Same as looping over object but since object wasn't iterable so we used object.entries
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
// Check if answer is 3rd or not
console.log(question.get(question.get('correct') === answer));
// Converting question map to array
console.log([...question]);
