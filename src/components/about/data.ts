/**
 * Static data for the About Me page including badges, interests, stack, and inspirational quotes.
 */

export interface Badge {
  label: string;
  color: string;
}

export interface Company {
  name: string;
  logo: string;
  period: string;
  current?: boolean;
}

export const badges: Badge[] = [
  { label: "Build with ❤️", color: "red" },
  { label: "Open to Collaboration", color: "blue" },
  { label: "Learning Never Stops", color: "forestgreen" },
  { label: "Made in Uruguay", color: "ffcc00" },
];

export const interests = [
  "Helping turn ideas into real products.",
  "Mentoring, teaching, and learning in a community.",
  "Creating projects with a human-centered, simple, and sustainable approach.",
];

export interface StackCategory {
  title: string;
  items: string[];
  emoji: string;
}

export const stackCategories: StackCategory[] = [
  {
    title: "Frontend",
    emoji: "🎨",
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
    emoji: "⚙️",
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
    title: "Tools & Platforms",
    emoji: "🛠️",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Vercel",
      "Cursor",
      "VS Code",
      "npm",
      "Yarn",
      "pnpm",
      "Webpack",
    ],
  },
  {
    title: "Testing & Quality",
    emoji: "✅",
    items: [
      "Jest",
      "ESLint",
      "Prettier",
      "TypeScript",
    ],
  },
  {
    title: "Methodologies & Practices",
    emoji: "📋",
    items: [
      "Agile",
      "Scrum",
      "Jira",
      "Confluence",
      "Code Review",
      "Clean Code",
    ],
  },
  {
    title: "Performance & Optimization",
    emoji: "🚀",
    items: [
      "SEO",
      "Lazy Loading",
      "Code Splitting",
      "Web Vitals",
      "Performance Optimization",
    ],
  },
];

export const currentlyDoing = [
  "👨‍💻 Working at Streaver.",
  "💡 Exploring new ideas and personal projects.",
  "🧠 Learning and sharing what inspires me.",
  "🤝 Collaborating with other creators to build useful, purposeful things.",
];

export const inspirationalQuote = {
  text: "La vida no se mide por lo que uno tiene, sino por lo que uno da.",
  author: "Julia Navarro",
};

export const aboutDescription = [
  "I'm a software developer passionate about creating, learning, and supporting others in their growth. I believe development goes far beyond code: it's about building with purpose, connecting ideas and people to make a real impact.",
  "Besides coding, I'm a dad. Balancing my work life with raising my daughter teaches me every day about empathy, patience, and creativity.",
  "Fan of Club Nacional de Football, ❤️💙🤍 the biggest club in Uruguay 🇺🇾. Recently, I became a Formula 1 enthusiast, with no technical knowledge… but enjoying every race nonetheless.",
];

export const companies: Company[] = [
  {
    name: "Streaver",
    logo: "/images/companies/streaver.jpeg",
    period: "Aug 2024 - Present",
    current: true,
  },
  {
    name: "La Oferta Irresistible",
    logo: "/images/companies/loi.jpeg",
    period: "Apr 2024 - Aug 2024",
  },
  {
    name: "Medable, Inc",
    logo: "/images/companies/medable.jpeg",
    period: "Jun 2021 - Nov 2023",
  },
  {
    name: "Onetree",
    logo: "/images/companies/onetree.jpeg",
    period: "Nov 2018 - Jun 2021",
  },
  {
    name: "Zureo Software",
    logo: "/images/companies/zureo.jpeg",
    period: "Jul 2016 - Dec 2017",
  },
];

