/**
 * Static content for the About page: bio, working principles, stack,
 * life outside work and the closing quote.
 */

export const aboutDescription = [
  "I give 100% to my team and love achieving goals together. Throughout my career I have worked in very different environments, from relaxed, creative teams to deadline-driven ones, and I adapt quickly to what the context needs. I am comfortable building with sparse requirements or executing against highly detailed specs.",
  "I care deeply about the human side: helping, including, and lifting people up. I keep a positive, collaborative attitude and I never hesitate to roll up my sleeves and do the work.",
  "These days I build AI-driven products at Streaver, and I write about what I learn putting AI agents to work on the routine around the code.",
];

export interface Principle {
  title: string;
  description: string;
}

export const principles: Principle[] = [
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
];

export interface StackCategory {
  title: string;
  items: string[];
}

export const stackCategories: StackCategory[] = [
  {
    title: "Frontend",
    items: [
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
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "Drizzle ORM",
      "Mongoose",
      "REST APIs",
      "PHP",
    ],
  },
  {
    title: "AI & Agents",
    items: ["Claude Code", "Subagents", "Scheduled routines", "Cursor", "Prompt design"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "GitLab", "Vercel", "VS Code", "pnpm", "Webpack"],
  },
  {
    title: "Quality & Performance",
    items: ["Jest", "ESLint", "Code Review", "Web Vitals", "SEO", "Code Splitting"],
  },
  {
    title: "Ways of working",
    items: ["Agile", "Scrum", "Jira", "Confluence", "Clean Code"],
  },
];

export const inspirationalQuote = {
  text: "La vida no se mide por lo que uno tiene, sino por lo que uno da.",
  author: "Julia Navarro",
};

export interface Hobby {
  id: string;
  title: string;
  description: string;
}

export const hobbies: Hobby[] = [
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
];

export const favoriteBands = [
  "Mota",
  "La Vela Puerca",
  "Trotsky Vengarán",
  "El Cuarteto de Nos",
  "Los Piojos",
];
