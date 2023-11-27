import React from "react";
import '../diseno.css';
import "bootstrap/dist/css/bootstrap.min.css";

const InfoPersonal = () => {
  return (
    <div className="container my-custom-margin d-flex justify-content-center align-items-center">
      <div className="card infoper futurista mb-5">
        <div className="infoper card-body">
          <h5 className="text-center card-title">Juan Ferguson</h5>
          <br></br>
          <p className="card-text">17 años</p>
          <p className="card-text">Argentino, Buenos Aires</p>
          <p className="card-text">
            Soy un entusiasta desarrollador de aplicaciones web con habilidades tanto en tecnologías
            front-end como back-end. Me gusta el hecho de poder solucionar problemas eficazmente usando
            estas tecnologías. Me gusta trabajar en equipo mientras todos nos respetemos y aportemos
            al grupo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoPersonal;
