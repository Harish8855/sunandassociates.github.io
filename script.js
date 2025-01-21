// Hamburger menu toggle
const hamburger = document.getElementById("mine-hamburger");
const navLinks = document.getElementById("mine-nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("mine-active");});

// Slideshow functionality
let slideIndex = 0;
const slides = document.getElementsByClassName("mine-slides");

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}
showSlide(slideIndex);
interwal = setInterval(nextSlide, 5000);
