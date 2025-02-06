const burgerMenu = document.querySelector(".burger-menu");
const navbarNav = document.querySelector(".navbar-nav");

burgerMenu.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});
