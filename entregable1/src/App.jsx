import { useState } from 'react';
import Card from './Card';
import './App.css'

function App() {
  // Aqui deberias agregar los estados y los handlers para los inputs
  const [titulo, setTitulo] = useState("");
  const [genero, setGenero] = useState("");
  const [caratula, setCaratula] = useState("");
  const [validacion, setValidacion] = useState(true)
  const [contenido, setContenido] = useState({});
  
  const submitHandler = (e)=>{

    e.preventDefault();
    if (titulo.length < 3 || titulo.trim() !== titulo || genero.length < 6 ) {
      setValidacion(false);
    }else{
      setValidacion(true)
      const pelicula = {
        titulo : titulo,
        genero : genero,
        caratula : caratula
      }
    setContenido(pelicula)
  }

    setTitulo("")
    setGenero("")
    setCaratula("")

    
  }

  return (
    <div className="App">
      <h1>Ingresa una Pelicula</h1>
      <form className='form' onSubmit={submitHandler}>
        <input type="text" placeholder="Ingresa un Titulo" value={titulo} onChange={(e)=>setTitulo(e.target.value)}  />
        <input type="text" placeholder="Genero" value={genero} onChange={(e)=>setGenero(e.target.value)} />
        <input type="text" placeholder="URL de Caratula" value={caratula} onChange={(e)=>setCaratula(e.target.value)} />
        <button type="submit">Enviar</button>
        
      </form>
      <div>
        {validacion ? (<Card titulo={contenido.titulo} genero={contenido.genero} caratula = {contenido.caratula} />): (<p className="error">Por favor Chequea que la informacion sea correcta</p>)}
      </div>
    
      
    </div>
  );
}

export default App;
