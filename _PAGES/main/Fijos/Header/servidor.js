"use server";

export async function obtenerDatos() {
  const datos = {
    contenido: {
      es: {
        nombreLogo: "Brayan Developer",
        nombre: "Hola, Soy Brayan",
        titulo: "Desarrollador Full Stack"
      },
      en: {
        nombreLogo: "Brayan Developer",
        nombre: "Hello, I'm Brayan",
        titulo: "Full Stack Developer"
      }
    },
    navegacion: {
      es: {
        Inicio: "Inicio",
        Acerca: "Acerca",
        Habilidades: "Habilidades",
        Proyectos: "Proyectos",
        Estudios: "Estudios",
        Certificados: "Certificados"
      },
      en: {
        Inicio: "Home",
        Acerca: "About",
        Habilidades: "Skills",
        Proyectos: "Projects",
        Estudios: "Studies",
        Certificados: "Certificates"
      }
    },
    iconos: {
      Inicio: "home-outline",
      Acerca: "person-outline",
      Habilidades: "code-slash-outline",
      Proyectos: "folder-outline",
      Estudios: "school-outline",
      Certificados: "ribbon-outline"
    },
    redes: {
      github: "logo-github",
      linkedin: "logo-linkedin",
      twitter: "logo-twitter",
      instagram: "logo-instagram"
    }
  };

  return datos;
}