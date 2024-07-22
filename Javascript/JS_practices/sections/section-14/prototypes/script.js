"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person("Jonas", 1991);

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};
console.log(Person.prototype);

// Very basic prototypal inheritance
jonas.calcAge();

console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.__proto__);
