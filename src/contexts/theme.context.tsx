"use client"
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { useCustomHook } from "@/app/page";

type Theme = "light" |"dark"

type ThemeContext = {
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
}

const ThemeContext = createContext<ThemeContext | null>(null)

export default function ThemeContextProvider ({children}:useCustomHook) {
    const [theme, setTheme] = useState<Theme>("light")
    return (
        <ThemeContext.Provider value={{
            theme: theme,
            setTheme: setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useThemeContext () {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error ("useThemeContext must be used within a ThemeContextProvider !")
    }
    return context;
}