"use client"
import { useCustomHook } from "@/app/page";
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface InvoiceFormContext {
    invoiceFormDisplayed: boolean;
    setInvoiceFormDisplayed: Dispatch<SetStateAction<boolean>>
}

export const InvoiceFormContext = createContext<InvoiceFormContext | null>(null)

export default function InvoiceFormContextProvider ({children}:useCustomHook) {
    const [invoiceFormDisplayed, setInvoiceFormDispalyed] = useState<boolean>(false)
    return (
        <InvoiceFormContext.Provider value={{
            invoiceFormDisplayed: invoiceFormDisplayed,
            setInvoiceFormDisplayed: setInvoiceFormDispalyed
        }}>
            {children}
        </InvoiceFormContext.Provider>
    )
} 

export function useInvoiceFormContext () {
    const context = useContext(InvoiceFormContext)
    if (!context) {
        throw new Error ("useInvoiceFormContext must be used within InvoiceFormContextProvider")
    }
    return context
}