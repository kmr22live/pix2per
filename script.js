// Function to calculate percentage and update result
function calculatePercentage() {
    let pixelInput = parseFloat(document.getElementById('pixelInput').value);
    let viewportWidth = parseFloat(document.getElementById('viewportWidthInput').value);
    let percentage = ((pixelInput / viewportWidth) * 100) + 0.001;
    let percentageText = percentage.toFixed(3) + '%';
    document.getElementById('percentageResult').textContent = 'Percentage: ' + percentageText;
    
    // Store input values in local storage
    localStorage.setItem('pixToPerPixelInput', pixelInput);
    localStorage.setItem('pixToPerViewportWidthInput', viewportWidth);
    
    // Hide the convert button and show the copy button
    document.getElementById('convertButton').style.display = 'none';
    document.getElementById('copyButton').style.display = 'inline';
}

// Function to copy the percentage result to the clipboard
function copyToClipboard() {
    let percentageText = document.getElementById('percentageResult').textContent;
    // Extract just the percentage part (removing 'Percentage: ' from the beginning)
    let percentageOnly = percentageText.replace('Percentage: ', '');
    
    if (percentageOnly) {
        navigator.clipboard.writeText(percentageOnly)
    } else {
        alert('No percentage to copy!');
    }
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

// Event listeners for input fields
document.getElementById('pixelInput').addEventListener('input', calculatePercentage);
document.getElementById('viewportWidthInput').addEventListener('input', calculatePercentage);
document.getElementById('convertButton').addEventListener('click', calculatePercentage);
document.getElementById('copyButton').addEventListener('click', copyToClipboard);

// Load input values from local storage when the page is loaded
window.addEventListener('load', loadInputValues);
