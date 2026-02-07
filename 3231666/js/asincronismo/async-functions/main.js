function obtenerUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();
            if (random > 0.5) {
                resolve({ id: 1, name: "Alejo" });
            } else {
                reject(
                    new Error(`El número aleatorio es menor que 0.5: ${random}`)
                );
            }
        }, 2000);
    });
}

async function saludar() {
    try {
        const usuario = await obtenerUsuario();
        console.log("Hola ", usuario.name);
        return usuario;
    } catch (error) {
        console.log(error);
    }
}

saludar().then((usuario) => console.log(usuario));
