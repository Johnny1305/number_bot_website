import React, { useState, useEffect } from "react";
import MotionHoc from "./MotionHoc";
import "../css/Home.css"; 

const HomeContent = () => {
  const [botStatus, setBotStatus] = useState("Desconocido");

  useEffect(() => {
    const checkBotStatus = async () => {
      try {
        // Aquí deberás implementar la lógica para obtener información sobre el bot desde la Discord API.
        // Puedes usar la URL de la Discord API adecuada y proporcionar el token de bot en el encabezado "Authorization".

        const botToken = 'MTE1MDcyMjkyMDUyODc0MDQzNQ.G88yGW.jItIUYl1qxIHTiivwgUCK7oEeK9lP0txZ7wTlc'; // Reemplaza con tu token de bot
        const response = await fetch('https://discord.com/api/v10/users/@me', {
          headers: {
            Authorization: `Bot ${botToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          if (data.bot) {
            setBotStatus("Activo");
          } else {
            setBotStatus("Desconectado");
          }
        } else {
          setBotStatus("Desconocido");
        }
      } catch (error) {
        console.error("Error al obtener el estado del bot:", error);
        setBotStatus("Desconocido");
      }
    };

    checkBotStatus();
  }, []);

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
      <p>
        ¡Bienvenido al bot Number_Bot!
        <br />
        Puedes usar este bot para realizar moderaciones y controles en tu servidor de Discord.
        <br />
        Estado del bot: {botStatus}
        <br />
        ¡Explora las funciones disponibles en el menú de la izquierda!
      </p>
      <br />
      <a href={inviteLink} target="_blank" rel="noopener noreferrer" className="invite-button">
        Invítame
      </a>
    </div>
  );
};

const Home = MotionHoc(HomeContent);

export default Home;
