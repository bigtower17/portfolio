"use client";

import * as React from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  React.useEffect(() => {
    // Applica sempre il tema sober
    document.documentElement.classList.add("theme-sober");
  }, []);

  return <>{children}</>;
}