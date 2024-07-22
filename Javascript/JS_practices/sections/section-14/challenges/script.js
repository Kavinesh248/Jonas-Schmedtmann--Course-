"use strict";

/*

  1. Use a constructor function to implement a Car.
  A car has a mke and a speed property. The speed property
  is the current speed of the car in km/h;

  2. Implement an 'accelerate' method that will increase
  the car's speed by 10, and log the new speed to the
  console;

  3. Implement a 'brake' method that will decrease the
  car's speed by 5, and log the new speed to the console;

  4. Create 2 car objects and experiment will calling
  'accelerate' and 'brake' multiple times on each of
  them.

  DATA CAR 1: 'BMW' going at 120 km/h
  DATA CAR 2: 'Mercedes' going at 95 km/h

*/

const Car = function (make, currentSpeed) {
  this.make = make;
  this.speed = currentSpeed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car("bmw", 120);
const mercedes = new Car("Mercedes", 85);

bmw.accelerate();
bmw.brake();
bmw.accelerate();

mercedes.accelerate();
mercedes.brake();
