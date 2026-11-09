// Métodos para transformar y filtrar
// map
const precios = [10000, 25000, 40000];
const preciosConIva = precios.map((value) => value * 1.19);
console.log("preciosConIva", preciosConIva)

// filter -> []
const notas = [4.5, 2.8, 3.9, 2.5, 4.0];
const notasAprobado = notas.filter((value) => value >= 3.0);
console.log(notasAprobado)

// find -> undefined
const edades = [12, 15, 19, 22, 30];
const primerMayorDeEdad = edades.find((value) => value >= 18)
console.log(primerMayorDeEdad)

// Verificar condiciones
const stock = [5, 0, 12, 3];
console.log(stock.some((value) => value === 0)); // Si al menos 1 cumple la condición, es true
console.log(stock.every((value) => value > 0)) // Si todos cumplen la condición, es true

// reduce
const compras = [12000, 8500, 30000];
const total = compras.reduce((acumulado, actual) => acumulado + actual, 0)
console.log(total)