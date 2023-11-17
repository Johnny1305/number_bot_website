import React, { useState } from "react";
import MotionHoc from "./MotionHoc";
import "../css/ChangeLog.css"; // Importa los estilos CSS

const ChangelogComponent = () => {
    const [activeTab, setActiveTab] = useState("tab-0.7.0");

    const openTab = (event, tabId) => {
        event.preventDefault();
        setActiveTab(tabId);
    };

    return (
        <div className="changelog-page">
            <h1>Registro de Cambios</h1>

            <div className="changelog-container">
                <div className="folder">
                    <div className="tabs">
                        <button
                            className={`tab ${activeTab === "tab-0.7.0" ? "active" : ""}`}
                            onClick={(e) => openTab(e, "tab-0.7.0")}
                        >
                            <div>
                                <span>Versión 0.7.0</span>
                            </div>
                        </button>
                        <button
                            className={`tab ${activeTab === "tab-0.6.0" ? "active" : ""}`}
                            onClick={(e) => openTab(e, "tab-0.6.0")}
                        >
                            <div>
                                <span>Versión 0.6.0</span>
                            </div>
                        </button>
                        <button
                            className={`tab ${activeTab === "tab-0.5.0" ? "active" : ""}`}
                            onClick={(e) => openTab(e, "tab-0.5.0")}
                        >
                            <div>
                                <span>Versión 0.5.0</span>
                            </div>
                        </button>
                        <button
                            className={`tab ${activeTab === "tab-0.4.0" ? "active" : ""}`}
                            onClick={(e) => openTab(e, "tab-0.4.0")}
                        >
                            <div>
                                <span>Versión 0.4.0</span>
                            </div>
                        </button>
                        <button
                            className={`tab ${activeTab === "tab-0.3.0" ? "active" : ""}`}
                            onClick={(e) => openTab(e, "tab-0.3.0")}
                        >
                            <div>
                                <span>Versión 0.3.0</span>
                            </div>
                        </button>
                        <button
                            className={`tab ${activeTab === "tab-0.2.0" ? "active" : ""}`}
                            onClick={(e) => openTab(e, "tab-0.2.0")}
                        >
                            <div>
                                <span>Versión 0.2.0</span>
                            </div>
                        </button>
                        <button
                            className={`tab ${activeTab === "tab-0.1.0" ? "active" : ""}`}
                            onClick={(e) => openTab(e, "tab-0.1.0")}
                        >
                            <div>
                                <span>Versión 0.1.0</span>
                            </div>
                        </button>
                    </div>

                    <div className="content">
                    <div id="tab-0.7.0" className={`content__inner ${activeTab === "tab-0.7.0" ? "active" : ""}`}>
                            <div className="page">
                                <ul>
                                    <li>Se agrega conexión con la base de datos.</li>
                                    <li>Se han actualizado los comandos existentes para mayor accesibilidad y rapidez.</li>
                                    <li>Se ha agrega nuevos Sistemas:</li>
                                    <ul>
                                        <li>`-setup-bienvenida`: Configura el sistema de Bienvenida, personalizar el fondo y colores del mismo.</li>
                                        <li>`-setup-tickets`: Configura el sistema de Tickets, define el canal para crear los tickets de los usuario.</li>
                                        <li>`-setup-nivel`: Configura el sistema de Niveles, donde se puede definir en que canal se va a enviar un mensaje cuando el usuario sube de nivel.</li>
                                    </ul>
                                    <li>Comando `-nivel`, que muestra el nivel que tiene el usuario.</li>
                                    <li>Se ha actualizado el sistema de ayuda donde el bot envía un mensaje al DM del usuario para solucionar los posibles problemas del mismo.</li>
                                    <li>Se ha agregado el comando `-chiste`, donde se envía un chiste al azar.</li>
                                    <li>Se ha agregado el comando `-8ball`, donde se envía una respuesta al azar de la pregunta.</li>
                                </ul>
                            </div>
                        </div>

                        <div id="tab-0.6.0" className={`content__inner ${activeTab === "tab-0.6.0" ? "active" : ""}`}>
                            <div className="page">
                                <ul>
                                    <li>Se han actualizado los comandos existentes.</li>
                                    <li>Se ha implementado un sistema de Sugerencias:</li>
                                    <ul>
                                        <li><code>-setup-sugerencia</code>: Define un canal para crear el sistema de sugerencias.</li>
                                    </ul>
                                    <li>Se ha implemtado el sistema de Warning</li>
                                    <ul>
                                        <li><code>-warn</code>: Envia un aviso a un usuario del Servidor.</li>
                                        <li><code>-warning</code>: Se muestra una lista paginada de todos los warns que tiene un usuario.</li>
                                        <li><code>-unwarn</code>: Quita un warn que tiene un usuario.</li>
                                    </ul>
                                    <li>Se ha agregado el comando <code>-prefix</code> que permite cambiar el prefijo del bot en el servidor.</li>
                                    <li>También se ha agregado el comando <code>-help</code> que muestre un panel de ayuda sobre los comandos.</li>
                                </ul>
                            </div>
                        </div>

                        <div id="tab-0.5.0" className={`content__inner ${activeTab === "tab-0.5.0" ? "active" : ""}`}>
                            <div className="page">
                                <ul>
                                    <li>Se implementaron los siguientes nuevos comandos:</li>
                                    <ul>
                                        <li><code>/kick</code>: Expulsa a un miembro del Servidor en el que está unido.</li>
                                        <li><code>/ban</code>: Banea a un miembro del Servidor en el que está unido.</li>
                                        <li><code>/unban</code>: Desbanea a un miembro del Servidor en el que está unido.</li>
                                    </ul>
                                    <li>Se ha actualizado el comando <code>-play</code> para que el bot no se desplace de el canal de voz en el que está conectado.</li>
                                    <li>Se han realizado mejoras en varios comandos existentes para mejorar su funcionalidad y usabilidad.</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div id="tab-0.4.0" className={`content__inner ${activeTab === "tab-0.4.0" ? "active" : ""}`}>
                            <div className="page">
                                <ul>
                                    <li>Se implementaron los siguientes nuevos comandos:</li>
                                    <ul>
                                    <li><code>-play</code>: Reproduce una canción o una lista de reproducción.</li>
                                    <li><code>-skip</code>: Salta a la siguiente canción en la lista de reproducción.</li>
                                    <li><code>-stop</code>: Detiene la reproducción de música y desconecta al bot del canal de voz.</li>
                                    <li><code>-queue</code>: Muestra la lista de reproducción actual.</li>
                                    <li><code>-volume</code>: Controla el volumen del bot durante la reproducción de música.</li>
                                    <li><code>-resume</code>: Reanuda la canción que estaba pausada en la reproducción de música.</li>
                                    <li><code>-pause</code>: Pausa la reproducción de música.</li>
                                    <li><code>-loop</code>: Activa o desactiva la repetición de la lista de reproducción.</li>
                                    </ul>
                                    <li>Se han realizado mejoras en varios comandos existentes para mejorar su funcionalidad y usabilidad.</li>
                                </ul>
                            </div>
                        </div>

                        <div id="tab-0.3.0" className={`content__inner ${activeTab === "tab-0.3.0" ? "active" : ""}`}>
                            <div className="page">
                                <ul>
                                    <li>Se implementaron los siguientes nuevos comandos:</li>
                                    <ul>
                                        <li>-invite: Obtén un enlace para invitar al bot a tu servidor.</li>
                                        <li>-hug: Manda un abrazo a un usuario.</li>
                                        <li>-kiss: Manda un beso a un usuario.</li>
                                        <li>-dado: Lanza un dado al azar.</li>
                                        <li>-avatar: Muestra la foto de perfil del usuario.</li>
                                    </ul>
                                    <li>Se han realizado mejoras en varios comandos existentes para mejorar su funcionalidad y usabilidad.</li>
                                    <li>Se ha implementado una mejora en la seguridad del bot para proteger contra el acceso no autorizado por parte de desarrolladores no autorizados.</li>
                                    <li>Se ha agregado un cooldown al comando /changelog para evitar un uso excesivo de este comando.</li>
                                </ul>
                            </div>
                        </div>

                        <div id="tab-0.2.0" className={`content__inner ${activeTab === "tab-0.2.0" ? "active" : ""}`}>
                            <div className="page">
                                <ul>
                                    <li>Se implementaron los siguientes nuevos comandos:</li>
                                    <ul>
                                        <li>-userinfo: Muestra información detallada del usuario.</li>
                                        <li>-cualesmiip: Muestra la dirección IP pública del usuario. (Mensaje Personal)</li>
                                        <li>/clear (solo para administradores): Permite borrar mensajes en el servidor.</li>
                                    </ul>
                                    <li>Se mejoró significativamente el rendimiento del bot.</li>
                                    <li>Se implementaron respuestas automáticas para una experiencia de usuario mejorada.</li>
                                </ul>
                            </div>
                        </div>

                        <div id="tab-0.1.0" className={`content__inner ${activeTab === "tab-0.1.0" ? "active" : ""}`}>
                            <div className="page">
                                <ul>
                                    <li>Lanzamiento inicial del bot.</li>
                                    <li>Se agregaron comandos básicos:</li>
                                    <ul>
                                        <li>-info: Muestra los datos del Bot e Información del Desarrollador.</li>
                                        <li>-ping: Muestra la latencia del Bot.</li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Changelog = MotionHoc(ChangelogComponent);

export default Changelog;