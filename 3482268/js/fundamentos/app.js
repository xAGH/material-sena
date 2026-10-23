// Las 4 formas de imprimir contenido en la consola
console.log("Hola mundo")
console.warn("Falta el id")
console.error("El id no existe")
console.table(["Alejo", "Juan", "Pepe"]);

// Variables
// let -> Define variables mutables
let name = "Alejo"
name = "Pepe"
console.log(name)
// const -> Define variables inmutables
const age = 12
// age = 13 -> Da error, una constante no se puede reasignar


// Convencion
const $price = 23
const _skip = "saltar"
const num123 = "123"
const Num123 = "123"
// const let = ""

// Tipos de variables
console.log(typeof name)
console.log(typeof $price)
const percent = 12.5
console.log(typeof percent
)

// Formas de trabajar con strings
const nombre = 'Alejo '
const apellido = "Giraldo"
const nombreCompleto = `${nombre}

${apellido}`

console.log(nombreCompleto)

// Métodos útiles para strings
const texto = "  JavaScript es genial  ";

console.log(texto.length);          // Cantidad de caracteres (incluye espacios)
console.log(texto.trim());          // Quita espacios al inicio y al final
console.log(texto.toUpperCase());   // Convierte a mayúsculas
console.log(texto.toLowerCase());   // Convierte a minúsculas
console.log(texto.includes("es"));  // true si contiene el texto
console.log(texto[2]);              // La letra que se encuentre en el índice especificado
console.log(texto.slice(2, 12));    // Substrae el texto entre las posiciones indicadas
console.log(texto.slice(10));       // Substrae el texto entre las posiciones indicadas


// Conversión de tipos
let promedio = 5;
promedio = 10;
console.log(typeof promedio)
promedio = "Hola Mundo";
console.log(typeof promedio)
promedio = true
console.log(typeof promedio)

const nota = "5.0"
const notaNumero = Number(nota)
const notaTexto = "" + notaNumero
const notaTexto2 = String(notaNumero)
console.log(notaNumero)
console.log(notaTexto)