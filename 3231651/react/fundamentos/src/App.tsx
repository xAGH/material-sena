import './App.css';
import { Header } from "./components/Header";

function App() {
  const tienda = "Café La Montaña";
  const municipio = "Salento";
  const precioLibra = 28000;
  const anioFundacion = 2012;

  return (
    <main className="container">
      {/* Esto es un comentario */}
      <Header shopName={tienda}>
        <div className='square'></div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, cum quasi voluptatum debitis assumenda harum distinctio quae inventore mollitia necessitatibus nisi repellat eligendi ad labore neque reprehenderit veritatis pariatur? Eveniet.</p>
      </Header>
      <img src="/cafe.png" alt="Café molido" />
      <p>Tostamos en {municipio} desde hace {new Date().getFullYear() - anioFundacion} años.</p>
      <p>Libra de café: {precioLibra.toLocaleString("es-CO", { style: "currency", currency: "COP" })}</p>
    </main>
  );
}

export default App
