import { useState } from 'react';
import './App.css';
import { Pedido } from './components/Pedidos';
import { Posts } from './components/Posts';
import { Reloj } from './components/Reloj';

function App() {
  const [show, setShow] = useState(false);
  return <>
    <button onClick={() => setShow(value => !value)}>{show ? 'Ocultar' : 'Ver'} componente pedidos</button>
    {show && <Pedido />}
    {show && < Reloj />}
    <Posts />
  </>
}

export default App;