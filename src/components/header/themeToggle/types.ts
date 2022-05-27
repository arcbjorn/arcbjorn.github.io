import { ReactNode } from "react";

export type TThemeToggleProps = {
  toggleTheme: (theme: string) => void;
  theme: string;
  children?: ReactNode;
};

export enum EColourMode {
  DARK = "dark",
  LIGHT = "light",
}
