"use strict";

// Points to the global object (window)
console.log(this);
const getValue = function (val) {
  // It points to the global object in the sloppy mode
  //but in the strict mode it is simply showed as undefined
  console.log(this);
  console.log(val);
};

getValue("kavinesh");

// In arrow function the this keyword points to the global object
//The arrow function does not get the this keyword it simply get the lexical this keyword, its parent scope this keyword
const showValue = (val) => console.log(this);
showValue();

const me = {
  year: 2004,
  name: "Kavinesh",
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },
};
me.calcAge();

// const jonas = {
//   year: 1991,
// };

// // Method borrowing
// jonas.calcAge = me.calcAge;
// console.log(jonas);

// const f = me.calcAge;
// f();

// document.querySelector("h1").addEventListener("click", function () {
//   // In this context this keyword refers to the dom element itself
//   this.textContent = "This keyword";
//   this.style.color = "red";
// });

// REGULAR FUNCTIONS VS ARROW FUNCTIONS
// console.log(firstName);
var firstName = "kavinesh";
const sameMe = {
  year: 2004,
  name: "Kavinesh",
  calcAge() {
    // Solution 1
    // This arrow function gets the this keyword through his parent this value (lexical this)
    // const arrowFunc = () => {
    //   console.log(this);
    //   console.log(2024 - this.year);
    // };

    //Solution 2
    // // Regular function usually get it's own this keyword
    // const self = this;
    // //Usually this keyword in regular function is set to undefined but we can use through defining a seperate variable outside the function set to this
    // const arrowFunc = function () {
    //   console.log(self);
    //   console.log(2024 - self.year);
    // };
    // arrowFunc();

    console.log(this);
    console.log(2024 - this.year);
  },

  greet: () => {
    //the result will be Hey kavinesh because the firstName variable in the global variable environment so it can be accessed through the arrow function
    console.log(`Hey ${this.firstName}`);
  },
};
sameMe.calcAge();

// Arguments keyword

// Regular function call only has the arguments keyword not in other function calls
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(1, 2, 8, 19);
