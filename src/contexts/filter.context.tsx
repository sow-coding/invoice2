"use client"
import { useCustomHook } from "@/app/page";
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface FilterContext {
    filterDisplayed: boolean;
    setFilterDisplayed: Dispatch<SetStateAction<boolean>>;
}

export const FilterContext = createContext<FilterContext | null>(null)

export default function FilterContextProvider ({children}:useCustomHook) {
    const [filterDisplayed, setFilterDisplayed] = useState<boolean>(false)
    return (
        <FilterContext.Provider value={{
            filterDisplayed: filterDisplayed,
            setFilterDisplayed: setFilterDisplayed
        }}>
            {children}
        </FilterContext.Provider>
    )
}

export function useFilterContext () {
    const context = useContext(FilterContext)
    if (!context) {
        throw new Error ("useFilterContext must be used within FilterContextProvider")
    }
    return context
}