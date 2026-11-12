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
  category: string;
  highlight: Record<Lang, string>;
  description: Record<Lang, string>;
  image?: string;
  url?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Winebank",
    category: "Marketplace",
    highlight: {
      es: "Desde cero · split payments con Mercado Pago",
      en: "Built from scratch · Mercado Pago split payments",
    },
    description: {
      es: "Marketplace de vinos curados construido desde cero en Bubble: arquitectura, modelo de datos, panel de administración y releases. Checkout de Mercado Pago con JavaScript propio (incluye split payments para pedidos con varios vendedores) y Google Gemini con prompts JSON estructurados para normalizar las fotos de los vinos.",
      en: "Curated wine marketplace built from scratch in Bubble: architecture, data model, admin dashboard and releases. Mercado Pago checkout with custom JavaScript (including split payments for multi-seller orders) and Google Gemini with structured JSON prompts to normalize wine photos.",
    },
    tags: ["Bubble", "Mercado Pago", "Gemini", "JavaScript"],
  },
  {
    title: "Demyo",
    category: "SaaS",
    highlight: {
      es: "Carga de ~10 s a 2-3 s",
      en: "Load time from ~10 s to 2–3 s",
    },
    description: {
      es: "Plataforma española de renting de dispositivos reacondicionados. Bajé el tiempo de carga del listado de proyectos de ~10 s a 2-3 s quitando recursos sin uso y rehaciendo workflows pesados, y sumé perfiles públicos de empresas.",
      en: "Spanish platform for renting refurbished devices. I cut the project listing load time from about 10 s to 2–3 s by removing unused resources and rebuilding heavy workflows, and added public company profiles.",
    },
    image: demyo,
    url: "https://app.demyo.es/",
    tags: ["Bubble", "Performance"],
  },
  {
    title: "Emendu",
    category: "SaaS",
    highlight: {
      es: "Suscripciones con Stripe",
      en: "Stripe subscription plans",
    },
    description: {
      es: "Plataforma de renting de equipamiento tecnológico para empresas, con mucho tráfico. Corregí bugs reportados, mejoré el flujo de registro y sumé planes de suscripción con Stripe a través del API Connector.",
      en: "High-traffic tech equipment rental platform for companies. I fixed reported bugs, improved the sign-up flow and added Stripe subscription plans through the API Connector.",
    },
    image: emendu,
    url: "https://app.emendu.com/",
    tags: ["Bubble", "Stripe", "API Connector"],
  },
  {
    title: "Buyer-Match",
    category: "PropTech",
    highlight: {
      es: "De MVP temprano a producto",
      en: "From early MVP to product",
    },
    description: {
      es: "Plataforma inmobiliaria que conecta compradores con las propiedades indicadas. La llevé de MVP temprano a producto: rehice la UI a partir de las specs del diseñador y sumé un mapa de propiedades.",
      en: "Real estate platform connecting home buyers with the right properties. I took it from early MVP to product by rebuilding the UI from designer specs and adding a property map.",
    },
    image: buyermatch,
    url: "https://buyer-match.com/",
    tags: ["Bubble", "UI", "Maps"],
  },
  {
    title: "Fletech",
    category: "Logistics",
    highlight: {
      es: "Viajes que se comparten por WhatsApp",
      en: "Jobs shareable via WhatsApp",
    },
    description: {
      es: "App de logística en Bubble. Construí las funciones para que los transportistas vean su perfil y sus viajes, los acepten y los compartan por WhatsApp.",
      en: "Logistics app on Bubble. I built the features that let carriers view their profile and jobs, accept them and share them via WhatsApp.",
    },
    tags: ["Bubble", "WhatsApp"],
  },
  {
    title: "EcomSphere USA",
    category: "Talent Portal",
    highlight: {
      es: "~15 profesionales incorporados",
      en: "About 15 professionals onboarded",
    },
    description: {
      es: "Primer portal de talento de la empresa, hecho desde cero con Softr y SmartSuite para conectar desarrolladores de WordPress con proyectos. Automaticé el pipeline de reclutamiento y usé IA para pasar los CVs a campos estructurados; se incorporaron ~15 profesionales mientras estuve.",
      en: "The company's first talent portal, built from scratch with Softr and SmartSuite to connect WordPress developers with client projects. I automated the recruiting pipeline and used AI to parse resumes into structured fields; about 15 professionals were onboarded during my time.",
    },
    image: ecomsphere,
    url: "https://app.ecomsphereusa.com/",
    tags: ["Softr", "SmartSuite", "IA"],
  },
  {
    title: "The Elevate",
    category: "EdTech",
    highlight: {
      es: "Módulo de cursos para mentores",
      en: "Course module for mentors",
    },
    description: {
      es: "Plataforma de crecimiento personal y profesional en Bubble. Construí un módulo de cursos estilo Udemy donde cada mentor crea y publica sus cursos, e integré Stripe y ChatGPT para automatizar pagos y mensajería.",
      en: "Personal and professional growth platform on Bubble. I built a Udemy-style course module where each mentor creates and publishes their own courses, and integrated Stripe and ChatGPT to automate payments and messaging.",
    },
    image: theelevate,
    url: "https://theelevate.me/",
    tags: ["Bubble", "Stripe", "ChatGPT"],
  },
  {
    title: "Naked's",
    category: "Marketplace",
    highlight: {
      es: "Ofertas entre usuarios + checkout de Clip",
      en: "User offers + Clip checkout",
    },
    description: {
      es: "Marketplace social de ropa usada en Bubble (hecho en The Colony): los usuarios publican prendas, los compradores hacen ofertas y la compra se cierra con checkout de Clip (México).",
      en: "Second-hand clothing social marketplace in Bubble (built at The Colony): users list items, buyers make offers and purchases close through a Clip checkout (Mexico).",
    },
    image: nakeds,
    url: "https://nakeds.app/",
    tags: ["Bubble", "Clip"],
  },
];

export interface AiProject {
  title: Record<Lang, string>;
  year: string;
  description: Record<Lang, string>;
  steps: Record<Lang, string[]>;
  tags: string[];
}

export const aiProjects: AiProject[] = [
  {
    title: { es: "Agente de búsqueda de empleo", en: "AI Job Search Agent" },
    year: "2026",
    description: {
      es: "Agente que construí con Claude Code para buscar trabajo por mí, de punta a punta, dejando el envío final en manos de una persona.",
      en: "An agent I built with Claude Code to run my own job search end to end, leaving the final submit to human review.",
    },
    steps: {
      es: [
        "Busca ofertas todos los días en portales de empleo",
        "Puntúa cada oferta contra mi perfil",
        "Adapta el CV y las respuestas de cada postulación",
        "Completa el formulario y frena antes de enviar",
      ],
      en: [
        "Searches job boards every day",
        "Scores each posting against my profile",
        "Tailors the resume and screening answers",
        "Fills in the form and stops before submitting",
      ],
    },
    tags: ["Claude Code", "Claude Skills", "MCP"],
  },
  {
    title: { es: "Generador de creativos para Meta Ads", en: "Meta Ads Creative Generator" },
    year: "2026",
    description: {
      es: "Set de skills de Claude que convierten un producto en conceptos de anuncio, guiones escena por escena y prompts de video con IA.",
      en: "A set of Claude skills that turn a product into ad concepts, scene-by-scene scripts and AI video prompts.",
    },
    steps: {
      es: [
        "Creativos animados estilo 3D con personajes",
        "B-roll cinematográfico y con voz en off",
        "Videos UGC con avatar",
        "Fichas de escena listas para generar el video",
      ],
      en: [
        "3D-style animated creatives with characters",
        "Cinematic and voice-over B-roll",
        "UGC avatar videos",
        "Scene sheets ready for AI video generation",
      ],
    },
    tags: ["Claude Skills", "Prompt Engineering", "Meta Ads"],
  },
];

export const certifications = {
  issuer: "Anthropic · Claude Academy",
  courses: [
    "Claude Code in Action",
    "Claude Code 101",
    "Introduction to Model Context Protocol",
    "Claude Platform 101",
    "Claude Cowork",
    "Claude 101",
  ],
};

export interface ExperienceItem {
  role: Record<Lang, string>;
  company: string;
  period: Record<Lang, string>;
  summary: Record<Lang, string>;
}

export const experience: ExperienceItem[] = [
  {
    role: { es: "Desarrollador Full Stack & AI Agents", en: "Full Stack & AI Agent Developer" },
    company: "Freelance",
    period: { es: "sept. 2022 – actualidad", en: "Sep 2022 – present" },
    summary: {
      es: "Apps web, automatizaciones e integraciones de IA para pymes y startups con React, Node.js, Bubble, Xano y Make, a cargo de todo el ciclo: relevamiento, desarrollo, deploy y soporte. Construyo agentes de IA y skills reutilizables con Claude Code.",
      en: "Web apps, automations and AI integrations for small businesses and startups with React, Node.js, Bubble, Xano and Make, owning requirements, development, deployment and support. I build AI agents and reusable skills with Claude Code.",
    },
  },
  {
    role: { es: "Bubble Developer", en: "Bubble Developer" },
    company: "Jams (agencia Bubble)",
    period: { es: "jul. 2025 – jul. 2026", en: "Jul 2025 – Jul 2026" },
    summary: {
      es: "Responsable de 5 apps Bubble en producción: Winebank (desde cero, con Mercado Pago y Gemini), Demyo (carga de ~10 s a 2-3 s), Emendu (suscripciones con Stripe), Buyer-Match (nueva UI y mapa) y Fletech.",
      en: "Owned 5 Bubble apps in production: Winebank (from scratch, with Mercado Pago and Gemini), Demyo (load time from ~10 s to 2–3 s), Emendu (Stripe subscriptions), Buyer-Match (new UI and map) and Fletech.",
    },
  },
  {
    role: { es: "No-Code Developer (part-time)", en: "No-Code Developer (Part-time)" },
    company: "Senior AI, LLC (EE.UU.)",
    period: { es: "mar. 2025 – abr. 2025", en: "Mar 2025 – Apr 2025" },
    summary: {
      es: "Agente de voz con Retell AI que atiende llamadas para servicios de cuidado de adultos mayores. Automaticé la carga de proveedores de varias ciudades en Xano y generé el polígono de cobertura de cada uno en un mapa para recomendar por ubicación.",
      en: "Retell AI voice agent that answers calls for elderly care services. I automated loading providers from multiple cities into Xano and generated each provider's coverage polygon on a map for location-based recommendations.",
    },
  },
  {
    role: { es: "No-Code Developer, AI Automation (part-time)", en: "No-Code Developer, AI Automation (Part-time)" },
    company: "Consultancy Global",
    period: { es: "dic. 2024 – abr. 2025", en: "Dec 2024 – Apr 2025" },
    summary: {
      es: "Agente de Retell AI dentro de Make, con ChatGPT, Zoho CRM y Twilio, que atiende prospectos, califica leads y deriva cada uno al experto indicado en un estudio de servicios legales. También interfaces en React desde diseños de Figma.",
      en: "Retell AI agent inside Make, with ChatGPT, Zoho CRM and Twilio, that answers prospects, qualifies leads and routes each one to the right expert for a legal services firm. Also React interfaces from Figma designs.",
    },
  },
  {
    role: { es: "No-Code Developer", en: "No-Code Developer" },
    company: "EcomSphere USA",
    period: { es: "sept. 2024 – jun. 2025", en: "Sep 2024 – Jun 2025" },
    summary: {
      es: "Primer portal de talento de la empresa con Softr y SmartSuite, pipeline de reclutamiento automatizado y parseo de CVs con IA; ~15 profesionales incorporados.",
      en: "The company's first talent portal with Softr and SmartSuite, automated recruiting pipeline and AI resume parsing; about 15 professionals onboarded.",
    },
  },
  {
    role: { es: "Bubble Developer", en: "Bubble Developer" },
    company: "The Elevate",
    period: { es: "ago. 2024 – oct. 2024", en: "Aug 2024 – Oct 2024" },
    summary: {
      es: "Módulo de cursos estilo Udemy para mentores, mejoras de UI e integraciones de Stripe y ChatGPT para automatizar pagos y mensajería.",
      en: "Udemy-style course module for mentors, UI improvements, and Stripe and ChatGPT integrations to automate payments and messaging.",
    },
  },
  {
    role: { es: "No-Code Developer (contrato de formación)", en: "No-Code Developer (Training Contract)" },
    company: "The Colony",
    period: { es: "abr. 2024 – ago. 2024", en: "Apr 2024 – Aug 2024" },
    summary: {
      es: "Construí Naked's, un marketplace social de ropa usada en Bubble con ofertas entre usuarios y checkout de Clip (México).",
      en: "Built Naked's, a second-hand clothing social marketplace in Bubble with user offers and a Clip checkout (Mexico).",
    },
  },
];

export interface SkillGroup {
  title: Record<Lang, string>;
  accent: "primary" | "secondary" | "tertiary";
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: { es: "IA y Agentes", en: "AI & Agents" },
    accent: "secondary",
    skills: [
      "Claude",
      "Claude Code",
      "Claude Skills",
      "MCP",
      "Prompt Engineering",
      "OpenAI API",
      "Google Gemini",
      "Retell AI",
      "Voiceflow",
      "ElevenLabs",
    ],
  },
  {
    title: { es: "No-Code / Backend", en: "No-Code / Backend" },
    accent: "primary",
    skills: ["Bubble", "Bubble API Connector", "Xano", "Softr", "SmartSuite"],
  },
  {
    title: { es: "Automatización e integraciones", en: "Automation & Integrations" },
    accent: "tertiary",
    skills: ["Make", "Zapier", "APIs REST", "Webhooks", "Stripe", "Mercado Pago", "Twilio", "Zoho CRM"],
  },
  {
    title: { es: "Lenguajes & Frameworks", en: "Languages & Frameworks" },
    accent: "primary",
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "Express", "Nest.js", "Python", "Django"],
  },
  {
    title: { es: "Datos & Herramientas", en: "Data & Tools" },
    accent: "secondary",
    skills: ["MySQL", "MongoDB", "Supabase", "Git", "GitHub", "Figma", "Scrum"],
  },
];

export const translations = {
  es: {
    nav: {
      agents: "Agentes IA",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
      downloadCv: "Descargar CV",
    },
    hero: {
      available: "Disponible · remoto desde Mar del Plata, Argentina",
      role: "Bubble Developer & AI Agent Developer (Claude)",
      title: "Construyo apps en Bubble y agentes de IA con Claude.",
      description:
        "Más de 3 años desarrollando apps web y automatizaciones en producción para clientes de Estados Unidos, España y Argentina.",
      downloadCv: "Descargar CV",
      viewProjects: "Ver proyectos",
      cvLink: cvEs,
      facts: [
        { value: "5", label: "apps Bubble en producción a mi cargo en Jams" },
        { value: "6", label: "cursos de Claude Academy (Anthropic)" },
        { value: "3+", label: "años con clientes en EE.UU., España y Argentina" },
      ],
      trace: {
        title: "agente-busqueda-empleo",
        caption: "Así trabaja el agente que armé con Claude Code",
        steps: [
          "Buscar ofertas nuevas en portales de empleo",
          "Puntuar cada oferta contra mi perfil",
          "Adaptar el CV y las respuestas",
          "Completar el formulario de postulación",
        ],
        waiting: "Enviar: espera revisión humana",
      },
    },
    agents: {
      eyebrow: "Agentes con Claude",
      title: "Agentes que hacen el trabajo repetitivo, con una persona al final.",
      subtitle:
        "Proyectos propios construidos con Claude Code, skills y conectores MCP.",
      howItWorks: "Cómo funciona",
      certsTitle: "Formación en Claude",
    },
    skills: { title: "Stack" },
    projects: {
      eyebrow: "Apps en producción",
      title: "Proyectos para clientes",
      subtitle: "Apps reales en Bubble y Softr, con el resultado de cada una.",
      visit: "Ver sitio",
      privateProject: "Proyecto privado",
    },
    experience: { eyebrow: "Trayectoria", title: "Experiencia" },
    contact: {
      title: "¿Buscás a alguien para Bubble o para agentes de IA?",
      subtitle: "Escribime por acá o por email.",
      location: "Mar del Plata, Argentina (GMT-3)",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      emailPlaceholder: "tu@email.com",
      message: "Mensaje",
      messagePlaceholder: "Contame del puesto o del proyecto",
      send: "Enviar mensaje",
      sending: "Enviando…",
      success: "Mensaje enviado. Te respondo a la brevedad.",
      error: "No se pudo enviar el mensaje. Escribime directamente a emanuelpesci@gmail.com.",
    },
    footer: "Todos los derechos reservados.",
  },
  en: {
    nav: {
      agents: "AI agents",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      downloadCv: "Download CV",
    },
    hero: {
      available: "Available · remote from Mar del Plata, Argentina",
      role: "Bubble Developer & AI Agent Developer (Claude)",
      title: "I build Bubble apps and AI agents with Claude.",
      description:
        "3+ years shipping production web apps and automations for clients in the United States, Spain and Argentina.",
      downloadCv: "Download CV",
      viewProjects: "View projects",
      cvLink: cvEn,
      facts: [
        { value: "5", label: "production Bubble apps I owned at Jams" },
        { value: "6", label: "Claude Academy courses (Anthropic)" },
        { value: "3+", label: "years with clients in the US, Spain and Argentina" },
      ],
      trace: {
        title: "job-search-agent",
        caption: "How the agent I built with Claude Code works",
        steps: [
          "Search job boards for new postings",
          "Score each posting against my profile",
          "Tailor the resume and answers",
          "Fill in the application form",
        ],
        waiting: "Submit: waiting for human review",
      },
    },
    agents: {
      eyebrow: "Agents with Claude",
      title: "Agents that do the repetitive work, with a person at the end.",
      subtitle: "My own projects, built with Claude Code, skills and MCP connectors.",
      howItWorks: "How it works",
      certsTitle: "Claude training",
    },
    skills: { title: "Stack" },
    projects: {
      eyebrow: "Production apps",
      title: "Client projects",
      subtitle: "Real apps on Bubble and Softr, with the outcome of each one.",
      visit: "Visit site",
      privateProject: "Private project",
    },
    experience: { eyebrow: "Track record", title: "Experience" },
    contact: {
      title: "Looking for someone for Bubble or AI agents?",
      subtitle: "Send me a message here or by email.",
      location: "Mar del Plata, Argentina (GMT-3)",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      message: "Message",
      messagePlaceholder: "Tell me about the role or project",
      send: "Send message",
      sending: "Sending…",
      success: "Message sent. I'll get back to you shortly.",
      error: "The message could not be sent. Email me directly at emanuelpesci@gmail.com.",
    },
    footer: "All rights reserved.",
  },
} as const;
