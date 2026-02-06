function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

function calculadora(num1, num2, operacion) {
    operacion(num1, num2);
}

calculadora(1, 2, sumar);

calculadora(1, 2, (num1, num2) => num1 + num2);
