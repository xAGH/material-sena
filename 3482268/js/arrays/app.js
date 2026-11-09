const frutas = ["manzana", "banano", "fresa"];
const notas = [4.2, 3.8, 4.5, 2.9];
const vacio = [];

console.log(frutas[0]);     // "manzana"
console.log(frutas[2]);     // "fresa"
console.log(frutas[5]);     // undefined (no existe esa posición)
console.log(frutas.length); // 3 (cantidad de elementos)

// Último elemento
console.log(frutas[frutas.length - 1]); // "fresa"

// Modificar un elemento
frutas[1] = "pera";
console.log(frutas); // ["manzana", "pera", "fresa"]


// Agregar y eliminar elementos
const tareas = ["Estudiar", "Hacer ejercicio"];

tareas.push("Leer");       // Agrega al final
tareas.unshift("Desayunar"); // Agrega al inicio
console.log(tareas); // ["Desayunar", "Estudiar", "Hacer ejercicio", "Leer"]

const ultimoEliminado = tareas.pop();   // Elimina el último
const primerEliminado = tareas.shift(); // Elimina el primero
console.log(ultimoEliminado);
console.log(primerEliminado);
console.log(tareas); // ["Estudiar", "Hacer ejercicio"]

// splice(posición, cantidadAEliminar): elimina elementos en cualquier posición
const colores = ["rojo", "verde", "azul", "negro"];
colores.splice(1, 2);
console.log(colores);

// Buscar elementos
const lenguajes = ["HTML", "CSS", "JavaScript"];

console.log(lenguajes.includes("CSS"));       // true
console.log(lenguajes.indexOf("JavaScript")); // 2 (posición)
console.log(lenguajes.indexOf("Python"));     // -1 (no existe)

const ciudades = ["Bogotá", "Medellín", "Cali"];

for (let i = 0; i < ciudades.length; i++) {
    console.log(`${i + 1}.${ciudades[i]}`);
}

// forOf = forEach
for (const ciudad of ciudades) {
    console.log(ciudad)
}

// Callbacks -> Funciones pasadas como argumento a otra función
function recorrer(value) {
    console.log(value)
}
ciudades.forEach(recorrer);
ciudades.forEach(function recorrer(value) {
    console.log(value)
});
ciudades.forEach(function (value) {
    console.log(value)
});
ciudades.forEach((value, index, arrayOriginal) => console.log(index + ". " + value, arrayOriginal));