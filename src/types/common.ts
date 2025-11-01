/**
 * Common types used across the application.
 */

export type ClassNameProp = {
  className?: string;
};

export type AnimatedProp = {
  animated?: boolean;
};

export type WithChildren<T = Record<string, never>> = T & {
  children: React.ReactNode;
};

