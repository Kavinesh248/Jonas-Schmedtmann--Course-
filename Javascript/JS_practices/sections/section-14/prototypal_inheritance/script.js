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

Person.prototype.species = "Homo Sapiens";

console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));

console.log(jonas.__proto__);

// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [3, 3, 2, 4, 5];
console.log(arr.__proto__);

const h1 = document.querySelector("h1");
console.dir(h1);
