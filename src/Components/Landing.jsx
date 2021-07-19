import React, { useState } from 'react'

import Header from './Header'
import Clouds from './Clouds'

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
      <div>
        <Header setScene={setScene}/>
        <div className="container">
          <h4 onClick={handleClick} className='heading-sub clickable'>Everyone Dreams...<br />Always</h4>
        </div>
      </div>
      <Clouds />
    </div>
  )
}

export default Landing
