// Call and Apply method
// 1. Declare lufthansa obj with airline, iatacode, empty booking array
// 2. Book function incl flighNum & name arguments which return X booked flight on iataCode & FlightNum
// 3. Also push in empty array the flight iata, name and flightNum with new flight object
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a flight on ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}, ${name}` });
  },
};
// Log in book function with flight number & name
lufthansa.book(239, 'Faizan');
lufthansa.book(142, 'Raza');
// Log in lufthansa object to check if pushing flight data into array worked
console.log(lufthansa);
// Make eurowing object with same properties
const eurowings = {
  airline: 'Euro Wings',
  iataCode: 'EW',
  bookings: [],
};
// Now we want same book function but copy pasting is bad  so we'll store method in external function
const book = lufthansa.book;
// Now calling it won't work bcuz (this) method will point to lufthansa instead of eurowing, causing error.
// book(233, 'Ansa khalid');
// Use call method instead, declare object then add arguments
book.call(eurowings, 23, 'Ansa khalid');
console.log(eurowings);
// Now do same calling with lufthansa
book.call(lufthansa, 23, 'Faizan Raza');
console.log(lufthansa);
// Also make of swiss & call it. Keep format & property names same
const swiss = {
  airline: 'Swiss',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 42, 'Noor Faizan');
console.log(swiss);
// Apply method (declare array flightData with same arguments then call swis with array)
const flightData = [321, 'Salar Faizan'];
book.apply(swiss, flightData);
console.log(swiss);
// Do same with call & rest operator (more used)
const flightData2 = [231, 'Hadi Faizan'];
book.call(swiss, ...flightData2);
console.log(swiss);

// Youtuber example
const youtuber1 = {
  name: 'Pewdiepie',
  category: 'Comedy',
  review(rating, comments) {
    console.log(
      `${this.name} is my favorite youtube channel. It's category is ${this.category}. I rate it ${rating} and comment ${comments} `
    );
  },
};
youtuber1.review(5, 'good channel');
const youtuber2 = {
  name: 'Junaid Akram',
  category: 'Education',
};
youtuber1.review.call(youtuber2, 4.5, 'awesome pakistani channel');
// Storing in variable
const review = youtuber1.review;
const youtuber3 = {
  name: 'Ducky',
  category: 'Roasting',
};
const youtuber4 = {
  name: "Ruby's Kitchen",
  category: 'Cooking',
};
review.call(youtuber3, 2, 'Worse');
review.call(youtuber4, 3, 'Fair cooking');
// Apply method is literally same except it takes arguments with array instead of seperately
review.apply(youtuber4, [3, 'Fair cooking']);
// Therefore, we can use arrays directly
const goodArr = [4, 'Good work'];
const badArr = [2, 'Bad work'];
review.apply(youtuber3, badArr);
review.apply(youtuber1, goodArr);
// Can also use rest op with call method alternatively
review.call(youtuber3, ...badArr);
review.call(youtuber1, ...goodArr);
// We know to find max value, we can use this function
let max = Math.max(1, 2, 3);
console.log(max);
// But we can't do same with using array so we'll use apply method
// First argument is this which refer to obj but we aren't using any so use null
let arrMax = Math.max.apply(null, [1, 2, 3, 4, 5, 6]);
console.log(arrMax);
