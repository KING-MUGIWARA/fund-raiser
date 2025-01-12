// Target amount for the fundraiser
const targetAmount = 500000;

// Current donation amount (this will update with each donation)
let currentAmount = 0;

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

// // Example: Automatically add a donation amount for demonstration purposes
// // Replace this with your actual donation logic
// setTimeout(() => updateProgress(1000), 2000); // Simulate a $1000 donation after 2 seconds
// setTimeout(() => updateProgress(500), 5000);  // Simulate a $500 donation after 5 seconds

// Hamburger menu functionality
document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
});
