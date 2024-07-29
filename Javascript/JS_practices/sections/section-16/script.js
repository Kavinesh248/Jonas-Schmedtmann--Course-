"use strict";
//https://countries-api-836d.onrender.com/countries/
// https://restcountries.com/v2/name/portugal

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

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

// Chaining methods and error handling
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];
      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then((res) => res.json())
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.error(`${err} 🔴🔴🔴`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener("click", function () {
  getCountryData("portugal");
});

// const getCountries = function (country) {
//   // First AJAX Call
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(request.responseText);
//     console.log(data);

//     renderCountry(data);

//     // Get the neighbour country
//     const neighbour = data.borders?.[0];

//     // Second AJAX Call
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(request2.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// Fetch method :
// const getCountryData = function (country) {
//   fetch('https://restcountries.com/v2/name/portugal')
//     .then(response => {
//       console.log(response);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]));
// };

// getCountryData('portugal');
