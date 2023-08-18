import React from 'react'
import { useState } from 'react';
import './Form.css';

export const Form = ({onAgregarPelicula}) => {

  const [caratula, setCaratula] = useState("");
  const [titulo, setTitulo] = useState("");
  const [rank, setRank] = useState("");

  const submitHandler = (e)=>{
    e.preventDefault();
    onAgregarPelicula({caratula,titulo,rank});
    setCaratula("");
    setTitulo("");
    setRank("");

  }
  return (
    <div>
      <form className='form' onSubmit={submitHandler}>
        <input type="text" placeholder='URL de la Caratula' value={caratula} onChange={(e)=>setCaratula(e.target.value)} />
        <input type="text" placeholder='Titulo' value={titulo} onChange={(e)=> setTitulo(e.target.value)} />
        <input type="text" placeholder='Calificacion' value={rank} onChange={(e)=> setRank(e.target.value)}/>
        <button type="submit">Agregar Pelicula</button>
      </form>
    </div>
  )
}