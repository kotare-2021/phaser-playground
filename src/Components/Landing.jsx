import React from 'react'

const Landing = ({ setScene }) => {
  return (
    <>
    <div className='container'>
    <div className="cloud">
    <h1 className='heading-main'>EDA</h1>
    <h4 onClick={() =>setScene('classroom')}>Everyone Dreams Always...</h4>
    </div>
      </div>
    </>
  )
}

export default Landing
