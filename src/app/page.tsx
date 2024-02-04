"use client"
import InvoiceForm from "@/components/invoiceForm/invoiceForm";
import InvoicesApp from "@/components/invoicesApp/invoicesApp";
import SideBar, { sidebarProps } from "@/components/sideBar/sideBar";
import { useFilterDisplayedContext } from "@/contexts/filterDisplayed.context";
import { useInvoiceFormContext } from "@/contexts/invoiceForm.context";
import { useThemeContext } from "@/contexts/theme.context";
import { useEffect, useState } from "react";

export interface useCustomHook {
  children: React.ReactNode
}

export type invoices = invoiceType[]

export type choice = "Net 1 day" | "Net 7 day" | "Net 14 day" | "Net 30 day";

export interface invoiceType {
  id: string;
  name: string
  price: number;
  status: "paid" | "pending" | "draft";
  personnalAddress: addressType;
  email: string;
  clientAddress: addressType;
  invoiceDate: string;
  paymentTerms: choice;
  items: item[];
  projectDescription: string;
}
interface addressType {
  street: string;
  city: string;
  postCode: number;
  country: string;
}
export interface item {
  name: string;
  quantity: number;
  price: number;
  total: number
}
//responsive
//localStorage l'array invoices et theme

type sidebarPosition = "static" | "relative" | "absolute" | "sticky" | "fixed";

export default function Home() {
  const {theme} = useThemeContext()
  const {setFilterDisplayed} = useFilterDisplayedContext()
  const {invoiceFormDisplayed} = useInvoiceFormContext()
  const [sidebarPosition, setSidebarPosition] = useState<sidebarPosition>("fixed")
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 769) {
        setSidebarPosition("relative");
      } else {
        setSidebarPosition("fixed");
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="home" data-theme={theme} onClick={() => {
      setFilterDisplayed(false)
    }}>
      {invoiceFormDisplayed ? <InvoiceForm /> : <SideBar position={sidebarPosition}/>}
      <InvoicesApp />
    </div>
  );
}
