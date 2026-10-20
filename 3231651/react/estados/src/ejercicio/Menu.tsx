import "./Menu.css";
import type { Producto } from "./datos/menu";

interface MenuProps {
    productos: Producto[],
    onAgregar: (producto: Producto) => void
}

export function Menu({ productos, onAgregar }: MenuProps) {
    return <>
        {productos.map(producto =>
            <article key={producto.id}>
                <h2>{producto.id} - {producto.nombre}</h2>
                <p>${producto.precio} COP</p>
                <button onClick={() => onAgregar(producto)}>Agregar</button>
            </article>
        )}
    </>

}