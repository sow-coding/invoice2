"use client"
import { useInvoiceIndexContext } from '@/contexts/invoiceIndex.context'
import { useInvoicesContext } from '@/contexts/invoices.context'
import React from 'react'

function MarkAsPaidBtn() {
  const {invoices, setInvoices} = useInvoicesContext()
  const {invoiceIndex} = useInvoiceIndexContext()
  return (
    <div className='MarkAsPaidButton' onClick={() => {
      const invoiceGetPaid = [...invoices]
      invoiceGetPaid[invoiceIndex] = {
        ...invoiceGetPaid[invoiceIndex],
        status: "paid"
      }
      setInvoices(invoiceGetPaid)
    }}>
        <p>Mark as Paid</p>
    </div>
  )
}

export default MarkAsPaidBtn