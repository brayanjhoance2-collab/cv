"use server";

export async function obtenerDatos() {
  const datos = {
    certificados: {
      es: {
        titulo: "Certificados",
        subtitulo: "Mis logros y certificaciones profesionales",
        verCertificado: "Ver Certificado",
        certificadosPendientes: {
          titulo: "Certificados por Registrar",
          mensaje: "Actualmente estoy en proceso de recuperar varios certificados de mi correo antiguo. Esta sección se actualizará próximamente con todos mis certificados y logros académicos."
        },
        lista: [
          {
            titulo: "Desarrollo de Ciberseguridad",
            descripcion: "CISCO - Certificación en desarrollo y fundamentos de ciberseguridad",
            imagen: "/Certificados/1.jpg",
            fecha: "2023",
            institucion: "CISCO Networking Academy"
          },
          {
            titulo: "Curso de Python",
            descripcion: "CISCO - Programación en Python y desarrollo de aplicaciones",
            imagen: "/Certificados/2.jpg",
            fecha: "2023",
            institucion: "CISCO Networking Academy"
          },
          {
            titulo: "Desarrollo Web Full Stack",
            descripcion: "Certificación en desarrollo web frontend y backend completo",
            imagen: "/Certificados/3.jpg",
            fecha: "2022",
            institucion: "Plataforma Educativa Online"
          },
          {
            titulo: "Comité Organizador XXI CIIS 2020",
            descripcion: "Participación como organizador en el Congreso Internacional de Informática y Sistemas",
            imagen: "/Certificados/4.jpg",
            fecha: "2020",
            institucion: "Universidad Nacional"
          },
          {
            titulo: "CSS Avanzado y Diseño Responsive",
            descripcion: "Certificación en técnicas avanzadas de CSS y diseño web adaptable",
            imagen: "/Certificados/5.jpg",
            fecha: "2022",
            institucion: "Plataforma Educativa Online"
          }
        ]
      },
      en: {
        titulo: "Certificates",
        subtitulo: "My achievements and professional certifications",
        verCertificado: "View Certificate",
        certificadosPendientes: {
          titulo: "Certificates to be Registered",
          mensaje: "I am currently in the process of recovering several certificates from my old email. This section will be updated soon with all my certificates and academic achievements."
        },
        lista: [
          {
            titulo: "Cybersecurity Development",
            descripcion: "CISCO - Certification in cybersecurity development and fundamentals",
            imagen: "/Certificados/1.jpg",
            fecha: "2023",
            institucion: "CISCO Networking Academy"
          },
          {
            titulo: "Python Course",
            descripcion: "CISCO - Python programming and application development",
            imagen: "/Certificados/2.jpg",
            fecha: "2023",
            institucion: "CISCO Networking Academy"
          },
          {
            titulo: "Full Stack Web Development",
            descripcion: "Certification in complete frontend and backend web development",
            imagen: "/Certificados/3.jpg",
            fecha: "2022",
            institucion: "Online Educational Platform"
          },
          {
            titulo: "Organizing Committee XXI CIIS 2020",
            descripcion: "Participation as organizer in the International Congress of Informatics and Systems",
            imagen: "/Certificados/4.jpg",
            fecha: "2020",
            institucion: "National University"
          },
          {
            titulo: "Advanced CSS and Responsive Design",
            descripcion: "Certification in advanced CSS techniques and adaptive web design",
            imagen: "/Certificados/5.jpg",
            fecha: "2022",
            institucion: "Online Educational Platform"
          }
        ]
      }
    }
  };

  return datos;
}