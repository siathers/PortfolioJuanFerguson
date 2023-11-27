import React from "react";
import '../diseno.css';

function Contacto() {
  return (
    <div>
      <h3 className="text-center">Para contactarme: </h3>
    <form>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input type="text" className="form-control" id="nombre" />
      </div>
      <div className="mb-3">
        <label htmlFor="mail" className="form-label">Email </label>
        <input type="email" className="form-control" id="mail" />
      </div>
      <div className="mb-3">
        <label htmlFor="Comentario" className="form-label">Comentario</label>
        <input type="mensaje" className="form-control" id="Comentario" />
      </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
    <div className="social-links text-center">
        <a href="https://www.linkedin.com/in/juan-ferguson-12289226b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        /
        <a href="https://github.com/siathers/PortfolioJuanFerguson.git" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
    
  );
}

export default Contacto;