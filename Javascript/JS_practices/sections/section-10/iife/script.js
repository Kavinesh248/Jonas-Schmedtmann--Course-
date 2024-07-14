"use strict";

const runOnce = function () {
  console.log("This will never run again");
};

runOnce();

//Immediately Invoked Function Expression
(function () {
  console.log("This will never run again");
  const isSafe = 90;
})();

(() => console.log("This will also never run again"))();

const isScoped = function () {
  const isPrivate = 23;
};

console.log(isSafe);
