class Persona {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    saludar() {}

    get name() {}

    set name(newName) {}
}

const persona = new Persona("Alejo", 22);

const carro = {
    modelo: 2021,
    marca: "Chevrolet",
    color: "Rojo",
    arrancar: () => console.log("Arranca"),
};

carro.modelo = "";

const horario = {
    lunes: "de 12 a 6",
    martes: "de 5 a 10",
};

const estudiantes = [
    {
        nombre: "Alejo",
        edad: 22,
        horasDeClase: 10,
        horario,
    },
    {
        nombre: "Alejo",
        edad: 22,
        horario: {
            lunes: "de 12 a 6",
            martes: "de 5 a 10",
        },
    },
];
