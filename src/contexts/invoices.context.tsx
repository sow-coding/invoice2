"use client"
import { createContext, useContext, useState, useEffect } from "react";
import { invoices, useCustomHook } from "@/app/page";

interface InvoicesContext {
  invoices: invoices;
  setInvoices: (invoices: invoices) => void;
}

export const InvoicesContext = createContext<InvoicesContext | null>(null);

export default function InvoicesContextProvider({ children }: useCustomHook) {
  const [invoices, setInvoicesState] = useState<invoices>(() => {
    if (typeof window !== "undefined") {
      const invoicesSaved = localStorage.getItem("invoices");
      return invoicesSaved ? JSON.parse(invoicesSaved) : [];
    } else {
      return [];
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("invoices", JSON.stringify(invoices));
    }
  }, [invoices]);

  const setInvoices = (invoices: invoices) => {
    setInvoicesState(invoices);
  };

  return (
    <InvoicesContext.Provider value={{ invoices, setInvoices }}>
      {children}
    </InvoicesContext.Provider>
  );
}

export function useInvoicesContext() {
  const context = useContext(InvoicesContext);
  if (!context) {
    throw new Error("useInvoicesContext must be used within InvoicesContext");
  }
  return context;
}
