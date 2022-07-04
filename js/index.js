const humberMenu = document.querySelector(".humbergur__menu");
const navbar = document.querySelector(".nav");
humberMenu.addEventListener("click", (e) => {
    navbar.classList.toggle("nav__expanded");
});