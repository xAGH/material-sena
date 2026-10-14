import type { Ruta } from "../datos/rutas";
import { TarjetaRuta } from "./TarjetaRuta";

interface ListaRutasProps {
  rutas: Ruta[];
}

export function ListaRutas({ rutas }: ListaRutasProps) {
  // Paso 9: retorno temprano para el caso vacío
  if (rutas.length === 0) {
    return <p>No hay rutas con esos criterios.</p>;
  }

  return (
    <section>
      {/*
        Paso 6 y 11: la key debe ser un valor estable y único de cada ruta.

        Con key={indice}: React identifica las tarjetas por POSICIÓN. Al reordenar,
        la tarjeta de la posición 0 es "la misma" para React, así que reutiliza su
        <input> y el número se queda en la POSICIÓN (ahora con otra ruta).

        Con key={ruta.id}: React identifica las tarjetas por RUTA. Al reordenar,
        mueve la tarjeta completa con su <input> y el número se queda con la RUTA.
      */}
      {rutas.map((ruta) => (
        <TarjetaRuta key={ruta.id} ruta={ruta} />
      ))}
    </section>
  );
}
