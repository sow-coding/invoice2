import React from 'react'
import NavBar from '../navBar/navBar'
import { useInvoicesContext } from '@/contexts/invoices.context'
import InvoiceList from '../invoiceList/invoiceList'
import Nothing from '../nothing/nothing'
import { useInvoiceFormContext } from '@/contexts/invoiceForm.context'

function InvoicesApp() {
  const {invoices} = useInvoicesContext()
  const {invoiceFormDisplayed} = useInvoiceFormContext()
  return (
    <div className='invoicesApp'>
        <NavBar />
        {invoices.length === 0 ? <Nothing /> : 
        <InvoiceList />
        }
    </div>
  )
}

export default InvoicesApp