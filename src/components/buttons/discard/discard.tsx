import { useInvoiceFormContext } from '@/contexts/invoiceForm.context'
import React from 'react'

function DiscardBtn() {
    const {invoiceFormDisplayed, setInvoiceFormDisplayed} = useInvoiceFormContext()
  return (
    <button className={`discardBtn`} onClick={() => {
      setInvoiceFormDisplayed(false)
    }}>
        Discard
    </button>
  )
}

export default DiscardBtn