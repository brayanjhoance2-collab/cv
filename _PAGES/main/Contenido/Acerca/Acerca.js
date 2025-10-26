"use client";
import estilos from "./acerca.module.css";
import { useState, useEffect } from "react";
import { obtenerDatos } from "./servidor";

export default function Acerca() {
  const [idioma, setIdioma] = useState("es");
  const [modoOscuro, setModoOscuro] = useState(true);
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const datosServidor = await obtenerDatos();
        setDatos(datosServidor);
        setCargando(false);
      } catch (error) {
        console.log("Error al cargar datos:", error);
        setCargando(false);
      }
    };
    cargarDatos();
  }, []);

  useEffect(() => {
    const manejarCambioIdioma = (evento) => {
      setIdioma(evento.detail);
    };

    window.addEventListener("cambioIdioma", manejarCambioIdioma);
    return () => window.removeEventListener("cambioIdioma", manejarCambioIdioma);
  }, []);

  useEffect(() => {
    const manejarCambioModo = (evento) => {
      setModoOscuro(evento.detail);
    };

    window.addEventListener("cambioModo", manejarCambioModo);
    return () => window.removeEventListener("cambioModo", manejarCambioModo);
  }, []);

  if (cargando || !datos) {
    return (
      <div className={estilos.cargando}>
        <div className={estilos.spinner}></div>
        <span>Cargando...</span>
      </div>
    );
  }

  const contenido = datos.acerca[idioma];

  return (
    <section 
      id="Acerca" 
      className={`${estilos.seccionAcerca} ${modoOscuro ? estilos.dark : estilos.light}`}
    >
      <div className={estilos.contenedor}>
        <div className={estilos.todo}>
          <div className={estilos.contenidoA}>
            <div className={estilos.contenidoAa}>
              <h3>{contenido.titulo}</h3>
              <h5>{contenido.subtitulo}</h5>
              <p>{contenido.descripcion}</p>
              
              <nav className={estilos.redesSociales}>
                {Object.entries(datos.redesAcerca).map(([red, info]) => (
                  <a
                    key={red}
                    href={info.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={red}
                  >
                    <ion-icon name={info.icono}></ion-icon>
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className={estilos.contenidoB}>
            <div className={estilos.lineaVertical}></div>
            {contenido.habilidades.map((habilidad, index) => (
              <div key={index} className={estilos.barras}>
                <div 
                  className={estilos.barra} 
                  style={{ "--porcentaje": `${habilidad.porcentaje}%` }}
                >
                  <div className={estilos.gota}></div>
                </div>
                <span className={estilos.texto}>{habilidad.nombre}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}