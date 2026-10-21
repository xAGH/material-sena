function procesarNumero(n, callback) {
    return callback(n);
}

function alCuadrado(n) {
    return n * n
};

const mitad = function (n) {
    return n / 2
};

const esPar = n => n % 2 === 0

console.log(procesarNumero(6, alCuadrado)); // 36
console.log(procesarNumero(6, mitad));      // 3
console.log(procesarNumero(6, esPar));


console.log(procesarNumero(6, n => n * n)); // 36