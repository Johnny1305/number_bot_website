import React from "react";
import MotionHoc from "./MotionHoc";
import "../css/Developer.css"; // Asegúrate de ajustar la ruta a tu archivo CSS

const DeveloperComponent = () => {
  const contactEmail = "jonathan.ramos.business@gmail.com"; // Reemplaza con tu dirección de correo electrónico

  return (
    <div className="developer-content">
      <h1>Developer</h1>
      <p>
        ¡Gracias por tu interés en contribuir al desarrollo de Number_Bot! <br/> Si deseas colaborar, enviar sugerencias o informar sobre problemas, no dudes en ponerte en contacto con el equipo de desarrollo.
      </p>
      <a href={`mailto:${contactEmail}`} className="contact-button">
        Contactar por correo
      </a>
    </div>
  );
};

const Developer = MotionHoc(DeveloperComponent);

export default Developer;

