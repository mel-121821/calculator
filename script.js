

const allNumBtns = document.querySelectorAll('.num');

const allOperatorBtns = document.querySelectorAll('.operator');

const btnClear = document.querySelector('#clear');
const btnBackspace = document.querySelector('#backspace');
const btnEquals = document.querySelector('#equals');
const btnDecimal = document.querySelector('#decimal');

const userEntry = document.querySelector('.user-entry > p');
const result = document.querySelector('.result > p')



let displayValue = [];
let dispValA = [];
let dispValB = [];
let operator = ""

for (btn of allNumBtns) {
    btn.addEventListener('click', function () {
        displayValue.push(this.textContent);
        result.textContent = displayValue.join("");
    })
}

// if user tries to press btnequals with no operator, an alert pops up and values are emptied, however if user tries to press an operator with 2 numbers and no existing operator, the operator will populate the screen and nothing else. Add a new if statement under the first if statement in allOperatorBtns to check if operator exists, if not, create another alert and clear values

// nested if statement not working (final else statement runs after execution of nested if statement and adds an unwanted operator). See Readme for resources, may switch to switch statement??

//Solution: Added a condition to else statement to prevent code from running after alert message was clicked

for (btn of allOperatorBtns) {
    btn.addEventListener('click', (e) => {
        if ((dispValA.length > 0) && (displayValue.length > 0 ) && (operator.length > 0)) {
            performOperation();
            emptyDisplayValue();
            operator = e.target.textContent;
            userEntry.textContent = `${dispValA.join("")} ${operator}`
        } if ((dispValA.length > 0) && (displayValue.length > 0 ) && (operator === "")) {
            alert("Please enter an operator");
            displayValue = [];
            dispValA = [];
            operator = "";
            userEntry.textContent = displayValue;
            result.textContent = displayValue;       
        } if ((dispValA.length > 0) && (displayValue.length === 0)) {
            operator = e.target.textContent;
            userEntry.textContent = `${dispValA.join("")} ${operator}`
            result.textContent = displayValue;
        } if ((dispValA.length === 0) && (displayValue.length > 0)) {
            operator = e.target.textContent;
            getDispValA();
            userEntry.textContent = `${dispValA.join("")} ${operator}`
            emptyDisplayValue();
            result.textContent = displayValue;
        } // Removed else statement because it would run after alert box is clicked
    });
}


btnDecimal.addEventListener('click', () => {
    if (displayValue.includes('.') === true) {
        return null;
    } else {
    displayValue.push('.');
    result.textContent = displayValue.join("")
    }
});

btnBackspace.addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1)
    result.textContent = displayValue.join("");
});

btnClear.addEventListener('click', () => {
    displayValue = [];
    dispValA = [];
    operator = "";
    userEntry.textContent = displayValue;
    result.textContent = displayValue;
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
        displayValue = [];
        dispValA = [];
        operator = "";
        userEntry.textContent = displayValue;
        result.textContent = displayValue;
    } else {
        let a = parseFloat(Array.from(dispValA).join(""));
        getDispValB();
        let b = parseFloat(Array.from(dispValB).join(""));
        operate(operator, a, b);
        let mathResult = operate(operator, a, b);
        dispValA = [mathResult];
        userEntry.textContent = dispValA;
        displayValue = [];
        dispValB = [];
        operator = "";
        result.textContent = dispValB;
    }}

// used the Array.from method to convert value to an array, as it was considered by the computer as an object, not an array



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

// An operator cannot be passed as a parameter to a  function, it must be passed as a string 

