import { useInvoicesContext } from '@/contexts/invoices.context'
import React from 'react'
import Invoice from '../invoice/invoice'

function InvoiceList() {
  const {invoices} = useInvoicesContext()
  return (
    <div className='invoicesList'>
      {invoices.map((invoice, i) => (
        <Invoice key={i} invoiceData={invoice} />
      ))}
    </div>
  )
}

export default InvoiceList