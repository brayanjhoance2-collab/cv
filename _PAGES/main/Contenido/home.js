"use client"
import Home from "./home/home";
import estilos from "./home.module.css";
import Acerca from "@/_PAGES/main/Contenido/Acerca/Acerca";
import Habilidades from "@/_PAGES/main/Contenido/Habilidades/Habilidades";
import Proyectos from "@/_PAGES/main/Contenido/Proyectos/Proyectos";
import Estudios from "@/_PAGES/main/Contenido/Educacion/Estudios";
import Certificados from "@/_PAGES/main/Contenido/Certificados/Certificados";
export default function HomeGeneral() {
  return (
    <div className={estilos.todo}>
      <div  id="Inicio">
        <Home></Home>
      </div>
      <div id="Acerca">
        <Acerca></Acerca>
      </div>
      <div id="Habilidades">
        <Habilidades></Habilidades>
      </div>
      <div id="Proyectos">
        <Proyectos></Proyectos>
      </div>
      <div id="Estudios">
        <Estudios></Estudios>
      </div>
      <div id="Certificados">
        <Certificados></Certificados>
      </div> 
    </div>
  );
}
