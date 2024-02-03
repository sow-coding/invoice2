"use client"
import { useCustomHook } from "@/app/page";
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

type invoiceIndexValue = number;

interface InvoiceIndex {
    invoiceIndex: invoiceIndexValue;
    setInvoiceIndex: Dispatch<SetStateAction<invoiceIndexValue>>
}

export const InvoiceIndex = createContext<InvoiceIndex |null>(null)

export default function InvoiceIndexProvider ({children}: useCustomHook) {
    const [invoiceIndex, setInvoiceIndex] = useState<invoiceIndexValue>(0)
    return (
        <InvoiceIndex.Provider value={{
            invoiceIndex: invoiceIndex,
            setInvoiceIndex: setInvoiceIndex
        }}>
            {children}
        </InvoiceIndex.Provider>
    )
}

export function useInvoiceIndexContext () {
    const context = useContext(InvoiceIndex)
    if(!context) {
        throw new Error ("useInvoiceIndexContext must be used within InvoiceIndexProvider")
    }
    return context
}