/**
 * Builders for /llms.txt and /llms-full.txt (llmstxt.org): a Markdown version
 * of the site for AI assistants, generated from the same content as the pages
 * so it can never drift from them.
 */
import { getAboutContent } from "@/content/about";
import { formatArticleDate, getArticles } from "@/content/articles";
import { careerStartYear, getJobs, yearsInTheField, type JobBlock } from "@/content/jobs";
import { getProjects } from "@/content/projects";
import { getDictionary } from "@/content/site";
import { getCommunityItems, getTalks } from "@/content/talks";
import { projectPath, routePath, routes, type Locale, type RouteKey } from "@/lib/i18n/config";
import { formatDateRange, formatMonthYear } from "@/lib/i18n/format-date-range";
import { absoluteUrl, author, socialProfiles } from "./config";

type LlmsFile = "index" | "full";

const llmsPaths: Record<Locale, Record<LlmsFile, string>> = {
  en: { index: "/llms.txt", full: "/llms-full.txt" },
  es: { index: "/es/llms.txt", full: "/es/llms-full.txt" },
};

const copy = {
  en: {
    role: "Role",
    roleAt: (role: string, employer: string) => `${role} at ${employer}`,
    location: "Location",
    experience: "Experience",
    experienceValue: (years: number, since: number) => `${years} years building software, since ${since}`,
    languages: "Languages",
    languagesValue: "English and Spanish",
    nickname: "Also known as",
    website: "Website",
    pages: "Pages",
    caseStudies: "Case studies",
    writing: "Writing",
    writingNote: (publisher: string, date: string) => `Published on ${publisher}, ${date}`,
    optional: "Optional",
    fullText: "Full site content",
    fullTextNote: "every page of this site in a single Markdown file",
    index: "Short index",
    otherLanguage: "Versión en español",
    otherLanguageNote: "this same file in Spanish",
    skills: "Skills",
    topics: "Topics",
    context: "Context",
    offStack: "Outside work",
    contactNote: "Open to conversations about projects, talks and collaborations, in English or Spanish.",
    callLink: "Contact page with a message form and a 30-minute call calendar",
  },
  es: {
    role: "Rol",
    roleAt: (role: string, employer: string) => `${role} en ${employer}`,
    location: "Ubicación",
    experience: "Experiencia",
    experienceValue: (years: number, since: number) => `${years} años construyendo software, desde ${since}`,
    languages: "Idiomas",
    languagesValue: "español e inglés",
    nickname: "También conocido como",
    website: "Sitio web",
    pages: "Páginas",
    caseStudies: "Casos de estudio",
    writing: "Escritos",
    writingNote: (publisher: string, date: string) => `Publicado en ${publisher}, ${date} (en inglés)`,
    optional: "Optional",
    fullText: "Contenido completo del sitio",
    fullTextNote: "todas las páginas de este sitio en un único archivo Markdown",
    index: "Índice breve",
    otherLanguage: "English version",
    otherLanguageNote: "this same file in English",
    skills: "Tecnologías",
    topics: "Temas",
    context: "Contexto",
    offStack: "Fuera del trabajo",
    contactNote: "Abierto a conversar sobre proyectos, charlas y colaboraciones, en español o inglés.",
    callLink: "Página de contacto con formulario y calendario para una llamada de 30 minutos",
  },
} as const;

const otherLocale = (locale: Locale): Locale => (locale === "en" ? "es" : "en");

const link = (label: string, path: string, note?: string) =>
  `- [${label}](${absoluteUrl(path)})${note ? `: ${note}` : ""}`;

const section = (title: string, lines: string[], level = 2) =>
  [`${"#".repeat(level)} ${title}`, "", ...lines].join("\n");

/** H1, summary and the key facts: the opening both files share. */
const header = (locale: Locale): string => {
  const dictionary = getDictionary(locale);
  const text = copy[locale];

  return [
    `# ${author.name}`,
    "",
    `> ${dictionary.tagline}`,
    "",
    `- ${text.role}: ${text.roleAt(dictionary.role, author.employer.name)}`,
    `- ${text.location}: ${dictionary.location}`,
    `- ${text.experience}: ${text.experienceValue(yearsInTheField(), careerStartYear)}`,
    `- ${text.languages}: ${text.languagesValue}`,
    `- ${text.nickname}: Pepe`,
    `- ${text.website}: ${absoluteUrl(routePath("home", locale))}`,
    `- LinkedIn: ${socialProfiles.linkedin}`,
    `- GitHub: ${socialProfiles.github}`,
    `- Email: ${author.email}`,
  ].join("\n");
};

const optionalSection = (locale: Locale, file: LlmsFile): string => {
  const text = copy[locale];
  const counterpart: LlmsFile = file === "index" ? "full" : "index";

  return section(text.optional, [
    link(
      file === "index" ? text.fullText : text.index,
      llmsPaths[locale][counterpart],
      file === "index" ? text.fullTextNote : undefined
    ),
    link(text.otherLanguage, llmsPaths[otherLocale(locale)][file], text.otherLanguageNote),
  ]);
};

/** /llms.txt: who Lucas is and where each topic lives. */
export const buildLlmsIndex = (locale: Locale): string => {
  const dictionary = getDictionary(locale);
  const text = copy[locale];

  const pages = (Object.keys(routes) as RouteKey[]).map((route) =>
    link(dictionary.nav.labels[route], routePath(route, locale), dictionary.meta[route].description)
  );

  const caseStudies = getProjects(locale).map((project) =>
    link(project.title, projectPath(project.slug, locale), project.summary)
  );

  const articles = getArticles(locale).map(
    (article) =>
      `- [${article.title}](${article.url}): ${article.summary} ${text.writingNote(
        article.publisher,
        formatArticleDate(article.publishedAt, locale)
      )}.`
  );

  return [
    header(locale),
    section(text.pages, pages),
    section(text.caseStudies, caseStudies),
    section(text.writing, articles),
    optionalSection(locale, "index"),
  ].join("\n\n");
};

const jobBlock = (block: JobBlock, locale: Locale): string => {
  if (block.type === "paragraph") {
    return block.link
      ? `${block.text} [${block.link.label}](${absoluteUrl(routePath(block.link.route, locale))}).`
      : block.text;
  }

  const items = block.items.map((item) => `- **${item.title}**: ${item.text}`).join("\n");
  return block.intro ? `${block.intro}\n\n${items}` : items;
};

/** /llms-full.txt: the content of every page as one Markdown document. */
export const buildLlmsFull = (locale: Locale): string => {
  const dictionary = getDictionary(locale);
  const text = copy[locale];
  const about = getAboutContent(locale);
  const { nav, work } = dictionary;

  const aboutSection = section(nav.labels.about, [
    ...about.bio.flatMap((paragraph) => [paragraph, ""]),
    section(dictionary.about.howTitle.join(" "), about.principles.map((item) => `- **${item.title}**: ${item.description}`), 3),
    "",
    section(dictionary.about.stackTitle.join(" "), about.stack.map((category) => `- **${category.title}**: ${category.items.join(", ")}`), 3),
    "",
    section(text.offStack, about.hobbies.map((hobby) => `- **${hobby.title}**: ${hobby.description}`), 3),
  ]);

  const experienceSection = section(
    nav.labels.experience,
    getJobs(locale).flatMap((job) => [
      section(
        `${job.company.name} · ${job.role}`,
        [
          `${formatDateRange(job.startDate, job.endDate, locale)} · ${job.company.url}`,
          "",
          job.summary,
          "",
          ...job.body.flatMap((block) => [jobBlock(block, locale), ""]),
          `${text.skills}: ${job.skills.join(", ")}`,
        ],
        3
      ),
      "",
    ])
  );

  const caseStudiesSection = section(
    text.caseStudies,
    getProjects(locale).flatMap((project) => [
      section(
        project.title,
        [
          absoluteUrl(projectPath(project.slug, locale)),
          "",
          project.summary,
          "",
          `- ${text.context}: ${project.context}`,
          `- ${work.role}: ${project.role}`,
          `- ${work.period}: ${project.period}`,
          `- ${work.stack}: ${project.stack.join(", ")}`,
          "",
          `**${work.challenge}**`,
          "",
          ...project.challenge.flatMap((paragraph) => [paragraph, ""]),
          `**${work.approach}**`,
          "",
          ...project.approach.map((step) => `- **${step.title}**: ${step.text}`),
          "",
          `**${work.outcome}**`,
          "",
          ...project.outcome.map((item) => `- ${item}`),
          ...(project.stats ?? []).map((stat) => `- ${stat.label}: ${stat.value}`),
          ...(project.statsNote ? ["", project.statsNote] : []),
          ...(project.mentions?.length
            ? [
                "",
                `**${work.mentions}**`,
                "",
                ...project.mentions.map(
                  (mention) =>
                    `- [${mention.title}](${mention.url}): ${mention.text} (${mention.source}, ${formatMonthYear(mention.publishedAt, locale)})${mention.slidesUrl ? ` [${dictionary.writing.seeSlides}](${absoluteUrl(mention.slidesUrl)}) (${dictionary.writing.slidesNote})` : ""}`
                ),
              ]
            : []),
        ],
        3
      ),
      "",
    ])
  );

  const writingSection = section(text.writing, [
    dictionary.writing.lead,
    "",
    ...getArticles(locale).flatMap((article) => [
      section(
        article.title,
        [
          article.url,
          "",
          `${text.writingNote(article.publisher, formatArticleDate(article.publishedAt, locale))}.`,
          "",
          article.summary,
          "",
          `${text.topics}: ${article.topics.join(", ")}`,
        ],
        3
      ),
      "",
    ]),
  ]);

  const talksSection = section(dictionary.writing.talksTitle.join(" "), [
    dictionary.writing.talksLead,
    "",
    ...getTalks(locale).flatMap((talk) => [
      section(
        talk.title,
        [
          talk.url,
          "",
          `${talk.event} · ${formatMonthYear(talk.date, locale)} · ${talk.location}`,
          "",
          talk.description,
          ...(talk.slidesUrl
            ? ["", `[${dictionary.writing.seeSlides}](${absoluteUrl(talk.slidesUrl)}) (${dictionary.writing.slidesNote})`]
            : []),
        ],
        3
      ),
      "",
    ]),
    section(
      dictionary.writing.communityEyebrow,
      getCommunityItems(locale).map(
        (item) => `- **${item.title}**: ${item.description} [${dictionary.writing.seePost}](${item.url})`
      ),
      3
    ),
  ]);

  const contactSection = section(nav.labels.contact, [
    text.contactNote,
    "",
    `- Email: ${author.email}`,
    `- LinkedIn: ${socialProfiles.linkedin}`,
    `- GitHub: ${socialProfiles.github}`,
    `- X: ${socialProfiles.twitter}`,
    link(text.callLink, routePath("contact", locale)),
  ]);

  return [
    header(locale),
    aboutSection,
    experienceSection,
    caseStudiesSection,
    writingSection,
    talksSection,
    contactSection,
    optionalSection(locale, "full"),
  ]
    .join("\n\n")
    .replace(/\n{3,}/g, "\n\n");
};

/** Plain-text response shared by the llms route handlers. */
export const llmsResponse = (body: string): Response =>
  new Response(`${body}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
