import React, { useEffect, useState } from "react";
import listaTrabajos from '../MisCreaciones.json';

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const favoritosGuardados = localStorage.getItem('favorites');
    if (favoritosGuardados) {
      setFavoritos(favoritosGuardados.split(',').map(Number));
    }
  }, []);

  return (
    <div>
      {favoritos.map((trabajoId) => {
        const trabajo = listaTrabajos.find(t => t.id === trabajoId);
        if (!trabajo) {
          return null;
        }
        return (
          <div key={trabajoId}>
            <h2>{trabajo.nombre}</h2>
            <img src={trabajo.imagen} alt={trabajo.nombre}/>
            <a href={trabajo.link}>Ver más</a>
          </div>
        );
      })}
    </div>
  );
};

export default Favoritos;