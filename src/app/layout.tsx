import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./styles/global.css";
import ThemeContextProvider from "@/contexts/theme.context";
import InvoicesContextProvider from "@/contexts/invoices.context";
import FilterContextProvider from "@/contexts/filter.context";
import InvoiceFormContextProvider from "@/contexts/invoiceForm.context";

const league = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InvManage",
  description: "SaaS to manage invocies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={league.className}>
        <ThemeContextProvider>
        <InvoicesContextProvider>
        <FilterContextProvider>
        <InvoiceFormContextProvider>
          {children}
        </InvoiceFormContextProvider>
        </FilterContextProvider>
        </InvoicesContextProvider>
        </ThemeContextProvider>
        </body>
    </html>
  );
}
