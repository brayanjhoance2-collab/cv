"use server";

export async function obtenerDatos() {
  const datos = {
    acerca: {
      es: {
        titulo: "Brayan Developer",
        subtitulo: "- Desarrollador Web (Backend y Frontend)",
        descripcion: "Como desarrollador web independiente, mi experiencia abarca una amplia gama de tecnologías, desde el desarrollo frontend con HTML, CSS y JavaScript hasta el backend con Node.js y bases de datos como SQL Server, MySQL, PostgreSQL y MongoDB. Especializado en el framework Next.js y con habilidades en despliegue de aplicaciones en servidores VPS utilizando Nginx, estoy capacitado para crear y mantener sitios web desde cero, así como proporcionar un sólido mantenimiento continuo.",
        habilidades: [
          {
            nombre: "Liderazgo",
            porcentaje: 80
          },
          {
            nombre: "Apoyo",
            porcentaje: 95
          },
          {
            nombre: "Grupo",
            porcentaje: 90
          }
        ]
      },
      en: {
        titulo: "Brayan Developer",
        subtitulo: "- Web Developer (Backend and Frontend)",
        descripcion: "As an independent web developer, my experience spans a wide range of technologies, from frontend development with HTML, CSS and JavaScript to backend with Node.js and databases such as SQL Server, MySQL, PostgreSQL and MongoDB. Specialized in the Next.js framework and with skills in deploying applications on VPS servers using Nginx, I am qualified to create and maintain websites from scratch, as well as provide solid ongoing maintenance.",
        habilidades: [
          {
            nombre: "Leadership",
            porcentaje: 80
          },
          {
            nombre: "Support",
            porcentaje: 95
          },
          {
            nombre: "Teamwork",
            porcentaje: 90
          }
        ]
      }
    },
    redesAcerca: {
      /*
      github: {
        url: "https://github.com/brayanjhoance2-collab",
        icono: "logo-github"
      },*/
      facebook: {
        url: "https://www.facebook.com/profile.php?id=61556819831554",
        icono: "logo-facebook"
      },
      whatsapp: {
        url: "https://wa.me/51935790269?text=Hola%20Brayan%2C%20me%20gustaría%20hablar%20contigo%20sobre%20un%20trabajo%20de%20programación",
        icono: "logo-whatsapp"
      },
      email: {
        url: "mailto:brayanjhoance@gmail.com?subject=Trabajo%20de%20programación&body=Hola%20Brayan%2C%20me%20gustaría%20hablar%20contigo%20sobre%20un%20trabajo%20de%20programación",
        icono: "mail-outline"
      }
    }
  };

  return datos;
}