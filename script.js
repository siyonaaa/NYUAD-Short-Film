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

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    carouselImage.src = images[currentIndex];
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImage.src = images[currentIndex];
});

