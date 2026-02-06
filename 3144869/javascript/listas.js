let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Recorre los elementos de una lista
numeros.forEach((numero) => console.log(numero));

// Modifica los valores
const cuadrados = numeros.map((value) => (value === 5 ? value : value ** 2));
console.log(cuadrados);

// Filtra
const filtrados = numeros.filter((value) => value % 2 === 0);
console.log(filtrados);

// Find
const encontrado = numeros.find((value) => value % 2 === 0);
console.log(encontrado);

// Reduce la lista a un solo valor
numeros.reduce((acumudalo, actual) => {
    acumudalo += actual;
}, 0);

numeros.push(11, 12, 13, 14);
const numeroEliminado = numeros.pop();

numeros = numeros.filter((value) => value != 5);

// Elimina el numero de elementos indicados desde una posición
console.log(numeros);
numeros.splice(5, 3);
console.log(numeros);

// Agrega en una posiciíon específica
numeros.splice(5, 3, 10);
numeros.splice(5, 0, 10);
console.log(numeros);
