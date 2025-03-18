import { useEffect, useState } from "react";
import { ThemeProviderContext } from "../contexts/ThemeProviderContext";

export type Theme = "dark" | "light" | "system";

const storageKey = import.meta.env.VITE_THEME_STORAGE_KEY as string;
const defaultTheme = import.meta.env.VITE_THEME_DEFAULT as string;
const systemTheme: Theme = window.matchMedia("(prefers-color-scheme: dark)")
  .matches
  ? "dark"
  : "light";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) ?? defaultTheme) as Theme,
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    systemTheme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
