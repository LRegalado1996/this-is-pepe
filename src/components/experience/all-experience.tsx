import { NodeStructure } from "./node-structure";
import { JobStructure } from "./types";

export const jobData: JobStructure[] = [
  {
    company: "LOi - La Oferta Irresistible",
    startDates: new Date("2024-04-01"),
    endDates: new Date("2025-05-01"),
    experiences: [
      "Developed front-end architecture using React and TypeScript.",
      "Led migration to a modern codebase using Next.js.",
      "Focused on SEO optimization and personalized client experiences.",
      "Position: Web Developer · Full-time · Remote · Montevideo, Uruguay",
      "Skills: React.js · Next.js",
    ],
  },
  {
    company: "Medable, Inc",
    startDates: new Date("2021-06-01"),
    endDates: new Date("2023-11-01"),
    experiences: [
      "Designed and implemented backend integrations and enhancements.",
      "Created SOPs and integration tools for internal and client use.",
      "Collaborated with QA and stakeholders on feature planning and bug fixing.",
      "Mentored team members and provided API integration support.",
      "Position: Back End Developer · Full-time · Remote · USA",
      "Skills: React.js · Node.js · Jest · MongoDB",
    ],
  },
  {
    company: "Onetree",
    startDates: new Date("2018-11-01"),
    endDates: new Date("2021-06-01"),
    experiences: [
      "Developed and maintained websites using React.",
      "Worked directly with a US-based team using Node.js and MongoDB.",
      "Adapted to full-remote work due to the pandemic.",
      "Position: Frontend Developer · Full-time · Hybrid · Montevideo, Uruguay",
      "Skills: React.js · Node.js · JavaScript · MongoDB · SASS",
    ],
  },
  {
    company: "Guataco",
    startDates: new Date("2018-06-01"),
    endDates: new Date("2018-11-01"),
    experiences: [
      "Focused on front-end development for a social network project.",
      "Built engaging UIs using AngularJS, HTML, CSS, and JavaScript.",
      "Position: Junior Web Developer · Full-time · Hybrid · Montevideo, Uruguay",
      "Skills: PHP · JavaScript · CSS · AngularJS · HTML",
    ],
  },
  {
    company: "Zureo Software",
    startDates: new Date("2016-07-01"),
    endDates: new Date("2017-12-01"),
    experiences: [
      "Provided client technical support for software installations and databases.",
      "Handled PC assembly, software installation, and infrastructure repair.",
      "Contributed to web development using HTML, CSS, Less, JavaScript, and PHP.",
      "Position: Application Support Technician · Full-time · On-site · Montevideo, Uruguay",
      "Skills: CSS · LESS · PHP · JavaScript · HTML5",
    ],
  },
];

export const AllExperience = () => {
  return <NodeStructure jobsStructure={jobData} />;
};
