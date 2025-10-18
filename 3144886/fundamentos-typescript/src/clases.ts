class Persona {
    public name: string;
    private __id: number;
    protected _age: number;

    constructor(name: string, id: number, age: number) {
        this.name = name;
        this.__id = id;
        this._age = age;
    }

    sayHi(): string {
        return `Hola, soy ${this.name}`;
    }

    get id() {
        console.log("Entra el getter");
        return this.__id;
    }

    set id(id: number) {
        this.__id = id;
    }
}

class Profe extends Persona {
    area: string;

    constructor(name: string, id: number, age: number, area: string) {
        super(name, id, age);
        this.area = area;
    }

    sayHi(): string {
        return `Hola, soy el profesor ${this.name}`;
    }
}

const persona: Persona = new Persona("Alejo", 123, 22);
const profesor: Profe = new Profe("Alejo", 123, 22, "ADSO");

const profesor2: Persona = new Profe("Alejo2", 123, 22, "ADSO");

console.log(persona.sayHi());
console.log(profesor.sayHi());

interface Trabajable {
    trabajar(): void;
}

class Profesor implements Trabajable {
    trabajar(): void {
        console.log("Enseña");
    }
}

class Aseador implements Trabajable {
    trabajar(): void {
        console.log("Asea");
    }
}

class Coordinador implements Trabajable {
    trabajar(): void {
        console.log("Coordina");
    }
}

// Tipos básicos
const cadena: string = "Cadena de texto";
const numero: number = 123.1312;
const boleano: boolean = true;
const date: Date = new Date();
const nulo: null = null;
const indefinido = undefined;
const array1: string[] = [];
const array2: Array<string> = new Array();

// Tipos unión
const cadenaONumero: string | number = "";
const listaCadenaONumero: (string | number)[] = ["Hola", 1];

// Tipos literales
const literal: 1 = 1;

type Estado = "PENDIENTE" | "FINALIZADO"

// Tipos interfaces
interface Tarea {
    titulo: string;
    descripcion: string;
    estado: Estado;
}

const tarea: Tarea = {
    titulo: "Hacer la tarea",
    descripcion: "Se debe hacer la tarea de ts",
    estado: "FINALIZADO",
};

// Tipos genéricos
interface Personas<T> {
    numero: number;
    deDondeSon: string;
    listaPersonas: T[];
}

const personas: Personas<Profesor> = {
    deDondeSon: "SENA",
    numero: 4,
    listaPersonas: [new Profesor(), new Profesor(), new Profesor()],
};

// Type narrowing
type Numero = number;

const variable: Numero = 121298;