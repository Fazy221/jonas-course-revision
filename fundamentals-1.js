// Values and Variables
const country = "Pakistan";
const continent = "Asia";
const population = 22;
console.log(country, continent, population);
// Data Types
const isIsland = true;
const language = "Urdu";
console.log(country, language, isIsland, population);
//  Basic Operator
const countryPopHalf = population / 2;
console.log(countryPopHalf);
console.log(population + 1);
const finlandPopulation = 6;
// If else
if (population > finlandPopulation) {
  console.log("Pakistan's population is greater than finland");
} else {
  console.log("Finalnd's population is greater than Pakistan");
}
const averagePopulation = 33;
if (population > averagePopulation) {
  console.log("Pakistan's population is above average");
} else {
  console.log(`Pakistan's population is ${population} million below average`);
}
// Str and template literals
const description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);
const descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(descriptionNew);
// Coding Challenge 1
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
const markCalcBMI = Math.round(markMass / markHeight ** 2, 2);
const johnCalcBMI = Math.round(johnMass / johnHeight ** 2, 2);
console.log(markCalcBMI, johnCalcBMI);
console.log(markCalcBMI > johnCalcBMI);
// Coding Challenge - 2
if (markCalcBMI > johnCalcBMI) {
  console.log(
    `Mark's BMI (${markCalcBMI}) is higher than John's (${johnCalcBMI}) `
  );
} else {
  console.log(
    `John's BMI (${johnCalcBMI}) is higher than Mark's (${markCalcBMI}) `
  );
}
// Equality operator
// const numNeighbours = prompt(
//   "How many neighbour countries does your country have?"
// );
// if (numNeighbours === "1") {
//   console.log("Only 1 border");
// } else if (numNeighbours > "1") {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }
// Logical Operator
const goodName = "Faizan";
const countryLang = "English";
const countryPop = 49;
const isIslandd = false;
if (countryLang === "English" && countryPop < 50 && isIslandd === false) {
  console.log(`${goodName} can live in this country!!!!!`);
} else {
  console.log(`${goodName} can't live in this country `);
}
// Switch Operator
const zuban = "chinese";
switch (zuban) {
  case "chinese":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;

  default:
    console.log("Great language too :D");
    break;
}
// Ternary Operator
console.log(
  population > 33
    ? `${country}'s population is above average`
    : `${country}'s population is below average`
);
// Coding Challenge 3
const averageDolphin = (97 + 112 + 101) / 3;
const averageKoalas = (109 + 95 + 123) / 3;
console.log(averageDolphin, averageKoalas);
if (averageDolphin > averageKoalas && averageDolphin > 100) {
  console.log(`Dolphin Wins!`);
} else if (averageKoalas > averageDolphin && averageKoalas > 100) {
  console.log(`Koalas Wins`);
} else if (
  averageDolphin === averageKoalas &&
  averageDolphin > 100 &&
  averageKoalas > 100
) {
  console.log(`It's a draw!!!`);
} else {
  console.log(`Nobody wins!`);
}
// Coding Challenge 4
let bill = 275;
let tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
let total = bill + tip;
const calcTip = `The bill was ${bill}, tip was ${tip} and total was ${total}`;
console.log(calcTip);
