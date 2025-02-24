
let string = "";
let textField = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let records = [];

buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
});

function handleClick(event) {
    const value = event.target.innerHTML;

    if (value === 'AC') {
        clearInput();
    } else if (value === '❌') {
        backspace();
    } else if (value === '=') {
        calculate();
    } else if (value === 'x^x') {
        calculatePower();
    } else if (value === 'log') {
        calculateLog();
    } else if (value === 'exp') {
        calculateExp();
    } else if (value === 'ln') {
        calculateLn();
    } else if (value === 'sqrt') {
        calculateSqrt();
    } else {
        appendToInput(value);
    }
}

function clearInput() {
    textField.value = "";
    string = "";
}

function backspace() {
    string = string.slice(0, -1);
    textField.value = string;
}

function calculate() {
    try {
        let result = eval(string);
        displayResult(result);
    } catch {
        displayResult('Error');
    }
}

function calculatePower() {
    try {
        let result = Math.pow(parseFloat(textField.value), parseFloat(textField.value));
        displayResult(result);
    } catch {
        displayResult('Error');
    }
}

function calculateLog() {
    try {
        let result = Math.log10(parseFloat(textField.value));
        displayResult(result);
    } catch {
        displayResult('Error');
    }
}

function calculateExp() {
    try {
        let result = Math.exp(parseFloat(textField.value));
        displayResult(result);
    } catch {
        displayResult('Error');
    }
}

function calculateLn() {
    try {
        let result = Math.log(parseFloat(textField.value));
        displayResult(result);
    } catch {
        displayResult('Error');
    }
}

function calculateSqrt() {
    try {
        let result = Math.sqrt(parseFloat(textField.value));
        displayResult(result);
    } catch {
        displayResult('Error');
    }
}

function appendToInput(value) {
    string += value;
    textField.value = string;
}

function displayResult(result) {
    textField.value = result;
    string = result.toString();
    records.push(string);
}

function animateButton(button) {
    button.classList.add('pressed');
    setTimeout(() => button.classList.remove('pressed'), 200);
}
