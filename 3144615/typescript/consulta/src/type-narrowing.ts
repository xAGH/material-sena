type Valor = string | number | boolean;

class Persona {}

// Instancias
const persona = new Persona();

// Objetos (Prototipos)
const persona2 = {};

const hola: Valor = 1;
const adios: Valor = "Mensaje";
const s: any = true;

type Talla = "S" | "XS" | "M" | "L";

interface Persona {
    name: string;
    talla: Talla;
    age: number;
    enfermedad?: string | undefined;
}

const x: Persona = {
    age: 2,
    name: "Alejo",
    talla: "S",
    enfermedad: undefined,
};
