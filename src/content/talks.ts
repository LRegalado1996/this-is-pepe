/**
 * Talks given by Lucas and the community events he takes part in. Facts
 * (dates, events, links) are shared; descriptions are written per locale.
 * Rendered on the Writing page below the articles.
 */
import type { Locale } from "@/lib/i18n/config";

export interface Talk {
  title: string;
  event: string;
  /** ISO date (YYYY-MM-DD) of the talk. */
  date: string;
  location: string;
  /** Link to the talk's LinkedIn post. */
  url: string;
  /** Public edition of the slides, served from /public. */
  slidesUrl?: string;
  /** Language the talk was given in (and its slides are written in). */
  language: Locale;
  description: string;
}

export interface CommunityItem {
  title: string;
  description: string;
  /** Lucas's own LinkedIn post from the event. */
  url: string;
}

interface TalkSource extends Omit<Talk, "description"> {
  description: Record<Locale, string>;
}

interface CommunityItemSource {
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  url: string;
}

const talkSources: TalkSource[] = [
  {
    title: "Automations + Pepitos",
    event: "Historias de Producción · Streaver",
    date: "2026-09-11",
    location: "Montevideo, Uruguay",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7505324656569257984/",
    slidesUrl: "/talks/automations-pepitos.pdf",
    language: "es",
    description: {
      en: "How automating one morning routine grew into five routines and four AI agents — the Pepitos — that prepare the day, implement tickets and review pull requests. What broke along the way (a month of credits burned in one week) and why the answer was delegating better, not asking the model for more.",
      es: "Cómo la automatización de una rutina matutina creció hasta cinco rutinas y cuatro agentes de IA — los Pepitos — que preparan el día, implementan tickets y revisan pull requests. Qué se rompió en el camino (un mes de créditos quemado en una semana) y por qué la respuesta fue delegar mejor, no pedirle más al modelo.",
    },
  },
];

const communitySources: CommunityItemSource[] = [
  {
    title: { en: "OWU Conf", es: "OWU Conf" },
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7525914841300131840/",
    description: {
      en: "Uruguay's open-space tech conference: nobody arrives with an agenda, whoever has a topic pitches it in 30 seconds and leads the session. At the 2026 edition, more than half of the 29 sessions were about AI.",
      es: "La conferencia de espacio abierto de la comunidad tecnológica uruguaya: nadie llega con agenda, quien tiene un tema lo propone en 30 segundos y lidera la sesión. En la edición 2026, más de la mitad de las 29 sesiones fueron sobre IA.",
    },
  },
  {
    title: { en: "IT Builders Live", es: "IT Builders Live" },
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7503066314555650049/",
    description: {
      en: "At the 2026 edition at Antel Arena with the Streaver crew, around a stand game built with Claude Code during two internal hackathons.",
      es: "En la edición 2026 en el Antel Arena con el equipo de Streaver, alrededor de un juego para el stand construido con Claude Code durante dos hackathons internas.",
    },
  },
  {
    title: { en: "Streaver hackathons", es: "Hackathons de Streaver" },
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7462173317030924289/",
    description: {
      en: "An internal hackathon every two months: one day, problems picked from real life, and projects running in production before the day ends.",
      es: "Una hackathon interna cada dos meses: un día, problemas sacados de la vida real y proyectos corriendo en producción antes de que termine la jornada.",
    },
  },
];

export const getTalks = (locale: Locale): Talk[] =>
  talkSources.map(({ description, ...talk }) => ({ ...talk, description: description[locale] }));

export const getCommunityItems = (locale: Locale): CommunityItem[] =>
  communitySources.map((item) => ({
    title: item.title[locale],
    description: item.description[locale],
    url: item.url,
  }));
