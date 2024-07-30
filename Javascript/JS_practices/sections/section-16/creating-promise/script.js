"use strict";

const lotteryPromise = new Promise(function (resolve, reject) {
  // console.log("Lotter draw is happening");
  // setTimeout(() => {
  //   if (Math.random() >= 0.5) {
  //     resolve("You WON 💰");
  //   } else {
  //     reject("You lost your money 🐦‍🔥");
  //   }
  // }, 2000);
});

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
// Get rid of callback hell
wait(3)
  .then(() => {
    // console.log("I waited for 3 seconds");
    return wait(2);
  })
  .then(() => {
    // console.log("I waited for 2 seconds");
    return wait(1);
  })
  .then(() => {
    // console.log("I waited for 1 seconds");
  });

// Promise.resolve("Resolve").then((res) => console.log(res));
// Promise.reject(new Error("Reject")).then((res) => console.log(res));

// Promisifying geolocation API
const getLocation = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const renderCountry = function (data, className) {
  const html = `
       <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 100000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
      </article>
      `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
};

const whereAmI = function (lat, lng) {
  getLocation()
    .then((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })

    .then((response) => {
      console.log(response);
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then((res) => {
      console.log(`You are in ${res.city}, ${res.country}`);
      renderCountry(res);
      return fetch(`https://restcountries.com/v2/name/${res.country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not found ${res.status}`);
      return res.json();
    })
    .then((data) => renderCountry(data))
    .catch((err) => console.error(`Something went wrong: ${err.message} 🐦‍🔥`))
    .finally(() => (document.querySelector(".countries").style.opacity = 1));
};

document.querySelector(".btn-country").addEventListener("click", function () {
  whereAmI();
});
