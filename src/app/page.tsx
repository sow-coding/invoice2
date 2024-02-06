"use client"
import InvoiceForm from "@/components/invoiceForm/invoiceForm";
import InvoicesApp from "@/components/invoicesApp/invoicesApp";
import SideBar from "@/components/sideBar/sideBar";
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
type sidebarPosition = "static" | "relative" | "absolute" | "sticky" | "fixed";

//TODO: regler probleme light/dark mode non syncro avec body
//TODO: localStorage l'array invoices et theme

export default function Home() {
  const {theme} = useThemeContext()
  const {setFilterDisplayed} = useFilterDisplayedContext()
  const {invoiceFormDisplayed, setInvoiceFormDisplayed} = useInvoiceFormContext()
  const [sidebarPosition, setSidebarPosition] = useState<sidebarPosition>("fixed")
  const [displayNone, setDisplayNone] = useState<boolean>(false)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1021) {
        setDisplayNone(true);
      } else {
        setDisplayNone(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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
    <div className={`home ${(invoiceFormDisplayed && displayNone) && "overflowYHidden"}`} data-theme={theme} onClick={() => {
      setFilterDisplayed(false)
    }}>
      {invoiceFormDisplayed ? <div className="calc" onClick={() => {setInvoiceFormDisplayed(false)}}> 
        <InvoiceForm />
      </div> : <SideBar position={sidebarPosition}/>}
      <InvoicesApp />
    </div>
  );
}
