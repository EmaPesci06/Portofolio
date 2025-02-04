import { CardProject } from "./Card-project";
import { useLanguage } from "../context/LanguageContext"; // Importa el contexto de idioma
import nakeds from "../assets/img/nakeds.png";
import theelevate from "../assets/img/theelevate.png";
import ecompshere from "../assets/img/ecomsphere.png";

const projectsData: any = {
  es: [
    {
      title: "Nakeds",
      description:
        "Nakeds es una plataforma innovadora desarrollada en Bubble.io que permite a los usuarios comprar y vender ropa de manera sencilla y segura. La aplicación ofrece una experiencia intuitiva con funcionalidades como gestión de productos, búsqueda avanzada y un sistema de pagos integrado.",
      image: nakeds,
      url: "https://nakeds.app/",
    },
    {
      title: "The Elevate",
      description:
        "The Elevate es una plataforma desarrollada en Bubble.io que facilita la conexión entre profesionales y oportunidades de crecimiento personal y empresarial.",
      image: theelevate,
      url: "https://theelevate.me/",
    },
    {
      title: "Ecomsphere USA",
      description:
        "Ecomsphere USA es una plataforma enfocada en la gestión y optimización de negocios de comercio electrónico. Trabajo con herramientas no-code como Softr y Smartsuite para desarrollar soluciones personalizadas.",
      image: ecompshere,
      url: "https://app.ecomsphereusa.com/",
    },
  ],
  en: [
    {
      title: "Nakeds",
      description:
        "Nakeds is an innovative platform built with Bubble.io that allows users to buy and sell clothes easily and securely. The app provides an intuitive experience with features such as product management, advanced search, and an integrated payment system.",
      image: nakeds,
      url: "https://nakeds.app/",
    },
    {
      title: "The Elevate",
      description:
        "The Elevate is a platform developed in Bubble.io that connects professionals with personal and business growth opportunities.",
      image: theelevate,
      url: "https://theelevate.me/",
    },
    {
      title: "Ecomsphere USA",
      description:
        "Ecomsphere USA is a platform focused on managing and optimizing e-commerce businesses. I work with No Code tools like Softr and Smartsuite to develop custom solutions.",
      image: ecompshere,
      url: "https://app.ecomsphereusa.com/",
    },
  ],
};

export default function Projects() {
  const { language } = useLanguage();
  const projects = projectsData[language] || projectsData.en;

  return (
    <article className='w-9/12 mx-auto'>
      <h2 className='text-4xl py-6 font-bold'>
        {language === "es" ? "Proyectos" : "Projects"}
      </h2>
      <section className='flex flex-col gap-12'>
        {projects.map((project: any) => (
          <CardProject
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            url={project.url}
          />
        ))}
      </section>
    </article>
  );
}
