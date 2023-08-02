import React from 'react'
import { Producto } from './Producto'

export const Body = () => {

    const producto1 = {
        nombre: "SmartPhone",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_605126-MLM51559383638_092022-F.webp",
        precio: "250"
    }
    const producto2 = {
        nombre: "NoteBook",
        imagen: "https://mla-s1-p.mlstatic.com/677172-MLA48635279078_122021-F.jpg",
        precio: "800"
    }
    const producto3 = {
        nombre: "Mouse",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_839562-MLU69846541249_062023-F.webp",
        precio: "10"
    }

    return (
        <div className='body'>
            <Producto producto={producto1} />
            <Producto producto={producto2} />
            <Producto producto={producto3} />
        </div>
    )
}
