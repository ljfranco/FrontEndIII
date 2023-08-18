import React from 'react'

const Card = ({nombre,apellido}) => {
  return (
    <div>
      <h2>Datos del Estudiante</h2>
      <p>
        Nombre: {nombre}
        Apellido: {apellido}
      </p>
    </div>
  )
}

export default Card