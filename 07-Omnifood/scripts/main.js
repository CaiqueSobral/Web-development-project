const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const mobileNav = document.querySelector(".btn-mobile-nav");
mobileNav.addEventListener("click", function () {
  document.querySelector(".header").classList.toggle("nav-open");
});
