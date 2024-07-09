//Sets

const ordersSet = new Set([
  "biriyani",
  "noodles",
  "fried rice",
  "biriyani",
  "noodles",
  "pizza",
  "burger",
  "burger",
]);

console.log(ordersSet);
console.log(ordersSet.has("biryani"));
console.log(ordersSet.has("parotta"));
ordersSet.add("parotta");
ordersSet.add("fish biryani");
console.log(ordersSet);

for (const order of ordersSet)
  console.log(`These are the unique dish that was found: ${order}`);

//Example

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);

console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);
