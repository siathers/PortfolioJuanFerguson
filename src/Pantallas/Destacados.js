import React, { useEffect, useState } from "react";
import listaTrabajos from '../MisCreaciones.json';
import { addToFavorites, removeFromFavorites } from './Favs';

function Destacados() {

  const [favorites, setFavorites] = useState([]);

  // Función para manejar el clic en el botón de favoritos
  const handleFavoriteClick = (trabajoId) => {
    if (favorites.includes(trabajoId)) {
      // Si el trabajo ya está en favoritos, lo quitamos
      removeFromFavorites(trabajoId);
      setFavorites(favorites.filter(id => id !== trabajoId));
    } else {
      // Si el trabajo no está en favoritos, lo añadimos
      addToFavorites(trabajoId);
      setFavorites([...favorites, trabajoId]);
    }
  };

  return (
    <div>
      {listaTrabajos.slice(0, 6).map((trabajo, index) => (
        <div key={index}>
          <h2>{trabajo.nombre}</h2>
          
          <img src={trabajo.imagen} alt={trabajo.nombre}/>
          <a href={trabajo.link}>Ver más</a>

          {/* Botón de favoritos */}
          <button onClick={() => handleFavoriteClick(trabajo.id)}>
            {favorites.includes(trabajo.id) ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Destacados;