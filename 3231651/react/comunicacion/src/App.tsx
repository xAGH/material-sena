import { useState } from "react";
import { FormularioProducto } from "./components/FormularioProducto";
import { ListaProductos } from "./components/ListaProductos";
import type { NuevoProducto, Producto } from "./types";

function App() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [idSeleccionado, setIdSeleccionado] = useState("idSeleccionado")

  function agregar(nuevoProducto: NuevoProducto) {
    const producto: Producto = {
      id: crypto.randomUUID(),
      nombre: nuevoProducto.nombre,
      precio: nuevoProducto.precio,
      stock: nuevoProducto.stock,
    };
    setProductos((lista) => [...lista, producto])
  }

  return <>
    <FormularioProducto onAgregar={agregar} />
    <ListaProductos productos={productos} />
  </>

}

export default App;