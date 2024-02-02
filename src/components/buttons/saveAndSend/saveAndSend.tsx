"use client"
import { invoiceType } from '@/app/page'
import { useInvoiceFormContext } from '@/contexts/invoiceForm.context'
import { useInvoicesContext } from '@/contexts/invoices.context'
import React from 'react'

interface SaveAndSendButtonProps {
  newInvoice: invoiceType
}

function SaveAndSendButton(props: SaveAndSendButtonProps) {
  const {invoices, setInvoices} = useInvoicesContext()
  const {setInvoiceFormDisplayed} = useInvoiceFormContext()
  return (
    <button className={`saveAndSendButton`} type='button' onClick={() => {
      setInvoices([...invoices, props.newInvoice])
      setInvoiceFormDisplayed(false)
    }}>Save and Send</button>
  )
}

export default SaveAndSendButton