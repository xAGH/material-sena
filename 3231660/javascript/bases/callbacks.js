function pedirPizza(callback) {
    console.log(`Pedir Pizza con Peperonni y Tomate`);
    callback("3013258495");
}

pedirPizza(() => {
    console.log(
        `La pizzeria me llama al número ${numero} y me dice que la pizza está lista`,
    );
});

function a() {
    console.log("Hola mundo");
}

function b(num1, num2, fn) {
    console.log(`Sumando ${num1} + ${num2} = ${num1 + num2}`);
    fn();
}

a();
b(5, 7, a);

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

function calculadora(num1, num2, operar) {
    operar(num1, num2);
}

calculadora(1, 2, (num1, num2) => num1 + num2);
