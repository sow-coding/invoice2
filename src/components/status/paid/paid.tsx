import React from 'react'

function Paid() {
  return (
    <div className={`paid`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
        <circle cx="4" cy="4" r="4" fill="#33D69F"/>
        </svg>        
        <h1 className={`paidText`}>Paid</h1>
    </div>
  )
}

export default Paid