"use strict";
//  Functions
const describeCountry = function (country, population, capitalCity) {
  console.log(
    `${country} has ${population} million population and it's capital city is ${capitalCity}`
  );
};
describeCountry("Pakistan", 22, "Islamabad");
describeCountry("India", 39, "New Delhi");
describeCountry("China", 42, "Beijing");
//  Function Declarations vs. Expressions
// Function Declaration
function percentageOfWorld1(country, population) {
  const calcPerc = Math.round((population / 7900) * 100, 2);
  return console.log(
    `${country} has ${population} million population, so it's about ${calcPerc}% of the world population.`
  );
}
percentageOfWorld1("China", 1440);
percentageOfWorld1("Pakistan", 2200);
percentageOfWorld1("India", 900);

// Function Expression
const percentageOfWorld2 = function (country, population) {
  const calcPerc = Math.round((population / 7900) * 100, 2);
  return console.log(
    `${country} has ${population} million population, so it's about ${calcPerc}% of the world population.`
  );
};
percentageOfWorld2("Finland", 4200);
percentageOfWorld2("US", 5250);
percentageOfWorld2("Switzerland", 1800);

// Arrow Function
const percentageOfWorld3 = (country, population) => {
  const calcPerc = Math.round((population / 7900) * 100, 2);
  return console.log(
    `${country} has ${population} million population, so it's about ${calcPerc}% of the world population.`
  );
};
percentageOfWorld3("Saudia Arabia", 850);
percentageOfWorld3("Iran", 6400);
percentageOfWorld3("Afghanistan", 120);
// Introduction to Arrays
const population = [2200, 1400, 9200, 750];
console.log(population.length);
const percCalc = function (population) {
  const calcPerc = Math.round((population / 7900) * 100, 2);
  return console.log(calcPerc);
};
percCalc(population[0]);
percCalc(population[1]);
percCalc(population[2]);
percCalc(population[3]);

// LECTURE: Basic Array Operations (Methods)
let neighbors = ["India", "Afghanistan", "China", "Germany", "Iran"];
neighbors.push("Utopia");
console.log(neighbors);
neighbors.pop();
console.log(neighbors);
console.log(
  !neighbors.includes("Germany")
    ? "Probably not a European country :D"
    : "Germany is there"
);
const index = neighbors.indexOf("Germany");

if (index !== -1) {
  neighbors.splice(index, 1, "Republic of Germany");
  console.log(neighbors);
} else {
  console.log("Country not found in array");
}
// LECTURE: Introduction to Objects
const calcAverage = ([arr1, arr2, arr3]) => (arr1 + arr2 + arr3) / 3;
let dolphinArr = [65, 70, 80];
let koalasArr = [55, 68, 95];
const dolphinAvg = calcAverage(dolphinArr);
const koalasAvg = calcAverage(koalasArr);
console.log(dolphinAvg, koalasAvg);
function checkWinner(dolphinAvg, koalasAvg) {
  if (dolphinAvg > koalasAvg && dolphinAvg >= 2 * koalasAvg) {
    console.log(`Dolphin win (${dolphinAvg}) vs (${koalasAvg})`);
  } else if (koalasAvg > dolphinAvg && koalasAvg >= 2 * dolphinAvg) {
    console.log(`Koalas win (${koalasAvg}) vs (${dolphinAvg})`);
  } else {
    console.log("Nobody wins");
  }
}
checkWinner(dolphinAvg, koalasAvg);
// LECTURE: Introduction to Objects (Page 16)
const myCountry = {
  country: "Pakistan",
  capital: "Lahore",
  language: "Urdu",
  population: 2200,
  neighbours: ["India", "Afghanistan", "China"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length;
    console.log(
      this.isIsland >= 1 ? "Country has neigbours" : "Country has no neigbours"
    );
  },
};
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);
myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);
// Object Methods
myCountry.describe();
myCountry.checkIsland();
// Coding Challenge 2
const calcTip = function (bill) {
  return bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
// Coding Challenge 3
const marcData = {
  mass: 78,
  height: 1.69,
};
const johnData = {
  mass: 92,
  height: 1.95,
};
function calcBmi(mass, height) {
  return Math.round(mass / height ** 2, 2);
}
const marcBMI = calcBmi(marcData.mass, marcData.height);
const johnBMI = calcBmi(johnData.mass, johnData.height);
console.log(
  marcBMI > johnBMI
    ? `Marc's BMI (${marcBMI}) is greater than John's BMI (${johnBMI})`
    : `John's BMI (${johnBMI}) is greater than Marc's BMI (${marcBMI})`
);
// Iteration: The for loop
// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }
const faizanDet = [
  "Faizan Raza",
  "UI/UX Designer",
  "Ansa Faizan",
  2022 - 2002,
  false,
  ["Noor", "Salar"],
];

console.log(faizanDet);
for (let i = 0; i < faizanDet.length; i++) {
  console.log(faizanDet[i]);
}
const ages = [2008, 1991, 1985, 2015, 2002];
for (let i = 0; i < ages.length; i++) {
  const calcAge = 2023 - ages[i];
  console.log(calcAge);
}
// Continue and Break
const ansaDet = [
  "Ansa khalid",
  "Graphic Designer",
  21,
  ["Noor", "Salar"],
  true,
];
// Using continue to skip el which isn't string
for (let i = 0; i < ansaDet.length; i++) {
  if (typeof ansaDet[i] !== "string") continue;
  console.log(ansaDet[i]);
}
// Using continue to skipping boolean only
for (let i = 0; i < ansaDet.length; i++) {
  if (typeof ansaDet[i] === "boolean") continue;
  console.log(ansaDet[i]);
}
// Using break to break the loop once first number is found
for (let i = 0; i < ansaDet.length; i++) {
  if (typeof ansaDet[i] === "number") break;
  console.log(ansaDet[i]);
}
//  Looping Arrays, Breaking and Continuing
const calcPerc = function (population) {
  return Math.round((population / 7900) * 100, 2);
};
const percWorldPopulation = function (country, population) {
  const populationPerc = calcPerc(population);
  return console.log(
    `${country} has ${population} million population, so it's about ${populationPerc}% of the world population.`
  );
};
percWorldPopulation("Finland", 4200);
console.log(calcPerc(4200));
// For Loop
const populationArr = [2200, 1400, 9200, 750];
const populationPercArr = [];
for (let i = 0; i < populationArr.length; i++) {
  populationPercArr.push(calcPerc(populationArr[i]));
}
console.log(populationArr);
console.log(populationPercArr);
//  Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbours: ${listOfNeighbours[i][j]}`);
  }
}
// Backward Loop
const arrBackward = ["start", "middle", "last"];
for (let i = arrBackward.length - 1; i >= 0; i--) {
  console.log(arrBackward[i]);
}
// While loop
let count = 1;
while (count <= 10) {
  console.log(count);
  count++;
}
const populationArr2 = [2200, 1400, 9200, 750];
const populationPercArr2 = [];
let i = 0;
while (i <= populationArr2.length - 1) {
  populationPercArr2.push(calcPerc(populationArr2[i]));
  i++;
}
console.log(populationArr2);
console.log(populationPercArr2);
// let numWhile = parseInt(prompt("Choose any number between 1 - 10"));
// let j = 1;
// while (j <= 10) {
//   let result = numWhile * j;
//   console.log(`${numWhile} x ${j} = ${result}`);
//   j++;
// }
// Coding Challenge - 4
let billls = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tipps = [];
let totalls = [];
for (let i = 0; i < billls.length; i++) {
  tipps.push(
    billls[i] > 50 && billls[i] < 300 ? billls[i] * 0.15 : billls[i] * 0.2
  );
  totalls.push(billls[i] + tipps[i]);
}
console.log(tipps);
console.log(totalls);
function calcAveragee(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
let arr = [1, 2, 3, 4, 5];
console.log(calcAveragee(arr));

// Coding Challenge
function printForecast(arr) {
  for (let i = 1; i <= arr.length; i++) {
    console.log(`${arr} ${i}C ...`);
  }
}
const data1 = [17, 21, 23];
printForecast(data1);
