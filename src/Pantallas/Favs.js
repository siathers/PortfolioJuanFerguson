import React, { useEffect, useState } from "react";
import listaTrabajos from '../MisCreaciones.json';

// Añadir a favoritos
export function addToFavorites(creationId) {
  // Obtener los favoritos actuales del localStorage
  let favorites = localStorage.getItem('favorites');
  
  // Si no hay favoritos, inicializar un array vacío
  if (!favorites) {
    favorites = [];
  } else {
    // Si hay favoritos, convertir la cadena de texto a un array
    favorites = JSON.parse(favorites);
  }
  
  // Añadir la nueva creación a los favoritos
  favorites.push(creationId);
  
  // Guardar los favoritos en el localStorage
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Quitar de favoritos
export function removeFromFavorites(creationId) {
  // Obtener los favoritos actuales del localStorage
  let favorites = localStorage.getItem('favorites');
  
  // Si no hay favoritos, no hay nada que quitar
  if (!favorites) {
    return;
  }
  
  // Convertir la cadena de texto a un array
  favorites = JSON.parse(favorites);
  
  // Filtrar la creación que se quiere quitar
  favorites = favorites.filter(id => id !== creationId);
  
  // Guardar los favoritos en el localStorage
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

const Favs = () => {
    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        const favoritosGuardados = JSON.parse(localStorage.getItem('favorites')) || [];
        const trabajosFavoritos = listaTrabajos.filter(trabajo => favoritosGuardados.includes(trabajo.id));
        setFavoritos(trabajosFavoritos);
    }, []);

    return (
        <div>
            {favoritos.map((trabajo, index) => (
                <div key={index}>
                    <h2>{trabajo.nombre}</h2>
                    <img src={trabajo.imagen} alt={trabajo.nombre}/>
                    <a href={trabajo.link}>Ver más</a>
                </div>
            ))}
        </div>
    );
};
export default Favs;