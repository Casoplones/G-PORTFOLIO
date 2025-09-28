import projectThree from "../assets/project-3.png";
import proyecto1 from "../assets/imagen1.png";
import proyecto2 from "../assets/imagen2.png";
import proyecto3 from "../assets/imagen3.png";
import peskitos from "../assets/peskitos.png";

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
          Creé una aplicación full-stack para la gestión de equipos de fútbol con React, Node.js, Express, Firebase y MySQL, incluyendo autenticación de usuarios.<br></br>
          *Demo de proyecto no disponible. Uso privado en curso.*
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
            Landing page responsiva desarrollada con React, JS, Bootstrap y Vercel para una agencia de desarrollo web. Incluye secciones de servicios, portafolio y contacto, optimizadas para SEO y rendimiento.
        </p>
      </>
    ),
    demo: "https://www.doyxe.com/",
  },
    4: {
    title: "Peskitos FC",
    image: peskitos,
    description: (
      <>
        <p>
            Landing page responsiva desarrollada con JS y Bootstrap para un equipo de fútbol. Incluye secciones de historia, equipo y contacto, optimizadas para SEO y rendimiento.
        </p>
      </>
    ),
    demo: "https://peskitosfc.com/",
  },
};

export default projects;
