

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

for (btn of allOperatorBtns) {
    btn.addEventListener('click', (e) => {
        if ((dispValA.length > 0) && (displayValue.length > 0 )) {
            //Check if dispValA already exists, if yes, use that, if no getDispValA from displayValue
            console.log(`allOperatorBtns(2) before operation:
            displayvalue = ${displayValue}
            dispValA = ${dispValA}`)
            performOperation();
            console.log(`allOperatorBtns(2) after operation:
            displayvalue = ${displayValue}
            dispValA = ${dispValA}`)
            //getDispValA();
            emptyDisplayValue();
            operator = e.target.textContent;
            userEntry.textContent = `${dispValA.join("")} ${operator}`
        } if ((dispValA.length > 0) && (displayValue.length === 0)) {
            console.log(`allOperatorBtns(3):
            displayvalue = ${displayValue}
            dispValA = ${dispValA}
            operator = ${operator}`)
            operator = e.target.textContent;
            //getDispValA();
            userEntry.textContent = `${dispValA.join("")} ${operator}`
            //emptyDisplayValue();
            result.textContent = displayValue;
        } else {
        console.log(`allOperatorBtns(1):
        displayvalue = ${displayValue}
        dispValA = ${dispValA}
        operator = ${operator}`)
        operator = e.target.textContent;
        getDispValA();
        userEntry.textContent = `${dispValA.join("")} ${operator}`
        emptyDisplayValue();
        result.textContent = displayValue;
        }
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
    console.log(`before btnEquals function runs:
    displayValue = ${displayValue}
    dispValA = ${dispValA}
    dispValB = ${dispValB}
    operator = ${operator}`);
    if ((dispValA.length > 0) && (displayValue.length > 0 )) {
    performOperation();
    userEntry.textContent = `${dispValA}`;
    } else {
        return null;
    }
});

function performOperation () {
    let a = parseFloat(Array.from(dispValA).join(""));
    getDispValB();
    let b = parseFloat(Array.from(dispValB).join(""));
    operate(operator, a, b);
    let mathResult = operate(operator, a, b);
    //displayValue = [mathResult];
    dispValA = [mathResult];
    //userEntry.textContent = displayValue;
    userEntry.textContent = dispValA;
    //dispValA = [];
    displayValue = [];
    dispValB = [];
    //operator = "";
    result.textContent = dispValB;
    console.log(`After performOperation:
    displayValue = ${displayValue}
    dispValA = ${dispValA}
    dispValB = ${dispValB}
    operator = ${operator}`);
}

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

