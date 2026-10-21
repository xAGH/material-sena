import type { Ruta } from "../datos/rutas";
import "./TarjetaRuta.css";

interface TarjetaRutaProps {
    ruta: Ruta
}

export function TarjetaRuta({ ruta: ruta }: TarjetaRutaProps) {

    return <section>
        <p>Nombre: {ruta.nombre}</p>
        <p>Municipio: {ruta.municipio}</p>
        <p>Duración: {ruta.duracionHoras}h</p>
        <p>Precio: ${ruta.precio} COP</p>
        <p>Dificultad: {ruta.dificultad}</p>
        <p>{
            ruta.duracionHoras < 5
                ? "Ruta corta"
                : "Jornada completa"
        }</p>
        {ruta.incluyeTransporte && <p>Incluye transporte</p>}
    </section>

}