import React from 'react'
import NavBar from '../navBar/navBar'
import { useInvoicesContext } from '@/contexts/invoices.context'
import InvoiceList from '../invoiceList/invoiceList'
import Nothing from '../nothing/nothing'

function InvoicesApp() {
  const {invoices} = useInvoicesContext()
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