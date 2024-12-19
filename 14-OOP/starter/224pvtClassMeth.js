// Lec 224 - Private class fields and methods
// Public Fields
// Private Fields
// Public Methods
// Private Methods
// There is also static version

class Account {
  // Public fields (no need to use let/const)
  // They're only instances. They aren't on prototype. They're just referencable. No need to later set this keyword with fields
  locale = navigator.language;

  // Private Fields (can make properties not accessible from outside, will be referencable on instances and not on prototype)
  #movements = []; //Will use # so it'll give error if access from out. Will change from everywhere else too
  // For pin, we'll have to set it as empty variable.
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected proprty
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public Methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }

  // Private Methods (to hide implementation details)
  #approveLoan(val) {
    return true;
  }
  // Static which we usually use for helper function (not available on instances but class themselves)
  static helper() {
    console.log('Helper');
  }
}
const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1);
console.log(acc1.pin);
// JS won't let us access private fields now & give syntax error
// console.log(acc1.#movements);
// Can use this method still bcuz it's in our public API
// console.log(acc1.getMovements());
// console.log(acc1.#pin);
// Private methods
// acc1.#approveLoan(1000);
Account.helper();
