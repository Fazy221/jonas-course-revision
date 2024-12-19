// Coding Challenge 4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// 1.
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);
// 2. (My method but coulnd't work due to owner)
if (dogs.owners === ['Sarah']) {
  console.log(
    `Sarah's dog is eating too ${
      dogs.recommendedFood < dogs.curFood ? 'high' : 'low'
    }`
  );
}
// 2. (Instructor's method)
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's Dog is eating too ${
    dogs.curFood > dogs.recommendedFood ? 'much' : 'little'
  } food`
);

// 2. My method reworked
dogs.find(dog => {
  if (dog.owners.includes('Sarah')) {
    console.log(
      `Sarah's dog is eating too ${
        dogs.curFood > dogs.recommendedFood ? 'high' : 'low'
      }`
    );
  }
});
// 3. (My method)
const ownersEatTooMuchMe = dogs.filter(
  dog => dog.curFood > dog.recommendedFood
);
console.log(ownersEatTooMuchMe);
const ownerEatTooLittleMe = dogs.filter(
  dog => dog.curFood < dog.recommendedFood
);
console.log(ownerEatTooLittleMe);

// 3. (Instructor's method)
// (will use map to put owners in new arr)
// (will also use flat to keep owners out of nested arr)
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .map(dog => dog.owners)
  .flat();
//Can do flatMap too
console.log(ownersEatTooMuch);
const ownerEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .map(dog => dog.owners)
  .flat();
console.log(ownerEatTooLittle);
// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dog eat too much`);
// 5. (My method; didn't work)
const exactAmount = dogs.filter(dog => {
  dog.curFood === dog.recommendedFood ? true : false;
});
console.log(exactAmount);
// (Instructor's work)
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
// 6.
const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;
console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
// const dogsSorted = dogs.slice().sort((a, b) => a - b); (since we've numbers in obj so can't do this method)
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
