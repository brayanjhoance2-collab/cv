"use server";

export async function obtenerDatos() {
  const datos = {
    estudios: {
      es: {
        titulo: "Formación Académica",
        subtitulo: "Mi trayectoria educativa y desarrollo profesional",
        logros: "Logros Destacados",
        lista: [
          {
            nivel: "Educación Inicial",
            titulo: "Jardín 269",
            institucion: "Jardín 269",
            fecha: "Enero de 2008",
            descripcion: "Inicio de mi formación académica en el nivel inicial en el Jardín 269, donde desarrollé las bases de mi educación y habilidades sociales fundamentales para mi crecimiento personal.",
            imagen: "/Estudios/Inicial.jpeg",
            logo: "/Estudios/1.png",
            logros: [
              "Desarrollo de habilidades básicas de comunicación",
              "Primeros pasos en el aprendizaje colaborativo",
              "Adaptación exitosa al entorno educativo"
            ]
          },
          {
            nivel: "Educación Primaria",
            titulo: "I.E 22661 Juan Donaire Vizarreta",
            institucion: "I.E 22661 Juan Donaire Vizarreta",
            fecha: "Marzo de 2012",
            descripcion: "Finalicé la educación primaria con honores en la I.E 22661 Juan Donaire Vizarreta, donde adquirí habilidades fundamentales para mi desarrollo académico y fortalecí mis conocimientos en todas las áreas básicas.",
            imagen: "/Estudios/Primaria.jpeg",
            logo: "/Estudios/2.png",
            logros: [
              "Graduación con honores académicos",
              "Participación en concursos escolares",
              "Desarrollo de habilidades en matemáticas y comunicación",
              "Reconocimiento por excelencia académica"
            ]
          },
          {
            nivel: "Educación Secundaria",
            titulo: "La Victoria de Ayacucho",
            institucion: "Colegio Nacional de Ciencias y Artes 'La Victoria de Ayacucho'",
            fecha: "Noviembre de 2018",
            descripcion: "Concluí la educación secundaria con especialización en ciencias en el Colegio Nacional de Ciencias y Artes 'La Victoria de Ayacucho', fortaleciendo mis conocimientos en diversas disciplinas científicas y desarrollando mi pasión por la tecnología.",
            imagen: "/Estudios/Secundaria.png",
            logo: "/Estudios/3.png",
            logros: [
              "Especialización en ciencias y tecnología",
              "Participación en proyectos científicos",
              "Reconocimiento por destacado rendimiento académico",
              "Desarrollo de habilidades en programación básica"
            ]
          },
          {
            nivel: "Educación Superior",
            titulo: "Ingeniería de Software con IA",
            institucion: "SENATI - Servicio Nacional de Adiestramiento en Trabajo Industrial",
            fecha: "Diciembre de 2022",
            descripcion: "Culminé mis estudios en Ingeniería de Software con especialización en Inteligencia Artificial en SENATI. Actualmente en proceso de obtención del título profesional. Me formé con las mejores prácticas del desarrollo de software y tecnologías emergentes.",
            imagen: "/Estudios/Universidad.jpg",
            logo: "/Estudios/4.png",
            logros: [
              "Especialización en Ingeniería de Software con IA",
              "Desarrollo de múltiples proyectos reales",
              "Dominio de frameworks modernos (Next.js, React)",
              "Certificaciones en tecnologías web actuales",
              "Experiencia en desarrollo Full Stack"
            ]
          }
        ]
      },
      en: {
        titulo: "Academic Background",
        subtitulo: "My educational journey and professional development",
        logros: "Outstanding Achievements",
        lista: [
          {
            nivel: "Early Education",
            titulo: "Kindergarten 269",
            institucion: "Kindergarten 269",
            fecha: "January 2008",
            descripcion: "Beginning of my academic training at the initial level at Kindergarten 269, where I developed the foundations of my education and fundamental social skills for my personal growth.",
            imagen: "/Estudios/Inicial.jpeg",
            logo: "/Estudios/1.png",
            logros: [
              "Development of basic communication skills",
              "First steps in collaborative learning",
              "Successful adaptation to educational environment"
            ]
          },
          {
            nivel: "Primary Education",
            titulo: "I.E 22661 Juan Donaire Vizarreta",
            institucion: "I.E 22661 Juan Donaire Vizarreta",
            fecha: "March 2012",
            descripcion: "Completed primary education with honors at I.E 22661 Juan Donaire Vizarreta, where I acquired fundamental skills for my academic development and strengthened my knowledge in all basic areas.",
            imagen: "/Estudios/Primaria.jpeg",
            logo: "/Estudios/2.png",
            logros: [
              "Graduation with academic honors",
              "Participation in school competitions",
              "Development of skills in mathematics and communication",
              "Recognition for academic excellence"
            ]
          },
          {
            nivel: "Secondary Education",
            titulo: "La Victoria de Ayacucho",
            institucion: "National College of Sciences and Arts 'La Victoria de Ayacucho'",
            fecha: "November 2018",
            descripcion: "Completed secondary education with specialization in sciences at the National College of Sciences and Arts 'La Victoria de Ayacucho', strengthening my knowledge in various scientific disciplines and developing my passion for technology.",
            imagen: "/Estudios/Secundaria.png",
            logo: "/Estudios/3.png",
            logros: [
              "Specialization in science and technology",
              "Participation in scientific projects",
              "Recognition for outstanding academic performance",
              "Development of basic programming skills"
            ]
          },
          {
            nivel: "Higher Education",
            titulo: "Software Engineering with AI",
            institucion: "SENATI - National Service of Industrial Labor Training",
            fecha: "December 2022",
            descripcion: "Completed my studies in Software Engineering with specialization in Artificial Intelligence at SENATI. Currently in the process of obtaining my professional degree. I trained with the best software development practices and emerging technologies.",
            imagen: "/Estudios/Universidad.jpg",
            logo: "/Estudios/4.png",
            logros: [
              "Specialization in Software Engineering with AI",
              "Development of multiple real projects",
              "Mastery of modern frameworks (Next.js, React)",
              "Certifications in current web technologies",
              "Full Stack development experience"
            ]
          }
        ]
      }
    }
  };

  return datos;
}