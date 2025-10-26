"use client";
import estilos from "./certificados.module.css";
import { useState, useEffect } from "react";
import { obtenerDatos } from "./servidor";
import Image from "next/image";

export default function Certificados() {
  const [idioma, setIdioma] = useState("es");
  const [modoOscuro, setModoOscuro] = useState(true);
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [paginaActual, setPaginaActual] = useState(1);
  const [certificadoSeleccionado, setCertificadoSeleccionado] = useState(null);
  const certificadosPorPagina = 6;

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

  const abrirModal = (certificado) => {
    setCertificadoSeleccionado(certificado);
  };

  const cerrarModal = () => {
    setCertificadoSeleccionado(null);
  };

  if (cargando || !datos) {
    return (
      <div className={estilos.cargando}>
        <div className={estilos.spinner}></div>
        <span>Cargando...</span>
      </div>
    );
  }

  const contenido = datos.certificados[idioma];
  const indiceUltimo = paginaActual * certificadosPorPagina;
  const indicePrimero = indiceUltimo - certificadosPorPagina;
  const certificadosActuales = contenido.lista.slice(indicePrimero, indiceUltimo);
  const totalPaginas = Math.ceil(contenido.lista.length / certificadosPorPagina);

  const cambiarPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      id="Certificados" 
      className={`${estilos.seccionCertificados} ${modoOscuro ? estilos.dark : estilos.light}`}
    >
      <div className={estilos.contenedor}>
        <h2 className={estilos.titulo}>{contenido.titulo}</h2>
        <p className={estilos.subtitulo}>{contenido.subtitulo}</p>

        <div className={estilos.gridCertificados}>
          {certificadosActuales.map((certificado, index) => (
            <div
              key={index}
              className={estilos.tarjeta}
              onClick={() => abrirModal(certificado)}
            >
              <div className={estilos.imagenContainer}>
                <Image
                  src={certificado.imagen}
                  alt={certificado.titulo}
                  width={400}
                  height={280}
                  className={estilos.imagen}
                />
                <div className={estilos.overlay}>
                  <ion-icon name="eye-outline"></ion-icon>
                  <span>{contenido.verCertificado}</span>
                </div>
              </div>
              <div className={estilos.contenidoTarjeta}>
                <div className={estilos.iconoTitulo}>
                  <ion-icon name="ribbon-outline"></ion-icon>
                  <h3 className={estilos.tituloTarjeta}>{certificado.titulo}</h3>
                </div>
                <p className={estilos.descripcion}>{certificado.descripcion}</p>
                {certificado.fecha && (
                  <div className={estilos.fecha}>
                    <ion-icon name="calendar-outline"></ion-icon>
                    <span>{certificado.fecha}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {contenido.certificadosPendientes && (
          <div className={estilos.pendientes}>
            <div className={estilos.iconoPendiente}>
              <ion-icon name="time-outline"></ion-icon>
            </div>
            <div className={estilos.textoPendiente}>
              <h4>{contenido.certificadosPendientes.titulo}</h4>
              <p>{contenido.certificadosPendientes.mensaje}</p>
            </div>
          </div>
        )}

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

        {certificadoSeleccionado && (
          <div className={estilos.modal} onClick={cerrarModal}>
            <div
              className={estilos.modalContenido}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={estilos.cerrar} onClick={cerrarModal}>
                <ion-icon name="close-outline"></ion-icon>
              </button>

              <div className={estilos.modalHeader}>
                <div className={estilos.modalIcono}>
                  <ion-icon name="ribbon-outline"></ion-icon>
                </div>
                <h2 className={estilos.modalTitulo}>
                  {certificadoSeleccionado.titulo}
                </h2>
              </div>

              <div className={estilos.modalImagen}>
                <Image
                  src={certificadoSeleccionado.imagen}
                  alt={certificadoSeleccionado.titulo}
                  width={900}
                  height={600}
                  className={estilos.imagenModal}
                />
              </div>

              <div className={estilos.modalInfo}>
                <p className={estilos.modalDescripcion}>
                  {certificadoSeleccionado.descripcion}
                </p>
                {certificadoSeleccionado.fecha && (
                  <div className={estilos.modalFecha}>
                    <ion-icon name="calendar-outline"></ion-icon>
                    <span>{certificadoSeleccionado.fecha}</span>
                  </div>
                )}
                {certificadoSeleccionado.institucion && (
                  <div className={estilos.modalInstitucion}>
                    <ion-icon name="school-outline"></ion-icon>
                    <span>{certificadoSeleccionado.institucion}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}