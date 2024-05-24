'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2024-01-01T17:01:17.194Z',
    '2024-02-21T23:36:17.929Z',
    '2024-02-25T10:51:36.790Z',
  ],
  currency: 'INR',
  locale: 'en-IN', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2024-01-01T14:43:26.374Z',
    '2024-01-02T18:49:59.371Z',
    '2024-01-06T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2024-01-01T14:43:26.374Z',
    '2024-01-02T18:49:59.371Z',
    '2024-01-06T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'en-GB',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// const movement = [200, 450, -400, 3000, -650, -130, 70, 1300];

const creatingUserName = function (account) {
  account.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(function (name) {
        return name[0];
      })
      .join('');
  });
};
creatingUserName(accounts);

const foratMovementDates = (date, locale) => {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  //Formatting the date in movements using Intl API
  return new Intl.DateTimeFormat(locale).format(date);
};

//Formatting currency
const formatCur = function (value, locale, cur) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: cur,
  }).format(value);
};

//Displaying movements
const displayMovements = function (acc, sorting = false) {
  containerMovements.innerHTML = '';

  const movs = sorting
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = foratMovementDates(date, acc.locale);

    const formatCurrency = formatCur(mov, acc.locale, acc.currency);

    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
              <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formatCurrency}</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//Displaying Balance
const displayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => {
    return acc + mov;
  }, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

//Displaying Summary
const displaySummary = function (acc) {
  const summaryIn = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = formatCur(summaryIn, acc.locale, acc.currency);

  const summaryOut = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = formatCur(
    Math.abs(summaryOut),
    acc.locale,
    acc.currency
  );

  const summaryInterest = acc.movements
    .filter(acc => acc > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = formatCur(
    summaryInterest,
    acc.locale,
    acc.currency
  );
};

//Updatting UI
const updateUI = function (account) {
  //Display movements
  displayMovements(account);
  //Display balance
  displayBalance(account);
  //Display summary
  displaySummary(account);
};

//Setting time out for logging out the user
const startLogoutTimer = function () {
  const clock = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    //In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    //When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    //Decrease by 1 second
    time--;
  };
  //Set time to five minutes
  let time = 300;
  //Call the timer for every second
  clock();
  const timer = setInterval(clock, 1000);

  return timer;
};

let currentAccount, timer;

//Login functionalities!!!
btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Updating UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Create current date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Resetting the time every time user logged in
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();
    updateUI(currentAccount);
  }
});

//Adding transfer functionalities
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //Transfer Process
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    clearInterval(timer);
    timer = startLogoutTimer();

    //Updating UI
    updateUI(currentAccount);
  }
});

//Adding functionalities for closing the account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Hiii');
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

//Adding functionalities for requesting loans
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(acc => acc >= amount * 0.1)) {
    setTimeout(() => {
      currentAccount.movements.push(amount);

      //Updating date and pushing in the movementsdates array
      currentAccount.movementsDates.push(new Date().toISOString());

      clearInterval(timer);
      timer = startLogoutTimer();
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';
});

//Sorting functionality
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
  btnSort.blur();
});

// //Fake logged in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

/*
//Creating Dates
const now = new Date();
console.log(now);
console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015 '));
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
*/

//Working with Dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());
// console.log(new Date(2142256980000));
// console.log(Date.now());
// future.setFullYear(2040);
// console.log(future);

// setInterval(() => {
//   const name = new Date();
//   const hours = name.getHours();
//   const minute = name.getMinutes();
//   const seconds = name.getSeconds();
//   console.log(`${hours}:${minute}:${seconds}`);
// }, 1000);
