import type { Producto } from "../types";

interface ListaProductosProps {
    productos: Producto[]
}

export function ListaProductos({ productos }: ListaProductosProps) {

    return <div>
        {productos.map((producto) => <p key={producto.id}>{producto.nombre}</p>)}
    </div>

}