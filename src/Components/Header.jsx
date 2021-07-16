import React from 'react'

const Header = ({ setScene }) => {
  return (
    <>
      <h1 onClick={() => setScene('classroom')}>EDA</h1>
    </>
  )
}

export default Header
