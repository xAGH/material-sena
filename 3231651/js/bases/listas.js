let frutas = [
    "Manzana",
    "Banano",
    "Pera",
    "Naranja",
    "Mandarina",
    "Fresa",
    "Mango",
    "Uva",
    "Papaya",
    "Piña",
    "Melón",
    "Sandía",
    "Durazno",
    "Ciruela",
    "Kiwi",
    "Guayaba",
    "Maracuyá",
    "Lulo",
    "Cereza",
    "Mora",
];

// Largor lista
console.log(frutas.length);

// Agregar elementos a lista
frutas.push(
    "Granadilla",
    "Arazá",
    "Guayaba agria",
    "Borojo",
    "Tomate de árbol",
    "Zapote"
);
console.log(frutas.length);

// Eliminar el último elemento
const fruta = frutas.pop();
console.log(frutas.length);

// For Each -> Iterar
frutas.forEach((fruta) => console.log(fruta));

// Map -> Cambiar cada elemento
const mapped = frutas.map((fruta) => {
    return "La fruta es " + fruta;
});

console.log(mapped);

// Filter -> Filtrar
const filtered = frutas.filter((fruta) => {
    return fruta.charAt(0) === "M";
});
console.log(filtered);

// Find -> Busca un elemento en l alista
const found = frutas.find((fruta) => {
    console.log(fruta);
    return fruta == "Manzana";
});
console.log(found);

// Splice -> Eliminar desde 0 hasta 4
const splitted = frutas.splice(0, 5);
console.log(splitted);

// Ejemplo -> Rango del array desde la posición 0 a la 5
const range = frutas.filter((fruta, i) => {
    return i < 5;
});
console.log(range);
