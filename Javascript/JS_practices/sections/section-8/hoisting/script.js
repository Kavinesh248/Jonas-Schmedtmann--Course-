// (var) Results in undefined it actually get hoisted
console.log(me);
// (let, const) can't be hoisted it still in the temporal dead zone
// console.log(job);
// console.log(year);

var me = "Kavinesh";
let job = "Entrepreneur";
const year = 1991;

//Functions
// can you function declaration before declaration because of hoisting
console.log(addDecl(1, 2));
// expression and arrow function can't get hoisted because of tdz, it also acts as a variables

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};
//It gets hoisted but sets as undefined
// var addExpr = function (a, b) {
//   return a + b;
// };

const addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

// Never use var for variable declaration
var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted");
}
