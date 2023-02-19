

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
        displayValue.push(this.textContent);
        result.textContent = displayValue.join("");
    })
}


btnDecimal.addEventListener('click', () => {
    if (displayValue.includes('.') === true) {
        alert("Only one decimal per entry!");
    } else {
    displayValue.push('.');
    console.log(displayValue);
    result.textContent = displayValue.join("")
    }
});


let operator = ""

btnAdd.addEventListener('click', () => {
    operator = "+";
    getDispValA();
    console.log(dispValA);
    userEntry.textContent = `${dispValA.join("")} ${operator} `
    emptyDisplayValue();
    console.log(displayValue);
    result.textContent = displayValue;
});

btnSubtract.addEventListener('click', () => {
    operator = "-";
    getDispValA();
    userEntry.textContent = `${dispValA.join("")} ${operator} `
    emptyDisplayValue();
    result.textContent = displayValue;
});

btnMultiply.addEventListener('click', () => {
    operator = "x";
    getDispValA();
    userEntry.textContent = `${dispValA.join("")} ${operator} `
    emptyDisplayValue();
    result.textContent = displayValue;
});

btnDivide.addEventListener('click', () => {
    operator = "÷";
    getDispValA();
    userEntry.textContent = `${dispValA.join("")} ${operator} `
    emptyDisplayValue();
    result.textContent = displayValue;
});


btnBackspace.addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1)
    result.textContent = displayValue.join("");
    console.log(displayValue);
});

btnClear.addEventListener('click', () => {
    displayValue = [];
    userEntry.textContent = displayValue;
    result.textContent = displayValue;
    console.log(displayValue);
});

btnEquals.addEventListener('click', () => {
    let a = Array.from(dispValA).join("");
    a = parseInt(a);
    console.log(a);
    console.log(typeof(a));
    getDispValB();
    let b = Array.from(dispValB).join("");
    b = parseInt(b);
    console.log(b);
    console.log(typeof(b));
    console.log(operator);
    operate(operator, a, b);
    let mathResult = operate(operator, a, b);
    console.log(mathResult);
})

// used the Array.from method to convert value to an array, as it was considered by the computer as an object, not an array

let dispValA = [];
let dispValB = [];


function getDispValA () {
    dispValA = displayValue;
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






//function convertArrayToNumber(value) {
    //value = value.join("");
    //value = parseInt(value);
    //return value;
//}

// Could not get the above or below functions to work, possibly due to scoping issue? See resource on variable scoping in README.md. May use this technique when I understand it better.

//let array = [5, 2, 4]

//function convArrToNum (value) {
    //return {
        //joinArr: function() {
            //value = Array.from(value).join("");
            //value = parseInt(value);
            //return value;
        //},
    //}
//}

//let v = convArrToNum(array);
//console.log(v.joinArr());
//console.log(typeof((v.joinArr())));



