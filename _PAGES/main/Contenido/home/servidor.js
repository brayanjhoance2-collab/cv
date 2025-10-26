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
    },
    contenidoHome: {
      es: {
        saludo: "Bienvenido a mi portafolio",
        nombre: "Hola, Soy Brayan",
        titulo: "Desarrollador Web Full Stack | Backend & Frontend",
        descripcion: "Apasionado por crear soluciones digitales innovadoras y eficientes. Especializado en el desarrollo de aplicaciones web modernas con tecnologías de vanguardia.",
        botonProyectos: "Ver Proyectos",
        botonContacto: "Contactar",
        mensajeWhatsapp: "Hola Brayan, vi tu portafolio y me gustaría conversar contigo.",
        estadisticas: [
          { numero: "4+", texto: "Años de Experiencia" },
          { numero: "50+", texto: "Proyectos Completados" },
          { numero: "30+", texto: "Clientes Satisfechos" }
        ]
      },
      en: {
        saludo: "Welcome to my portfolio",
        nombre: "Hello, I'm Brayan",
        titulo: "Full Stack Web Developer | Backend & Frontend",
        descripcion: "Passionate about creating innovative and efficient digital solutions. Specialized in developing modern web applications with cutting-edge technologies.",
        botonProyectos: "View Projects",
        botonContacto: "Contact",
        mensajeWhatsapp: "Hello Brayan, I saw your portfolio and I would like to talk with you.",
        estadisticas: [
          { numero: "4+", texto: "Years of Experience" },
          { numero: "50+", texto: "Projects Completed" },
          { numero: "30+", texto: "Happy Clients" }
        ]
      }
    },
    redesHome: {
        facebook: {
        url: "https://instagram.com/tu-usuario",
        icono: "logo-facebook"
      },
/*      github: {
        url: "https://github.com/tu-usuario",
        icono: "logo-github"
      },
      linkedin: {
        url: "https://linkedin.com/in/tu-usuario",
        icono: "logo-linkedin"
      },
      twitter: {
        url: "https://twitter.com/tu-usuario",
        icono: "logo-twitter"
      },
      instagram: {
        url: "https://instagram.com/tu-usuario",
        icono: "logo-instagram"
      },
      youtube: {
        url: "https://youtube.com/@tu-usuario",
        icono: "logo-youtube"
      }*/
    },
    contacto: {
      whatsapp: "+51935790269"
    },
    habilidades: {
      es: {
        titulo: "Mis Habilidades",
        subtitulo: "Tecnologías que domino",
        categorias: {
          frontend: {
            nombre: "Frontend",
            icono: "desktop-outline",
            tecnologias: [
              { nombre: "React.js", nivel: 90 },
              { nombre: "Next.js", nivel: 85 },
              { nombre: "TypeScript", nivel: 80 },
              { nombre: "Tailwind CSS", nivel: 95 },
              { nombre: "HTML/CSS", nivel: 95 },
              { nombre: "JavaScript", nivel: 90 }
            ]
          },
          backend: {
            nombre: "Backend",
            icono: "server-outline",
            tecnologias: [
              { nombre: "Node.js", nivel: 85 },
              { nombre: "Express.js", nivel: 80 },
              { nombre: "Python", nivel: 75 },
              { nombre: "PostgreSQL", nivel: 80 },
              { nombre: "MongoDB", nivel: 85 },
              { nombre: "REST APIs", nivel: 90 }
            ]
          },
          herramientas: {
            nombre: "Herramientas",
            icono: "construct-outline",
            tecnologias: [
              { nombre: "Git/GitHub", nivel: 90 },
              { nombre: "Docker", nivel: 70 },
              { nombre: "AWS", nivel: 65 },
              { nombre: "Figma", nivel: 80 },
              { nombre: "VS Code", nivel: 95 },
              { nombre: "Postman", nivel: 85 }
            ]
          }
        }
      },
      en: {
        titulo: "My Skills",
        subtitulo: "Technologies I master",
        categorias: {
          frontend: {
            nombre: "Frontend",
            icono: "desktop-outline",
            tecnologias: [
              { nombre: "React.js", nivel: 90 },
              { nombre: "Next.js", nivel: 85 },
              { nombre: "TypeScript", nivel: 80 },
              { nombre: "Tailwind CSS", nivel: 95 },
              { nombre: "HTML/CSS", nivel: 95 },
              { nombre: "JavaScript", nivel: 90 }
            ]
          },
          backend: {
            nombre: "Backend",
            icono: "server-outline",
            tecnologias: [
              { nombre: "Node.js", nivel: 85 },
              { nombre: "Express.js", nivel: 80 },
              { nombre: "Python", nivel: 75 },
              { nombre: "PostgreSQL", nivel: 80 },
              { nombre: "MongoDB", nivel: 85 },
              { nombre: "REST APIs", nivel: 90 }
            ]
          },
          herramientas: {
            nombre: "Tools",
            icono: "construct-outline",
            tecnologias: [
              { nombre: "Git/GitHub", nivel: 90 },
              { nombre: "Docker", nivel: 70 },
              { nombre: "AWS", nivel: 65 },
              { nombre: "Figma", nivel: 80 },
              { nombre: "VS Code", nivel: 95 },
              { nombre: "Postman", nivel: 85 }
            ]
          }
        }
      }
    },
    proyectos: {
      es: {
        titulo: "Proyectos Destacados",
        subtitulo: "Algunos de mis trabajos recientes",
        botonVer: "Ver Proyecto",
        botonCodigo: "Ver Código",
        lista: [
          {
            id: 1,
            nombre: "E-Commerce Platform",
            descripcion: "Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración.",
            imagen: "/proyecto1.jpg",
            tecnologias: ["React", "Node.js", "MongoDB", "Stripe"],
            urlProyecto: "https://proyecto1.com",
            urlGithub: "https://github.com/usuario/proyecto1",
            destacado: true
          },
          {
            id: 2,
            nombre: "Task Management App",
            descripcion: "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y notificaciones.",
            imagen: "/proyecto2.jpg",
            tecnologias: ["Next.js", "PostgreSQL", "Socket.io", "Redis"],
            urlProyecto: "https://proyecto2.com",
            urlGithub: "https://github.com/usuario/proyecto2",
            destacado: true
          },
          {
            id: 3,
            nombre: "Social Media Dashboard",
            descripcion: "Dashboard analítico para redes sociales con visualización de datos en tiempo real y reportes automatizados.",
            imagen: "/proyecto3.jpg",
            tecnologias: ["Vue.js", "Python", "FastAPI", "ChartJS"],
            urlProyecto: "https://proyecto3.com",
            urlGithub: "https://github.com/usuario/proyecto3",
            destacado: false
          }
        ]
      },
      en: {
        titulo: "Featured Projects",
        subtitulo: "Some of my recent work",
        botonVer: "View Project",
        botonCodigo: "View Code",
        lista: [
          {
            id: 1,
            nombre: "E-Commerce Platform",
            descripcion: "Complete e-commerce platform with shopping cart, integrated payments and admin panel.",
            imagen: "/proyecto1.jpg",
            tecnologias: ["React", "Node.js", "MongoDB", "Stripe"],
            urlProyecto: "https://proyecto1.com",
            urlGithub: "https://github.com/usuario/proyecto1",
            destacado: true
          },
          {
            id: 2,
            nombre: "Task Management App",
            descripcion: "Task management application with real-time collaboration features and notifications.",
            imagen: "/proyecto2.jpg",
            tecnologias: ["Next.js", "PostgreSQL", "Socket.io", "Redis"],
            urlProyecto: "https://proyecto2.com",
            urlGithub: "https://github.com/usuario/proyecto2",
            destacado: true
          },
          {
            id: 3,
            nombre: "Social Media Dashboard",
            descripcion: "Analytical dashboard for social media with real-time data visualization and automated reports.",
            imagen: "/proyecto3.jpg",
            tecnologias: ["Vue.js", "Python", "FastAPI", "ChartJS"],
            urlProyecto: "https://proyecto3.com",
            urlGithub: "https://github.com/usuario/proyecto3",
            destacado: false
          }
        ]
      }
    },
    acerca: {
      es: {
        titulo: "Acerca de Mí",
        subtitulo: "Conoce más sobre mi trayectoria",
        descripcion: "Soy un desarrollador web apasionado con más de 3 años de experiencia en la creación de soluciones digitales innovadoras. Mi enfoque se centra en desarrollar aplicaciones web modernas, escalables y centradas en el usuario.",
        descripcion2: "Me especializo tanto en el desarrollo frontend como backend, lo que me permite tener una visión completa del proceso de desarrollo y crear soluciones integrales. Siempre estoy aprendiendo nuevas tecnologías y mejorando mis habilidades.",
        intereses: [
          { icono: "code-slash-outline", texto: "Desarrollo Web" },
          { icono: "bulb-outline", texto: "Innovación" },
          { icono: "people-outline", texto: "Trabajo en Equipo" },
          { icono: "trending-up-outline", texto: "Crecimiento Continuo" }
        ],
        datosPersonales: {
          edad: "25 años",
          ubicacion: "Ciudad, País",
          disponibilidad: "Disponible para proyectos",
          idiomas: "Español, Inglés"
        }
      },
      en: {
        titulo: "About Me",
        subtitulo: "Learn more about my journey",
        descripcion: "I am a passionate web developer with over 3 years of experience creating innovative digital solutions. My focus is on developing modern, scalable, and user-centered web applications.",
        descripcion2: "I specialize in both frontend and backend development, which allows me to have a complete view of the development process and create comprehensive solutions. I am always learning new technologies and improving my skills.",
        intereses: [
          { icono: "code-slash-outline", texto: "Web Development" },
          { icono: "bulb-outline", texto: "Innovation" },
          { icono: "people-outline", texto: "Teamwork" },
          { icono: "trending-up-outline", texto: "Continuous Growth" }
        ],
        datosPersonales: {
          edad: "25 years old",
          ubicacion: "City, Country",
          disponibilidad: "Available for projects",
          idiomas: "Spanish, English"
        }
      }
    },
    estudios: {
      es: {
        titulo: "Formación Académica",
        subtitulo: "Mi trayectoria educativa",
        lista: [
          {
            titulo: "Ingeniería en Sistemas",
            institucion: "Universidad Nacional",
            periodo: "2018 - 2023",
            descripcion: "Especialización en desarrollo de software y arquitectura de sistemas.",
            icono: "school-outline"
          },
          {
            titulo: "Bootcamp Full Stack Development",
            institucion: "Tech Academy",
            periodo: "2022",
            descripcion: "Programa intensivo de desarrollo web con React, Node.js y bases de datos.",
            icono: "laptop-outline"
          },
          {
            titulo: "Certificación AWS Cloud Practitioner",
            institucion: "Amazon Web Services",
            periodo: "2023",
            descripcion: "Fundamentos de servicios cloud y arquitectura en AWS.",
            icono: "cloud-outline"
          }
        ]
      },
      en: {
        titulo: "Academic Background",
        subtitulo: "My educational journey",
        lista: [
          {
            titulo: "Systems Engineering",
            institucion: "National University",
            periodo: "2018 - 2023",
            descripcion: "Specialization in software development and systems architecture.",
            icono: "school-outline"
          },
          {
            titulo: "Full Stack Development Bootcamp",
            institucion: "Tech Academy",
            periodo: "2022",
            descripcion: "Intensive web development program with React, Node.js and databases.",
            icono: "laptop-outline"
          },
          {
            titulo: "AWS Cloud Practitioner Certification",
            institucion: "Amazon Web Services",
            periodo: "2023",
            descripcion: "Cloud services fundamentals and AWS architecture.",
            icono: "cloud-outline"
          }
        ]
      }
    }
  };

  return datos;
}