"use client"
import { createContext, useContext, useState } from "react";
import { useCustomHook } from "@/app/page";

export type Theme = "light" |"dark"

type ThemeContext = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContext | null>(null)

export default function ThemeContextProvider({ children }: useCustomHook) {
    const [theme, setThemeState] = useState<Theme>(() => {
      const storedTheme = localStorage.getItem("theme");
      return storedTheme ? (storedTheme as Theme) : "light";
    });
  
    const setTheme = (theme: Theme) => {
      localStorage.setItem("theme", theme);
      setThemeState(theme);
    };
  
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    );
}

export function useThemeContext () {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error ("useThemeContext must be used within a ThemeContextProvider !")
    }
    return context;
}