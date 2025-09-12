import projectThree from "../assets/project-3.png";
import proyecto1 from "../assets/imagen1.png";
import proyecto2 from "../assets/imagen2.png";
import proyecto3 from "../assets/imagen3.png";

const projects = {
  1: {
    title: "Hostal Biarritz",
    image: proyecto1,
    description: (
      <>
        <p>
          Lideré el rediseño completo de la web de un hostal, desarrollando una interfaz moderna con React y Bootstrap. Optimicé el SEO y el rendimiento, alcanzando puntuaciones superiores a 90 en Lighthouse.
        </p>
      </>
    ),
    demo: "https://doyxe.github.io/hostalbiarritz/",
  },
  2: {
    title: "Sporta",
    image: proyecto2,
    description: (
      <>
        <p>
          Desarrollé una aplicación completa con React, Node.js, Express, Firebase y MySQL para la gestión centralizada de equipos de fútbol. La plataforma incluye gestión de jugadores, partidos, entrenamientos y partidos. Implementé autenticación de usuarios mediante Firebase Auth.
        </p>
      </>
    ),
    demo: "https://netlify.com",
  },
  3: {
    title: "Doyxe",
    image: proyecto3,
    description: (
      <>
        <p>
          Desarrollé una landing page responsive para una agencia de desarrollo web usando React, JS, Bootstrap y Vercel. La página cuenta con secciones de servicios, portafolio y contacto, optimizada para SEO y rendimiento.
        </p>
      </>
    ),
    demo: "https://www.doyxe.com/",
  },
};

export default projects;
