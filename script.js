

const allNumBtns = document.querySelectorAll('.num');

const allOperatorBtns = document.querySelectorAll('.operator');

const btnClear = document.querySelector('#clear');
const btnBackspace = document.querySelector('#backspace');
const btnEquals = document.querySelector('#equals');
const btnDecimal = document.querySelector('#decimal');

const upperDisplay = document.querySelector('.upper-display > p');
const lowerDisplay = document.querySelector('.lower-display > p')



let displayValue = [];
let dispValA = [];
let dispValB = [];
let operator = ""


for (btn of allNumBtns) {
    btn.addEventListener('click', function () {
        displayValue.push(this.textContent);
        lowerDisplay.textContent = displayValue.join("");
    })
}

for (btn of allOperatorBtns) {
    btn.addEventListener('click', (e) => {
        if ((dispValA.length > 0) && (displayValue.length > 0 ) && (operator.length > 0)) {
            performOperation();
            emptyDisplayValue();
            operator = e.target.textContent;
            upperDisplay.textContent = `${dispValA.join("")} ${operator}`
        } if ((dispValA.length > 0) && (displayValue.length > 0 ) && (operator === "")) {
            alert("Please enter an operator");
            clearValues();
            clearDisplay();       
        } if ((dispValA.length > 0) && (displayValue.length === 0)) {
            operator = e.target.textContent;
            upperDisplay.textContent = `${dispValA.join("")} ${operator}`
            lowerDisplay.textContent = "";
        } if ((dispValA.length === 0) && (displayValue.length > 0)) {
            operator = e.target.textContent;
            getDispValA();
            upperDisplay.textContent = `${dispValA.join("")} ${operator}`
            emptyDisplayValue();
            lowerDisplay.textContent = displayValue;
        }
    });
}

btnDecimal.addEventListener('click', () => {
    if (displayValue.includes('.') === true) {
        return null;
    } else {
    displayValue.push('.');
    lowerDisplay.textContent = displayValue.join("")
    }
});

btnBackspace.addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1)
    lowerDisplay.textContent = displayValue.join("");
});

btnClear.addEventListener('click', () => {
    clearValues();
    clearDisplay();
});

btnEquals.addEventListener('click', () => {
    if ((dispValA.length > 0) && (displayValue.length > 0 )) {
    performOperation();
    } else {
        return null;
    }
});



function performOperation () {
    if (operator === "") {
        alert("Please enter an operator");
        clearValues();
        clearDisplay();
    } else {
        let a = parseFloat(Array.from(dispValA).join(""));
        getDispValB();
        let b = parseFloat(Array.from(dispValB).join(""));
        if ((a === 0 || b === 0) && operator === "÷") {
            alert("You cannont divide by zero! Try again.")
            clearValues();
            clearDisplay();
        } else {
            let mathResult = operate(operator, a, b);
            dispValA = [mathResult];
            upperDisplay.textContent = dispValA;
            displayValue = [];
            dispValB = [];
            operator = "";
            lowerDisplay.textContent = "";
        }
    }}



function getDispValA () {
    dispValA = displayValue;
    displayValue = [];
    return dispValA;
}

function getDispValB () {
    dispValB = displayValue;
    return dispValB;
}

function emptyDisplayValue() {
    displayValue = [];
    return displayValue;
}

function clearValues() {
    displayValue = [];
    dispValA = [];
    operator = "";
}

function clearDisplay() {
    upperDisplay.textContent = "";
    lowerDisplay.textContent = "";  
}


function add (a, b) {
    return a + b;
} 

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (operator, a, b) {
    if (operator === "+" ) {
        return Math.round((add(a, b)) * 100) / 100;
    } if (operator === "-" ) {
        return Math.round((subtract(a, b)) * 100) / 100;
    } if (operator === "x" ) {
        return Math.round((multiply(a, b)) * 100) / 100;
    } if (operator === "÷" ) {
        return Math.round((divide(a, b)) * 100) / 100;
    }
};


