

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
let dispValA = [];
let dispValB = [];
let operator = ""

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




btnAdd.addEventListener('click', (e) => {
    console.log(dispValA);
    if ((dispValA.length > 0) && (displayValue.length > 0 )) {
        console.log("Both dispValA and displayValue constain a value");
        performOperation();
        getDispValA();
        emptyDisplayValue();
        operator = e.target.textContent;
        console.log(operator);
        userEntry.textContent = `${dispValA.join("")} ${operator}`
        console.log(`dispValA is ${dispValA}`);
        console.log(`displayValue is ${displayValue}`);
        console.log(Array.isArray(dispValA));
    } else {
    operator = e.target.textContent;
    console.log(operator);
    console.log(typeof(operator));
    console.log(`displayValue is ${displayValue}`);
    console.log(`dispValA is ${dispValA}`);
    console.log(`dispValA length is ${dispValA.length}`);
    getDispValA();
    console.log(`dispValA is ${dispValA} (displayed)`);
    userEntry.textContent = `${dispValA.join("")} ${operator}`
    dispValA.push(operator);
    console.log(`dispValA is ${dispValA}`);
    console.log(`displayValue is ${displayValue}`)
    emptyDisplayValue();
    result.textContent = displayValue;
    }
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
    dispValA = [];
    operator = "";
    userEntry.textContent = displayValue;
    result.textContent = displayValue;
    console.log(displayValue);
    console.log(dispValA);
    console.log(operator);
});

btnEquals.addEventListener('click', () => {
    performOperation();
    console.log(`At the end of operation, displayValue = ${displayValue}, dispvalA = ${dispValA}, dispValB = ${dispValB} and operator = ${operator}`);
})

function performOperation () {
    let a = parseFloat(Array.from(dispValA).join(""));
    getDispValB();
    let b = parseFloat(Array.from(dispValB).join(""));
    operate(operator, a, b);
    console.log(a);
    console.log(b);
    let mathResult = operate(operator, a, b);
    console.log(mathResult);
    displayValue = [mathResult];
    userEntry.textContent = displayValue;
    console.log(displayValue);
    dispValA = [];
    dispValB = [];
    console.log(operator);
    result.textContent = dispValB;
    console.log(`dispValA = ${dispValA}`)
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



