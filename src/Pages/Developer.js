import React, { useEffect } from "react";
import MotionHoc from "./MotionHoc";
import "../css/Developer.css"; // Asegúrate de ajustar la ruta a tu archivo CSS

const DeveloperComponent = () => {
  const contactEmail = "jonathan.ramos.business@gmail.com"; // Reemplaza con tu dirección de correo electrónico

  useEffect(() => {
    const donacionesTitle = document.getElementById("donaciones-title");
    const scrollableContent = document.querySelector(".scrollable-content");

    const handleScroll = () => {
      if (donacionesTitle && scrollableContent) {
        const scrollPosition = scrollableContent.scrollTop;
        if (scrollPosition > 0) {
          donacionesTitle.classList.add("hidden-title");
        } else {
          donacionesTitle.classList.remove("hidden-title");
        }
      }
    };

    if (scrollableContent) {
      scrollableContent.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollableContent) {
        scrollableContent.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="developer-content">
      <h1 className="developer-title">Developer</h1>
      <div className="scrollable-content">
        <p>
          ¡Gracias por tu interés en contribuir al desarrollo de Number_Bot! <br/> Si deseas colaborar, enviar sugerencias o informar sobre problemas, no dudes en ponerte en contacto con el equipo de desarrollo.
        </p>
        <a href={`mailto:${contactEmail}`} className="contact-button">
          Contactar por correo
        </a>
        <br/>
        <hr/>
    
        <h1 id="donaciones-title">Donaciones</h1>
        <p>
          💖 ¡Ayúdanos a Crecer! 💖<br/><br/>
          💙 ¡Apóyanos! 💙<br/><br/>
          ¡Hola a todos nuestros queridos miembros! Estamos emocionados por el crecimiento y éxito de nuestro bot. Sin embargo, para seguir mejorando y ofrecer nuevas funciones, necesitamos tu apoyo.<br/><br/>
          ❤️ ¿Por qué donar? ❤️<br/><br/>
          <ul>
            <li>Mantendrá el bot en línea las 24/7.</li>
            <li>Nos ayudará a desarrollar emocionantes nuevas características.</li>
            <li>Mejorará la velocidad y la estabilidad del bot.</li>
          </ul><br/><br/>
          🌟 ¿Cómo Puedes Ayudar? 🌟<br/><br/>
          Puedes aportar una donación para respaldar nuestro proyecto y asegurarte de que siga creciendo. Aceptamos donaciones a través de PayPal.<br/><br/>
          ¡Tu Apoyo Cuenta!<br/>
          Cada pequeña contribución cuenta y nos ayuda a brindarte una experiencia aún mejor. Tu apoyo significa el mundo para nosotros.<br/><br/>
          ¡Gracias por ser parte de nuestra comunidad y por considerar hacer una donación! 💙
        </p>
      </div>
    </div>
  );
};

const Developer = MotionHoc(DeveloperComponent);

export default Developer;
