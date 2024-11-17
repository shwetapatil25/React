let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || '0';
}

function calculateResult() {
    try {
        if (currentInput.includes('/0')) {
            alert("Error: Division by zero is not allowed.");
            clearDisplay();
            return;
        }
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
    } catch (error) {
        alert("Invalid input!");
        clearDisplay();
    }
}
