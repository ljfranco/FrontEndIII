//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import './Card.css'

function Card({titulo, genero, caratula}) {
  return (
    <div className="card">      
      <h2>{titulo}</h2>
      <p>{genero}</p>
      <img src={caratula} alt="" />

    </div>
  );
}

export default Card;
