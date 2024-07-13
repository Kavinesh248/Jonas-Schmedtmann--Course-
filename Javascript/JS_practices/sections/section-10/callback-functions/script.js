const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformers = function (str, fn) {
  console.log(`Original string: ${str}`);

  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};

transformers("Javascript is the best language of all time!", upperFirstWord);
transformers("Javascript is the best language of all time!", oneWord);

//JS uses callbacks all the time

const high5 = function () {
  console.log("Hey");
};

document.body.addEventListener("click", high5);

[("Jpeg", "png", "webp")].forEach(high5);

// Abstraction = we hide the details of some code implementation because we really don't  care about that information
