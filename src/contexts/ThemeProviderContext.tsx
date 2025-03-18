import { createContext } from "react";
import { Theme } from "../providers/ThemeProvider";

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  systemTheme: Theme;
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  systemTheme: "system",
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);
