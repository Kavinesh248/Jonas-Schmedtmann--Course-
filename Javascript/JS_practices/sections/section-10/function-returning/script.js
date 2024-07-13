// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greetEr = greet("Hey");
greetEr("kavinesh");

greet("Hey")("kavinesh");
greet("hey");
