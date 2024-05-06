// Function to calculate percentage and update result
function calculatePercentage() {
    let pixelInput = parseFloat(document.getElementById('pixelInput').value);
    let viewportWidth = parseFloat(document.getElementById('viewportWidthInput').value);
    let percentage = ((pixelInput / viewportWidth) * 100) + 0.001;
    document.getElementById('percentageResult').textContent = 'Percentage: ' + percentage.toFixed(3) + '%';
    
    // Store input values in local storage
    localStorage.setItem('pixToPerPixelInput', pixelInput);
    localStorage.setItem('pixToPerViewportWidthInput', viewportWidth);
}

// Function to load input values from local storage
function loadInputValues() {
    let pixelInput = localStorage.getItem('pixToPerPixelInput');
    let viewportWidth = localStorage.getItem('pixToPerViewportWidthInput');
    
    if (pixelInput !== null) {
        document.getElementById('pixelInput').value = pixelInput;
    }
    if (viewportWidth !== null) {
        document.getElementById('viewportWidthInput').value = viewportWidth;
    }
}

// Event listener for input fields
document.getElementById('pixelInput').addEventListener('input', calculatePercentage);
document.getElementById('viewportWidthInput').addEventListener('input', calculatePercentage);
document.getElementById('convertButton').addEventListener('click', calculatePercentage);

// Load input values from local storage when the page is loaded
window.addEventListener('load', loadInputValues);
