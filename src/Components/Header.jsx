import React from 'react'

const Header = ({ setScene }) => {
  return (
    <>
    <div className="container">
      <h1 onClick={() => setScene('classroom')} className='heading-main clickable'>E D A</h1>
    </div>
    </>
  )
}

export default Header
