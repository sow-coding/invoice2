import { useInvoicesContext } from '@/contexts/invoices.context'
import React from 'react'
import Invoice from '../invoice/invoice'
import { useFilterContext } from '@/contexts/filter.context'

function InvoiceList() {
  const {invoices} = useInvoicesContext()
  const {filter} = useFilterContext()

  let invoicesDisplayed = []

  if (filter === "draftOnly") {
    invoicesDisplayed = invoices.filter((invoice) => (invoice.status === "draft"))
  } else if (filter === "paidOnly") {
    invoicesDisplayed = invoices.filter((invoice) => (invoice.status === "paid"))
  } else if (filter === "pendignOnly") {
    invoicesDisplayed = invoices.filter((invoice) => (invoice.status === "pending"))
  } else {
    invoicesDisplayed = invoices
  }

  return (
    <div className='invoicesList'>
      {invoicesDisplayed.map((invoice, i) => (
        <Invoice key={i} invoiceData={invoice} />
      ))}
    </div>
  )
}

export default InvoiceList