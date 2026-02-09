// VARIABLES

let name = "Alejo";
const name2 = 2;
let age = "Alejo";
const nombres: string[] = [];

const nulo: null = null;
const indefinido: undefined = undefined;
let cualquiera: any = [""];
cualquiera = 1;
cualquiera = true;
cualquiera = "";
let nunca: never;

/* Tipos

number = Números reales
string = Cadenas
boolean = Boleanos
<tipo>[] = Array
null
undefined
never
any

*/

// ESTRUCTURAS DE CONTROL
if (true) {
} else if (true) {
} else {
}

switch ("") {
    case "":
        break;
    default:
        break;
}

// CICLOS
for (let i = 0; i < 10; i++) {}

while (true) {}
do {} while (true);

// FUNCIONES
function sumar(num1: number, num2: number): number {
    return num1 + num2;
}

const sumar2 = function (num1: number, num2: number): number {
    return num1 + num2;
};

const sumar3 = (num1: number, num2: number): number => {
    return num1 + num2;
};
