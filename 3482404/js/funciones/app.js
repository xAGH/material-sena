const name = "Alejo"

saludar(name, "ADSO")


function saludar(nombre, programa) {
    console.log(`Hola ${nombre}, bienvenido a ${programa}`);
}

// Parámetro cuando se declara que la funcion recibe x variables
function sumar(num1, num2, num3 = 0) {
    if (num1 === undefined || num2 === undefined) {
        return 0
    }
    return num1 + num2 + num3
}

saludar() // undefined
// Argumentos cuando se invoca la función
const variable = sumar(3, 5, 4) // 12
console.log(sumar(1, 2))

// FORMAS DE DECLARAR UNA FUNCION
// 1. "Común": function <nombre>(<parámetros opcionales>) { <cuerpo de la función> <opcional return> }
function sum(num1, num2) { return num1 + num2 };

sum2(1, 2)
sum3(3, 4)

// 2. "Anónima": function (<parámetros opcionales>) { <cuerpo de la función> <opcional return> }
const sum2 = function (num1, num2) { return num1 + num2 };

// 3. "Flecha": (<parámetros opcionales>) => { <cuerpo de la función> <opcional return> }
const sum3 = (num1, num2) => { return num1 + num2 }

// 4. "Flecha sin cuerpo": (<parámetros opcionales>) => <return>
const sum4 = (num1, num2) => num1 + num2

const elevarAlCuadrado = num => num ** 2

if (true) {
    const genre = "male";
    const age = 23;

    if (true) {
    }
}

for (let i; i == 0; i--) {
    name
}

while (true) {
    name
}

function x() {

}