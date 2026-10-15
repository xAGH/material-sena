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

// Condicionales
const nota = 3.8;

if (nota >= 4.5) {
    console.log("Excelente");
} else if (nota >= 3.0) {
    console.log("Aprobado");
} else {
    console.log("No aprobado");
}
// Resultado: "Aprobado"


// Valores truthy y falsy (valor de verdad)
/* truthy siempre menos con los siguientes valores:
    - false
    - 0
    - null
    - undefined
    - ""
    - NaN
*/
const name = "Alejo"
if (name) {
    console.log("Tiene nombre")
} else {
    console.log("No tiene nombre")
}

// Operador ternario u Operador Elvis ( condicion ? true : false )
const edad = 17;
let puedeEntrar = "";

if (edad >= 18) {
    puedeEntrar = "Puede entrar";
} else {
    puedeEntrar = "No puede entrar"
}

let puedeEntrarTernario = edad >= 18
    ? "Puede entrar"
    : "No puede entrar";

const mensaje = `Su edad es ${edad}, y ${edad >= 18
    ? "puede entrar"
    : "no puede entrar"}`

// Switch con break en cada case
const dia = "Lunes"

switch (dia) {
    case "Lunes":
        console.log("Hoy toca matemáticas");
    case "Martes":
        console.log("Hoy toca front")
        break;
    default:
        console.log("Hoy no toca clase")
        break;
}

// Switch con comportamiento compartido entre casos
const dia2 = "sabado";

switch (dia2) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("Día hábil");
        break; // Sin break, se seguirían ejecutando los casos siguientes
    case "sabado":
    case "domingo":
        console.log("Fin de semana");
        break;
    default:
        console.log("Día no válido");
}

// Ciclo for -> inicialización; condición; actualización
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// Ciclo while -> condición
let saldo = 100000;
const retiro = 30000;
let retiros = 0;

while (saldo >= retiro) {
    saldo -= retiro;
    retiros++;
    console.log(`Retiro${retiros}. Saldo restante: $${saldo}`);
}

console.log("Saldo insuficiente para otro retiro");

// break y continue
for (let i = 1; i <= 10; i++) {
    if (i === 3) {
        continue
    }

    if (i === 7) {
        break
    }

    console.log(i)
}