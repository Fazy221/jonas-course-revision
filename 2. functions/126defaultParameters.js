// Setting Default Parameters

// Make empty bookings array
const bookings = [];
// Make bookAirline function and pass FlighNum, NumPass, price as arguments
// Default value of Numpass should be 1 and price be 199 basing on number of passengers
const bookAirline = function (FlightNum, NumPass = 1, price = 199 * NumPass) {
  //     Try doing ES5 method of setting default values
  //   NumPass = NumPass || 1;
  //   price = price || 199;
  //     Making booking object and put declared arguments

  const booking = {
    FlightNum,
    NumPass,
    price,
  };
  //     Push object arguments in booking array
  bookings.push(booking);
  //     Log in object
  console.log(booking);
};
// Call function with first argument only
bookAirline('LH312');
// Call function with skipping 2nd argument
bookAirline('LH332', undefined, 300);
// Call function with all arguments
bookAirline('LH300', 3, 800);

// Booking hotel example (chatGPT)
const bookingHotel = [];

function bookRom(hotelName, roomType = 'standard', pricePerNight = '$100') {
  const bookingsHotel = {
    hotelName,
    roomType,
    pricePerNight,
  };
  bookingHotel.push(bookingsHotel);
  console.log(bookingsHotel);
}
bookRom('PC Hotel');
bookRom('PC Hotel', 'Luxary', 300);
