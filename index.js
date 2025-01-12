// Target amount for the fundraiser
const targetAmount = 500000;

// Current donation amount (this will update with each donation)
let currentAmount = 0;

// Image Carousel
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg'
];
let currentImageIndex = 0;

function changeImage() {
    const carouselImage = document.getElementById('carousel-image');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    carouselImage.src = images[currentImageIndex];
}

setInterval(changeImage, 3000);


// Function to update the progress bar
function updateProgress(amount) {
    currentAmount += amount;
    if (currentAmount > targetAmount) currentAmount = targetAmount; // Prevent exceeding the target

    const progressPercentage = (currentAmount / targetAmount) * 100;
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    progressBar.style.width = progressPercentage + '%';
    progressText.innerText = `$${currentAmount} of $${targetAmount} raised`;
}

// Hamburger menu functionality
document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
});
