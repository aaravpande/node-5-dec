// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero!";
    }
    return a / b;
}

// Function to perform calculations based on operator
function calculate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Error: Invalid operator!";
    }
}

// Prompt the user for operator and operands
var operator = prompt("Enter operator (+, -, *, /):");
var num1 = parseFloat(prompt("Enter first number:"));
var num2 = parseFloat(prompt("Enter second number:"));

// Check if valid numbers are entered
if (!isNaN(num1) && !isNaN(num2)) {
    // Calculate and display the result
    var result = calculate(operator, num1, num2);
    alert("Result: " + result);
} else {
    alert("Error: Invalid numbers!");
}
