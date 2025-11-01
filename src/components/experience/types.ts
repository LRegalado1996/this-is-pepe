/**
 * Type definitions for job experience structure.
 */
import { ReactNode } from "react";

export interface JobStructure {
  company: {
    name: string;
    url: string;
  };
  startDates: Date;
  endDates: Date | null;
  experiences: ReactNode;
  skils: string[];
}
