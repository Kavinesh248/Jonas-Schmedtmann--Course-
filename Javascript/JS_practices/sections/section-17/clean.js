const budget = Object.freeze([
  { value: 250, description: "Sold old TV 📺", user: "jonas" },
  { value: -45, description: "Groceries 🥑", user: "jonas" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
  { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
  { value: -1100, description: "New iPhone 📱", user: "jonas" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "jonas" },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = (user, limits) => limits?.[user] ?? 0;

const addExpense = function (
  state,
  limits,
  value,
  description,
  user = "Jonas"
) {
  const cleanUser = user.toLowerCase();
  if (value <= getLimit(cleanUser, limits))
    return [...state, { value: -value, description, user: cleanUser }];
  return budget;
};

const budget1 = addExpense(budget, spendingLimits, 10, "Pizza 🍕");
const budget2 = addExpense(
  budget1,
  spendingLimits,
  100,
  "Going to movies 🍿",
  "Matilda"
);
const budget3 = addExpense(budget2, spendingLimits, 200, "Stuff");

const checkExpense = function (state, limits) {
  return state.map((entry) => {
    return entry.value < -getLimit(entry.user, limits)
      ? { ...entry, flag: "limit" }
      : entry;
  });
};
const finalBudget = checkExpense(budget3, spendingLimits);
console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
  return state
    .filter((entry) => entry.value <= -bigLimit)
    .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, "")
    .replace("/", "")
    .trim();
};

const big = logBigExpenses(finalBudget, 1000);
console.log(big);
