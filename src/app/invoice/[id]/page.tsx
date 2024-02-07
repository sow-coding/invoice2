"use client"
import { useInvoicesContext } from '@/contexts/invoices.context'
import { useParams, useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import "./global.css"
import Pending from '@/components/status/pending/pending'
import Draft from '@/components/status/draft/draft'
import Paid from '@/components/status/paid/paid'
import EditBtn from '@/components/editBtn/editBtn'
import MarkAsPaidBtn from '@/components/markAsPaidBtn/markAsPaidBtn'
import DeleteBtn from '@/components/deleteBtn/deleteBtn'
import DeleteInvoice from '@/components/deleteInvoice/deleteInvoice'
import { useThemeContext } from '@/contexts/theme.context'
import EditForm from '@/components/editForm/editForm'
import { useInvoiceIndexContext } from '@/contexts/invoiceIndex.context'

function Page() {
    const {invoices} = useInvoicesContext()
    const params = useParams()
    const router = useRouter()
    const {invoiceIndex, setInvoiceIndex} = useInvoiceIndexContext()
    const invoiceIndexValue = invoices.findIndex((invoice) => (invoice.id === params.id))
    setInvoiceIndex(invoiceIndexValue)
    const invoiceData = invoices[invoiceIndex]
    const [deleteInvoiceDisplayed, setDeleteInvoiceDisplayed] = useState<boolean>(false)
    const {theme} = useThemeContext()
    const [editForm, setEditForm] = useState<boolean>(false)
    const [overflowYHidden, setOverflowYHidden] = useState<boolean>(false)
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 1021) {
          setOverflowYHidden(true);
        } else {
          setOverflowYHidden(false);
        }
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return (
    <div className={`invoiceDetails ${(overflowYHidden && editForm) && "overflowYHidden"}`} data-theme={theme}>
      <div className={`invoiceDetailsTop ${(overflowYHidden && editForm) && "displayNone"}`}>
        <div className={`back`} onClick={() => {
            router.push("/")
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none">
          <path d="M4.3418 0.886047L0.113895 5.11395L4.3418 9.34185" stroke="#7C5DFA" stroke-width="2"/>
        </svg>
        <p>Go back</p>        
        </div>
      </div>
      <div className={`invoiceDetailsCenter ${(overflowYHidden && editForm) && "displayNone"}`}>
        <div className={`invoiceDetailsCenterLeft`}>
          <p>Status</p>
          {invoiceData?.status === "pending" && <Pending/>}
          {invoiceData?.status === "draft" && <Draft />}
          {invoiceData?.status === "paid" && <Paid/>}
        </div>
        <div className={`invoiceDetailsCenterRight ${invoiceData?.status === "draft" && "invoiceDetailsCenterRightEdited"}`}>
          <EditBtn invoiceData={invoiceData} setEditForm={setEditForm}/>

          <DeleteBtn setDeleteInvoiceDisplayed={setDeleteInvoiceDisplayed}/>
          {invoiceData?.status != "draft" && <MarkAsPaidBtn />}
        </div>
      </div>
      <div className={`invoiceDetailsBottom ${(overflowYHidden && editForm) && "displayNone"}`}>
        
        <div className={`invoiceDetailsBottomTop`}>
          <div className={`invoiceDetailsBottomTopLeft`}>
            <h4><span>#</span>{invoiceData?.id}</h4>
            <p>{invoiceData?.projectDescription}</p>
          </div>
          <div className={`invoiceDetailsBottomTopRight`}>
          <p>{invoiceData?.personnalAddress.street}</p>
          <p>{invoiceData?.personnalAddress.city}</p>
          <p>{invoiceData?.personnalAddress.postCode}</p>
          <p>{invoiceData?.personnalAddress.country}</p>
        </div>
        </div>

        <div className={`invoiceDetailsBottomCenter`}>
          <div className={`invoiceDetailsBottomCenterLeft`}>
          <div className={`invoiceDetailsBottomCenterLeftLeft`}>
            <div className={`invoiceDetailsBottomCenterLeftLeftTop`}>
              <p>Invoice Date</p>
              <h3>{invoiceData?.invoiceDate}</h3>
            </div>
            <div className={`invoiceDetailsBottomCenterLeftLeftBottom`}>
              <p>Payment Due</p>
              <h3>{invoiceData?.paymentTerms}</h3>
            </div>
          </div>

          <div className={`invoiceDetailsBottomCenterLeftRight`}>
            <p>Bill to</p>
            <div className="clientInfos">
              <h3>{invoiceData?.name}</h3>
              <p>{invoiceData?.clientAddress.street}</p>
              <p>{invoiceData?.clientAddress.city}</p>
              <p>{invoiceData?.clientAddress.postCode}</p>
              <p>{invoiceData?.clientAddress.country}</p>
            </div>
          </div>
          </div>

          <div className={`invoiceDetailsBottomCenterRight`}>
            <p>Sent to</p>
            <h2>{invoiceData?.email}</h2>
          </div>
        
        </div>
            <div className={`invoiceDetailsBottomBottom`}>
              <div className={`invoiceDetailsBottomBottomItems`}>
              {invoiceData?.items.map((item, index) => (
              <div key={index} className={`invoiceDetailsBottomBottomTop`}>
                <div className={`invoiceDetailsBottomBottomTopLeft`}>
                  <p>Item Name</p>
                  <h4>{item.name}</h4>
                </div>
                <div className={`invoiceDetailsBottomBottomTopRight`}>
                  <div className={`quantity`}>
                    <p>QTY.</p>
                    <h4>{item.quantity}</h4>
                </div>
                  <div className={`price`}>
                    <p>Price</p>
                    <h4>{item.price}</h4>
                  </div>
                  <div className={`total`}>
                  <p>Total</p>
                  <h4>{item.total}</h4>
                  </div>
                </div>
              </div>
              ))}
              </div>
              <div className="invoiceDetailsBottomBottomItems2">
                {invoiceData?.items.map((item,index) => (
                  <div className="invoiceDetailsBottomBottomItems2Left" key={index}>
                    <h4>{item.name}</h4>
                    <p>{item.quantity} x {item.price} €</p>
                  </div>
                ))}
                {
                  invoiceData?.items.map((item, index) => (
                  <div className="invoiceDetailsBottomBottomItems2Right" key={index}>
                    <h4>{item.total}€</h4>
                  </div>
                  ))
                }
              </div>
              <div className={`invoiceDetailsBottomBottomBottom`}>
                <p>Amont Due</p>
                <h1>{invoiceData?.price} €</h1>
              </div>
            </div>           
      </div>
      <div className={`invoiceDetailsButtons ${(overflowYHidden && editForm) && "displayNone"}`}>
        <EditBtn invoiceData={invoiceData} setEditForm={setEditForm}/>
        <DeleteBtn setDeleteInvoiceDisplayed={setDeleteInvoiceDisplayed}/>
        <MarkAsPaidBtn />
      </div>
      {deleteInvoiceDisplayed && <DeleteInvoice invoiceData={invoiceData} setDeleteInvoiceDisplayed={setDeleteInvoiceDisplayed}/>}
      {editForm && <EditForm invoiceData={invoiceData} setEditForm={setEditForm} />}
    </div>
  )
}

export default Page