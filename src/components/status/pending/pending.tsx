import React from 'react'

function Pending() {
  return (
    <div className={`pending`}>
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
    <circle cx="4" cy="4" r="4" fill="#FF8F00"/>
    </svg>       
        <h1 className={`draftPending`}>Pending</h1>
    </div>
  )
}

export default Pending