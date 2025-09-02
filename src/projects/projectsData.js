import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Hostal Biarritz",
    image: projectOne,
    description: (
      <>
        <p>
          Lideré el rediseño completo de la web de un hostal, desarrollando una interfaz moderna con React y Bootstrap. Optimicé el SEO y el rendimiento, alcanzando puntuaciones superiores a 90 en Lighthouse.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
  2: {
    title: "Sporta",
    image: projectTwo,
    description: (
      <>
        <p>
          Desarrollé una aplicación completa con React, Node.js, Express, Firebase y MySQL para la gestión centralizada de equipos de fútbol. La plataforma incluye gestión de jugadores, partidos, entrenamientos y partidos. Implementé autenticación de usuarios mediante Firebase Auth.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
  3: {
    title: "JoyMate",
    image: projectThree,
    description: (
      <>
        <p>
          Prototipé la experiencia de usuario completa en Figma. La aplicación permite a parejas organizar ideas de regalos, recordar fechas especiales y hacer seguimiento de obsequios, demostrando mi capacidad para transformar ideas escalable.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
};

export default projects;
