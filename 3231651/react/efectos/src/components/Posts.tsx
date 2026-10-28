import { useEffect, useState } from "react";
import type { EstadoCarga, PostResponse } from "../types";

export function Posts() {
    const [carga, setCarga] = useState<EstadoCarga<PostResponse[]>>({ estado: "cargando" });

    useEffect(() => {
        const controlador = new AbortController();

        async function cargar() {
            try {
                const respuesta = await fetch("/ejemplo.json", { signal: controlador.signal });
                if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`);
                const datos: unknown = await respuesta.json();
                if (!Array.isArray(datos)) throw new Error("La respuesta no tiene la forma esperada");
                setCarga({ estado: "exito", datos });
            } catch (error) {
                if (controlador.signal.aborted) return;
                setCarga({ estado: "error", mensaje: error instanceof Error ? error.message : "Error desconocido" + error });
            }
        }

        cargar();
        return () => controlador.abort();
    }, []);

    if (carga.estado === "cargando") return <p role="status">Cargando posts...</p>;
    if (carga.estado === "error") return <p role="alert">No se pudieron cargar los datos: {carga.mensaje}</p>;

    return (
        <ul>
            {carga.datos.map((p) => <li key={p.id}>{p.title}</li>)}
        </ul>
    );
}