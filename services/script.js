const hamburgerBtn = document.getElementById("hamburger-btn");
const navbarOverlay = document.getElementById("nav-overlay");
const navbarCloseButton = document.getElementById("mobile-close-button");
const mobileMenu = document.getElementById("navbar-links");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
  navbarOverlay.style.display = "block";
});

// Close menu when clicking overlay
function closeNavBar() {
  mobileMenu.style.display = "none";
  navbarOverlay.style.display = "none";
}

navbarOverlay.addEventListener("click", closeNavBar);
navbarCloseButton.addEventListener("click", closeNavBar);