const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const isClosure = secureBooking();

isClosure();
isClosure();
isClosure();

let f;
const a = 0;

const g = function () {
  const a = 23;

  f = function () {
    console.log(a);
  };
};

const h = function () {
  // const b = 9;

  f = function () {
    console.log(a);
  };
};

g();
f();
console.dir(f);

h();
f();
console.dir(f);

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(() => {
    console.log(`We are boarding with ${n} passengers`);
    console.log(`There are three group with, ${perGroup} passengers each`);
  }, wait * 1000);

  console.log("Waiting for the 3 seconds");
};
boardPassengers(180, 3);
