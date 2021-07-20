import React, { useState, useEffect } from 'react'

import Header from './Header'
import Clouds from './Clouds'
import Footer from './Footer'

const Dream = ({ dream, setScene }) => {
  const [removeFade, setRemoveFade] = useState(false)
  const [fadeOut, setFadeOut] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setRemoveFade(true)
    }, 2000)
  }, [])

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
      <div onClick={handleClick}>
      <Header setScene={setScene}/>
      </div>
      <div className="container">
        <div className="scene">
          <iframe src={`./${dream}.html`} title={dream} className='game-frame' frameBorder='0'></iframe>
        <div className={!removeFade && 'fadeIn'}></div>
        </div>
        <Clouds />
      </div>
    <div>
      <Footer setScene={setScene}/>
    </div>

    </div>
    

  )
}

export default Dream
