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

const operators = ['+', '-', '/', '*'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
let vars = {
    firstNumber: [],
    secondNumber: [],
    newInput: [],
    operators: [],
    action: ''
};

function clearCalculations() {
    // clears all array values in vars
    Object.keys(vars).forEach(key => vars[key] = []);
    vars.action = '';
};

function refreshFirstNumberArray(Object) {
    // resets calc components after a calculation is made and diverts the last result of the equation to the first number of the next equation
    Object.secondNumber.length = 0;
    Object.firstNumber.length = 0;
    Object.firstNumber.push(result)
    Object.firstNumber.map(String).join('')
}

function updateDisplay(string) {
    // updates display with passed string
    document.getElementById('display').textContent = string;
};

function calculate(input) {
    // logic to perform a calculation when a user presses an operator or equals
    console.log(input)
    if (operators.includes(input)) {
        result = operate(vars.operators[vars.operators.length -1], parseInt(vars.firstNumber.join('')), parseInt(vars.secondNumber.join('')))
        refreshFirstNumberArray(vars)
        updateDisplay(result)
        vars.operators.push(input)
    } else if (input == '=') {
        if (vars.firstNumber.length > 0 && vars.secondNumber.length == 0 && vars.operators.length > 0) {
            result = operate(vars.operators[vars.operators.length -1], parseInt(vars.firstNumber.join('')), parseInt(vars.firstNumber.join('')))
            refreshFirstNumberArray(vars)
            updateDisplay(result)
        } 
    };
};

function calculatorLogic(input) {

    if (numbers.includes(input)) {

        if (vars.operators.length == 0) {
            vars.firstNumber.push(input)
            updateDisplay(vars.firstNumber.join(''))
        } else {
            vars.secondNumber.push(input)
            updateDisplay(vars.secondNumber.join(''))
        }

    } else if (operators.includes(input)) {
        // vars.operators.push(input)

        if (vars.firstNumber.length == 0 && vars.secondNumber.length == 0) {
            console.log('no numbers have been input')
        } else if (vars.firstNumber.length !== 0 && vars.secondNumber.length == 0) {
            console.log('first number has been selected, but second number is empty')
            vars.operators.push(input)
        } else if (vars.firstNumber.length !== 0 && vars.secondNumber.length !== 0) {
            calculate(input)
        }


    } else if (input == '=') {

        calculate(input)

    } else if (input == 'AC') {

        clearCalculations()
        updateDisplay('0')
        console.log(vars)

    }
}


const listenClick = document.querySelectorAll('button')
listenClick.forEach(function(input){
    input.addEventListener('click', () => {
        selection = input.textContent
        calculatorLogic(selection)
    }
)});

document.onkeydown = (event) =>  {
    keyPress = event.key
    calculatorLogic(keyPress)
}

// const listenKey = document.querySelectorAll('button')
// listenKey.forEach(function(input){
//     input.addEventListener('keypress', () => {
//         console.log(input)
//         selection = input.textContent
//         calculatorLogic(selection)
//     }
// )});
    