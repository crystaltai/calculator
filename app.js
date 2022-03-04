// Declare variables -------------------------------------------------------------------
// displayValue contains the calculation results
let displayValue;

// first and second numbers
let firstNum;
let secondNum;

// selected operator (add, subtract, multiply, divide)
let selectedOperator;

// SCREEN UPDATE -----------------------------------------------------------------------
let results = document.getElementById('results');
results.innerHTML = 8;

// CALCULATIONS ------------------------------------------------------------------------
// operate() --- takes 2 numbers and calls a calculation function on the numbers -------
function operate(firstNum, secondNum) {
  // xxx
  // displayValue =
}

// OPERATORS ---------------------------------------------------------------------------
let operators = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

// console.log(operators.add(1, 2));

// Set status for calculator to be in receiving mode or output mode
// receiving mode
// set equalBtn = 'inactive'

// when a number is clickedfinder
