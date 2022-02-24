const dropdownMenu = document.querySelector(".dropdown-container");
const dropdownCloseButton = document.querySelector(".close-btn");
const dropdownOpenButton = document.querySelector(".burger-icon");
const burgerIcon = document.querySelector(".burger-icon");
const navbar = document.querySelector("#navbar");
const logo = document.querySelector("#site-logo");
const navLinks = document.querySelectorAll(".nav-links");


const navbarChange = () => {
const topOfPage = window.scrollY;

if(topOfPage >= 100) {
    navbar.classList.add("navbar-active");
}

else {
    navbar.classList.remove("navbar-active");
}
}


const openDropdown = () => {
    dropdownMenu.classList.add("dropdown-active");
}

const closeDropdown = () => {
    dropdownMenu.classList.remove("dropdown-active");
}


dropdownOpenButton.addEventListener("click", openDropdown);
dropdownCloseButton.addEventListener("click", closeDropdown);
window.addEventListener("scroll", navbarChange);

