"use strict";

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lotter draw is happening");
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("You WON 💰");
    } else {
      reject("You lost your money 🐦‍🔥");
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// console.log("Hey this is me");

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
// Get rid of callback hell
wait(3)
  .then(() => {
    console.log("I waited for 3 seconds");
    return wait(2);
  })
  .then(() => {
    console.log("I waited for 2 seconds");
    return wait(1);
  })
  .then(() => {
    console.log("I waited for 1 seconds");
  });

Promise.resolve("Resolve").then((res) => console.log(res));
Promise.reject(new Error("Reject")).then((res) => console.log(res));
