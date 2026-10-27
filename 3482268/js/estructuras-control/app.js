// Operadores aritméticos
const a = 10;
const b = 3;

console.log(a + b);  // 13  Suma
console.log(a - b);  // 7   Resta
console.log(a * b);  // 30  Multiplicación
console.log(a / b);  // 3.333...  División
console.log(a % b);  // 1   Módulo (residuo de la división)
console.log(a ** 2); // 100 Potencia

// Operadores de asignación
let puntos = 10;

puntos += 5;  // equivale a: puntos = puntos + 5  → 15
puntos -= 3;  // equivale a: puntos = puntos - 3  → 12
puntos *= 2;  // equivale a: puntos = puntos * 2  → 24
puntos++;     // suma 1 → 25
puntos--;     // resta 1 → 24

// Operadores de comparación
const num1 = 2
const num2 = 10

console.log(num1 > num2)
console.log(num1 < num2)
console.log(num1 >= num2)
console.log(num1 <= num2)
console.log(num1 == num2) // Compara igualdad de valor
console.log(num1 != num2) // Compara diferencia de valor
console.log(num1 === num2) // Compara igualdad de valor y tipo
console.log(num1 !== num2) // Compara diferencia de valor y tipo

// Condicionales
const nota = 3.8;
if (nota >= 3.5) {
    console.log("Aprobó")
} else if (nota >= 3) {
    console.log("No aprobó, pero puede recuperar")
} else {
    console.log("No aprobó y no puede recuperar")
}

// Truthy y falsy = Valores de la verdad
/* Valores falsy:
- false
- 0
- ""
- null
- undefined
- NaN -> Not a Number
*/
const name = 0

if (name) {
    console.log("Entra")
} else {
    console.log("No entra")
}

// Operador ternario u operador elvis
const mensaje = name
    ? "Entra"
    : "No entra";

console.log(mensaje)


// Switch
const dia = "lunes";

switch (dia) {
    case "lunes":
        console.log("Es lunes, toca matemáticas")
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("Es día hábil");
        break;
    case "sabado":
    case "domingo":
        console.log("No es día hábil");
        break;
    default:
        console.log("El día ingresado no es válido");
}

// Ciclos
// 1. Inicio = defina una variable que va a manejar el ciclo
// 2. Condición = define cuando va a seguir el cilo, si es false: para
// 3. Actualización = modifico la variable para ajustar la condición
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`)
}

// Solo requeire la condición
let saldo = 100000;
const retiro = 30000;
let retiros = 0;

while (saldo >= retiro) {
    saldo -= retiro; // 100000 - 30000 = 70000 - 30000 = 40000 - 30000 = 10000
    retiros++; // 1, 2, 3
    console.log(`Retiro${retiros}. Saldo restante: $${saldo}`);
}

console.log("Saldo insuficiente para otro retiro");

// break & continue
for (let i = 1; i <= 10; i++) {
    if (i === 3) {
        continue;
    }
    if (i === 6) {
        break;
    }
    console.log(i);
}