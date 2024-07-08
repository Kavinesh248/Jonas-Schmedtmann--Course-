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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
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

const rest1 = {
  owner: "Jervanto Davis",
  numGuests: 10,
  // numGuests: 0,
};

const rest2 = {
  owner: "Floyd Mayweather",
  foodAvailable: true,
};

// || operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 20;

//Using logical assignment operator
// rest1.numGuests ||= 20;
// Evaluating the 0 through nullish coalescing operator
// rest1.numGuests ??= 20;
// rest2.numGuests ||= 20;

// && OPERATOR
// rest1.numGuests = rest1.numGuests && 20;
// rest2.numGuests = rest2.numGuests && 20;

rest1.numGuests &&= 20;
rest2.numGuests &&= 20;

console.log(rest1, rest2);
