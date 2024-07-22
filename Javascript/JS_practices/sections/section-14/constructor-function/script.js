"use strict";

// Constructor function is completely a normal function
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this!!
  this.calcAge = function () {
    console.log(2024 - this.birthYear);
  };
};

const jonas = new Person("jonas", 1991);
console.log(jonas);
