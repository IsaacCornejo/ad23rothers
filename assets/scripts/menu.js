const btnMenu = document.querySelector(".menu__btnOpen");
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav__menu");
const btnClose = document.querySelector("#menuClose");
const links = document.querySelectorAll(".menu__element");

btnMenu.addEventListener("click", () => {
  nav.classList.add("nav--mobile");
  navMenu.classList.add("nav__menu--mobile");
  btnMenu.style.display = "none";
  btnClose.classList.remove("no-mostrar");
});

btnClose.addEventListener("click", () => {
  nav.classList.remove("nav--mobile");
  navMenu.classList.remove("nav__menu--mobile");
  btnMenu.style.display = "block";
});

Array.from(links).forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("nav--mobile");
    navMenu.classList.remove("nav__menu--mobile");
    btnMenu.style.display = "block";
  });
});
