"use strict";

// Inheritance between classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2024 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert("It is not a full name!");
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log("Hey there");
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always be in first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2024 - this.birthYear
      } years old, but as a student I feel more like ${
        2024 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl("Martha Jones", 2012, "Computer Science");
console.log(martha);
martha.calcAge();
martha.introduce();
