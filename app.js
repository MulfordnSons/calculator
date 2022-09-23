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

// end of basic functions //

console.log(operate('+', 10, 10))
console.log(operate('-', 10, 10))
console.log(operate('*', 10, 10))
console.log(operate('/', 10, 10))

// construct empty object to store current equation from user input //
let equationValues = {
    calculations: 0,
    lastResult: [],
    operator: [],
    number: [],
    number2: [] // tee-hee

}

const display = document.getElementById('display')


function calculate() {
    console.log(this)
    if (equationValues.calculations == 0) {
        result = operate(equationValues.operator, equationValues.number, equationValues.number2)
        equationValues.calculations += 1
    } else {
        equationValues.lastResult
        result = operate(equationValues.operator, equationValues.lastResult, equationValues.number2)
    }
}

function compileInputs() {
    if (!Array.isArray(equationValues.operator) || !equationValues.operator.length) {
        equationValues.number.push(this.textContent)
        // equationValues.lastResult = input.textContent
        console.log(equationValues.number.join(''))
        // update result display with user input //
        display.textContent = equationValues.number.join('')
    } else {
        equationValues.number2.push(this.textContent)
        display.textContent = equationValues.number2.join('')
        console.log(equationValues.number2)
    }
}

// capture all numbers entered before operator is chosen //



// listen for button inputs (ONLY number inputs) //
const inputs = document.querySelectorAll('.numbers-container .normal-btn')
inputs.forEach(function(input) {
    input.addEventListener('click', compileInputs)
})
    // check if operator property of equation values is empty, if empty it means that user is still 
    //  entering number for first side of calculation
    

// listen for button inputs of operators //
const operators = document.querySelectorAll('.numbers-container .special-btn')
operators.forEach(operator => operator.addEventListener('click', () => {
    if (!Array.isArray(equationValues.number) || !equationValues.number.length) {
        console.log('enter number before assigning operator')
    } else {
        equationValues.operator.push(operator.textContent)
        console.log(equationValues.operator)
    }}))
    


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
