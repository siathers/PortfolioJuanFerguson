import React, { useState, useEffect } from 'react';
import Creaciones from '../MisCreaciones.json';

const MisCreaciones = () => {
  const [creaciones, setCreaciones] = useState([]);
  // Agrega un nuevo estado para los favoritos
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    // Configura las creaciones al cargar el componente
    setCreaciones(Creaciones);

    // Obtiene los favoritos desde el almacenamiento local al cargar el componente
    const favoritosGuardados = localStorage.getItem('favoritos');
    if (favoritosGuardados) {
      setFavoritos(JSON.parse(favoritosGuardados));
    }
  }, []);

  const agregarFavorito = (nombre) => {
    // Busca la creación por nombre
    const creacion = creaciones.find((c) => c.nombre === nombre);

    // Verifica si la creación ya está en favoritos
    if (!favoritos.some((favorito) => favorito.nombre === creacion.nombre)) {
      // Si no está, agrega la creación a la lista de favoritos
      const nuevosFavoritos = [...favoritos, creacion];
      setFavoritos(nuevosFavoritos);

      // Actualiza el almacenamiento local con la nueva lista de favoritos
      localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    }
  };

  return (
    <div>
      {creaciones.map((creacion, index) => (
        <div key={index}>
          <h4>{creacion.nombre}</h4>
          <img className="tamañoimg" src={creacion.imagen} alt={creacion.nombre} />
          <p>{creacion.descripcion}</p>
          <a href={creacion.link}>Ver más</a>
          <br></br>
          <br></br>
          <button onClick={() => agregarFavorito(creacion.nombre)}>
            Agregar a favoritos
          </button>
          <br></br>
          <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default MisCreaciones;
