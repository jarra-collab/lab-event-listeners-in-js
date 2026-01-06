// 1. Change background color
function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// 2. Reset background color
function resetBackgroundColor() {
  document.body.style.backgroundColor = '';
}

// 3. Display key press
function displayKeyPress(event) {
  const keyPressDisplay = document.getElementById('keyPressDisplay');
  if (keyPressDisplay) {
    keyPressDisplay.textContent = `Key pressed: ${event.key}`;
  }
}

// 4. Display user input
function displayUserInput() {
  const textInput = document.getElementById('textInput');
  const textInputDisplay = document.getElementById('textInputDisplay');
  if (textInput && textInputDisplay) {
    textInputDisplay.textContent = `You typed: ${textInput.value}`;
  }
}

// 5. Setup event listeners
function setupEventListeners() {
  const changeColorButton = document.getElementById('changeColorButton');
  const resetColorButton = document.getElementById('resetColorButton');
  const textInput = document.getElementById('textInput');

  if (changeColorButton) {
    changeColorButton.addEventListener('click', changeBackgroundColor);
  }

  if (resetColorButton) {
    resetColorButton.addEventListener('dblclick', resetBackgroundColor);
  }

  if (textInput) {
    textInput.addEventListener('input', displayUserInput);
  }

  document.addEventListener('keydown', displayKeyPress);
}

// Export for testing
module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners
};
