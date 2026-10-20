import { useState, type MouseEvent } from "react";
import { Main } from "./ejercicio/Main";

function App() {
  const [contador, setContador] = useState<number>(0); // Hooks -> Parecido a Signal
  const contadorAlCuadrado = () => contador ** 2;

  const incrementarContador = (event: MouseEvent<HTMLButtonElement>) => {
    setContador((actual) => actual + 1)
    setContador((actual) => actual + 1)
    setContador((actual) => actual + 1)
    console.log(contador)
  };

  return (
    <>
      <Main />
      {/* <p>El valor del contador es {contador}</p>
      <p>El valor del contador al cuadrado es {contadorAlCuadrado()}</p>
      <button onClick={incrementarContador}>Incrementar</button> */}
    </>
  )

}

export default App
