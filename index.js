// =========================
// Handle Button Clicks
// =========================

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Use RGB to pass Jest test
  document.body.style.backgroundColor = 'rgb(173, 216, 230)'; // lightblue in rgb()
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = ''; // reset to empty string for Jest
}

// =========================
// Capture Keyboard Input
// =========================

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyParagraph = document.getElementById('keyPressDisplay'); 
  if (keyParagraph) {
    keyParagraph.textContent = `Key pressed: ${event.key}`;
  }
}

// =========================
// Process Text Input
// =========================

// Function to display user input in real-time
function displayUserInput() {
  const inputField = document.getElementById('textInput'); 
  const displayParagraph = document.getElementById('textInputDisplay'); 
  if (inputField && displayParagraph) {
    displayParagraph.textContent = `You typed: ${inputField.value}`;
  }
}

// =========================
// Attach Event Listeners
// =========================
function setupEventListeners() {
  const changeButton = document.getElementById('changeColorButton');
  if (changeButton) {
    changeButton.addEventListener('click', changeBackgroundColor);
  }

  const resetButton = document.getElementById('resetColorButton');
  if (resetButton) {
    resetButton.addEventListener('dblclick', resetBackgroundColor);
  }

  document.addEventListener('keydown', displayKeyPress);

  const textInput = document.getElementById('textInput');
  if (textInput) {
    textInput.addEventListener('input', displayUserInput);
  }
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

// Export functions for Jest tests
module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};
