const promesa = new Promise((res, rej) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            res("Se cumplió la promesa");
        } else {
            rej("Se rechazó la promesa");
        }
    }, 2000);
});

promesa
    .then((respuesta) => {
        console.log(respuesta);
    })
    .catch((respuesta) => {
        console.log(respuesta);
    });
