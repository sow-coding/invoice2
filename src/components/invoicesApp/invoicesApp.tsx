"use client"
import React, { useEffect, useState } from 'react'
import NavBar from '../navBar/navBar'
import { useInvoicesContext } from '@/contexts/invoices.context'
import InvoiceList from '../invoiceList/invoiceList'
import Nothing from '../nothing/nothing'
import { useInvoiceFormContext } from '@/contexts/invoiceForm.context'

function InvoicesApp() {
  const {invoices} = useInvoicesContext()
  const {invoiceFormDisplayed} = useInvoiceFormContext()
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
  return (
    <div className={`invoicesApp ${(invoiceFormDisplayed && displayNone) && "displayNone"}`}>
        <NavBar />
        {invoices.length === 0 ? <Nothing /> : 
        <InvoiceList />
        }
    </div>
  )
}

export default InvoicesApp