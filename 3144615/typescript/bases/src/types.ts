const nombre: String = "Alejo";
// Interpolación con backticks
const saludo: String = `Hola ${nombre}`;

const edad: number = 0;

const mayorDeEdad: boolean = true;

// [String] === String[]
const nombres: String[] = [""];
const nombresa: number[] = [0];

const persona = {
    name: "Alejo",
    age: 22,
    skills: {
        front: [],
        back: {},
    },
};

class Persona {
    constructor(name: String, age: Number) {}
}

const personaClass: Persona = new Persona("ALejo", 23);

interface Profesor {
    name: String;
    age: Number;
    skils: Object;

    calculate: () => void;
}

const profesor: Profesor = {
    name: "Alejo",
    age: 22,
    skils: {},

    calculate: () => {},
};

function sumar1(num1: number, num2: number): number {
    return num1 + num2;
}

(num1: number, num2: number): number => {
    return num1 + num2;
};

//function (num1: number, num2: number): number {
//  return num1 + num2;
//}

function estudiar(name: String): String {
    return `${name} está estudiando`;
}

function sena(accion: (name: String) => String) {
    // ...

    accion("Alejo");
}

sena(estudiar);
