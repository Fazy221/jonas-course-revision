// 142 - forEach With Maps and Sets

// Make map of 3 currencies keys USD, EUR, GBP with full names as values.
const currencies = new Map([
  ['USD', 'United States Dollar'],
  ['GBP', 'Pounds Sterling'],
  ['PKR', 'Pakistani Ruppees'],
]);

// Loop over them with forEach loop. It goes like this (values, key, map)
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
// for Maps, it's (value, key, map) while for Arrays, it's (element, index, array)

// Make set of currency values of USD, EUR, GBP and log it in
const currency = new Set(['USD', 'GBP', 'PKR']);
console.log(currency);
// Make a forEach loop. Since there's no key in set but order remain same, use - as throway variable
currency.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

// Challenge - ChatGPT
const countries = new Map([
  ['Pakistan', 'Urdu'],
  ['China', 'Chinese'],
  ['India', 'Hindi'],
  ['US', 'English'],
  ['Saudia Arabia', 'Arabic'],
]);
countries.forEach(function (value, key, map) {
  console.log(`The language of ${key} is ${value}.`);
});
