// Lec 222 - Another class example
// Public interface of our obj
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Can protect pin
    this._pin = pin;
    // Movement as protected property (not truly private)
    this._movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }
  // Methods below can also be called API and they can be accessed if no data encapsulation
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }
}
const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);
// acc1.movements.push(250);
// acc1.movements.push(-140);
// Can make method directly
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1._approveLoan(1000);
console.log(acc1);
// We can also access pin but it isn't good for security purpose
console.log(acc1.pin);
// Now devs can access movements without overwriting them unless use _
console.log(acc1.getMovements());

// Can also this now but now, we've done above method so no need
// acc1._movements.push(250);
// acc1._movements.push(-140);
