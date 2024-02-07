"use client"
import { createContext, useContext, useState } from "react";
import { invoices, useCustomHook } from "@/app/page";

interface InvoicesContext {
    invoices: invoices;
    setInvoices: (invoices: invoices) => void;
}

export const InvoicesContext = createContext<InvoicesContext | null>(null)

export default function InvoicesContextProvider ({children}: useCustomHook) {
    const [invoices, setInvoicesState] = useState<invoices>(() => {
        const invoicesSaved = localStorage.getItem("invoices")
        return invoicesSaved ? JSON.parse(invoicesSaved) : []
    })
    const setInvoices = (invoices: invoices) => {
        localStorage.setItem("invoices", JSON.stringify(invoices))
        setInvoicesState(invoices)
    }
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