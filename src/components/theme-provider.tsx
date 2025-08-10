"use client";

import * as React from "react";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = React.createContext<ThemeContextType>({
  theme: "sober",
  setTheme: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: string;
  themes?: string[];
}

export function ThemeProvider({
  children,
  defaultTheme = "sober",
  themes = ["sober", "beast"],
}: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);
  const [theme, setThemeState] = React.useState(defaultTheme);

  const applyTheme = React.useCallback((themeName: string) => {
    console.log("Applying theme:", themeName);
    document.documentElement.classList.remove("theme-sober", "theme-beast");
    document.documentElement.classList.add(`theme-${themeName}`);
    console.log("Current classes on <html>:", document.documentElement.className);
  }, []);

  React.useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    const initialTheme = saved && themes.includes(saved) ? saved : defaultTheme;
    setThemeState(initialTheme);
    applyTheme(initialTheme);
    console.log("Initial theme applied:", initialTheme);
  }, [defaultTheme, themes, applyTheme]);

  const setTheme = React.useCallback(
    (newTheme: string) => {
      console.log("Changing theme from", theme, "to", newTheme);
      setThemeState(newTheme);
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
      console.log("New theme applied:", newTheme);
    },
    [theme, applyTheme]
  );

  if (!mounted) {
    return null; // No fallback to avoid hydration issues
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
      {/*<div className="debug-theme">Current Theme: {theme}</div>*/}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}