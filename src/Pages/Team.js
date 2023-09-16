import React from "react";
import MotionHoc from "./MotionHoc";
import "../css/Team.css";

const commands = [
  {
    name: "comando1",
    description: "Descripción del comando 1",
    usage: "!comando1",
  },
  {
    name: "comando2",
    description: "Descripción del comando 2",
    usage: "!comando2",
  },
  // Agrega más comandos según sea necesario
];

const TeamComponent = () => {
  return (
    <div>
      <h1>Comandos del Bot</h1>
      <ul className="command-list">
        {commands.map((command, index) => (
          <li key={index} className="command-card">
            <h3>{command.name}</h3>
            <p>{command.description}</p>
            <p>Uso: {command.usage}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Team = MotionHoc(TeamComponent);

export default Team;
