"use client";
import { useState, useEffect } from "react";

export default function Letra({ texto,diseño }) {
  const [textoAnimado, setTextoAnimado] = useState("");
  const [escribiendo, setEscribiendo] = useState(true);
  const [indiceCaracter, setIndiceCaracter] = useState(0);

  useEffect(() => {
    let interval;

    if (escribiendo) {
      // Intervalo para escribir el texto letra por letra
      interval = setInterval(() => {
        const caracterActual = texto[indiceCaracter];

        if (!caracterActual) {
          // Si hemos llegado al final del texto, cambiamos a modo de borrado
          clearInterval(interval);
          setEscribiendo(false);
        } else {
          // Agregamos el caracter actual al texto animado
          setTextoAnimado((prevTexto) => prevTexto + caracterActual);
          setIndiceCaracter((prevIndice) => prevIndice + 1);
        }
      }, 250); // Velocidad de escritura (milisegundos por caracter)
    } else {
      // Intervalo para borrar el texto letra por letra
      interval = setInterval(() => {
        if (indiceCaracter === 0) {
          // Si hemos borrado todo el texto, volvemos a escribir
          clearInterval(interval);
          setEscribiendo(true);
          setIndiceCaracter(0);
          setTextoAnimado("");
        } else {
          // Eliminamos el último caracter del texto animado
          setTextoAnimado((prevTexto) =>
            prevTexto.substring(0, prevTexto.length - 1)
          );
          setIndiceCaracter((prevIndice) => prevIndice - 1);
        }
      }, 250); // Velocidad de borrado (milisegundos por caracter)
    }

    return () => clearInterval(interval);
  }, [texto, escribiendo, indiceCaracter]);

  return <h4 className={diseño}>{textoAnimado}</h4>;
}
