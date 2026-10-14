import type { Ruta } from "../datos/rutas";

interface TarjetaRutaProps {
  ruta: Ruta;
}

// Paso 3: texto de la dificultad según el valor
const textoDificultad = {
  baja: "Dificultad baja",
  media: "Dificultad media",
  alta: "Dificultad alta",
};

export function TarjetaRuta({ ruta }: TarjetaRutaProps) {
  const precio = ruta.precio.toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });

  return (
    <article>
      <h3>{ruta.nombre}</h3>
      <p>{ruta.municipio} · {ruta.duracionHoras} horas · {precio}</p>
      <p>{textoDificultad[ruta.dificultad]}</p>

      {/* Paso 5: ternario (dos opciones) */}
      <p>{ruta.duracionHoras < 5 ? "Ruta corta" : "Jornada completa"}</p>

      {/* Paso 4: && (una sola opción: se muestra o no se muestra) */}
      {ruta.incluyeTransporte && <strong>Incluye transporte</strong>}

      {/* Paso 11: campo sin conectar a nada, para probar el efecto de key */}
      <div>
        <input type="number" aria-label="Personas" />
      </div>
    </article>
  );
}
