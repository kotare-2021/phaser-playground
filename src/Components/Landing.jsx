import React, { useState } from 'react'

import Header from './Header'

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
      <Header setScene={setScene}/>
      <div className="container">
        <h4 onClick={handleClick} className='heading-sub clickable'>Everyone Dreams...<br />Always</h4>
      </div>
      <img src="/images/cloud.png" alt="cloud" className='cloud cloud1'/>
      <img src="/images/cloud.png" alt="cloud" className='cloud cloud2'/>
      <img src="/images/cloud.png" alt="cloud" className='cloud cloud3'/>
    </div>
  )
}

export default Landing
