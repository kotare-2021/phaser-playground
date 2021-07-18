import React, { useState } from 'react'

const Landing = ({ setScene }) => {
  const [fadeOut, setFadeOut] = useState(null)

  const handleClick = () => {
    setFadeOut({
      visibility: 'hidden',
      opacity: 0,
      transition: 'visibility 0s 2s, opacity 2s linear'
    })
    setTimeout(() => setScene('classroom'), 2000)
  }
  return (
    <div style={fadeOut}>
      <div className='container'>
        <h1 className='heading-main'>EDA</h1>
      </div>
      <div className="container">
        <h4 onClick={handleClick} className='heading-sub clickable'>Everyone Dreams...<br />Always</h4>
      </div>
      <img src="/images/cloud.png" alt="a cloud" className='cloud-img-small'/>
      <img src="/images/cloud.png" alt="a cloud" className='cloud-img-small'/>
      <img src="/images/cloud.png" alt="a cloud" className='cloud-img-small'/>
      <img src="/images/cloud.png" alt="a cloud" className='cloud-img-small'/>
      <img src="/images/cloud.png" alt="a cloud" className='cloud-img-small'/>
    </div>
  )
}

export default Landing
