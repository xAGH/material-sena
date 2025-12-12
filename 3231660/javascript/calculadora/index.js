let leftSide = "";
let rigthSide = "";
let operatorSelected = false;
let operator = "";

function refreshDisplay() {
    const display = document.getElementById("display");
    display.textContent = `${leftSide} ${operator} ${rigthSide}`;
}

function addNumber(number) {
    if (operatorSelected) {
        rigthSide += number;
    } else {
        leftSide += number;
    }
    refreshDisplay();
}

function clearDisplay() {
    operator = "";
    operatorSelected = false;
    leftSide = "";
    rigthSide = "";
    refreshDisplay();
}

function addOperation(operation) {
    operatorSelected = true;
    operator = operation;
    refreshDisplay();
}

function showResult(result) {
    operator = "";
    operatorSelected = false;
    leftSide = "";
    rigthSide = "";
    const display = document.getElementById("display");
    display.textContent = result;
}

function calculate() {
    const left = parseInt(leftSide);
    const rigth = parseInt(rigthSide);
    let result;
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
                result = "ERROR";
            } else {
                result = left / rigth;
            }
            break;
    }

    showResult(result);
}
