"use client";
import estilos from "./proyectos.module.css";
import { useState, useEffect } from "react";
import { obtenerDatos } from "./servidor";
import Image from "next/image";

export default function Proyectos() {
  const [idioma, setIdioma] = useState("es");
  const [modoOscuro, setModoOscuro] = useState(true);
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [añoSeleccionado, setAñoSeleccionado] = useState("2024");
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const proyectosPorPagina = 6;

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

  const cambiarAño = (año) => {
    setAñoSeleccionado(año);
    setPaginaActual(1);
  };

  const mostrarDetalles = (proyecto) => {
    setProyectoSeleccionado(proyecto);
  };

  const cerrarDetalles = () => {
    setProyectoSeleccionado(null);
  };

  if (cargando || !datos) {
    return (
      <div className={estilos.cargando}>
        <div className={estilos.spinner}></div>
        <span>Cargando...</span>
      </div>
    );
  }

  const contenido = datos.proyectos[idioma];
  const proyectosFiltrados = contenido.lista.filter(
    (proyecto) => proyecto.año === añoSeleccionado
  );

  const indiceUltimo = paginaActual * proyectosPorPagina;
  const indicePrimero = indiceUltimo - proyectosPorPagina;
  const proyectosActuales = proyectosFiltrados.slice(indicePrimero, indiceUltimo);
  const totalPaginas = Math.ceil(proyectosFiltrados.length / proyectosPorPagina);

  const cambiarPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      id="Proyectos" 
      className={`${estilos.seccionProyectos} ${modoOscuro ? estilos.dark : estilos.light}`}
    >
      <div className={estilos.contenedor}>
        <h2 className={estilos.titulo}>{contenido.titulo}</h2>
        <p className={estilos.subtitulo}>{contenido.subtitulo}</p>

        <div className={estilos.contenedorTimeline}>
          <div className={estilos.linea}></div>
          <div className={estilos.filtrosAños}>
            {contenido.años.map((año) => (
              <button
                key={año}
                className={`${estilos.botonAño} ${
                  añoSeleccionado === año ? estilos.activo : ""
                }`}
                onClick={() => cambiarAño(año)}
              >
                {año}
              </button>
            ))}
          </div>
        </div>

        {proyectosActuales.length > 0 ? (
          <>
            <div className={estilos.gridProyectos}>
              {proyectosActuales.map((proyecto, index) => (
                <div
                  key={index}
                  className={estilos.tarjeta}
                  onClick={() => mostrarDetalles(proyecto)}
                >
                  <div className={estilos.imagenProyecto}>
                    <Image
                      src={proyecto.imagen}
                      alt={proyecto.titulo}
                      width={400}
                      height={250}
                      className={estilos.imagen}
                    />
                    <div className={estilos.overlay}>
                      <ion-icon name="eye-outline"></ion-icon>
                      <span>{contenido.verDetalles}</span>
                    </div>
                  </div>
                  <div className={estilos.contenidoTarjeta}>
                    <h3 className={estilos.tituloTarjeta}>{proyecto.titulo}</h3>
                    <div className={estilos.tecnologias}>
                      {proyecto.tecnologias && proyecto.tecnologias.map((tech, i) => (
                        <span key={i} className={estilos.tecnologia}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {totalPaginas > 1 && (
              <div className={estilos.paginacion}>
                <button
                  className={estilos.botonPagina}
                  onClick={() => cambiarPagina(paginaActual - 1)}
                  disabled={paginaActual === 1}
                >
                  <ion-icon name="chevron-back-outline"></ion-icon>
                </button>

                {[...Array(totalPaginas)].map((_, index) => (
                  <button
                    key={index}
                    className={`${estilos.numeroPagina} ${
                      paginaActual === index + 1 ? estilos.paginaActiva : ""
                    }`}
                    onClick={() => cambiarPagina(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  className={estilos.botonPagina}
                  onClick={() => cambiarPagina(paginaActual + 1)}
                  disabled={paginaActual === totalPaginas}
                >
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className={estilos.noProyectos}>
            <ion-icon name="folder-open-outline"></ion-icon>
            <p>{contenido.noProyectos}</p>
          </div>
        )}

        {proyectoSeleccionado && (
          <div className={estilos.modal} onClick={cerrarDetalles}>
            <div
              className={estilos.modalContenido}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={estilos.cerrar} onClick={cerrarDetalles}>
                <ion-icon name="close-outline"></ion-icon>
              </button>

              <h2 className={estilos.tituloModal}>
                {proyectoSeleccionado.titulo}
              </h2>

              <div className={estilos.mediaModal}>
                {proyectoSeleccionado.video ? (
                  <video
                    src={proyectoSeleccionado.video}
                    controls
                    className={estilos.videoModal}
                  />
                ) : (
                  <Image
                    src={proyectoSeleccionado.imagen}
                    alt={proyectoSeleccionado.titulo}
                    width={800}
                    height={450}
                    className={estilos.imagenModal}
                  />
                )}
              </div>

              <div className={estilos.descripcionModal}>
                <p>{proyectoSeleccionado.descripcion}</p>
              </div>

              {proyectoSeleccionado.tecnologias && (
                <div className={estilos.tecnologiasModal}>
                  <h4>{contenido.tecnologiasUsadas}</h4>
                  <div className={estilos.listaTecnologias}>
                    {proyectoSeleccionado.tecnologias.map((tech, i) => (
                      <span key={i} className={estilos.tecnologiaModal}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className={estilos.enlaces}>
                {proyectoSeleccionado.linkPagina ? (
                  <a
                    href={proyectoSeleccionado.linkPagina}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={estilos.botonEnlace}
                  >
                    <ion-icon name="globe-outline"></ion-icon>
                    <span>{contenido.verSitio}</span>
                  </a>
                ) : (
                  <span className={estilos.privado}>
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    {contenido.sitioPrivado}
                  </span>
                )}

                {proyectoSeleccionado.linkRepositorio ? (
                  <a
                    href={proyectoSeleccionado.linkRepositorio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={estilos.botonEnlace}
                  >
                    <ion-icon name="logo-github"></ion-icon>
                    <span>{contenido.verCodigo}</span>
                  </a>
                ) : (
                  <span className={estilos.privado}>
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    {contenido.repositorioPrivado}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}