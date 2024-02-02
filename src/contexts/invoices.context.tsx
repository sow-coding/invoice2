"use client"
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { invoices, useCustomHook } from "@/app/page";

interface InvoicesContext {
    invoices: invoices;
    setInvoices: Dispatch<SetStateAction<invoices>>;
}

export const InvoicesContext = createContext<InvoicesContext | null>(null)

export default function InvoicesContextProvider ({children}: useCustomHook) {
    const [invoices, setInvoices] = useState<invoices>([])
    return (
        <InvoicesContext.Provider value={{
            invoices: invoices,
            setInvoices: setInvoices
        }}>
            {children}
        </InvoicesContext.Provider>
    )
}

export function useInvoicesContext () {
    const context = useContext(InvoicesContext)
    if(!context) {
        throw new Error("useInvoicesContext must be used within InvoicesContext")
    }
    return context
}