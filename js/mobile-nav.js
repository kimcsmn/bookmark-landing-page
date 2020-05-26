const menuBtn = document.querySelector(".menu-btn");
const burgerMenu = document.querySelector(".burger-menu");
const closeBtn = document.querySelector(".menu-close-btn");
const nav = document.querySelector("header nav");

burgerMenu.addEventListener("click", displayMenu);

function displayMenu() {
  nav.classList.toggle("mobile-nav");

  closeBtn.classList.toggle("show");
  menuBtn.classList.toggle("hide");
}
