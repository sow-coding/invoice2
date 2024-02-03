import { invoiceType } from '@/app/page'
import React, { Dispatch, SetStateAction } from 'react'

interface EditBtnProps {
    invoiceData: invoiceType;
    setEditForm: Dispatch<SetStateAction<boolean>>
}

function EditBtn(props:EditBtnProps) {
  return (
    <div className={`editButton ${props.invoiceData?.status === "paid"
    && "unclickable"}`} onClick={() => {props.setEditForm(true)}}>
        <p>Edit</p>
    </div>
  )
}

export default EditBtn