import "./App.css";
import hero from "./assets/hero.png";

function App() {

  const shopName = "Tienda del mejor café - Salento"

  return (
    <>
      { /* Esto es un comentario */}
      <h1 className="">{shopName}</h1>
      <p>Hola mundo</p>

      <label htmlFor=""></label>

      <img src={hero} alt="Imagen hero" />
      <img src="/favicon.svg" alt="Imagen del ícono" />

      <button tabIndex={2}></button>
    </>
  )
}

export default App
