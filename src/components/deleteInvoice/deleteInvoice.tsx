"use client"
import React, { Dispatch, SetStateAction } from 'react'
import { invoiceType } from '@/app/page'
import { useRouter } from 'next/navigation';
import { useThemeContext } from '@/contexts/theme.context';
import { useInvoicesContext } from '@/contexts/invoices.context';
import { useInvoiceIndexContext } from '@/contexts/invoiceIndex.context';

interface deleteInvoiceProps {
    invoiceData: invoiceType;
    setDeleteInvoiceDisplayed: Dispatch<SetStateAction<boolean>>
}

function DeleteInvoice(props:deleteInvoiceProps) {
  const router = useRouter()
  const {theme} = useThemeContext()
  const {invoices, setInvoices} = useInvoicesContext()
  const {invoiceIndex} = useInvoiceIndexContext()
  return (
    <div className={`deleteConfirmationContainer`} data-theme={theme} onClick={() => {
      props.setDeleteInvoiceDisplayed(false)
    }}>
        <div className={`deleteConfirmation`} onClick={(e) => {e.stopPropagation()}}>
          <h1>Confirm Deletion</h1>
            <p className={`deleteConfirmationText`}>Are you sure you want to delete invoice #{props.invoiceData?.id}? This action cannot be undone.</p>
            <div className={`deleteConfirmButton`}>
                <button className={`cancel`} onClick={() => {
                  props.setDeleteInvoiceDisplayed(false)
                }}>Cancel</button>
                <div onClick={() => {
                  const invoiceDeleted = [...invoices]
                  invoiceDeleted.splice(invoiceIndex, 1)
                  setInvoices(invoiceDeleted)
                  router.push("/")
                }} className={`deleteButton`}>
                <p>Delete</p>
            </div>
            </div>
          </div>
    </div>
  )
}

export default DeleteInvoice