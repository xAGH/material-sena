// 1. Par o impar: declara una constante numero y
// muestra si es par o impar usando %.
const num = 5;
console.log(num % 2 === 0 ? "Es par" : "Es impar")

/*
2. Calificación: dada una constante `nota` entre 0 y 5, muestra:
    - `"Excelente"` si es mayor o igual a 4.5
    - `"Bueno"` si es mayor o igual a 4.0
    - `"Aceptable"` si es mayor o igual a 3.0
    - `"Insuficiente"` en otro caso
    - `"Nota no válida"` si es menor que 0 o mayor que 5 (esta validación debe ir primero).
*/
const nota = 4.6
let mensaje;
if (nota < 0 || nota > 5) {
    mensaje = "Nota no válida"
} else if (nota >= 4.5) {
    mensaje = "Excelente"
} else if (nota >= 4) {
    mensaje = "Bueno"
} else if (nota >= 3) {
    mensaje = "Aceptable"
} else {
    mensaje = "Insuficiente"
}

console.log(mensaje)

/*
3. Acceso a un evento: una persona puede entrar
si tiene 18 años o más y tiene boleta, o si está
en la lista de invitados. Declara las variables
necesarias y muestra si puede entrar. */
const edad = 16;
const tieneBoleta = false
const estaEnLaListaDeInvitadois = true
const puedeEntrar = (edad >= 18 && tieneBoleta) || estaEnLaListaDeInvitadois
console.log(puedeEntrar ? "Puede entrar" : "No puede entrar")


/*
4. Sumatoria: usa un ciclo for para calcular la
suma de los números del 1 al 100. El resultado 
debe ser 5050.
*/
let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log(suma)

/* 5. Múltiplos: muestra todos los múltiplos de 3 entre 1 y 50. */
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(`El número ${i} es múltiplo de 3`)
    }
}

/* 6. Ahorro: una persona ahorra $50.000 cada mes. Con un ciclo
while, calcula cuántos meses necesita para reunir $600.000. */
let ahorro = 0;
let meses = 0;
const ahorroMensual = 50000
while (ahorro <= 600000) {
    ahorro += ahorroMensual
    meses++
}
console.log(`Para ahorrar $600.000 ahorrando $50.000 cada mes, llevaría ${meses} meses`)

/*
Reto adicional: usando switch, crea una calculadora que reciba
dos números y un operador ("+", "-", "*", "/") y muestre el resultado.
Si el operador es "/" y el segundo número es 0, debe mostrar un mensaje
de error.
*/
const num1 = 5;
const num2 = 0;
const operador = "/"

switch (operador) {
    case "+":
        console.log(`${num1} + ${num2} = ${num1 + num2}`)
        break;
    case "-":
        console.log(`${num1} - ${num2} = ${num1 - num2}`)
        break;
    case "*":
        console.log(`${num1} * ${num2} = ${num1 * num2}`)
        break;
    case "/":
        if (num2 === 0) {
            console.error("El divisor no puede ser 0")
            break;
        }
        console.log(`${num1} / ${num2} = ${num1 / num2}`)
        break;
}