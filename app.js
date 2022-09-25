// basic math functions //

addition = function(lastResult, number) {
    return lastResult + number;
};

subtraction = function(lastResult, number) {
    return lastResult - number;
};

multiplication = function(lastResult, number) {
    return lastResult * number;
};

divide = function(lastResult, number) {
    return lastResult / number;
};

operate = function (operator, lastResult, number) {
    switch (operator) {
        case '+':
            return addition(lastResult, number);

        case '-':
            return subtraction(lastResult, number);

        case '*':
            return multiplication(lastResult, number);

        case '/':
            return divide(lastResult, number);
    };
};

// let firstNumber = '2'
// let secondNumber = '2'
// let firstOperator = '+'
// let secondOperator = '0'
// let lastResult = ''
// let operators = ['+', '-', '/', '*']

const operators = ['+', '-', '/', '*'];
calculationIteration = false;

let equationValues = {
  firstNumber: [],
  secondNumber: [],
  firstOperator: [],
  secondOperator: [],
  lastResult: 0,
};


// end of basic functions //

function updateDisplay(string) {
    document.getElementById('display').textContent = string;
};

// function sumLastResult(array) {
//     let lastResultSum = array.reduce(function(x, y) {
//         return x + y
//     }, 0)
//     return lastResultSum 
// }
// function lastResultSum(array) {
//     array.reduce(function(x, y){
//         return x +
//     })   
// }

// let lastResultSum = equationValues.lastResult.reduce(function (x, y) {
//     return x + y;
// }, 0);

let display = document.getElementById('display').textContent = '0'



// listen for button inputs (ONLY number inputs) //
const inputs = document.querySelectorAll('button')
inputs.forEach(function(input) {
    input.addEventListener('click', () => {
        
        selection = input.textContent
        if (selection == '=') {
            console.log('equals selected')
            if (equationValues.lastResult == 0) {
                console.log('we are still in first equation, check if first and second num and operator are populated and execute fuction')
                if (equationValues.firstNumber.length !== 0 && equationValues.secondNumber.length !== 0 && equationValues.firstOperator.length !== 0) {
                    console.log('execute calculation and store result in lastResult')
                    result = operate(equationValues.firstOperator[equationValues.firstOperator.length - 1], parseInt(equationValues.firstNumber.join('')), parseInt(equationValues.secondNumber.join('')))
                    console.log(equationValues.firstOperator[equationValues.firstOperator.length - 1], equationValues.firstNumber, equationValues.secondNumber)
                    equationValues.lastResult = result
                    console.log(result)
                    updateDisplay(result)
                    calculationIteration = true
                    // equationValues.secondNumber = []
                } else {
                    console.log('not all components of first equation satisfied, cant execute')
                }
            } else if (equationValues.lastResult !== 0) {
                if (equationValues.secondOperator.length == 0) {
                    console.log('need to use first operator')
                    console.log(equationValues.firstOperator[equationValues.firstOperator.length -1], equationValues.lastResult, parseInt(equationValues.secondNumber.join('')))
                    result = operate(equationValues.firstOperator[equationValues.firstOperator.length - 1], equationValues.lastResult, parseInt(equationValues.secondNumber.join('')))
                    console.log(result)
                    equationValues.lastResult = result
                    console.log(equationValues.lastResult)
                    updateDisplay(result)
                    // equationValues.secondNumber = []
                } else {
                    console.log('past first equation, use last result, second number and second operator to perform calc')
                    result = operate(equationValues.secondOperator[equationValues.secondOperator.length - 1], equationValues.lastResult, parseInt(equationValues.secondNumber.join('')))
                    console.log(result)
                    console.log(equationValues.lastResult)
                    equationValues.lastResult = result
                    updateDisplay(result)
                    equationValues.secondNumber = []
                }
                // need to add check here for if second op is populated, if it is we need to use that else use first op
                
            }
        } else if (selection == 'AC') {
            console.log('clear all previous calculations and nums and restart')
            Object.keys(equationValues).forEach(key => equationValues[key] = [])
            equationValues.lastResult = 0
            calculationIteration = false
            updateDisplay('0')
        } else if (operators.includes(selection)) {
            console.log('operator selected')
            if (equationValues.firstNumber.length == 0 && equationValues.secondNumber.length == 0) {
                console.log('no numbers for first calc have been input, dont do anything')
            } else if (equationValues.firstNumber.length !== 0 && equationValues.secondNumber.length == 0) {
                console.log('first number selected, but second number is not, dont do a calc but push operator to array')
                equationValues.firstOperator.push(selection)
            } else if (equationValues.firstNumber.length !== 0 && equationValues.secondNumber.length !== 0 && equationValues.lastResult == 0) {
                console.log('first and second numbers are populated, but last result is not meaning we are ready for first calc')
                console.log(equationValues.firstOperator[equationValues.firstOperator.length - 1])
                console.log(equationValues.firstNumber, equationValues.secondNumber)
                result = operate(equationValues.firstOperator[equationValues.firstOperator.length -1], parseInt(equationValues.firstNumber), parseInt(equationValues.secondNumber))
                updateDisplay(result)
                console.log(result)
                equationValues.lastResult.push(result)
            
            } else {
                console.log('perform calc with second operator')
                equationValues.secondOperator.push(selection)
                // console.log(sumLastResult)  
                console.log(equationValues.secondOperator)                                  // does this need to be parsed to Int if we are
                                                                                                 // adding to it after each calc? create function to sum all values in array
                result = operate(equationValues.secondOperator[equationValues.secondOperator.length - 1], equationValues.lastResult, parseInt(equationValues.secondNumber.join('')))
                updateDisplay(result)
                equationValues.lastResult = result
                equationValues.secondNumber = []
            }
        } else {


            console.log('number input pressed')
            // this isn't right, need to check if first operator has been selected, if yes then push inputs to second number, THEN have a check for calcIteration == true and from then on we reuse lastResult, and continuously truncate and repopulate secondNumber for future calcs

            // calcIteration == false means we are still in first calc
            if (calculationIteration == false) {
                if (equationValues.firstOperator.length == 0) {
                    console.log('number was pressed, and it is before the first calculation, so we are putting it in firstNumber')
                    if (selection == '0' && equationValues.firstNumber.length == 0) {
                        console.log('zero was selected before any number, thats a no no')
                } else if (equationValues.firstOperator.length == 0) {
                    equationValues.firstNumber.push(selection)
                    updateDisplay(equationValues.firstNumber.join(''))
                } 
                // first operator has been selected, dump selection to secondOperator
                } else {
                    if (selection == '0' && equationValues.secondNumber.length == 0) {
                        console.log('zero was selected before any number, thats a no no')
                    } else {
                        console.log('number was pressed, and it is after the first calculation, so we are putting it in secondNumber')
                        equationValues.secondNumber.push(selection)
                        updateDisplay(equationValues.secondNumber.join(''))
                    }    
                }  
            // from now on we are in this block, signify we are past first calc. ALWAYS use lastResult and secondNUmber as basis of calc THIS IS WRONG WE DONT DO CALCS ON NUMBER INPUTS WE ONLY NEED TO WORRY ABOUT CATCHING AND SETTING SECONDNUMBER AFTER FIRST CALC
            } else {

                if (selection == '0' && equationValues.secondNumber.length == 0) {
                    console.log('zero was selected before any number, thats a no no')
                } else {
                    console.log('putting number into secondNumber array')
                    equationValues.secondNumber.push(selection)
                    updateDisplay(equationValues.secondNumber.join(''))
               
            } 
        }     
    }})})

    // add checks for divide by zero //