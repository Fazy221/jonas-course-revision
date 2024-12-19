// Making greet function with greet str as argument then returning name function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
// Use declare variable method
const greeterHey = greet('Hey!');
greeterHey('Jonas');
greeterHey('Fazy');
// Use together calling method
greet('Hey!')('Faizan');
// Now do same with arrow method
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
// Variable method
const greetArrowIn = greetArrow('Hi!');
greetArrowIn('Faizan arrow variable');
// Calling together Method
greetArrow('Hi!')('Fazy arrow together');

// Example (ChatGPT)
const attendence = function (attend) {
  return function (name) {
    console.log(`${attend}! ${name}`);
  };
};
// One way which is more direct
attendence('Present')('Faizan');
// Other way to set up shortcut
const attend = attendence('Present');
attend('Fazy');
attend('Ansa');
attend('Noor');
