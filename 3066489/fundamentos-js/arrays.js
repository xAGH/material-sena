const frutas = ["manzana", "banana", "naranja"];

const printFruits = () => console.log(frutas);

printFruits();

frutas.push("remolacha");

printFruits();

const lastEliminated = frutas.pop();

console.log(lastEliminated);

printFruits();

const firstEliminated = frutas.shift();

console.log(firstEliminated);

printFruits();

frutas.unshift("fresa");

printFruits();

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printNumbers = () => console.log(numbers);

const filteredNumbers = numbers.filter((number) => number % 2 != 0);

console.log(filteredNumbers);

const changedNumbers = numbers
    .map((number) => {
        return number + 1;
    })
    .filter((number) => number > 5)
    .map((number) => number * 2);

console.log(changedNumbers);
