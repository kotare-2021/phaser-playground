import React from 'react'

const Header = ({ setScene }) => {
  return (
    <>
    <div className="container headerdiv">
      <img src="/images/cloud.png" alt="cloud" className='cloud cloudHeader1'/>
      <img src="/images/cloud.png" alt="cloud" className='cloud cloudHeader2'/>
      <h1 onClick={() => setScene('classroom')} className='heading-main clickable'>E D A</h1>
    </div>
    </>
  )
}

export default Header
