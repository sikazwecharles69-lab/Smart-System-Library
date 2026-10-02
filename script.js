// Mobile menu
const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");

if (menuButton && navMenu) {
  menuButton.setAttribute("aria-expanded", "false");

  menuButton.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");
    menuButton.setAttribute("aria-expanded", isOpen);
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      navMenu.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

