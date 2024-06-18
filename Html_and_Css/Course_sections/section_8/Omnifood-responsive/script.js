const closeMenu = document.querySelector(
  '.icon-mobile-nav[name="close-outline"]'
);
const openMenu = document.querySelector(
  '.icon-mobile-nav[name="menu-outline"]'
);
const header = document.querySelector(".header");

const toggleNav = (action) => header.classList[action]("nav-open");

closeMenu.addEventListener("click", () => toggleNav("remove"));
openMenu.addEventListener("click", () => toggleNav("add"));
