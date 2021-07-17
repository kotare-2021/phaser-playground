import React from 'react'

const Landing = ({ setScene }) => {
  return (
    <>
    <div className='container'>
      <h1 className='heading-main'>EDA</h1>
    </div>
    <div className="container">
      <h4 onClick={() =>setScene('classroom')} className='heading-sub clickable'>Everyone Dreams Always...</h4>
    </div>
    <img src="/images/cloud.png" alt="a cloud" className='cloud-img-small'/>
    </>
  )
}

export default Landing
