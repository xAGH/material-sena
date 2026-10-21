import { useState } from 'react';
import "./App.css";
import { ListaRutas } from './components/ListaRutas';
import { rutas, type Dificultad, type Ruta } from "./datos/rutas";

type Criterio = "precio" | "duracion"
type Order = "asc" | "des"

function filtrarPorDificultad(rutas: Ruta[], dificultad: Dificultad) {
  if (dificultad === "todas") return rutas

  return rutas.filter((ruta) => ruta.dificultad === dificultad);
}

function ordenarRutas(rutas: Ruta[], criterio: Criterio, order: Order = "asc") {
  const campo = criterio === "precio" ? "precio" : "duracionHoras"
  return rutas.toSorted((a, b) =>
    order === "asc"
      ? a[campo] - b[campo]
      : b[campo] - a[campo]
  )
}

function App() {
  const [dificultad, setDificultad] = useState<Dificultad>("todas")
  const [criterioFiltro, setCriterioFiltro] = useState<Criterio>("duracion")
  const [ordenFiltro, setOrdenFiltro] = useState<Order>("asc");

  const filtradas = filtrarPorDificultad(rutas, dificultad)
  const ordenadas = ordenarRutas(filtradas, criterioFiltro, ordenFiltro)

  const dificultadBotones: Dificultad[] = ["baja", "media", "alta", "todas"]
  const criterioBotones: Criterio[] = ['duracion', 'precio']
  const orderBotones: Order[] = ['asc', 'des']

  return <>
    <div className='row-btns'>
      <p>Dificultad:</p>
      {dificultadBotones.map(value => <button onClick={() => { setDificultad(value) }}>{value}</button>)}
    </div>
    <div className='row-btns'>
      <p>Criterio:</p>
      {criterioBotones.map(value => <button onClick={() => { setCriterioFiltro(value) }}>{value}</button>)}
      <br />
      <p>Orden:</p>
      {orderBotones.map(value => <button onClick={() => { setOrdenFiltro(value) }}>{value}</button>)}
    </div>
    <p>Se han encontrado {ordenadas.length} rutas</p>
    <ListaRutas rutas={ordenadas} />
  </>

}

export default App