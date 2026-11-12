/**
 * Selected work and its case studies. Projects are described generically
 * (industry and region only): clients are intentionally never named here.
 */
import type { Locale } from "@/lib/i18n/config";

export interface ProjectStat {
  value: number;
  label: string;
}

interface ProjectFacts {
  slug: string;
  stack: string[];
  period: string;
  /** Links to the published write-ups, when the project has them. */
  hasArticles?: boolean;
}

interface ProjectCopy {
  title: string;
  context: string;
  role: string;
  /** Card description on the home and the work index. */
  summary: string;
  challenge: string[];
  approach: { title: string; text: string }[];
  outcome: string[];
  stats?: ProjectStat[];
  statsNote?: string;
}

export type Project = ProjectFacts & ProjectCopy;

const facts: ProjectFacts[] = [
  {
    slug: "pepitos",
    stack: ["Claude Code", "Subagents", "Markdown", "Git", "Jira", "Slack", "GitHub"],
    period: "2026",
    hasArticles: true,
  },
  {
    slug: "shoppable-video-feed",
    stack: ["React", "Next.js", "TypeScript"],
    period: "2024 – 2025",
  },
  {
    slug: "storefront-replatform",
    stack: ["Next.js", "React", "TypeScript", "PHP", "Webpack", "SEO"],
    period: "2024 – 2025",
  },
  {
    slug: "reporting-framework",
    stack: ["Node.js", "React", "MongoDB", "JavaScript"],
    period: "2018 – 2021",
  },
];

const copy: Record<Locale, Record<string, ProjectCopy>> = {
  en: {
    pepitos: {
      title: "The Pepitos",
      context: "AI agents · Developer workflow",
      role: "Design, setup and ten weeks of tuning",
      summary:
        "A crew of four Claude Code subagents plus scheduled routines that plan the day, prep standups and hand off tickets. Ten weeks in: 47 working days logged, 129 meetings archived and 35 ticket handoffs.",
      challenge: [
        "Two things were eating my day. The first half hour went to gathering context from Jira, Slack, GitHub and yesterday's meeting notes before I could decide what to do. And because one top-tier model was doing every job, my Claude Code credits were gone by 11 AM most days, with a wait until the early afternoon.",
        "I wanted the routine around the code handled for me, without handing over the decisions.",
      ],
      approach: [
        {
          title: "Routines that prepare the day",
          text: "Every weekday at 8 AM an agent reads my tools and writes a one-page plan: the focus of the day, quick wins, blockers and the questions I still owe an answer to. Others prep the standup at 11:30 and close the day at 17:00. There is no code behind them, just a document, a schedule and one prompt.",
        },
        {
          title: "The cheapest model that does the job",
          text: "Four subagents with narrow tools and one hard rule each. The Scout reads GitHub and CI and returns evidence, never conclusions. The Librarian keeps the knowledge folder. The Coder writes to a precise spec and never commits or pushes. The Ticket Machine drafts tickets and checks for duplicates first. Reading runs on the cheapest tier, writing on the middle one.",
        },
        {
          title: "A written memory",
          text: "Anything analyzed once gets written down in a git-versioned folder: conventions, gotchas, a handoff file per ticket and the daily file. Agents read it before they start, so the same material is never analyzed twice.",
        },
        {
          title: "It learns every Friday",
          text: "A weekly routine reads the review comments and my corrections from the week, groups the patterns that repeat and writes them as rules into the coder's definition.",
        },
        {
          title: "What stays human",
          text: "Approving and merging pull requests, and anything published under my name. The agents prepare the work; I decide.",
        },
      ],
      outcome: [
        "Running out of credits went from most mornings to a handful of times in ten weeks.",
        "The first half hour of the day now goes to deciding instead of gathering.",
      ],
      stats: [
        { value: 47, label: "Working days logged" },
        { value: 129, label: "Meetings archived" },
        { value: 35, label: "Ticket handoffs" },
        { value: 29, label: "Rules the coder learned" },
      ],
      statsNote: "Counted after ten weeks of daily use, as of late September 2026.",
    },
    "shoppable-video-feed": {
      title: "Shoppable video feed",
      context: "E-commerce · Uruguay",
      role: "Main front-end developer",
      summary:
        "A short-video browsing experience where products are discovered by swiping: fast playback with audio on every browser, plus add to cart, favorites, likes and sharing built around engagement and conversion.",
      challenge: [
        "A nationwide online store wanted a new way to discover products: a browsing experience inspired by TikTok and YouTube Shorts, where each product is presented through a short, dynamic video.",
        "The hard part was technical. Video had to start fast and play with audio on every browser and device, inside a storefront that still had to sell.",
      ],
      approach: [
        {
          title: "Playback first",
          text: "The feed was built around one goal: videos that start quickly and play with sound on every browser and device.",
        },
        {
          title: "Shopping inside the video",
          text: "Each video carries the actions of a product page: add to cart, save as favorite, like and share, without leaving the feed.",
        },
        {
          title: "Built for engagement and conversion",
          text: "Every interaction was designed to keep people browsing and to shorten the path from discovering a product to buying it.",
        },
      ],
      outcome: [
        "Shipped to production as a public section of the store.",
        "It became a new way to discover products, next to the classic catalog.",
      ],
    },
    "storefront-replatform": {
      title: "Storefront replatform",
      context: "E-commerce · Uruguay",
      role: "Lead front-end developer",
      summary:
        "Led the gradual migration of a nationwide storefront from PHP to Next.js and TypeScript, along with a landing page builder that let non-technical teams launch campaigns without developers.",
      challenge: [
        "The storefront was built on PHP, with some sections written in React and wired in through Webpack. It worked, but the structure made every new feature slower than it should be.",
        "The business could not stop selling while the platform changed, so a rewrite from scratch was not an option.",
      ],
      approach: [
        {
          title: "Gradual, not big bang",
          text: "We introduced TypeScript across the codebase and started moving sections to Next.js one at a time, keeping the store live through the whole process.",
        },
        {
          title: "Consistent design",
          text: "Each migrated section kept a friendly interface aligned with the store's visual identity, so customers never felt they were crossing between two systems.",
        },
        {
          title: "Performance and SEO in every iteration",
          text: "Each release was an opportunity to improve load times and search visibility, not only to change the technology underneath.",
        },
        {
          title: "A landing page builder",
          text: "An internal system that lets non-technical teams create landing pages for promotions, product launches and discount campaigns on their own.",
        },
      ],
      outcome: [
        "A clearer project structure and a platform that scales with the business.",
        "Considerably fewer development hours spent on campaign pages, because marketing no longer needs a developer to publish one.",
      ],
    },
    "reporting-framework": {
      title: "Reporting framework",
      context: "Clinical trials · United States",
      role: "Full stack developer",
      summary:
        "The first custom reporting system of a clinical-trials platform: online previews and CSV exports generated by Node.js scripts without touching the core collections, cutting operating costs per study.",
      challenge: [
        "A platform for running clinical trials needed its first custom reporting system: people had to preview a report online and download all of its data as a CSV file.",
        "The constraint was the architecture. The core database collections (patients, studies, groups) were shared with other critical applications, so they could not be modified.",
      ],
      approach: [
        {
          title: "Work around the core, not through it",
          text: "We designed a system that extracts and processes the information with Node.js scripts, leaving the shared collections untouched.",
        },
        {
          title: "Reports generated on demand",
          text: "Reports are built dynamically, with an online preview and a full CSV export, without affecting the rest of the platform.",
        },
        {
          title: "Reports on the web",
          text: "Later iterations let patients read their reports directly on the website, instead of downloading a dedicated iPhone app or deploying a separate app for each study.",
        },
      ],
      outcome: [
        "Lower operating costs per study.",
        "One unified experience on the reporting website, which simplified implementation and improved accessibility.",
      ],
    },
  },
  es: {
    pepitos: {
      title: "Los Pepitos",
      context: "Agentes de IA · Flujo de trabajo",
      role: "Diseño, armado y diez semanas de ajustes",
      summary:
        "Un equipo de cuatro subagentes de Claude Code y rutinas programadas que planifican el día, preparan las dailies y hacen el traspaso de tickets. A las diez semanas: 47 días de trabajo registrados, 129 reuniones archivadas y 35 traspasos de tickets.",
      challenge: [
        "Dos cosas me comían el día. La primera media hora se iba en juntar contexto de Jira, Slack, GitHub y las notas de las reuniones del día anterior antes de poder decidir qué hacer. Y como un solo modelo, el más caro, hacía todos los trabajos, casi todos los días me quedaba sin créditos de Claude Code a las 11 de la mañana, con espera hasta la tarde.",
        "Quería que la rutina alrededor del código se resolviera sola, sin delegar las decisiones.",
      ],
      approach: [
        {
          title: "Rutinas que preparan el día",
          text: "Cada día hábil a las 8 un agente lee mis herramientas y escribe un plan de una página: el foco del día, tareas rápidas, bloqueos y las preguntas que todavía debo responder. Otras rutinas preparan la daily a las 11:30 y cierran el día a las 17:00. No hay código detrás: un documento, un horario y un prompt.",
        },
        {
          title: "El modelo más barato que resuelve la tarea",
          text: "Cuatro subagentes con herramientas acotadas y una regla innegociable cada uno. El Scout lee GitHub y CI y devuelve evidencia, nunca conclusiones. El Librarian mantiene la carpeta de conocimiento. El Coder escribe contra una especificación precisa y nunca hace commit ni push. La Ticket Machine redacta tickets y antes busca duplicados. La lectura corre en el modelo más económico; la escritura, en el intermedio.",
        },
        {
          title: "Una memoria escrita",
          text: "Todo lo que se analiza una vez queda escrito en una carpeta versionada en git: convenciones, trampas conocidas, un archivo de traspaso por ticket y el archivo del día. Los agentes la leen antes de empezar, así el mismo material nunca se analiza dos veces.",
        },
        {
          title: "Aprende todos los viernes",
          text: "Una rutina semanal lee los comentarios de revisión y mis correcciones de la semana, agrupa los patrones que se repiten y los escribe como reglas en la definición del coder.",
        },
        {
          title: "Lo que sigue siendo humano",
          text: "Aprobar y mergear pull requests, y todo lo que se publica con mi nombre. Los agentes preparan el trabajo; yo decido.",
        },
      ],
      outcome: [
        "Quedarme sin créditos pasó de ser cosa de casi todas las mañanas a un puñado de veces en diez semanas.",
        "La primera media hora del día ahora se va en decidir, no en juntar información.",
      ],
      stats: [
        { value: 47, label: "Días de trabajo registrados" },
        { value: 129, label: "Reuniones archivadas" },
        { value: 35, label: "Traspasos de tickets" },
        { value: 29, label: "Reglas que aprendió el coder" },
      ],
      statsNote: "Contado tras diez semanas de uso diario, a fines de setiembre de 2026.",
    },
    "shoppable-video-feed": {
      title: "Feed de videos comprables",
      context: "E-commerce · Uruguay",
      role: "Desarrollador front end principal",
      summary:
        "Una experiencia de navegación por videos cortos donde los productos se descubren deslizando: reproducción rápida con audio en todos los navegadores, más carrito, favoritos, likes y compartir, pensada para el engagement y la conversión.",
      challenge: [
        "Una tienda online de alcance nacional quería una nueva forma de descubrir productos: una experiencia inspirada en TikTok y YouTube Shorts, donde cada producto se presenta con un video corto y dinámico.",
        "Lo difícil era técnico. El video tenía que arrancar rápido y reproducirse con audio en todos los navegadores y dispositivos, dentro de una tienda que además tenía que vender.",
      ],
      approach: [
        {
          title: "Primero, la reproducción",
          text: "El feed se construyó alrededor de un objetivo: videos que arrancan rápido y se reproducen con sonido en todos los navegadores y dispositivos.",
        },
        {
          title: "Comprar dentro del video",
          text: "Cada video trae las acciones de una página de producto: agregar al carrito, guardar como favorito, dar like y compartir, sin salir del feed.",
        },
        {
          title: "Pensado para engagement y conversión",
          text: "Cada interacción se diseñó para que la gente siga navegando y para acortar el camino entre descubrir un producto y comprarlo.",
        },
      ],
      outcome: [
        "Salió a producción como una sección pública de la tienda.",
        "Se convirtió en una nueva forma de descubrir productos, junto al catálogo clásico.",
      ],
    },
    "storefront-replatform": {
      title: "Replataforma de la tienda",
      context: "E-commerce · Uruguay",
      role: "Líder de desarrollo front end",
      summary:
        "Lideré la migración gradual de una tienda online de alcance nacional de PHP a Next.js y TypeScript, junto con un constructor de landing pages que permitió a equipos no técnicos lanzar campañas sin desarrolladores.",
      challenge: [
        "La tienda estaba construida en PHP, con algunas secciones en React integradas con Webpack. Funcionaba, pero la estructura hacía que cada funcionalidad nueva llevara más tiempo del necesario.",
        "El negocio no podía dejar de vender mientras cambiaba la plataforma, así que reescribir todo desde cero no era una opción.",
      ],
      approach: [
        {
          title: "Gradual, no de un golpe",
          text: "Incorporamos TypeScript en todo el código y empezamos a mover secciones a Next.js de a una, con la tienda en línea durante todo el proceso.",
        },
        {
          title: "Diseño coherente",
          text: "Cada sección migrada mantuvo una interfaz amigable y alineada con la identidad visual de la tienda, para que los clientes nunca sintieran que cruzaban entre dos sistemas.",
        },
        {
          title: "Performance y SEO en cada iteración",
          text: "Cada entrega fue una oportunidad para mejorar los tiempos de carga y la visibilidad en buscadores, no solo para cambiar la tecnología de fondo.",
        },
        {
          title: "Un constructor de landing pages",
          text: "Un sistema interno que permite a equipos no técnicos crear por su cuenta landing pages para promociones, lanzamientos de productos y campañas de descuentos.",
        },
      ],
      outcome: [
        "Una estructura de proyecto más clara y una plataforma que escala con el negocio.",
        "Muchas menos horas de desarrollo dedicadas a páginas de campaña, porque marketing ya no necesita un desarrollador para publicar una.",
      ],
    },
    "reporting-framework": {
      title: "Framework de reportes",
      context: "Ensayos clínicos · Estados Unidos",
      role: "Desarrollador full stack",
      summary:
        "El primer sistema de reportes a medida de una plataforma de ensayos clínicos: vistas previas en línea y exportación a CSV generadas con scripts de Node.js sin tocar las colecciones centrales, reduciendo los costos operativos por estudio.",
      challenge: [
        "Una plataforma para gestionar ensayos clínicos necesitaba su primer sistema de reportes a medida: había que poder ver un reporte en línea y descargar todos sus datos en un archivo CSV.",
        "La restricción era la arquitectura. Las colecciones centrales de la base de datos (pacientes, estudios, grupos) se compartían con otras aplicaciones críticas, así que no se podían modificar.",
      ],
      approach: [
        {
          title: "Rodear el núcleo, no atravesarlo",
          text: "Diseñamos un sistema que extrae y procesa la información con scripts de Node.js, sin tocar las colecciones compartidas.",
        },
        {
          title: "Reportes generados a demanda",
          text: "Los reportes se construyen en forma dinámica, con vista previa en línea y exportación completa a CSV, sin afectar al resto de la plataforma.",
        },
        {
          title: "Reportes en la web",
          text: "En iteraciones posteriores los pacientes pudieron leer sus reportes directamente en el sitio, en lugar de descargar una app específica para iPhone o desplegar una app distinta por estudio.",
        },
      ],
      outcome: [
        "Menores costos operativos por estudio.",
        "Una experiencia unificada en el sitio de reportes, que simplificó la implementación y mejoró la accesibilidad.",
      ],
    },
  },
};

export const projectSlugs = facts.map((project) => project.slug);

export const getProjects = (locale: Locale): Project[] =>
  facts.map((project) => ({ ...project, ...copy[locale][project.slug] }));

export const getProject = (slug: string, locale: Locale): Project | undefined =>
  getProjects(locale).find((project) => project.slug === slug);
