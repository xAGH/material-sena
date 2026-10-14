import { rutas } from "./datos/rutas";
import type { Dificultad, Ruta } from "./datos/rutas";
import { ListaRutas } from "./components/ListaRutas";
// Reto adicional: descomenta este import y el uso de abajo al terminar la práctica
// import { RutasPorMunicipio } from "./components/RutasPorMunicipio";

// Paso 7: ninguna función modifica el arreglo original.

// filter ya devuelve un arreglo nuevo.
function filtrarPorDificultad(lista: Ruta[], dificultad: Dificultad): Ruta[] {
  return lista.filter((ruta) => ruta.dificultad === dificultad);
}

// "criterio" solo admite estos dos textos; cualquier otro da error de TypeScript.
type Criterio = "precio" | "duracion";

// sort SÍ modifica el arreglo, por eso primero copiamos con [...lista].
function ordenarRutas(lista: Ruta[], criterio: Criterio): Ruta[] {
  const copia = [...lista];
  if (criterio === "precio") {
    return copia.sort((a, b) => a.precio - b.precio);
  }
  return copia.sort((a, b) => a.duracionHoras - b.duracionHoras);
}

export function Practica() {
  // Paso 8: valores fijos (más adelante serán estado con botones)
  // Paso 10: prueba escribir "extrema" y lee el error de TypeScript. Luego restáuralo.
  const filtradas = filtrarPorDificultad(rutas, "baja");
  const resultado = ordenarRutas(filtradas, "precio");

  return (
    <main>
      <h1>Rutas turísticas del Quindío</h1>

      <p>Se encontraron {resultado.length} rutas</p>
      <ListaRutas rutas={resultado} />

      {/* Reto adicional: descomenta cuando termines el paso 11 */}
      {/* <RutasPorMunicipio rutas={rutas} /> */}
    </main>
  );
}
