import React, { useState, useEffect } from 'react';
import Creaciones from '../MisCreaciones.json';

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);
  useEffect(() => {
    const favoritosGuardados = localStorage.getItem('favoritos');
    if (favoritosGuardados) {
      setFavoritos(JSON.parse(favoritosGuardados));
    }
    console.log('Contenido de Creaciones:', Creaciones);
  }, []);

  const eliminarFavorito = (nombre) => {
    if (favoritos && favoritos.length > 0) {
      const nuevosFavoritos = favoritos.filter((favorito) => favorito.nombre !== nombre);
      setFavoritos(nuevosFavoritos);
      localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
      console.log('Favoritos actualizados:', nuevosFavoritos);
    }
  };

  return (
    <div>
      <br />
      <div className="TituloLista">
        <h2><b>Favoritos</b></h2>
        <br></br><br></br>
      </div>
      {favoritos && favoritos.length > 0 ? (
        favoritos.map((favorito) => {
          const creacion = Creaciones.find((creacion) => creacion.nombre === favorito.nombre);
          if (creacion) {
            return (
              <div key={favorito.nombre}>
                <div className="Listita">
                  <div className="NombreLista">{favorito.nombre}</div>
                  <br></br>
                  <img className="tamañoimgchica" src={favorito.imagen}/>
                </div><br></br>
                <div className="center">
                  <button onClick={() => eliminarFavorito(favorito.nombre)} className="NombreLista btn btn-danger">
                    Eliminar
                  </button>
                </div><br></br><br></br>
              </div>
              
            );
          }
          return null;
        })
      ) : (
        <p>No hay favoritos aún.</p>
      )}
      <br /><br /><br /><br /><br />
    </div>
  );
}
