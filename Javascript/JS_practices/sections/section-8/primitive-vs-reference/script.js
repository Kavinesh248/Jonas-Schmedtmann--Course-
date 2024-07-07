let lastName = "William";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 30,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";

console.log("Before marriage: ", jessica);
console.log("After marriage: ", marriedJessica);

// Copying objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 30,
};

// Copying the object really but shallow
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

console.log("Before marriage: ", jessica2);
console.log("After marriage: ", jessicaCopy);
