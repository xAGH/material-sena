import "./App.css";
import hero from "./assets/hero.png";
import { Header } from "./components/Header";

function App() {

  const shopName = "Tienda del mejor café - Salento"

  return (
    <>
      { /* Esto es un comentario */}
      <Header subtitle="dbaidgsajddkj" shopName={shopName}>
        <div>
          <button>Click Me</button>
        </div>
      </Header>

      <label htmlFor=""></label>

      <img src={hero} alt="Imagen hero" />
      <img src="/favicon.svg" alt="Imagen del ícono" />

      <button tabIndex={2}>Click me</button>


    </>
  )
}

export default App
