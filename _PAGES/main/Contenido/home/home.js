"use client";
import estilos from "./home.module.css";
import { useState, useEffect } from "react";
import { obtenerDatos } from "./servidor";
import Image from "next/image";
import Letra from "@/_EXTRAS/Animaciones/letras";

export default function Home() {
  const [idioma, setIdioma] = useState("es");
  const [modoOscuro, setModoOscuro] = useState(true);
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [mostrarFlecha, setMostrarFlecha] = useState(true);

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
    // Sincronizar el idioma con el header si existe
    const manejarCambioIdioma = (evento) => {
      setIdioma(evento.detail);
    };

    window.addEventListener("cambioIdioma", manejarCambioIdioma);
    return () => window.removeEventListener("cambioIdioma", manejarCambioIdioma);
  }, []);

  useEffect(() => {
    // Sincronizar el modo oscuro con el header si existe
    const manejarCambioModo = (evento) => {
      setModoOscuro(evento.detail);
    };

    window.addEventListener("cambioModo", manejarCambioModo);
    return () => window.removeEventListener("cambioModo", manejarCambioModo);
  }, []);

  useEffect(() => {
    const manejarScroll = () => {
      const scrollY = window.scrollY;
      setMostrarFlecha(scrollY < 100);
    };

    window.addEventListener("scroll", manejarScroll);
    return () => window.removeEventListener("scroll", manejarScroll);
  }, []);

  const navegarASeccion = (idSeccion) => {
    const elemento = document.getElementById(idSeccion);
    if (elemento) {
      elemento.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const abrirWhatsApp = () => {
    if (datos && datos.contacto && datos.contenidoHome[idioma]) {
      const numero = datos.contacto.whatsapp;
      const mensaje = encodeURIComponent(datos.contenidoHome[idioma].mensajeWhatsapp);
      const url = `https://wa.me/${numero}?text=${mensaje}`;
      window.open(url, '_blank');
    }
  };

  if (cargando || !datos) {
    return (
      <div className={estilos.cargando}>
        <div className={estilos.spinner}></div>
        <span>Cargando...</span>
      </div>
    );
  }

  const contenido = datos.contenidoHome[idioma];

  return (
    <section 
      id="Inicio" 
      className={`${estilos.seccionInicio} ${modoOscuro ? estilos.dark : estilos.light}`}
    >
      <div className={estilos.fondoAnimado}>
        <div className={estilos.particula}></div>
        <div className={estilos.particula}></div>
        <div className={estilos.particula}></div>
        <div className={estilos.particula}></div>
        <div className={estilos.particula}></div>
      </div>

      <div className={estilos.contenedorPrincipal}>
        <div className={estilos.contenidoInicio}>
          
          <div className={estilos.columnaIzquierda}>
            <div className={estilos.textoSaludo}>
              <span className={estilos.lineaDecorativa}></span>
              <span className={estilos.saludoTexto}>{contenido.saludo}</span>
            </div>

            <h1 className={estilos.nombre}>
              {contenido.nombre.split(" ").map((palabra, index) => (
                <span key={index} className={estilos.palabraNombre}>
                  {palabra}
                </span>
              ))}
            </h1>

            <div className={estilos.tituloAnimado}>
              <Letra
                texto={contenido.titulo}
                diseño={estilos.letraAnimada}
              />
            </div>

            <p className={estilos.descripcion}>
              {contenido.descripcion}
            </p>

            <div className={estilos.botones}>
              <button 
                className={estilos.botonPrimario}
                onClick={() => navegarASeccion("Proyectos")}
              >
                <ion-icon name="folder-outline"></ion-icon>
                <span>{contenido.botonProyectos}</span>
              </button>
              
              <button 
                className={estilos.botonSecundario}
                onClick={abrirWhatsApp}
              >
                <ion-icon name="logo-whatsapp"></ion-icon>
                <span>{contenido.botonContacto}</span>
              </button>
            </div>

            <div className={estilos.redesSociales}>
              {Object.entries(datos.redesHome).map(([red, info]) => (
                <a
                  key={red}
                  href={info.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={estilos.iconoRed}
                  aria-label={red}
                >
                  <ion-icon name={info.icono}></ion-icon>
                </a>
              ))}
            </div>
          </div>

          <div className={estilos.columnaDerecha}>
            <div className={estilos.contenedorImagen}>
              <div className={estilos.marcoImagen}>
                <div className={estilos.circuloDecorativo}></div>
                <div className={estilos.circuloDecorativo2}></div>
                <div className={estilos.imagenPerfil}>
                  <Image 
                    src="/perfil.jpg" 
                    alt={contenido.nombre}
                    width={400}
                    height={400}
                    priority
                    className={estilos.imagen}
                  />
                </div>
              </div>

              <div className={estilos.estadisticas}>
                {contenido.estadisticas.map((stat, index) => (
                  <div key={index} className={estilos.estadistica}>
                    <span className={estilos.numeroEstadistica}>{stat.numero}</span>
                    <span className={estilos.textoEstadistica}>{stat.texto}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {mostrarFlecha && (
        <div 
          className={estilos.flechaAbajo}
          onClick={() => navegarASeccion("Acerca")}
        >
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
      )}

      <div className={estilos.elementosFlotantes}>
        <div className={estilos.cubo}></div>
        <div className={estilos.triangulo}></div>
        <div className={estilos.circulo}></div>
      </div>
    </section>
  );
}