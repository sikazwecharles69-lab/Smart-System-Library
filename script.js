// Mobile Menu
const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// Close mobile menu when a navigation link is clicked
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// Learn More Button
const learnMoreButton = document.querySelector("#learn-more");

if (learnMoreButton) {
    learnMoreButton.addEventListener("click", () => {
        document.querySelector("#features").scrollIntoView({
            behavior: "smooth"
        });
    });
}
const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

