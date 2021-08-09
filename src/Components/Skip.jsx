import React from 'react'

const Footer = ({ setScene }) => {
  return (
    <>
    <div className="container-footer skip">
      <button onClick={() => setScene('classroom')} className='footer-button'><span className='span-text'>Skip</span></button>
    </div>
    </>
  )
}

export default Footer