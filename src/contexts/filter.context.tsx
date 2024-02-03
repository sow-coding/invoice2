"use client"
import { useCustomHook } from "@/app/page";
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

type Filter = "paidOnly" | "pendignOnly" | "draftOnly" | "";
interface FilterContext {
    filter: Filter,
    setFilter: Dispatch<SetStateAction<Filter>>
}

export const FilterContext = createContext<FilterContext | null>(null)

export default function FilterContextProvider ({children}: useCustomHook) {
    const [filter, setFilter] = useState<Filter>("")
    return (
        <FilterContext.Provider value={{
            filter: filter,
            setFilter: setFilter
        }}>
            {children}
        </FilterContext.Provider>
    )
}

export function useFilterContext () {
    const context = useContext(FilterContext)
    if(!context) {
        throw new Error("useFilterContext must be used within FilterContextProvider")
    }
    return context
} 