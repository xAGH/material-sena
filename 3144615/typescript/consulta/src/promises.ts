const promise = new Promise<string>((res, rej) => {
    setTimeout(() => {
        const num = Math.random();

        if (num < 0.5) {
            res("La promesa se resolvió");
        } else {
            rej("La promesa no se resolvió");
        }
    }, 2000);
});

promise
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((texto) => {
        console.log(texto);
    })
    .finally(() => {
        console.log("La promesa finalizó");
    });
