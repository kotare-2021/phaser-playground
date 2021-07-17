import React from 'react'

const Header = ({ setScene }) => {
  return (
    <>
    <div className="container">
      <h1 onClick={() => setScene('classroom')} className='heading-main clickable'>EDA</h1>
    </div>
    </>
  )
}

export default Header
