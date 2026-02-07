/*
    Operadores lógicos:
    &&
    ||
    ! -> Negación
    != -> Comprueba diferencia de valor
    !== -> Comprueba diferencia de valor y tipo
    == -> Comprueba igualdad de valor
    === -> Comprueba igualdad de valor y tipo
    <
    >
    <=
    >=
*/

if (true) {
} else if (true) {
} else {
}

const dia = "Lunes";

switch (dia) {
    case "Lunes":
        const mensaje = "Hoy es lunes";
        break;
    case "Martes":
        throw Error();
    default:
        break;
}

const a = "1";
const b = 1;

console.log(`El resultado de a == b es ${a == b}`);
console.log(`El resultado de a === b es ${a === b}`);
console.log(`El resultado de a != b es ${a != b}`);
console.log(`El resultado de a !== b es ${a !== b}`);
