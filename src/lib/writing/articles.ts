/**
 * Articles written by Lucas and published elsewhere. The site links out to the
 * original instead of republishing, so the publisher keeps the canonical copy.
 */
export interface Article {
  title: string;
  summary: string;
  url: string;
  publisher: string;
  /** ISO date (YYYY-MM-DD). */
  publishedAt: string;
  topics: string[];
}

export const articles: Article[] = [
  {
    title: "How to Reduce Claude Code Token Usage: The Cheapest Model That Does the Job",
    summary:
      "Credits used to run out by 11 AM. Routing every job to the cheapest model that does it well — four subagents, narrow tools and a written memory — fixed it.",
    url: "https://streaver.com/insights/blogs/reduce-claude-code-token-usage",
    publisher: "Streaver",
    publishedAt: "2026-10-20",
    topics: ["Claude Code", "Subagents", "Cost"],
  },
  {
    title: "How to Automate Your Daily Tasks with an AI Agent (Without Writing Code)",
    summary:
      "A document, a schedule and one prompt: the routine that plans my day at 8 AM, so the first half hour goes to deciding instead of gathering context.",
    url: "https://streaver.com/insights/blogs/automate-daily-tasks-ai-agent",
    publisher: "Streaver",
    publishedAt: "2026-10-07",
    topics: ["AI agents", "Automation", "Workflow"],
  },
];

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

export const formatArticleDate = (isoDate: string) => dateFormatter.format(new Date(isoDate));
