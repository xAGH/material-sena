console.log(saludo("Alejandro"))

// Funciones nomencladas
function saludo(name /* Parámetros opcionales */) {
    const mensaje = "Hola " + name
    console.log(name)
    if (name) {
        return mensaje
    }

    return "Hola Mundo"
}

console.log(saludo())
console.log(saludo("Alejo"))

function sumar(n1, n2 = 10) {
    return n1 + n2;
}

console.log(sumar(1, 2))
console.log(sumar(5))

// Funciones anónimas
const saludar2 = function (name /* Parámetros opcionales */) {
    console.log(name)
    if (name) {
        return "Hola " + name
    }

    return "Hola Mundo"
};

// Funciones flecha = arrow functions
const saludar3 = (name) => {
    console.log(name)
    if (name) {
        return "Hola " + name
    }

    return "Hola Mundo"
}

saludar2("Alejo");

sumar1(2, 3)

// Retorno explícito
const sumar1 = (n1, n2) => {
    return n1 + n2
}

// Retorno implícito
const sumar2 = (n1, n2) => n1 + n2;
