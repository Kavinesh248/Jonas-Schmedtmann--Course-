"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },

  orderDelivery: function ({
    time,
    address,
    dish1,
    dish2,
    starterIndex,
    mainIndex,
  }) {
    console.log(
      `Your order ${dish1[starterIndex]}, ${dish2[mainIndex]} will be delivered to [${address}] at ${time}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  time: "11:04 am",
  address: "Via Del Sol, 24 California",
  dish1: restaurant.starterMenu,
  dish2: restaurant.mainMenu,
  starterIndex: 2,
  mainIndex: 1,
});

/*********************************************/
// DESTRUCTURING THE OBJECTS
/*********************************************/

const { name, categories, starterMenu } = restaurant;
console.log(name, categories, starterMenu);

// Changing the property name
const { name: dishName, location: place, starterMenu: menu } = restaurant;
console.log(dishName, place, menu);

// Mutating values
let a = 122;
let b = 100;
const obj = { a: 27, b: 90, c: 100 };
({ a, b } = obj);
console.log(a, b);

// Destructuring nested objects
const {
  fri: { open: o, close: c },
  sat: { open, close },
} = restaurant.openingHours;
console.log(o, c, open, close);
