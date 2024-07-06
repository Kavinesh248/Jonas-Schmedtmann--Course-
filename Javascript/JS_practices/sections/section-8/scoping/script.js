"use strict";

// Scoping
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear} and my name is ${firstName}`;
    console.log(output);
  }

  if (age >= 40) {
    const oldAge = `My name is ${firstName}, and my age is ${age}. Ima a older man, now I feel like a grandpa 😂`;
    // var oldAge = `My name is ${firstName}, and my age is ${age} now im a olderMan`;
    console.log(oldAge);

    //Functions are block scoped in script mode
    function correctAge(a, b) {
      console.log(a + b);
    }

    //But arrow functions declared using var is not block scoped
    // const correctAge = (a, b) => {
    //   console.log(a + b);
    // };
  }

  // correctAge(3, 4);

  printAge();

  console.log(age);
  return age;
}

const firstName = "Jonas";
calcAge(1991);
