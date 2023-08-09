import { useState } from 'react'
import './App.css'
import Hijo from './Hijo'

function App() {
  const [text, setText] = useState([])

  return (
    <>
      <h1>Prueba Hooks - UseState</h1>
      <div className="card">
        <button onClick={() => setText([...text, <li key={text.length}>Apretaste el Boton</li>])}>
          No apretar
        </button>
        <div>
          <Hijo text={text} />
        </div>
      </div>

    </>
  )
}

export default App
