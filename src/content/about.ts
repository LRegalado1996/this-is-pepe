/**
 * Content for the About page: bio, working principles, stack, life outside
 * work and the closing quote.
 */
import type { Locale } from "@/lib/i18n/config";

export interface StackCategory {
  title: string;
  items: string[];
}

export interface AboutContent {
  bio: string[];
  principles: { title: string; description: string }[];
  stack: StackCategory[];
  hobbies: { id: string; title: string; description: string }[];
  quote: { text: string; author: string; reflection: string };
}

const favoriteBands = ["Mota", "La Vela Puerca", "Trotsky Vengarán", "El Cuarteto de Nos", "Los Piojos"];

const stackItems = {
  frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Styled Components",
    "SASS",
    "Angular",
  ],
  backend: ["Node.js", "NestJS", "PostgreSQL", "MongoDB", "Drizzle ORM", "Mongoose", "REST APIs", "PHP"],
  tools: ["Git", "GitHub", "GitLab", "Vercel", "VS Code", "pnpm", "Webpack"],
};

const quoteText = "La vida no se mide por lo que uno tiene, sino por lo que uno da.";
const quoteAuthor = "Julia Navarro";

const content: Record<Locale, AboutContent> = {
  en: {
    bio: [
      "I give 100% to my team and love achieving goals together. Throughout my career I have worked in very different environments, from relaxed, creative teams to deadline-driven ones, and I adapt quickly to what the context needs. I am comfortable building with sparse requirements or executing against highly detailed specs.",
      "I care deeply about the human side: helping, including, and lifting people up. I keep a positive, collaborative attitude and I never hesitate to roll up my sleeves and do the work.",
      "These days I build AI-driven products at Streaver, and I write about what I learn putting AI agents to work on the routine around the code.",
    ],
    principles: [
      {
        title: "Ideas into products",
        description:
          "I enjoy helping turn an idea into something real that people use, from the first prototype to the version that scales.",
      },
      {
        title: "Learning in community",
        description:
          "Mentoring, teaching and learning with others. Leading a distributed team taught me that unblocking people is the fastest way to ship.",
      },
      {
        title: "Human-centered, simple, sustainable",
        description:
          "Projects built for the people who use and maintain them. Simple enough to understand, solid enough to last.",
      },
    ],
    stack: [
      { title: "Frontend", items: stackItems.frontend },
      { title: "Backend", items: stackItems.backend },
      {
        title: "AI & Agents",
        items: ["Claude Code", "Subagents", "Scheduled routines", "Cursor", "Prompt design"],
      },
      { title: "Tools & Platforms", items: stackItems.tools },
      {
        title: "Quality & Performance",
        items: ["Jest", "ESLint", "Code Review", "Web Vitals", "SEO", "Code Splitting"],
      },
      { title: "Ways of working", items: ["Agile", "Scrum", "Jira", "Confluence", "Clean Code"] },
    ],
    hobbies: [
      {
        id: "family",
        title: "Fatherhood",
        description:
          "Proud dad learning empathy, patience and creativity every day. Most afternoons you'll find me at my daughter's artistic skating classes.",
      },
      {
        id: "football",
        title: "Nacional",
        description:
          "Passionate supporter of Club Nacional de Football. We watch every match, plus Premier League, La Liga and Bundesliga with the family.",
      },
      {
        id: "f1",
        title: "Formula 1",
        description:
          "Hooked since late 2024. Still learning the rules, never missing a race weekend. When I overtake on the road, I'm Max Verstappen.",
      },
      {
        id: "music",
        title: "Uruguayan rock",
        description: "The soundtrack for coding and for life, always with a mate within reach.",
      },
    ],
    quote: {
      text: quoteText,
      author: quoteAuthor,
      reflection:
        "“Life is not measured by what you have, but by what you give.” I deeply believe in this. Code is just the means; the goal is to build something worthwhile together.",
    },
  },
  es: {
    bio: [
      "Doy el 100% por mi equipo y me encanta alcanzar objetivos en conjunto. A lo largo de mi carrera trabajé en entornos muy distintos, desde equipos relajados y creativos hasta otros marcados por las fechas de entrega, y me adapto rápido a lo que el contexto necesita. Me siento cómodo construyendo con requerimientos escasos o ejecutando contra especificaciones muy detalladas.",
      "Me importa mucho el lado humano: ayudar, incluir y hacer crecer a las personas. Mantengo una actitud positiva y colaborativa, y nunca dudo en arremangarme y hacer el trabajo.",
      "Hoy construyo productos con IA en Streaver, y escribo sobre lo que aprendo poniendo agentes de IA a trabajar en la rutina que rodea al código.",
    ],
    principles: [
      {
        title: "De la idea al producto",
        description:
          "Disfruto ayudar a convertir una idea en algo real que la gente usa, desde el primer prototipo hasta la versión que escala.",
      },
      {
        title: "Aprender en comunidad",
        description:
          "Mentorear, enseñar y aprender con otros. Liderar un equipo distribuido me enseñó que destrabar a las personas es la forma más rápida de entregar.",
      },
      {
        title: "Humano, simple y sostenible",
        description:
          "Proyectos pensados para quienes los usan y los mantienen. Tan simples como para entenderlos, tan sólidos como para durar.",
      },
    ],
    stack: [
      { title: "Frontend", items: stackItems.frontend },
      { title: "Backend", items: stackItems.backend },
      {
        title: "IA y agentes",
        items: ["Claude Code", "Subagentes", "Rutinas programadas", "Cursor", "Diseño de prompts"],
      },
      { title: "Herramientas y plataformas", items: stackItems.tools },
      {
        title: "Calidad y performance",
        items: ["Jest", "ESLint", "Code Review", "Web Vitals", "SEO", "Code Splitting"],
      },
      { title: "Formas de trabajo", items: ["Agile", "Scrum", "Jira", "Confluence", "Clean Code"] },
    ],
    hobbies: [
      {
        id: "family",
        title: "Paternidad",
        description:
          "Papá orgulloso, aprendiendo empatía, paciencia y creatividad todos los días. Casi todas las tardes me encontrás en las clases de patín artístico de mi hija.",
      },
      {
        id: "football",
        title: "Nacional",
        description:
          "Hincha apasionado del Club Nacional de Football. Miramos todos los partidos, y en familia también la Premier League, La Liga y la Bundesliga.",
      },
      {
        id: "f1",
        title: "Fórmula 1",
        description:
          "Enganchado desde fines de 2024. Todavía aprendiendo las reglas, pero sin perderme un fin de semana de carrera. Cuando adelanto en la ruta, soy Max Verstappen.",
      },
      {
        id: "music",
        title: "Rock uruguayo",
        description: "La banda sonora para programar y para la vida, siempre con el mate a mano.",
      },
    ],
    quote: {
      text: quoteText,
      author: quoteAuthor,
      reflection:
        "Creo profundamente en esto. El código es solo el medio; el objetivo es construir juntos algo que valga la pena.",
    },
  },
};

export const getAboutContent = (locale: Locale): AboutContent => content[locale];

export { favoriteBands };
