const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ForEach -> Recorre la lista
numeros.forEach((value, index) => {
    console.log(`${index}. ${value}`);
});

// Map -> Cambia cada elemento
const cuadrados = numeros.map((value) => {
    return value ** 2;
});

console.log(cuadrados);

// Filter -> Filtrar
const filtered = numeros.filter((value) => value % 2 !== 0);

console.log(filtered);

// Find
const found = numeros.find((value) => value === 5);
console.log(found);

// Reverse
numeros.reverse();
console.log(numeros);

// Agregar elemento al final
numeros.push(11, 12, 13);

// Eliminar último elemento
const ultimoElementoEliminado = numeros.pop();
console.log(ultimoElementoEliminado);

// Eliminar elementos en masa
console.log(numeros);
const deleted = numeros.splice(3, 2);
[10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 11, 12];
console.log(numeros);

// Añadir elemento en posición específica
numeros.splice(0, 0, 1);
console.log(numeros);
