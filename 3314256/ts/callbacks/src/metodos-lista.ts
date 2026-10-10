let nombres: string[] = ["Alejo", "Pepe", "Juan"];
const edades = [10, 15, 16, 20, 11, 9, 31];

const personas = [
  {
    name: "Alejo",
    id: 1,
  },
];

nombres.length; // 3

nombres.push("Miguel");

const ultimoEliminado = nombres.pop(); // Elimina el último elemento y lo retorna

console.log(nombres); // ["Alejo", "Pepe", "Juan"]

nombres = [...nombres, "Pepito", "Sutano"];

console.log(nombres); // ["Alejo", "Pepe", "Juan", "Pepito", "Sutano"]

// Métodos de listas importantes

const nombresMayus = nombres.map((nombre) => nombre.charAt(0).toUpperCase());

const iniciaConP = nombres.filter(
  (nombre) => nombre.charAt(0).toLowerCase() === "p",
);

const id1 = personas.find((persona) => persona.id === 1);

const almenosUnaA = nombres.some((nombre) =>
  nombre.toLowerCase().includes("a"),
);

const todosTienenUnaA = nombres.every((nombre) =>
  nombre.toLowerCase().includes("a"),
);

const sumar = edades.reduce((cur, acc) => {
  return acc + cur;
}, 0);

console.log(sumar / edades.length);
