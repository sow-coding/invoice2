"use client"
import { useCustomHook } from "@/app/page";
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface FilterDisplayedContext {
    filterDisplayed: boolean;
    setFilterDisplayed: Dispatch<SetStateAction<boolean>>;
}

export const FilterDisplayedContext = createContext<FilterDisplayedContext | null>(null)

export default function FilterDisplayedContextProvider ({children}:useCustomHook) {
    const [filterDisplayed, setFilterDisplayed] = useState<boolean>(false)
    return (
        <FilterDisplayedContext.Provider value={{
            filterDisplayed: filterDisplayed,
            setFilterDisplayed: setFilterDisplayed
        }}>
            {children}
        </FilterDisplayedContext.Provider>
    )
}

export function useFilterDisplayedContext () {
    const context = useContext(FilterDisplayedContext)
    if (!context) {
        throw new Error ("useFilterDisplayedContext must be used within FilterDisplayedContextProvider")
    }
    return context
}