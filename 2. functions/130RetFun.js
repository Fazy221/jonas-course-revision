// Making greet function with greet str as argument then  returning name function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
// Use declare variable method
const greeting = greet('Hi!');
greeting('Faizan normal dec variable');
// Use together calling method
greet('Hi!')('Faizan normal call together');
// Now do same with arrow method
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
// Variable method
const greetingArrow = greet('Hi!');
greetingArrow('Faizan arrow variable!');
// Calling together Method
greetArrow('Hi')('Faizan arrow together!');
