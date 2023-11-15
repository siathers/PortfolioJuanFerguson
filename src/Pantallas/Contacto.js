import React from "react";
import '../diseno.css';

function Contacto() {
  return (
    <div>
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
    <div className="social-links">
        <a href="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/573dc5f80819a13ebf650af83462a06c~c5_720x720.jpeg?x-expires=1700110800&x-signature=Q4E2c25WC9tEWno%2BFOnKZLq0e1s%3D" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/573dc5f80819a13ebf650af83462a06c~c5_720x720.jpeg?x-expires=1700110800&x-signature=Q4E2c25WC9tEWno%2BFOnKZLq0e1s%3D" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/573dc5f80819a13ebf650af83462a06c~c5_720x720.jpeg?x-expires=1700110800&x-signature=Q4E2c25WC9tEWno%2BFOnKZLq0e1s%3D" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
    
  );
}

export default Contacto;