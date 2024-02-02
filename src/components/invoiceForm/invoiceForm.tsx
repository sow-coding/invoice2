"use client"
import { useInvoiceFormContext } from '@/contexts/invoiceForm.context'
import React, { useState } from 'react'
import SideBar from '../sideBar/sideBar'
import DiscardBtn from '../buttons/discard/discard';
import SaveAsDraftButton from '../buttons/saveAsDraft/saveAsDraft';
import SaveAndSendButton from '../buttons/saveAndSend/saveAndSend';
import { invoiceType, item } from '@/app/page';

type choice = "Net 1 day" | "Net 7 day" | "Net 14 day" | "Net 30 day";

function InvoiceForm() {
    const [paymentTermsDowned, setPaymentTermsDowned] = useState<boolean>(false)
    const choices: choice[] = ["Net 1 day", "Net 7 day", "Net 14 day", "Net 30 day"];
    const {setInvoiceFormDisplayed} = useInvoiceFormContext()
    const [paymentTerms, setPaymentTerms] = useState<choice>("Net 30 day") 
    const handleChoiceClick = (choice:choice) => {
        setPaymentTerms(choice);
        setPaymentTermsDowned(false); 
      };
    const [items, setItems] = useState<item[]>([{
        name: "",
        quantity: 0,
        price: 0,
        total: 0
    }])
    function genererSuite() {
        const caracteresPossibles = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let suite = "#";
      
        for (let i = 0; i < 6; i++) {
          const indiceAleatoire = Math.floor(Math.random() * caracteresPossibles.length);
          suite += caracteresPossibles.charAt(indiceAleatoire);
        }
      
        return suite;
      }
    const [personnalStreet, setPersonnalStreet] = useState<string>("")
    const [personnalCity, setPersonnalCity] = useState<string>("")
    const [personnalPostCode, setPersonnalPostCode] = useState<number>(0)
    const [personnalCountry, setPersonnalCountry] = useState<string>("")
    const [clientName, setClientName] = useState<string>("")
    const [clientEmail, setClientEmail] = useState<string>("")
    const [clientStreet, setClientStreet] = useState<string>("")
    const [clientCity, setClientCity] = useState<string>("")
    const [clientPostCode, setClientPostCode] = useState<number>(0)
    const [clientCountry, setClientCountry] = useState<string>("")
    const [invoiceDate, setInvoiceDate] = useState<string>("")
    const [projectDescription, setProjectDescription] = useState<string>("")
    const newInvoice:invoiceType = {
        id: genererSuite(),
        name: clientName,
        personnalAddress: {
            street: personnalStreet,
            city: personnalCity,
            postCode: personnalPostCode,
            country: personnalCountry
        },
        email: clientEmail,
        clientAddress: {
            street: clientStreet,
            city: clientCity,
            postCode: clientPostCode,
            country: clientCountry
        },
        invoiceDate: invoiceDate,
        paymentTerms: paymentTerms,
        items: items,
        status: "pending",
        price: items.reduce((total, item) => total + item.price, 0),
        projectDescription: projectDescription 
    }
    const newInvoiceDraft:invoiceType = {
        id: genererSuite(),
        name: clientName,
        personnalAddress: {
            street: personnalStreet,
            city: personnalCity,
            postCode: personnalPostCode,
            country: personnalCountry
        },
        email: clientEmail,
        clientAddress: {
            street: clientStreet,
            city: clientCity,
            postCode: clientPostCode,
            country: clientCountry
        },
        invoiceDate: invoiceDate,
        paymentTerms: paymentTerms,
        items: items,
        price: items.reduce((total, item) => total + item.price, 0),
        projectDescription: projectDescription,
        status: "draft" 
    }
    return (
    <div className="calc" onClick={() => {setInvoiceFormDisplayed(false)}}>
        <div className="invoiceFormContainer">
            <SideBar position='relative'/>
            <form className={`invoiceForm`} onClick={(e) => {e.stopPropagation(), setPaymentTermsDowned(false)}}>
                <h1 className={`formTitle`}>New Invoice</h1>
                
            <div className={`invoiceFormTop`}>
                <h5 className={`billFromTitle`}>Bill from</h5>
                <div className={`billFromTop`}>
                <label htmlFor="address">Street Address</label>
                <input type="text" name='address' onChange={(e) => {
                    setPersonnalStreet(e.currentTarget.value)
                }}/>
                </div>
                <div className={`billFromBottom`}>
                    <div className={`city`}>
                    <label htmlFor="city">City</label>
                    <input type="text" name='city' onChange={(e) => {
                    setPersonnalCity(e.currentTarget.value)
                }}/>
                    </div>
                    <div className={`postCode`}>
                    <label htmlFor="postCode">Postcode</label>
                    <input type="text" name='postCode' onChange={(e) => {
                    setPersonnalPostCode(Number(e.currentTarget.value))
                }}/>
                    </div>
                    <div className={`country`}>
                    <label htmlFor="country">Country</label>
                    <input type="text" name='country' onChange={(e) => {
                    setPersonnalCountry(e.currentTarget.value)
                }}/>
                    </div>
                </div>
            </div>
            <div className={`invoiceFormCenter`}>
                <div className={`billToTop`}>
                    <h5 className={`billToTitle`}>Bill to</h5>
                    <div className={`clientName`}>
                    <label htmlFor="clientName">Client´s Name</label>
                    <input type="text" name='clientName'  onChange={(e) => {
                    setClientName(e.currentTarget.value)
                }}/>
                    </div>
                    <div className={`clientEmail`}>
                    <label htmlFor="clientEmail">Client´s Email</label>
                    <input type="text" placeholder='e.g. email@example.com' name='clientEmail' onChange={(e) => {
                    setClientEmail(e.currentTarget.value)
                }}/>
                    </div>
                    <div className={`clientStreetAddress`}>
                    <label htmlFor="clientStreetAddress">Street Address</label>
                    <input type="text" name='clientStreetAddress' onChange={(e) => {
                    setClientStreet(e.currentTarget.value)
                }}/>
                    </div>
                </div>
                <div className={`billToCenter`}>
                    <div className={`clientCity`}>
                    <label htmlFor="clientCity">City</label>
                    <input type="text" name='clientCity' onChange={(e) => {
                    setClientCity(e.currentTarget.value)
                }}/>
                    </div>
                    <div className={`clientPostCode`}>
                    <label htmlFor="clientPostCode">Post Code</label>
                    <input type="number" name='clientPostCode' onChange={(e) => {
                    setClientPostCode(Number(e.currentTarget.value))
                }}/>
                    </div>
                    <div className={`clientCountry`}>
                    <label htmlFor="clientCountry">Country</label>
                    <input type="text" name='clientCountry' onChange={(e) => {
                    setClientCountry(e.currentTarget.value)
                }}/>
                    </div>
                </div>
            </div>
                <div className={`invoiceFormBottom`}>
                
                <div className={`invoiceFormBottomTop`}>
                    <div className={`invoiceFormBottomTopTop`}>
                    <div className={`invoiceDate`}>
                        <label htmlFor="invoiceDate">Invoice Date</label>
                        <input type="date" onChange={(e) => {
                    setInvoiceDate(e.currentTarget.value)
                }}/>
                    </div>

                    <div className={`paymentTerms`}>
                        <label htmlFor="paymentTerms">Payment Terms</label>
                        <div className={`paymentTermsInputContainer`}>
                        <input onClick={(e) => {e.stopPropagation(),setPaymentTermsDowned(!paymentTermsDowned)}} placeholder='Net 30 days' readOnly className={`paymentTermsInput`} type="text" name='paymentTerms'                   
                        value={paymentTerms}/>
                        {paymentTermsDowned === false ? <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
                            <path d="M1 1L5.2279 5.2279L9.4558 1" stroke="#7C5DFA" stroke-width="2"/>
                        </svg>: <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
                            <path d="M1 6.22803L5.2279 2.00013L9.4558 6.22803" stroke="#7C5DFA" stroke-width="2"/>
                        </svg>}                          
                        </div>
                        {paymentTermsDowned && (
                        <div className={`options`}>
                            {choices.map((choice, index) => (
                            <div className={`option`} key={index} onClick={() => {
                                handleChoiceClick(choice)
                            }}>{choice}</div>
                            ))}
                        </div>
                        )}
                    </div>

                    </div>
                    <div className={`invoiceFormBottomTopBottom`}>
                    <label htmlFor="projectDescription">Project Description</label>
                    <input type="text" placeholder='e.g. Graphic Design Service' name='projectDescription' onChange={(e) => {
                    setProjectDescription(e.currentTarget.value)
                }}/>
                    </div> 
                </div>
                </div>
                
                <div className={`itemList`} >
                    <h1 className={`itemListTitle`}>Item List</h1>
                    {items.map((item, index) => (
                    <div key={index} className={`item`}>
                    <div className={`inputsItemList`}>
                    <div className={`itemNameInListInput`}>
                        <label htmlFor="itemNameInList">Item Name</label>
                        <input type="text" name='itemNameInList' onChange={(e) => {
                    //setPersonnalStreet(e.currentTarget.value)
                }}/>
                    </div>
                    <div className={`itemQuantityInput`}>
                        <label htmlFor="itemQuantity">Qty.</label>
                        <input type="number" name='itemQuantity'onChange={(e) => {
                    //setPersonnalStreet(e.currentTarget.value)
                }}/>
                    </div>      
                    <div className={`itemPriceInput`}>
                        <label htmlFor="itemPrice">Price</label>
                        <input type="text" name='itemPrice' onChange={(e) => {
                    //setPersonnalStreet(e.currentTarget.value)
                }}/>
                    </div>    
        
                    <div className={`total`}>
                        <div className={`totalPrice`}>
                            <h5>Total</h5>
                            <p>0.00</p>
                        </div>
                        <svg onClick={()=> {
                            const newItems = [...items]
                            newItems.splice(index, 1)
                            setItems(newItems)
                        }} className={`trash`} xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="#888EB0">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.47225 0L9.36117 0.888875H12.4722V2.66667H0.027832V0.888875H3.13892L4.02783 0H8.47225ZM2.6945 16C1.71225 16 0.916707 15.2045 0.916707 14.2222V3.55554H11.5834V14.2222C11.5834 15.2045 10.7878 16 9.80562 16H2.6945Z" />
                        </svg>
                    </div>
                    </div>
                
                </div>
                    ))}
                <div onClick={() => {
                setItems([...items, {
                    name: "",
                    quantity: 0,
                    price: 0,
                    total: 0
                }])
            }} className={`addNewItemButton`}>
                <p>+ Add new item</p>
                </div>
                </div>
            
                <div className={`formButtons`}>
                <div className={`formButtonsLeft`}>
                    <DiscardBtn />
                </div>
                <div className={`formButtonsRight`}>
                    <SaveAsDraftButton newInvoiceDraft={newInvoiceDraft}/>
                    <SaveAndSendButton newInvoice={newInvoice}/>
                </div>
                </div>
                
            </form>
        </div>
    </div>
    )
}

export default InvoiceForm