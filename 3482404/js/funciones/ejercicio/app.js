// Ejercicio 1
function calcularArea(base, altura) {
    return base * altura
}
console.log(calcularArea(2, 6))

// Ejercicio 2
const celsiusAFahrenheit = (celsius) => celsius * 9 / 5 + 32
console.log(celsiusAFahrenheit(24))

// Ejercicio 3
function obtenerMayor(a, b, c) {
    if (a > b && a > c) return a
    else if (b > a && b > c) return b
    else return c
}
console.log(obtenerMayor(3, 6, 2))

// Ejercicio 4
function calcularTotal(precio, iva = 19) {
    return precio + (precio * iva / 100);
}
console.log(calcularTotal(100))
console.log(calcularTotal(100, 30))

// Ejercicio 5
esContrasenaValida = (clave) => clave.length >= 8
console.log(esContrasenaValida("invalid"))
console.log(esContrasenaValida("validooooooo"))

// Ejercicio 6
function formatearNombre(nombre, apellido) {
    const nombreLimpio = nombre.trim();
    const apellidoLimpio = apellido.trim();
    const nombreMinus = nombreLimpio.toLowerCase();
    const apellidoMinus = apellidoLimpio.toLowerCase();
    const primeraLetraNombre = nombreMinus[0].toUpperCase();
    const primeraLetraApellido = apellidoMinus[0].toUpperCase();

    const nombreCompleto = `${primeraLetraNombre}${nombreMinus.slice(1)} ${primeraLetraApellido}${apellidoMinus.slice(1)}`

    return nombreCompleto.replace()
}
console.log(formatearNombre("       aLEjO", "giraLDO        ")) // alejo giraldo

// Reto
function aplicarOperacion(a, b, operacion) {
    return operacion(a, b)
}
console.log(aplicarOperacion(5, 3, (n1, n2) => n1 + n2))
console.log(aplicarOperacion(5, 3, (n1, n2) => n1 - n2))
console.log(aplicarOperacion(5, 3, (n1, n2) => n1 * n2))
console.log(aplicarOperacion(5, 0, (n1, n2) => {
    if (n2 === 0) {
        return "No se puede operar"
    }
    return n1 / n2
}))