import type { Ruta } from "../datos/rutas";
import { TarjetaRuta } from "./TarjetaRuta";

interface RutasPorMunicipioProps {
  rutas: Ruta[];
}

function filtrarRutaPorMunicipio(rutas: Ruta[], municipio: string) {
  return rutas
    .filter((ruta) => ruta.municipio === municipio)
}

// Reto: agrupar por municipio
export function RutasPorMunicipio({ rutas }: RutasPorMunicipioProps) {
  const municipios = rutas.map((ruta) => ruta.municipio)
  // Set elimina los repetidos; [...] lo convierte otra vez en arreglo
  const municipiosSinRepetir = [...new Set(municipios)];

  return (
    <>
      {municipiosSinRepetir.map((municipio) => (
        // key del nivel externo: el nombre del municipio
        <section key={municipio}>
          <h2>{municipio}</h2>
          {filtrarRutaPorMunicipio(rutas, municipio)
            .map((ruta) => (
              // key del nivel interno: el id de la ruta
              <TarjetaRuta key={ruta.id} ruta={ruta} />
            ))}
        </section>
      ))}
    </>
  );
}
