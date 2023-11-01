import React from "react";

function Contacto() {
  return (
    <div>
    <form>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre </label>
        <input type="text" className="form-control" id="nombre" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email </label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="mb-3">
        <label htmlFor="mensaje" className="form-label">Mensaje</label>
        <input type="mensaje" className="form-control" id="mensaje" />
      </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
    <div className="social-links">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        {/* Agrega acá más enlaces a tus redes sociales */}
      </div>
    </div>
    
  );
}

export default Contacto;