import { useState } from 'react'
import Form from './Form'
import Turnos from './Turnos'
import './App.css'

function App() {
 
  const [pacientes,setPacientes]=useState([]); // Creamos un estado cuyo valor inicial es un array

  const addPatient =(patient) =>{  
    setPacientes([...pacientes,patient]) //utilizando el spread operator creamos un nuevo array y lo asignamos al estado con su setter
  }
  

  return (
    <div className='App'>
      <h1>Registro de Turnos</h1>
      <Form onAddPatient={addPatient}/>
      <Turnos pacientes={pacientes}/>
      
    </div>
  )
}

export default App
