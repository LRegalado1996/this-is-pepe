/**
 * Type definitions for header navigation pages.
 */
import { ReactNode } from "react";

export type PagesType = {
  name: string;
  icon: ReactNode;
  href: string;
  ariaLabel: string;
};
