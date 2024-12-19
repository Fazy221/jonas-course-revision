// Call and Apply method
// 1. Declare lufthansa obj with airline, iatacode, empty booking array
// 2. Book function incl flighNum & name arguments which return X booked flight on iataCode & FlightNum
// 3. Also push in empty array the flight iata, name and flightNum with new flight object
const lufthansa = {
  airline: 'Lufthansa',
  iatacode: 'LH',
  booking: [],
  book(flightNum, name) {
    console.log(`${name} has booked flight ${this.iatacode}${flightNum}`);
    this.booking.push({ flight: `${this.iatacode}${flightNum}, ${name}` });
  },
};
// Log in book function with flight number & name
lufthansa.book(231, 'Faizan Raza');
// Log in lufthansa object to check if pushing flight data into array worked
console.log(lufthansa);
// Make eurowing object with same properties
const eurowing = {
  airline: 'Euro Wing',
  iatacode: 'EW',
  booking: [],
};
// Now we want same book function but copy pasting is bad  so we'll store method in external function
const book = lufthansa.book;
// Now calling it won't work bcuz (this) method will point to lufthansa instead of eurowing, causing error.
// book(231, 'Faizan');
// Use call method instead, declare object then add arguments
book.call(eurowing, 231, 'Ansa Khalid');
// Now do same calling with lufthansa
book.call(lufthansa, 412, 'Noor Faizan');
// Also make of swiss & call it. Keep format & property names same
const swiss = {
  airline: 'Swiss',
  iatacode: 'LE',
  booking: [],
};
book.call(swiss, 831, 'Salar Faizan');
// Apply method (declare array flightData with same arguments then call swis with array)
const flightData = [900, 'Fatima Mansoor'];
book.apply(swiss, flightData);
// Do same with call & rest operator (more used)
book.call(swiss, ...flightData);

// Youtuber bind method
const youtuber1 = {
  name: 'Faizan Raza',
  type: 'Vlogs',
  review(category, rating) {
    console.log(
      `${this.name} is ${category} youtuber and it's type is ${
        this.type
      }. I rate it ${rating} ${rating > 1 ? 'stars' : 'star'}.`
    );
  },
};
youtuber1.review('Great', 4);
const reviewYoutuber = youtuber1.review.bind(youtuber1);
const youtuber2 = {
  name: 'PewDiePie',
  type: 'Vlogs',
};
const youtuber3 = {
  name: 'Ducky',
  type: 'Roasting',
};
const youtuber4 = {
  name: 'Techno Gamers',
  type: 'Gaming',
};
reviewYoutuber.call(youtuber2, 'good', 4);
reviewYoutuber.call(youtuber3, 'okay', 3);
reviewYoutuber.call(youtuber4, 'bad', 1);
