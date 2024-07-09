// const rest = new Map();
// rest
//   .set(1, "Classico Italiano")
//   .set(2, "Biryani")
//   .set("open", 11)
//   .set("close", 24)
//   .set(true, "We are open :D")
//   .set(false, "We are close :(")
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"]);

// console.log(rest.get(true));
// console.log(rest.get("categories"));

// const time = 21;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("categories"));
// rest.delete(2);

// const arr = [1, 2];
// rest.set(arr, "Test");
// rest.set(document.querySelector("h1"), "Heading");
// console.log(rest.size);
// console.log(rest);

//Maps: Iteration
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again 🥹"],
]);

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

let answer; //Number(prompt("What is your answer"));

const final =
  question.get("correct") === answer
    ? `Your answer is ${question.get(true)}`
    : `Nope! ${question.get(false)}`;
console.log(final);

const lastRowNum = "kavinesh";
console.log(typeof lastRowNum);
