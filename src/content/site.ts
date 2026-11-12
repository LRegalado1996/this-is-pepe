/**
 * Interface copy for every page, per locale. Long-form content (jobs,
 * projects, articles, about) lives in its own module next to this one.
 */
import type { Locale, RouteKey } from "@/lib/i18n/config";

interface PageMeta {
  title: string;
  description: string;
  keywords: string[];
}

export interface Dictionary {
  role: string;
  location: string;
  tagline: string;
  keywords: string[];
  nav: {
    labels: Record<RouteKey, string>;
    primary: string;
    footer: string;
    menu: string;
    openMenu: string;
    closeMenu: string;
    skipToContent: string;
    /** Label of the link that switches to the other language. */
    switchLanguage: string;
    switchLanguageShort: string;
  };
  meta: Record<RouteKey, PageMeta> & { caseStudySuffix: string };
  hero: {
    eyebrow: string;
    lead: (years: number) => string;
    seeWork: string;
    readWriting: string;
    locationChip: string;
    portraitAlt: string;
  };
  marquee: string[];
  onOff: {
    label: string;
    onText: string;
    deskAlt: string;
    howEyebrow: string;
    howStatement: string;
    howText: string;
    offText: string;
    focusAlt: string;
  };
  seasons: { title: [string, string]; fullHistory: string };
  selectedWork: { title: [string, string]; allWork: string; readCase: string };
  testimonials: { title: [string, string] };
  writing: {
    title: string;
    allArticles: string;
    readOn: (publisher: string) => string;
    eyebrow: string;
    lead: string;
  };
  callout: { words: string[]; highlight: string; text: (years: number) => string };
  closing: { eyebrow: string; cta: string };
  footer: { bio: string; pages: string; elsewhere: string; email: string; madeIn: string };
  about: {
    eyebrow: string;
    title: string[];
    lead: string;
    stats: { years: string; teams: string; markets: string; articles: string };
    howTitle: [string, string];
    stackTitle: [string, string];
    offEyebrow: string;
  };
  experience: {
    eyebrow: (startYear: number) => string;
    title: string[];
    lead: string;
    details: string;
    less: string;
  };
  work: {
    eyebrow: string;
    title: string[];
    lead: string;
    caseStudy: string;
    role: string;
    period: string;
    stack: string;
    challenge: string;
    approach: string;
    outcome: string;
    readArticles: string;
    nextProject: string;
    backToWork: string;
  };
  contact: {
    eyebrow: string;
    title: string[];
    lead: string;
    form: {
      eyebrow: string;
      title: string;
      description: string;
      name: string;
      topic: string;
      topics: string[];
      message: string;
      messagePlaceholder: string;
      sendEmail: string;
      sendWhatsApp: string;
      note: string;
      subject: (topic: string) => string;
      signature: (name: string) => string;
    };
    call: {
      eyebrow: string;
      title: string;
      description: string;
      button: string;
      iframeTitle: string;
    };
  };
  notFound: { eyebrow: string; title: string[]; lead: string; home: string };
}

const en: Dictionary = {
  role: "Senior Full Stack Developer",
  location: "Montevideo, Uruguay",
  tagline:
    "Lucas Regalado is a senior full stack developer from Montevideo, Uruguay. He builds web products with React, Next.js and TypeScript, and writes about working with AI agents.",
  keywords: [
    "Lucas Regalado",
    "Lucas 'Pepe' Regalado",
    "full stack developer Uruguay",
    "React developer Uruguay",
    "Next.js developer",
    "AI agents developer",
    "Claude Code",
    "remote software engineer",
    "Montevideo software developer",
    "bilingual developer",
  ],
  nav: {
    labels: {
      home: "Home",
      about: "About",
      work: "Work",
      experience: "Experience",
      writing: "Writing",
      contact: "Contact",
    },
    primary: "Primary",
    footer: "Footer",
    menu: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skipToContent: "Skip to content",
    switchLanguage: "Ver en español",
    switchLanguageShort: "ES",
  },
  meta: {
    home: {
      title: "Lucas Regalado · Senior Full Stack Developer",
      description:
        "Lucas Regalado is a senior full stack developer from Montevideo, Uruguay. He builds web products with React, Next.js and TypeScript, and writes about working with AI agents.",
      keywords: ["portfolio", "software engineer Montevideo"],
    },
    about: {
      title: "About Me · Senior Full Stack Developer",
      description:
        "Who Lucas Regalado is: a senior full stack developer from Montevideo, Uruguay. How he works, the stack he uses and his life outside the code.",
      keywords: ["about lucas regalado", "software developer biography"],
    },
    work: {
      title: "Selected Work · Case Studies",
      description:
        "Case studies by Lucas Regalado: a crew of AI agents for developer workflow, a shoppable video feed, an e-commerce replatform to Next.js and a clinical-trials reporting framework.",
      keywords: ["case studies", "Next.js migration", "AI agents workflow"],
    },
    experience: {
      title: "Work Experience",
      description:
        "The professional journey of Lucas Regalado, senior full stack developer: from tech support in 2016 to leading teams and building AI-driven products with React, Next.js and Node.js.",
      keywords: ["work experience", "Lucas Regalado resume"],
    },
    writing: {
      title: "Writing · AI Agents and Software Engineering",
      description:
        "Articles by Lucas Regalado on working with AI agents: automating daily tasks with scheduled routines and reducing Claude Code token usage with subagents.",
      keywords: ["AI agents articles", "Claude Code token usage", "automate daily tasks AI agent"],
    },
    contact: {
      title: "Contact",
      description:
        "Get in touch with Lucas Regalado, senior full stack developer in Montevideo, Uruguay. Email, LinkedIn, WhatsApp or a 30-minute call, in English or Spanish.",
      keywords: ["contact lucas regalado"],
    },
    caseStudySuffix: "Case Study",
  },
  hero: {
    eyebrow: "Full Stack Developer — Currently at Streaver",
    lead: (years) =>
      `I build web products that scale, and lately I let AI agents handle the routine around them. ${years} years shipping with React, Next.js and TypeScript for teams in the US, Europe and Uruguay.`,
    seeWork: "See my work",
    readWriting: "Read my writing",
    locationChip: "Montevideo, UY",
    portraitAlt: "Lucas Regalado smiling, wearing a black t-shirt",
  },
  marquee: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "AI Agents",
    "Claude Code",
    "Full Stack",
  ],
  onOff: {
    label: "On stack and off stack",
    onText:
      "Product-minded engineering: scalable architectures, clean interfaces and performance that moves business metrics. From clinical trials platforms to e-commerce serving all of Uruguay.",
    deskAlt: "Lucas working at his desk with two monitors",
    howEyebrow: "How I work",
    howStatement: "Sparse requirements or detailed specs — I adapt fast, lift the team and ship.",
    howText:
      "Led backend teams across time zones, drove a PHP-to-Next.js migration for a national e-commerce, and built products end to end with a human-centered, sustainable approach.",
    offText:
      "Mate always within reach. Father of a skater, Nacional supporter, F1 on race weekends and uruguayan rock as the soundtrack. That balance is part of how I build.",
    focusAlt: "Lucas from behind at his desk, mate at hand",
  },
  seasons: { title: ["Career", "Seasons"], fullHistory: "Full history" },
  selectedWork: { title: ["Selected", "Work"], allWork: "All work", readCase: "Read the case study" },
  testimonials: { title: ["Kind", "Words"] },
  writing: {
    title: "Writing",
    allArticles: "All articles",
    readOn: (publisher) => `Read on ${publisher}`,
    eyebrow: "Articles — AI agents and engineering",
    lead: "Notes from putting AI agents to work on the routine around the code: what I built, what it cost and what I would do again.",
  },
  callout: {
    words: ["I", "build", "web", "products", "that", "scale."],
    highlight: "scale.",
    text: (years) => `${years} years shipping for teams in the US and Europe — from Montevideo, Uruguay.`,
  },
  closing: { eyebrow: "A project, a talk, an idea — or just to say hi", cta: "Let's talk" },
  footer: {
    bio: "Full Stack Developer from Montevideo, Uruguay. Currently building at",
    pages: "Pages",
    elsewhere: "Elsewhere",
    email: "Email",
    madeIn: "Made in Uruguay, mate within reach.",
  },
  about: {
    eyebrow: "About me — Pepe to friends",
    title: ["About", "Lucas"],
    lead: "Full stack developer from Montevideo, Uruguay. Team player first, engineer right after.",
    stats: {
      years: "Years shipping",
      teams: "Teams",
      markets: "Markets: US, Europe, Uruguay",
      articles: "Articles published",
    },
    howTitle: ["How I", "Work"],
    stackTitle: ["Stack &", "Tools"],
    offEyebrow: "Beyond the code",
  },
  experience: {
    eyebrow: (startYear) => `Work experience — ${startYear} to today`,
    title: ["Career", "Seasons"],
    lead: "From installing invoicing systems to leading distributed teams and building AI-driven products. Every season taught me something I still use.",
    details: "Details",
    less: "Less",
  },
  work: {
    eyebrow: "Case studies — problems, decisions, results",
    title: ["Selected", "Work"],
    lead: "A few projects I am proud of, told through the problem and the decisions behind it. Clients stay unnamed; the work speaks for itself.",
    caseStudy: "Case study",
    role: "My role",
    period: "When",
    stack: "Stack",
    challenge: "The challenge",
    approach: "The approach",
    outcome: "The outcome",
    readArticles: "Read the full write-ups",
    nextProject: "Next project",
    backToWork: "All work",
  },
  contact: {
    eyebrow: "Contact — English or Spanish",
    title: ["Let's", "talk"],
    lead: "A project, a talk, an idea you want a second opinion on, or just to say hello. I read everything and I answer.",
    form: {
      eyebrow: "No rush",
      title: "Write to me",
      description: "Tell me what is on your mind and send it from your own email or WhatsApp.",
      name: "Your name",
      topic: "What is it about?",
      topics: ["A project", "A talk or collaboration", "A question", "Just saying hi"],
      message: "Message",
      messagePlaceholder: "A few lines are enough to get started.",
      sendEmail: "Send by email",
      sendWhatsApp: "Send by WhatsApp",
      note: "Opens your email or WhatsApp with the message ready. Nothing is stored on this site.",
      subject: (topic) => `${topic} — via lucasregalado.com`,
      signature: (name) => `— ${name}`,
    },
    call: {
      eyebrow: "30 minutes",
      title: "Book a call",
      description: "Pick a slot that works for you and we talk face to face.",
      button: "Open the calendar",
      iframeTitle: "Schedule a meeting with Lucas Regalado",
    },
  },
  notFound: {
    eyebrow: "Error 404",
    title: ["Off", "Track"],
    lead: "This page went wide at turn one. Let's get you back on the racing line.",
    home: "Back to home",
  },
};

const es: Dictionary = {
  role: "Desarrollador Full Stack Senior",
  location: "Montevideo, Uruguay",
  tagline:
    "Lucas Regalado es un desarrollador full stack senior de Montevideo, Uruguay. Construye productos web con React, Next.js y TypeScript, y escribe sobre cómo trabajar con agentes de IA.",
  keywords: [
    "Lucas Regalado",
    "Lucas 'Pepe' Regalado",
    "desarrollador full stack Uruguay",
    "desarrollador React Montevideo",
    "desarrollador Next.js",
    "desarrollador web Montevideo",
    "agentes de IA",
    "Claude Code",
    "ingeniero de software remoto",
    "desarrollador bilingüe",
  ],
  nav: {
    labels: {
      home: "Inicio",
      about: "Sobre mí",
      work: "Proyectos",
      experience: "Experiencia",
      writing: "Escritos",
      contact: "Contacto",
    },
    primary: "Principal",
    footer: "Pie de página",
    menu: "Menú",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    skipToContent: "Saltar al contenido",
    switchLanguage: "View in English",
    switchLanguageShort: "EN",
  },
  meta: {
    home: {
      title: "Lucas Regalado · Desarrollador Full Stack Senior",
      description:
        "Lucas Regalado es un desarrollador full stack senior de Montevideo, Uruguay. Construye productos web con React, Next.js y TypeScript, y escribe sobre cómo trabajar con agentes de IA.",
      keywords: ["portfolio", "ingeniero de software Montevideo"],
    },
    about: {
      title: "Sobre mí · Desarrollador Full Stack Senior",
      description:
        "Quién es Lucas Regalado: desarrollador full stack senior de Montevideo, Uruguay. Cómo trabaja, el stack que usa y su vida fuera del código.",
      keywords: ["sobre lucas regalado", "biografía desarrollador de software"],
    },
    work: {
      title: "Proyectos destacados · Casos de estudio",
      description:
        "Casos de estudio de Lucas Regalado: un equipo de agentes de IA para el flujo de trabajo, un feed de videos comprables, la migración de un e-commerce a Next.js y un framework de reportes para ensayos clínicos.",
      keywords: ["casos de estudio", "migración a Next.js", "agentes de IA"],
    },
    experience: {
      title: "Experiencia laboral",
      description:
        "La trayectoria profesional de Lucas Regalado, desarrollador full stack senior: del soporte técnico en 2016 a liderar equipos y construir productos con IA usando React, Next.js y Node.js.",
      keywords: ["experiencia laboral", "currículum Lucas Regalado"],
    },
    writing: {
      title: "Escritos · Agentes de IA e ingeniería de software",
      description:
        "Artículos de Lucas Regalado sobre cómo trabajar con agentes de IA: automatizar tareas diarias con rutinas programadas y reducir el consumo de tokens de Claude Code con subagentes.",
      keywords: ["artículos agentes de IA", "tokens Claude Code", "automatizar tareas con IA"],
    },
    contact: {
      title: "Contacto",
      description:
        "Contactá a Lucas Regalado, desarrollador full stack senior en Montevideo, Uruguay. Email, LinkedIn, WhatsApp o una llamada de 30 minutos, en español o inglés.",
      keywords: ["contacto lucas regalado"],
    },
    caseStudySuffix: "Caso de estudio",
  },
  hero: {
    eyebrow: "Desarrollador Full Stack — Hoy en Streaver",
    lead: (years) =>
      `Construyo productos web que escalan y, últimamente, dejo que agentes de IA se ocupen de la rutina que los rodea. ${years} años entregando con React, Next.js y TypeScript para equipos de Estados Unidos, Europa y Uruguay.`,
    seeWork: "Ver mi trabajo",
    readWriting: "Leer mis escritos",
    locationChip: "Montevideo, UY",
    portraitAlt: "Lucas Regalado sonriendo, con una remera negra",
  },
  marquee: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Agentes de IA",
    "Claude Code",
    "Full Stack",
  ],
  onOff: {
    label: "On stack y off stack",
    onText:
      "Ingeniería con cabeza de producto: arquitecturas escalables, interfaces limpias y performance que mueve las métricas del negocio. De plataformas de ensayos clínicos a un e-commerce que llega a todo Uruguay.",
    deskAlt: "Lucas trabajando en su escritorio con dos monitores",
    howEyebrow: "Cómo trabajo",
    howStatement: "Requerimientos escasos o specs detalladas: me adapto rápido, levanto al equipo y entrego.",
    howText:
      "Lideré equipos backend en distintas zonas horarias, impulsé la migración de PHP a Next.js de un e-commerce nacional y construí productos de punta a punta con un enfoque humano y sostenible.",
    offText:
      "El mate siempre a mano. Papá de una patinadora, hincha de Nacional, F1 los fines de semana de carrera y rock uruguayo de banda sonora. Ese equilibrio es parte de cómo construyo.",
    focusAlt: "Lucas de espaldas en su escritorio, con el mate a mano",
  },
  seasons: { title: ["Mis", "Temporadas"], fullHistory: "Historia completa" },
  selectedWork: {
    title: ["Proyectos", "Destacados"],
    allWork: "Todos los proyectos",
    readCase: "Leer el caso de estudio",
  },
  testimonials: { title: ["Lo que", "Dicen"] },
  writing: {
    title: "Escritos",
    allArticles: "Todos los artículos",
    readOn: (publisher) => `Leer en ${publisher}`,
    eyebrow: "Artículos — agentes de IA e ingeniería",
    lead: "Notas sobre poner agentes de IA a trabajar en la rutina que rodea al código: qué construí, cuánto costó y qué volvería a hacer. Los artículos están en inglés.",
  },
  callout: {
    words: ["Construyo", "productos", "web", "que", "escalan."],
    highlight: "escalan.",
    text: (years) =>
      `${years} años entregando para equipos de Estados Unidos y Europa, desde Montevideo, Uruguay.`,
  },
  closing: { eyebrow: "Un proyecto, una charla, una idea — o simplemente saludar", cta: "Hablemos" },
  footer: {
    bio: "Desarrollador Full Stack de Montevideo, Uruguay. Hoy construyendo en",
    pages: "Páginas",
    elsewhere: "En otros lados",
    email: "Email",
    madeIn: "Hecho en Uruguay, con el mate a mano.",
  },
  about: {
    eyebrow: "Sobre mí — Pepe para los amigos",
    title: ["Sobre", "Lucas"],
    lead: "Desarrollador full stack de Montevideo, Uruguay. Primero compañero de equipo, enseguida ingeniero.",
    stats: {
      years: "Años entregando",
      teams: "Equipos",
      markets: "Mercados: EE. UU., Europa, Uruguay",
      articles: "Artículos publicados",
    },
    howTitle: ["Cómo", "Trabajo"],
    stackTitle: ["Stack y", "Herramientas"],
    offEyebrow: "Más allá del código",
  },
  experience: {
    eyebrow: (startYear) => `Experiencia laboral — de ${startYear} a hoy`,
    title: ["Mis", "Temporadas"],
    lead: "De instalar sistemas de facturación a liderar equipos distribuidos y construir productos con IA. Cada temporada me dejó algo que sigo usando.",
    details: "Detalles",
    less: "Menos",
  },
  work: {
    eyebrow: "Casos de estudio — problemas, decisiones, resultados",
    title: ["Proyectos", "Destacados"],
    lead: "Algunos proyectos de los que estoy orgulloso, contados desde el problema y las decisiones que hubo detrás. Los clientes no se nombran; el trabajo habla por sí solo.",
    caseStudy: "Caso de estudio",
    role: "Mi rol",
    period: "Cuándo",
    stack: "Stack",
    challenge: "El desafío",
    approach: "El enfoque",
    outcome: "El resultado",
    readArticles: "Leer los artículos completos",
    nextProject: "Siguiente proyecto",
    backToWork: "Todos los proyectos",
  },
  contact: {
    eyebrow: "Contacto — en español o inglés",
    title: ["Hablemos"],
    lead: "Un proyecto, una charla, una idea sobre la que querés una segunda opinión, o simplemente saludar. Leo todo y respondo.",
    form: {
      eyebrow: "Sin apuro",
      title: "Escribime",
      description: "Contame qué tenés en mente y mandalo desde tu propio email o WhatsApp.",
      name: "Tu nombre",
      topic: "¿De qué se trata?",
      topics: ["Un proyecto", "Una charla o colaboración", "Una consulta", "Solo saludar"],
      message: "Mensaje",
      messagePlaceholder: "Con unas líneas alcanza para empezar.",
      sendEmail: "Enviar por email",
      sendWhatsApp: "Enviar por WhatsApp",
      note: "Abre tu email o WhatsApp con el mensaje listo. Este sitio no guarda nada.",
      subject: (topic) => `${topic} — desde lucasregalado.com`,
      signature: (name) => `— ${name}`,
    },
    call: {
      eyebrow: "30 minutos",
      title: "Agendá una llamada",
      description: "Elegí el horario que te quede bien y hablamos cara a cara.",
      button: "Abrir el calendario",
      iframeTitle: "Agendar una reunión con Lucas Regalado",
    },
  },
  notFound: {
    eyebrow: "Error 404",
    title: ["Fuera", "de pista"],
    lead: "Esta página se fue largo en la primera curva. Volvamos a la línea de carrera.",
    home: "Volver al inicio",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, es };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
