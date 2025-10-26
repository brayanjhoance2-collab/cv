"use client";
import estilos from "./estudios.module.css";
import { useState, useEffect } from "react";
import { obtenerDatos } from "./servidor";
import Image from "next/image";

export default function Estudios() {
  const [idioma, setIdioma] = useState("es");
  const [modoOscuro, setModoOscuro] = useState(true);
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [indiceActual, setIndiceActual] = useState(0);

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

  useEffect(() => {
    if (!datos) return;
    
    const interval = setInterval(() => {
      setIndiceActual((prevIndex) => (prevIndex + 1) % datos.estudios[idioma].lista.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [datos, idioma]);

  const siguienteSlide = () => {
    if (!datos) return;
    setIndiceActual((prevIndex) => (prevIndex + 1) % datos.estudios[idioma].lista.length);
  };

  const anteriorSlide = () => {
    if (!datos) return;
    setIndiceActual((prevIndex) => (prevIndex - 1 + datos.estudios[idioma].lista.length) % datos.estudios[idioma].lista.length);
  };

  const irASlide = (index) => {
    setIndiceActual(index);
  };

  if (cargando || !datos) {
    return (
      <div className={estilos.cargando}>
        <div className={estilos.spinner}></div>
        <span>Cargando...</span>
      </div>
    );
  }

  const contenido = datos.estudios[idioma];
  const estudiosLista = contenido.lista;

  return (
    <section 
      id="Estudios" 
      className={`${estilos.seccionEstudios} ${modoOscuro ? estilos.dark : estilos.light}`}
    >
      <div className={estilos.contenedor}>
        <h2 className={estilos.titulo}>{contenido.titulo}</h2>
        <p className={estilos.subtitulo}>{contenido.subtitulo}</p>

        <div className={estilos.carruselContainer}>
          <div className={estilos.carrusel}>
            {estudiosLista.map((estudio, index) => (
              <div
                key={index}
                className={`${estilos.slide} ${index === indiceActual ? estilos.active : ""}`}
                style={{ transform: `translateX(-${indiceActual * 100}%)` }}
              >
                <div className={estilos.slideContenido}>
                  <div className={estilos.imagenFondo}>
                    <Image
                      src={estudio.imagen}
                      alt={estudio.titulo}
                      fill
                      className={estilos.imagenEstudio}
                    />
                    <div className={estilos.overlayGradiente}></div>
                  </div>

                  <div className={estilos.infoCard}>
                    <div className={estilos.logoContainer}>
                      <Image
                        src={estudio.logo}
                        alt={estudio.titulo}
                        width={80}
                        height={80}
                        className={estilos.logo}
                      />
                    </div>

                    <div className={estilos.nivelBadge}>
                      <ion-icon name="school-outline"></ion-icon>
                      <span>{estudio.nivel}</span>
                    </div>

                    <h3 className={estilos.tituloEstudio}>{estudio.titulo}</h3>
                    <h4 className={estilos.institucion}>{estudio.institucion}</h4>

                    <div className={estilos.fecha}>
                      <ion-icon name="calendar-outline"></ion-icon>
                      <span>{estudio.fecha}</span>
                    </div>

                    <p className={estilos.descripcion}>{estudio.descripcion}</p>

                    {estudio.logros && estudio.logros.length > 0 && (
                      <div className={estilos.logros}>
                        <h5>{contenido.logros}</h5>
                        <ul>
                          {estudio.logros.map((logro, i) => (
                            <li key={i}>
                              <ion-icon name="checkmark-circle-outline"></ion-icon>
                              <span>{logro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className={estilos.flechaIzquierda} onClick={anteriorSlide}>
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
          <button className={estilos.flechaDerecha} onClick={siguienteSlide}>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>

          <div className={estilos.indicadores}>
            {estudiosLista.map((_, index) => (
              <button
                key={index}
                className={`${estilos.indicador} ${index === indiceActual ? estilos.indicadorActivo : ""}`}
                onClick={() => irASlide(index)}
                aria-label={`Ir a estudio ${index + 1}`}
              >
                <span className={estilos.indicadorNumero}>{index + 1}</span>
              </button>
            ))}
          </div>

          <div className={estilos.contador}>
            <span className={estilos.contadorActual}>{indiceActual + 1}</span>
            <span className={estilos.contadorSeparador}>/</span>
            <span className={estilos.contadorTotal}>{estudiosLista.length}</span>
          </div>
        </div>

        <div className={estilos.timeline}>
          {estudiosLista.map((estudio, index) => (
            <div
              key={index}
              className={`${estilos.timelineItem} ${index === indiceActual ? estilos.timelineItemActivo : ""}`}
              onClick={() => irASlide(index)}
            >
              <div className={estilos.timelineIcono}>
                <ion-icon name="school-outline"></ion-icon>
              </div>
              <div className={estilos.timelineContenido}>
                <span className={estilos.timelineTitulo}>{estudio.nivel}</span>
                <span className={estilos.timelineFecha}>{estudio.fecha}</span>
              </div>
            </div>
          ))}
          <div className={estilos.timelineLinea}></div>
        </div>
      </div>
    </section>
  );
}