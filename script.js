// Hamburger menu toggle
const hamburger = document.getElementById("mine-hamburger");
const navLinks = document.getElementById("mine-nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("mine-active");
});

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


// Fade-in animations on scroll
// const values = document.querySelectorAll('.value p');
// const journeyImage = document.querySelector('.jurnyImg');

// function debounce(func, wait = 1000, immediate = true) {
//     let timeout;
//     return function () {
//         const context = this, args = arguments;
//         const later = function () {
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };
//         const callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//     };
// }

// function checkScroll() {
//     values.forEach(value => {
//         const rect = value.getBoundingClientRect();
//         if (rect.top < window.innerHeight && rect.bottom > 0) {
//             if (!value.classList.contains('fade-in-right')) {
//                 value.classList.add('fade-in-right');
//             }
//         } else {
//             value.classList.remove('fade-in-right');
//         }
//     });

//     const imgRect = journeyImage.getBoundingClientRect();
//     if (imgRect.top < window.innerHeight && imgRect.bottom > 0) {
//         if (!journeyImage.classList.contains('fade-in-left')) {
//             journeyImage.classList.add('fade-in-left');
//         }
//     } else {
//         journeyImage.classList.remove('fade-in-left');
//     }
// }

// window.addEventListener('scroll', debounce(checkScroll));
// window.addEventListener('load', checkScroll);
