import type { Lang } from "./context/LanguageContext";

import demyo from "./assets/img/demyo.png";
import emendu from "./assets/img/emendu.png";
import buyermatch from "./assets/img/buyermatch.jpg";
import nakeds from "./assets/img/nakeds.png";
import theelevate from "./assets/img/theelevate.png";
import ecomsphere from "./assets/img/ecomsphere.png";

import cvEs from "./assets/CV-Emanuel-Pesci-Es.pdf";
import cvEn from "./assets/CV-Emanuel-Pesci-En.pdf";

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/emanuel-pesci",
  github: "https://github.com/emapesci06",
  email: "mailto:emanuelpesci@gmail.com",
};

export const FORMSPREE_ID = "mpqvwpvd";

export interface Project {
  title: string;
  description: Record<Lang, string>;
  image?: string;
  url?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Demyo",
    description: {
      es: "Plataforma española de renting de dispositivos reacondicionados. Mantuve y evolucioné la aplicación en producción sobre Bubble, garantizando estabilidad y mejora continua.",
      en: "Spanish platform for renting refurbished devices. I maintained and evolved the production application on Bubble, ensuring stability and continuous improvement.",
    },
    image: demyo,
    url: "https://app.demyo.es/",
    tags: ["Bubble", "Producción"],
  },
  {
    title: "Emendu",
    description: {
      es: "Plataforma de renting de equipamiento tecnológico para empresas. Mantenimiento evolutivo en Bubble e integración con Atera para gestión IT.",
      en: "Tech equipment rental platform for companies. Ongoing development on Bubble and integration with Atera for IT management.",
    },
    image: emendu,
    url: "https://app.emendu.com/",
    tags: ["Bubble", "Atera", "Producción"],
  },
  {
    title: "Winebank",
    description: {
      es: "MVP desarrollado en Bubble desde cero: plataforma de inversión en vinos con pagos vía Mercado Pago y funcionalidades de IA con Google Gemini.",
      en: "MVP built in Bubble from scratch: wine investment platform with Mercado Pago payments and AI features powered by Google Gemini.",
    },
    tags: ["Bubble", "Mercado Pago", "Google Gemini"],
  },
  {
    title: "Buyer-Match",
    description: {
      es: "MVP desarrollado en Bubble desde cero: plataforma de comunicación que conecta compradores de viviendas con las propiedades indicadas.",
      en: "MVP built in Bubble from scratch: a communication platform connecting home buyers with the right properties.",
    },
    image: buyermatch,
    url: "https://buyer-match.com/",
    tags: ["Bubble", "MVP"],
  },
  {
    title: "Naked's",
    description: {
      es: "Tienda e-commerce completa construida en Bubble, con seguimiento de pedidos en tiempo real y gestión de stock y reportes automatizada vía APIs y plugins.",
      en: "Complete e-commerce store built in Bubble, with real-time order tracking and automated stock management and reporting via APIs and plugins.",
    },
    image: nakeds,
    url: "https://nakeds.app/",
    tags: ["Bubble", "E-commerce"],
  },
  {
    title: "The Elevate",
    description: {
      es: "Plataforma de crecimiento personal y profesional en Bubble. Integré Stripe y ChatGPT para automatizar pagos y mensajería, y contribuí a mejoras del núcleo del producto.",
      en: "Personal and professional growth platform on Bubble. I integrated Stripe and ChatGPT to automate payments and messaging, and contributed core product improvements.",
    },
    image: theelevate,
    url: "https://theelevate.me/",
    tags: ["Bubble", "Stripe", "ChatGPT"],
  },
  {
    title: "EcomSphere USA",
    description: {
      es: "Soluciones no-code con Softr y SmartSuite que automatizaron operaciones comerciales, centralizando flujos de trabajo y datos en una única plataforma.",
      en: "No-code solutions with Softr and SmartSuite that automated business operations, centralizing workflows and data into a single platform.",
    },
    image: ecomsphere,
    url: "https://app.ecomsphereusa.com/",
    tags: ["Softr", "SmartSuite", "Automatización"],
  },
];

export interface ExperienceItem {
  role: Record<Lang, string>;
  company: string;
  period: Record<Lang, string>;
  summary: Record<Lang, string>;
}

export const experience: ExperienceItem[] = [
  {
    role: { es: "Bubble Developer", en: "Bubble Developer" },
    company: "Jams",
    period: { es: "jul. 2025 – jul. 2026", en: "Jul 2025 – Jul 2026" },
    summary: {
      es: "Mantenimiento y evolución de apps Bubble en producción (Demyo, Emendu) y desarrollo de MVPs desde cero (Winebank, Buyer-Match) con integraciones de Mercado Pago, Google Gemini y Atera.",
      en: "Maintained and evolved production Bubble apps (Demyo, Emendu) and built MVPs from scratch (Winebank, Buyer-Match) with Mercado Pago, Google Gemini and Atera integrations.",
    },
  },
  {
    role: { es: "No-Code Developer", en: "No-Code Developer" },
    company: "Senior AI, LLC",
    period: { es: "feb. 2025 – abr. 2025", en: "Feb 2025 – Apr 2025" },
    summary: {
      es: "Asistente de voz con Retell AI para cuidado de adultos mayores, con integración de Xano y lógica de recomendaciones por geopolígonos.",
      en: "Voice assistant with Retell AI for senior care services, integrating Xano and location-based recommendations using geopolygon logic.",
    },
  },
  {
    role: { es: "No-Code Developer", en: "No-Code Developer" },
    company: "Consultancy Global",
    period: { es: "dic. 2024 – abr. 2025", en: "Dec 2024 – Apr 2025" },
    summary: {
      es: "Chatbot en Voiceflow integrado con Zoho CRM, Twilio, Make y ChatGPT para captura de datos y matching de clientes con expertos; interfaces en React desde diseños en Figma.",
      en: "Voiceflow chatbot integrated with Zoho CRM, Twilio, Make and ChatGPT for data capture and client-expert matching; React interfaces from Figma designs.",
    },
  },
  {
    role: { es: "No-Code Developer", en: "No-Code Developer" },
    company: "EcomSphere USA",
    period: { es: "sept. 2024 – jun. 2025", en: "Sep 2024 – Jun 2025" },
    summary: {
      es: "Soluciones no-code con Softr y SmartSuite que automatizaron operaciones comerciales y centralizaron flujos de trabajo y datos.",
      en: "No-code solutions with Softr and SmartSuite that automated business operations and centralized workflows and data.",
    },
  },
  {
    role: { es: "Bubble Developer", en: "Bubble Developer" },
    company: "The Elevate",
    period: { es: "ago. 2024 – oct. 2024", en: "Aug 2024 – Oct 2024" },
    summary: {
      es: "Integración de Stripe y ChatGPT para automatizar pagos y mensajería; resolución de bugs y mejoras del núcleo del producto.",
      en: "Stripe and ChatGPT integrations to automate payments and messaging; bug fixing and core product improvements.",
    },
  },
  {
    role: { es: "Bubble Developer", en: "Bubble Developer" },
    company: "Naked's",
    period: { es: "abr. 2024 – ago. 2024", en: "Apr 2024 – Aug 2024" },
    summary: {
      es: "E-commerce completo en Bubble con seguimiento de pedidos en tiempo real y gestión de stock automatizada.",
      en: "Complete e-commerce on Bubble with real-time order tracking and automated stock management.",
    },
  },
  {
    role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
    company: "Freelance",
    period: { es: "sept. 2022 – actualidad", en: "Sep 2022 – present" },
    summary: {
      es: "Aplicaciones web completas (React, Node.js, MongoDB) y productos no-code, gestionando el ciclo completo: relevamiento, desarrollo, deploy y soporte.",
      en: "Complete web applications (React, Node.js, MongoDB) and no-code products, managing the full cycle: discovery, development, deployment and support.",
    },
  },
];

export interface SkillGroup {
  title: Record<Lang, string>;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: { es: "No-Code / Low-Code", en: "No-Code / Low-Code" },
    skills: ["Bubble", "Softr", "SmartSuite", "Xano", "Voiceflow"],
  },
  {
    title: { es: "Automatización e integraciones", en: "Automation & integrations" },
    skills: [
      "Make",
      "Zapier",
      "Integrately",
      "APIs REST",
      "Webhooks",
      "Stripe",
      "Mercado Pago",
      "Twilio",
    ],
  },
  {
    title: { es: "IA aplicada", en: "Applied AI" },
    skills: ["OpenAI (ChatGPT)", "Google Gemini", "Retell AI", "ElevenLabs"],
  },
  {
    title: { es: "Lenguajes y frameworks", en: "Languages & frameworks" },
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "React",
      "Node.js",
      "Express",
      "Nest.js",
      "Django",
    ],
  },
  {
    title: { es: "Bases de datos", en: "Databases" },
    skills: ["MySQL", "MongoDB", "Supabase", "SQLite", "DynamoDB"],
  },
];

export const translations = {
  es: {
    nav: {
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
    },
    hero: {
      available: "Disponible para nuevos proyectos",
      title: "Desarrollador Bubble & No-Code",
      description:
        "Más de 3 años construyendo aplicaciones web escalables para clientes de Argentina, Estados Unidos y España. Especializado en Bubble, automatización de procesos e integraciones de APIs y pagos (Stripe, Mercado Pago, Twilio, OpenAI, Gemini), con base sólida en JavaScript, React y Node.js.",
      downloadCv: "Descargar CV",
      viewProjects: "Ver proyectos",
      cvLink: cvEs,
    },
    skills: { overline: "Stack", title: "Habilidades técnicas" },
    projects: {
      overline: "Portfolio",
      title: "Proyectos",
      subtitle: "Una selección de productos en los que trabajé.",
      visit: "Visitar sitio",
      privateProject: "Proyecto privado",
    },
    experience: { overline: "Trayectoria", title: "Experiencia" },
    contact: {
      overline: "Hablemos",
      title: "Contacto",
      subtitle:
        "¿Tenés un proyecto en mente o buscás un desarrollador Bubble? Escribime.",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar mensaje",
      sending: "Enviando…",
      success: "¡Mensaje enviado! Te respondo a la brevedad.",
      error: "No se pudo enviar el mensaje. Escribime directamente a mi email.",
      orDirect: "También podés encontrarme en",
    },
    footer: "Hecho con React y Tailwind CSS",
  },
  en: {
    nav: {
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      available: "Open to new opportunities",
      title: "Bubble & No-Code Developer",
      description:
        "3+ years building scalable web applications for clients in Argentina, the United States and Spain. Specialized in Bubble, process automation and API & payment integrations (Stripe, Mercado Pago, Twilio, OpenAI, Gemini), with a solid foundation in JavaScript, React and Node.js.",
      downloadCv: "Download CV",
      viewProjects: "View projects",
      cvLink: cvEn,
    },
    skills: { overline: "Stack", title: "Technical skills" },
    projects: {
      overline: "Portfolio",
      title: "Projects",
      subtitle: "A selection of products I've worked on.",
      visit: "Visit site",
      privateProject: "Private project",
    },
    experience: { overline: "Career", title: "Experience" },
    contact: {
      overline: "Let's talk",
      title: "Contact",
      subtitle:
        "Have a project in mind or looking for a Bubble developer? Get in touch.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      sending: "Sending…",
      success: "Message sent! I'll get back to you shortly.",
      error: "The message could not be sent. Please email me directly.",
      orDirect: "You can also find me on",
    },
    footer: "Built with React and Tailwind CSS",
  },
} as const;
