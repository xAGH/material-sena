function obtenerUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, nombre: "Alejo" });
        }, 1000);
    });
}

function obtenerPedidos(usuarioId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Pedido 1", "Pedido 2"]);
        }, 1000);
    });
}

function obtenerDetallePedido(pedido) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ pedido, precio: 50 });
        }, 1000);
    });
}

obtenerUsuario().then((usuario) => {
    console.log("Se ha obtenido el usuario: ", usuario);
    obtenerPedidos(usuario.id).then((pedidos) => {
        console.log("Se han obtenido los pedidos: ", pedidos);
        pedidos.forEach((producto) => {
            obtenerDetallePedido(producto).then((detalle) =>
                console.log("Detalle del producto: " + detalle.precio)
            );
        });
    });
});
