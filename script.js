document.addEventListener("DOMContentLoaded", function() {
    const navButtons = document.querySelectorAll(".nav-btn");
    
    navButtons.forEach(button => {
        button.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.1)";
        });

        button.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });
});

const images = ["media/1.jpg", "media/2.jpg", "media/3.jpg", "media/4.jpg", "media/5.jpg", "media/6.jpg", "media/7.jpg", "media/8.jpg", "media/9.jpg", "media/10.jpg"];
let currentIndex = 0;

const carouselImage = document.getElementById("carousel-image");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const dotsContainer = document.querySelector(".dots-container");

// Create dots dynamically
images.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === currentIndex) dot.classList.add("active");
    dot.addEventListener("click", () => goToImage(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateDots() {
    // Remove 'active' from all dots
    dots.forEach(dot => dot.classList.remove("active"));

    // Add 'active' to the correct dot
    dots[currentIndex].classList.add("active");
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    carouselImage.src = images[currentIndex];
    updateDots();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImage.src = images[currentIndex];
    updateDots();
});

function goToImage(index) {
    currentIndex = index;
    updateCarousel();
}

function updateCarousel() {
    carouselImage.src = images[currentIndex];

    // Update active dot
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}