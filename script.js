const contactUsButton = document.getElementById("contact-us-button");
const contactUsSection = document.getElementById("contact-us-section");
const contactUsDarkCover = document.getElementById("absolute-dark-cover");
const contactUsSectionCloseButton = document.getElementById("contact-us-close-button");

// Animate the contact us section sliding to the right
contactUsButton.addEventListener("click", () => {
  contactUsSection.style.left = "50vw";
  contactUsDarkCover.style.display = "block";
});

// Revert back to the original status
contactUsDarkCover.addEventListener("click", revertBackContactUs);
contactUsSectionCloseButton.addEventListener("click", revertBackContactUs);

function revertBackContactUs() {
  contactUsSection.style.left = "-100vw";
  contactUsDarkCover.style.display = "none";
}

// Inputs
function handleSubmit(e) {
  e.preventDefault();
  var inputContactUsName = document.getElementById("contact-us-name-input");
  var inputContactUsEmail = document.getElementById("contact-us-email-input");
  var inputContactUsMessage = document.getElementById("contact-us-message-input");

  // Get values & trim whitespace
  var name = inputContactUsName.value.trim();
  var email = inputContactUsEmail.value.trim();
  var message = inputContactUsMessage.value.trim();

  // ===== VALIDATION SECTION =====
  // Check if fields are empty
  if (!name || !email || !message) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  // Validate name (at least 2 letters)
  var nameRegex = /^[A-Za-z\s]{2,}$/;
  if (!nameRegex.test(name)) {
    alert("Please enter a valid name (letters only, at least 2 characters).");
    inputContactUsName.focus();
    return;
  }

  // Validate email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address (e.g. you@example.com).");
    inputContactUsEmail.focus();
    return;
  }

  // Validate message (min 10 characters)
  if (message.length < 10) {
    alert("Your message must be at least 10 characters long.");
    inputContactUsMessage.focus();
    return;
  }

  // ===== SUCCESS =====
  alert("✅ Thank you, " + name + "! Your message has been sent successfully.");

  // Optionally clear the form
  e.target.reset();
}

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