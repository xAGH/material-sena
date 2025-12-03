// Función "normal"
function sumar1(num1, num2) {
    return num1 + num2;
}

// Función anónima
const sumar2 = function (num1, num2) {
    return num1 + num2;
};

// Función anónima flecha con retorno explícito
const sumar3 = (num1, num2) => {
    return num1 + num2;
};

// Función anónima flecha con retorno implícito
const sumar4 = (num1, num2) => num1 + num2;

console.log(sumar1(3, 5));
console.log(sumar2(1, 2));
console.log(sumar3(4, 2));
console.log(sumar4(5, 7));
