import type { Ruta } from "../datos/rutas";
import { TarjetaRuta } from "./TarjetaRuta";

interface ListaRutasProps {
    rutas: Ruta[]
}

export function ListaRutas({ rutas }: ListaRutasProps) {

    if (rutas.length === 0) {
        return <p>No hay rutas con esos filtros</p>
    }

    return rutas.map((ruta) => <TarjetaRuta key={ruta.id} ruta={ruta} />)
}