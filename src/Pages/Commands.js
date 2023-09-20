import React, { useState } from "react";
import MotionHoc from "./MotionHoc";
import { motion } from "framer-motion";
import "../css/Commands.css";

const CommandsComponent = () => {
    const [filter, setFilter] = useState("");
    const [activeCategory, setActiveCategory] = useState(null); // Inicialmente, ninguna categoría está activa

    const commandCategories = [
        {
            category: "Categoría 1",
            commands: [
                { name: "Comando 1", description: "Explicación del Comando 1" },
                { name: "Comando 2", description: "Explicación del Comando 2" },
                { name: "Comando 3", description: "Explicación del Comando 3" },
            ],
        },
        {
            category: "Categoría 2",
            commands: [
                { name: "Comando 4", description: "Explicación del Comando 4" },
                { name: "Comando 5", description: "Explicación del Comando 5" },
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

            <div className="category-grid">
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
