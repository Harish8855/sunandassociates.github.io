function toggleNavbar() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

let slideIndex = 0;
showSlides(slideIndex);

// Change slide with buttons
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Display slides
function showSlides(n) {
    let slides = document.querySelectorAll(".slide");

    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex].style.display = "block";
}

// Auto slide every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);
