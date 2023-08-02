import React from 'react'

export const Producto = (props) => {
    return (
        <div className='producto'>
            <h3>Nombre:{props.producto.nombre}</h3>
            <img src={props.producto.imagen} />
            <p>Precio: {props.producto.precio}</p>
        </div>
    )
}
