"use client"
import React from 'react'
import { useInvoicesContext } from '@/contexts/invoices.context'
import { invoiceType } from '@/app/page'
import { useInvoiceFormContext } from '@/contexts/invoiceForm.context'

interface SaveAsDraftButtonProps {
  newInvoiceDraft: invoiceType
}

function SaveAsDraftButton(props:SaveAsDraftButtonProps) {
  const {invoices, setInvoices} = useInvoicesContext()
  const {setInvoiceFormDisplayed} = useInvoiceFormContext()
  return (
    <button onClick={() => {
      setInvoices([...invoices, props.newInvoiceDraft])
      setInvoiceFormDisplayed(false)
    }} type='button' className={`saveAsDraftButton`}>
        Save as Draft
    </button>
  )
}

export default SaveAsDraftButton