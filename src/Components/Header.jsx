import React from 'react'

const Header = ({ setScene }) => {
  return (
    <>
    <div className="container">
      {/* <div className="cloud">
        <img src="/images/logo.png" alt="EDA" onClick={() => setScene('classroom')} className='heading-logo clickable'/>
      </div> */}
      <h1 onClick={() => setScene('classroom')} className='heading-main clickable'>E D A</h1>
    </div>
    </>
  )
}

export default Header
