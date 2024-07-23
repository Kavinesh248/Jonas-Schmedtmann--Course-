"use strict";

class Account {
  // Public fields (available on all instances but not the prototype)
  locale = navigator.language;

  // Private fields (available on the instances but not the prototype)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
    }
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
acc1.deposit(250);
acc1.withdraw(140);
// console.log(acc1.#approveLoan);
// console.log(acc1.#movements);
// should not have the access
// acc1.approveLoan(1000);

/*
 1 Public fields
 2 Private fields
 3 Public methods
 4 Private methods
 */
