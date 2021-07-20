import React, { useState, useEffect } from 'react'

import Header from './Header'
import Clouds from './Clouds'

const Dream = ({ dream, setScene, fadeOut, setFadeOut }) => {
  const [removeFade, setRemoveFade] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setRemoveFade(true)
    }, 2000)
  }, [])

  return (
    <div>
      <Header setScene={setScene}/>
      <div className="container">
        <div className="scene">
          <iframe src={`./${dream}.html`} title={dream} className='game-frame' frameBorder='0'></iframe>
        <div className={!removeFade && 'fadeIn'}></div>
        </div>
        <Clouds />
      </div>
    </div>
  )
}

export default Dream
