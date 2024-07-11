"use strict";

const flight = "LH123";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 234889234399,
};

const flightBooking = function (flightNum, passenger) {
  flightNum = "LH190";

  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 234889234399) {
    console.log("Checked in!");
  } else {
    console.log("Wrong passport");
  }
};

flightBooking(flight, jonas);

// Here the name property in jonas object gets changed after
//the function call because object are reference types so that it
//get manipulated after the call!

console.log(flight, jonas);

const newPassport = function (passenger) {
  passenger.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(jonas);
// Here the name property in jonas object gets changed after
//the function call because object are reference types so that it
//get manipulated after the call!
console.log(flight, jonas);
