import { useState } from "react";
import { menu, type ItemCarrito, type Producto } from "./datos/menu";
import "./Main.css";
import { Menu } from "./Menu";

export function Main() {
    const [carrito, setCarrito] = useState<ItemCarrito[]>([])

    const agregar = (producto: Producto) => {
        const item = carrito.find((item) => item.producto.id === producto.id);
        const itemEnCarrito = item !== undefined;
        let nuevaLista: ItemCarrito[] = []

        if (itemEnCarrito) {
            nuevaLista = carrito.map((item) => {
                if (item.producto.id === producto.id) {
                    return { ...item, cantidad: item.cantidad + 1 }
                } else {
                    return item
                }
            })
        } else {
            nuevaLista = [...carrito, { producto, cantidad: 1 }]
        }
        setCarrito(nuevaLista)
    }

    const eliminar = (itemAEliminar: ItemCarrito) => {
        const nuevaCantidad = itemAEliminar.cantidad - 1;
        let nuevaLista: ItemCarrito[];

        if (nuevaCantidad > 0) {
            nuevaLista = carrito.map((item) => {
                if (item.producto.id === itemAEliminar.producto.id) {
                    return { ...item, cantidad: nuevaCantidad }
                } else {
                    return item
                }
            })
        } else {
            nuevaLista = carrito.filter(item => item.producto.id !== itemAEliminar.producto.id)
        }
        setCarrito(nuevaLista)
    }

    const mensaje = <p>Aún no hay productos en el pedido</p>;
    const listaCarrito =
        <>
            <p>Total: {carrito.reduce((acc, cur) => {
                return acc += cur.cantidad * cur.producto.precio
            }, 0)}</p>
            {carrito.map(item =>
                <div key={item.producto.id} className="container">
                    <p>Nombre del producto: {item.producto.nombre}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Subtotal: {item.producto.precio * item.cantidad}</p>
                    <button onClick={() => eliminar(item)}>-</button>
                    <button onClick={() => agregar(item.producto)}>+</button>
                </div>
            )}
        </>

    return <>
        <Menu onAgregar={agregar} productos={menu} />
        {carrito.length > 0 ? listaCarrito : mensaje}
    </>
}