import { ReactNode } from "react";

export interface JobStructure {
  company: string;
  startDates: Date;
  endDates: Date;
  experiences: ReactNode;
}
