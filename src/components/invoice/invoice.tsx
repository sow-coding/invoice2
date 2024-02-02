import { invoiceType } from '@/app/page';
import React from 'react'
import Pending from '../status/pending/pending';
import Draft from '../status/draft/draft';
import Paid from '../status/paid/paid';
import Link from 'next/link';

interface InvocieProps {
    invoiceData: invoiceType
}

function Invoice(props:InvocieProps) {
    const {invoiceData} = props
    return (
    <Link href={`/invoice/${invoiceData.id}`}>
        <div className={`invoice`}>
            <div className={`invoiceLeft`}>
            <h4><span>#</span>{invoiceData.id}</h4>
            <p>Due {invoiceData.invoiceDate}</p>
            <p>{invoiceData.name}</p>
            </div>
            <div className={`invoiceRight`}>
            <h2>{invoiceData.price} €</h2>
            {invoiceData.status === "pending" && <Pending />}
            {invoiceData.status === "draft" && <Draft />}
            {invoiceData.status === "paid" && <Paid />}
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none">
                <path d="M1 1L5 5L1 9" stroke="#7C5DFA" stroke-width="2" />
            </svg>
            </div>
        </div>
    </Link>
    );
}

export default Invoice