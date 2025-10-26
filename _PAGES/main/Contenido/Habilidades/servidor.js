"use server";

export async function obtenerDatos() {
  const datos = {
    habilidades: {
      es: {
        titulo: "Habilidades",
        categorias: {
          web: "Desarrollo Web",
          movil: "Desarrollo Móvil",
          scripts: "Scripts"
        },
        web: [
          {
            imagen: "/habilidades/html.png",
            alt: "Html 5",
            titulo: "HTML 5",
            informacion: "Con más de 5 años de experiencia, domino HTML5, construyendo sitios web optimizados y accesibles. Mi enfoque ha sido perfeccionado a través de estudios autodidactas y proyectos reales desde 2019."
          },
          {
            imagen: "/habilidades/css.png",
            alt: "CSS 3",
            titulo: "CSS 3",
            informacion: "Convierto ideas en realidades visuales usando CSS3 desde 2019. Mi experiencia de 5 años incluye el diseño de interfaces modernas y fluidas para mejorar la experiencia del usuario."
          },
          {
            imagen: "/habilidades/js.png",
            alt: "JS (JavaScript)",
            titulo: "JavaScript",
            informacion: "Con 5 años de experiencia, he creado soluciones dinámicas y ricas en interacción usando JavaScript. Siempre a la vanguardia de las tendencias, optimizo la funcionalidad de aplicaciones web."
          },
          {
            imagen: "/habilidades/wordpress.png",
            alt: "WordPress",
            titulo: "WordPress",
            informacion: "Desde 2019, trabajo en la creación y mantenimiento de sitios web con WordPress. Mi experiencia de 4 años me permite entregar proyectos robustos y escalables."
          },
          {
            imagen: "/habilidades/reactjs.png",
            alt: "React JS",
            titulo: "ReactJS",
            informacion: "Con 4 años de experiencia, he desarrollado aplicaciones dinámicas y escalables usando ReactJS. Mi formación incluye tanto estudios autodidactas como institucionales."
          },
          {
            imagen: "/habilidades/nextjs.png",
            alt: "NextJS",
            titulo: "NextJS",
            informacion: "Desde 2020, he trabajado con NextJS en proyectos web avanzados, maximizando el rendimiento y la experiencia del usuario. Experiencia sólida de 4 años."
          },
          {
            imagen: "/habilidades/linux.png",
            alt: "Linux",
            titulo: "Linux",
            informacion: "Con más de 6 años de experiencia, domino Linux y sus sistemas basados en Unix, tanto en administración como en optimización de servidores."
          },
          {
            imagen: "/habilidades/mongodb.png",
            alt: "MongoDB",
            titulo: "MongoDB",
            informacion: "Experto en MongoDB desde 2020, optimizo la gestión de datos no estructurados en proyectos diversos, brindando soluciones flexibles y escalables. (4 años de experiencia)."
          },
          {
            imagen: "/habilidades/mysql.png",
            alt: "MySQL",
            titulo: "MySQL",
            informacion: "Con 4 años de experiencia, manejo bases de datos relacionales en MySQL para optimizar la gestión de información en múltiples proyectos."
          },
          {
            imagen: "/habilidades/postgressql.png",
            alt: "PostgreSQL",
            titulo: "PostgreSQL",
            informacion: "He desarrollado habilidades en PostgreSQL desde 2022, aplicándolo en proyectos de alto nivel para el manejo y análisis de datos. (2 años de experiencia)."
          },
          {
            imagen: "/habilidades/github.png",
            alt: "Git hub",
            titulo: "GitHub",
            informacion: "Con experiencia en GitHub desde 2022, gestiono versiones de proyectos de forma eficiente, garantizando la integridad y evolución de cada uno."
          }
        ],
        movil: [
          {
            imagen: "/habilidades/kotlin.png",
            alt: "Kotlin",
            titulo: "Kotlin",
            informacion: "Desde finales de 2023, me especializo en Kotlin para el desarrollo de aplicaciones Android nativas, creando soluciones rápidas y eficientes. (1 año de experiencia)."
          },
          {
            imagen: "/habilidades/androidstudio.png",
            alt: "Android Studio",
            titulo: "Android Studio",
            informacion: "Con 1 año de experiencia en Android Studio, desarrollo aplicaciones móviles nativas con un enfoque en rendimiento y usabilidad."
          },
          {
            imagen: "/habilidades/xamarin.png",
            alt: "Xamarin.Form (Visual Studio)",
            titulo: "Xamarin",
            informacion: "Trabajo con Xamarin desde 2023, creando aplicaciones multiplataforma eficientes y funcionales, aprovechando la potencia de Visual Studio."
          }
        ],
        scripts: [
          {
            imagen: "/habilidades/python.png",
            alt: "Python",
            titulo: "Python",
            informacion: "Comencé a usar Python en 2023, automatizando procesos y desarrollando scripts eficientes para entornos Windows y Linux. 1 año de experiencia en proyectos no personales."
          },
          {
            imagen: "/habilidades/powershell.png",
            alt: "Powershell",
            titulo: "Powershell",
            informacion: "Experiencia sólida desde 2021 en PowerShell, optimizando procesos y gestionando sistemas de forma automatizada. (4 años de experiencia)."
          },
          {
            imagen: "/habilidades/bash.png",
            alt: "Bash",
            titulo: "Bash",
            informacion: "Trabajo con Bash desde 2021, desarrollando scripts para automatizar tareas complejas en sistemas Linux. (4 años de experiencia)."
          }
        ]
      },
      en: {
        titulo: "Skills",
        categorias: {
          web: "Web Development",
          movil: "Mobile Development",
          scripts: "Scripts"
        },
        web: [
          {
            imagen: "/habilidades/html.png",
            alt: "Html 5",
            titulo: "HTML 5",
            informacion: "With over 5 years of experience, I master HTML5, building optimized and accessible websites. My approach has been refined through self-taught studies and real projects since 2019."
          },
          {
            imagen: "/habilidades/css.png",
            alt: "CSS 3",
            titulo: "CSS 3",
            informacion: "I turn ideas into visual realities using CSS3 since 2019. My 5-year experience includes designing modern and fluid interfaces to enhance user experience."
          },
          {
            imagen: "/habilidades/js.png",
            alt: "JS (JavaScript)",
            titulo: "JavaScript",
            informacion: "With 5 years of experience, I have created dynamic and interaction-rich solutions using JavaScript. Always at the forefront of trends, I optimize web application functionality."
          },
          {
            imagen: "/habilidades/wordpress.png",
            alt: "WordPress",
            titulo: "WordPress",
            informacion: "Since 2019, I work on creating and maintaining websites with WordPress. My 4 years of experience allow me to deliver robust and scalable projects."
          },
          {
            imagen: "/habilidades/reactjs.png",
            alt: "React JS",
            titulo: "ReactJS",
            informacion: "With 4 years of experience, I have developed dynamic and scalable applications using ReactJS. My training includes both self-taught and institutional studies."
          },
          {
            imagen: "/habilidades/nextjs.png",
            alt: "NextJS",
            titulo: "NextJS",
            informacion: "Since 2020, I have worked with NextJS on advanced web projects, maximizing performance and user experience. Solid 4 years of experience."
          },
          {
            imagen: "/habilidades/linux.png",
            alt: "Linux",
            titulo: "Linux",
            informacion: "With over 6 years of experience, I master Linux and its Unix-based systems, both in administration and server optimization."
          },
          {
            imagen: "/habilidades/mongodb.png",
            alt: "MongoDB",
            titulo: "MongoDB",
            informacion: "Expert in MongoDB since 2020, I optimize unstructured data management in various projects, providing flexible and scalable solutions. (4 years of experience)."
          },
          {
            imagen: "/habilidades/mysql.png",
            alt: "MySQL",
            titulo: "MySQL",
            informacion: "With 4 years of experience, I handle relational databases in MySQL to optimize information management in multiple projects."
          },
          {
            imagen: "/habilidades/postgressql.png",
            alt: "PostgreSQL",
            titulo: "PostgreSQL",
            informacion: "I have developed skills in PostgreSQL since 2022, applying it in high-level projects for data management and analysis. (2 years of experience)."
          },
          {
            imagen: "/habilidades/github.png",
            alt: "Git hub",
            titulo: "GitHub",
            informacion: "With experience in GitHub since 2022, I manage project versions efficiently, ensuring the integrity and evolution of each one."
          }
        ],
        movil: [
          {
            imagen: "/habilidades/kotlin.png",
            alt: "Kotlin",
            titulo: "Kotlin",
            informacion: "Since late 2023, I specialize in Kotlin for native Android application development, creating fast and efficient solutions. (1 year of experience)."
          },
          {
            imagen: "/habilidades/androidstudio.png",
            alt: "Android Studio",
            titulo: "Android Studio",
            informacion: "With 1 year of experience in Android Studio, I develop native mobile applications with a focus on performance and usability."
          },
          {
            imagen: "/habilidades/xamarin.png",
            alt: "Xamarin.Form (Visual Studio)",
            titulo: "Xamarin",
            informacion: "I work with Xamarin since 2023, creating efficient and functional cross-platform applications, leveraging the power of Visual Studio."
          }
        ],
        scripts: [
          {
            imagen: "/habilidades/python.png",
            alt: "Python",
            titulo: "Python",
            informacion: "I started using Python in 2023, automating processes and developing efficient scripts for Windows and Linux environments. 1 year of experience in non-personal projects."
          },
          {
            imagen: "/habilidades/powershell.png",
            alt: "Powershell",
            titulo: "Powershell",
            informacion: "Solid experience since 2021 in PowerShell, optimizing processes and managing systems in an automated way. (4 years of experience)."
          },
          {
            imagen: "/habilidades/bash.png",
            alt: "Bash",
            titulo: "Bash",
            informacion: "I work with Bash since 2021, developing scripts to automate complex tasks on Linux systems. (4 years of experience)."
          }
        ]
      }
    }
  };

  return datos;
}