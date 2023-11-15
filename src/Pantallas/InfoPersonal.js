import {Outlet, Link } from "react-router-dom";
import React from "react";
import '../diseno.css';

const InfoPersonal = () => {
  return (
    <div className="container mt-4">
      <h1>Información Personal</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"> Juan Ferguson </h5>
          <p className="card-text"> 17 años </p>
          <p className="card-text"> Argentino, Buenos Aires </p>
          <p className="card-text"> Soy un apasionado desarrollador de aplicaciones web con experiencia en tecnologías front-end
                                    y back-end. Me encanta crear soluciones creativas y funcionales para problemas complejos.</p>
        </div>
      </div>
    </div>
  );
};

export default InfoPersonal;
