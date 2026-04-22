type NumeroOCadena = number | string | boolean | null | undefined
type B = boolean
type C = NumeroOCadena | B

const ejemplo: NumeroOCadena = "Hola"
const ejemplo2: NumeroOCadena = 1
const ejemplo3: B = true
const ejemploe4: NumeroOCadena[] = [1, 2, 3, "", ""]
const ejemplo5: C = true
const name: string | null | number = 1

type Persona2 = {
    name: string;
    age: number;
    email: string;
    phone: string;
    web?: string;
}

interface Persona {
    name: string;
    age: number;
    email: string;
    phone: string;
    web?: string;
}

const persona: Persona = {
    name: "Alejo",
    age: 23,
    email: "alejo@mail.com",
    phone: "+57 320323926893",
    web: "xagh"
}

/*
UX -> Experiencia de usuario
CX -> Experiencia de cliente
DX -> Experiencia de desarrollador
 */

// Type Narrowing -> type