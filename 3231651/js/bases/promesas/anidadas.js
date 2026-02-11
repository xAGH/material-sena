function obtenerUsusario(id) {
    return new Promise((res, rej) => {
        const user = {
            id: 1,
            name: "Alejo",
            cedula: 100,
        };

        setTimeout(() => {
            if (id === 1) {
                res(user);
            } else {
                rej("Usuario no encontrado");
            }
        }, 3000);
    });
}

function obtenerProductos(user) {
    return new Promise((res) => {
        setTimeout(() => {
            const productos = [
                {
                    id: 1,
                    name: "Lapiz",
                    precio: 1000,
                },
                {
                    id: 2,
                    name: "Borrador",
                    precio: 400,
                },
            ];
            res(productos);
        }, 2000);
    });
}

function calcularPromedio(productos) {
    return new Promise((res) => {
        const promedio = 700;
        const promedioReal =
            productos.reduce((acc, cur) => {
                acc += cur;
                return acc;
            }, 0) / productos.length;
        res(promedio);
    });
}

function main() {
    obtenerUsusario(1)
        .then((user) => {
            return obtenerProductos(user);
        })
        .then((productos) => {
            return calcularPromedio(productos);
        })
        .then((promedio) => {
            console.log(promedio);
        })
        .catch((err) => {
            console.error(err);
        });
}

main();
