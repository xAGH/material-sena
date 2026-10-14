// Esto es un comentario de una soli línea

/*
Comentario
de
1múltiples
líneas
*/

// Tipos de mensaje para mostrar en consola
console.log("Mensaje informativo");   // Muestra un mensaje
console.warn("Mensaje de advertencia"); // Se muestra en amarillo
console.error("Mensaje de error");      // Se muestra en rojo
console.table([{ nombre: "Ana", edad: 20 }, { nombre: "Luis", edad: 22 }]); // Muestra una tabla

// Permite definir variables mutables (pueden cambiar)
let name = "Alejo"
console.log(typeof name)
name = true;

let profession; // Valor undefined

// Permite definir variables inmutables (no pueden cambiar)
const PI = 3.1416

// PI = 3.20 Error al reasignar el valor a una constante


// Tipos de datos
const str = "HOla Mundo" // se puede con comillas simples, dobles o backticks (', ", `)
const num = -3.21 // Permite almacenar cualquier número real y algunos imaginarios (como Infinity)
const bool = true // o false
let indefinido; // valor undefined porque no tiene un valor asignado
const nulo = null;
const obj = {
    name: "Alejo",
    age: 23,
    profession: "Intructor",
    isMale: true,
    experience: null,
}
const array = [1, "Hola", true, { name: "Alejo" }]

// Conocer el tipo de una variable -> typeof
console.log(typeof name)

// Trabajar con strings (textos)
const nombre = "Alejandro"
const apellido = 'Giraldo'
const nombreCompleto = `Hola.
Mi nombre es ${nombre} ${apellido}
`

console.log(nombreCompleto)

// Métodos y propiedades útiles en textos
const texto = "  JavaScript es genial  ";

console.log("Longitud de caracteres (incluyendo espacios):", texto.length);
console.log("Quita espacios al inicio y al final:", texto.trim());
console.log("Convierte a mayúsculas:", texto.toUpperCase());
console.log("Convierte a minúsculas:", texto.toLowerCase());
console.log("true si contiene el texto:", texto.includes("es"));

// Conversión de tipos
const valorEnTexto = "25000"
const valorEnNum = Number(valorEnTexto)

const otroValor = "Alejo"
console.log(Number(otroValor)) // retorna NaN = Not A Number, cursiosamente es de tipo number
