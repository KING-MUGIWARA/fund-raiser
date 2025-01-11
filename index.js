// Target amount for the fundraiser
const targetAmount = 5000;

// Donation amount (this will be updated with each donation, here it's just a static example)
let currentAmount = 0;

// Function to update the progress bar
function updateProgress(amount) {
    currentAmount += amount;
    if (currentAmount > targetAmount) currentAmount = targetAmount; // Don't exceed target

    const progressPercentage = (currentAmount / targetAmount) * 100;
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    progressBar.style.width = progressPercentage + '%';
    progressText.innerText = `$${currentAmount} of $${targetAmount} raised`;
}

// Example: call the updateProgress function when a donation is made (here using a static amount)
// Replace this with actual donation logic or callback after PayPal payment is completed
// updateProgress(500);  // Example: $500 donation
