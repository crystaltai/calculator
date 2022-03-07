// Grab selector DOMs ------------------------------------------------------------------
// calculator screens
const resultsDOM = document.getElementById('results');
const formulaDOM = document.getElementById('formula');

// buttons - clear / equal / delete
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equal');
const deleteBtn = document.getElementById('delete');

// buttons - operators
const operatorBtns = document.getElementsByClassName('operator');

// buttons - digits
const digitBtns = document.getElementsByClassName('digit');

// buttons - decimal point
const decimalBtn = document.getElementById('decimal');

// Declare variables ------------------------------------------------------------------
// variable for holding the calculation results
let calculatorResults;

// keeps track of user's inputs
const userInputs = {
  firstNum: 0,
  operator: null,
  operatorSign: null,
  secondNum: null,
  inputtingSecondNum: false, // update to true if user is in processof inputting secondNum
  calculationRun: false, // update to true if calculation has just been run (either by pressing = or an operator)
};

// list of operators and their respective functions
const operators = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

// Add event listeners -----------------------------------------------------------------
// Clear screen button
clearBtn.addEventListener('click', clearEverything);

// Equal button
equalBtn.addEventListener('click', calculateEquals);

// Delete button
deleteBtn.addEventListener('click', updateDelete);

// Add event listener to all digit buttons
for (let i = 0; i < digitBtns.length; i++) {
  digitBtns[i].addEventListener('click', updateDisplayResults);
}

// Add event listener to all operator buttons
for (let i = 0; i < operatorBtns.length; i++) {
  operatorBtns[i].addEventListener('click', updateOperater);
}

// Decimal button
decimalBtn.addEventListener('click', addDecimal);

// Calculations ------------------------------------------------------------------------
// update displayResultsDOM
function updateDisplayResults(e) {
  // check if firstNum has already been logged into formula; if yes, clear resultsDOM for secondNum display
  if (userInputs.inputtingSecondNum || userInputs.calculationRun) {
    clearResults();
    // once resultDOM is cleared, reset .inputtingSecondNum and calculationRun since they both already happened
    userInputs.inputtingSecondNum = false;
    userInputs.calculationRun = false;
  }

  // declare displayText to grab the innerText of the button that is being pressed
  let displayText = e.target.innerText;

  // append the clicked button's innerText to our displayResults
  resultsDOM.innerText += displayText;

  // if the first character of resultsDOM is a 0, remove it
  if (resultsDOM.innerText.charAt(0) === '0') {
    resultsDOM.innerText = resultsDOM.innerText.substring(1);
  }
}

// when an operator button is clicked
function updateOperater(e) {
  // check if secondNum is already input by user; if yes, apply the calculation (basically equivalent to pressing equal button)
  if (userInputs.secondNum) {
    calculateEquals();
    // otherwise, when operator is clicked
  } else {
    // 1) update userInput for firstNum to value of resultsDOM
    userInputs.firstNum = Number(resultsDOM.innerText);
    // 2) update userInput operator to the respective operator function name
    userInputs.operator = e.target.id;
    // 3) update userInput operatorSign to respective operator sign
    userInputs.operatorSign = e.target.innerText;
    // 4) run updateFormula function to showcase the latest formula inputs on forumulaDOM
    updateFormula();
    // 5) set calculator ready to receive input of secondNum
    userInputs.inputtingSecondNum = true;
  }
}

// when the equal button is clicked
function calculateEquals(e) {
  // make sure all user inputs have been provided to run calculation
  if (userInputs.operator || userInputs.secondNum) {
    // 1) update userInput for secondNum to value of resultsDOM
    userInputs.secondNum = Number(resultsDOM.innerText);

    // 2) run updateFormula function to showcase the latest formula inputs on forumulaDOM
    updateFormula();

    // 3) calculate
    calculatorResults = operators[`${userInputs.operator}`](
      userInputs.firstNum,
      userInputs.secondNum
    );

    // 4) update resultsDOM to display calculated number
    resultsDOM.innerText = calculatorResults;

    // 5) reset all user inputs and update calculationRun to true to indicate a calculation has just been run
    resetValues();
    userInputs.calculationRun = true;

    // 6) set firstNum equal to calculatorResults (to persist and prepare for follow-on calculations)
    userInputs.firstNum = calculatorResults;
  }
}

// when the delete button is clicked
function updateDelete() {
  // only allow delete button to work on numbers being currently input by user
  // this if statement prevents a user from deleting numbers on a calculated result
  if (!userInputs.calculationRun) {
    resultsDOM.innerHTML = resultsDOM.innerHTML.slice(0, -1);
  }
}

// when the decimal point button is clicked
function addDecimal() {
  // check to see if decimal point hasn't been added yet; if not, allow to add
  let checkIfDecimal = resultsDOM.innerText.indexOf('.');
  if (checkIfDecimal == -1) {
    // only allow decimal to be added on numbers being currently input by user
    // this if statement prevents a user from adding a decimal to a calculated result
    if (!userInputs.calculationRun) {
      resultsDOM.innerText += '.';
    }
  }
}

// updates the formula display at top of calculator
function updateFormula() {
  // pull the firstNUM input
  let displayFormula = userInputs.firstNum;
  // if the operator value is true, display it
  if (userInputs.operator) {
    displayFormula += ` ${userInputs.operatorSign}`;
  }
  // if the secondNum value is true, display it
  if (userInputs.secondNum) {
    displayFormula += ` ${userInputs.secondNum} =`;
  }
  // update the formulaDOM
  formulaDOM.innerText = displayFormula;
}

// Clear results
// clears only the results display
function clearResults() {
  resultsDOM.innerText = '';
} // clears only the formula display
function clearFormula() {
  formulaDOM.innerText = '';
}

// resets all input values
function resetValues() {
  userInputs.firstNum = 0;
  userInputs.operator = null;
  userInputs.operatorSign = null;
  userInputs.secondNum = 0;
  userInputs.inputtingSecondNum = false;
  userInputs.calculationRun = false;
}

// clears and resets everything
function clearEverything() {
  clearResults();
  resetValues();
  clearFormula();
}
