var name = "Alejo"; // RECOMENDACIÓN: NUNCA USARLO
let age = 22; // VARIABLE DE BLOQUE MUTABLE DE TIPO Y VALOR
const PI = 122; // VARIABLE DE BLOQUE INMUTABLE DE TIPO Y VALOR
const carrer = null;
let salary;

const listaNumeros = [1, 2, "Hola", true, 22.2];

// Tipos de datos
/* string;
number;
boolean;
prototype;
object;
null;
undefined;
*/

console.log("Hola, mi nombre es", name, "y mi edad es", age);

// Backticks -> Permiten interpolación y multilínea
const presentacion = `Hola

Me llamo ${name} y tengo ${age} años`;

console.log(presentacion);
