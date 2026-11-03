import { useState } from "react";

export function Counter() {
    const [sales, setSales] = useState<number>(0);

    function add() {
        // setSales(sales + 1); // Modifica el estado en el próximo render
        setSales((sales) => sales + 1); // Modifica el estado en el momento
        console.log(sales);
    }

    return (
        <>
            <p>Pedidos: {sales}</p>
            <button onFocus={() => console.log("Tiene foco")} onClick={add}>Agregar</button>
        </>
    );
}

// Hooks -> Funciones utilitarias de React
// useState(inicial) -> [estado, setter]