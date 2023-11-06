import React, { useState, useEffect } from "react";
import MotionHoc from "./MotionHoc";
import "../css/Home.css"; 

const HomeContent = () => {
  const [botStatus, setBotStatus] = useState("Desconocido"); // Estado inicial desconocido

  useEffect(() => {
    // Esta función simulada obtiene el estado del bot desde una API.
    const getBotStatus = async () => {
      try {
        const botToken = 'MTE1MDcyMjkyMDUyODc0MDQzNQ.G88yGW.jItIUYl1qxIHTiivwgUCK7oEeK9lP0txZ7wTlc';
        const response = await fetch('https://discord.com/api/v10/users/@me', {
          headers: {
            Authorization: `Bot ${botToken}`,
          },
        });
    
        if (response.ok) {
          const data = await response.json();
          // El estado del bot podría estar en la respuesta, dependiendo de cómo esté estructurada.
          const botStatus = data.bot ? "Activo" : "Desconectado"; // Ejemplo simplificado
          setBotStatus(botStatus);
        } else {
          setBotStatus("Desconocido"); // En caso de error
        }
      } catch (error) {
        console.error("Error al obtener el estado del bot:", error);
        setBotStatus("Desconocido");
      }
    };
    

    // Llamamos a la función para obtener el estado del bot cuando el componente se monta.
    getBotStatus();
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