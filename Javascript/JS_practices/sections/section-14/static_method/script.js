"use strict";

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2024 - this.birthYear);
  }

  get age() {
    return 2024 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert("It is not a full name!");
  }
}

const jessica = new PersonCl("Jessica Davis", 1996);
// jessica.fullName = "Jessica Davis";
console.log(jessica);

jessica.calcAge();

const account = {
  owner: "Jonas",
  movements: [200, 350, 900, 850],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

PersonCl.prototype.some = "Kavinesh";

console.log(jessica.some);

console.log(account.latest);
account.latest = 50;
console.log(account);
