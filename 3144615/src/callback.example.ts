function sumar(num1: number, num2: number): number {
    return num1 + num2;
}

function calculadora(
    num1: number,
    num2: number,
    operacion: (num1: number, num2: number) => number,
): number {
    return operacion(num1, num2);
}

calculadora(1, 3, sumar);
