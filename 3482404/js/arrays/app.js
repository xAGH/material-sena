// Agregar y eliminar elementos
let tareas = ["Estudiar", "Hacer ejercicio"];

tareas.push("Hacer tareas", "Lavar la loza");
tareas.unshift("Bañarnos", "Vestirnos");
console.log(tareas)

const lastItem = tareas.pop();
console.log(lastItem)
const firstItem = tareas.shift()
console.log(firstItem)
console.log(tareas)
tareas.splice(2, 2)
console.log(tareas)

// Buscar elementos
const lenguajes = ["HTML", "CSS", "JavaScript"];

console.log(lenguajes.includes("CSS"));       // true
console.log(lenguajes.indexOf("JavaScript")); // 2 (posición)
console.log(lenguajes.indexOf("Python"));     // -1 (no existe)

// Recorrer un array
const ciudades = ["Bogotá", "Medellín", "Cali"];

// For común
for (let i = 0; i < ciudades.length; i++) {
    console.log(`${i + 1}.${ciudades[i]}`);
}

// For of = For each de java
for (let ciudad of ciudades) {
    console.log(ciudad);
}

function recorrer(value, index, array) {
    console.log(`${index + 1}. ${value}`)
    console.log(array)
}

// For each
ciudades.forEach(recorrer);
ciudades.forEach(function recorrer(value, index, array) {
    console.log(`${index + 1}. ${value}`)
    console.log(array)
});
ciudades.forEach(function (value, index, array) {
    console.log(`${index + 1}. ${value}`)
    console.log(array)
});
ciudades.forEach((value, index, array) => {
    console.log(`${index + 1}. ${value}`)
    console.log(array)
});

// Métodos de transformado 
// map
const precios = [10000, 25000, 40000];
const IVA = 1.19

const preciosConIva = precios.map(value => value * IVA)
console.log(preciosConIva)

const nombres = ["alejo", "ana", "pepe"]
const nombresMayusculas = nombres.map(value => value.toUpperCase())
console.log(nombresMayusculas)

// filter
const notas = [4.5, 2.8, 3.9, 2.5, 4.0, 6.0];
const ganaron = notas.filter(value => value >= 3.5 && value <= 5.0)
console.log(notas)
console.log(ganaron)

// find
const edades = [12, 19, 15, 19, 22, 30];
const primerMayorDeEdad = edades.find((value, i) => {
    console.log(i)
    return value >= 18
});
console.log(primerMayorDeEdad)

// some & every
const stock = [5, 0, 12, 3];

console.log(stock.some(value => value === 0));
console.log(stock.every(value => value >= 0));

// reduce
const compras = [12000, 8500, 30000];

const total = compras.reduce((acc, cur) => {
    return acc + cur
}, 0)
console.log(total)

// Encadenar métodos
const notasCurso = [4.5, 2.8, 3.9, 2.5, 4.0];
const aprobadas = notasCurso.filter(value => value >= 3);
const suma = aprobadas.reduce((suma, nota) => suma + nota, 0)
const promedio = suma / aprobadas.length

const sumaEnUnaLinea = notasCurso
    .filter(value => value >= 3)
    .reduce((suma, nota) => suma + nota, 0)

// Métodos útiles
// Transformar entre string y array
const nombreCompleto = "Alejandro Giraldo Herrera"
const listaNombre = nombreCompleto.split(" ");
console.log(listaNombre)
const nombreNormalDeNuevo = listaNombre.join(" ")
console.log(nombreNormalDeNuevo)

// Ordenar la lista
const numeros = [10, 1, 5, 100];
// Modifica el array
numeros.sort((a, b) => b - a)
// No modifica el array, retorna uno nuevo
const ordneados = numeros.toSorted((a, b) => b - a)

// Copiar una lista
const numeros2 = numeros;