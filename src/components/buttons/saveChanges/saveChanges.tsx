"use client"
import { invoiceType } from '@/app/page';
import { useInvoiceIndexContext } from '@/contexts/invoiceIndex.context';
import { useInvoicesContext } from '@/contexts/invoices.context'
import React, { Dispatch, SetStateAction } from 'react'

interface SaveChangesProps {
    setEditForm :Dispatch<SetStateAction<boolean>>;
    editedInvoice: invoiceType;
}

function SaveChanges(props: SaveChangesProps) {
    const {invoices, setInvoices} = useInvoicesContext()
    const {invoiceIndex} = useInvoiceIndexContext()
    return (
        <button className={`saveAndSendButton`} type='button' onClick={() => {
          const invoicesChanged = [...invoices]
          invoicesChanged[invoiceIndex] = {
            ...props.editedInvoice,
          }
          setInvoices(invoicesChanged) 
          props.setEditForm(false)
        }}>Save Changes</button>
      )
}

export default SaveChanges