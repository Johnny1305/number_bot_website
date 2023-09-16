import React from "react";
import MotionHoc from "./MotionHoc";
import "../css/Home.css"; 

const HomeContent = () => {
  const inviteLink = "https://numberbot.johnnyportfolio.x10.mx/invite";
  return (
    <div className="home-content">
      <div className="logo-circle">
        <img
          src="https://numberbot.johnnyportfolio.x10.mx/logo.png" // Reemplaza con la ruta correcta de tu logo
          alt="Logo del bot"
          className="bot-logo"
        />
      </div>
      <h1>Number_Bot</h1>
      <p>¡Bienvenido al bot Number_Bot! <br/> Puedes usar este bot para realizar moderaciones y controles es tu servidor de Discord. <br/> ¡Explora las funciones disponibles en el menú de la izquierda!</p>
      <br/>
      <a href={inviteLink} target="_blank" rel="noopener noreferrer" className="invite-button">
        Invítame
      </a>
    </div>
  );
};

const Home = MotionHoc(HomeContent);

export default Home;

