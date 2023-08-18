import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [estudiante,setEstudiante] = useState({});

  const handleSubmit= (e)=> {
    e.preventDefault();
    
    const prueba = {
      nombre : nombre,
      apellido : apellido
    };
    setEstudiante(prueba)

    setNombre("");
    setApellido("");
  };

  return (
    <div className='App'>
      <h1>Carga de Estudiante</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ingrese su Nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
        <input type="text" placeholder="Ingrese su Apellido" value={apellido} onChange={(e)=>setApellido(e.target.value)} />
        <button type="submit">Guardar Estudiante</button>
      </form>

      <Card nombre={estudiante.nombre} apellido={estudiante.apellido} />

    </div>
  )
}

export default App
