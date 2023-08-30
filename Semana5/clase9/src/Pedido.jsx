import { useEffect, useState } from 'react'

const Pedido = () => {

    const [pedido, setPedido] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setPedido("Pizza")
        }, 2000);

    }, []);

    useEffect(() => {
        console.log("El componente se actualizo");
    },)


    return (
        <div>
            <p>{pedido}</p>
        </div>
    )
}

export default Pedido