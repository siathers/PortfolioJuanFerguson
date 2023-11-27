// Importa los estilos de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import Contacto from './Contacto';
import { useFavoritos } from './FavoritosContext';
import '../diseno.css';

const Layout = () => {
  const { favoritos } = useFavoritos(); 

  return (
    <div className="todo">
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Mi Portfolio</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/MisCreaciones" className="nav-link">Creaciones</Link>
            </li>
            <li className="nav-item">
              <Link to="/InfoPersonal" className="nav-link">Información Personal</Link>
            </li>
            <li className="nav-item">
              <Link to="/Favoritos" className="nav-link">
                Favoritos <Badge badgeContent={favoritos.length} color="secondary">
                  {favoritos.length}
                </Badge>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mt-4">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="footer bg-light py-4">
        <div className="container">
          <Contacto />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
