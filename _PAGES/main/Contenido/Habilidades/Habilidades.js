"use client";
import estilos from "./habilidades.module.css";
import { useState, useEffect } from "react";
import { obtenerDatos } from "./servidor";
import Image from "next/image";

export default function Habilidades() {
  const [idioma, setIdioma] = useState("es");
  const [modoOscuro, setModoOscuro] = useState(true);
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [categoria, setCategoria] = useState("web");

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

  const cambiarCategoria = (nuevaCategoria) => {
    setCategoria(nuevaCategoria);
  };

  if (cargando || !datos) {
    return (
      <div className={estilos.cargando}>
        <div className={estilos.spinner}></div>
        <span>Cargando...</span>
      </div>
    );
  }

  const contenido = datos.habilidades[idioma];
  const habilidadesActuales = contenido[categoria];

  return (
    <section 
      id="Habilidades" 
      className={`${estilos.seccionHabilidades} ${modoOscuro ? estilos.dark : estilos.light}`}
    >
      <div className={estilos.contenedor}>
        <h2 className={estilos.titulo}>{contenido.titulo}</h2>
        
        <div className={estilos.categorias}>
          <button 
            onClick={() => cambiarCategoria("web")} 
            className={`${estilos.botonCategoria} ${categoria === "web" ? estilos.activo : ""}`}
          >
            <ion-icon name="globe-outline"></ion-icon>
            <span>{contenido.categorias.web}</span>
          </button>
          <button 
            onClick={() => cambiarCategoria("movil")} 
            className={`${estilos.botonCategoria} ${categoria === "movil" ? estilos.activo : ""}`}
          >
            <ion-icon name="phone-portrait-outline"></ion-icon>
            <span>{contenido.categorias.movil}</span>
          </button>
          <button 
            onClick={() => cambiarCategoria("scripts")} 
            className={`${estilos.botonCategoria} ${categoria === "scripts" ? estilos.activo : ""}`}
          >
            <ion-icon name="terminal-outline"></ion-icon>
            <span>{contenido.categorias.scripts}</span>
          </button>
        </div>

        <div className={estilos.gridHabilidades}>
          {habilidadesActuales.map((habilidad, index) => (
            <div key={index} className={estilos.tarjeta}>
              <div className={estilos.tarjetaHeader}>
                <div className={estilos.iconoContenedor}>
                  <Image 
                    src={habilidad.imagen} 
                    alt={habilidad.alt}
                    width={60}
                    height={60}
                    className={estilos.iconoImagen}
                  />
                </div>
                <h3 className={estilos.tarjetaTitulo}>{habilidad.titulo}</h3>
              </div>
              <div className={estilos.tarjetaBody}>
                <p className={estilos.tarjetaDescripcion}>{habilidad.informacion}</p>
              </div>
              <div className={estilos.tarjetaFooter}>
                <div className={estilos.lineaAnimada}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}