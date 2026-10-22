const precios = [45000, 12000, 89000, 5000, 32000, 150000, 27000];

// Muestra en consola la cantidad de productos, el primer precio y el último precio.
console.log("Cantidad: ", precios.length);
console.log("Primero: ", precios[0]);
console.log("Primero: ", precios[precios.length - 1]);

// Agrega un nuevo precio de 60000 al final y elimina el primero.
precios.push(60000);
precios.shift()

// Recorre el arreglo con for...of y muestra cada precio con el formato Producto: $45000.
for (let precio of precios) {
    console.log(`Precio: $${precio}`)
}

// Con filter, obtén los precios mayores a $30.000.
const mayoresA30000 = precios.filter(value => value > 30000);
console.log(mayoresA30000)

// Con map, obtén un nuevo arreglo con un descuento del 10% aplicado a cada precio.
const precionsConDescuento = precios.map(value => value * 0.9);
console.log(precionsConDescuento)

// Con find, obtén el primer precio menor a $10.000.
const menorA10000 = precios.find(value => value < 10000)
console.log(menorA10000)

// Con reduce, calcula el total de todos los precios y luego el promedio.
const promedio = precios.reduce((suma, precio) => suma + precio, 0) / precios.length;
console.log(promedio)

// Usa some para verificar si hay algún producto de más de $100.000.
const hayProductoMasDe100k = precios.some(value => value > 100000)
console.log(hayProductoMasDe100k)

// Ordena los precios de menor a mayor sin modificar el arreglo original
const ordenadorAsc = precios.toSorted((a, b) => a - b);
const copiaPrecios = [...precios]
copiaPrecios.sort((a, b) => b - a);
console.log(ordenadorAsc)
console.log(copiaPrecios)

// Reto adicional
const palabras = ["sol", "computador", "luz", "teclado", "mar"]
const texto = palabras
    .filter(value => value.length > 3)
    .map(value => value.toUpperCase())
    .join(",")
console.log(texto)