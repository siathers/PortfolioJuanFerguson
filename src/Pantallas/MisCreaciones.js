import React from "react";
import trabajos from '../MisCreaciones.json';

function Creaciones() {
  return (
    <div>
      {trabajos.map((trabajo, index) => (
        <div key={index}>
          <h2>{trabajo.nombre}</h2>
          <img src={trabajo.imagen} alt={trabajo.nombre}/>
          <p>{trabajo.descripcion}</p>
          <a href={trabajo.link}>Ver más</a>
        </div>
      ))}
    </div>
  );
}

export default Creaciones;