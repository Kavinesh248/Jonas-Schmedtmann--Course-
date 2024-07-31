"use strict";

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

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// const whereAmI = async function (country) {
//   // Using try and catch for handling error in a better way
//   try {
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     const resData = await resGeo.json();

//     const res = await fetch(
//       `https://restcountries.com/v2/name/${resData.country}`
//     );
//     if (!res.ok) throw new Error("Problem getting country!");

//     const data = await res.json();
//     countriesContainer.style.opacity = 1;
//     renderCountry(data[0]);

//     return `You are in ${resData.city}, ${resData.country}`;
//   } catch (err) {
//     console.error(`${err.message} 🐦‍🔥🐦‍🔥`);
//   }
// };
// whereAmI("portugal");

const getJSON = function (url, errMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok)
      throw new Error(`Problem getting country: ${response.status}`);
    return response.json();
  });
};

const get3Coutries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

    // console.log(data1, data2, data3);

    //Running promises in Parallel
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);

    console.log(data.map((d) => d[0].capital));
  } catch (err) {
    console.error(`${err.message} 🐦‍🔥`);
  }
};

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/india`),
    getJSON(`https://restcountries.com/v2/name/uk`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);
  console.log(res[1]);
})();

get3Coutries("portugal", "usa", "afghanistan");
