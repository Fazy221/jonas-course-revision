const displayMovements = function (movements) {
  // First empty entire container
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    // Now take movement data from html. `` is best for this. Then replace hardcoded data. Remove date for now.
    // Make type for whether deposit or withdrawl
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    
  <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
  </div>
    `;
    // To connect html of function with movement container on page, will use InsertAdjacentHTML
    // Will take movement container from elements written above
    // This method will need 2 strin`gs. 1st is string we want to attach to HTM. (we'll use afterbegin bcuz starts right after beginning. Beforehand will invert it)
    // 2nd is string we want to insert with HTML
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);
