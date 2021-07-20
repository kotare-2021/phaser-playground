import React from 'react'

const Footer = ({ setScene }) => {
  return (
    <>
    <div className="container-footer">
      <button onClick={() => setScene('classroom')} className='footer-button'><span className='span-text'>Wake up</span></button>
    </div>
    </>
  )
}

export default Footer
