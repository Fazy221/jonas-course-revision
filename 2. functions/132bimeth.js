const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a flight on ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}, ${name}` });
  },
};
const eurowings = {
  airline: 'Euro Wings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;
// Using Call method (call eurowing obj with flightNum & name)
book.call(eurowings, 238, 'Faizan Raza');
// Using Bind method (to store obj in variable in booksEW & make call simpler with num&name only)
const EWbook = book.bind(eurowings);
EWbook(228, 'Faizan Raza');
// Do same with lufthansa airline
const LHbook = book.bind(lufthansa);
LHbook(328, 'General Bajwa');
// Do more simpler with calling name only
const EW23book = book.bind(eurowings, 23);
EW23book('Sheikh Chili');
// With event listener, dec plane as lufthansa obj prop, set at 300 & make function for ++ then use doc handler & bind buyplane function
// (This) keyword points to it's handler which is btn element there resulting in NaN so we'll use bind there
lufthansa.plane = 300;
lufthansa.planeBuy = function () {
  console.log(this);
  this.plane++;
  console.log(this.plane);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.planeBuy.bind(lufthansa));
// with Partial Applications
// Make addTax function with with rate,value as arguments then calculate & log
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.32, 250));
// Now making addVatTax function which always has rate as 23%, we can keep it null then put rate (can't use this name of obj bcuz not dealin with it)
const addVatTax = addTax.bind(null, 0.23);
// Now call addVat with value
console.log(addVatTax(100));
// Doing same with returning function arrow together method
const addTax2 = rate => value => value + value * rate;
console.log(addTax2(0.23)(100));
