const name: string = "";
const age: number = 1;
const isActive: boolean = true;
const date: Date = new Date();
const nulo: null = null;
const indefinido: undefined = undefined;
const cualquiera: any = Symbol.apply;

class PersonaClass {}

const personaClass: PersonaClass = new PersonaClass();

enum Rol {
    ADMIN,
    USUARIO,
    CLIENTE,
}

type Genero = "M" | "F" | "O";

enum Talla {
    XS,
    S,
    M,
    L,
    XL,
}

interface Persona {
    name: string;
    age: number;
    talla: Talla;
    genero: Genero;
    saludar: (name: string) => string;
    documento?: number;
}

const persona: Persona = {
    name: "Alejo",
    age: 22,
    talla: Talla.XL,
    genero: "O",
    saludar: (x: string): string => {
        return "";
    },
};
