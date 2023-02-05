
const btn1 = document.querySelector('#one');
const btn2 = document.querySelector('#two');
const btn3 = document.querySelector('#three');
const btn4 = document.querySelector('#four');
const btn5 = document.querySelector('#five');
const btn6 = document.querySelector('#six');
const btn7 = document.querySelector('#seven');
const btn8 = document.querySelector('#eight');
const btn9 = document.querySelector('#nine');
const btn0 = document.querySelector('#zero');

const btnAdd = document.querySelector('#add');
const btnSubtract = document.querySelector('#subtract');
const btnMultiply = document.querySelector('#multiply');
const btnDivide = document.querySelector('#divide');

const btnClear = document.querySelector('#clear');
const btnBackspace = document.querySelector('#backspace');
const btnEquals = document.querySelector('#equals');
const btnDecimal = document.querySelector('#decimal');

const userEntry = document.querySelector('.user-entry > p');
const result = document.querySelector('.result > p')



let displayValue = "";

btn1.addEventListener('click', () => {
    displayValue += 1;
    userEntry.textContent = displayValue;
    console.log(displayValue)
});

btn2.addEventListener('click', () => {
    displayValue += 2;
    userEntry.textContent = displayValue;
    console.log(displayValue)
});

btn3.addEventListener('click', () => {
    displayValue += 3;
    userEntry.textContent = displayValue;
    console.log(displayValue)
});

btn4.addEventListener('click', () => {
    displayValue += 4;
    userEntry.textContent = displayValue;
    console.log(displayValue)
});

btn5.addEventListener('click', () => {
    displayValue += 5;
    userEntry.textContent = displayValue;
    console.log(displayValue)
});

btn6.addEventListener('click', () => {
    displayValue += 6;
    userEntry.textContent = displayValue;
    console.log(displayValue)
});

btn7.addEventListener('click', () => {
    displayValue += 7;
    userEntry.textContent = displayValue;
    console.log(displayValue)
});

btn8.addEventListener('click', () => {
    displayValue += 8;
    userEntry.textContent = displayValue;
    console.log(displayValue)
});

btn9.addEventListener('click', () => {
    displayValue += 9;
    userEntry.textContent = displayValue;
    console.log(displayValue)
});

btn0.addEventListener('click', () => {
    displayValue += 0;
    userEntry.textContent = displayValue;
    console.log(displayValue)
});



btnAdd.addEventListener('click', () => {
    userEntry.textContent += " + ";
});

btnSubtract.addEventListener('click', () => {
    userEntry.textContent += " - ";
});

btnMultiply.addEventListener('click', () => {
    userEntry.textContent += " x ";
});

btnDivide.addEventListener('click', () => {
    userEntry.textContent += " ÷ ";
});






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
        return add(a, b);
    } if (operator === "-" ) {
        return subtract(a, b)
    } if (operator === "*" ) {
        return multiply(a, b)
    } if (operator === "/" ) {
        return divide(a, b)
    }
};

// An operator cannot be passed as a parameter to a  function, it must be passed as a string 

console.log(operate("/", 2, 3));
