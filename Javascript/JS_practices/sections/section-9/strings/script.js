"use strict";

// Data needed for a later exercise

// Data needed for first part of the section
const weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const openingHours = {
  [weekdays[4]]: {
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
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // Enhanced object literals (ES6)
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },

  orderDelivery({ time, address, dish1, dish2, starterIndex, mainIndex }) {
    console.log(
      `Your order ${dish1[starterIndex]}, ${dish2[mainIndex]} will be delivered to [${address}] at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

/**
    JavaScript strings are primitive data types. However, to use methods on them, JavaScript temporarily converts the string primitive to a String object.
    This conversion is called "boxing" and happens automatically.
 */

const airLine = "Air Top to Portugal";

console.log(airLine[0]);
console.log(airLine.slice(4, 7));
console.log(airLine.slice(0, 7));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  // if (s === "B" || s === "E") console.log(`It is a middle seat 🛩️`);
  // else console.log(`It's not a middle seat ❌`);
  const checkSeat =
    s === "B" || s === "E"
      ? `It is a middle seat 🛩️`
      : `It's not a middle seat 🛩️❌`;
  console.log(checkSeat);
};

checkMiddleSeat("11B");
checkMiddleSeat("22N");
checkMiddleSeat("11E");

// Fix capitalization in name
const nameCapitalize = function (name) {
  const passengerLower = name.toLowerCase();
  const correctPassenger =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(correctPassenger);
};

nameCapitalize("KavINesh");

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

// It only replaces the first occurance of that string
console.log(announcement.replace("door", "gate"));

// It replaces all the occurances
console.log(announcement.replaceAll("door", "gate"));

// Another way to change all occurances is to use Regular Expressions (regex)
console.log(announcement.replace(/door/g, "gate"));

// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.startsWith("Air"));
console.log(plane.endsWith("neo"));

if (plane.startsWith("Airbus") && plane.endsWith("neo"))
  console.log("Part of the NEW Airbus family");

const checkBaggage = function (items) {
  const itemLower = items.toLowerCase();

  if (itemLower.includes("knife") || itemLower.includes("gun"))
    console.log("You are not allowed on board");
  else console.log("You are welcome on board");
};

checkBaggage("Hey im carrying a big luggage and a pocket knife for protection");
checkBaggage("I got just bag full of my clothes and needs");
checkBaggage("Hey i got a gun for protection and a bag full or oranges ");

// Split and join
console.log("a+very+nice+string".split("+"));
console.log("Jonas Schmedtmann".split(" "));

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const randomSentence =
  "She can live her life, however she wants as long as, she listens to what I have to say.";
console.log(randomSentence.split(" ").join(" "));
console.log(randomSentence.split(",").join("-"));

const email = "hello@gmail.com";
console.log(email.split("@")[1]);

const domainName = function (email) {
  let pattern = /[\w.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

  if (email.match(pattern)) {
    let domain = email.split("@")[1];
    console.log(domain);
  } else {
    console.log("No it's not a email");
  }
};
// domainName("kavinesh");
domainName("kavinesh@gmail.com");

/*
  A delimiter is a character or 
  symbol used in computer code that separates words, data, or characters
*/

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(343434334343434));

/*
_Delayed_Departure;fao93766109;txl2133758440;11:25
+_Arrival;bru0943384722;fao93766109;11:45
+_Delayed_Arrival;hel7439299980;fao93766109;12:05
+_Departure;fao93766109;lis2323639855;12:30

Expected Output :
// 🔴 Delayed Departure from FAO to TXL (11h25)
// ..............Arrival from BRU to FAO (11h45)
// 🔴 Delayed Departure from HEL to FAO (12h05)
// ..............Arrival from FAO to LIS (12h30)
*/

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} to ${getCode(to)} (${time.replace(":", "h")})`.padStart(
    46
  );
  console.log(output);
}
