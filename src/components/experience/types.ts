import { ReactNode } from "react";

export interface JobStructure {
  company: {
    name: string;
    url: string;
  };
  startDates: Date;
  endDates: Date;
  experiences: ReactNode;
  skils: string[];
}
