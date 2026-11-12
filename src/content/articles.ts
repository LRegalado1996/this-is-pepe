/**
 * Articles written by Lucas and published elsewhere. The site links out to the
 * original instead of republishing, so the publisher keeps the canonical copy.
 * Titles stay in the language the article was written in.
 */
import type { Locale } from "@/lib/i18n/config";

export interface Article {
  title: string;
  summary: string;
  url: string;
  publisher: string;
  /** ISO date (YYYY-MM-DD). */
  publishedAt: string;
  topics: string[];
}

interface ArticleSource extends Omit<Article, "summary" | "topics"> {
  summary: Record<Locale, string>;
  topics: Record<Locale, string[]>;
}

const sources: ArticleSource[] = [
  {
    title: "How to Reduce Claude Code Token Usage: The Cheapest Model That Does the Job",
    url: "https://streaver.com/insights/blogs/reduce-claude-code-token-usage",
    publisher: "Streaver",
    publishedAt: "2026-10-20",
    summary: {
      en: "Credits used to run out by 11 AM. Routing every job to the cheapest model that does it well, with four subagents, narrow tools and a written memory, fixed it.",
      es: "Los créditos se me terminaban a las 11 de la mañana. Lo resolví mandando cada tarea al modelo más barato que la hace bien: cuatro subagentes, herramientas acotadas y una memoria escrita.",
    },
    topics: {
      en: ["Claude Code", "Subagents", "Cost"],
      es: ["Claude Code", "Subagentes", "Costos"],
    },
  },
  {
    title: "How to Automate Your Daily Tasks with an AI Agent (Without Writing Code)",
    url: "https://streaver.com/insights/blogs/automate-daily-tasks-ai-agent",
    publisher: "Streaver",
    publishedAt: "2026-10-07",
    summary: {
      en: "A document, a schedule and one prompt: the routine that plans my day at 8 AM, so the first half hour goes to deciding instead of gathering context.",
      es: "Un documento, un horario y un prompt: la rutina que planifica mi día a las 8, para que la primera media hora se vaya en decidir y no en juntar contexto.",
    },
    topics: {
      en: ["AI agents", "Automation", "Workflow"],
      es: ["Agentes de IA", "Automatización", "Flujo de trabajo"],
    },
  },
];

export const articleCount = sources.length;

export const getArticles = (locale: Locale): Article[] =>
  sources.map(({ summary, topics, ...article }) => ({
    ...article,
    summary: summary[locale],
    topics: topics[locale],
  }));

export const formatArticleDate = (isoDate: string, locale: Locale) =>
  new Intl.DateTimeFormat(locale === "es" ? "es-UY" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(isoDate));
