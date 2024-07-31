/*

  In this challenge you will build a function
  'whereAmI' which renders a country ONLY based
  on GPS coordinates. For that, you will use a 
  second API to geocode coordinates.

  Here are your tasks:

  PART 1
  
  1. Create a function 'whereAmI' which takes as
  inputs a latitude value (lat) and a longitude value
  (lng) (these are GPS coordinates, examples are below).

  2. Do "reverse geocoding" of the provided coordinates.
  Rever geocoding means to convert coordinates to a 
  meaningful location, like a city and a country name. Use
  this api to do reverse geocoding:
  https://geocode.xyz/api.
  The AJAX call will be done to a URL  with this
  format: https://geocode.xyz/52.508,13.381?geoit=json. 
  Use the fetch API and promises to get the data. Do NOT use
  the getJSON we create this is cheating.

  3. Once you have the data, take a look at it in the console
  to see all the attributes that you received about the
  provided location. Then, using this data, log a messasge 
  like this to the console: 'You are in Berlin, Germany'

  4. Chain a .catch method to the end of the promise chain 
  and log errors to the console.

  5. This API allows you to make only requests per second.
  If you reload fast, you will get this error with code
  403. This is an error with the request. 
  Remember,fetch() does NOT reject the promise in this case.
  So create an error to reject the promise yourself, with 
  the meaningful error message.

  PART 2

  6. Now it's time to use the received data to render a 
  country. So take the relevant attribute from the geocoding
  API result, and plug it into the countries API that we
  have been using.
  
  7. Render the country and catch any errors, just like
  we have done in the last lecture (you can even copy this code
  , no need to type the same code)

  TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
  TEST COORDINATES 2: 19.037, 72.873 (Latitude, Longitude)
  TEST COORDINATES 3: -33.933, 18.474 (Latitude, Longitude)
  
*/
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

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then((res) => {
      console.log(`You are in ${res.city}, ${res.country}`);

      return fetch(`https://restcountries.com/v2/name/${res.country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not found ${res.status}`);
      return res.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`Something went wrong: ${err.message} 🐦‍🔥`))
    .finally(() => (countriesContainer.style.opacity = 1));
};

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

/* 

    Build the image loading functionality that I just
    showed you on the screen.

    Tasks are not super-descriptive this time, so tht
    you can figure out some stuff on your own. Pretend 
    you're working on your own.

    PART 1
    1. Create a function 'createImage' which receives
    imgPath as a input. This function returns a  promise
    which creates a new image (use document.createElement)
    and sets the .src attribute to the provided image paht.
    When the image is done loading, append it to the
    DOM element with the 'images' class, and resolve the
    promise The fulfilled value should be the image
    element itself. In case there is an error loading the image
    ('error' event), reject the promise.

    If this part is too tricky to you, just watch the
    first part of the solution.

    PART 2
    2. Consume the promise using .then and also add an error
    handler;
    3. After the image has loaded, pause execution for 2 seconds using
    the wait function that we created earlier; 
    4. After 2 seconds have passed, hide the current image
    (set display to none), and load a second image (hint: Use the
    image element returned by the createImage promise to hide the current
    image, you will need a global variable for that);
    5. After the second image has loaded, pause execution for 2 seconds
    again;
    6. After the 2 seconds have passed, hide the current image.

    TEST DATA: Images in the img folder. Test the error
    handler by passing a wrong image path. Set the network speed
    to 'Fast 3G' in the dev tools Network tab, otherwise
    images load too fast.


*/

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      document.querySelector(".images").append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

const wait = function (seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

let currentImg;

// createImage("img/img-1.jpg")
//   .then((res) => {
//     currentImg = res;
//     return wait(2);
//   })
//   .then((res) => {
//     currentImg.style.display = "none";
//     return createImage("img/img-2.jpg");
//   })
//   .then((res) => {
//     currentImg = res;
//     return wait(2);
//   })
//   .then((res) => {
//     currentImg.style.display = "none";
//     return createImage("img/img-3.jpg");
//   })
//   .then((res) => {
//     currentImg = res;
//     return wait(2);
//   })
//   .then((res) => {
//     currentImg.style.display = "none";
//   })

// .catch((err) => console.error(err));

/*

  PART 1
  
  Write an async function "loadNPause" that recreates Coding
  Challenge 2, this time using async/await (only the
  part where the promise is consumed). Compare the two versions,
  think about the big differences, and see which
  one you like more. Don't forget to test error handler, 
  and to set the networrk speed to 'Fast 3G' in the
  dev tools Network tab.

  PART 2
  1. Create an async function 'loadAll' that
   receives an array of image path
  'imgArr' 
  2. Use .map to loop over the arrya, to all the images wit the
  'createImage' function (call the resulting array 'imgs')
  3. Check out the 'imgs' array in the console! Is it like you 
  expected?
  4. Use a promise combinator function to actually 
  get the images
  from the array
  5. Add the 'parallel' class to all the images 
  (it has some Css style)

  TEST DATA:  ['img/img-1.jpg', 'img/img-1.jpg', 'img/img-1.jpg']
  . To test, turn off the 'loadNPause' function


  GOOD LUCK 🐦‍🔥
*/

const loadNPause = async function () {
  try {
    let img = await createImage("img/img-1.jpg");
    console.log("Image 1 has loaded");

    // Wait for 2 seconds and log the message
    await wait(2);
    img.style.display = "none";

    img = await createImage("img/img-2.jpg");
    console.log("Image 2 has loaded");
    await wait(2);
    img.style.display = "none";

    img = await createImage("img/img-3.jpg");
    console.log("Image 3 has loaded");
    await wait(2);
  } catch (err) {
    console.error(err.message);
  }
};

loadNPause();
