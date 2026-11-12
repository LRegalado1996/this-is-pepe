/**
 * Job history: the single source of truth for work experience. Facts (dates,
 * companies, skills) are shared; the narrative is written per locale. The home
 * "Career Seasons" grid and the Experience timeline both read from here.
 */
import type { Locale, RouteKey } from "@/lib/i18n/config";

export type JobBlock =
  | { type: "paragraph"; text: string; link?: { label: string; route: RouteKey } }
  | { type: "list"; intro?: string; items: { title: string; text: string }[] };

interface JobFacts {
  id: string;
  company: {
    name: string;
    /** Short name for compact layouts; falls back to `name`. */
    shortName?: string;
    url: string;
  };
  startDate: Date;
  endDate: Date | null;
  /** Three or four headline skills for compact layouts. */
  featuredSkills: string[];
  skills: string[];
}

interface JobCopy {
  role: string;
  /** One-line summary shown while the full description is collapsed. */
  summary: string;
  body: JobBlock[];
}

export type Job = JobFacts & JobCopy;

const facts: JobFacts[] = [
  {
    id: "streaver",
    company: { name: "Streaver", url: "https://streaver.com/" },
    startDate: new Date("2025-08-01"),
    endDate: null,
    featuredSkills: ["Next.js", "PostgreSQL", "Drizzle", "AI agents"],
    skills: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Vercel",
      "PostgreSQL",
      "React Query",
      "Drizzle",
      "Claude Code",
      "GitHub",
      "Cursor",
      "pnpm",
      "Jira",
    ],
  },
  {
    id: "loi",
    company: { name: "La Oferta Irresistible", url: "https://loi.com.uy/" },
    startDate: new Date("2024-04-01"),
    endDate: new Date("2025-05-13"),
    featuredSkills: ["React", "Next.js", "TypeScript", "SEO"],
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Sass",
      "Styled-components",
      "PHP",
      "npm",
      "GitHub",
      "Jira",
    ],
  },
  {
    id: "medable",
    company: { name: "Medable, Inc", shortName: "Medable", url: "https://www.medable.com/" },
    startDate: new Date("2021-06-01"),
    endDate: new Date("2023-11-10"),
    featuredSkills: ["Node.js", "React", "MongoDB"],
    skills: [
      "React",
      "Node",
      "MongoDB",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Jest",
      "Yarn",
      "GitLab",
      "Jira",
      "Confluence",
      "Scrum",
    ],
  },
  {
    id: "onetree",
    company: { name: "Onetree", url: "https://www.onetree.com/" },
    startDate: new Date("2018-11-01"),
    endDate: new Date("2021-06-01"),
    featuredSkills: ["React", "Node.js", "MongoDB"],
    skills: [
      "React",
      "Node",
      "MongoDB",
      "JavaScript",
      "HTML",
      "CSS",
      "GitLab",
      "Jira",
      "npm",
      "Scrum",
    ],
  },
  {
    id: "guataco",
    company: { name: "Guataco - Influlocal", shortName: "Guataco", url: "https://guataco.com/" },
    startDate: new Date("2018-06-01"),
    endDate: new Date("2018-11-01"),
    featuredSkills: ["Angular", "Sass", "PHP"],
    skills: ["Angular", "JavaScript", "Sass", "CSS", "HTML", "PHP"],
  },
  {
    id: "zureo",
    company: { name: "Zureo Software", shortName: "Zureo", url: "https://web.zureo.com/" },
    startDate: new Date("2016-07-01"),
    endDate: new Date("2017-12-01"),
    featuredSkills: ["JavaScript", "jQuery", "CSS"],
    skills: ["JavaScript", "jQuery", "CSS", "LESS", "HTML"],
  },
];

const copy: Record<Locale, Record<string, JobCopy>> = {
  en: {
    streaver: {
      role: "Full Stack Developer · AI-driven products",
      summary:
        "Building web applications with Next.js and PostgreSQL at a boutique agency focused on AI-driven products, and writing about working with AI agents.",
      body: [
        {
          type: "paragraph",
          text: "I joined Streaver, a boutique agency focused on AI-driven solutions, to turn bold ideas into innovative products. My role involves building web applications with Next.js, PostgreSQL, and Drizzle ORM, all deployed on Vercel.",
        },
        {
          type: "paragraph",
          text: "Currently, I'm working on a project for a U.S.-based organization that connects tech companies, fosters collaboration, and strengthens the IT community.",
        },
        {
          type: "paragraph",
          text: "I focus on creating scalable, efficient solutions that optimize internal processes and enhance the user experience, contributing to a platform that encourages collaboration and growth within the tech ecosystem.",
        },
        {
          type: "paragraph",
          text: "I also write for Streaver's blog about how I work with AI agents: scheduled routines that prepare my day and a crew of Claude Code subagents that take over repetitive work.",
          link: { label: "Read the articles", route: "writing" },
        },
      ],
    },
    loi: {
      role: "Lead Frontend · e-commerce replatform",
      summary:
        "Led the front end of a nationwide e-commerce and its gradual migration from PHP to Next.js and TypeScript.",
      body: [
        {
          type: "paragraph",
          text: "La Oferta Irresistible is a Uruguayan e-commerce company. I worked as the company's main front-end developer, where I led the technological change of its web platform. The foundation of the site was built with PHP, with some sections developed in React and integrated using Webpack. As part of the technological evolution, we began using TypeScript more frequently and initiated a gradual migration to Next.js, which significantly improved the project's structure and scalability.",
        },
        {
          type: "paragraph",
          text: "We focused on achieving a user-friendly design consistent with the site's visual identity, while optimizing performance and SEO with each iteration.",
        },
        {
          type: "list",
          intro: "Two notable projects I was involved in:",
          items: [
            {
              title: "Landing page creation system",
              text: "An internal system designed to let non-technical users generate landing pages on their own. It was key to optimizing resources: it considerably reduced the hours the development team spent on pages for promotions, product launches, and discount campaigns.",
            },
            {
              title: "LOiPlay",
              text: "A technical and creative challenge: a browsing experience inspired by TikTok and YouTube Shorts that showcases products through short, dynamic videos. The primary objective was fast video playback with audio across all browsers and devices. Besides adding products to the cart, people can mark favorites, like and share videos, with a focus on engagement and conversion.",
            },
          ],
        },
      ],
    },
    medable: {
      role: "Lead Backend → Frontend · clinical trials",
      summary:
        "Three stages on a US clinical-trials platform: reporting, leading a distributed backend team of five, then front end.",
      body: [
        {
          type: "paragraph",
          text: "Medable is a technology company focused on the healthcare sector in the United States. I joined the team during the pandemic, a period of strong growth for the company. From the beginning, I worked remotely, always aligned with Medable's mission: to accelerate the completion of clinical trials. We worked with Node, React, and MongoDB.",
        },
        {
          type: "paragraph",
          text: "During this time, I developed a remarkable ability to adapt to different challenges. I was part of the Customer Success team, where we worked on multiple short-term initiatives with rapid delivery, focusing on customers' immediate needs.",
        },
        {
          type: "list",
          intro: "My experience at Medable can be divided into three stages:",
          items: [
            {
              title: "Transition from Onetree",
              text: "We continued the work started at Onetree, improving the Reporting Framework and developing new features within the website itself. Thanks to these improvements, we reduced the operating costs of the studies: patients could access their reports directly from the web, without downloading a specific iPhone application or deploying a unique app for each study. The entire experience was unified within the reporting website, which simplified implementation and improved accessibility.",
            },
            {
              title: "Lead Backend Developer",
              text: "I led a team of approximately five people distributed around the world. My role involved helping my colleagues resolve technical obstacles, estimating and assigning tasks, and actively participating in planning, feasibility, and technical follow-up meetings. When it was my turn to program, I primarily worked on troubleshooting legacy systems and integrating third-party APIs.",
            },
            {
              title: "Adaptation and Frontend Developer",
              text: "In the final stage, which coincided with a period of restructuring at Medable, I transitioned into a Frontend Developer role. We worked with React and adopted a microfrontend-like architecture. We developed and improved a survey creation system, focusing on ease of use and reducing the technical knowledge needed to create surveys. We also worked with image manipulation and SVG files, creating rich, interactive visual experiences directly in the browser.",
            },
          ],
        },
      ],
    },
    onetree: {
      role: "Full Stack Developer · Reporting Framework",
      summary:
        "Full stack development in a large Scrum team, building the first custom reporting system of a clinical-trials platform.",
      body: [
        {
          type: "paragraph",
          text: "Onetree is a software company based in Uruguay. I worked there as a full-stack developer, using technologies such as React, Node.js, and MongoDB.",
        },
        {
          type: "paragraph",
          text: "From the beginning, I joined the Medable team through the staff augmentation model. It was a large and diverse team with well-defined roles and responsibilities. We organized our work using Scrum, and our primary task was to adapt Medable's core product to meet the specific needs of each client.",
        },
        {
          type: "paragraph",
          text: "I excelled in the project to create the Reporting Framework, Medable's first custom reporting system. It let users view an online preview of a report and download a CSV file with all the data. The biggest challenge was working within the constraints of the existing architecture: we couldn't modify the core database collections, as they are used by other critical applications in the system (patient data, studies, groups). To solve this, we designed a system that extracted and processed information using Node.js scripts, generating reports dynamically without affecting the rest of the platform.",
        },
      ],
    },
    guataco: {
      role: "Developer · first startup",
      summary:
        "First full-time developer role: from an investor prototype to a full platform in Angular.",
      body: [
        {
          type: "paragraph",
          text: "Guataco was an early-stage startup just starting to establish itself in Uruguay. It was my first full-time experience as a developer.",
        },
        {
          type: "paragraph",
          text: "The platform (Influlocal) was a kind of social network where users could recommend and review businesses in their area. It was initially built in PHP; I didn't make significant changes to that foundation, but I did have to dig into the existing code to understand the previous work.",
        },
        {
          type: "paragraph",
          text: "My involvement was divided into two stages: first, we developed a functional prototype in HTML, CSS, and JavaScript to present to potential investors. Then, we began developing the entire platform using Angular and Sass, which gave me experience with more modern technologies and more structured development processes.",
        },
      ],
    },
    zureo: {
      role: "Support → Web · first steps",
      summary:
        "First job in IT: technical support for an ERP, and first steps in web development customizing online stores.",
      body: [
        {
          type: "paragraph",
          text: "Zureo is a Uruguayan company dedicated to the development of ERP software and electronic invoicing solutions. It was my first formal experience in the IT sector.",
        },
        {
          type: "paragraph",
          text: "My primary role involved installing invoicing systems (software and database), providing first-level technical support to resolve issues before escalating them to the development team, and offering internal support, including PC assembly, software installation, and infrastructure maintenance.",
        },
        {
          type: "paragraph",
          text: "It was also at Zureo that I took my first steps in web development. The company offered a customizable e-commerce platform, and I was responsible for adapting the design of each online store to each client's visual identity, working with HTML, CSS, and JavaScript.",
        },
        {
          type: "paragraph",
          text: "I combined this work with my support duties, which allowed me to develop versatility from the beginning of my career.",
        },
      ],
    },
  },
  es: {
    streaver: {
      role: "Full Stack Developer · productos con IA",
      summary:
        "Construyo aplicaciones web con Next.js y PostgreSQL en una agencia boutique enfocada en productos con IA, y escribo sobre cómo trabajar con agentes de IA.",
      body: [
        {
          type: "paragraph",
          text: "Me sumé a Streaver, una agencia boutique enfocada en soluciones con IA, para convertir ideas ambiciosas en productos innovadores. Mi rol consiste en construir aplicaciones web con Next.js, PostgreSQL y Drizzle ORM, desplegadas en Vercel.",
        },
        {
          type: "paragraph",
          text: "Actualmente trabajo en un proyecto para una organización de Estados Unidos que conecta empresas de tecnología, fomenta la colaboración y fortalece a la comunidad de TI.",
        },
        {
          type: "paragraph",
          text: "Me enfoco en crear soluciones escalables y eficientes que optimizan procesos internos y mejoran la experiencia de uso, aportando a una plataforma que impulsa la colaboración y el crecimiento del ecosistema tecnológico.",
        },
        {
          type: "paragraph",
          text: "También escribo en el blog de Streaver sobre cómo trabajo con agentes de IA: rutinas programadas que preparan mi día y un equipo de subagentes de Claude Code que se encarga del trabajo repetitivo.",
          link: { label: "Leer los artículos", route: "writing" },
        },
      ],
    },
    loi: {
      role: "Líder Frontend · replataforma de e-commerce",
      summary:
        "Lideré el front end de un e-commerce de alcance nacional y su migración gradual de PHP a Next.js y TypeScript.",
      body: [
        {
          type: "paragraph",
          text: "La Oferta Irresistible es una empresa uruguaya de e-commerce. Trabajé como el principal desarrollador front end de la empresa y lideré el cambio tecnológico de su plataforma web. La base del sitio estaba construida en PHP, con algunas secciones desarrolladas en React e integradas con Webpack. Como parte de esa evolución empezamos a usar TypeScript con más frecuencia e iniciamos una migración gradual a Next.js, que mejoró notablemente la estructura y la escalabilidad del proyecto.",
        },
        {
          type: "paragraph",
          text: "Nos enfocamos en lograr un diseño amigable y coherente con la identidad visual del sitio, optimizando la performance y el SEO en cada iteración.",
        },
        {
          type: "list",
          intro: "Dos proyectos destacados en los que participé:",
          items: [
            {
              title: "Sistema de creación de landing pages",
              text: "Un sistema interno pensado para que personas sin perfil técnico pudieran generar landing pages por su cuenta. Fue clave para optimizar recursos: redujo considerablemente las horas que el equipo de desarrollo dedicaba a páginas de promociones, lanzamientos de productos y campañas de descuentos.",
            },
            {
              title: "LOiPlay",
              text: "Un desafío técnico y creativo: una experiencia de navegación inspirada en TikTok y YouTube Shorts que muestra productos a través de videos cortos y dinámicos. El objetivo principal fue lograr una reproducción rápida, con audio, en todos los navegadores y dispositivos. Además de agregar productos al carrito, se puede marcar favoritos, dar like y compartir videos, con foco en el engagement y la conversión.",
            },
          ],
        },
      ],
    },
    medable: {
      role: "Líder Backend → Frontend · ensayos clínicos",
      summary:
        "Tres etapas en una plataforma estadounidense de ensayos clínicos: reportes, liderazgo de un equipo backend distribuido de cinco personas y, luego, front end.",
      body: [
        {
          type: "paragraph",
          text: "Medable es una empresa de tecnología enfocada en el sector de la salud en Estados Unidos. Me sumé al equipo durante la pandemia, un período de fuerte crecimiento para la empresa. Desde el inicio trabajé en forma remota, siempre alineado con la misión de Medable: acelerar la realización de ensayos clínicos. Trabajamos con Node, React y MongoDB.",
        },
        {
          type: "paragraph",
          text: "En este tiempo desarrollé una gran capacidad de adaptación a distintos desafíos. Formé parte del equipo de Customer Success, donde trabajamos en múltiples iniciativas de corto plazo y entrega rápida, enfocadas en las necesidades inmediatas de los clientes.",
        },
        {
          type: "list",
          intro: "Mi experiencia en Medable se puede dividir en tres etapas:",
          items: [
            {
              title: "Transición desde Onetree",
              text: "Continuamos el trabajo iniciado en Onetree, mejorando el Reporting Framework y desarrollando nuevas funcionalidades dentro del propio sitio. Gracias a esas mejoras redujimos los costos operativos de los estudios: los pacientes podían acceder a sus reportes directamente desde la web, sin descargar una aplicación específica para iPhone ni desplegar una app distinta para cada estudio. Toda la experiencia quedó unificada en el sitio de reportes, lo que simplificó la implementación y mejoró la accesibilidad.",
            },
            {
              title: "Líder de desarrollo backend",
              text: "Lideré un equipo de unas cinco personas distribuidas por el mundo. Mi rol incluía ayudar a mis compañeros a resolver obstáculos técnicos, estimar y asignar tareas, y participar activamente en reuniones de planificación, factibilidad y seguimiento técnico. Cuando me tocaba programar, trabajaba sobre todo en resolver problemas de sistemas legacy y en integrar APIs de terceros.",
            },
            {
              title: "Adaptación y rol de frontend",
              text: "En la etapa final, que coincidió con un período de reestructura en Medable, pasé a un rol de desarrollador frontend. Trabajamos con React y adoptamos una arquitectura similar a microfrontends. Desarrollamos y mejoramos un sistema de creación de encuestas, con foco en la facilidad de uso y en reducir el conocimiento técnico necesario para crearlas. También trabajamos con manipulación de imágenes y archivos SVG, creando experiencias visuales ricas e interactivas directamente en el navegador.",
            },
          ],
        },
      ],
    },
    onetree: {
      role: "Full Stack Developer · Reporting Framework",
      summary:
        "Desarrollo full stack en un equipo Scrum grande, construyendo el primer sistema de reportes a medida de una plataforma de ensayos clínicos.",
      body: [
        {
          type: "paragraph",
          text: "Onetree es una empresa de software con base en Uruguay. Trabajé allí como desarrollador full stack, con tecnologías como React, Node.js y MongoDB.",
        },
        {
          type: "paragraph",
          text: "Desde el comienzo me integré al equipo de Medable bajo el modelo de staff augmentation. Era un equipo grande y diverso, con roles y responsabilidades bien definidos. Organizábamos el trabajo con Scrum, y nuestra tarea principal era adaptar el producto central de Medable a las necesidades específicas de cada cliente.",
        },
        {
          type: "paragraph",
          text: "Me destaqué en el proyecto de creación del Reporting Framework, el primer sistema de reportes a medida de Medable. Permitía ver una vista previa del reporte en línea y descargar un archivo CSV con todos los datos. El mayor desafío fue trabajar dentro de las restricciones de la arquitectura existente: no podíamos modificar las colecciones centrales de la base de datos, porque las usaban otras aplicaciones críticas del sistema (datos de pacientes, estudios, grupos). Para resolverlo diseñamos un sistema que extraía y procesaba la información con scripts de Node.js, generando reportes en forma dinámica sin afectar al resto de la plataforma.",
        },
      ],
    },
    guataco: {
      role: "Desarrollador · primera startup",
      summary:
        "Mi primer rol full time como desarrollador: de un prototipo para inversores a una plataforma completa en Angular.",
      body: [
        {
          type: "paragraph",
          text: "Guataco era una startup en etapa temprana que empezaba a establecerse en Uruguay. Fue mi primera experiencia full time como desarrollador.",
        },
        {
          type: "paragraph",
          text: "La plataforma (Influlocal) era una especie de red social donde los usuarios podían recomendar y reseñar comercios de su zona. Estaba construida originalmente en PHP; no hice cambios importantes sobre esa base, pero sí tuve que meterme en el código existente para entender el trabajo previo.",
        },
        {
          type: "paragraph",
          text: "Mi participación se dividió en dos etapas: primero desarrollamos un prototipo funcional en HTML, CSS y JavaScript para presentar a potenciales inversores. Después empezamos a desarrollar toda la plataforma con Angular y Sass, lo que me dio experiencia con tecnologías más modernas y procesos de desarrollo más estructurados.",
        },
      ],
    },
    zureo: {
      role: "Soporte → Web · primeros pasos",
      summary:
        "Mi primer trabajo en TI: soporte técnico de un ERP y primeros pasos en desarrollo web personalizando tiendas online.",
      body: [
        {
          type: "paragraph",
          text: "Zureo es una empresa uruguaya dedicada al desarrollo de software ERP y soluciones de facturación electrónica. Fue mi primera experiencia formal en el sector de TI.",
        },
        {
          type: "paragraph",
          text: "Mi rol principal consistía en instalar sistemas de facturación (software y base de datos), dar soporte técnico de primer nivel para resolver problemas antes de escalarlos al equipo de desarrollo, y brindar soporte interno: armado de PCs, instalación de software y mantenimiento de infraestructura.",
        },
        {
          type: "paragraph",
          text: "También fue en Zureo donde di mis primeros pasos en desarrollo web. La empresa ofrecía una plataforma de e-commerce personalizable, y yo me encargaba de adaptar el diseño de cada tienda online a la identidad visual de cada cliente, trabajando con HTML, CSS y JavaScript.",
        },
        {
          type: "paragraph",
          text: "Combinaba ese trabajo con mis tareas de soporte, lo que me permitió desarrollar versatilidad desde el inicio de mi carrera.",
        },
      ],
    },
  },
};

export const getJobs = (locale: Locale): Job[] =>
  facts.map((job) => ({ ...job, ...copy[locale][job.id] }));

export const jobCount = facts.length;

export const careerStartYear = Math.min(...facts.map((job) => job.startDate.getUTCFullYear()));

/** Whole years in the field, counted from the first job. */
export const yearsInTheField = () => new Date().getFullYear() - careerStartYear;

/** Compact year label for a job: "2025 —", "2021 – 23" or "2018". */
export const formatSeasonYears = (job: Pick<Job, "startDate" | "endDate">): string => {
  const start = job.startDate.getUTCFullYear();
  if (!job.endDate) return `${start} —`;

  const end = job.endDate.getUTCFullYear();
  return end === start ? `${start}` : `${start} – ${String(end).slice(2)}`;
};
