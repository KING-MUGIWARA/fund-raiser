// Target amount for the fundraiser
const targetAmount = 500000;

// Current donation amount (this will update with each donation)
let currentAmount = 2465;

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

    // Format the amounts with commas for better readability
    const formattedCurrentAmount = currentAmount.toLocaleString();
    const formattedTargetAmount = targetAmount.toLocaleString();

    progressBar.style.width = progressPercentage + '%';
    progressText.innerText = `$${formattedCurrentAmount} of $${formattedTargetAmount} raised`;
}


// Hamburger menu functionality
document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
});

// Example: Automatically add a donation amount for demonstration purposes
// Replace this with your actual donation logic
setTimeout(() => updateProgress(1000), 2000); // Simulate a $1000 donation after 2 seconds
setTimeout(() => updateProgress(500), 5000);  // Simulate a $500 donation after 5 seconds
setTimeout(() => updateProgress(200), 22000);
setTimeout(() => updateProgress(100), 25000);
setTimeout(() => updateProgress(100), 35000);
setTimeout(() => updateProgress(50), 15000);
setTimeout(() => updateProgress(10), 95000);
setTimeout(() => updateProgress(30), 85000);
setTimeout(() => updateProgress(700), 75000);
setTimeout(() => updateProgress(500), 65000);
setTimeout(() => updateProgress(1000), 55000);
setTimeout(() => updateProgress(5), 32000);
setTimeout(() => updateProgress(57), 31000);
setTimeout(() => updateProgress(107), 42000);
setTimeout(() => updateProgress(2), 2500);
setTimeout(() => updateProgress(1), 30000);
setTimeout(() => updateProgress(500),50000);
setTimeout(() => updateProgress(5000),100000);
setTimeout(() => updateProgress(3), 40000);
setTimeout(() => updateProgress(4), 50000);
