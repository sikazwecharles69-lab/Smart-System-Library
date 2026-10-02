// Mobile Menu
const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("active");
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

function applyTheme(theme) {
    document.body.setAttribute("data-theme", theme);
    const isDark = theme === "dark";

    if (themeToggle) {
        themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
        themeToggle.setAttribute("aria-pressed", String(isDark));
    }

    if (themeIcon) {
        themeIcon.textContent = isDark ? "☀️" : "🌙";
    }
}

const savedTheme = localStorage.getItem("smart-library-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const nextTheme = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
        localStorage.setItem("smart-library-theme", nextTheme);
        applyTheme(nextTheme);
    });
}

// Learn More Button
const learnMoreButton = document.querySelector("#learn-more");

if (learnMoreButton) {
    learnMoreButton.addEventListener("click", () => {
        const featuresSection = document.querySelector("#features");

        if (featuresSection) {
            featuresSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}

