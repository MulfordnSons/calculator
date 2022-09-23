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

let firstNumber = ''
let secondNumber = ''
let firstOperator = null
let secondOperator = null
let lastResult = null


// end of basic functions //


let display = document.getElementById('display').textContent = '0'



// listen for button inputs (ONLY number inputs) //
const inputs = document.querySelectorAll('.numbers-container .normal-btn')
inputs.forEach(function(input) {
    input.addEventListener('click', () => {
        if (firstOperator == null) {
            firstNumber += input.textContent
            console.log(firstNumber)
            document.getElementById('display').textContent += input.textContent
        } else {
            secondNumber += input.textContent
            console.log(secondNumber)
            document.getElementById('display').textContent = secondNumber
        }
        
    })
})

// listen for button inputs of operators //
const operators = document.querySelectorAll('.numbers-container .special-btn')
operators.forEach(operator => operator.addEventListener('click', () => {
    firstOperator = operator.textContent
}))



// listen for button input of AC and clear contents of calculation //
const clear = document.querySelector('.clear').addEventListener('click', clickEvent => {
    Object.keys(equationValues).forEach(key => equationValues[key] = [])
    document.getElementById('display').textContent = '0'
})


// listen for equals button press //
// let equals = document.querySelector('.equals')
// console.log(equals)
// equals.addEventListener('click', function() {
//     console.log('equals clicked')
//     console.log(equationValues.operator[equationValues.operator.length-1], parseInt(equationValues.lastResult.join('')), parseInt(equationValues.number.join('')))
//     result = operate(equationValues.operator[equationValues.operator.length-1], parseInt(equationValues.lastResult.join('')), parseInt(equationValues.number.join('')))
//     console.log(result)
//     document.getElementById('display').textContent = result
//     equationValues.lastResult = []
//     equationValues.number = []
//     equationValues.lastResult.push
// })

// running count of calculations made:
//  if count > 1: means equals have been pressed to signify first equation.
//   at this point, the user can choose any operator and it will calculate the number inputted, with
//    the the selected operator AND THE RESULT OF THE LAST CALCULATION.



// add checks of divide by zero, do not allow first equation to be run if num1 and num2 have not been selected
