import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import type { Post } from "./types";

function useContador(inicial: number) {
  const [valor, setValor] = useState(inicial);
  const sumar = () => setValor((v) => v + 1);
  const reiniciar = () => setValor(inicial);
  return { valor, sumar, reiniciar };
}

function Pedido() {
  const tintos = useContador(0);
  const pandebonos = useContador(0);
  return <>
    <button onClick={tintos.sumar}>Tintos: {tintos.valor}</button>
    <button onClick={pandebonos.sumar}>Pandebonos: {pandebonos.valor}</button>
  </>;
}

function App() {
  // return <Pedido />
  const url = "https://jsonplaceholder.typicode.com/posts"
  const posts = useFetch<Post[]>(url, Array.isArray);

  if (posts.status === "pending") return <h1>Cargando posts...</h1>
  if (posts.status === "error") return <p>Error al cargar posts: {posts.error}</p>

  return <>
    {posts.status === "success" && posts.data.map((post) => {
      return <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>Creado por el usuario con id {post.userId}</p>
      </article>
    })}
  </>
}

export default App
