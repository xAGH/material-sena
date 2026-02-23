async function saludar(name) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const num = Math.random();
            if (num > 0.5) {
                res(`Hola ${name}`);
            } else {
                rej();
            }
        }, 1000);
    });
}

async function main() {
    try {
        console.log("Inicio de programa");
        const resultado = await saludar("Alejo");
        console.log(resultado);
        console.log("Final de programa");
    } catch {
        console.log("Error en el programa");
    }
}

main();
