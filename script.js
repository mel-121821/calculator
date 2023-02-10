

const allNumBtns = document.querySelectorAll('.num');

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



let displayValue = [];

for (btn of allNumBtns) {
    btn.addEventListener('click', function () {
        console.log(this.textContent);
        displayValue.push(this.textContent);
        console.log(displayValue);
        userEntry.textContent = displayValue.join("");
    })
}




btnDecimal.addEventListener('click', () => {
    if (displayValue.includes('.') === true) {
        alert("Only one decimal per entry!");
    } else {
    displayValue.push('.');
    console.log(displayValue);
    userEntry.textContent = displayValue.join("")
    }
});



btnAdd.addEventListener('click', () => {
    getFirstDisplayValue()
    console.log(displayValueA);
    let dispValAOperator = `${displayValueA}  + `;
    console.log(dispValAOperator);
    userEntry.textContent = dispValAOperator;
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


btnBackspace.addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1)
    userEntry.textContent = displayValue.join("");
    console.log(displayValue);
});

btnClear.addEventListener('click', () => {
    displayValue = [];
    userEntry.textContent = displayValue;
    console.log(displayValue);
});

//btnAdd.addEventListener('click', () => {
    //getFirstDisplayValue()
    //console.log(displayValueA);

//})

let displayValueA;

function getFirstDisplayValue() {
    displayValueA = displayValue;
    //return displayValueA;
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
