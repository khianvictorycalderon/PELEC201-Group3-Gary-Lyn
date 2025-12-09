// Walang gagalawin sa part na ito at paibaba
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

/* CAROUSEL */
let slides = document.querySelectorAll(".carousel-slide");
let index = 0;

function showSlide(i) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

document.querySelector(".next").onclick = () => {
  index = (index + 1) % slides.length;
  showSlide(index);
};

document.querySelector(".prev").onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
};

// Auto slide every 4 seconds
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 4000);