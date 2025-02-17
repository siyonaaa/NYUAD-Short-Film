document.addEventListener("DOMContentLoaded", function() {
    const navButtons = document.querySelectorAll(".nav-btn");
    
    // Add hover effect to navigation buttons
    navButtons.forEach(button => {
        button.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.1)";            // Enlarge button on hover
        });

        button.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";              // Reset size when not hovered
        });
    });
});

// Array containing paths to images for the carousel
const images = ["media/1.jpg", "media/2.jpg", "media/3.jpg", "media/4.jpg", "media/5.jpg", "media/6.jpg", "media/7.jpg", "media/8.jpg", "media/9.jpg", "media/10.jpg"];
let currentIndex = 0;                                        // Track the currently displayed image index

// Get references to carousel elements
const carouselImage = document.getElementById("carousel-image");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const dotsContainer = document.querySelector(".dots-container");

// Create dots dynamically
images.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === currentIndex) dot.classList.add("active");
    dot.addEventListener("click", () => goToImage(index));  // Add click event to navigate to image
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

// Function to update the active dot based on the current image
function updateDots() {
    // Remove 'active' from all dots
    dots.forEach(dot => dot.classList.remove("active"));
    // Add 'active' to the correct dot
    dots[currentIndex].classList.add("active");
}

// Event listener for previous button click
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    carouselImage.src = images[currentIndex];
    updateDots();
});

// Event listener for next button click
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImage.src = images[currentIndex];
    updateDots();
});

// Function to navigate to a specific image when a dot is clicked
function goToImage(index) {
    currentIndex = index;
    updateCarousel();
}

// Function to update the carousel with the new image and update dots
function updateCarousel() {
    carouselImage.src = images[currentIndex];

    // Update active dot
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}