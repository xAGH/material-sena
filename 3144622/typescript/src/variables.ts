/* Definición de variables

Scope (hoising)

var -> Scope global mutable
let -> Scope local o de bloque mutable
const -> Scope local o de bloque inmutable

*/
let a = "";

function b() {
    let a = 1;

    if (true) {
        let a = true;

        while (true) {
            let a = "";

            if (true) {
                let a = () => {};
                a;
            }
        }
    }
}

// ¿Cuáles vamos a usar?
// Siempre inicamos con const, en caso de la necesidad de cambiar
// el valor de la variable utilizaremos let.
let name = "";

const age: number = 1;

/* Tipos

- number
- string
- boolean
- any
- undefined
- null
- Map
- Record
- never
- void
- number[]
- [number]

*/

const numbers1: number[] = [];
const numbers2: [number] = [1];

let x: any = "";
x = 1;
x = true;
x = Symbol.caller;
