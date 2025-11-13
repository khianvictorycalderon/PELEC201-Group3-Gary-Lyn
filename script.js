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