import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./styles/global.css";
import ThemeContextProvider from "@/contexts/theme.context";
import InvoicesContextProvider from "@/contexts/invoices.context";
import FilterDisplayedContextProvider from "@/contexts/filterDisplayed.context";
import InvoiceFormContextProvider from "@/contexts/invoiceForm.context";
import InvoiceIndexProvider from "@/contexts/invoiceIndex.context";
import FilterContextProvider from "@/contexts/filter.context";
import { SpeedInsights } from "@vercel/speed-insights/next"

const league = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InvManage",
  description: "SaaS to manage invoices",
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
        <FilterDisplayedContextProvider>
        <InvoiceFormContextProvider>
        <InvoiceIndexProvider>
        <FilterContextProvider>
          {children}
          <SpeedInsights />
        </FilterContextProvider>
        </InvoiceIndexProvider>
        </InvoiceFormContextProvider>
        </FilterDisplayedContextProvider>
        </InvoicesContextProvider>
        </ThemeContextProvider>
        </body>
    </html>
  );
}
