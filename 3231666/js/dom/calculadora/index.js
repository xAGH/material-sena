let leftSide = "";
let operator = "";
let rigthSide = "";

function refreshDisplay() {
    const display = document.getElementById("display");
    display.textContent = `${leftSide} ${operator} ${rigthSide}`;
}

function addNumber(number) {
    if (!operator) {
        leftSide += number;
    } else {
        rigthSide += number;
    }
    refreshDisplay();
}

function addOperation(operation) {
    operator = operation;
    refreshDisplay();
}

function clearDisplay() {
    leftSide = "";
    operator = "";
    rigthSide = "";
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
                result = "Error";
            } else {
                result = left / rigth;
            }
            break;
    }
    showResult(result);
}
