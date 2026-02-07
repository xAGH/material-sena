class Persona {
    private name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    saludar(): void {
        console.log("Hola ", this.name);
    }
}

const persona = new Persona("Alejo", 22);
const persona2 = new Persona("Alejo", 22);
