function sumar(num1, num2, callback) {
    const resultado = num1 + num2;
    callback(resultado);
}

function imprimir(resultado) {
    console.log(`EL resultado de la operación es: ${resultado}`);
}

function exponenciacion(num1) {
    console.log(num1 ** 2);
}

sumar(3, 4, imprimir);
sumar(3, 4, exponenciacion);
sumar(3, 4, (resultado) => resultado - 5);
sumar(3, 4, function (resultado) {
    return resultado / 2;
});

sumar(3, 4, function (resultado) {
    console.log(`EL resultado de la operación es: ${resultado}`);
});

sumar(1, 2, (resultado) =>
    console.log(`EL resultado de la operación es: ${resultado}`)
);
