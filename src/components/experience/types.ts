/**
 * Type definitions for job experience structure.
 */
import { ReactNode } from "react";

export interface JobStructure {
  company: {
    name: string;
    /** Short name for compact layouts; falls back to `name`. */
    shortName?: string;
    url: string;
  };
  role: string;
  /** One-line summary shown while the full description is collapsed. */
  summary: string;
  startDates: Date;
  endDates: Date | null;
  experiences: ReactNode;
  /** Three or four headline skills for compact layouts. */
  featuredSkills: string[];
  skils: string[];
}
