'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const h1 = document.querySelector('h1');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const s1coords = section1.getBoundingClientRect();
const sectionTargets = document.querySelectorAll('section');
const imgTargets = document.querySelectorAll('img[data-src]');

const openModal = function (e) {
  e.preventDefa6ult();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Smooth scrolling implementation
//Learn more implementation
btnScrollTo.addEventListener('click', function (e) {
  console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());
  // console.log('Current position X/Y', window.pageXOffset, window.pageYOffset);

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});

//Page Navigation - Smooth scrolling
//Event delegation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  // console.log(e.target);
  e.preventDefault();

  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    console.log('LINK');
    console.log(e.currentTarget);
    const id = e.target.getAttribute('href');
    // console.log(id);
    // console.log(document.querySelector(id));
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Tabbed component implementation
tabContainer.addEventListener('click', function (e) {
  // console.log(e.target);
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  if (!clicked) return;
  tabs.forEach(el => el.classList.remove('operations__tab--active'));
  tabContent.forEach(curEl =>
    curEl.classList.remove('operations__content--active')
  );
  clicked.classList.add('operations__tab--active');
  const content = document.querySelector(
    `.operations__content--${clicked.dataset.tab}`
  );
  content.classList.add('operations__content--active');
});

//Navbar menu fade animation
const navAnimation = function (e) {
  // console.log(this);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    // console.log(link);
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    // console.log(siblings);
    const logo = link.closest('.nav').querySelector('img');
    // console.log(logo);
    siblings.forEach(curEl => {
      if (curEl !== link) {
        curEl.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', navAnimation.bind(0.5));
nav.addEventListener('mouseout', navAnimation.bind(1));

//Sticky navigation bar implementation
// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);
//   if (window.scrollY > s1coords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

//Sticky navigation using - Intersection Observer API
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);
const stickyNav = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};
const observer = new IntersectionObserver(stickyNav, obsOptions);
observer.observe(header);

//Revealing elements on scroll
const secFunc = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
};
const secObserver = new IntersectionObserver(secFunc, {
  root: null,
  threshold: 0.15,
});
sectionTargets.forEach(el => {
  secObserver.observe(el);
  el.classList.add('section--hidden');
});

//Lazy loading images
const imgFunc = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(imgFunc, {
  root: null,
  threshold: 0,
  rootMargin: '-150px',
});
imgTargets.forEach(curEl => imgObserver.observe(curEl));

//Building a slider component
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');
  const dotParent = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  //Adding or creating dots to the dot container
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  //Based on the dataset value when we click the dot it moves to the respective slide
  dotParent.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const slide = e.target.dataset.slide;
      goToSlide(slide);
      showActiveDot(slide);
    }
  });
  //Adding class for a state of dot!
  const showActiveDot = function (slide) {
    const some = document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  //Next Slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    showActiveDot(curSlide);
  };
  //Previous slide
  const previousSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    showActiveDot(curSlide);
  };
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', previousSlide);
  //Based on the index value the translate value should be 0, 100, 200, 300 / By using index value we
  //calculate the translate value by multiplying with 100

  //Using arrow for sliding
  const keySlide = function (e) {
    document.addEventListener('keydown', function (e) {
      e.key === 'ArrowLeft' && previousSlide();
      e.key === 'ArrowRight' && nextSlide();
    });
  };

  const init = function () {
    goToSlide(0);
    createDots();
    showActiveDot(0);
    keySlide();
  };
  init();
};
slider();
////////////////////////////////////////////////
///////////////////////////////////////////////
//////////////////////////////////////////////

//querySelector
//getElementById
//getElementsByTagName
//getElementsByClassName
//prepend
//append
//before
//after
//Challenge - remove the element when we click the got it button

// console.log(document.querySelector('.header'));
// console.log(header);
// console.log(document.getElementById('section--1'));
// const btns = document.getElementsByTagName('button');
// console.log(btns);

// const clsName = document.getElementsByClassName('btn');
// console.log(clsName);

// const cookMess = document.createElement('div');
// cookMess.classList.add('cookie-message');
// cookMess.innerHTML =
//   'We use cookies to ensure you get the best experience on our website. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(cookMess);
// header.append(cookMess);
// header.before(cookMess);
// header.after(cookMess);

//Deleting element
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     cookMess.remove();
//   });

//styles
//getcomputedstyle
//setproperty
//attributes - getattribute, setattribute
//data attributes

// const logo = document.querySelector('.nav__logo');

// cookMess.style.backgroundColor = '#37383d';
// cookMess.style.width = '120%';

// cookMess.style.height =
//   Number.parseInt(getComputedStyle(cookMess).height) + 60 + 'px';
// console.log(getComputedStyle(cookMess).height);

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// //attributes
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// //Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('artist', 'divyesh');
// console.log(logo.getAttribute('artist'));

//addEventListener
// const alert1 = function () {
//   alert('Mouse got Entered :D');
// };
// h1.addEventListener('mouseout', alert1, {
//   once: true,
// });
// setTimeout(() => h1.removeEventListener('mouseout', alert1), 3000);

//A bit old school method
// h1.onmouseenter = function (e) {
//   alert('onmouseenter got Entered :D');
// };

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;

// const randomColor = () =>
//   `rgb(${randomInt(0, 225)},${randomInt(0, 225)},${randomInt(0, 225)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(e.target, e.currentTarget);
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log(e.target, e.currentTarget);
//   }
//   // {
//   //   capture: true,
//   // }
// );
// const navChild = [...navBar.children];

// navBar.forEach(el =>
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log(el);
//     const elements = [...el.children];
//     console.log(elements);
//     elements.forEach(curEl => {
//       curEl.style.backgroundColor = randomColor();
//     });
//   })
// );

// navBar.forEach(el =>
//   el.addEventListener('click', function (e) {
//     // e.preventDefault();
//     e.stopPropagation(); // Stop event propagation to prevent bubbling further up the DOM tree
//     changeBackgroundColor(e.target);
//     // e.target.style.backgroundColor = randomColor();
//   })
// );

// function changeBackgroundColor(element) {
//   element.style.backgroundColor = randomColor();
//   if (
//     element.parentElement &&
//     !element.parentElement.classList.contains('nav')
//   ) {
//     // console.log(element.parentElement); // Change the background color of the clicked element
//     changeBackgroundColor(element.parentElement);
//   }
// }

//DOM Traversings

// const h1 = document.querySelector('h1');

//Going downwards: Child
// console.log(h1);
// console.log(h1.childNodes);
// console.log(h1.children);

// h1.firstElementChild.style.color = 'orangered';
// h1.lastElementChild.style.color = 'blue';
// h1.parentElement.style.color = 'yellow';

//Going upwards: Parent
