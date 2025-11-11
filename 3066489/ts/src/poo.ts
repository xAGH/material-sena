class Persona {

    private _nombre: string;
    private _edad: number;

    constructor(nombre: string, edad: number) {
        this._edad = edad;
        this._nombre = nombre
    }

    get nombre() {
        return this._nombre
    }

    set nombre(nuevoNombre: string) {
        this._nombre = nuevoNombre;
    }

    get edad() {
        return this._edad;
    }

    set edad(nuevaEdad: number) {
        this._edad = nuevaEdad;
    }

    saludar(): void {
        console.log("Hola")
    }

}

class Docente extends Persona {
    private _especialidad: string;

    constructor(nombre: string, edad: number, especialidad: string) {
        super(nombre, edad)
        this._especialidad = especialidad
    }

}

const persona: Persona = new Persona("Alejo", 22)


class Animal {
}

interface Desplazable {

    desplazar(): void

}

interface Persona2 {
    name: string;
    age: number
}

const objeto: Persona2 = {
    age: 12,
    name: ""
}

interface Animal {

    nombre: string
    edad: number

    alimentar(): void;
    desplazar(): string;
    jugar(minutes: number): boolean;

}

class Perro implements Animal {

    nombre: string = "";
    edad: number = 1;

    alimentar(): void {
        
    }
    desplazar(): string {
        return ""
    }
    jugar(minutes: number): boolean {
        return true
    }
}

class Ave implements Desplazable {

    desplazar(): void {
        
    }

}