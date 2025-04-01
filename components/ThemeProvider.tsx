"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode, createContext, useContext, useState } from "react";

interface ThemeContextValue {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
  themes: string[];
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState('system');
  const themes = ['light', 'dark', 'blue', 'purple', 'green'];

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      themes={themes}
    >
      <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, themes }}>
        {children}
      </ThemeContext.Provider>
    </NextThemesProvider>
  );
};

export default ThemeProvider;
