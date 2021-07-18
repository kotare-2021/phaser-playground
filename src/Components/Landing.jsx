import React from 'react'

import Header from './Header'

const Landing = ({ setScene }) => {
  return (
    <>
      <div className='container'>
        <h1 className='heading-main'>EDA</h1>
      </div>
      <div className="container">
        <h4 onClick={() =>setScene('classroom')} className='heading-sub clickable'>Everyone Dreams...<br />Always</h4>
      </div>
      <img src="/images/cloud.png" alt="a cloud" className='cloud-img-small'/>
      <img src="/images/cloud.png" alt="a cloud" className='cloud-img-small'/>
      <img src="/images/cloud.png" alt="a cloud" className='cloud-img-small'/>
      <img src="/images/cloud.png" alt="a cloud" className='cloud-img-small'/>
      <img src="/images/cloud.png" alt="a cloud" className='cloud-img-small'/>
    </>
  )
}

export default Landing
