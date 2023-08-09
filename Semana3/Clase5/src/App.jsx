import { useState } from 'react'
import './App.css'
import Hijo from './Hijo'

function App() {
  const [text, setText] = useState()

  return (
    <>
      <h1>Prueba Hooks - UseState</h1>
      <div className="card">
        <button onClick={() => setText("Apretaste el Boton")}>
          No apretar
        </button>
        <p>
          <Hijo text={text} />
        </p>
      </div>

    </>
  )
}

export default App
