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
            return subtraction(lastResult, number);      
    };
};

// end of basic functions //

console.log(operate('+', 10, 10))
console.log(operate('-', 10, 10))
console.log(operate('*', 10, 10))
console.log(operate('/', 10, 10))

// construct empty object to store current equation from user input //
let equationValues = {
    lastResult: [],
    operator: [],
    number: []

}

// capture all numbers entered before operator is chosen //



// listen for button inputs (ONLY number inputs) //
const inputs = document.querySelectorAll('.numbers-container .normal-btn')
inputs.forEach( input => input.addEventListener('click', function() {
    // check if operator property of equation values is empty, if empty it means that user is still 
    //  entering number for first side of calculation
    if (!Array.isArray(equationValues.operator) || !equationValues.operator.length) {
        equationValues.lastResult.push(input.textContent)
        // equationValues.lastResult = input.textContent
        console.log(equationValues.lastResult.join(''))
        // update result display with user input //
        document.getElementById('display').textContent = equationValues.lastResult.join('')
    } else {
        equationValues.number.push(input.textContent)
        document.getElementById('display').textContent = equationValues.number.join('')
        console.log(equationValues.number)
    }}))

// listen for button inputs of operators //
const operators = document.querySelectorAll('.numbers-container .special-btn')
operators.forEach(operator => operator.addEventListener('click', function() {
    equationValues.operator.push(operator.textContent)
    console.log(equationValues.operator)
}))


// listen for button input of AC and clear contents of calculation //
const clear = document.querySelector('.clear').addEventListener('click', clickEvent => {
    Object.keys(equationValues).forEach(key => equationValues[key] = [])
    document.getElementById('display').textContent = ''
})


// listen for equals button press //
let equals = document.querySelector('.equals')
console.log(equals)
equals.addEventListener('click', function() {
    console.log('equals clicked')
    console.log(equationValues.operator[equationValues.operator.length-1], parseInt(equationValues.lastResult.join('')), parseInt(equationValues.number.join('')))
    result = operate(equationValues.operator[equationValues.operator.length-1], parseInt(equationValues.lastResult.join('')), parseInt(equationValues.number.join('')))
    console.log(result)
    document.getElementById('display').textContent = result
    equationValues.lastResult = []
    equationValues.number = []
    equationValues.lastResult.push
})

