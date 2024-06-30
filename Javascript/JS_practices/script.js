const gym = function () {
  for (let rep = 0; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
  }
};
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

function getJonas() {
  for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);
  }
}
// getJonas();

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  console.log(jonasArray[i], `'${typeof jonasArray[i]}'`);
}

// While Loop
