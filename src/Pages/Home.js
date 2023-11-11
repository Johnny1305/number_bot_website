import React from "react";
import MotionHoc from "./MotionHoc";
import "../css/Home.css"; 

const HomeContent = () => {
  const inviteLink = "https://numberbot.johnnyportfolio.x10.mx/invite";
  return (
    <div className="home-content">
      <div className="logo-circle">
        <img
          src="https://cdn.discordapp.com/attachments/1136971388545142965/1172871785344155731/standard.gif?ex=6561e4f8&is=654f6ff8&hm=5b52375c9a73a9cda9430cc559ff3306cd8634bc67b575e2fd478fb366ab0354&" // Reemplaza con la ruta correcta de tu logo
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

