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
  "I give 100% to my team and love achieving goals together. Throughout my career I have worked in very different environments—from relaxed, creative teams to deadline‑driven ones—and I adapt quickly to what the context needs. I am comfortable building with sparse requirements or executing against highly detailed specs. I care deeply about the human side: helping, including, and lifting people up. I keep a positive, collaborative attitude and I never hesitate to roll up my sleeves and do the work.",
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

export const careerStartYear = 2016;

export interface Hobby {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export const hobbies: Hobby[] = [
  {
    id: "football",
    title: "Football Lover ⚽",
    icon: "trophy",
    description: "Passionate supporter of Club Nacional de Football, the biggest club in Uruguay 🇺🇾. Love watching our team's matches, plus following Premier League, La Liga, and Bundesliga games with my family.",
  },
  {
    id: "f1",
    title: "Formula 1 🏎️",
    icon: "flag",
    description: "Started watching F1 in late 2024. Don't understand much yet, but we enjoy it every race weekend, especially Saturday and Sunday mornings. Fun fact: when overtaking cars on the road, I call myself Max Verstappen!",
  },
  {
    id: "family",
    title: "Fatherhood 👨‍👧",
    icon: "heart",
    description: "Proud dad learning empathy, patience, and creativity every day. My weekly hobby has become accompanying my daughter to her artistic skating classes, which happen almost every afternoon.",
  },
  {
    id: "music",
    title: "Favorite Bands 🎸",
    icon: "music",
    description: "My soundtrack for coding and life",
  },
];

export const favoriteBands = [
  "Mota",
  "La Vela Puerca",
  "Trotsky Vengarán",
  "El Cuarteto de Nos",
  "Los Piojos",
];

export interface FeaturedProject {
  id: string;
  title: string;
  company: string;
  description: string;
  highlights: string[];
  link?: string;
  isExternal?: boolean;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "loiplay",
    title: "LOiPlay",
    company: "La Oferta Irresistible",
    description: "A TikTok-inspired browsing experience for e-commerce, showcasing products through short, dynamic videos.",
    highlights: [
      "Fast video playback with audio support across all browsers",
      "Add to cart, favorites, likes, and share features",
      "Focus on user engagement and conversion",
    ],
    link: "https://loi.com.uy/loiplay",
    isExternal: true,
  },
  {
    id: "reporting-framework",
    title: "Reporting Framework",
    company: "Medable, Inc (via Onetree)",
    description: "Medable's first custom reporting system for clinical trials, allowing users to view reports online and download data.",
    highlights: [
      "Extracted data without modifying core database collections",
      "Reduced operating costs for clinical studies",
      "Dynamic report generation using Node.js scripts",
    ],
  },
];

