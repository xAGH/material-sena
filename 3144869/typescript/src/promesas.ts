const promesa = new Promise((res, rej) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            res("Resolvió");
        } else {
            rej("Rechazó");
        }
    }, 5000);
});

console.log(promesa);

promesa
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((mensaje) => {
        console.log(mensaje);
    });

console.log("Hola Mundo");
