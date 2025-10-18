function sayHi() {
    console.log("Hola");
}

const sayGoodMorning = function () {
    console.log("Buenos días");
};

const sayBye = () => {
    console.log("Adios");
};

// sayHi();
// sayGoodMorning();
// sayBye();

const status = "TERMINADO"; // "EN PROCESO" "FINALIZADO";

switch (status) {
    case "PENDIENTE":
        console.log("El estado de la tarea es PENDIENTE");
        break;
    case "EN PROCESO":
        console.log("El estado de la tarea es EN PROCESO");
    case "FINALIZADO":
        console.log("El estado de la tarea es FINALIZADO");
    default:
        console.log("El estado es incorrecto");
}

const users = ["Alejo", "Juan", "Pepe"];

console.log("\nFOR");

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}

console.log("\nWHILE");

let j = 0;

while (j < users.length) {
    console.log(users[j]);
    j++;
}

console.log("\nDO WHILE");

let k = 0;

do {
    console.log(users[k]);
    k++;
} while (k < users.length);

console.log("\nFOR OF");

for (const name of users) {
    console.log(name);
}

console.log("\nFOR EACH");

function sayHi() {
    console.log("Hola");
}

function greeting(callback) {
    callback();
    console.log("Buenos dias");
    console.log("Soy Alejo");
}

greeting(sayHi);

console.log("\nFOR EACH");

function iterar(name) {
    console.log(name);
}

users.forEach(iterar);

users.forEach((name) => {});

users.forEach(function (name) {
    console.log(name);
});
