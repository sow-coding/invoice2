"use client"
import { useInvoicesContext } from '@/contexts/invoices.context'
import React from 'react'
import NewInvoiceButton from '../newInvoiceButton/newInvoiceButton'
import { useFilterContext } from '@/contexts/filter.context'

function NavBar() {
    const {invoices} = useInvoicesContext()
    const {filterDisplayed, setFilterDisplayed} = useFilterContext()
    return (
    <div className={`mainMenu`}>
        <div className={`mainMenuLeft`}>
        <h1>Invoices</h1>
        {invoices.length === 0 ? <p>No invoices</p> :
        <p>There are {invoices.length} total invoices</p>
        }
        </div>

        <div className={`mainMenuRight`} onClick={(e) => {e.stopPropagation()}}>
        <div className='filterButton' onClick={() => {
            setFilterDisplayed(true)
            }}>
        <p>Filter <span>by status</span></p> 
        {filterDisplayed === true ? <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
        <path d="M1 6.22803L5.2279 2.00013L9.4558 6.22803" stroke="#7C5DFA" stroke-width="2"/>
        </svg> : 
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
            <path d="M1 1L5.2279 5.2279L9.4558 1" stroke="#7C5DFA" stroke-width="2"/>
        </svg>}
        </div>
        <div className={`filterMenu ${filterDisplayed && "flex"}`}>
        <div className="draftChoice">
            <input type="checkbox" name="draft" className="draftCheckbox"/>
            <p>Draft</p>
        </div>
        <div className="pendingChoice">
            <input  type="checkbox" name="pending" className="pendingCheckbox"/>
            <p>Pending</p>
        </div>
        <div className="paidChoice">
            <input  type="checkbox" name="paid" className="paidCheckbox"/>
            <p>Paid</p>
        </div>                
        </div>
            <NewInvoiceButton/>
        </div>
    </div>
    )
}

export default NavBar