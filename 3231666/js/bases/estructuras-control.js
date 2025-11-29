// If
if (true) {
} else if (true) {
} else {
}

// Switch
const dia = "LUNES";
switch (dia) {
    case "LUNES":
        break;
    case "MARTES":
        break;
    default:
        break;
}

// Bucles
for (let i = 0; i < 10; i++) {}

while (dia) {
    break;
}

do {
    break;
} while (dia);

const numeros = [1, "HOLA", 3, 4, true];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

for (const numero of numeros) {
    console.log(numero);
    continue;
    break;
}
