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