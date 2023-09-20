import React, { useState } from "react";
import MotionHoc from "./MotionHoc";
import { motion } from "framer-motion";
import "../css/Commands.css";

const CommandsComponent = () => {
    const [filter, setFilter] = useState("");
    const [activeCategory, setActiveCategory] = useState(null); // Inicialmente, ninguna categoría está activa

    const commandCategories = [
        {
            category: "General",
            commands: [
                { name: "/ping", description: "Muestra la latencia del Bot" },
                { name: "/info", description: "Muestra los datos del Bot e Información del Desarrollador" },
                { name: "/userinfo", description: "Muestra información detallada del usuario" },
                { name: "/invite", description: "Obtén un enlace para invitar al bot a tu servidor" },
                { name: "/cualesmiip", description: "Muestra la dirección IP pública del usuario. (Mensaje Personal)" },
                { name: "-avatar", description: "Muestra la foto de perfil del usuario" }
            ],
        },
        {
            category: "Interactivos",
            commands: [
                { name: "/hug", description: "Manda un abrazo a un usuario" },
                { name: "/kiss", description: "Manda un beso a un usuario" },
            ],
        },
        {
            category: "Administrador",
            commands: [
                { name: "/clear", description: "Muestra la latencia del Bot" }
            ],
        },
        {
            category: "Música",
            commands: [
                { name: "-play", description: "Reproduce una canción o una lista de reproducción" },
                { name: "-exit", description: "Detiene la reproducción de música y desconecta al bot del canal de voz" },
                { name: "-skip", description: "Salta a la siguiente canción en la lista de reproducción" },
                { name: "-pause", description: "Pausa la reproducción de música" },
                { name: "-resume", description: "Reanuda la canción que estaba pausada en la reproducción de música" },
                { name: "-loop", description: "Activa o desactiva la repetición de la lista de reproducción" },
                { name: "-queue", description: "Muestra la lista de reproducción actual" },
                { name: "-volume", description: "Controla el volumen del bot durante la reproducción de música" }
            ],
        },
        {
            category: "Juegos",
            commands: [
                { name: "-dado", description: "Lanza un dado al azar" }
            ],
        },
    ];

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleCategoryChange = (category) => {
        if (category === activeCategory) {
            setActiveCategory(null); // Si se hace clic en la categoría activa, la desactiva
        } else {
            setActiveCategory(category);
        }
    };

    return (
        <div className="container">
            <h1>Comandos</h1>

            <div className="filter-button-container">
                <button
                    className={`filter-button ${activeCategory === null ? "active" : ""}`}
                    onClick={() => handleCategoryChange(null)}
                >
                    Todas las categorías
                </button>
                {commandCategories.map((category) => (
                    <button
                        key={category.category}
                        className={`filter-button ${category.category === activeCategory ? "active" : ""
                            }`}
                        onClick={() => handleCategoryChange(category.category)}
                    >
                        {category.category}
                    </button>
                ))}
            </div>

            {/* Contenedor con desplazamiento vertical */}
            <div className="category-grid" style={{ maxHeight: "400px", overflowY: "auto" }}>
                {(activeCategory === null
                    ? commandCategories
                    : activeCategory === "Todas"
                        ? commandCategories
                        : commandCategories.filter((category) => category.category === activeCategory)
                ).map((category, index) => (
                    <motion.div
                        key={index}
                        className="category"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2>{category.category}</h2>
                        <ul className="command-list">
                            {category.commands
                                .filter((command) =>
                                    command.name.toLowerCase().includes(filter.toLowerCase())
                                )
                                .map((command, commandIndex) => (
                                    <li key={commandIndex}>
                                        <strong>{command.name}</strong>: {command.description}
                                    </li>
                                ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CommandsComponent;
