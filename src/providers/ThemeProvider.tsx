"use client";

import { useEffect, useState } from "react";
import { ThemeProviderContext } from "@/contexts/ThemeProviderContext";

export type Theme = "dark" | "light" | "system";

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeConfiguration {
  theme: Theme;
  systemTheme: Theme;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const storageKey = process.env.NEXT_PUBLIC_STORAGE_KEY as "mustackable-site";
  const defaultTheme = process.env.NEXT_PUBLIC_THEME_DEFAULT as Theme;

  const [themeConfiguration, setThemeConfiguration] = useState<ThemeConfiguration>({
    theme: defaultTheme,
    systemTheme: defaultTheme,
  });

  useEffect(() => {
    setThemeConfiguration({
      theme: (localStorage.getItem(storageKey) ?? defaultTheme) as Theme,
      systemTheme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
    });
  }, [defaultTheme, storageKey]);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (themeConfiguration.theme === "system") {
      root.classList.add(themeConfiguration.systemTheme);
      return;
    }

    root.classList.add(themeConfiguration.theme);
  }, [themeConfiguration]);

  const value = {
    ...themeConfiguration,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setThemeConfiguration({ theme: theme, systemTheme: themeConfiguration.systemTheme });
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
