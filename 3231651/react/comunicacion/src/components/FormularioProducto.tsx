import { useState, type SubmitEvent } from "react";
import type { NuevoProducto } from "../types";

interface FormularioProductoProps {
    onAgregar: (producto: NuevoProducto) => void;
    // onEliminar: (id: string) => void
}

const initialValue: NuevoProducto = {
    nombre: "",
    precio: 0,
    stock: 0
}

export function FormularioProducto({ onAgregar }: FormularioProductoProps) {
    const [producto, setProducto] = useState<NuevoProducto>(initialValue);

    function enviar(evento: SubmitEvent<HTMLFormElement>) {
        evento.preventDefault();

        onAgregar(producto);
    }

    return <form onSubmit={enviar}>{/* campos controlados */}</form>;
}