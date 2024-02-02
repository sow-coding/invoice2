"use client"
import React, { Dispatch, SetStateAction } from 'react'
import { invoiceType } from '@/app/page'
import { useRouter } from 'next/navigation';
import { useThemeContext } from '@/contexts/theme.context';

interface deleteInvoiceProps {
    invoiceData: invoiceType;
    setDeleteInvoiceDisplayed: Dispatch<SetStateAction<boolean>>
}

function DeleteInvoice(props:deleteInvoiceProps) {
  const router = useRouter()
  const {theme} = useThemeContext()
  return (
    <div className={`deleteConfirmationContainer`} data-theme={theme} onClick={() => {
      props.setDeleteInvoiceDisplayed(false)
    }}>
        <div className={`deleteConfirmation`} onClick={(e) => {e.stopPropagation()}}>
          <h1>Confirm Deletion</h1>
            <p className={`deleteConfirmationText`}>Are you sure you want to delete invoice #{props.invoiceData.id}? This action cannot be undone.</p>
            <div className={`deleteConfirmButton`}>
                <button className={`cancel`} onClick={() => {
                  props.setDeleteInvoiceDisplayed(false)
                }}>Cancel</button>
                <div onClick={() => {
                  //rjt fct delete
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