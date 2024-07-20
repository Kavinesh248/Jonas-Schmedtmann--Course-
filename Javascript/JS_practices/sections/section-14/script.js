"use strict";

// Constructor function is a completely normal function

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person("jonas", 1991);
