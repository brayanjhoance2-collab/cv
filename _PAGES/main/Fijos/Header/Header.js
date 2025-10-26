"use client";
import estilos from "./Header.module.css";
import { useState, useEffect } from "react";
import { obtenerDatos } from "./servidor";
import Image from "next/image";

export default function Header() {
  const [idioma, setIdioma] = useState("es");
  const [seccionActual, setSeccionActual] = useState("Inicio");
  const [headerFijado, setHeaderFijado] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
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
    const manejarScroll = () => {
      const scrollY = window.scrollY;
      setHeaderFijado(scrollY > 50);

      const secciones = document.querySelectorAll("[id]");
      let seccionVisible = "Inicio";

      secciones.forEach((seccion) => {
        const rect = seccion.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          seccionVisible = seccion.id;
        }
      });

      setSeccionActual(seccionVisible);
    };

    window.addEventListener("scroll", manejarScroll);
    return () => window.removeEventListener("scroll", manejarScroll);
  }, []);

  const navegarASeccion = (idSeccion) => {
    const elemento = document.getElementById(idSeccion);
    if (elemento) {
      elemento.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuAbierto(false);
  };

  const cambiarIdioma = () => {
    const nuevoIdioma = idioma === "es" ? "en" : "es";
    setIdioma(nuevoIdioma);
    
    // Disparar evento personalizado para que otros componentes se enteren
    window.dispatchEvent(new CustomEvent("cambioIdioma", { detail: nuevoIdioma }));
  };

  const cambiarModo = () => {
    const nuevoModo = !modoOscuro;
    setModoOscuro(nuevoModo);
    document.body.classList.toggle("modoClaro");
    
    // Disparar evento personalizado para que otros componentes se enteren
    window.dispatchEvent(new CustomEvent("cambioModo", { detail: nuevoModo }));
  };

  if (cargando || !datos) {
    return <div className={estilos.cargando}>Cargando...</div>;
  }

  const contenido = datos.contenido[idioma];
  const navegacion = datos.navegacion[idioma];

  return (
    <>
      <header className={`${estilos.header} ${headerFijado ? estilos.headerFijado : ""} ${modoOscuro ? estilos.dark : estilos.light}`}>
        <div className={estilos.contenidoHeader}>
          <div className={estilos.logo} onClick={() => navegarASeccion("Inicio")}>
            <div className={estilos.logoImagen}>
              <Image 
                src="/perfil.jpg" 
                alt={contenido.nombre}
                width={45}
                height={45}
                className={estilos.imagenPerfil}
              />
            </div>
            <span className={estilos.logoTexto}>{contenido.nombreLogo}</span>
          </div>

          <nav className={estilos.navegacionDesktop}>
            <ul className={estilos.listaNavegacion}>
              {Object.entries(navegacion).map(([key, valor]) => (
                <li key={key}>
                  <button
                    className={`${estilos.enlace} ${
                      seccionActual === key ? estilos.enlaceActivo : ""
                    }`}
                    onClick={() => navegarASeccion(key)}
                  >
                    {valor}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className={estilos.controles}>
            <button className={estilos.botonModo} onClick={cambiarModo}>
              <ion-icon name={modoOscuro ? "sunny-outline" : "moon-outline"}></ion-icon>
            </button>
            
            <button className={estilos.botonIdioma} onClick={cambiarIdioma}>
              {idioma === "es" ? "EN" : "ES"}
            </button>

            <button
              className={estilos.botonMenu}
              onClick={() => setMenuAbierto(!menuAbierto)}
            >
              <ion-icon name={menuAbierto ? "close-outline" : "menu-outline"}></ion-icon>
            </button>
          </div>
        </div>
      </header>

      <div className={`${estilos.menuMovil} ${menuAbierto ? estilos.menuMovilAbierto : ""}`}>
        <button 
          className={estilos.cerrarMenu} 
          onClick={() => setMenuAbierto(false)}
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>
        
        <div className={estilos.contenidoMenuMovil}>
          <div className={estilos.perfilMovil}>
            <div className={estilos.avatarMovil}>
              <Image 
                src="/perfil.jpg" 
                alt={contenido.nombre}
                width={100}
                height={100}
                className={estilos.imagenPerfilMovil}
              />
            </div>
            <h3>{contenido.nombre}</h3>
            <p>{contenido.titulo}</p>
          </div>

          <nav className={estilos.navegacionMovil}>
            {Object.entries(navegacion).map(([key, valor]) => (
              <button
                key={key}
                className={`${estilos.enlaceMovil} ${
                  seccionActual === key ? estilos.enlaceMovilActivo : ""
                }`}
                onClick={() => navegarASeccion(key)}
              >
                <ion-icon name={datos.iconos[key]}></ion-icon>
                <span>{valor}</span>
              </button>
            ))}
          </nav>

          <div className={estilos.controlesMovil}>
            <button className={estilos.botonModoMovil} onClick={cambiarModo}>
              <ion-icon name={modoOscuro ? "sunny-outline" : "moon-outline"}></ion-icon>
              <span>{modoOscuro ? "Modo Claro" : "Modo Oscuro"}</span>
            </button>
            
            <button className={estilos.botonIdiomaMovil} onClick={cambiarIdioma}>
              <ion-icon name="language-outline"></ion-icon>
              <span>{idioma === "es" ? "English" : "Español"}</span>
            </button>
          </div>

          <div className={estilos.redesMovil}>
            {Object.entries(datos.redes).map(([red, icono]) => (
              <a
                key={red}
                href="#"
                className={estilos.redSocial}
                aria-label={red}
              >
                <ion-icon name={icono}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={`${estilos.overlay} ${menuAbierto ? estilos.overlayVisible : ""}`} 
           onClick={() => setMenuAbierto(false)} />
    </>
  );
}