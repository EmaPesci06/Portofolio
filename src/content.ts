import type { Lang } from "./context/LanguageContext";

import demyo from "./assets/img/demyo.png";
import emendu from "./assets/img/emendu.png";
import buyermatch from "./assets/img/buyermatch.jpg";
import nakeds from "./assets/img/nakeds.png";
import theelevate from "./assets/img/theelevate.png";
import ecomsphere from "./assets/img/ecomsphere.png";
import fletech from "./assets/img/fletech.webp";

import cvEs from "./assets/CV-Emanuel-Pesci-Es.pdf";
import cvEn from "./assets/CV-Emanuel-Pesci-En.pdf";

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/emanuel-pesci",
  github: "https://github.com/emapesci06",
  labiaRepo: "https://github.com/EmaPesci06/labIa",
  email: "mailto:emanuelpesci@gmail.com",
};

export const FORMSPREE_ID = "mpqvwpvd";

type L<T = string> = Record<Lang, T>;

/* ---------- Productos de IA propios ---------- */

export const labia = {
  title: "LabÍA",
  kicker: { es: "App AI-first · MVP en desarrollo", en: "AI-first app · MVP in progress" } as L,
  description: {
    es: "Marketplace de oficios para Mar del Plata: profesionales verificados (DNI y antecedentes) y clientes que los contactan por WhatsApp. La construyo AI-first: agentes de código como Claude Code toman las tareas de Linear siguiendo una guía para agentes, y cada PR pasa por CI antes de entrar.",
    en: "A trades marketplace for Mar del Plata: verified professionals (ID and background check) and clients who contact them on WhatsApp. I build it AI-first: coding agents like Claude Code pick up tasks from Linear following an agent guide, and every PR goes through CI before it merges.",
  } as L,
  points: {
    es: [
      "Next.js 16, React 19 y TypeScript estricto",
      "Supabase: Postgres + PostGIS, RLS en todas las tablas y tests pgTAP",
      "CI en GitHub Actions: lint, typecheck, Vitest y Playwright en celular y escritorio",
      "Previews por PR en Vercel, Sentry, PostHog y emails con Resend",
    ],
    en: [
      "Next.js 16, React 19 and strict TypeScript",
      "Supabase: Postgres + PostGIS, RLS on every table and pgTAP tests",
      "CI on GitHub Actions: lint, typecheck, Vitest and Playwright on mobile and desktop",
      "Per-PR previews on Vercel, Sentry, PostHog and emails with Resend",
    ],
  } as L<string[]>,
  tags: ["Claude Code", "Next.js", "Supabase", "TypeScript", "Linear", "Vercel"],
  url: LINKS.labiaRepo,
};

export interface AgentProject {
  title: L;
  description: L;
  steps: L<string[]>;
  tags: string[];
}

export const agentProjects: AgentProject[] = [
  {
    title: { es: "Agente de búsqueda de empleo", en: "AI Job Search Agent" },
    description: {
      es: "Busca ofertas todos los días, las puntúa contra mi perfil, adapta el CV y las respuestas y completa el formulario. El envío final lo aprueba una persona.",
      en: "Searches job boards every day, scores each posting against my profile, tailors the resume and answers and fills in the form. A person approves the final submit.",
    },
    steps: {
      es: ["Buscar ofertas", "Puntuar contra mi perfil", "Adaptar CV y respuestas", "Completar el formulario", "Esperar revisión humana"],
      en: ["Search postings", "Score against my profile", "Tailor resume and answers", "Fill in the form", "Wait for human review"],
    },
    tags: ["Claude Code", "Skills", "MCP"],
  },
  {
    title: { es: "Generador de creativos para Meta Ads", en: "Meta Ads Creative Generator" },
    description: {
      es: "Skills de Claude que convierten un producto en conceptos de anuncio, guiones escena por escena y prompts de video con IA: animado, B-roll y UGC con avatar.",
      en: "Claude skills that turn a product into ad concepts, scene-by-scene scripts and AI video prompts: animated, B-roll and UGC avatar.",
    },
    steps: {
      es: ["Producto", "Conceptos de anuncio", "Guion por escena", "Prompts de video IA", "Animado, B-roll o UGC"],
      en: ["Product", "Ad concepts", "Scene-by-scene script", "AI video prompts", "Animated, B-roll or UGC"],
    },
    tags: ["Claude Skills", "Prompt engineering", "Meta Ads"],
  },
];

export const livia = {
  title: "Livia",
  kicker: { es: "E-commerce propio · Shopify · Argentina", en: "My own e-commerce · Shopify · Argentina" } as L,
  description: {
    es: "Tienda Shopify de medias de compresión que vende en Argentina. Creé todo el branding con Claude y armé la operación: catálogo, precios, pagos con Mercado Pago y creativos con IA para Meta Ads.",
    en: "A Shopify store selling compression socks in Argentina. I created the whole brand with Claude and set up the operation: catalog, pricing, Mercado Pago payments and AI creatives for Meta Ads.",
  } as L,
  tags: { es: ["Shopify", "Branding con Claude", "Mercado Pago", "Meta Ads"], en: ["Shopify", "Branding with Claude", "Mercado Pago", "Meta Ads"] } as L<string[]>,
};

/* ---------- Proyectos para clientes ---------- */

export interface Project {
  title: string;
  category: L;
  highlight: L;
  description: L;
  image?: string;
  url?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Winebank",
    category: { es: "Marketplace", en: "Marketplace" },
    highlight: { es: "Desde cero · split payments", en: "From scratch · split payments" },
    description: {
      es: "Marketplace de vinos curados en Bubble: arquitectura, datos, admin y releases. Mercado Pago con JavaScript propio y Gemini para normalizar las fotos.",
      en: "Curated wine marketplace in Bubble: architecture, data model, admin and releases. Mercado Pago with custom JavaScript and Gemini to normalize photos.",
    },
    tags: ["Bubble", "Mercado Pago", "Gemini"],
  },
  {
    title: "Demyo",
    category: { es: "SaaS · España", en: "SaaS · Spain" },
    highlight: { es: "Carga de ~10 s a 2-3 s", en: "Load time ~10 s → 2–3 s" },
    description: {
      es: "Renting de dispositivos reacondicionados. Quité recursos sin uso, rehice workflows pesados y sumé perfiles públicos de empresas.",
      en: "Refurbished device rentals. I removed unused resources, rebuilt heavy workflows and added public company profiles.",
    },
    image: demyo,
    url: "https://app.demyo.es/",
    tags: ["Bubble", "Performance"],
  },
  {
    title: "Emendu",
    category: { es: "SaaS", en: "SaaS" },
    highlight: { es: "Suscripciones con Stripe", en: "Stripe subscriptions" },
    description: {
      es: "Renting de equipos para empresas, con mucho tráfico. Bugs, registro mejorado y planes con Stripe por API Connector.",
      en: "High-traffic equipment rentals for companies. Bug fixes, a better sign-up flow and Stripe plans through the API Connector.",
    },
    image: emendu,
    url: "https://app.emendu.com/",
    tags: ["Bubble", "Stripe"],
  },
  {
    title: "Buyer-Match",
    category: { es: "PropTech", en: "PropTech" },
    highlight: { es: "De MVP temprano a producto", en: "From early MVP to product" },
    description: {
      es: "Plataforma inmobiliaria. Rehice la UI desde las specs del diseñador y sumé un mapa de propiedades.",
      en: "Real estate platform. I rebuilt the UI from the designer's specs and added a property map.",
    },
    image: buyermatch,
    url: "https://buyer-match.com/",
    tags: ["Bubble", "Maps"],
  },
  {
    title: "Fletech",
    category: { es: "Logística", en: "Logistics" },
    highlight: { es: "Viajes por WhatsApp", en: "Jobs shared via WhatsApp" },
    description: {
      es: "Funciones para que los transportistas vean su perfil y sus viajes, los acepten y los compartan por WhatsApp.",
      en: "Features that let carriers see their profile and jobs, accept them and share them on WhatsApp.",
    },
    image: fletech,
    url: "https://app.fletech.com.ar/",
    tags: ["Bubble", "WhatsApp"],
  },
  {
    title: "EcomSphere USA",
    category: { es: "Portal de talento", en: "Talent portal" },
    highlight: { es: "~15 profesionales incorporados", en: "~15 professionals onboarded" },
    description: {
      es: "Primer portal de talento de la empresa en Softr + SmartSuite, con reclutamiento automatizado y CVs convertidos a datos con IA.",
      en: "The company's first talent portal in Softr + SmartSuite, with automated recruiting and AI that turns resumes into structured data.",
    },
    image: ecomsphere,
    url: "https://app.ecomsphereusa.com/",
    tags: ["Softr", "SmartSuite", "IA"],
  },
  {
    title: "Senior AI",
    category: { es: "Salud · EE.UU.", en: "Healthcare · US" },
    highlight: { es: "Agente de voz con Retell AI", en: "Retell AI voice agent" },
    description: {
      es: "Asistente de voz para cuidado de adultos mayores, proveedores cargados en Xano y polígonos de cobertura en un mapa.",
      en: "Voice assistant for elderly care, providers loaded into Xano and coverage polygons on a map.",
    },
    tags: ["Retell AI", "Xano", "Geodata"],
  },
  {
    title: "Consultancy Global",
    category: { es: "Legal", en: "Legal" },
    highlight: { es: "Agente que califica leads", en: "Agent that qualifies leads" },
    description: {
      es: "Agente de Retell AI dentro de Make, con ChatGPT, Zoho CRM y Twilio, que atiende prospectos y los deriva al experto indicado.",
      en: "Retell AI agent inside Make, with ChatGPT, Zoho CRM and Twilio, that answers prospects and routes them to the right expert.",
    },
    tags: ["Retell AI", "Make", "ChatGPT"],
  },
  {
    title: "The Elevate",
    category: { es: "EdTech", en: "EdTech" },
    highlight: { es: "Cursos para mentores", en: "Courses for mentors" },
    description: {
      es: "Módulo de cursos estilo Udemy en Bubble e integraciones de Stripe y ChatGPT para pagos y mensajería.",
      en: "Udemy-style course module in Bubble, plus Stripe and ChatGPT integrations for payments and messaging.",
    },
    image: theelevate,
    url: "https://theelevate.me/",
    tags: ["Bubble", "Stripe", "ChatGPT"],
  },
  {
    title: "Naked's",
    category: { es: "Marketplace · México", en: "Marketplace · Mexico" },
    highlight: { es: "Ofertas + checkout de Clip", en: "Offers + Clip checkout" },
    description: {
      es: "Red social de ropa usada en Bubble: publicaciones, ofertas entre usuarios y compra con checkout de Clip.",
      en: "Second-hand clothing social marketplace in Bubble: listings, user offers and purchases through a Clip checkout.",
    },
    image: nakeds,
    url: "https://nakeds.app/",
    tags: ["Bubble", "Clip"],
  },
];

/* ---------- Stack ---------- */

export const stackGroups: { title: L; skills: string[] }[] = [
  { title: { es: "No-code", en: "No-code" }, skills: ["Bubble", "Softr", "SmartSuite", "Xano", "Voiceflow"] },
  {
    title: { es: "Automatización", en: "Automation" },
    skills: ["Make", "Zapier", "Webhooks", "APIs REST", "Stripe", "Mercado Pago", "Twilio", "Zoho CRM"],
  },
  { title: { es: "IA", en: "AI" }, skills: ["Claude Code", "Claude Skills", "MCP", "OpenAI", "Gemini", "Retell AI", "ElevenLabs"] },
  { title: { es: "Código", en: "Code" }, skills: ["TypeScript", "React", "Next.js", "Node.js", "Supabase", "Python"] },
];

/* ---------- Experiencia (replicada de LinkedIn) ---------- */

export interface Job {
  period: L;
  company: string;
  role: L;
  summary: L;
  bullets: L<string[]>;
}

export const experience: Job[] = [
  {
    period: { es: "jul. 2025 – jul. 2026", en: "Jul 2025 – Jul 2026" },
    company: "Jams",
    role: { es: "Bubble Developer", en: "Bubble Developer" },
    summary: {
      es: "Responsable de cinco aplicaciones Bubble en producción para clientes de la agencia: Demyo, Emendu, Buyer-Match, Winebank y Fletech.",
      en: "Owned five production Bubble apps for agency clients: Demyo, Emendu, Buyer-Match, Winebank and Fletech.",
    },
    bullets: {
      es: [
        "Construí Winebank desde cero, un marketplace de vinos de colección: checkout de Mercado Pago con JavaScript porque el plugin oficial de Bubble no servía, Google Gemini para normalizar las fotos y un dashboard donde un enólogo elige los vinos destacados de la semana.",
        "Bajé el tiempo de carga del listado de proyectos de Demyo de ~10 s a 2-3 s, limpiando recursos y rehaciendo workflows. También sumé perfiles públicos para empresas.",
        "Mantuve Emendu, una app con mucho tráfico: bugs reportados, mejor flujo de registro y planes de suscripción con Stripe.",
        "Llevé Buyer-Match, una plataforma inmobiliaria, de un MVP temprano a producto: rehice la UI desde el diseño de UX/UI y sumé un mapa de propiedades.",
        "En Fletech desarrollé las funciones para que los transportistas vean su perfil y sus trabajos, los acepten y los compartan por WhatsApp.",
      ],
      en: [
        "Built Winebank from scratch, a collectible wine marketplace: Mercado Pago checkout with custom JavaScript because the official Bubble plugin fell short, Google Gemini to normalize photos and a dashboard where a sommelier picks the wines of the week.",
        "Cut Demyo's project listing load time from ~10 s to 2–3 s by cleaning up resources and rebuilding workflows. Also added public company profiles.",
        "Maintained Emendu, a high-traffic app: reported bugs, a better sign-up flow and Stripe subscription plans.",
        "Took Buyer-Match, a real estate platform, from early MVP to product: rebuilt the UI from the UX/UI design and added a property map.",
        "At Fletech I built the features that let carriers see their profile and jobs, accept them and share them on WhatsApp.",
      ],
    },
  },
  {
    period: { es: "sept. 2024 – jun. 2025", en: "Sep 2024 – Jun 2025" },
    company: "EcomSphere USA",
    role: { es: "No-Code Developer", en: "No-Code Developer" },
    summary: {
      es: "Primer portal interno de talento de la empresa, construido desde cero.",
      en: "The company's first internal talent portal, built from scratch.",
    },
    bullets: {
      es: [
        "Construí en Softr + SmartSuite el portal que conecta desarrolladores de WordPress con proyectos de clientes.",
        "Automaticé el pipeline de reclutamiento en SmartSuite, desde la postulación hasta la lista corta (unos 15 profesionales incorporados mientras estuve).",
        "Integré IA para pasar los CVs a campos estructurados (aptitudes, experiencia, seniority), sin carga manual.",
      ],
      en: [
        "Built the Softr + SmartSuite portal that connects WordPress developers with client projects.",
        "Automated the recruiting pipeline in SmartSuite, from application to shortlist (about 15 professionals onboarded during my time).",
        "Integrated AI to turn resumes into structured fields (skills, experience, seniority) with no manual entry.",
      ],
    },
  },
  {
    period: { es: "mar. 2025 – abr. 2025", en: "Mar 2025 – Apr 2025" },
    company: "Senior AI, LLC",
    role: {
      es: "Desarrollador No-Code · Automatización de datos, geodatos e IA de voz",
      en: "No-Code Developer · Data automation, geodata and voice AI",
    },
    summary: {
      es: "Base de datos de proveedores de salud para adultos mayores en EE.UU., con la cobertura geográfica de cada uno.",
      en: "A database of US senior-care providers with each one's geographic coverage.",
    },
    bullets: {
      es: [
        "Automaticé la búsqueda y la carga de centros de salud de distintas ciudades en Xano, reemplazando la carga manual.",
        "Generé el polígono de cobertura de cada proveedor y lo mostré en un mapa.",
        "Construí un asistente de voz con Retell AI que atiende llamadas para servicios de cuidado de adultos mayores.",
      ],
      en: [
        "Automated finding and loading care providers from multiple cities into Xano, replacing manual entry.",
        "Generated each provider's coverage polygon and displayed it on a map.",
        "Built a Retell AI voice assistant that answers calls for elderly care services.",
      ],
    },
  },
  {
    period: { es: "dic. 2024 – abr. 2025", en: "Dec 2024 – Apr 2025" },
    company: "Consultancy Global",
    role: { es: "Desarrollador No-Code · Automatización con IA", en: "No-Code Developer · AI Automation" },
    summary: { es: "Agente de IA para una firma de servicios legales.", en: "An AI agent for a legal services firm." },
    bullets: {
      es: [
        "Armé un agente de Retell AI dentro de Make, con ChatGPT, Zoho CRM y Twilio, que atiende a los interesados, califica los leads y los asigna al experto correcto.",
        "Construí interfaces en React a partir de diseños de Figma para un sistema de gestión legal.",
      ],
      en: [
        "Built a Retell AI agent inside Make, with ChatGPT, Zoho CRM and Twilio, that answers prospects, qualifies leads and assigns them to the right expert.",
        "Built React interfaces from Figma designs for a legal management system.",
      ],
    },
  },
  {
    period: { es: "ago. 2024 – oct. 2024", en: "Aug 2024 – Oct 2024" },
    company: "The Elevate",
    role: { es: "No-Code Developer", en: "No-Code Developer" },
    summary: {
      es: "Portal de crecimiento personal y profesional en Bubble.",
      en: "A personal and professional growth portal in Bubble.",
    },
    bullets: {
      es: [
        "Mejoré la UI del portal.",
        "Construí un módulo de cursos estilo Udemy en el que cada mentor crea y publica sus propios cursos.",
      ],
      en: ["Improved the portal UI.", "Built a Udemy-style course module where each mentor creates and publishes their own courses."],
    },
  },
  {
    period: { es: "abr. 2024 – ago. 2024", en: "Apr 2024 – Aug 2024" },
    company: "The Colony",
    role: { es: "No-Code Developer (contrato de formación)", en: "No-Code Developer (training contract)" },
    summary: { es: "Me formé en Bubble trabajando en proyectos reales.", en: "Learned Bubble working on real projects." },
    bullets: {
      es: [
        "Construí Nakeds, una red social de compraventa de ropa usada: publicaciones, ofertas entre usuarios y compra con checkout de Clip (México).",
      ],
      en: [
        "Built Nakeds, a second-hand clothing social marketplace: listings, user offers and purchases through a Clip checkout (Mexico).",
      ],
    },
  },
  {
    period: { es: "may. 2024 – jun. 2024", en: "May 2024 – Jun 2024" },
    company: "No Country",
    role: { es: "Desarrollador de front-end", en: "Front-End Developer" },
    summary: { es: "", en: "" },
    bullets: { es: [], en: [] },
  },
  {
    period: { es: "sept. 2022 – actualidad", en: "Sep 2022 – present" },
    company: "Freelance",
    role: { es: "Full Stack, No-Code & AI Engineer", en: "Full Stack, No-Code & AI Engineer" },
    summary: {
      es: "Apps web, automatizaciones e integraciones de IA para pymes y startups, más mis productos propios.",
      en: "Web apps, automations and AI integrations for small businesses and startups, plus my own products.",
    },
    bullets: {
      es: [
        "Agentes y skills con Claude Code: búsqueda de empleo y creativos para Meta Ads.",
        "LabÍA, app AI-first construida con agentes de código.",
        "Livia, mi tienda Shopify con branding creado con Claude.",
      ],
      en: [
        "Agents and skills with Claude Code: job search and Meta Ads creatives.",
        "LabÍA, an AI-first app built with coding agents.",
        "Livia, my Shopify store with a brand created with Claude.",
      ],
    },
  },
];

/* ---------- Textos de la interfaz ---------- */

export const translations = {
  es: {
    nav: {
      ai: "Productos IA",
      ecommerce: "E-commerce",
      projects: "Clientes",
      experience: "Experiencia",
      contact: "Contacto",
      downloadCv: "Descargar CV",
      themeLight: "Cambiar a modo claro",
      themeDark: "Cambiar a modo oscuro",
    },
    hero: {
      available: "Disponible · remoto desde Mar del Plata, Argentina",
      role: "AI Engineer · No-Code Developer · Agentes con Claude",
      title: "Construyo apps AI-first y agentes con Claude.",
      description:
        "Construyo productos donde la IA hace el trabajo pesado: agentes con Claude Code, apps desarrolladas con agentes de IA y apps no-code en producción con Bubble, Softr, Xano y Make. Más de 3 años con clientes de EE.UU., España y Argentina.",
      downloadCv: "Descargar CV",
      viewProjects: "Ver productos IA",
      cvLink: cvEs,
      facts: [
        { value: "AI-first", label: "apps construidas con agentes de IA" },
        { value: "5", label: "apps Bubble en producción a mi cargo en Jams" },
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
    ai: {
      eyebrow: "Productos de IA propios",
      title: "Apps AI-first y agentes que trabajan solos, con una persona al final.",
      viewRepo: "Ver repositorio",
    },
    ecommerce: { eyebrow: "E-commerce propio" },
    projects: {
      eyebrow: "Para clientes",
      title: "Proyectos en producción",
      visit: "Ver sitio",
      privateProject: "Proyecto privado",
    },
    stack: { title: "No-code primero, código cuando hace falta" },
    experience: { title: "Experiencia" },
    contact: {
      title: "¿Buscás un AI Engineer o un No-Code Developer?",
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
      ai: "AI products",
      ecommerce: "E-commerce",
      projects: "Clients",
      experience: "Experience",
      contact: "Contact",
      downloadCv: "Download CV",
      themeLight: "Switch to light mode",
      themeDark: "Switch to dark mode",
    },
    hero: {
      available: "Available · remote from Mar del Plata, Argentina",
      role: "AI Engineer · No-Code Developer · Claude Agents",
      title: "I build AI-first apps and agents with Claude.",
      description:
        "I build products where AI does the heavy lifting: agents with Claude Code, apps built with AI coding agents and production no-code apps with Bubble, Softr, Xano and Make. 3+ years with clients in the US, Spain and Argentina.",
      downloadCv: "Download CV",
      viewProjects: "See AI products",
      cvLink: cvEn,
      facts: [
        { value: "AI-first", label: "apps built with AI coding agents" },
        { value: "5", label: "production Bubble apps I owned at Jams" },
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
    ai: {
      eyebrow: "My own AI products",
      title: "AI-first apps and agents that work on their own, with a person at the end.",
      viewRepo: "View repository",
    },
    ecommerce: { eyebrow: "My own e-commerce" },
    projects: {
      eyebrow: "For clients",
      title: "Production projects",
      visit: "Visit site",
      privateProject: "Private project",
    },
    stack: { title: "No-code first, code when it's needed" },
    experience: { title: "Experience" },
    contact: {
      title: "Looking for an AI Engineer or a No-Code Developer?",
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
