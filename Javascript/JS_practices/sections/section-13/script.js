'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('header');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

// Modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(el => el.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Smooth scrolling functionalities
btnScrollTo.addEventListener('click', function (e) {
  e.preventDefault();
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Implementing Page Navigation : Event delegation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Buiding the tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelectorAll('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.forEach(tab => {
  tab.addEventListener('click', e => {
    const clicked = e.target.closest('.operations__tab');

    if (!clicked) return;

    // Removinig active classes before adding the classes
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(con =>
      con.classList.remove('operations__content--active')
    );

    // Activate tab
    clicked.classList.add('operations__tab--active');

    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add('operations__content--active');
  });
});

// Menu fade animation
// mouseover does bubble, mouseenter does not bubble
const animateMenu = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
      logo.style.opacity = this;
    });
  }
};

nav.addEventListener('mouseover', animateMenu.bind(0.5));
nav.addEventListener('mouseout', animateMenu.bind(1));

// Sticky navigation
window.addEventListener('scroll', function (e) {
  console.log(window.scrollY);
});

//////////////////////////////////////////
/////LECTURES
//////////////////////////////////////////

// console.log(getComputedStyle(message).width);

// // document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = 'Beautiful minimalist logo';

// // Non-standard
// logo.setAttribute('designer', 'jonas');
// console.log(logo.designer); //undefined - because it's not standard

// console.log(logo.getAttribute('src'));

// // Data attributes
// logo.setAttribute('data-version-number', 3.0);
// console.log(logo.dataset.versionNumber);

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
//   'We use cookies to collect and analyse information on site performance and usage, <button class="btn btn--close-cookie">Allow all cookies</button>';
// header.append(message);

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     // message.remove();
//     message.parentElement.removeChild(message);
//   });

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
// });

// const h1 = document.querySelector('h1');

// h1.closest('.header__title').style.background = 'var(--gradient-secondary)';
