import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Creaciones from "../MisCreaciones.json";

const Destacado = () => {
  const { nombre } = useParams();

  const obtenerCreacion = (nombre) => {
    // Verificar si Creaciones está definido y no es nulo, y si Creaciones.list está definido
    if (Creaciones && Creaciones.list && Creaciones.list.length > 0) {
      console.log("Lista de creaciones:", Creaciones.list);
  
      const creacionEncontrada = Creaciones.list.find((creacion) => creacion.nombre === nombre);
      console.log("Nombre proporcionado:", nombre);
      console.log("Creación encontrada:", creacionEncontrada);
  
      return creacionEncontrada;
    }
    return null;
  };
  
  

  const creacion = obtenerCreacion(nombre);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const antes = localStorage.getItem('favoritos');
    if (antes) {
      const favoritosAlmacenados = JSON.parse(antes);
      setFavoritos(favoritosAlmacenados);
    }
  }, []);

  const enviar = () => {
    if (creacion && !favoritos.some(favorito => favorito.nombre === creacion.nombre)) {
      const nuevosFavoritos = [...favoritos, creacion];
      setFavoritos(nuevosFavoritos);
      localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    }
  };

  if (!creacion) {
    return <p>No se encontró la creación</p>;
  }

  return (
    <div>
      <br></br><br></br><br></br><br></br>
      <div style={{ textAlign: "center" }}>
        <h1>{`Nombre del proyecto: ${creacion.name}`}</h1>
        <h1>{`Descripción: ${creacion.description}`}</h1>
        <img src={creacion.image} className="image" alt={creacion.name} />
        <h1>{`Link del proyecto: ${creacion.link}`}</h1>
        <div className="Listita">
          <button onClick={enviar} className="NombreLista">
            <Link to="/">Agregar a favoritos</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Destacado;
