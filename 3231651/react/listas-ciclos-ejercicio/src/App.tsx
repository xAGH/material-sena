import { TarjetaRuta } from "./components/TarjetaRuta";
import { rutas, type Dificultad, type Ruta } from "./datos/rutas";

function filtrarPorDificultad(rutas: Ruta[], dificultad: Dificultad) {
  return rutas.filter((ruta) => ruta.dificultad === dificultad);
}

function ordenarRutas(rutas: Ruta[], criterio: "precio" | "duracion", order: "asc" | "des" = "asc") {
  const campo = criterio === "precio" ? "precio" : "duracionHoras"
  return rutas.toSorted((a, b) =>
    order === "asc"
      ? a[campo] - b[campo]
      : b[campo] - a[campo]
  )
}

function App() {

  const filtradas = filtrarPorDificultad(rutas, "todas")
  const ordenadas = ordenarRutas(filtradas, "precio", "des")

  return ordenadas.map((ruta) => <TarjetaRuta key={ruta.id} ruta={ruta} />)

}

export default App