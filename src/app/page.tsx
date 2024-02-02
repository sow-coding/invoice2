"use client"
import InvoiceForm from "@/components/invoiceForm/invoiceForm";
import InvoicesApp from "@/components/invoicesApp/invoicesApp";
import SideBar from "@/components/sideBar/sideBar";
import { useFilterContext } from "@/contexts/filter.context";
import { useInvoiceFormContext } from "@/contexts/invoiceForm.context";
import { useThemeContext } from "@/contexts/theme.context";

export interface useCustomHook {
  children: React.ReactNode
}

export type invoices = invoiceType[]
export interface invoiceType {
  id: string;
  name: string
  price: number;
  status: "paid" | "pending" | "draft";
  personnalAddress: addressType;
  email: string;
  clientAddress: addressType;
  invoiceDate: string;
  paymentTerms: string;
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

export default function Home() {
  const {theme} = useThemeContext()
  const {setFilterDisplayed} = useFilterContext()
  const {invoiceFormDisplayed} = useInvoiceFormContext()
  return (
    <div className="home" data-theme={theme} onClick={() => {
      setFilterDisplayed(false)
    }}>
      {invoiceFormDisplayed ? <InvoiceForm /> : <SideBar position="fixed"/>}
      <InvoicesApp />
    </div>
  );
}
