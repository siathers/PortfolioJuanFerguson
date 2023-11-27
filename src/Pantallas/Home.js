import React, { useState, useEffect } from 'react';
import Destacado from "./Destacados";
import Creaciones from "../MisCreaciones.json";

const Home = () => {
  const [creacionesDestacadas, setCreacionesDestacadas] = useState([]);

  useEffect(() => {
    // Obtener las 6 creaciones más destacadas
    const destacadas = Creaciones.slice(0, 6);
    setCreacionesDestacadas(destacadas);
  }, []);

  const agregarFavorito = (name) => {
    // Obtener la creación que coincide con el nombre
    const creacion = Creaciones.find((c) => c.nombre === name);

    // Obtener favoritos del almacenamiento local
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    // Verificar si la creación ya está en favoritos
    if (!favoritos.some((favorito) => favorito.nombre === creacion.nombre)) {
      // Si no está, agregarlo a favoritos
      const nuevosFavoritos = [...favoritos, creacion];
      localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    }
  };

  return (
    <div className="align-items-center justify-content-center">
      <h1>Bienvenido a mi página web</h1>
      <h3>Creaciones destacadas de Juan Ferguson</h3>

      {creacionesDestacadas.map((creacion, index) => (
        <div key={index}>
          <br></br>
          <br></br>
          <h5>{creacion.nombre}</h5>
          <img className="tamañoimg" src={creacion.imagen} alt={creacion.nombre} />
          <br></br>
          <br></br>
          <button onClick={() => agregarFavorito(creacion.nombre)}>
            Agregar a favoritos
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
