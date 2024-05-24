//=====================CODING CHALLENGE 1==================//

// 1. Create one player array for each team (variables
//     'players1' and 'players2')
// 2. The first player in any player array is the
//     goalkeeper and the others are field players. For
//     Bayern Munich (team 1) create one variable ('gk')
//     with the goalkeeper's name, and one array
//     ('fieldPlayers') with all the remaining 10 field
//     players
// 3. Create an array 'allPlayers' containing all
//     players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3
//     substitute players. So create a new array
//     ('players1Final') containing all the original teaml
//     players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable
//     for each odd (called 'teaml', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an
//     arbitrary number of player names (NOT an array) and
//     prints each of them to the console, along with the
//     number of goals who were scored (number of player
//     names passed in).
// 7. The team with the lower odd is more likely to win.
//     Print to the console which team is more likely to
//     win, WITHOUT using an if/else statement or the
//     ternary operator.
// TEST DATA FOR 6: Use players 'Davies', 'Muller',
// 'Lewandowski' and 'Kimmich'. Then, call the function
// again with players from game.scorer

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // const [players1, players2] = game.players;
// // console.log(players1, players2);

// // const [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers);

// // const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// // const player1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// // console.log(player1Final);

// // const {team1, x: draw, team2} = game.odds;
// // console.log(team1, draw, team2)

// // const teamPlayers = ['Davies', 'Muller', 'Lewandowski', 'Kimmich'];
// // const printGoals = function (val) {
// //   console.log(`The player ${val} has scored ${game.score}`);
// // };
// // printGoals(teamPlayers);

// // const { odds } = game;
// // odds.team1 < odds.team2 &&
// //   console.log(`Team 1 won with the value of ${odds.team1}`);

// //=====================CODING CHALLENGE 2==================//

// // Let's continue with our football betting app!
// // 1. Loop over the game.scored array and print each
// // player name to the console, along with the goal
// // number (Example: "Goal 1: Lewandowski")
// // 2. Use a loop to calculate the average odd and log it
// // to the console (We already studied how to calculate
// // averages, you can go check if you don't remember)
// // 3. Print the 3 odds to the console, but in a nice
// // formatted way, exaclty like this:
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object,
// // don't hardcode them (except for "draw"). HINT: Note
// // how the odds and the game objects have the same
// // property names
// // BONUS: Create an object called 'scorers' which
// // contains the names of the players who scored as
// // properties, and the number of goals as the value. In
// // this game, it will look like this:
// //  {
// //   Gnarby: 1,
// //   Hummels: 1,
// //   Lewandowski: ?
// //  }

// // GOOD LUCK 🤩
// // */

// //Task 1

// const playersName = game.scored.entries();
// for (const [i, player] of playersName) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// //Task 2

// let average = 0;
// let odds = Object.values(game.odds);
// for (const odd of Object.values(game.odds)) average += odd;
// average /= odds.length;
// console.log(average);

// //Task 3

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${team}: ${odd}`);
// }

// //Bonus
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] = (scorers[player] || 0) + 1;
// }
// console.log(scorers);

//Challenge

const Julia = [3, 5, 2, 12, 7];
const Kate = [4, 1, 15, 8, 3];

const checkDogs = (dogsJulia = Julia, dogsKate = Kate) => {
  const newArray = dogsJulia.slice(1, -2).concat();
  const wholeArray = [...newArray, ...dogsKate];
  wholeArray.forEach(function (el, index) {
    el >= 3
      ? console.log(
          `Dog number ${index + 1} is an adult, and is ${el} years old`
        )
      : console.log(`Dog number ${index + 1} is still an puppy 🐶`);
  });
};

checkDogs();
const numbers1 = [1, 2, 3, 4];

//Challenge create a above exercises with only using reduce method
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
//Challenges
// const dog1 = [5, 2, 4, 1, 15, 8, 3];
// const dog2 = [16, 6, 10, 5, 6, 1, 4];

// const calcHuman =  (ages) => {
//   let humanAge = ages
//     .map(age => {
//       return age <= 2 ? 2 * age : 16 + age * 4;
//     })
//     .filter(age1 => {
//       return age1 >= 18;
//     });
//   const sum = humanAge.reduce((acc, el) => {
//     return acc + el;
//   });
//   console.log(humanAge);
//   return sum / humanAge.length;
// };

// const calcHuman = ages =>
//   ages
//     .map(age => {
//       return age <= 2 ? 2 * age : 16 + age * 4;
//     })
//     .filter(age1 => {
//       return age1 >= 18;
//     })
//     .reduce((acc, el, i, arr) => {
//       return acc + el / arr.length;
//     }, 0);

// console.log(calcHuman(dog1));
// console.log(calcHuman(dog2));

// const depositFor = [];
// for (const mov of movements) if (mov > 0) depositFor.push(mov);
// console.log(depositFor);
// //Using filter method
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// //Getting the highest value in movement array!
// const value2 = movements.reduce((acc, val) => {
//   if (acc > val) return acc;
//   else return val;
// }, movements[0]);
// console.log(value2);

// const dep = accounts.find(mov => mov.owner === 'Jessica Davis');
// console.log(dep);

// for (const [i, v] of accounts.entries()) {
//   if (i === 1) {
//     console.log(v);
//   }
// }
// const result = accounts.find((v, i) => i === 1);
// console.log(result);

// const some = accounts.forEach((someval, i) => {
//   return i === 3 ? console.log(someval) : undefined;
// });

//TEST DATA:

const dogs = [
  { name: 'Jimmy', weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  {
    name: 'Julie',
    weight: 8,
    curFood: 200,
    owners: ['Matilda'],
  },
  {
    name: 'Tommy',
    weight: 13,
    curFood: 275,
    owners: ['Sarah', 'John'],
  },
  {
    name: 'Brownie',
    weight: 32,
    curFood: 340,
    owners: ['Michael'],
  },
];

//Task 1
const findFoodPortion = function (arr) {
  arr.forEach(val => {
    val.recommendedFood = val.weight ** 0.75 * 28;
  });
};
findFoodPortion(dogs);

//Task 2
const findSarah = dogs.find(val => val.owners.includes('Sarah'));
console.log(findSarah);
console.log(
  `Sarah's dog is eating ${
    findSarah.curFood > findSarah.recommendedFood ? 'much' : 'little'
  }`
);

//Task 3
const ownersEatTooMuch = dogs
  .filter(val => val.curFood > val.recommendedFood)
  .flatMap(some => some.owners)
const ownersEatTooLittle = dogs
  .filter(val => val.curFood < val.recommendedFood)
  .flatMap(some => some.owners)
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

//Task 4
console.log(`${ownersEatTooMuch.join(' and ')} dog's eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')} dog's eat too little`);

//Task 5
const correctAmt = dogs.some(val => val.curFood === val.recommendedFood);
console.log(correctAmt);

//Task 6
const okayAmt = dogs.some(
  val =>
    val.curFood > val.recommendedFood * 0.9 &&
    val.curFood < val.recommendedFood * 1.1
);
console.log(okayAmt);

//Task 7
const okayAmtDogs = dogs.filter(
  val =>
    val.curFood > val.recommendedFood * 0.9 &&
    val.curFood < val.recommendedFood * 1.1
);
console.log(okayAmtDogs);

//Task 8
const shallowDog = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(shallowDog);

//Task 9
dogs.push({ name: 'Kit Kat', weight: 28, curFood: 340, owners: ['Kavinesh'] });

//Task 10
const findOwner = function (dogs, targetWeight) {
  let foundOwner = 'No owner found for the dog';
  dogs.forEach(val => {
    if (val.weight === targetWeight) foundOwner = val.owners;
  });
  return foundOwner;
};
console.log(`Owners of dogs are : ${findOwner(dogs, 13)}`);

//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
//   console.log(movementsUI);
//   console.log(movementsUI2);
// });

////////////////////////////////////////////////
////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, 400, -3000, 650, -130, 70, -1300];

//Every - If every element pass the condition it returns true.
// console.log(movements.sort());
//Fill method - to fill the array with particular values
// console.log(movements.fill(24, 4, 7));
//Array.from();
const y = Array.from({ length: 7 }, () => 1);
// console.log(y);
/////////////////////////////////////////////////
/**
Map - The usage of map is if we want something newly. Let's say we already have a array but instead of that we want new array in that case using map can return a new array.
forEach - We can use forEach to mutate the original and modify it.
The difference between map and forEach is 'Side Effect'
 */
/////////////////////////////////////////////////
/////////////////////////////////////////////////
////////////////////////////////////////////////

//Array method Practice

// 1. Using flat / flatmap / filter / reduce methods
const bankDeposits = accounts
  .flatMap(acc => acc.movements)
  .filter(acc => acc > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(bankDeposits);

// 2.  Finding how many deposits in the array atleast 1000
const numDeposit = accounts
  .flatMap(acc => acc.movements)
  // .filter(acc => acc >= 1000).length;
  .reduce((count, cur) => (cur > 1000 ? count + 1 : count), 0);
console.log(numDeposit);

//3. Create an object that sum contains the deposits and the withdrawals
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(sums);

//4. Titlecase

const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'or', 'but', 'in', 'with', 'the', 'is'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};
console.log(
  convertTitleCase('an elevator is standing under the mall building')
);
// console.log(
//   convertTitleCase('and elevator command operation there some methods')
// );
