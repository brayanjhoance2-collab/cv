"use server";

export async function obtenerDatos() {
  const datos = {
    proyectos: {
      es: {
        titulo: "Proyectos",
        subtitulo: "Explora mi trabajo y experiencia en desarrollo",
        años: ["2024", "2025"],
        noProyectos: "No hay proyectos disponibles para este año",
        verDetalles: "Ver Detalles",
        tecnologiasUsadas: "Tecnologías Utilizadas",
        verSitio: "Ver Sitio Web",
        verCodigo: "Ver Código",
        sitioPrivado: "Sitio Privado",
        repositorioPrivado: "Repositorio Privado",
        lista: [
          {
            titulo: "Nextjs14 - Página web para Bitel HVCA-0A1",
            imagen: "/proyectos/0A1.jpg",
            año: "2024",
            descripcion: "(Agosto) - Un mes, desarrollé una app web para Bitel usando Next.js 14, con el objetivo de mejorar la atención al cliente. Integré un chatbot inteligente que ayuda a los usuarios a resolver dudas de forma rápida y sencilla. La app está pensada para que la gente pueda navegar fácilmente y encontrar información sobre los servicios y productos de Bitel directamente desde la página principal.",
            tecnologias: ["Next.js 14", "React", "Node.js", "Chatbot IA"],
            video: "/proyectos/trabajo0A1.mp4",
            linkPagina: "https://bitel-pastrana-hvca.vercel.app/",
            linkRepositorio: ""
          },
          {
            titulo: "Python - Reordenamiento de Excel (Script) HVCA-0B1",
            imagen: "/proyectos/0B1.jpg",
            año: "2024",
            descripcion: "(Septiembre) - 2 semanas, Desarrollé tres aplicaciones para Bitel en solo dos meses, usando Python 3. Cada una estaba enfocada en optimizar procesos y facilitar la gestión de datos, y todas tienen la opción de exportar a Excel. Cada proyecto lo terminé en dos semanas, lo que me permitió asegurarme de que todo quedara bien hecho. Me adapté a las necesidades de la empresa y logré mejorar la operatividad en varias áreas.",
            tecnologias: ["Python 3", "Pandas", "Excel", "Automation"],
            video: "/proyectos/trabajo0B1.mp4",
            linkPagina: "",
            linkRepositorio: ""
          },
          {
            titulo: "Nextjs14 - Página web dedicada al mantenimiento CHL-0A2",
            imagen: "/proyectos/0A2.jpg",
            año: "2024",
            descripcion: "(Septiembre - Octubre) - 3 semanas, Una aplicación para una empresa dedicada al rubro de mantenimiento de electricidad y maquinaria, frontend y backend para el manejo de sus datos, información de la página con el fin de facilitar la carga a la empresa.",
            tecnologias: ["Next.js 14", "PostgreSQL", "Node.js", "TailwindCSS"],
            video: "/proyectos/trabajo0A2.mp4",
            linkPagina: "https://www.afppcompany.com/",
            linkRepositorio: ""
          },
          {
            titulo: "Sistema de Gestión de Inventario",
            imagen: "/proyectos/0A2.jpg",
            año: "2024",
            descripcion: "Sistema completo para gestión de inventario con control de stock, alertas automáticas, reportes en tiempo real y módulo de ventas integrado. Incluye dashboard administrativo con gráficos y estadísticas detalladas.",
            tecnologias: ["React", "MongoDB", "Express", "Chart.js"],
            video: "/proyectos/trabajo0A2.mp4",
            linkPagina: "",
            linkRepositorio: ""
          },
          {
            titulo: "E-commerce Tienda Virtual",
            imagen: "/proyectos/0A2.jpg",
            año: "2024",
            descripcion: "Plataforma de comercio electrónico con carrito de compras, pasarela de pagos integrada, sistema de usuarios, panel administrativo completo y sistema de envíos automatizado.",
            tecnologias: ["Next.js", "Stripe", "MySQL", "Redux"],
            video: "/proyectos/trabajo0A2.mp4",
            linkPagina: "https://www.afppcompany.com/",
            linkRepositorio: ""
          },
          {
            titulo: "App Móvil de Delivery",
            imagen: "/proyectos/0A2.jpg",
            año: "2024",
            descripcion: "Aplicación móvil nativa para servicios de delivery con tracking en tiempo real, notificaciones push, sistema de valoraciones y chat integrado entre clientes y repartidores.",
            tecnologias: ["React Native", "Firebase", "Google Maps API", "Socket.io"],
            video: "/proyectos/trabajo0A2.mp4",
            linkPagina: "",
            linkRepositorio: ""
          },
          {
            titulo: "Sistema CRM Empresarial",
            imagen: "/proyectos/0A2.jpg",
            año: "2024",
            descripcion: "CRM completo para gestión de clientes, leads, oportunidades de venta, seguimiento de comunicaciones, automatización de emails y reportes analíticos avanzados.",
            tecnologias: ["Vue.js", "Laravel", "PostgreSQL", "Redis"],
            video: "/proyectos/trabajo0A2.mp4",
            linkPagina: "https://www.afppcompany.com/",
            linkRepositorio: ""
          },
          {
            titulo: "Plataforma de Cursos Online",
            imagen: "/proyectos/0A2.jpg",
            año: "2024",
            descripcion: "Plataforma educativa con sistema de cursos, videos, evaluaciones, certificados automáticos, panel de instructor y estudiante, foro de discusión y streaming en vivo.",
            tecnologias: ["Next.js", "Node.js", "MongoDB", "AWS S3"],
            video: "/proyectos/trabajo0A2.mp4",
            linkPagina: "",
            linkRepositorio: ""
          },
          {
            titulo: "Dashboard Analítico BI",
            imagen: "/proyectos/0A2.jpg",
            año: "2024",
            descripcion: "Dashboard de business intelligence con visualización de datos en tiempo real, gráficos interactivos, filtros avanzados, exportación de reportes y predicciones con machine learning.",
            tecnologias: ["React", "D3.js", "Python", "TensorFlow"],
            video: "/proyectos/trabajo0A2.mp4",
            linkPagina: "https://www.afppcompany.com/",
            linkRepositorio: ""
          },
          {
            titulo: "App de Gestión de Proyectos",
            imagen: "/proyectos/0A2.jpg",
            año: "2024",
            descripcion: "Herramienta colaborativa para gestión de proyectos con tableros Kanban, asignación de tareas, calendario integrado, chat de equipo y reportes de productividad.",
            tecnologias: ["React", "Node.js", "Socket.io", "MongoDB"],
            video: "/proyectos/trabajo0A2.mp4",
            linkPagina: "",
            linkRepositorio: ""
          },
          {
            titulo: "Sistema de Reservas de Hoteles",
            imagen: "/proyectos/0A2.jpg",
            año: "2024",
            descripcion: "Plataforma de reservas hoteleras con búsqueda avanzada, calendario de disponibilidad, pagos online, confirmaciones automáticas y panel de administración hotelera.",
            tecnologias: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
            video: "/proyectos/trabajo0A2.mp4",
            linkPagina: "https://www.afppcompany.com/",
            linkRepositorio: ""
          },
          {
            titulo: "Red Social Corporativa",
            imagen: "/proyectos/0A2.jpg",
            año: "2024",
            descripcion: "Red social interna para empresas con feed de noticias, grupos, eventos, mensajería instantánea, compartir documentos y directorio de empleados.",
            tecnologias: ["React", "GraphQL", "Node.js", "Redis"],
            video: "/proyectos/trabajo0A2.mp4",
            linkPagina: "",
            linkRepositorio: ""
          },
          {
            titulo: "Próximo Proyecto 2025",
            imagen: "/proyectos/prox.jpeg",
            año: "2025",
            descripcion: "Proyecto en desarrollo utilizando las últimas tecnologías y mejores prácticas. Más información próximamente.",
            tecnologias: ["Next.js 15", "React 19", "TypeScript", "AI"],
            video: "/proyectos/prox.mp4",
            linkPagina: "",
            linkRepositorio: ""
          },
          {
            titulo: "Próximo Proyecto 2025",
            imagen: "/proyectos/prox.jpeg",
            año: "2025",
            descripcion: "Proyecto en desarrollo utilizando las últimas tecnologías y mejores prácticas. Más información próximamente.",
            tecnologias: ["AI", "Blockchain", "Web3", "Cloud"],
            video: "/proyectos/prox.mp4",
            linkPagina: "",
            linkRepositorio: ""
          }
        ]
      },
      en: {
        titulo: "Projects",
        subtitulo: "Explore my work and development experience",
        años: ["2024", "2025"],
        noProyectos: "No projects available for this year",
        verDetalles: "View Details",
        tecnologiasUsadas: "Technologies Used",
        verSitio: "View Website",
        verCodigo: "View Code",
        sitioPrivado: "Private Site",
        repositorioPrivado: "Private Repository",
        lista: [
          {
            titulo: "Nextjs14 - Website for Bitel HVCA-0A1",
            imagen: "/proyectos/0A1.jpg",
            año: "2024",
            descripcion: "(August) - One month, I developed a web app for Bitel using Next.js 14, with the goal of improving customer service. I integrated an intelligent chatbot that helps users resolve questions quickly and easily. The app is designed for people to easily navigate and find information about Bitel's services and products directly from the main page.",
            tecnologias: ["Next.js 14", "React", "Node.js", "AI Chatbot"],
            video: "/proyectos/trabajo0A1.mp4",
            linkPagina: "https://bitel-pastrana-hvca.vercel.app/",
            linkRepositorio: ""
          },
          {
            titulo: "Python - Excel Reorganization (Script) HVCA-0B1",
            imagen: "/proyectos/0B1.jpg",
            año: "2024",
            descripcion: "(September) - 2 weeks, I developed three applications for Bitel in just two months, using Python 3. Each was focused on optimizing processes and facilitating data management, and all have the option to export to Excel. I completed each project in two weeks, which allowed me to ensure everything was well done. I adapted to the company's needs and managed to improve operability in several areas.",
            tecnologias: ["Python 3", "Pandas", "Excel", "Automation"],
            video: "/proyectos/trabajo0B1.mp4",
            linkPagina: "",
            linkRepositorio: ""
          },
          {
            titulo: "Nextjs14 - Website dedicated to maintenance CHL-0A2",
            imagen: "/proyectos/0A2.jpg",
            año: "2024",
            descripcion: "(September - October) - 3 weeks, An application for a company dedicated to the field of electrical and machinery maintenance, frontend and backend for managing their data, page information in order to facilitate the company's workload.",
            tecnologias: ["Next.js 14", "PostgreSQL", "Node.js", "TailwindCSS"],
            video: "/proyectos/trabajo0A2.mp4",
            linkPagina: "https://www.afppcompany.com/",
            linkRepositorio: ""
          },
          {
            titulo: "Inventory Management System",
            imagen: "/proyectos/0A2.jpg",
            año: "2024",
            descripcion: "Complete system for inventory management with stock control, automatic alerts, real-time reports and integrated sales module. Includes administrative dashboard with detailed graphs and statistics.",
            tecnologias: ["React", "MongoDB", "Express", "Chart.js"],
            video: "/proyectos/trabajo0A2.mp4",
            linkPagina: "",
            linkRepositorio: ""
          },
          {
            titulo: "E-commerce Virtual Store",
            imagen: "/proyectos/0A2.jpg",
            año: "2024",
            descripcion: "E-commerce platform with shopping cart, integrated payment gateway, user system, complete administrative panel and automated shipping system.",
            tecnologias: ["Next.js", "Stripe", "MySQL", "Redux"],
            video: "/proyectos/trabajo0A2.mp4",
            linkPagina: "https://www.afppcompany.com/",
            linkRepositorio: ""
          },
          {
            titulo: "Delivery Mobile App",
            imagen: "/proyectos/0A2.jpg",
            año: "2024",
            descripcion: "Native mobile application for delivery services with real-time tracking, push notifications, rating system and integrated chat between customers and delivery drivers.",
            tecnologias: ["React Native", "Firebase", "Google Maps API", "Socket.io"],
            video: "/proyectos/trabajo0A2.mp4",
            linkPagina: "",
            linkRepositorio: ""
          },
          {
            titulo: "Enterprise CRM System",
            imagen: "/proyectos/0A2.jpg",
            año: "2024",
            descripcion: "Complete CRM for customer management, leads, sales opportunities, communication tracking, email automation and advanced analytical reports.",
            tecnologias: ["Vue.js", "Laravel", "PostgreSQL", "Redis"],
            video: "/proyectos/trabajo0A2.mp4",
            linkPagina: "https://www.afppcompany.com/",
            linkRepositorio: ""
          },
          {
            titulo: "Online Courses Platform",
            imagen: "/proyectos/0A2.jpg",
            año: "2024",
            descripcion: "Educational platform with course system, videos, assessments, automatic certificates, instructor and student panel, discussion forum and live streaming.",
            tecnologias: ["Next.js", "Node.js", "MongoDB", "AWS S3"],
            video: "/proyectos/trabajo0A2.mp4",
            linkPagina: "",
            linkRepositorio: ""
          },
          {
            titulo: "BI Analytics Dashboard",
            imagen: "/proyectos/0A2.jpg",
            año: "2024",
            descripcion: "Business intelligence dashboard with real-time data visualization, interactive graphs, advanced filters, report export and machine learning predictions.",
            tecnologias: ["React", "D3.js", "Python", "TensorFlow"],
            video: "/proyectos/trabajo0A2.mp4",
            linkPagina: "https://www.afppcompany.com/",
            linkRepositorio: ""
          },
          {
            titulo: "Project Management App",
            imagen: "/proyectos/0A2.jpg",
            año: "2024",
            descripcion: "Collaborative tool for project management with Kanban boards, task assignment, integrated calendar, team chat and productivity reports.",
            tecnologias: ["React", "Node.js", "Socket.io", "MongoDB"],
            video: "/proyectos/trabajo0A2.mp4",
            linkPagina: "",
            linkRepositorio: ""
          },
          {
            titulo: "Hotel Booking System",
            imagen: "/proyectos/0A2.jpg",
            año: "2024",
            descripcion: "Hotel booking platform with advanced search, availability calendar, online payments, automatic confirmations and hotel administration panel.",
            tecnologias: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
            video: "/proyectos/trabajo0A2.mp4",
            linkPagina: "https://www.afppcompany.com/",
            linkRepositorio: ""
          },
          {
            titulo: "Corporate Social Network",
            imagen: "/proyectos/0A2.jpg",
            año: "2024",
            descripcion: "Internal social network for companies with news feed, groups, events, instant messaging, document sharing and employee directory.",
            tecnologias: ["React", "GraphQL", "Node.js", "Redis"],
            video: "/proyectos/trabajo0A2.mp4",
            linkPagina: "",
            linkRepositorio: ""
          },
          {
            titulo: "Next Project 2025",
            imagen: "/proyectos/prox.jpeg",
            año: "2025",
            descripcion: "Project in development using the latest technologies and best practices. More information coming soon.",
            tecnologias: ["Next.js 15", "React 19", "TypeScript", "AI"],
            video: "/proyectos/prox.mp4",
            linkPagina: "",
            linkRepositorio: ""
          },
          {
            titulo: "Next Project 2025",
            imagen: "/proyectos/prox.jpeg",
            año: "2025",
            descripcion: "Project in development using the latest technologies and best practices. More information coming soon.",
            tecnologias: ["AI", "Blockchain", "Web3", "Cloud"],
            video: "/proyectos/prox.mp4",
            linkPagina: "",
            linkRepositorio: ""
          }
        ]
      }
    }
  };

  return datos;
}