class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2024 - this.birthYear);
  }
}

const jessica = new PersonCl("Jessica", 1996);
console.log(jessica);

jessica.calcAge();
