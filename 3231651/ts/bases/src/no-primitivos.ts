// Estos serán instancias
class Persona1 {}

const persona: Persona1 = new Persona1();

// Todo tipo que derive de una clase es un tipo no primitivo

// Type narrowing
// Operadores
// | -> Unión (en un contexto de tipos)
// & -> Concatenación (en un contexto de tipos)
type Alejo = number | string;

const alejo: Alejo = "1";

type ZipCode = {
  zipCode: number;
};

type Address = {
  street: string;
  city: string;
};

type Persona = {
  name: string;
  age: number;
  address: Address & ZipCode;
};

// Estos serán objetoss
const obj: Persona = {
  name: "",
  age: 1,
  address: {
    city: "Armenia",
    street: "Calle 8",
    zipCode: 630004,
  },
};

type Rol = "USER" | "ADMIN" | "CLIENT";

type Numeros = 1 | 2 | 3 | boolean;

const rol: Rol = "USER";
