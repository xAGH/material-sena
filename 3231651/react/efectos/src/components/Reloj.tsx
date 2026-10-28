import { useEffect, useState } from "react";

export function Reloj() {
    const [ahora, setAhora] = useState(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => {
            console.log("Actualiza el intervalo")
            setAhora(new Date())
        }, 1000);
        return () => clearInterval(intervalo);
    }, []);

    return <p>Hora en Armenia: {ahora.toLocaleTimeString("es-CO")}</p>;
}