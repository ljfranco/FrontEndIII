import React from "react";
import './Card.css'
export const Card = ({ peliculas }) => {
	return (
		<div>
			<h2>Peliculas</h2>
			{peliculas.map((pelicula, index) => (
				<div key={index} className="card">
					<img src={pelicula.caratula} alt="" />
					<h3>{pelicula.titulo} </h3>
					<p>{pelicula.rank}</p>
				</div>
			))}
		</div>
	);
}
