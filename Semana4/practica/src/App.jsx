import { useState } from 'react'
import './App.css'
import { Card } from './Card'
import { Form } from './Form'


function App() {

  const [peliculas, setPeliculas] = useState([]);

  const agregarPelicula = (peli)=>{
    setPeliculas([...peliculas,peli]);
  }


  return (
  <div className='App'>
    <h1>Agregar peliculas</h1>
    <Form onAgregarPelicula = {agregarPelicula} />
    <Card peliculas = {peliculas} />
  </div>
  )
}

export default App
