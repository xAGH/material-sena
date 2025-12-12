let leftSide = "";
let operator = "";
let rigthSide = "";

function refreshDisplay() {
    const display = document.getElementById("display");
    display.textContent = `${leftSide} ${operator} ${rigthSide}`;
}

function addNumber(number) {
    if (operator) {
        rigthSide += number;
    } else {
        leftSide += number;
    }
    refreshDisplay();
}

function addOperator(operatorParam) {
    operator = operatorParam;
    refreshDisplay();
}

function clearDisplay() {
    leftSide = "";
    rigthSide = "";
    operator = "";
    refreshDisplay();
}

function showResult(result) {
    clearDisplay();
    const display = document.getElementById("display");
    display.textContent = result;
}

function calculate() {
    let result;
    const left = parseInt(leftSide);
    const rigth = parseInt(rigthSide);
    switch (operator) {
        case "+":
            result = left + rigth;
            break;
        case "-":
            result = left - rigth;
            break;
        case "*":
            result = left * rigth;
            break;
        case "/":
            if (rigth === 0) {
                result = "Syntax Error";
            } else {
                result = left / rigth;
            }
            break;
    }
    showResult(result);
}
