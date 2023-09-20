import React, { useState } from "react";
import MotionHoc from "./MotionHoc";

const ChangelogComponent = () => {
    const [activeVersion, setActiveVersion] = useState("version-0.4.0");

    const handleVersionClick = (versionId) => {
        setActiveVersion(versionId);
    };

    return (
        <div className="changelog-page">
            <h1>Registro de Cambios</h1>

            <div className="changelog-container">
                {/* Índice de versiones (a la izquierda) */}
                <div className="version-index">
                    <ul>
                        <li>
                            <button
                                onClick={() => handleVersionClick("version-0.4.0")}
                                className={activeVersion === "version-0.4.0" ? "active" : ""}
                            >
                                Versión 0.4.0
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleVersionClick("version-0.3.0")}
                                className={activeVersion === "version-0.3.0" ? "active" : ""}
                            >
                                Versión 0.3.0
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleVersionClick("version-0.2.0")}
                                className={activeVersion === "version-0.2.0" ? "active" : ""}
                            >
                                Versión 0.2.0
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleVersionClick("version-0.1.0")}
                                className={activeVersion === "version-0.1.0" ? "active" : ""}
                            >
                                Versión 0.1.0
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Contenido de cada versión (a la derecha) */}
                <div className="changelog">
                    <h2 id="version-0.4.0">Versión 0.4.0 (2023-09-18)</h2>
                    <ul>
                        <li>Se implementaron los siguientes nuevos comandos:</li>
                        <ul>
                            <li>-play: Reproduce una canción o una lista de reproducción.</li>
                            <li>-skip: Salta a la siguiente canción en la lista de reproducción.</li>
                            <li>-stop: Detiene la reproducción de música y desconecta al bot del canal de voz.</li>
                            <li>-queue: Muestra la lista de reproducción actual.</li>
                            <li>-volume: Controla el volumen del bot durante la reproducción de música.</li>
                            <li>-resume: Reanuda la canción que estaba pausada en la reproducción de música.</li>
                            <li>-pause: Pausa la reproducción de música.</li>
                            <li>-loop: Activa o desactiva la repetición de la lista de reproducción.</li>
                        </ul>
                        <li>Se han realizado mejoras en varios comandos existentes para mejorar su funcionalidad y usabilidad.</li>
                    </ul>
                </div>

                <div className="changelog">
                    <h2 id="version-0.3.0">Versión 0.3.0 (2023-09-15)</h2>
                    <ul>
                        <li>Se implementaron los siguientes nuevos comandos:</li>
                        <ul>
                            <li>/invite: Obtén un enlace para invitar al bot a tu servidor.</li>
                            <li>/hug: Manda un abrazo a un usuario.</li>
                            <li>/kiss: Manda un beso a un usuario.</li>
                            <li>-dado: Lanza un dado al azar.</li>
                            <li>-avatar: Muestra la foto de perfil del usuario.</li>
                        </ul>
                        <li>Se han realizado mejoras en varios comandos existentes para mejorar su funcionalidad y usabilidad.</li>
                        <li>Se ha implementado una mejora en la seguridad del bot para proteger contra el acceso no autorizado por parte de desarrolladores no autorizados.</li>
                        <li>Se ha agregado un cooldown al comando /changelog para evitar un uso excesivo de este comando.</li>
                    </ul>
                </div>

                <div className="changelog">
                    <h2 id="version-0.2.0">Versión 0.2.0 (2023-09-14)</h2>
                    <ul>
                        <li>Se implementaron los siguientes nuevos comandos:</li>
                        <ul>
                            <li>/userinfo: Muestra información detallada del usuario.</li>
                            <li>/cualesmiip: Muestra la dirección IP pública del usuario. (Mensaje Personal)</li>
                            <li>/clear (solo para administradores): Permite borrar mensajes en el servidor.</li>
                        </ul>
                        <li>Se mejoró significativamente el rendimiento del bot.</li>
                        <li>Se implementaron respuestas automáticas para una experiencia de usuario mejorada.</li>
                        <li>Se añadió la nueva página web del bot en https://lnkd.in/dSgPp64y.</li>
                    </ul>
                </div>

                <div className="changelog">
                    <h2 id="version-0.1.0">Versión 0.1.0 (2023-09-11)</h2>
                    <ul>
                        <li>Lanzamiento inicial del bot.</li>
                        <li>Se agregaron comandos básicos:</li>
                        <ul>
                            <li>/info: Muestra los datos del Bot e Información del Desarrollador.</li>
                            <li>/ping: Muestra la latencia del Bot.</li>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const Changelog = MotionHoc(ChangelogComponent);

export default Changelog;
