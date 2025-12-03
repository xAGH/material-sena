// Función "normal"
function sumar1(num1, num2 = 2) {
    return num1 + num2;
}

// Función anónima
const sumar2 = function (num1, num2) {
    return num1 + num2;
};

// Función anónima ó Función flecha con retorno explícito
const sumar3 = (num1, num2) => {
    return num1 + num2;
};

// Función anónima ó Función flecha con retorno implícito
const sumar4 = (num1, num2) => num1 + num2;

console.log(sumar1(1, 1));
console.log(sumar2(3, 2));
console.log(sumar3(5, 2));
console.log(sumar4(2, 9));
