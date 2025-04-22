// Hamburger menu toggle
const hamburger = document.getElementById("web-hamburger");
const navLinks = document.getElementById("web-nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("web-active");
    navLinks.classList.toggle("open");
});

window.addEventListener("load", function() {
    document.body.classList.add("loaded");
  });