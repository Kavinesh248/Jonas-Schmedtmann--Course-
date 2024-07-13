"use strict";

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const book = lufthansa.book;

lufthansa.book(234, "Jonas Schemedtmann");
lufthansa.book(19, "Jonas");

console.log(lufthansa);

const euroWings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

lufthansa.book.call(euroWings, 19, "Kavinesh");

// Apply method - parameters needs to be a array or array-like objects
lufthansa.book.apply(euroWings, [239, "Kavinesh"]);

// Bind Method
// It doesn't call the function instead it returns (bound) the new function with this keyword points to the current reference
const bookEW = book.bind(euroWings);
const bookEW23 = book.bind(euroWings, 23);

bookEW(238, "Praveen");
bookEW23("Praveen");
console.log(euroWings);

// Partial application - a part of information got applied already (predefined)

lufthansa.plane = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.plane++;
  console.log(this.plane);
};

// Without bind it will result in undefined because in event listener the this keyword always points to element where listener is attached
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

const addTax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT = addTax(0.23);
console.log(addVAT(23));
