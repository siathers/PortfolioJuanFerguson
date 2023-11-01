import React from "react";
import { Outlet, Link } from "react-router-dom";
import Contacto from './Contacto';
import '../diseno.css';

const Layout = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/MisCreaciones" className="nav-link">Creaciones</Link>
            </li>
            <li className="nav-item">
              <Link to="/InfoPersonal" className="nav-link">Información Personal</Link>
            </li>
            <li className="nav-item">
              <Link to="/Favs" className="nav-link">Favoritos</Link>
            </li>
            <li className="nav-item">
              <Link to="/Contacto" className="nav-link">Contacto</Link>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/tu-usuario"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Perfil de Github
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-4">
        <Outlet />
      </div>
      <footer className="bg-light">
        <div className="container">
          <Contacto />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
