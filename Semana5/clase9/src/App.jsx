import { useState } from 'react'
import './App.css'
import Pedido from './pedido'

function App() {

  const [mostrarComponente, setMostrarComponente] = useState(true);

  const toggleComponent = ()=>{
    setMostrarComponente(!mostrarComponente);
  }

  return (
    <div>
      <h1>Hace tu pepdido</h1>
      {mostrarComponente &&  <Pedido/>}
      <button onClick={toggleComponent} >{mostrarComponente ? "Cancelar Pedido" : "Cargar Pedido"}</button>
    </div>
  )
}

export default App
