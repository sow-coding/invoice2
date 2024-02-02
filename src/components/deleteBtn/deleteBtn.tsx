import React, { Dispatch, SetStateAction } from 'react'

interface DeleteBtnProps {
  setDeleteInvoiceDisplayed: Dispatch<SetStateAction<boolean>>
}

function DeleteBtn(props:DeleteBtnProps) {
  return (
      <div onClick={() => {
        props.setDeleteInvoiceDisplayed(true)
      }} className={`deleteButton`}>
        <p>Delete</p>
      </div>
  )
}

export default DeleteBtn