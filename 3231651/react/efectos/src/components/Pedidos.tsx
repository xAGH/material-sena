import { useEffect, useState } from "react";

export function Pedido() {
    const [cantidad, setCantidad] = useState(0);

    useEffect(() => {
        console.log("Entra al efecto")
        document.title = `Productos: ${cantidad}`
    }, [cantidad]);

    return <button onClick={() => setCantidad(cantidad + 1)}>Agregar ({cantidad})</button>;
}