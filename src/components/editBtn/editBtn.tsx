import { invoiceType } from '@/app/page'
import React from 'react'

interface EditBtnProps {
    invoiceData: invoiceType
}

function EditBtn(props:EditBtnProps) {
  return (
    <div className={`editButton ${props.invoiceData.status === "paid"
    && "unclickable"}`}>
        <p>Edit</p>
    </div>
  )
}

export default EditBtn