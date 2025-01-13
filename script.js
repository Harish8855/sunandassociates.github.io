// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Slideshow functionality
let slideIndex = 0;
const slides = document.getElementsByClassName("slides");

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

// Initialize slideshow
showSlide(slideIndex);
interwal = setInterval(nextSlide, 5000);